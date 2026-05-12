# AgreementController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\Agreement;
6 use App\Models\House;
7 use App\Models\RequestRental;
8 use App\Models\Notification;
9 use Illuminate\Http\Request;
10 use Carbon\Carbon;
11 
12 class AgreementController extends Controller
13 {
14     // ========== CREATE OFFLINE AGREEMENT ==========
15     public function store(Request $request)
16     {
17         $user = $request->user();
18 
19         $request->validate([
20             'house_id' => 'required|exists:houses,id',
21             'start_date' => 'required|date',
22             'end_date' => 'required|date|after:start_date',
23             'agreed_price' => 'required|numeric|min:0'
24         ]);
25 
26         $house = House::findOrFail($request->house_id);
27 
28         // Check if user is involved (renter or owner)
29         $hasRequest = RequestRental::where('house_id', $request->house_id)
30             ->where('renter_id', $user->id)
31             ->where('status', 'accepted')
32             ->exists();
33 
34         if (!$hasRequest && $house->owner_id !== $user->id) {
35             return response()->json([
36                 'message' => 'You are not authorized for this agreement'
37             ], 403);
38         }
39 
40         // Find renter
41         $rentalRequest = RequestRental::where('house_id', $request->house_id)
42             ->where('status', 'accepted')
43             ->first();
44 
45         if (!$rentalRequest) {
46             return response()->json([
47                 'message' => 'No active rental request found'
48             ], 404);
49         }
50 
51         $agreement = Agreement::create([
52             'renter_id' => $rentalRequest->renter_id,
53             'house_id' => $request->house_id,
54             'start_date' => $request->start_date,
55             'end_date' => $request->end_date,
56             'agreed_price' => $request->agreed_price,
57             'status' => 'pending'
58         ]);
59 
60         // Notify both parties
61         Notification::create([
62             'user_id' => $rentalRequest->renter_id,
63             'message' => "Agreement created for '{$house->title}'. Please confirm.",
64             'is_read' => false
65         ]);
66 
67         Notification::create([
68             'user_id' => $house->owner_id,
69             'message' => "Agreement created for '{$house->title}'. Please confirm.",
70             'is_read' => false
71         ]);
72 
73         return response()->json([
74             'message' => 'Agreement created',
75             'agreement' => $agreement
76         ], 201);
77     }
78 
79     // ========== CONFIRM AGREEMENT ==========
80     public function confirm(Request $request, $id)
81     {
82         $agreement = Agreement::with('house')->findOrFail($id);
83         $user = $request->user();
84 
85         if ($agreement->renter_id !== $user->id && $agreement->house->owner_id !== $user->id) {
86             return response()->json(['message' => 'Unauthorized'], 403);
87         }
88 
89         $agreement->update(['status' => 'confirmed']);
90 
91         // Mark house as rented
92         $agreement->house->update(['status' => 'rented']);
93 
94         return response()->json([
95             'message' => 'Agreement confirmed',
96             'agreement' => $agreement
97         ]);
98     }
99 
100     // ========== TERMINATE/LEAVE AGREEMENT ==========
101     public function terminate(Request $request, $id)
102     {
103         $agreement = Agreement::with('house')->findOrFail($id);
104         $user = $request->user();
105 
106         // Only the renter who rented the house can terminate/leave it
107         if ($agreement->renter_id !== $user->id) {
108             return response()->json(['message' => 'Unauthorized'], 403);
109         }
110 
111         $agreement->update(['status' => 'terminated']);
112 
113         // Mark house as available again
114         $agreement->house->update(['status' => 'available']);
115 
116         return response()->json([
117             'message' => 'You have left the house successfully',
118             'agreement' => $agreement
119         ]);
120     }
121 
122     // ========== GET MY AGREEMENTS ==========
123     public function myAgreements(Request $request)
124     {
125         $user = $request->user();
126 
127         if ($user->isRenter()) {
128             $agreements = Agreement::with('house')
129                 ->where('renter_id', $user->id)
130                 ->latest()
131                 ->paginate(10);
132         } else {
133             $agreements = Agreement::with('house', 'renter')
134                 ->whereHas('house', function($query) use ($user) {
135                     $query->where('owner_id', $user->id);
136                 })
137                 ->latest()
138                 ->paginate(10);
139         }
140 
141         return response()->json($agreements);
142     }
143 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\Agreement
- Line 6: Imports a dependency used in this file: App\Models\House
- Line 7: Imports a dependency used in this file: App\Models\RequestRental
- Line 8: Imports a dependency used in this file: App\Models\Notification
- Line 9: Imports a dependency used in this file: Illuminate\Http\Request
- Line 10: Imports a dependency used in this file: Carbon\Carbon
- Line 11: Blank line for separation.
- Line 12: Defines the AgreementController class.
- Line 13: Implements application logic: {
- Line 14: ========== create offline agreement ==========
- Line 15: Defines the store function.
- Line 16: Implements application logic: {
- Line 17: Implements application logic: $user = $request->user();
- Line 18: Blank line for separation.
- Line 19: Implements application logic: $request->validate([
- Line 20: Implements application logic: 'house_id' => 'required|exists:houses,id',
- Line 21: Implements application logic: 'start_date' => 'required|date',
- Line 22: Implements application logic: 'end_date' => 'required|date|after:start_date',
- Line 23: Implements application logic: 'agreed_price' => 'required|numeric|min:0'
- Line 24: Implements application logic: ]);
- Line 25: Blank line for separation.
- Line 26: Implements application logic: $house = House::findOrFail($request->house_id);
- Line 27: Blank line for separation.
- Line 28: Check if user is involved (renter or owner)
- Line 29: Implements application logic: $hasRequest = RequestRental::where('house_id', $request->house_id)
- Line 30: Implements application logic: ->where('renter_id', $user->id)
- Line 31: Implements application logic: ->where('status', 'accepted')
- Line 32: Implements application logic: ->exists();
- Line 33: Blank line for separation.
- Line 34: Adds a conditional branch: if (!$hasRequest && $house->owner_id !== $user->id) {
- Line 35: Returns a JSON HTTP response to the client.
- Line 36: Implements application logic: 'message' => 'You are not authorized for this agreement'
- Line 37: Implements application logic: ], 403);
- Line 38: Implements application logic: }
- Line 39: Blank line for separation.
- Line 40: Find renter
- Line 41: Implements application logic: $rentalRequest = RequestRental::where('house_id', $request->house_id)
- Line 42: Implements application logic: ->where('status', 'accepted')
- Line 43: Implements application logic: ->first();
- Line 44: Blank line for separation.
- Line 45: Adds a conditional branch: if (!$rentalRequest) {
- Line 46: Returns a JSON HTTP response to the client.
- Line 47: Implements application logic: 'message' => 'No active rental request found'
- Line 48: Implements application logic: ], 404);
- Line 49: Implements application logic: }
- Line 50: Blank line for separation.
- Line 51: Implements application logic: $agreement = Agreement::create([
- Line 52: Implements application logic: 'renter_id' => $rentalRequest->renter_id,
- Line 53: Implements application logic: 'house_id' => $request->house_id,
- Line 54: Implements application logic: 'start_date' => $request->start_date,
- Line 55: Implements application logic: 'end_date' => $request->end_date,
- Line 56: Implements application logic: 'agreed_price' => $request->agreed_price,
- Line 57: Implements application logic: 'status' => 'pending'
- Line 58: Implements application logic: ]);
- Line 59: Blank line for separation.
- Line 60: Notify both parties
- Line 61: Implements application logic: Notification::create([
- Line 62: Implements application logic: 'user_id' => $rentalRequest->renter_id,
- Line 63: Implements application logic: 'message' => "Agreement created for '{$house->title}'. Please confirm.",
- Line 64: Implements application logic: 'is_read' => false
- Line 65: Implements application logic: ]);
- Line 66: Blank line for separation.
- Line 67: Implements application logic: Notification::create([
- Line 68: Implements application logic: 'user_id' => $house->owner_id,
- Line 69: Implements application logic: 'message' => "Agreement created for '{$house->title}'. Please confirm.",
- Line 70: Implements application logic: 'is_read' => false
- Line 71: Implements application logic: ]);
- Line 72: Blank line for separation.
- Line 73: Returns a JSON HTTP response to the client.
- Line 74: Implements application logic: 'message' => 'Agreement created',
- Line 75: Implements application logic: 'agreement' => $agreement
- Line 76: Implements application logic: ], 201);
- Line 77: Implements application logic: }
- Line 78: Blank line for separation.
- Line 79: ========== confirm agreement ==========
- Line 80: Defines the confirm function.
- Line 81: Implements application logic: {
- Line 82: Implements application logic: $agreement = Agreement::with('house')->findOrFail($id);
- Line 83: Implements application logic: $user = $request->user();
- Line 84: Blank line for separation.
- Line 85: Adds a conditional branch: if ($agreement->renter_id !== $user->id && $agreement->house->owner_id !== $user->id) {
- Line 86: Returns a JSON HTTP response to the client.
- Line 87: Implements application logic: }
- Line 88: Blank line for separation.
- Line 89: Implements application logic: $agreement->update(['status' => 'confirmed']);
- Line 90: Blank line for separation.
- Line 91: Mark house as rented
- Line 92: Implements application logic: $agreement->house->update(['status' => 'rented']);
- Line 93: Blank line for separation.
- Line 94: Returns a JSON HTTP response to the client.
- Line 95: Implements application logic: 'message' => 'Agreement confirmed',
- Line 96: Implements application logic: 'agreement' => $agreement
- Line 97: Implements application logic: ]);
- Line 98: Implements application logic: }
- Line 99: Blank line for separation.
- Line 100: ========== terminate/leave agreement ==========
- Line 101: Defines the terminate function.
- Line 102: Implements application logic: {
- Line 103: Implements application logic: $agreement = Agreement::with('house')->findOrFail($id);
- Line 104: Implements application logic: $user = $request->user();
- Line 105: Blank line for separation.
- Line 106: Only the renter who rented the house can terminate/leave it
- Line 107: Adds a conditional branch: if ($agreement->renter_id !== $user->id) {
- Line 108: Returns a JSON HTTP response to the client.
- Line 109: Implements application logic: }
- Line 110: Blank line for separation.
- Line 111: Implements application logic: $agreement->update(['status' => 'terminated']);
- Line 112: Blank line for separation.
- Line 113: Mark house as available again
- Line 114: Implements application logic: $agreement->house->update(['status' => 'available']);
- Line 115: Blank line for separation.
- Line 116: Returns a JSON HTTP response to the client.
- Line 117: Implements application logic: 'message' => 'You have left the house successfully',
- Line 118: Implements application logic: 'agreement' => $agreement
- Line 119: Implements application logic: ]);
- Line 120: Implements application logic: }
- Line 121: Blank line for separation.
- Line 122: ========== get my agreements ==========
- Line 123: Defines the myAgreements function.
- Line 124: Implements application logic: {
- Line 125: Implements application logic: $user = $request->user();
- Line 126: Blank line for separation.
- Line 127: Adds a conditional branch: if ($user->isRenter()) {
- Line 128: Implements application logic: $agreements = Agreement::with('house')
- Line 129: Implements application logic: ->where('renter_id', $user->id)
- Line 130: Implements application logic: ->latest()
- Line 131: Implements application logic: ->paginate(10);
- Line 132: Implements application logic: } else {
- Line 133: Implements application logic: $agreements = Agreement::with('house', 'renter')
- Line 134: Implements application logic: ->whereHas('house', function($query) use ($user) {
- Line 135: Implements application logic: $query->where('owner_id', $user->id);
- Line 136: Implements application logic: })
- Line 137: Implements application logic: ->latest()
- Line 138: Implements application logic: ->paginate(10);
- Line 139: Implements application logic: }
- Line 140: Blank line for separation.
- Line 141: Returns a JSON HTTP response to the client.
- Line 142: Implements application logic: }
- Line 143: Implements application logic: }
