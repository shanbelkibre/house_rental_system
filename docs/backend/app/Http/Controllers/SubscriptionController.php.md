# SubscriptionController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\Subscription;
6 use App\Models\Payment;
7 use App\Models\Notification;
8 use Illuminate\Http\Request;
9 use Carbon\Carbon;
10 
11 class SubscriptionController extends Controller
12 {
13     // ========== GET SUBSCRIPTION STATUS ==========
14     public function mySubscription(Request $request)
15     {
16         $user = $request->user();
17 
18         if (!$user->isOwner()) {
19             return response()->json([
20                 'message' => 'Only owners have subscriptions'
21             ], 403);
22         }
23 
24         $subscription = $user->subscription;
25 
26         if (!$subscription) {
27             return response()->json([
28                 'has_subscription' => false,
29                 'message' => 'No active subscription'
30             ]);
31         }
32 
33         return response()->json([
34             'has_subscription' => true,
35             'subscription' => $subscription,
36             'is_active' => $subscription->status === 'active' && $subscription->end_date >= Carbon::now(),
37             'days_remaining' => $subscription->status === 'active' ? Carbon::now()->diffInDays($subscription->end_date, false) : 0
38         ]);
39     }
40 
41     // ========== CREATE SUBSCRIPTION (Payment simulation) ==========
42     public function subscribe(Request $request)
43     {
44         $user = $request->user();
45 
46         if (!$user->isOwner()) {
47             return response()->json([
48                 'message' => 'Only owners can subscribe'
49             ], 403);
50         }
51 
52         $request->validate([
53             'payment_method' => 'required|string|in:telebirr,chapa,bank',
54             'amount' => 'required|numeric|min:500'
55         ]);
56 
57         // Calculate dates
58         $startDate = Carbon::now();
59         $endDate = Carbon::now()->addMonths(1);
60 
61         // Create or update subscription
62         $subscription = Subscription::updateOrCreate(
63             ['owner_id' => $user->id],
64             [
65                 'status' => 'active',
66                 'start_date' => $startDate,
67                 'end_date' => $endDate
68             ]
69         );
70 
71         // Record payment
72         $payment = Payment::create([
73             'owner_id' => $user->id,
74             'amount' => $request->amount,
75             'payment_method' => $request->payment_method,
76             'status' => 'success',
77             'transaction_id' => 'TXN_' . time() . '_' . $user->id
78         ]);
79 
80         // Send notification
81         Notification::create([
82             'user_id' => $user->id,
83             'message' => "Your subscription is active until {$endDate->format('M d, Y')}",
84             'is_read' => false
85         ]);
86 
87         return response()->json([
88             'message' => 'Subscription successful',
89             'subscription' => $subscription,
90             'payment' => $payment
91         ]);
92     }
93 
94     // ========== CHECK IF OWNER CAN POST ==========
95     public function canPost(Request $request)
96     {
97         $user = $request->user();
98 
99         if (!$user->isOwner()) {
100             return response()->json(['can_post' => false]);
101         }
102 
103         $canPost = $user->hasActiveSubscription();
104 
105         return response()->json([
106             'can_post' => $canPost,
107             'message' => $canPost ? 'You can post houses' : 'You need an active subscription'
108         ]);
109     }
110 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\Subscription
- Line 6: Imports a dependency used in this file: App\Models\Payment
- Line 7: Imports a dependency used in this file: App\Models\Notification
- Line 8: Imports a dependency used in this file: Illuminate\Http\Request
- Line 9: Imports a dependency used in this file: Carbon\Carbon
- Line 10: Blank line for separation.
- Line 11: Defines the SubscriptionController class.
- Line 12: Implements application logic: {
- Line 13: ========== get subscription status ==========
- Line 14: Defines the mySubscription function.
- Line 15: Implements application logic: {
- Line 16: Implements application logic: $user = $request->user();
- Line 17: Blank line for separation.
- Line 18: Adds a conditional branch: if (!$user->isOwner()) {
- Line 19: Returns a JSON HTTP response to the client.
- Line 20: Implements application logic: 'message' => 'Only owners have subscriptions'
- Line 21: Implements application logic: ], 403);
- Line 22: Implements application logic: }
- Line 23: Blank line for separation.
- Line 24: Implements application logic: $subscription = $user->subscription;
- Line 25: Blank line for separation.
- Line 26: Adds a conditional branch: if (!$subscription) {
- Line 27: Returns a JSON HTTP response to the client.
- Line 28: Implements application logic: 'has_subscription' => false,
- Line 29: Implements application logic: 'message' => 'No active subscription'
- Line 30: Implements application logic: ]);
- Line 31: Implements application logic: }
- Line 32: Blank line for separation.
- Line 33: Returns a JSON HTTP response to the client.
- Line 34: Implements application logic: 'has_subscription' => true,
- Line 35: Implements application logic: 'subscription' => $subscription,
- Line 36: Implements application logic: 'is_active' => $subscription->status === 'active' && $subscription->end_date >= Carbon::now(),
- Line 37: Implements application logic: 'days_remaining' => $subscription->status === 'active' ? Carbon::now()->diffInDays($subscription->end_date, false) : 0
- Line 38: Implements application logic: ]);
- Line 39: Implements application logic: }
- Line 40: Blank line for separation.
- Line 41: ========== create subscription (payment simulation) ==========
- Line 42: Defines the subscribe function.
- Line 43: Implements application logic: {
- Line 44: Implements application logic: $user = $request->user();
- Line 45: Blank line for separation.
- Line 46: Adds a conditional branch: if (!$user->isOwner()) {
- Line 47: Returns a JSON HTTP response to the client.
- Line 48: Implements application logic: 'message' => 'Only owners can subscribe'
- Line 49: Implements application logic: ], 403);
- Line 50: Implements application logic: }
- Line 51: Blank line for separation.
- Line 52: Implements application logic: $request->validate([
- Line 53: Implements application logic: 'payment_method' => 'required|string|in:telebirr,chapa,bank',
- Line 54: Implements application logic: 'amount' => 'required|numeric|min:500'
- Line 55: Implements application logic: ]);
- Line 56: Blank line for separation.
- Line 57: Calculate dates
- Line 58: Implements application logic: $startDate = Carbon::now();
- Line 59: Implements application logic: $endDate = Carbon::now()->addMonths(1);
- Line 60: Blank line for separation.
- Line 61: Create or update subscription
- Line 62: Implements application logic: $subscription = Subscription::updateOrCreate(
- Line 63: Implements application logic: ['owner_id' => $user->id],
- Line 64: Implements application logic: [
- Line 65: Implements application logic: 'status' => 'active',
- Line 66: Implements application logic: 'start_date' => $startDate,
- Line 67: Implements application logic: 'end_date' => $endDate
- Line 68: Implements application logic: ]
- Line 69: Implements application logic: );
- Line 70: Blank line for separation.
- Line 71: Record payment
- Line 72: Implements application logic: $payment = Payment::create([
- Line 73: Implements application logic: 'owner_id' => $user->id,
- Line 74: Implements application logic: 'amount' => $request->amount,
- Line 75: Implements application logic: 'payment_method' => $request->payment_method,
- Line 76: Implements application logic: 'status' => 'success',
- Line 77: Implements application logic: 'transaction_id' => 'TXN_' . time() . '_' . $user->id
- Line 78: Implements application logic: ]);
- Line 79: Blank line for separation.
- Line 80: Send notification
- Line 81: Implements application logic: Notification::create([
- Line 82: Implements application logic: 'user_id' => $user->id,
- Line 83: Implements application logic: 'message' => "Your subscription is active until {$endDate->format('M d, Y')}",
- Line 84: Implements application logic: 'is_read' => false
- Line 85: Implements application logic: ]);
- Line 86: Blank line for separation.
- Line 87: Returns a JSON HTTP response to the client.
- Line 88: Implements application logic: 'message' => 'Subscription successful',
- Line 89: Implements application logic: 'subscription' => $subscription,
- Line 90: Implements application logic: 'payment' => $payment
- Line 91: Implements application logic: ]);
- Line 92: Implements application logic: }
- Line 93: Blank line for separation.
- Line 94: ========== check if owner can post ==========
- Line 95: Defines the canPost function.
- Line 96: Implements application logic: {
- Line 97: Implements application logic: $user = $request->user();
- Line 98: Blank line for separation.
- Line 99: Adds a conditional branch: if (!$user->isOwner()) {
- Line 100: Returns a JSON HTTP response to the client.
- Line 101: Implements application logic: }
- Line 102: Blank line for separation.
- Line 103: Implements application logic: $canPost = $user->hasActiveSubscription();
- Line 104: Blank line for separation.
- Line 105: Returns a JSON HTTP response to the client.
- Line 106: Implements application logic: 'can_post' => $canPost,
- Line 107: Implements application logic: 'message' => $canPost ? 'You can post houses' : 'You need an active subscription'
- Line 108: Implements application logic: ]);
- Line 109: Implements application logic: }
- Line 110: Implements application logic: }
