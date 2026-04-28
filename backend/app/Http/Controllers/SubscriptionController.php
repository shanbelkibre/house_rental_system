<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Payment;
use App\Models\Notification;
use Illuminate\Http\Request;
use Carbon\Carbon;

class SubscriptionController extends Controller
{
    // ========== GET SUBSCRIPTION STATUS ==========
    public function mySubscription(Request $request)
    {
        $user = $request->user();

        if (!$user->isOwner()) {
            return response()->json([
                'message' => 'Only owners have subscriptions'
            ], 403);
        }

        $subscription = $user->subscription;

        if (!$subscription) {
            return response()->json([
                'has_subscription' => false,
                'message' => 'No active subscription'
            ]);
        }

        return response()->json([
            'has_subscription' => true,
            'subscription' => $subscription,
            'is_active' => $subscription->status === 'active' && $subscription->end_date >= Carbon::now(),
            'days_remaining' => $subscription->status === 'active' ? Carbon::now()->diffInDays($subscription->end_date, false) : 0
        ]);
    }

    // ========== CREATE SUBSCRIPTION (Payment simulation) ==========
    public function subscribe(Request $request)
    {
        $user = $request->user();

        if (!$user->isOwner()) {
            return response()->json([
                'message' => 'Only owners can subscribe'
            ], 403);
        }

        $request->validate([
            'payment_method' => 'required|string|in:telebirr,chapa,bank',
            'amount' => 'required|numeric|min:500'
        ]);

        // Calculate dates
        $startDate = Carbon::now();
        $endDate = Carbon::now()->addMonths(1);

        // Create or update subscription
        $subscription = Subscription::updateOrCreate(
            ['owner_id' => $user->id],
            [
                'status' => 'active',
                'start_date' => $startDate,
                'end_date' => $endDate
            ]
        );

        // Record payment
        $payment = Payment::create([
            'owner_id' => $user->id,
            'amount' => $request->amount,
            'payment_method' => $request->payment_method,
            'status' => 'success',
            'transaction_id' => 'TXN_' . time() . '_' . $user->id
        ]);

        // Send notification
        Notification::create([
            'user_id' => $user->id,
            'message' => "Your subscription is active until {$endDate->format('M d, Y')}",
            'is_read' => false
        ]);

        return response()->json([
            'message' => 'Subscription successful',
            'subscription' => $subscription,
            'payment' => $payment
        ]);
    }

    // ========== CHECK IF OWNER CAN POST ==========
    public function canPost(Request $request)
    {
        $user = $request->user();

        if (!$user->isOwner()) {
            return response()->json(['can_post' => false]);
        }

        $canPost = $user->hasActiveSubscription();

        return response()->json([
            'can_post' => $canPost,
            'message' => $canPost ? 'You can post houses' : 'You need an active subscription'
        ]);
    }
}