<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'payments';
    
    protected $fillable = ['owner_id', 'amount', 'payment_method', 'status', 'transaction_id'];
    
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}