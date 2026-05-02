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

        // Filter by title (Name)
        if ($request->has('title') && $request->title !== '') {
            $query->where('title', 'like', '%' . $request->title . '%');
        }

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
            'rooms' => 'required|integer|min:1',
            'bathrooms' => 'required|integer|min:1',
            'area' => 'nullable|integer|min:1',
            'type' => 'required|string',
            'amenities' => 'nullable|array',
            'availability_date' => 'nullable|date'
        ]);

        $house = House::create([
            'owner_id' => $user->id,
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'location' => $request->location,
            'rooms' => $request->rooms,
            'bathrooms' => $request->bathrooms,
            'area' => $request->area,
            'type' => $request->type,
            'amenities' => $request->amenities,
            'availability_date' => $request->availability_date,
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
            'bathrooms' => 'sometimes|integer|min:1',
            'area' => 'nullable|integer|min:1',
            'type' => 'sometimes|string',
            'amenities' => 'nullable|array',
            'availability_date' => 'nullable|date',
            'status' => 'sometimes|in:available,rented'
        ]);

        $house->update($request->only([
            'title', 'description', 'price', 'location', 'rooms', 'status',
            'bathrooms', 'area', 'type', 'amenities', 'availability_date'
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

    // ========== UPLOAD MULTIPLE HOUSE IMAGES ==========
    public function uploadMultipleImages(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)->findOrFail($id);

        $request->validate([
            'images' => 'required|array',
            'images.*.file' => 'required|image|mimes:jpeg,png,jpg|max:5120'
        ]);

        $uploadedImages = [];
        foreach ($request->images as $imageData) {
            $path = $imageData['file']->store('houses', 'public');
            
            $image = $house->images()->create([
                'image_path' => $path
            ]);
            $uploadedImages[] = $image;
        }

        return response()->json([
            'message' => 'Images uploaded successfully',
            'images' => $uploadedImages
        ], 201);
    }

    // ========== UPLOAD LICENSE / KARTA ==========
    public function uploadLicense(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)->findOrFail($id);

        $request->validate([
            'license_image' => 'required|file|mimes:jpeg,png,jpg,pdf|max:5120'
        ]);

        if ($house->license_image) {
            Storage::disk('public')->delete($house->license_image);
        }

        $path = $request->file('license_image')->store('houses/licenses', 'public');
        $house->update(['license_image' => $path]);

        return response()->json([
            'message' => 'License document uploaded successfully',
            'house' => $house
        ]);
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