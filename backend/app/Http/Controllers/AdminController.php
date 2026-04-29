<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\House;
use App\Models\RequestRental;
use App\Models\Payment;
use App\Models\Subscription;
use App\Models\SubscriptionPlan;
use App\Models\AdminReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    // ========== MIDDLEWARE to ensure admin ==========
    public function __construct()
    {
        $this->middleware('auth:sanctum');
        $this->middleware(function ($request, $next) {
            if (!$request->user()->isAdmin()) {
                return response()->json(['message' => 'Admin access required'], 403);
            }
            return $next($request);
        });
    }

    // ========== DASHBOARD STATS ==========
    public function dashboard()
    {
        $stats = [
            'total_users' => User::count(),
            'total_owners' => User::where('role', 'owner')->count(),
            'total_renters' => User::where('role', 'renter')->count(),
            'total_houses' => House::count(),
            'pending_houses' => House::where('is_approved', false)->count(),
            'available_houses' => House::where('status', 'available')->count(),
            'rented_houses' => House::where('status', 'rented')->count(),
            'total_requests' => RequestRental::count(),
            'pending_requests' => RequestRental::where('status', 'pending')->count(),
            'total_payments' => Payment::sum('amount'),
            'active_subscriptions' => Subscription::where('status', 'active')->count()
        ];

        return response()->json($stats);
    }

    // ========== GET ALL USERS ==========
    public function users(Request $request)
    {
        $perPage = (int) $request->get('per_page', 20);
        if ($perPage < 1) $perPage = 1;
        if ($perPage > 50) $perPage = 50;

        $query = User::query()->withCount('houses');

        if ($request->filled('role')) {
            $role = $request->get('role');
            if (in_array($role, ['owner', 'renter', 'admin'], true)) {
                $query->where('role', $role);
            }
        }

        if ($request->filled('verified')) {
            $verified = filter_var($request->get('verified'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if (!is_null($verified)) {
                $query->where('is_verified', $verified);
            }
        }

        if ($request->filled('suspended')) {
            $suspended = filter_var($request->get('suspended'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if (!is_null($suspended)) {
                $query->where('is_suspended', $suspended);
            }
        }

        if ($request->filled('q')) {
            $q = $request->get('q');
            $query->where(function ($sub) use ($q) {
                $sub->where('name', 'like', "%{$q}%")
                    ->orWhere('email', 'like', "%{$q}%");
            });
        }

        $users = $query->latest()->paginate($perPage);
        return response()->json($users);
    }

    // ========== SUSPEND / UNSUSPEND USER ==========
    public function suspendUser(Request $request, $id)
    {
        $request->validate([
            'is_suspended' => 'required|boolean'
        ]);

        $user = User::findOrFail($id);

        if (auth()->id() === $user->id) {
            return response()->json(['message' => 'Cannot suspend yourself'], 400);
        }

        if ($user->role === 'admin') {
            return response()->json(['message' => 'Cannot suspend an admin user'], 400);
        }

        $user->update(['is_suspended' => (bool) $request->is_suspended]);

        return response()->json([
            'message' => $user->is_suspended ? 'User suspended' : 'User unsuspended',
            'user' => $user
        ]);
    }

    // ========== VERIFY USER ==========
    public function verifyUser($id)
    {
        $user = User::findOrFail($id);
        $user->update(['is_verified' => true]);

        return response()->json([
            'message' => 'User verified successfully',
            'user' => $user
        ]);
    }

    // ========== SUSPEND/DELETE USER ==========
    public function deleteUser($id)
    {
        $user = User::findOrFail($id);

        // Don't allow deleting yourself
        if (auth()->id() === $user->id) {
            return response()->json(['message' => 'Cannot delete yourself'], 400);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted']);
    }

    // ========== GET PENDING HOUSES ==========
    public function pendingHouses()
    {
        $houses = House::with('owner', 'images')
            ->where('is_approved', false)
            ->latest()
            ->paginate(20);

        return response()->json($houses);
    }

    // ========== APPROVE HOUSE ==========
    public function approveHouse($id)
    {
        $house = House::findOrFail($id);
        $house->update(['is_approved' => true]);

        // Notify owner
        \App\Models\Notification::create([
            'user_id' => $house->owner_id,
            'message' => "Your house '{$house->title}' has been approved",
            'is_read' => false
        ]);

        return response()->json([
            'message' => 'House approved',
            'house' => $house
        ]);
    }

    // ========== REJECT HOUSE ==========
    public function rejectHouse($id)
    {
        $house = House::findOrFail($id);

        // Notify owner
        \App\Models\Notification::create([
            'user_id' => $house->owner_id,
            'message' => "Your house '{$house->title}' was rejected. Please check requirements.",
            'is_read' => false
        ]);

        $house->delete();

        return response()->json(['message' => 'House rejected and removed']);
    }

    // ========== REMOVE HOUSE LISTING (Admin) ==========
    public function removeHouse(Request $request, $id)
    {
        $request->validate([
            'reason' => 'nullable|string|max:200'
        ]);

        $house = House::findOrFail($id);
        $reason = $request->get('reason');

        $msg = "Your house '{$house->title}' was removed by admin";
        if ($reason) {
            $msg .= ": {$reason}";
        }

        \App\Models\Notification::create([
            'user_id' => $house->owner_id,
            'message' => $msg,
            'is_read' => false
        ]);

        $house->delete();

        return response()->json(['message' => 'House removed']);
    }

    // ========== GET ALL HOUSES (Admin view) ==========
    public function allHouses(Request $request)
    {
        $houses = House::with('owner', 'images')
            ->latest()
            ->paginate(20);

        return response()->json($houses);
    }

    // ========== GENERATE REPORT ==========
    public function report(Request $request)
    {
        $startDate = $request->get('start_date', now()->subMonth());
        $endDate = $request->get('end_date', now());

        return response()->json($this->buildReportData($startDate, $endDate));
    }

    protected function buildReportData($startDate, $endDate): array
    {
        $dailyRevenue = Payment::select(
                DB::raw('DATE(created_at) as date'),
                DB::raw('SUM(amount) as total')
            )
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(created_at)'))
            ->orderBy('date')
            ->get();

        $paymentBreakdown = Payment::select('payment_method', DB::raw('SUM(amount) as total'))
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy('payment_method')
            ->orderByDesc('total')
            ->get();

        return [
            'period' => [
                'start' => $startDate,
                'end' => $endDate
            ],
            'users_registered' => User::whereBetween('created_at', [$startDate, $endDate])->count(),
            'houses_listed' => House::whereBetween('created_at', [$startDate, $endDate])->count(),
            'requests_made' => RequestRental::whereBetween('created_at', [$startDate, $endDate])->count(),
            'subscription_revenue' => Payment::whereBetween('created_at', [$startDate, $endDate])->sum('amount'),
            'payment_methods' => $paymentBreakdown,
            'daily_revenue' => $dailyRevenue,
            'active_users' => User::where('created_at', '<=', $endDate)->count(),
            'total_houses' => House::count(),
        ];
    }

    // ========== SUBSCRIPTION PLANS (Admin) ==========
    public function subscriptionPlans(Request $request)
    {
        $perPage = (int) $request->get('per_page', 20);
        if ($perPage < 1) $perPage = 1;
        if ($perPage > 50) $perPage = 50;

        $query = SubscriptionPlan::query()->latest();

        if ($request->filled('active')) {
            $active = filter_var($request->get('active'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if (!is_null($active)) {
                $query->where('is_active', $active);
            }
        }

        return response()->json($query->paginate($perPage));
    }

    public function createSubscriptionPlan(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:80',
            'price' => 'required|numeric|min:0',
            'duration_days' => 'required|integer|min:1|max:3650',
            'is_active' => 'sometimes|boolean',
        ]);

        $plan = SubscriptionPlan::create($data);

        return response()->json([
            'message' => 'Plan created',
            'plan' => $plan,
        ], 201);
    }

    public function updateSubscriptionPlan(Request $request, $id)
    {
        $plan = SubscriptionPlan::findOrFail($id);
        $data = $request->validate([
            'name' => 'sometimes|required|string|max:80',
            'price' => 'sometimes|required|numeric|min:0',
            'duration_days' => 'sometimes|required|integer|min:1|max:3650',
            'is_active' => 'sometimes|boolean',
        ]);

        $plan->update($data);

        return response()->json([
            'message' => 'Plan updated',
            'plan' => $plan,
        ]);
    }

    public function deleteSubscriptionPlan($id)
    {
        $plan = SubscriptionPlan::findOrFail($id);
        $plan->delete();
        return response()->json(['message' => 'Plan deleted']);
    }

    // ========== SAVED REPORTS (Admin) ==========
    public function reports(Request $request)
    {
        $perPage = (int) $request->get('per_page', 20);
        if ($perPage < 1) $perPage = 1;
        if ($perPage > 50) $perPage = 50;

        return response()->json(
            AdminReport::with('user:id,name,email')->latest()->paginate($perPage)
        );
    }

    public function createReport(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:80',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        $startDate = $data['start_date'] ?? now()->subMonth();
        $endDate = $data['end_date'] ?? now();
        $payload = $this->buildReportData($startDate, $endDate);

        $report = AdminReport::create([
            'name' => $data['name'],
            'start_date' => $startDate,
            'end_date' => $endDate,
            'generated_by' => $request->user()->id,
            'payload' => $payload,
        ]);

        return response()->json([
            'message' => 'Report saved',
            'report' => $report,
        ], 201);
    }

    public function showReport($id)
    {
        $report = AdminReport::with('user:id,name,email')->findOrFail($id);
        return response()->json($report);
    }
}