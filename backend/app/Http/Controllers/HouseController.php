<?php

namespace App\Http\Controllers;

use App\Models\House;
use App\Models\HouseImage;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HouseController extends Controller
{
    // ========== LIST ALL AVAILABLE HOUSES ==========
    public function index(Request $request)
    {
        $query = House::with('owner', 'images')
            ->where('is_approved', true)
            ->where('status', 'available');

        // Filter by price
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        // Filter by rooms
        if ($request->has('rooms')) {
            $query->where('rooms', $request->rooms);
        }

        // Filter by location (Kifle Ketema / Kebele)
        if ($request->has('location')) {
            $query->where('location', 'like', '%' . $request->location . '%');
        }

        // Filter by status
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Sort by latest
        if ($request->has('sort') && $request->sort == 'latest') {
            $query->latest();
        }

        $houses = $query->latest()->paginate(12);

        return response()->json($houses);
    }

    // ========== SHOW SINGLE HOUSE ==========
    public function show($id)
    {
        $house = House::with('owner', 'images', 'reviews.renter')
            ->findOrFail($id);

        // Increment view count (optional)
        // $house->increment('views');

        return response()->json($house);
    }

    // ========== CREATE NEW HOUSE (Owner only, with subscription check) ==========
    public function store(Request $request)
    {
        $user = $request->user();

        // Check if user is owner
        if (!$user->isOwner()) {
            return response()->json([
                'message' => 'Only house owners can post houses'
            ], 403);
        }

        // Check subscription
        if (!$user->hasActiveSubscription()) {
            return response()->json([
                'message' => 'You need an active subscription to post houses. Please subscribe first.'
            ], 403);
        }

        $request->validate([
            'title' => 'required|string|max:150',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'location' => 'required|string',
            'rooms' => 'required|integer|min:1'
        ]);

        $house = House::create([
            'owner_id' => $user->id,
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'location' => $request->location,
            'rooms' => $request->rooms,
            'status' => 'available',
            'is_approved' => false  // Admin must approve
        ]);

        // Notify admin
        Notification::create([
            'user_id' => 1, // Admin ID
            'message' => "New house '{$house->title}' needs approval",
            'is_read' => false
        ]);

        return response()->json([
            'message' => 'House submitted for approval',
            'house' => $house
        ], 201);
    }

    // ========== UPDATE HOUSE ==========
    public function update(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:150',
            'description' => 'sometimes|string',
            'price' => 'sometimes|numeric|min:0',
            'location' => 'sometimes|string',
            'rooms' => 'sometimes|integer|min:1',
            'status' => 'sometimes|in:available,rented'
        ]);

        $house->update($request->only([
            'title', 'description', 'price', 'location', 'rooms', 'status'
        ]));

        return response()->json([
            'message' => 'House updated',
            'house' => $house
        ]);
    }

    // ========== DELETE HOUSE ==========
    public function destroy(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($id);

        // Delete associated images
        foreach ($house->images as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        $house->delete();

        return response()->json([
            'message' => 'House deleted successfully'
        ]);
    }

    // ========== UPLOAD HOUSE IMAGES ==========
    public function uploadImage(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($id);

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $path = $request->file('image')->store('houses', 'public');

        $image = $house->images()->create([
            'image_path' => $path
        ]);

        return response()->json([
            'message' => 'Image uploaded',
            'image' => $image
        ], 201);
    }

    // ========== DELETE HOUSE IMAGE ==========
    public function deleteImage(Request $request, $houseId, $imageId)
    {
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($houseId);

        $image = $house->images()->findOrFail($imageId);

        Storage::disk('public')->delete($image->image_path);
        $image->delete();

        return response()->json([
            'message' => 'Image deleted'
        ]);
    }

    // ========== GET OWNER'S HOUSES ==========
    public function myHouses(Request $request)
    {
        $houses = House::with('images')
            ->where('owner_id', $request->user()->id)
            ->latest()
            ->paginate(10);

        return response()->json($houses);
    }
}