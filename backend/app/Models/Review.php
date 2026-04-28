<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';
    
    protected $fillable = ['renter_id', 'house_id', 'rating', 'comment'];
    
    public function renter()
    {
        return $this->belongsTo(User::class, 'renter_id');
    }
    
    public function house()
    {
        return $this->belongsTo(House::class, 'house_id');
    }
}