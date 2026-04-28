<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agreement extends Model
{
    protected $table = 'agreements';
    
    protected $fillable = ['renter_id', 'house_id', 'start_date', 'end_date', 'agreed_price', 'status'];

    public function renter()
    {
        return $this->belongsTo(User::class, 'renter_id');
    }

    public function house()
    {
        return $this->belongsTo(House::class, 'house_id');
    }
}