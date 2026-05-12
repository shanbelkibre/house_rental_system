# 2026_05_02_123231_add_details_to_houses_table.php

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
9     /**
10      * Run the migrations.
11      */
12     public function up(): void
13     {
14         Schema::table('houses', function (Blueprint $table) {
15             $table->integer('bathrooms')->default(1)->after('rooms');
16             $table->integer('area')->nullable()->after('bathrooms');
17             $table->string('type')->default('apartment')->after('area');
18             $table->json('amenities')->nullable()->after('type');
19             $table->date('availability_date')->nullable()->after('amenities');
20         });
21     }
22 
23     /**
24      * Reverse the migrations.
25      */
26     public function down(): void
27     {
28         Schema::table('houses', function (Blueprint $table) {
29             $table->dropColumn(['bathrooms', 'area', 'type', 'amenities', 'availability_date']);
30         });
31     }
32 };
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
- Line 9: Implements application logic: /**
- Line 10: Implements application logic: * Run the migrations.
- Line 11: Implements application logic: */
- Line 12: Defines the up function.
- Line 13: Implements application logic: {
- Line 14: Performs a database schema or raw SQL operation: Schema::table('houses', function (Blueprint $table) {
- Line 15: Implements application logic: $table->integer('bathrooms')->default(1)->after('rooms');
- Line 16: Implements application logic: $table->integer('area')->nullable()->after('bathrooms');
- Line 17: Implements application logic: $table->string('type')->default('apartment')->after('area');
- Line 18: Implements application logic: $table->json('amenities')->nullable()->after('type');
- Line 19: Implements application logic: $table->date('availability_date')->nullable()->after('amenities');
- Line 20: Implements application logic: });
- Line 21: Implements application logic: }
- Line 22: Blank line for separation.
- Line 23: Implements application logic: /**
- Line 24: Implements application logic: * Reverse the migrations.
- Line 25: Implements application logic: */
- Line 26: Defines the down function.
- Line 27: Implements application logic: {
- Line 28: Performs a database schema or raw SQL operation: Schema::table('houses', function (Blueprint $table) {
- Line 29: Implements application logic: $table->dropColumn(['bathrooms', 'area', 'type', 'amenities', 'availability_date']);
- Line 30: Implements application logic: });
- Line 31: Implements application logic: }
- Line 32: Implements application logic: };
