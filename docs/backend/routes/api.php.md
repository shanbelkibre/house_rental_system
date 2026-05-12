# api.php

## Code (numbered)

```php
1 <?php
2 
3 use Illuminate\Support\Facades\Route;
4 use App\Http\Controllers\AuthController;
5 use App\Http\Controllers\HouseController;
6 use App\Http\Controllers\RequestController;
7 use App\Http\Controllers\ReviewController;
8 use App\Http\Controllers\SubscriptionController;
9 use App\Http\Controllers\VisitController;
10 use App\Http\Controllers\AgreementController;
11 use App\Http\Controllers\NotificationController;
12 use App\Http\Controllers\AdminController;
13 
14 
15 
16 // ==================== PUBLIC ROUTES (No Authentication) ====================
17 
18 // Authentication
19 Route::post('/register', [AuthController::class, 'register']);
20 Route::post('/login', [AuthController::class, 'login']);
21 
22 // Public House Viewing
23 Route::get('/houses', [HouseController::class, 'index']);
24 Route::get('/houses/{id}', [HouseController::class, 'show']);
25 Route::get('/houses/{houseId}/reviews', [ReviewController::class, 'houseReviews']);
26 Route::get('/stats', [HouseController::class, 'stats']);
27 
28 
29 // ==================== PROTECTED ROUTES (Require Token) ====================
30 
31 Route::middleware('auth:sanctum')->group(function () {
32 
33     // ========== AUTHENTICATION & PROFILE ==========
34     Route::post('/logout', [AuthController::class, 'logout']);
35     Route::get('/me', [AuthController::class, 'me']);
36     Route::put('/profile', [AuthController::class, 'updateProfile']);
37     Route::put('/change-password', [AuthController::class, 'changePassword']);
38 
39     // ========== HOUSE MANAGEMENT (Owner Only) ==========
40     Route::post('/houses', [HouseController::class, 'store']);
41     Route::put('/houses/{id}', [HouseController::class, 'update']);
42     Route::delete('/houses/{id}', [HouseController::class, 'destroy']);
43     Route::post('/houses/{id}/images', [HouseController::class, 'uploadImage']);
44     Route::post('/houses/{id}/images/multiple', [HouseController::class, 'uploadMultipleImages']);
45     Route::post('/houses/{id}/license', [HouseController::class, 'uploadLicense']);
46     Route::delete('/houses/{houseId}/images/{imageId}', [HouseController::class, 'deleteImage']);
47     Route::get('/my-houses', [HouseController::class, 'myHouses']);
48 
49     // ========== RENTAL REQUESTS ==========
50     Route::post('/requests', [RequestController::class, 'store']);
51     Route::put('/requests/{id}', [RequestController::class, 'update']);
52     Route::delete('/requests/{id}', [RequestController::class, 'destroy']);
53     Route::get('/my-requests', [RequestController::class, 'myRequests']);
54     Route::get('/owner-requests', [RequestController::class, 'ownerRequests']);
55 
56     // ========== REVIEWS & RATINGS ==========
57     Route::post('/reviews', [ReviewController::class, 'store']);
58 
59     // ========== SUBSCRIPTION MANAGEMENT ==========
60     Route::get('/my-subscription', [SubscriptionController::class, 'mySubscription']);
61     Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);
62     Route::get('/can-post', [SubscriptionController::class, 'canPost']);
63 
64     // ========== HOUSE VISITS ==========
65     Route::post('/visits', [VisitController::class, 'schedule']);
66     Route::put('/visits/{id}', [VisitController::class, 'confirm']);
67     Route::get('/my-visits', [VisitController::class, 'myVisits']);
68 
69     // ========== OFFLINE AGREEMENTS ==========
70     Route::post('/agreements', [AgreementController::class, 'store']);
71     Route::put('/agreements/{id}/confirm', [AgreementController::class, 'confirm']);
72     Route::put('/agreements/{id}/terminate', [AgreementController::class, 'terminate']);
73     Route::get('/my-agreements', [AgreementController::class, 'myAgreements']);
74 
75     // ========== NOTIFICATIONS ==========
76     Route::get('/notifications', [NotificationController::class, 'index']);
77     Route::get('/notifications/unread-count', [NotificationController::class, 'unreadCount']);
78     Route::put('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);
79     Route::put('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);
80     Route::delete('/notifications/{id}', [NotificationController::class, 'destroy']);
81 
82     // ========== ADMIN ONLY ROUTES ==========
83     Route::prefix('admin')->middleware('admin')->group(function () {
84         // Dashboard & Statistics
85         Route::get('/dashboard', [AdminController::class, 'dashboard']);
86         Route::get('/report', [AdminController::class, 'report']);
87         Route::get('/reports', [AdminController::class, 'reports']);
88         Route::post('/reports', [AdminController::class, 'createReport']);
89         Route::get('/reports/{id}', [AdminController::class, 'showReport']);
90 
91         // Subscription Plans
92         Route::get('/subscription-plans', [AdminController::class, 'subscriptionPlans']);
93         Route::post('/subscription-plans', [AdminController::class, 'createSubscriptionPlan']);
94         Route::put('/subscription-plans/{id}', [AdminController::class, 'updateSubscriptionPlan']);
95         Route::delete('/subscription-plans/{id}', [AdminController::class, 'deleteSubscriptionPlan']);
96         
97         // User Management
98         Route::get('/users', [AdminController::class, 'users']);
99         Route::put('/users/{id}/verify', [AdminController::class, 'verifyUser']);
100         Route::put('/users/{id}/suspend', [AdminController::class, 'suspendUser']);
101         Route::delete('/users/{id}', [AdminController::class, 'deleteUser']);
102         
103         // House Management
104         Route::get('/pending-houses', [AdminController::class, 'pendingHouses']);
105         Route::get('/all-houses', [AdminController::class, 'allHouses']);
106         Route::put('/houses/{id}/approve', [AdminController::class, 'approveHouse']);
107         Route::delete('/houses/{id}/reject', [AdminController::class, 'rejectHouse']);
108         Route::delete('/houses/{id}', [AdminController::class, 'removeHouse']);
109     });
110 });
111 
112 require base_path('routes/test_upload.php');
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Illuminate\Support\Facades\Route
- Line 4: Imports a dependency used in this file: App\Http\Controllers\AuthController
- Line 5: Imports a dependency used in this file: App\Http\Controllers\HouseController
- Line 6: Imports a dependency used in this file: App\Http\Controllers\RequestController
- Line 7: Imports a dependency used in this file: App\Http\Controllers\ReviewController
- Line 8: Imports a dependency used in this file: App\Http\Controllers\SubscriptionController
- Line 9: Imports a dependency used in this file: App\Http\Controllers\VisitController
- Line 10: Imports a dependency used in this file: App\Http\Controllers\AgreementController
- Line 11: Imports a dependency used in this file: App\Http\Controllers\NotificationController
- Line 12: Imports a dependency used in this file: App\Http\Controllers\AdminController
- Line 13: Blank line for separation.
- Line 14: Blank line for separation.
- Line 15: Blank line for separation.
- Line 16: ==================== public routes (no authentication) ====================
- Line 17: Blank line for separation.
- Line 18: Authentication
- Line 19: Defines a route or routing rule: Route::post('/register', [AuthController::class, 'register']);
- Line 20: Defines a route or routing rule: Route::post('/login', [AuthController::class, 'login']);
- Line 21: Blank line for separation.
- Line 22: Public house viewing
- Line 23: Defines a route or routing rule: Route::get('/houses', [HouseController::class, 'index']);
- Line 24: Defines a route or routing rule: Route::get('/houses/{id}', [HouseController::class, 'show']);
- Line 25: Defines a route or routing rule: Route::get('/houses/{houseId}/reviews', [ReviewController::class, 'houseReviews']);
- Line 26: Defines a route or routing rule: Route::get('/stats', [HouseController::class, 'stats']);
- Line 27: Blank line for separation.
- Line 28: Blank line for separation.
- Line 29: ==================== protected routes (require token) ====================
- Line 30: Blank line for separation.
- Line 31: Defines a route or routing rule: Route::middleware('auth:sanctum')->group(function () {
- Line 32: Blank line for separation.
- Line 33: ========== authentication & profile ==========
- Line 34: Defines a route or routing rule: Route::post('/logout', [AuthController::class, 'logout']);
- Line 35: Defines a route or routing rule: Route::get('/me', [AuthController::class, 'me']);
- Line 36: Defines a route or routing rule: Route::put('/profile', [AuthController::class, 'updateProfile']);
- Line 37: Defines a route or routing rule: Route::put('/change-password', [AuthController::class, 'changePassword']);
- Line 38: Blank line for separation.
- Line 39: ========== house management (owner only) ==========
- Line 40: Defines a route or routing rule: Route::post('/houses', [HouseController::class, 'store']);
- Line 41: Defines a route or routing rule: Route::put('/houses/{id}', [HouseController::class, 'update']);
- Line 42: Defines a route or routing rule: Route::delete('/houses/{id}', [HouseController::class, 'destroy']);
- Line 43: Defines a route or routing rule: Route::post('/houses/{id}/images', [HouseController::class, 'uploadImage']);
- Line 44: Defines a route or routing rule: Route::post('/houses/{id}/images/multiple', [HouseController::class, 'uploadMultipleImages']);
- Line 45: Defines a route or routing rule: Route::post('/houses/{id}/license', [HouseController::class, 'uploadLicense']);
- Line 46: Defines a route or routing rule: Route::delete('/houses/{houseId}/images/{imageId}', [HouseController::class, 'deleteImage']);
- Line 47: Defines a route or routing rule: Route::get('/my-houses', [HouseController::class, 'myHouses']);
- Line 48: Blank line for separation.
- Line 49: ========== rental requests ==========
- Line 50: Defines a route or routing rule: Route::post('/requests', [RequestController::class, 'store']);
- Line 51: Defines a route or routing rule: Route::put('/requests/{id}', [RequestController::class, 'update']);
- Line 52: Defines a route or routing rule: Route::delete('/requests/{id}', [RequestController::class, 'destroy']);
- Line 53: Defines a route or routing rule: Route::get('/my-requests', [RequestController::class, 'myRequests']);
- Line 54: Defines a route or routing rule: Route::get('/owner-requests', [RequestController::class, 'ownerRequests']);
- Line 55: Blank line for separation.
- Line 56: ========== reviews & ratings ==========
- Line 57: Defines a route or routing rule: Route::post('/reviews', [ReviewController::class, 'store']);
- Line 58: Blank line for separation.
- Line 59: ========== subscription management ==========
- Line 60: Defines a route or routing rule: Route::get('/my-subscription', [SubscriptionController::class, 'mySubscription']);
- Line 61: Defines a route or routing rule: Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);
- Line 62: Defines a route or routing rule: Route::get('/can-post', [SubscriptionController::class, 'canPost']);
- Line 63: Blank line for separation.
- Line 64: ========== house visits ==========
- Line 65: Defines a route or routing rule: Route::post('/visits', [VisitController::class, 'schedule']);
- Line 66: Defines a route or routing rule: Route::put('/visits/{id}', [VisitController::class, 'confirm']);
- Line 67: Defines a route or routing rule: Route::get('/my-visits', [VisitController::class, 'myVisits']);
- Line 68: Blank line for separation.
- Line 69: ========== offline agreements ==========
- Line 70: Defines a route or routing rule: Route::post('/agreements', [AgreementController::class, 'store']);
- Line 71: Defines a route or routing rule: Route::put('/agreements/{id}/confirm', [AgreementController::class, 'confirm']);
- Line 72: Defines a route or routing rule: Route::put('/agreements/{id}/terminate', [AgreementController::class, 'terminate']);
- Line 73: Defines a route or routing rule: Route::get('/my-agreements', [AgreementController::class, 'myAgreements']);
- Line 74: Blank line for separation.
- Line 75: ========== notifications ==========
- Line 76: Defines a route or routing rule: Route::get('/notifications', [NotificationController::class, 'index']);
- Line 77: Defines a route or routing rule: Route::get('/notifications/unread-count', [NotificationController::class, 'unreadCount']);
- Line 78: Defines a route or routing rule: Route::put('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);
- Line 79: Defines a route or routing rule: Route::put('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);
- Line 80: Defines a route or routing rule: Route::delete('/notifications/{id}', [NotificationController::class, 'destroy']);
- Line 81: Blank line for separation.
- Line 82: ========== admin only routes ==========
- Line 83: Defines a route or routing rule: Route::prefix('admin')->middleware('admin')->group(function () {
- Line 84: Dashboard & statistics
- Line 85: Defines a route or routing rule: Route::get('/dashboard', [AdminController::class, 'dashboard']);
- Line 86: Defines a route or routing rule: Route::get('/report', [AdminController::class, 'report']);
- Line 87: Defines a route or routing rule: Route::get('/reports', [AdminController::class, 'reports']);
- Line 88: Defines a route or routing rule: Route::post('/reports', [AdminController::class, 'createReport']);
- Line 89: Defines a route or routing rule: Route::get('/reports/{id}', [AdminController::class, 'showReport']);
- Line 90: Blank line for separation.
- Line 91: Subscription plans
- Line 92: Defines a route or routing rule: Route::get('/subscription-plans', [AdminController::class, 'subscriptionPlans']);
- Line 93: Defines a route or routing rule: Route::post('/subscription-plans', [AdminController::class, 'createSubscriptionPlan']);
- Line 94: Defines a route or routing rule: Route::put('/subscription-plans/{id}', [AdminController::class, 'updateSubscriptionPlan']);
- Line 95: Defines a route or routing rule: Route::delete('/subscription-plans/{id}', [AdminController::class, 'deleteSubscriptionPlan']);
- Line 96: Blank line for separation.
- Line 97: User management
- Line 98: Defines a route or routing rule: Route::get('/users', [AdminController::class, 'users']);
- Line 99: Defines a route or routing rule: Route::put('/users/{id}/verify', [AdminController::class, 'verifyUser']);
- Line 100: Defines a route or routing rule: Route::put('/users/{id}/suspend', [AdminController::class, 'suspendUser']);
- Line 101: Defines a route or routing rule: Route::delete('/users/{id}', [AdminController::class, 'deleteUser']);
- Line 102: Blank line for separation.
- Line 103: House management
- Line 104: Defines a route or routing rule: Route::get('/pending-houses', [AdminController::class, 'pendingHouses']);
- Line 105: Defines a route or routing rule: Route::get('/all-houses', [AdminController::class, 'allHouses']);
- Line 106: Defines a route or routing rule: Route::put('/houses/{id}/approve', [AdminController::class, 'approveHouse']);
- Line 107: Defines a route or routing rule: Route::delete('/houses/{id}/reject', [AdminController::class, 'rejectHouse']);
- Line 108: Defines a route or routing rule: Route::delete('/houses/{id}', [AdminController::class, 'removeHouse']);
- Line 109: Implements application logic: });
- Line 110: Implements application logic: });
- Line 111: Blank line for separation.
- Line 112: Implements application logic: require base_path('routes/test_upload.php');
