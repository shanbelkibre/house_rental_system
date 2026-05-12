# 2026_04_27_202424_create_personal_access_tokens_table.php

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
9   
10     public function up(): void
11     {
12         Schema::create('personal_access_tokens', function (Blueprint $table) {
13             $table->id();
14             $table->morphs('tokenable');
15             $table->text('name');
16             $table->string('token', 64)->unique();
17             $table->text('abilities')->nullable();
18             $table->timestamp('last_used_at')->nullable();
19             $table->timestamp('expires_at')->nullable()->index();
20             $table->timestamps();
21         });
22     }
23 
24     
25     public function down(): void
26     {
27         Schema::dropIfExists('personal_access_tokens');
28     }
29 };
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
- Line 9: Blank line for separation.
- Line 10: Defines the up function.
- Line 11: Implements application logic: {
- Line 12: Performs a database schema or raw SQL operation: Schema::create('personal_access_tokens', function (Blueprint $table) {
- Line 13: Implements application logic: $table->id();
- Line 14: Implements application logic: $table->morphs('tokenable');
- Line 15: Implements application logic: $table->text('name');
- Line 16: Implements application logic: $table->string('token', 64)->unique();
- Line 17: Implements application logic: $table->text('abilities')->nullable();
- Line 18: Implements application logic: $table->timestamp('last_used_at')->nullable();
- Line 19: Implements application logic: $table->timestamp('expires_at')->nullable()->index();
- Line 20: Implements application logic: $table->timestamps();
- Line 21: Implements application logic: });
- Line 22: Implements application logic: }
- Line 23: Blank line for separation.
- Line 24: Blank line for separation.
- Line 25: Defines the down function.
- Line 26: Implements application logic: {
- Line 27: Performs a database schema or raw SQL operation: Schema::dropIfExists('personal_access_tokens');
- Line 28: Implements application logic: }
- Line 29: Implements application logic: };
