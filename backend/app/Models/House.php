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

    public function visits()
    {
        return $this->hasMany(Visit::class, 'house_id');
    }

    public function agreements()
    {
        return $this->hasMany(Agreement::class, 'house_id');
    }

    protected static function booted()
    {
        static::deleting(function ($house) {
            // Delete related images from storage and database
            foreach ($house->images as $image) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($image->image_path);
                $image->delete();
            }
            
            // Delete other related records to prevent foreign key constraints
            $house->requests()->delete();
            $house->reviews()->delete();
            $house->visits()->delete();
            $house->agreements()->delete();
        });
    }
}