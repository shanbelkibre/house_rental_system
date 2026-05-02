<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    protected $table = 'houses';
    
    protected $fillable = [
        'owner_id', 'title', 'description', 'price', 
        'location', 'rooms', 'status', 'is_approved',
        'bathrooms', 'area', 'type', 'amenities', 'availability_date',
        'license_image'
    ];
    
    protected $casts = [
        'amenities' => 'array',
        'availability_date' => 'date',
    ];
    
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
    
    public function images()
    {
        return $this->hasMany(HouseImage::class, 'house_id');
    }
    
    public function requests()
    {
        return $this->hasMany(RequestRental::class, 'house_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'house_id');
    }
}