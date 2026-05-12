# 2026_04_28_000002_create_subscription_plans_table.php

## Code (numbered)

```php
1 <?php
2 
3 use Illuminate\Database\Migrations\Migration;
4 use Illuminate\Database\Schema\Blueprint;
5 use Illuminate\Support\Facades\Schema;
6 
7 return new class extends Migration
8 {
9     public function up(): void
10     {
11         Schema::create('subscription_plans', function (Blueprint $table) {
12             $table->id();
13             $table->string('name');
14             $table->decimal('price', 10, 2);
15             $table->unsignedInteger('duration_days')->default(30);
16             $table->boolean('is_active')->default(true);
17             $table->timestamps();
18         });
19     }
20 
21     public function down(): void
22     {
23         Schema::dropIfExists('subscription_plans');
24     }
25 };
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Illuminate\Database\Migrations\Migration
- Line 4: Imports a dependency used in this file: Illuminate\Database\Schema\Blueprint
- Line 5: Imports a dependency used in this file: Illuminate\Support\Facades\Schema
- Line 6: Blank line for separation.
- Line 7: Returns an anonymous migration class.
- Line 8: Implements application logic: {
- Line 9: Defines the up function.
- Line 10: Implements application logic: {
- Line 11: Performs a database schema or raw SQL operation: Schema::create('subscription_plans', function (Blueprint $table) {
- Line 12: Implements application logic: $table->id();
- Line 13: Implements application logic: $table->string('name');
- Line 14: Implements application logic: $table->decimal('price', 10, 2);
- Line 15: Implements application logic: $table->unsignedInteger('duration_days')->default(30);
- Line 16: Implements application logic: $table->boolean('is_active')->default(true);
- Line 17: Implements application logic: $table->timestamps();
- Line 18: Implements application logic: });
- Line 19: Implements application logic: }
- Line 20: Blank line for separation.
- Line 21: Defines the down function.
- Line 22: Implements application logic: {
- Line 23: Performs a database schema or raw SQL operation: Schema::dropIfExists('subscription_plans');
- Line 24: Implements application logic: }
- Line 25: Implements application logic: };
