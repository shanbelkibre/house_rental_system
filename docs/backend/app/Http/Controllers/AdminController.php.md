# AdminController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\User;
6 use App\Models\House;
7 use App\Models\RequestRental;
8 use App\Models\Payment;
9 use App\Models\Subscription;
10 use App\Models\SubscriptionPlan;
11 use App\Models\AdminReport;
12 use Illuminate\Http\Request;
13 use Illuminate\Support\Facades\DB;
14 
15 class AdminController extends Controller
16 {
17     // ========== MIDDLEWARE to ensure admin ==========
18     public function __construct()
19     {
20         $this->middleware('auth:sanctum');
21         $this->middleware(function ($request, $next) {
22             if (!$request->user()->isAdmin()) {
23                 return response()->json(['message' => 'Admin access required'], 403);
24             }
25             return $next($request);
26         });
27     }
28 
29     // ========== DASHBOARD STATS ==========
30     public function dashboard()
31     {
32         $stats = [
33             'total_users' => User::count(),
34             'total_owners' => User::where('role', 'owner')->count(),
35             'total_renters' => User::where('role', 'renter')->count(),
36             'total_houses' => House::count(),
37             'pending_houses' => House::where('is_approved', false)->count(),
38             'available_houses' => House::where('status', 'available')->count(),
39             'rented_houses' => House::where('status', 'rented')->count(),
40             'total_requests' => RequestRental::count(),
41             'pending_requests' => RequestRental::where('status', 'pending')->count(),
42             'total_payments' => Payment::sum('amount'),
43             'active_subscriptions' => Subscription::where('status', 'active')->count()
44         ];
45 
46         return response()->json($stats);
47     }
48 
49     // ========== GET ALL USERS ==========
50     public function users(Request $request)
51     {
52         $perPage = (int) $request->get('per_page', 20);
53         if ($perPage < 1) $perPage = 1;
54         if ($perPage > 50) $perPage = 50;
55 
56         $query = User::query()->withCount('houses');
57 
58         if ($request->filled('role')) {
59             $role = $request->get('role');
60             if (in_array($role, ['owner', 'renter', 'admin'], true)) {
61                 $query->where('role', $role);
62             }
63         }
64 
65         if ($request->filled('verified')) {
66             $verified = filter_var($request->get('verified'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
67             if (!is_null($verified)) {
68                 $query->where('is_verified', $verified);
69             }
70         }
71 
72         if ($request->filled('suspended')) {
73             $suspended = filter_var($request->get('suspended'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
74             if (!is_null($suspended)) {
75                 $query->where('is_suspended', $suspended);
76             }
77         }
78 
79         if ($request->filled('q')) {
80             $q = $request->get('q');
81             $query->where(function ($sub) use ($q) {
82                 $sub->where('name', 'like', "%{$q}%")
83                     ->orWhere('email', 'like', "%{$q}%");
84             });
85         }
86 
87         $users = $query->latest()->paginate($perPage);
88         return response()->json($users);
89     }
90 
91     // ========== SUSPEND / UNSUSPEND USER ==========
92     public function suspendUser(Request $request, $id)
93     {
94         $request->validate([
95             'is_suspended' => 'required|boolean'
96         ]);
97 
98         $user = User::findOrFail($id);
99 
100         if (auth()->id() === $user->id) {
101             return response()->json(['message' => 'Cannot suspend yourself'], 400);
102         }
103 
104         if ($user->role === 'admin') {
105             return response()->json(['message' => 'Cannot suspend an admin user'], 400);
106         }
107 
108         $user->update(['is_suspended' => (bool) $request->is_suspended]);
109 
110         return response()->json([
111             'message' => $user->is_suspended ? 'User suspended' : 'User unsuspended',
112             'user' => $user
113         ]);
114     }
115 
116     // ========== VERIFY USER ==========
117     public function verifyUser($id)
118     {
119         $user = User::findOrFail($id);
120         $user->update(['is_verified' => true]);
121 
122         return response()->json([
123             'message' => 'User verified successfully',
124             'user' => $user
125         ]);
126     }
127 
128     // ========== SUSPEND/DELETE USER ==========
129     public function deleteUser($id)
130     {
131         $user = User::findOrFail($id);
132 
133         // Don't allow deleting yourself
134         if (auth()->id() === $user->id) {
135             return response()->json(['message' => 'Cannot delete yourself'], 400);
136         }
137 
138         $user->delete();
139 
140         return response()->json(['message' => 'User deleted']);
141     }
142 
143     // ========== GET PENDING HOUSES ==========
144     public function pendingHouses()
145     {
146         $houses = House::with('owner', 'images')
147             ->where('is_approved', false)
148             ->latest()
149             ->paginate(20);
150 
151         return response()->json($houses);
152     }
153 
154     // ========== APPROVE HOUSE ==========
155     public function approveHouse($id)
156     {
157         $house = House::findOrFail($id);
158         $house->update(['is_approved' => true]);
159 
160         // Notify owner
161         \App\Models\Notification::create([
162             'user_id' => $house->owner_id,
163             'message' => "Your house '{$house->title}' has been approved",
164             'is_read' => false
165         ]);
166 
167         return response()->json([
168             'message' => 'House approved',
169             'house' => $house
170         ]);
171     }
172 
173     // ========== REJECT HOUSE ==========
174     public function rejectHouse($id)
175     {
176         $house = House::findOrFail($id);
177 
178         // Notify owner
179         \App\Models\Notification::create([
180             'user_id' => $house->owner_id,
181             'message' => "Your house '{$house->title}' was rejected. Please check requirements.",
182             'is_read' => false
183         ]);
184 
185         $house->delete();
186 
187         return response()->json(['message' => 'House rejected and removed']);
188     }
189 
190     // ========== REMOVE HOUSE LISTING (Admin) ==========
191     public function removeHouse(Request $request, $id)
192     {
193         $request->validate([
194             'reason' => 'nullable|string|max:200'
195         ]);
196 
197         $house = House::findOrFail($id);
198         $reason = $request->get('reason');
199 
200         $msg = "Your house '{$house->title}' was removed by admin";
201         if ($reason) {
202             $msg .= ": {$reason}";
203         }
204 
205         \App\Models\Notification::create([
206             'user_id' => $house->owner_id,
207             'message' => $msg,
208             'is_read' => false
209         ]);
210 
211         $house->delete();
212 
213         return response()->json(['message' => 'House removed']);
214     }
215 
216     // ========== GET ALL HOUSES (Admin view) ==========
217     public function allHouses(Request $request)
218     {
219         $houses = House::with('owner', 'images')
220             ->latest()
221             ->paginate(20);
222 
223         return response()->json($houses);
224     }
225 
226     // ========== GENERATE REPORT ==========
227     public function report(Request $request)
228     {
229         $startDate = $request->get('start_date', now()->subMonth());
230         $endDate = $request->get('end_date', now());
231 
232         return response()->json($this->buildReportData($startDate, $endDate));
233     }
234 
235     protected function buildReportData($startDate, $endDate): array
236     {
237         $dailyRevenue = Payment::select(
238                 DB::raw('DATE(created_at) as date'),
239                 DB::raw('SUM(amount) as total')
240             )
241             ->whereBetween('created_at', [$startDate, $endDate])
242             ->groupBy(DB::raw('DATE(created_at)'))
243             ->orderBy('date')
244             ->get();
245 
246         $paymentBreakdown = Payment::select('payment_method', DB::raw('SUM(amount) as total'))
247             ->whereBetween('created_at', [$startDate, $endDate])
248             ->groupBy('payment_method')
249             ->orderByDesc('total')
250             ->get();
251 
252         return [
253             'period' => [
254                 'start' => $startDate,
255                 'end' => $endDate
256             ],
257             'users_registered' => User::whereBetween('created_at', [$startDate, $endDate])->count(),
258             'houses_listed' => House::whereBetween('created_at', [$startDate, $endDate])->count(),
259             'requests_made' => RequestRental::whereBetween('created_at', [$startDate, $endDate])->count(),
260             'subscription_revenue' => Payment::whereBetween('created_at', [$startDate, $endDate])->sum('amount'),
261             'payment_methods' => $paymentBreakdown,
262             'daily_revenue' => $dailyRevenue,
263             'active_users' => User::where('created_at', '<=', $endDate)->count(),
264             'total_houses' => House::count(),
265         ];
266     }
267 
268     // ========== SUBSCRIPTION PLANS (Admin) ==========
269     public function subscriptionPlans(Request $request)
270     {
271         $perPage = (int) $request->get('per_page', 20);
272         if ($perPage < 1) $perPage = 1;
273         if ($perPage > 50) $perPage = 50;
274 
275         $query = SubscriptionPlan::query()->latest();
276 
277         if ($request->filled('active')) {
278             $active = filter_var($request->get('active'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
279             if (!is_null($active)) {
280                 $query->where('is_active', $active);
281             }
282         }
283 
284         return response()->json($query->paginate($perPage));
285     }
286 
287     public function createSubscriptionPlan(Request $request)
288     {
289         $data = $request->validate([
290             'name' => 'required|string|max:80',
291             'price' => 'required|numeric|min:0',
292             'duration_days' => 'required|integer|min:1|max:3650',
293             'is_active' => 'sometimes|boolean',
294         ]);
295 
296         $plan = SubscriptionPlan::create($data);
297 
298         return response()->json([
299             'message' => 'Plan created',
300             'plan' => $plan,
301         ], 201);
302     }
303 
304     public function updateSubscriptionPlan(Request $request, $id)
305     {
306         $plan = SubscriptionPlan::findOrFail($id);
307         $data = $request->validate([
308             'name' => 'sometimes|required|string|max:80',
309             'price' => 'sometimes|required|numeric|min:0',
310             'duration_days' => 'sometimes|required|integer|min:1|max:3650',
311             'is_active' => 'sometimes|boolean',
312         ]);
313 
314         $plan->update($data);
315 
316         return response()->json([
317             'message' => 'Plan updated',
318             'plan' => $plan,
319         ]);
320     }
321 
322     public function deleteSubscriptionPlan($id)
323     {
324         $plan = SubscriptionPlan::findOrFail($id);
325         $plan->delete();
326         return response()->json(['message' => 'Plan deleted']);
327     }
328 
329     // ========== SAVED REPORTS (Admin) ==========
330     public function reports(Request $request)
331     {
332         $perPage = (int) $request->get('per_page', 20);
333         if ($perPage < 1) $perPage = 1;
334         if ($perPage > 50) $perPage = 50;
335 
336         return response()->json(
337             AdminReport::with('user:id,name,email')->latest()->paginate($perPage)
338         );
339     }
340 
341     
342     public function createReport(Request $request)
343     {
344         $data = $request->validate([
345             'name' => 'required|string|max:80',
346             'start_date' => 'nullable|date',
347             'end_date' => 'nullable|date|after_or_equal:start_date',
348         ]);
349 
350         $startDate = $data['start_date'] ?? now()->subMonth();
351         $endDate = $data['end_date'] ?? now();
352         $payload = $this->buildReportData($startDate, $endDate);
353 
354         $report = AdminReport::create([
355             'name' => $data['name'],
356             'start_date' => $startDate,
357             'end_date' => $endDate,
358             'generated_by' => $request->user()->id,
359             'payload' => $payload,
360         ]);
361 
362         return response()->json([
363             'message' => 'Report saved',
364             'report' => $report,
365         ], 201);
366     }
367 
368     public function showReport($id)
369     {
370         $report = AdminReport::with('user:id,name,email')->findOrFail($id);
371         return response()->json($report);
372     }
373 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\User
- Line 6: Imports a dependency used in this file: App\Models\House
- Line 7: Imports a dependency used in this file: App\Models\RequestRental
- Line 8: Imports a dependency used in this file: App\Models\Payment
- Line 9: Imports a dependency used in this file: App\Models\Subscription
- Line 10: Imports a dependency used in this file: App\Models\SubscriptionPlan
- Line 11: Imports a dependency used in this file: App\Models\AdminReport
- Line 12: Imports a dependency used in this file: Illuminate\Http\Request
- Line 13: Imports a dependency used in this file: Illuminate\Support\Facades\DB
- Line 14: Blank line for separation.
- Line 15: Defines the AdminController class.
- Line 16: Implements application logic: {
- Line 17: ========== middleware to ensure admin ==========
- Line 18: Defines the __construct function.
- Line 19: Implements application logic: {
- Line 20: Implements application logic: $this->middleware('auth:sanctum');
- Line 21: Implements application logic: $this->middleware(function ($request, $next) {
- Line 22: Adds a conditional branch: if (!$request->user()->isAdmin()) {
- Line 23: Returns a JSON HTTP response to the client.
- Line 24: Implements application logic: }
- Line 25: Returns a value from this function: return $next($request);
- Line 26: Implements application logic: });
- Line 27: Implements application logic: }
- Line 28: Blank line for separation.
- Line 29: ========== dashboard stats ==========
- Line 30: Defines the dashboard function.
- Line 31: Implements application logic: {
- Line 32: Implements application logic: $stats = [
- Line 33: Implements application logic: 'total_users' => User::count(),
- Line 34: Implements application logic: 'total_owners' => User::where('role', 'owner')->count(),
- Line 35: Implements application logic: 'total_renters' => User::where('role', 'renter')->count(),
- Line 36: Implements application logic: 'total_houses' => House::count(),
- Line 37: Implements application logic: 'pending_houses' => House::where('is_approved', false)->count(),
- Line 38: Implements application logic: 'available_houses' => House::where('status', 'available')->count(),
- Line 39: Implements application logic: 'rented_houses' => House::where('status', 'rented')->count(),
- Line 40: Implements application logic: 'total_requests' => RequestRental::count(),
- Line 41: Implements application logic: 'pending_requests' => RequestRental::where('status', 'pending')->count(),
- Line 42: Implements application logic: 'total_payments' => Payment::sum('amount'),
- Line 43: Implements application logic: 'active_subscriptions' => Subscription::where('status', 'active')->count()
- Line 44: Implements application logic: ];
- Line 45: Blank line for separation.
- Line 46: Returns a JSON HTTP response to the client.
- Line 47: Implements application logic: }
- Line 48: Blank line for separation.
- Line 49: ========== get all users ==========
- Line 50: Defines the users function.
- Line 51: Implements application logic: {
- Line 52: Implements application logic: $perPage = (int) $request->get('per_page', 20);
- Line 53: Adds a conditional branch: if ($perPage < 1) $perPage = 1;
- Line 54: Adds a conditional branch: if ($perPage > 50) $perPage = 50;
- Line 55: Blank line for separation.
- Line 56: Implements application logic: $query = User::query()->withCount('houses');
- Line 57: Blank line for separation.
- Line 58: Adds a conditional branch: if ($request->filled('role')) {
- Line 59: Implements application logic: $role = $request->get('role');
- Line 60: Adds a conditional branch: if (in_array($role, ['owner', 'renter', 'admin'], true)) {
- Line 61: Implements application logic: $query->where('role', $role);
- Line 62: Implements application logic: }
- Line 63: Implements application logic: }
- Line 64: Blank line for separation.
- Line 65: Adds a conditional branch: if ($request->filled('verified')) {
- Line 66: Implements application logic: $verified = filter_var($request->get('verified'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
- Line 67: Adds a conditional branch: if (!is_null($verified)) {
- Line 68: Implements application logic: $query->where('is_verified', $verified);
- Line 69: Implements application logic: }
- Line 70: Implements application logic: }
- Line 71: Blank line for separation.
- Line 72: Adds a conditional branch: if ($request->filled('suspended')) {
- Line 73: Implements application logic: $suspended = filter_var($request->get('suspended'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
- Line 74: Adds a conditional branch: if (!is_null($suspended)) {
- Line 75: Implements application logic: $query->where('is_suspended', $suspended);
- Line 76: Implements application logic: }
- Line 77: Implements application logic: }
- Line 78: Blank line for separation.
- Line 79: Adds a conditional branch: if ($request->filled('q')) {
- Line 80: Implements application logic: $q = $request->get('q');
- Line 81: Implements application logic: $query->where(function ($sub) use ($q) {
- Line 82: Implements application logic: $sub->where('name', 'like', "%{$q}%")
- Line 83: Implements application logic: ->orWhere('email', 'like', "%{$q}%");
- Line 84: Implements application logic: });
- Line 85: Implements application logic: }
- Line 86: Blank line for separation.
- Line 87: Implements application logic: $users = $query->latest()->paginate($perPage);
- Line 88: Returns a JSON HTTP response to the client.
- Line 89: Implements application logic: }
- Line 90: Blank line for separation.
- Line 91: ========== suspend / unsuspend user ==========
- Line 92: Defines the suspendUser function.
- Line 93: Implements application logic: {
- Line 94: Implements application logic: $request->validate([
- Line 95: Implements application logic: 'is_suspended' => 'required|boolean'
- Line 96: Implements application logic: ]);
- Line 97: Blank line for separation.
- Line 98: Implements application logic: $user = User::findOrFail($id);
- Line 99: Blank line for separation.
- Line 100: Adds a conditional branch: if (auth()->id() === $user->id) {
- Line 101: Returns a JSON HTTP response to the client.
- Line 102: Implements application logic: }
- Line 103: Blank line for separation.
- Line 104: Adds a conditional branch: if ($user->role === 'admin') {
- Line 105: Returns a JSON HTTP response to the client.
- Line 106: Implements application logic: }
- Line 107: Blank line for separation.
- Line 108: Implements application logic: $user->update(['is_suspended' => (bool) $request->is_suspended]);
- Line 109: Blank line for separation.
- Line 110: Returns a JSON HTTP response to the client.
- Line 111: Implements application logic: 'message' => $user->is_suspended ? 'User suspended' : 'User unsuspended',
- Line 112: Implements application logic: 'user' => $user
- Line 113: Implements application logic: ]);
- Line 114: Implements application logic: }
- Line 115: Blank line for separation.
- Line 116: ========== verify user ==========
- Line 117: Defines the verifyUser function.
- Line 118: Implements application logic: {
- Line 119: Implements application logic: $user = User::findOrFail($id);
- Line 120: Implements application logic: $user->update(['is_verified' => true]);
- Line 121: Blank line for separation.
- Line 122: Returns a JSON HTTP response to the client.
- Line 123: Implements application logic: 'message' => 'User verified successfully',
- Line 124: Implements application logic: 'user' => $user
- Line 125: Implements application logic: ]);
- Line 126: Implements application logic: }
- Line 127: Blank line for separation.
- Line 128: ========== suspend/delete user ==========
- Line 129: Defines the deleteUser function.
- Line 130: Implements application logic: {
- Line 131: Implements application logic: $user = User::findOrFail($id);
- Line 132: Blank line for separation.
- Line 133: Don't allow deleting yourself
- Line 134: Adds a conditional branch: if (auth()->id() === $user->id) {
- Line 135: Returns a JSON HTTP response to the client.
- Line 136: Implements application logic: }
- Line 137: Blank line for separation.
- Line 138: Implements application logic: $user->delete();
- Line 139: Blank line for separation.
- Line 140: Returns a JSON HTTP response to the client.
- Line 141: Implements application logic: }
- Line 142: Blank line for separation.
- Line 143: ========== get pending houses ==========
- Line 144: Defines the pendingHouses function.
- Line 145: Implements application logic: {
- Line 146: Implements application logic: $houses = House::with('owner', 'images')
- Line 147: Implements application logic: ->where('is_approved', false)
- Line 148: Implements application logic: ->latest()
- Line 149: Implements application logic: ->paginate(20);
- Line 150: Blank line for separation.
- Line 151: Returns a JSON HTTP response to the client.
- Line 152: Implements application logic: }
- Line 153: Blank line for separation.
- Line 154: ========== approve house ==========
- Line 155: Defines the approveHouse function.
- Line 156: Implements application logic: {
- Line 157: Implements application logic: $house = House::findOrFail($id);
- Line 158: Implements application logic: $house->update(['is_approved' => true]);
- Line 159: Blank line for separation.
- Line 160: Notify owner
- Line 161: Implements application logic: \App\Models\Notification::create([
- Line 162: Implements application logic: 'user_id' => $house->owner_id,
- Line 163: Implements application logic: 'message' => "Your house '{$house->title}' has been approved",
- Line 164: Implements application logic: 'is_read' => false
- Line 165: Implements application logic: ]);
- Line 166: Blank line for separation.
- Line 167: Returns a JSON HTTP response to the client.
- Line 168: Implements application logic: 'message' => 'House approved',
- Line 169: Implements application logic: 'house' => $house
- Line 170: Implements application logic: ]);
- Line 171: Implements application logic: }
- Line 172: Blank line for separation.
- Line 173: ========== reject house ==========
- Line 174: Defines the rejectHouse function.
- Line 175: Implements application logic: {
- Line 176: Implements application logic: $house = House::findOrFail($id);
- Line 177: Blank line for separation.
- Line 178: Notify owner
- Line 179: Implements application logic: \App\Models\Notification::create([
- Line 180: Implements application logic: 'user_id' => $house->owner_id,
- Line 181: Implements application logic: 'message' => "Your house '{$house->title}' was rejected. Please check requirements.",
- Line 182: Implements application logic: 'is_read' => false
- Line 183: Implements application logic: ]);
- Line 184: Blank line for separation.
- Line 185: Implements application logic: $house->delete();
- Line 186: Blank line for separation.
- Line 187: Returns a JSON HTTP response to the client.
- Line 188: Implements application logic: }
- Line 189: Blank line for separation.
- Line 190: ========== remove house listing (admin) ==========
- Line 191: Defines the removeHouse function.
- Line 192: Implements application logic: {
- Line 193: Implements application logic: $request->validate([
- Line 194: Implements application logic: 'reason' => 'nullable|string|max:200'
- Line 195: Implements application logic: ]);
- Line 196: Blank line for separation.
- Line 197: Implements application logic: $house = House::findOrFail($id);
- Line 198: Implements application logic: $reason = $request->get('reason');
- Line 199: Blank line for separation.
- Line 200: Implements application logic: $msg = "Your house '{$house->title}' was removed by admin";
- Line 201: Adds a conditional branch: if ($reason) {
- Line 202: Implements application logic: $msg .= ": {$reason}";
- Line 203: Implements application logic: }
- Line 204: Blank line for separation.
- Line 205: Implements application logic: \App\Models\Notification::create([
- Line 206: Implements application logic: 'user_id' => $house->owner_id,
- Line 207: Implements application logic: 'message' => $msg,
- Line 208: Implements application logic: 'is_read' => false
- Line 209: Implements application logic: ]);
- Line 210: Blank line for separation.
- Line 211: Implements application logic: $house->delete();
- Line 212: Blank line for separation.
- Line 213: Returns a JSON HTTP response to the client.
- Line 214: Implements application logic: }
- Line 215: Blank line for separation.
- Line 216: ========== get all houses (admin view) ==========
- Line 217: Defines the allHouses function.
- Line 218: Implements application logic: {
- Line 219: Implements application logic: $houses = House::with('owner', 'images')
- Line 220: Implements application logic: ->latest()
- Line 221: Implements application logic: ->paginate(20);
- Line 222: Blank line for separation.
- Line 223: Returns a JSON HTTP response to the client.
- Line 224: Implements application logic: }
- Line 225: Blank line for separation.
- Line 226: ========== generate report ==========
- Line 227: Defines the report function.
- Line 228: Implements application logic: {
- Line 229: Implements application logic: $startDate = $request->get('start_date', now()->subMonth());
- Line 230: Implements application logic: $endDate = $request->get('end_date', now());
- Line 231: Blank line for separation.
- Line 232: Returns a JSON HTTP response to the client.
- Line 233: Implements application logic: }
- Line 234: Blank line for separation.
- Line 235: Defines the buildReportData function.
- Line 236: Implements application logic: {
- Line 237: Implements application logic: $dailyRevenue = Payment::select(
- Line 238: Performs a database schema or raw SQL operation: DB::raw('DATE(created_at) as date'),
- Line 239: Performs a database schema or raw SQL operation: DB::raw('SUM(amount) as total')
- Line 240: Implements application logic: )
- Line 241: Implements application logic: ->whereBetween('created_at', [$startDate, $endDate])
- Line 242: Implements application logic: ->groupBy(DB::raw('DATE(created_at)'))
- Line 243: Implements application logic: ->orderBy('date')
- Line 244: Implements application logic: ->get();
- Line 245: Blank line for separation.
- Line 246: Implements application logic: $paymentBreakdown = Payment::select('payment_method', DB::raw('SUM(amount) as total'))
- Line 247: Implements application logic: ->whereBetween('created_at', [$startDate, $endDate])
- Line 248: Implements application logic: ->groupBy('payment_method')
- Line 249: Implements application logic: ->orderByDesc('total')
- Line 250: Implements application logic: ->get();
- Line 251: Blank line for separation.
- Line 252: Returns a configuration array.
- Line 253: Implements application logic: 'period' => [
- Line 254: Implements application logic: 'start' => $startDate,
- Line 255: Implements application logic: 'end' => $endDate
- Line 256: Implements application logic: ],
- Line 257: Implements application logic: 'users_registered' => User::whereBetween('created_at', [$startDate, $endDate])->count(),
- Line 258: Implements application logic: 'houses_listed' => House::whereBetween('created_at', [$startDate, $endDate])->count(),
- Line 259: Implements application logic: 'requests_made' => RequestRental::whereBetween('created_at', [$startDate, $endDate])->count(),
- Line 260: Implements application logic: 'subscription_revenue' => Payment::whereBetween('created_at', [$startDate, $endDate])->sum('amount'),
- Line 261: Implements application logic: 'payment_methods' => $paymentBreakdown,
- Line 262: Implements application logic: 'daily_revenue' => $dailyRevenue,
- Line 263: Implements application logic: 'active_users' => User::where('created_at', '<=', $endDate)->count(),
- Line 264: Implements application logic: 'total_houses' => House::count(),
- Line 265: Implements application logic: ];
- Line 266: Implements application logic: }
- Line 267: Blank line for separation.
- Line 268: ========== subscription plans (admin) ==========
- Line 269: Defines the subscriptionPlans function.
- Line 270: Implements application logic: {
- Line 271: Implements application logic: $perPage = (int) $request->get('per_page', 20);
- Line 272: Adds a conditional branch: if ($perPage < 1) $perPage = 1;
- Line 273: Adds a conditional branch: if ($perPage > 50) $perPage = 50;
- Line 274: Blank line for separation.
- Line 275: Implements application logic: $query = SubscriptionPlan::query()->latest();
- Line 276: Blank line for separation.
- Line 277: Adds a conditional branch: if ($request->filled('active')) {
- Line 278: Implements application logic: $active = filter_var($request->get('active'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
- Line 279: Adds a conditional branch: if (!is_null($active)) {
- Line 280: Implements application logic: $query->where('is_active', $active);
- Line 281: Implements application logic: }
- Line 282: Implements application logic: }
- Line 283: Blank line for separation.
- Line 284: Returns a JSON HTTP response to the client.
- Line 285: Implements application logic: }
- Line 286: Blank line for separation.
- Line 287: Defines the createSubscriptionPlan function.
- Line 288: Implements application logic: {
- Line 289: Implements application logic: $data = $request->validate([
- Line 290: Implements application logic: 'name' => 'required|string|max:80',
- Line 291: Implements application logic: 'price' => 'required|numeric|min:0',
- Line 292: Implements application logic: 'duration_days' => 'required|integer|min:1|max:3650',
- Line 293: Implements application logic: 'is_active' => 'sometimes|boolean',
- Line 294: Implements application logic: ]);
- Line 295: Blank line for separation.
- Line 296: Implements application logic: $plan = SubscriptionPlan::create($data);
- Line 297: Blank line for separation.
- Line 298: Returns a JSON HTTP response to the client.
- Line 299: Implements application logic: 'message' => 'Plan created',
- Line 300: Implements application logic: 'plan' => $plan,
- Line 301: Implements application logic: ], 201);
- Line 302: Implements application logic: }
- Line 303: Blank line for separation.
- Line 304: Defines the updateSubscriptionPlan function.
- Line 305: Implements application logic: {
- Line 306: Implements application logic: $plan = SubscriptionPlan::findOrFail($id);
- Line 307: Implements application logic: $data = $request->validate([
- Line 308: Implements application logic: 'name' => 'sometimes|required|string|max:80',
- Line 309: Implements application logic: 'price' => 'sometimes|required|numeric|min:0',
- Line 310: Implements application logic: 'duration_days' => 'sometimes|required|integer|min:1|max:3650',
- Line 311: Implements application logic: 'is_active' => 'sometimes|boolean',
- Line 312: Implements application logic: ]);
- Line 313: Blank line for separation.
- Line 314: Implements application logic: $plan->update($data);
- Line 315: Blank line for separation.
- Line 316: Returns a JSON HTTP response to the client.
- Line 317: Implements application logic: 'message' => 'Plan updated',
- Line 318: Implements application logic: 'plan' => $plan,
- Line 319: Implements application logic: ]);
- Line 320: Implements application logic: }
- Line 321: Blank line for separation.
- Line 322: Defines the deleteSubscriptionPlan function.
- Line 323: Implements application logic: {
- Line 324: Implements application logic: $plan = SubscriptionPlan::findOrFail($id);
- Line 325: Implements application logic: $plan->delete();
- Line 326: Returns a JSON HTTP response to the client.
- Line 327: Implements application logic: }
- Line 328: Blank line for separation.
- Line 329: ========== saved reports (admin) ==========
- Line 330: Defines the reports function.
- Line 331: Implements application logic: {
- Line 332: Implements application logic: $perPage = (int) $request->get('per_page', 20);
- Line 333: Adds a conditional branch: if ($perPage < 1) $perPage = 1;
- Line 334: Adds a conditional branch: if ($perPage > 50) $perPage = 50;
- Line 335: Blank line for separation.
- Line 336: Returns a JSON HTTP response to the client.
- Line 337: Implements application logic: AdminReport::with('user:id,name,email')->latest()->paginate($perPage)
- Line 338: Implements application logic: );
- Line 339: Implements application logic: }
- Line 340: Blank line for separation.
- Line 341: Blank line for separation.
- Line 342: Defines the createReport function.
- Line 343: Implements application logic: {
- Line 344: Implements application logic: $data = $request->validate([
- Line 345: Implements application logic: 'name' => 'required|string|max:80',
- Line 346: Implements application logic: 'start_date' => 'nullable|date',
- Line 347: Implements application logic: 'end_date' => 'nullable|date|after_or_equal:start_date',
- Line 348: Implements application logic: ]);
- Line 349: Blank line for separation.
- Line 350: Implements application logic: $startDate = $data['start_date'] ?? now()->subMonth();
- Line 351: Implements application logic: $endDate = $data['end_date'] ?? now();
- Line 352: Implements application logic: $payload = $this->buildReportData($startDate, $endDate);
- Line 353: Blank line for separation.
- Line 354: Implements application logic: $report = AdminReport::create([
- Line 355: Implements application logic: 'name' => $data['name'],
- Line 356: Implements application logic: 'start_date' => $startDate,
- Line 357: Implements application logic: 'end_date' => $endDate,
- Line 358: Implements application logic: 'generated_by' => $request->user()->id,
- Line 359: Implements application logic: 'payload' => $payload,
- Line 360: Implements application logic: ]);
- Line 361: Blank line for separation.
- Line 362: Returns a JSON HTTP response to the client.
- Line 363: Implements application logic: 'message' => 'Report saved',
- Line 364: Implements application logic: 'report' => $report,
- Line 365: Implements application logic: ], 201);
- Line 366: Implements application logic: }
- Line 367: Blank line for separation.
- Line 368: Defines the showReport function.
- Line 369: Implements application logic: {
- Line 370: Implements application logic: $report = AdminReport::with('user:id,name,email')->findOrFail($id);
- Line 371: Returns a JSON HTTP response to the client.
- Line 372: Implements application logic: }
- Line 373: Implements application logic: }
