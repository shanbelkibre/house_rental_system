<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\VisitController;
use App\Http\Controllers\AgreementController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\AdminController;



// ==================== PUBLIC ROUTES (No Authentication) ====================

// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public House Viewing
Route::get('/houses', [HouseController::class, 'index']);
Route::get('/houses/{id}', [HouseController::class, 'show']);
Route::get('/houses/{houseId}/reviews', [ReviewController::class, 'houseReviews']);


// ==================== PROTECTED ROUTES (Require Token) ====================

Route::middleware('auth:sanctum')->group(function () {

    // ========== AUTHENTICATION & PROFILE ==========
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::put('/profile', [AuthController::class, 'updateProfile']);
    Route::put('/change-password', [AuthController::class, 'changePassword']);

    // ========== HOUSE MANAGEMENT (Owner Only) ==========
    Route::post('/houses', [HouseController::class, 'store']);
    Route::put('/houses/{id}', [HouseController::class, 'update']);
    Route::delete('/houses/{id}', [HouseController::class, 'destroy']);
    Route::post('/houses/{id}/images', [HouseController::class, 'uploadImage']);
    Route::delete('/houses/{houseId}/images/{imageId}', [HouseController::class, 'deleteImage']);
    Route::get('/my-houses', [HouseController::class, 'myHouses']);

    // ========== RENTAL REQUESTS ==========
    Route::post('/requests', [RequestController::class, 'store']);
    Route::put('/requests/{id}', [RequestController::class, 'update']);
    Route::get('/my-requests', [RequestController::class, 'myRequests']);
    Route::get('/owner-requests', [RequestController::class, 'ownerRequests']);

    // ========== REVIEWS & RATINGS ==========
    Route::post('/reviews', [ReviewController::class, 'store']);

    // ========== SUBSCRIPTION MANAGEMENT ==========
    Route::get('/my-subscription', [SubscriptionController::class, 'mySubscription']);
    Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);
    Route::get('/can-post', [SubscriptionController::class, 'canPost']);

    // ========== HOUSE VISITS ==========
    Route::post('/visits', [VisitController::class, 'schedule']);
    Route::put('/visits/{id}', [VisitController::class, 'confirm']);
    Route::get('/my-visits', [VisitController::class, 'myVisits']);

    // ========== OFFLINE AGREEMENTS ==========
    Route::post('/agreements', [AgreementController::class, 'store']);
    Route::put('/agreements/{id}/confirm', [AgreementController::class, 'confirm']);
    Route::get('/my-agreements', [AgreementController::class, 'myAgreements']);

    // ========== NOTIFICATIONS ==========
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::get('/notifications/unread-count', [NotificationController::class, 'unreadCount']);
    Route::put('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);
    Route::put('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);
    Route::delete('/notifications/{id}', [NotificationController::class, 'destroy']);

    // ========== ADMIN ONLY ROUTES ==========
    Route::prefix('admin')->middleware('admin')->group(function () {
        // Dashboard & Statistics
        Route::get('/dashboard', [AdminController::class, 'dashboard']);
        Route::get('/report', [AdminController::class, 'report']);
        
        // User Management
        Route::get('/users', [AdminController::class, 'users']);
        Route::put('/users/{id}/verify', [AdminController::class, 'verifyUser']);
        Route::delete('/users/{id}', [AdminController::class, 'deleteUser']);
        
        // House Management
        Route::get('/pending-houses', [AdminController::class, 'pendingHouses']);
        Route::get('/all-houses', [AdminController::class, 'allHouses']);
        Route::put('/houses/{id}/approve', [AdminController::class, 'approveHouse']);
        Route::delete('/houses/{id}/reject', [AdminController::class, 'rejectHouse']);
    });
});