<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';
    
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'phone',
        'profile_image',
        'is_verified',
        'is_suspended'
    ];
    
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_verified' => 'boolean',
        'is_suspended' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
    
    // ========== RELATIONSHIPS ==========
    
    /**
     * Get all houses owned by this user.
     */
    public function houses()
    {
        return $this->hasMany(House::class, 'owner_id');
    }
    
    /**
     * Get all rental requests made by this user (as renter).
     */
    public function requests()
    {
        return $this->hasMany(RequestRental::class, 'renter_id');
    }
    
    /**
     * Get the subscription of this user (if owner).
     */
    public function subscription()
    {
        return $this->hasOne(Subscription::class, 'owner_id');
    }
    
    /**
     * Get all payments made by this user.
     */
    public function payments()
    {
        return $this->hasMany(Payment::class, 'owner_id');
    }
    
    /**
     * Get all visits scheduled by this user (as renter).
     */
    public function visits()
    {
        return $this->hasMany(Visit::class, 'renter_id');
    }
    
    /**
     * Get all agreements of this user (as renter).
     */
    public function agreements()
    {
        return $this->hasMany(Agreement::class, 'renter_id');
    }
    
    /**
     * Get all notifications for this user.
     */
    public function notifications()
    {
        return $this->hasMany(Notification::class, 'user_id');
    }
    
    /**
     * Get reviews written by this user.
     */
    public function reviews()
    {
        return $this->hasMany(Review::class, 'renter_id');
    }
    
    // ========== HELPER METHODS ==========
    
    /**
     * Check if user is an owner.
     */
    public function isOwner()
    {
        return $this->role === 'owner';
    }
    
    /**
     * Check if user is a renter.
     */
    public function isRenter()
    {
        return $this->role === 'renter';
    }
    
    /**
     * Check if user is admin.
     */
    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    /**
     * Check if user is suspended.
     */
    public function isSuspended()
    {
        return (bool) $this->is_suspended;
    }
    
    /**
     * Check if user has active subscription.
     */
    public function hasActiveSubscription()
    {
        $subscription = $this->subscription;
        
        if (!$subscription) {
            return false;
        }
        
        return $subscription->status === 'active' && $subscription->end_date >= now();
    }
    
    /**
     * Get user's full profile info.
     */
    public function getProfileAttribute()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'role' => $this->role,
            'phone' => $this->phone,
            'profile_image' => $this->profile_image ? asset('storage/' . $this->profile_image) : null,
            'is_verified' => $this->is_verified,
            'joined' => $this->created_at->format('M d, Y')
        ];
    }
}