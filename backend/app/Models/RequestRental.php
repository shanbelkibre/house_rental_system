<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestRental extends Model
{
    protected $table = 'requests';
    
    protected $fillable = ['renter_id', 'house_id', 'status', 'message'];
    
    public function renter()
    {
        return $this->belongsTo(User::class, 'renter_id');
    }
    
    public function house()
    {
        return $this->belongsTo(House::class, 'house_id');
    }
}