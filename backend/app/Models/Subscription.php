<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $table = 'subscriptions';
    
    protected $fillable = ['owner_id', 'status', 'start_date', 'end_date'];
    
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}