<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\RequestRental;
use App\Models\House;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // ========== ADD REVIEW ==========
    public function store(Request $request)
    {
        $user = $request->user();

        // Only renters can review
        if (!$user->isRenter()) {
            return response()->json([
                'message' => 'Only renters can leave reviews'
            ], 403);
        }

        $request->validate([
            'house_id' => 'required|exists:houses,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string'
        ]);

        $house = House::findOrFail($request->house_id);

        // Check if user has rented this house via request or agreement
        $hasRentedRequest = RequestRental::where('renter_id', $user->id)
            ->where('house_id', $request->house_id)
            ->where('status', 'accepted')
            ->exists();

        $hasAgreement = \App\Models\Agreement::where('renter_id', $user->id)
            ->where('house_id', $request->house_id)
            ->whereIn('status', ['confirmed', 'terminated'])
            ->exists();

        if (!$hasRentedRequest && !$hasAgreement) {
            return response()->json([
                'message' => 'You can only review houses you have rented'
            ], 403);
        }

        // Check if already reviewed
        $existing = Review::where('renter_id', $user->id)
            ->where('house_id', $request->house_id)
            ->first();

        if ($existing) {
            return response()->json([
                'message' => 'You already reviewed this house'
            ], 400);
        }

        $review = Review::create([
            'renter_id' => $user->id,
            'house_id' => $request->house_id,
            'rating' => $request->rating,
            'comment' => $request->comment
        ]);

        return response()->json([
            'message' => 'Review submitted',
            'review' => $review
        ], 201);
    }

    // ========== GET HOUSE REVIEWS ==========
    public function houseReviews($houseId)
    {
        $reviews = Review::with('renter')
            ->where('house_id', $houseId)
            ->latest()
            ->paginate(10);

        // Calculate average rating
        $avgRating = Review::where('house_id', $houseId)->avg('rating');

        return response()->json([
            'average_rating' => round($avgRating, 1),
            'total_reviews' => $reviews->total(),
            'reviews' => $reviews
        ]);
    }
}

