<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    
    public function run(): void
    {
        // Seed a default admin account (admin@system.com / admin123)
        $this->call(AdminUserSeeder::class);

        // Optional sample user
        // User::factory(10)->create();
    }
}
