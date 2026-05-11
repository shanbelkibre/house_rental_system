<?php

namespace App\Http\Controllers;

use App\Models\RequestRental;
use App\Models\House;
use App\Models\Notification;
use Illuminate\Http\Request;

class RequestController extends Controller
{
    // ========== SEND RENTAL REQUEST ==========
    public function store(Request $request)
    {
        $user = $request->user();

        // Only renters can send requests
        if (!$user->isRenter()) {
            return response()->json([
                'message' => 'Only renters can send rental requests'
            ], 403);
        }

        $request->validate([
            'house_id' => 'required|exists:houses,id',
            'message' => 'nullable|string'
        ]);

        $house = House::findOrFail($request->house_id);

        // Check if house is available
        if ($house->status !== 'available') {
            return response()->json([
                'message' => 'This house is no longer available'
            ], 400);
        }

        // Check if already requested
        $existing = RequestRental::where('renter_id', $user->id)
            ->where('house_id', $request->house_id)
            ->whereIn('status', ['pending', 'accepted'])
            ->first();

        if ($existing) {
            return response()->json([
                'message' => 'You already sent a request for this house'
            ], 400);
        }

        $rentalRequest = RequestRental::create([
            'renter_id' => $user->id,
            'house_id' => $request->house_id,
            'message' => $request->message,
            'status' => 'pending'
        ]);

        // Notify owner
        Notification::create([
            'user_id' => $house->owner_id,
            'message' => "{$user->name} requested to rent your house '{$house->title}'",
            'is_read' => false
        ]);

        return response()->json([
            'message' => 'Rental request sent',
            'request' => $rentalRequest
        ], 201);
    }

    // ========== UPDATE REQUEST STATUS (Accept/Reject) ==========
    public function update(Request $request, $id)
    {
        $rentalRequest = RequestRental::with('house')->findOrFail($id);
        $user = $request->user();

        // Only owner can update
        if ($rentalRequest->house->owner_id !== $user->id) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $request->validate([
            'status' => 'required|in:accepted,rejected'
        ]);

        $oldStatus = $rentalRequest->status;
        $rentalRequest->update(['status' => $request->status]);

        // Keep house available until agreement is confirmed

        // Notify renter
        $statusText = $request->status === 'accepted' ? 'accepted' : 'rejected';
        Notification::create([
            'user_id' => $rentalRequest->renter_id,
            'message' => "Your request for '{$rentalRequest->house->title}' was {$statusText}",
            'is_read' => false
        ]);

        return response()->json([
            'message' => "Request {$request->status}",
            'request' => $rentalRequest
        ]);
    }

    // ========== CANCEL/DELETE REQUEST ==========
    public function destroy(Request $request, $id)
    {
        $rentalRequest = RequestRental::with('house')->findOrFail($id);
        $user = $request->user();

        // Only the renter who made the request can cancel it
        if ($rentalRequest->renter_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $rentalRequest->delete();

        return response()->json(['message' => 'Request cancelled successfully']);
    }

    // ========== GET RENTER'S REQUESTS ==========
    public function myRequests(Request $request)
    {
        $requests = RequestRental::with('house', 'house.owner')
            ->where('renter_id', $request->user()->id)
            ->latest()
            ->paginate(10);

        return response()->json($requests);
    }

    // ========== GET OWNER'S REQUESTS ==========
    public function ownerRequests(Request $request)
    {
        $requests = RequestRental::with('house', 'renter')
            ->whereHas('house', function($query) use ($request) {
                $query->where('owner_id', $request->user()->id);
            })
            ->latest()
            ->paginate(10);

        return response()->json($requests);
    }
}