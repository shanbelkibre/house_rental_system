<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        // Creates or updates the admin user in the CURRENT configured DB (.env)
        User::updateOrCreate(
            ['email' => 'admin@system.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('admin123'),
                'role' => 'admin',
                'phone' => '0912345678',
                'profile_image' => null,
                'is_verified' => true,
            ]
        );
    }
}
