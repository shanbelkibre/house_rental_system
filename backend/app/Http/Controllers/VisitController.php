<?php

namespace App\Http\Controllers;

use App\Models\Visit;
use App\Models\House;
use App\Models\Notification;
use Illuminate\Http\Request;
use Carbon\Carbon;

class VisitController extends Controller
{
    // ========== SCHEDULE VISIT ==========
    public function schedule(Request $request)
    {
        $user = $request->user();

        if (!$user->isRenter()) {
            return response()->json([
                'message' => 'Only renters can schedule visits'
            ], 403);
        }

        $request->validate([
            'house_id' => 'required|exists:houses,id',
            'visit_date' => 'required|date|after:now'
        ]);

        $house = House::findOrFail($request->house_id);

        // Check if house is available
        if ($house->status !== 'available') {
            return response()->json([
                'message' => 'This house is not available for visits'
            ], 400);
        }

        $visit = Visit::create([
            'renter_id' => $user->id,
            'house_id' => $request->house_id,
            'visit_date' => $request->visit_date,
            'status' => 'pending'
        ]);

        // Notify owner
        $visitDate = Carbon::parse($request->visit_date)->format('M d, Y h:i A');
        Notification::create([
            'user_id' => $house->owner_id,
            'message' => "{$user->name} requested a house visit on {$visitDate}",
            'is_read' => false
        ]);

        return response()->json([
            'message' => 'Visit scheduled',
            'visit' => $visit
        ], 201);
    }

    // ========== CONFIRM VISIT (Owner) ==========
    public function confirm(Request $request, $id)
    {
        $visit = Visit::with('house')->findOrFail($id);
        $user = $request->user();

        if ($visit->house->owner_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'status' => 'required|in:confirmed,completed'
        ]);

        $visit->update(['status' => $request->status]);

        // Notify renter
        Notification::create([
            'user_id' => $visit->renter_id,
            'message' => "Your visit for '{$visit->house->title}' has been {$request->status}",
            'is_read' => false
        ]);

        return response()->json([
            'message' => "Visit {$request->status}",
            'visit' => $visit
        ]);
    }

    // ========== GET MY VISITS ==========
    public function myVisits(Request $request)
    {
        $user = $request->user();

        if ($user->isRenter()) {
            $visits = Visit::with('house')
                ->where('renter_id', $user->id)
                ->latest()
                ->paginate(10);
        } else {
            $visits = Visit::with('house', 'renter')
                ->whereHas('house', function($query) use ($user) {
                    $query->where('owner_id', $user->id);
                })
                ->latest()
                ->paginate(10);
        }

        return response()->json($visits);
    }
}