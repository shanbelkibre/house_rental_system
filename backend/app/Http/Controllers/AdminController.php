<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\House;
use App\Models\RequestRental;
use App\Models\Payment;
use App\Models\Subscription;
use Illuminate\Http\Request;

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
        $users = User::latest()->paginate(20);
        return response()->json($users);
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
        $houses = House::with('owner')
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

        $report = [
            'period' => [
                'start' => $startDate,
                'end' => $endDate
            ],
            'users_registered' => User::whereBetween('created_at', [$startDate, $endDate])->count(),
            'houses_listed' => House::whereBetween('created_at', [$startDate, $endDate])->count(),
            'requests_made' => RequestRental::whereBetween('created_at', [$startDate, $endDate])->count(),
            'subscription_revenue' => Payment::whereBetween('created_at', [$startDate, $endDate])->sum('amount'),
            'active_users' => User::where('created_at', '<=', $endDate)->count(),
            'total_houses' => House::count(),
        ];

        return response()->json($report);
    }
}