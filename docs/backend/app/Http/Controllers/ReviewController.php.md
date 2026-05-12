# ReviewController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\Review;
6 use App\Models\RequestRental;
7 use App\Models\House;
8 use Illuminate\Http\Request;
9 
10 class ReviewController extends Controller
11 {
12     // ========== ADD REVIEW ==========
13     public function store(Request $request)
14     {
15         $user = $request->user();
16 
17         // Only renters can review
18         if (!$user->isRenter()) {
19             return response()->json([
20                 'message' => 'Only renters can leave reviews'
21             ], 403);
22         }
23 
24         $request->validate([
25             'house_id' => 'required|exists:houses,id',
26             'rating' => 'required|integer|min:1|max:5',
27             'comment' => 'nullable|string'
28         ]);
29 
30         $house = House::findOrFail($request->house_id);
31 
32         // Only allow review after a confirmed agreement
33         $hasAgreement = \App\Models\Agreement::where('renter_id', $user->id)
34             ->where('house_id', $request->house_id)
35             ->where('status', 'confirmed')
36             ->exists();
37 
38         if (!$hasAgreement) {
39             return response()->json([
40                 'message' => 'You can only review houses you have rented'
41             ], 403);
42         }
43 
44         // Check if already reviewed
45         $existing = Review::where('renter_id', $user->id)
46             ->where('house_id', $request->house_id)
47             ->first();
48 
49         if ($existing) {
50             return response()->json([
51                 'message' => 'You already reviewed this house'
52             ], 400);
53         }
54 
55         $review = Review::create([
56             'renter_id' => $user->id,
57             'house_id' => $request->house_id,
58             'rating' => $request->rating,
59             'comment' => $request->comment
60         ]);
61 
62         return response()->json([
63             'message' => 'Review submitted',
64             'review' => $review
65         ], 201);
66     }
67 
68     // ========== GET HOUSE REVIEWS ==========
69     public function houseReviews($houseId)
70     {
71         $reviews = Review::with('renter')
72             ->where('house_id', $houseId)
73             ->latest()
74             ->paginate(10);
75 
76         // Calculate average rating
77         $avgRating = Review::where('house_id', $houseId)->avg('rating');
78 
79         return response()->json([
80             'average_rating' => round($avgRating, 1),
81             'total_reviews' => $reviews->total(),
82             'reviews' => $reviews
83         ]);
84     }
85 }
86 
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\Review
- Line 6: Imports a dependency used in this file: App\Models\RequestRental
- Line 7: Imports a dependency used in this file: App\Models\House
- Line 8: Imports a dependency used in this file: Illuminate\Http\Request
- Line 9: Blank line for separation.
- Line 10: Defines the ReviewController class.
- Line 11: Implements application logic: {
- Line 12: ========== add review ==========
- Line 13: Defines the store function.
- Line 14: Implements application logic: {
- Line 15: Implements application logic: $user = $request->user();
- Line 16: Blank line for separation.
- Line 17: Only renters can review
- Line 18: Adds a conditional branch: if (!$user->isRenter()) {
- Line 19: Returns a JSON HTTP response to the client.
- Line 20: Implements application logic: 'message' => 'Only renters can leave reviews'
- Line 21: Implements application logic: ], 403);
- Line 22: Implements application logic: }
- Line 23: Blank line for separation.
- Line 24: Implements application logic: $request->validate([
- Line 25: Implements application logic: 'house_id' => 'required|exists:houses,id',
- Line 26: Implements application logic: 'rating' => 'required|integer|min:1|max:5',
- Line 27: Implements application logic: 'comment' => 'nullable|string'
- Line 28: Implements application logic: ]);
- Line 29: Blank line for separation.
- Line 30: Implements application logic: $house = House::findOrFail($request->house_id);
- Line 31: Blank line for separation.
- Line 32: Only allow review after a confirmed agreement
- Line 33: Implements application logic: $hasAgreement = \App\Models\Agreement::where('renter_id', $user->id)
- Line 34: Implements application logic: ->where('house_id', $request->house_id)
- Line 35: Implements application logic: ->where('status', 'confirmed')
- Line 36: Implements application logic: ->exists();
- Line 37: Blank line for separation.
- Line 38: Adds a conditional branch: if (!$hasAgreement) {
- Line 39: Returns a JSON HTTP response to the client.
- Line 40: Implements application logic: 'message' => 'You can only review houses you have rented'
- Line 41: Implements application logic: ], 403);
- Line 42: Implements application logic: }
- Line 43: Blank line for separation.
- Line 44: Check if already reviewed
- Line 45: Implements application logic: $existing = Review::where('renter_id', $user->id)
- Line 46: Implements application logic: ->where('house_id', $request->house_id)
- Line 47: Implements application logic: ->first();
- Line 48: Blank line for separation.
- Line 49: Adds a conditional branch: if ($existing) {
- Line 50: Returns a JSON HTTP response to the client.
- Line 51: Implements application logic: 'message' => 'You already reviewed this house'
- Line 52: Implements application logic: ], 400);
- Line 53: Implements application logic: }
- Line 54: Blank line for separation.
- Line 55: Implements application logic: $review = Review::create([
- Line 56: Implements application logic: 'renter_id' => $user->id,
- Line 57: Implements application logic: 'house_id' => $request->house_id,
- Line 58: Implements application logic: 'rating' => $request->rating,
- Line 59: Implements application logic: 'comment' => $request->comment
- Line 60: Implements application logic: ]);
- Line 61: Blank line for separation.
- Line 62: Returns a JSON HTTP response to the client.
- Line 63: Implements application logic: 'message' => 'Review submitted',
- Line 64: Implements application logic: 'review' => $review
- Line 65: Implements application logic: ], 201);
- Line 66: Implements application logic: }
- Line 67: Blank line for separation.
- Line 68: ========== get house reviews ==========
- Line 69: Defines the houseReviews function.
- Line 70: Implements application logic: {
- Line 71: Implements application logic: $reviews = Review::with('renter')
- Line 72: Implements application logic: ->where('house_id', $houseId)
- Line 73: Implements application logic: ->latest()
- Line 74: Implements application logic: ->paginate(10);
- Line 75: Blank line for separation.
- Line 76: Calculate average rating
- Line 77: Implements application logic: $avgRating = Review::where('house_id', $houseId)->avg('rating');
- Line 78: Blank line for separation.
- Line 79: Returns a JSON HTTP response to the client.
- Line 80: Implements application logic: 'average_rating' => round($avgRating, 1),
- Line 81: Implements application logic: 'total_reviews' => $reviews->total(),
- Line 82: Implements application logic: 'reviews' => $reviews
- Line 83: Implements application logic: ]);
- Line 84: Implements application logic: }
- Line 85: Implements application logic: }
- Line 86: Blank line for separation.
