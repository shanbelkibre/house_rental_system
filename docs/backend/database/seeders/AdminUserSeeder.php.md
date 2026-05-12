# AdminUserSeeder.php

## Code (numbered)

```php
1 <?php
2 
3 namespace Database\Seeders;
4 
5 use App\Models\User;
6 use Illuminate\Database\Seeder;
7 use Illuminate\Support\Facades\Hash;
8 
9 class AdminUserSeeder extends Seeder
10 {
11     public function run(): void
12     {
13         // Creates or updates the admin user in the CURRENT configured DB (.env)
14         User::updateOrCreate(
15             ['email' => 'admin@system.com'],
16             [
17                 'name' => 'Administrator',
18                 'password' => Hash::make('admin123'),
19                 'role' => 'admin',
20                 'phone' => '0912345678',
21                 'profile_image' => null,
22                 'is_verified' => true,
23             ]
24         );
25     }
26 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: Database\Seeders
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\User
- Line 6: Imports a dependency used in this file: Illuminate\Database\Seeder
- Line 7: Imports a dependency used in this file: Illuminate\Support\Facades\Hash
- Line 8: Blank line for separation.
- Line 9: Defines the AdminUserSeeder class.
- Line 10: Implements application logic: {
- Line 11: Defines the run function.
- Line 12: Implements application logic: {
- Line 13: Creates or updates the admin user in the current configured db (.env)
- Line 14: Implements application logic: User::updateOrCreate(
- Line 15: Implements application logic: ['email' => 'admin@system.com'],
- Line 16: Implements application logic: [
- Line 17: Implements application logic: 'name' => 'Administrator',
- Line 18: Implements application logic: 'password' => Hash::make('admin123'),
- Line 19: Implements application logic: 'role' => 'admin',
- Line 20: Implements application logic: 'phone' => '0912345678',
- Line 21: Implements application logic: 'profile_image' => null,
- Line 22: Implements application logic: 'is_verified' => true,
- Line 23: Implements application logic: ]
- Line 24: Implements application logic: );
- Line 25: Implements application logic: }
- Line 26: Implements application logic: }
