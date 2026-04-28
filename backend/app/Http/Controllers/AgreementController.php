<?php

namespace App\Http\Controllers;

use App\Models\Agreement;
use App\Models\House;
use App\Models\RequestRental;
use App\Models\Notification;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AgreementController extends Controller
{
    // ========== CREATE OFFLINE AGREEMENT ==========
    public function store(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'house_id' => 'required|exists:houses,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'agreed_price' => 'required|numeric|min:0'
        ]);

        $house = House::findOrFail($request->house_id);

        // Check if user is involved (renter or owner)
        $hasRequest = RequestRental::where('house_id', $request->house_id)
            ->where('renter_id', $user->id)
            ->where('status', 'accepted')
            ->exists();

        if (!$hasRequest && $house->owner_id !== $user->id) {
            return response()->json([
                'message' => 'You are not authorized for this agreement'
            ], 403);
        }

        // Find renter
        $rentalRequest = RequestRental::where('house_id', $request->house_id)
            ->where('status', 'accepted')
            ->first();

        if (!$rentalRequest) {
            return response()->json([
                'message' => 'No active rental request found'
            ], 404);
        }

        $agreement = Agreement::create([
            'renter_id' => $rentalRequest->renter_id,
            'house_id' => $request->house_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'agreed_price' => $request->agreed_price,
            'status' => 'pending'
        ]);

        // Notify both parties
        Notification::create([
            'user_id' => $rentalRequest->renter_id,
            'message' => "Agreement created for '{$house->title}'. Please confirm.",
            'is_read' => false
        ]);

        Notification::create([
            'user_id' => $house->owner_id,
            'message' => "Agreement created for '{$house->title}'. Please confirm.",
            'is_read' => false
        ]);

        return response()->json([
            'message' => 'Agreement created',
            'agreement' => $agreement
        ], 201);
    }

    // ========== CONFIRM AGREEMENT ==========
    public function confirm(Request $request, $id)
    {
        $agreement = Agreement::with('house')->findOrFail($id);
        $user = $request->user();

        if ($agreement->renter_id !== $user->id && $agreement->house->owner_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $agreement->update(['status' => 'confirmed']);

        // Mark house as rented
        $agreement->house->update(['status' => 'rented']);

        return response()->json([
            'message' => 'Agreement confirmed',
            'agreement' => $agreement
        ]);
    }

    // ========== GET MY AGREEMENTS ==========
    public function myAgreements(Request $request)
    {
        $user = $request->user();

        if ($user->isRenter()) {
            $agreements = Agreement::with('house')
                ->where('renter_id', $user->id)
                ->latest()
                ->paginate(10);
        } else {
            $agreements = Agreement::with('house', 'renter')
                ->whereHas('house', function($query) use ($user) {
                    $query->where('owner_id', $user->id);
                })
                ->latest()
                ->paginate(10);
        }

        return response()->json($agreements);
    }
}