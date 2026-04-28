<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    protected $table = 'visits';
    
    protected $fillable = ['renter_id', 'house_id', 'visit_date', 'status'];

    public function renter()
    {
        return $this->belongsTo(User::class, 'renter_id');
    }

    public function house()
    {
        return $this->belongsTo(House::class, 'house_id');
    }
}