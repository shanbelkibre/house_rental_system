# 2026_05_02_125627_add_license_image_to_houses_table.php

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
15             $table->string('license_image')->nullable()->after('is_approved');
16         });
17     }
18 
19     /**
20      * Reverse the migrations.
21      */
22     public function down(): void
23     {
24         Schema::table('houses', function (Blueprint $table) {
25             $table->dropColumn('license_image');
26         });
27     }
28 };
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
- Line 15: Implements application logic: $table->string('license_image')->nullable()->after('is_approved');
- Line 16: Implements application logic: });
- Line 17: Implements application logic: }
- Line 18: Blank line for separation.
- Line 19: Implements application logic: /**
- Line 20: Implements application logic: * Reverse the migrations.
- Line 21: Implements application logic: */
- Line 22: Defines the down function.
- Line 23: Implements application logic: {
- Line 24: Performs a database schema or raw SQL operation: Schema::table('houses', function (Blueprint $table) {
- Line 25: Implements application logic: $table->dropColumn('license_image');
- Line 26: Implements application logic: });
- Line 27: Implements application logic: }
- Line 28: Implements application logic: };
