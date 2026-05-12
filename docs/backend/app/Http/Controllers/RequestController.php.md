# RequestController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\RequestRental;
6 use App\Models\House;
7 use App\Models\Notification;
8 use Illuminate\Http\Request;
9 
10 class RequestController extends Controller
11 {
12     // ========== SEND RENTAL REQUEST ==========
13     public function store(Request $request)
14     {
15         $user = $request->user();
16 
17         // Only renters can send requests
18         if (!$user->isRenter()) {
19             return response()->json([
20                 'message' => 'Only renters can send rental requests'
21             ], 403);
22         }
23 
24         $request->validate([
25             'house_id' => 'required|exists:houses,id',
26             'message' => 'nullable|string'
27         ]);
28 
29         $house = House::findOrFail($request->house_id);
30 
31         // Check if house is available
32         if ($house->status !== 'available') {
33             return response()->json([
34                 'message' => 'This house is no longer available'
35             ], 400);
36         }
37 
38         // Check if already requested
39         $existing = RequestRental::where('renter_id', $user->id)
40             ->where('house_id', $request->house_id)
41             ->whereIn('status', ['pending', 'accepted'])
42             ->first();
43 
44         if ($existing) {
45             return response()->json([
46                 'message' => 'You already sent a request for this house'
47             ], 400);
48         }
49 
50         $rentalRequest = RequestRental::create([
51             'renter_id' => $user->id,
52             'house_id' => $request->house_id,
53             'message' => $request->message,
54             'status' => 'pending'
55         ]);
56 
57         // Notify owner
58         Notification::create([
59             'user_id' => $house->owner_id,
60             'message' => "{$user->name} requested to rent your house '{$house->title}'",
61             'is_read' => false
62         ]);
63 
64         return response()->json([
65             'message' => 'Rental request sent',
66             'request' => $rentalRequest
67         ], 201);
68     }
69 
70     // ========== UPDATE REQUEST STATUS (Accept/Reject) ==========
71     public function update(Request $request, $id)
72     {
73         $rentalRequest = RequestRental::with('house')->findOrFail($id);
74         $user = $request->user();
75 
76         // Only owner can update
77         if ($rentalRequest->house->owner_id !== $user->id) {
78             return response()->json([
79                 'message' => 'Unauthorized'
80             ], 403);
81         }
82 
83         $request->validate([
84             'status' => 'required|in:accepted,rejected'
85         ]);
86 
87         $oldStatus = $rentalRequest->status;
88         $rentalRequest->update(['status' => $request->status]);
89 
90         // Keep house available until agreement is confirmed
91 
92         // Notify renter
93         $statusText = $request->status === 'accepted' ? 'accepted' : 'rejected';
94         Notification::create([
95             'user_id' => $rentalRequest->renter_id,
96             'message' => "Your request for '{$rentalRequest->house->title}' was {$statusText}",
97             'is_read' => false
98         ]);
99 
100         return response()->json([
101             'message' => "Request {$request->status}",
102             'request' => $rentalRequest
103         ]);
104     }
105 
106     // ========== CANCEL/DELETE REQUEST ==========
107     public function destroy(Request $request, $id)
108     {
109         $rentalRequest = RequestRental::with('house')->findOrFail($id);
110         $user = $request->user();
111 
112         // Only the renter who made the request can cancel it
113         if ($rentalRequest->renter_id !== $user->id) {
114             return response()->json(['message' => 'Unauthorized'], 403);
115         }
116 
117         $rentalRequest->delete();
118 
119         return response()->json(['message' => 'Request cancelled successfully']);
120     }
121 
122     // ========== GET RENTER'S REQUESTS ==========
123     public function myRequests(Request $request)
124     {
125         $requests = RequestRental::with('house', 'house.owner')
126             ->where('renter_id', $request->user()->id)
127             ->latest()
128             ->paginate(10);
129 
130         return response()->json($requests);
131     }
132 
133     // ========== GET OWNER'S REQUESTS ==========
134     public function ownerRequests(Request $request)
135     {
136         $requests = RequestRental::with('house', 'renter')
137             ->whereHas('house', function($query) use ($request) {
138                 $query->where('owner_id', $request->user()->id);
139             })
140             ->latest()
141             ->paginate(10);
142 
143         return response()->json($requests);
144     }
145 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\RequestRental
- Line 6: Imports a dependency used in this file: App\Models\House
- Line 7: Imports a dependency used in this file: App\Models\Notification
- Line 8: Imports a dependency used in this file: Illuminate\Http\Request
- Line 9: Blank line for separation.
- Line 10: Defines the RequestController class.
- Line 11: Implements application logic: {
- Line 12: ========== send rental request ==========
- Line 13: Defines the store function.
- Line 14: Implements application logic: {
- Line 15: Implements application logic: $user = $request->user();
- Line 16: Blank line for separation.
- Line 17: Only renters can send requests
- Line 18: Adds a conditional branch: if (!$user->isRenter()) {
- Line 19: Returns a JSON HTTP response to the client.
- Line 20: Implements application logic: 'message' => 'Only renters can send rental requests'
- Line 21: Implements application logic: ], 403);
- Line 22: Implements application logic: }
- Line 23: Blank line for separation.
- Line 24: Implements application logic: $request->validate([
- Line 25: Implements application logic: 'house_id' => 'required|exists:houses,id',
- Line 26: Implements application logic: 'message' => 'nullable|string'
- Line 27: Implements application logic: ]);
- Line 28: Blank line for separation.
- Line 29: Implements application logic: $house = House::findOrFail($request->house_id);
- Line 30: Blank line for separation.
- Line 31: Check if house is available
- Line 32: Adds a conditional branch: if ($house->status !== 'available') {
- Line 33: Returns a JSON HTTP response to the client.
- Line 34: Implements application logic: 'message' => 'This house is no longer available'
- Line 35: Implements application logic: ], 400);
- Line 36: Implements application logic: }
- Line 37: Blank line for separation.
- Line 38: Check if already requested
- Line 39: Implements application logic: $existing = RequestRental::where('renter_id', $user->id)
- Line 40: Implements application logic: ->where('house_id', $request->house_id)
- Line 41: Implements application logic: ->whereIn('status', ['pending', 'accepted'])
- Line 42: Implements application logic: ->first();
- Line 43: Blank line for separation.
- Line 44: Adds a conditional branch: if ($existing) {
- Line 45: Returns a JSON HTTP response to the client.
- Line 46: Implements application logic: 'message' => 'You already sent a request for this house'
- Line 47: Implements application logic: ], 400);
- Line 48: Implements application logic: }
- Line 49: Blank line for separation.
- Line 50: Implements application logic: $rentalRequest = RequestRental::create([
- Line 51: Implements application logic: 'renter_id' => $user->id,
- Line 52: Implements application logic: 'house_id' => $request->house_id,
- Line 53: Implements application logic: 'message' => $request->message,
- Line 54: Implements application logic: 'status' => 'pending'
- Line 55: Implements application logic: ]);
- Line 56: Blank line for separation.
- Line 57: Notify owner
- Line 58: Implements application logic: Notification::create([
- Line 59: Implements application logic: 'user_id' => $house->owner_id,
- Line 60: Implements application logic: 'message' => "{$user->name} requested to rent your house '{$house->title}'",
- Line 61: Implements application logic: 'is_read' => false
- Line 62: Implements application logic: ]);
- Line 63: Blank line for separation.
- Line 64: Returns a JSON HTTP response to the client.
- Line 65: Implements application logic: 'message' => 'Rental request sent',
- Line 66: Implements application logic: 'request' => $rentalRequest
- Line 67: Implements application logic: ], 201);
- Line 68: Implements application logic: }
- Line 69: Blank line for separation.
- Line 70: ========== update request status (accept/reject) ==========
- Line 71: Defines the update function.
- Line 72: Implements application logic: {
- Line 73: Implements application logic: $rentalRequest = RequestRental::with('house')->findOrFail($id);
- Line 74: Implements application logic: $user = $request->user();
- Line 75: Blank line for separation.
- Line 76: Only owner can update
- Line 77: Adds a conditional branch: if ($rentalRequest->house->owner_id !== $user->id) {
- Line 78: Returns a JSON HTTP response to the client.
- Line 79: Implements application logic: 'message' => 'Unauthorized'
- Line 80: Implements application logic: ], 403);
- Line 81: Implements application logic: }
- Line 82: Blank line for separation.
- Line 83: Implements application logic: $request->validate([
- Line 84: Implements application logic: 'status' => 'required|in:accepted,rejected'
- Line 85: Implements application logic: ]);
- Line 86: Blank line for separation.
- Line 87: Implements application logic: $oldStatus = $rentalRequest->status;
- Line 88: Implements application logic: $rentalRequest->update(['status' => $request->status]);
- Line 89: Blank line for separation.
- Line 90: Keep house available until agreement is confirmed
- Line 91: Blank line for separation.
- Line 92: Notify renter
- Line 93: Implements application logic: $statusText = $request->status === 'accepted' ? 'accepted' : 'rejected';
- Line 94: Implements application logic: Notification::create([
- Line 95: Implements application logic: 'user_id' => $rentalRequest->renter_id,
- Line 96: Implements application logic: 'message' => "Your request for '{$rentalRequest->house->title}' was {$statusText}",
- Line 97: Implements application logic: 'is_read' => false
- Line 98: Implements application logic: ]);
- Line 99: Blank line for separation.
- Line 100: Returns a JSON HTTP response to the client.
- Line 101: Implements application logic: 'message' => "Request {$request->status}",
- Line 102: Implements application logic: 'request' => $rentalRequest
- Line 103: Implements application logic: ]);
- Line 104: Implements application logic: }
- Line 105: Blank line for separation.
- Line 106: ========== cancel/delete request ==========
- Line 107: Defines the destroy function.
- Line 108: Implements application logic: {
- Line 109: Implements application logic: $rentalRequest = RequestRental::with('house')->findOrFail($id);
- Line 110: Implements application logic: $user = $request->user();
- Line 111: Blank line for separation.
- Line 112: Only the renter who made the request can cancel it
- Line 113: Adds a conditional branch: if ($rentalRequest->renter_id !== $user->id) {
- Line 114: Returns a JSON HTTP response to the client.
- Line 115: Implements application logic: }
- Line 116: Blank line for separation.
- Line 117: Implements application logic: $rentalRequest->delete();
- Line 118: Blank line for separation.
- Line 119: Returns a JSON HTTP response to the client.
- Line 120: Implements application logic: }
- Line 121: Blank line for separation.
- Line 122: ========== get renter's requests ==========
- Line 123: Defines the myRequests function.
- Line 124: Implements application logic: {
- Line 125: Implements application logic: $requests = RequestRental::with('house', 'house.owner')
- Line 126: Implements application logic: ->where('renter_id', $request->user()->id)
- Line 127: Implements application logic: ->latest()
- Line 128: Implements application logic: ->paginate(10);
- Line 129: Blank line for separation.
- Line 130: Returns a JSON HTTP response to the client.
- Line 131: Implements application logic: }
- Line 132: Blank line for separation.
- Line 133: ========== get owner's requests ==========
- Line 134: Defines the ownerRequests function.
- Line 135: Implements application logic: {
- Line 136: Implements application logic: $requests = RequestRental::with('house', 'renter')
- Line 137: Implements application logic: ->whereHas('house', function($query) use ($request) {
- Line 138: Implements application logic: $query->where('owner_id', $request->user()->id);
- Line 139: Implements application logic: })
- Line 140: Implements application logic: ->latest()
- Line 141: Implements application logic: ->paginate(10);
- Line 142: Blank line for separation.
- Line 143: Returns a JSON HTTP response to the client.
- Line 144: Implements application logic: }
- Line 145: Implements application logic: }
