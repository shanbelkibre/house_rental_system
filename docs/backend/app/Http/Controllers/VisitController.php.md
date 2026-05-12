# VisitController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\Visit;
6 use App\Models\House;
7 use App\Models\Notification;
8 use Illuminate\Http\Request;
9 use Carbon\Carbon;
10 
11 class VisitController extends Controller
12 {
13     // ========== SCHEDULE VISIT ==========
14     public function schedule(Request $request)
15     {
16         $user = $request->user();
17 
18         if (!$user->isRenter()) {
19             return response()->json([
20                 'message' => 'Only renters can schedule visits'
21             ], 403);
22         }
23 
24         $request->validate([
25             'house_id' => 'required|exists:houses,id',
26             'visit_date' => 'required|date|after:now'
27         ]);
28 
29         $house = House::findOrFail($request->house_id);
30 
31         // Check if house is available
32         if ($house->status !== 'available') {
33             return response()->json([
34                 'message' => 'This house is not available for visits'
35             ], 400);
36         }
37 
38         $visit = Visit::create([
39             'renter_id' => $user->id,
40             'house_id' => $request->house_id,
41             'visit_date' => $request->visit_date,
42             'status' => 'pending'
43         ]);
44 
45         // Notify owner
46         $visitDate = Carbon::parse($request->visit_date)->format('M d, Y h:i A');
47         Notification::create([
48             'user_id' => $house->owner_id,
49             'message' => "{$user->name} requested a house visit on {$visitDate}",
50             'is_read' => false
51         ]);
52 
53         return response()->json([
54             'message' => 'Visit scheduled',
55             'visit' => $visit
56         ], 201);
57     }
58 
59     // ========== CONFIRM VISIT (Owner) ==========
60     public function confirm(Request $request, $id)
61     {
62         $visit = Visit::with('house')->findOrFail($id);
63         $user = $request->user();
64 
65         if ($visit->house->owner_id !== $user->id) {
66             return response()->json(['message' => 'Unauthorized'], 403);
67         }
68 
69         $request->validate([
70             'status' => 'required|in:confirmed,completed'
71         ]);
72 
73         $visit->update(['status' => $request->status]);
74 
75         // Notify renter
76         Notification::create([
77             'user_id' => $visit->renter_id,
78             'message' => "Your visit for '{$visit->house->title}' has been {$request->status}",
79             'is_read' => false
80         ]);
81 
82         return response()->json([
83             'message' => "Visit {$request->status}",
84             'visit' => $visit
85         ]);
86     }
87 
88     // ========== GET MY VISITS ==========
89     public function myVisits(Request $request)
90     {
91         $user = $request->user();
92 
93         if ($user->isRenter()) {
94             $visits = Visit::with('house')
95                 ->where('renter_id', $user->id)
96                 ->latest()
97                 ->paginate(10);
98         } else {
99             $visits = Visit::with('house', 'renter')
100                 ->whereHas('house', function($query) use ($user) {
101                     $query->where('owner_id', $user->id);
102                 })
103                 ->latest()
104                 ->paginate(10);
105         }
106 
107         return response()->json($visits);
108     }
109 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\Visit
- Line 6: Imports a dependency used in this file: App\Models\House
- Line 7: Imports a dependency used in this file: App\Models\Notification
- Line 8: Imports a dependency used in this file: Illuminate\Http\Request
- Line 9: Imports a dependency used in this file: Carbon\Carbon
- Line 10: Blank line for separation.
- Line 11: Defines the VisitController class.
- Line 12: Implements application logic: {
- Line 13: ========== schedule visit ==========
- Line 14: Defines the schedule function.
- Line 15: Implements application logic: {
- Line 16: Implements application logic: $user = $request->user();
- Line 17: Blank line for separation.
- Line 18: Adds a conditional branch: if (!$user->isRenter()) {
- Line 19: Returns a JSON HTTP response to the client.
- Line 20: Implements application logic: 'message' => 'Only renters can schedule visits'
- Line 21: Implements application logic: ], 403);
- Line 22: Implements application logic: }
- Line 23: Blank line for separation.
- Line 24: Implements application logic: $request->validate([
- Line 25: Implements application logic: 'house_id' => 'required|exists:houses,id',
- Line 26: Implements application logic: 'visit_date' => 'required|date|after:now'
- Line 27: Implements application logic: ]);
- Line 28: Blank line for separation.
- Line 29: Implements application logic: $house = House::findOrFail($request->house_id);
- Line 30: Blank line for separation.
- Line 31: Check if house is available
- Line 32: Adds a conditional branch: if ($house->status !== 'available') {
- Line 33: Returns a JSON HTTP response to the client.
- Line 34: Implements application logic: 'message' => 'This house is not available for visits'
- Line 35: Implements application logic: ], 400);
- Line 36: Implements application logic: }
- Line 37: Blank line for separation.
- Line 38: Implements application logic: $visit = Visit::create([
- Line 39: Implements application logic: 'renter_id' => $user->id,
- Line 40: Implements application logic: 'house_id' => $request->house_id,
- Line 41: Implements application logic: 'visit_date' => $request->visit_date,
- Line 42: Implements application logic: 'status' => 'pending'
- Line 43: Implements application logic: ]);
- Line 44: Blank line for separation.
- Line 45: Notify owner
- Line 46: Implements application logic: $visitDate = Carbon::parse($request->visit_date)->format('M d, Y h:i A');
- Line 47: Implements application logic: Notification::create([
- Line 48: Implements application logic: 'user_id' => $house->owner_id,
- Line 49: Implements application logic: 'message' => "{$user->name} requested a house visit on {$visitDate}",
- Line 50: Implements application logic: 'is_read' => false
- Line 51: Implements application logic: ]);
- Line 52: Blank line for separation.
- Line 53: Returns a JSON HTTP response to the client.
- Line 54: Implements application logic: 'message' => 'Visit scheduled',
- Line 55: Implements application logic: 'visit' => $visit
- Line 56: Implements application logic: ], 201);
- Line 57: Implements application logic: }
- Line 58: Blank line for separation.
- Line 59: ========== confirm visit (owner) ==========
- Line 60: Defines the confirm function.
- Line 61: Implements application logic: {
- Line 62: Implements application logic: $visit = Visit::with('house')->findOrFail($id);
- Line 63: Implements application logic: $user = $request->user();
- Line 64: Blank line for separation.
- Line 65: Adds a conditional branch: if ($visit->house->owner_id !== $user->id) {
- Line 66: Returns a JSON HTTP response to the client.
- Line 67: Implements application logic: }
- Line 68: Blank line for separation.
- Line 69: Implements application logic: $request->validate([
- Line 70: Implements application logic: 'status' => 'required|in:confirmed,completed'
- Line 71: Implements application logic: ]);
- Line 72: Blank line for separation.
- Line 73: Implements application logic: $visit->update(['status' => $request->status]);
- Line 74: Blank line for separation.
- Line 75: Notify renter
- Line 76: Implements application logic: Notification::create([
- Line 77: Implements application logic: 'user_id' => $visit->renter_id,
- Line 78: Implements application logic: 'message' => "Your visit for '{$visit->house->title}' has been {$request->status}",
- Line 79: Implements application logic: 'is_read' => false
- Line 80: Implements application logic: ]);
- Line 81: Blank line for separation.
- Line 82: Returns a JSON HTTP response to the client.
- Line 83: Implements application logic: 'message' => "Visit {$request->status}",
- Line 84: Implements application logic: 'visit' => $visit
- Line 85: Implements application logic: ]);
- Line 86: Implements application logic: }
- Line 87: Blank line for separation.
- Line 88: ========== get my visits ==========
- Line 89: Defines the myVisits function.
- Line 90: Implements application logic: {
- Line 91: Implements application logic: $user = $request->user();
- Line 92: Blank line for separation.
- Line 93: Adds a conditional branch: if ($user->isRenter()) {
- Line 94: Implements application logic: $visits = Visit::with('house')
- Line 95: Implements application logic: ->where('renter_id', $user->id)
- Line 96: Implements application logic: ->latest()
- Line 97: Implements application logic: ->paginate(10);
- Line 98: Implements application logic: } else {
- Line 99: Implements application logic: $visits = Visit::with('house', 'renter')
- Line 100: Implements application logic: ->whereHas('house', function($query) use ($user) {
- Line 101: Implements application logic: $query->where('owner_id', $user->id);
- Line 102: Implements application logic: })
- Line 103: Implements application logic: ->latest()
- Line 104: Implements application logic: ->paginate(10);
- Line 105: Implements application logic: }
- Line 106: Blank line for separation.
- Line 107: Returns a JSON HTTP response to the client.
- Line 108: Implements application logic: }
- Line 109: Implements application logic: }
