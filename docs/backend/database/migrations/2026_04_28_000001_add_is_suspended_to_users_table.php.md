# 2026_04_28_000001_add_is_suspended_to_users_table.php

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
11         Schema::table('users', function (Blueprint $table) {
12             if (!Schema::hasColumn('users', 'is_suspended')) {
13                 $table->boolean('is_suspended')->default(false)->after('is_verified');
14             }
15         });
16     }
17 
18     public function down(): void
19     {
20         Schema::table('users', function (Blueprint $table) {
21             if (Schema::hasColumn('users', 'is_suspended')) {
22                 $table->dropColumn('is_suspended');
23             }
24         });
25     }
26 };
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
- Line 11: Performs a database schema or raw SQL operation: Schema::table('users', function (Blueprint $table) {
- Line 12: Adds a conditional branch: if (!Schema::hasColumn('users', 'is_suspended')) {
- Line 13: Implements application logic: $table->boolean('is_suspended')->default(false)->after('is_verified');
- Line 14: Implements application logic: }
- Line 15: Implements application logic: });
- Line 16: Implements application logic: }
- Line 17: Blank line for separation.
- Line 18: Defines the down function.
- Line 19: Implements application logic: {
- Line 20: Performs a database schema or raw SQL operation: Schema::table('users', function (Blueprint $table) {
- Line 21: Adds a conditional branch: if (Schema::hasColumn('users', 'is_suspended')) {
- Line 22: Implements application logic: $table->dropColumn('is_suspended');
- Line 23: Implements application logic: }
- Line 24: Implements application logic: });
- Line 25: Implements application logic: }
- Line 26: Implements application logic: };
