<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminReport extends Model
{
    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'generated_by',
        'payload',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'payload' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'generated_by');
    }
}
