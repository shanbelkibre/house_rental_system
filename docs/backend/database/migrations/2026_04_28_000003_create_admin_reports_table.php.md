# 2026_04_28_000003_create_admin_reports_table.php

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
11         // The project uses raw SQL migrations where users.id is BIGINT (signed).
12         // Use a matching signed BIGINT to avoid MySQL FK errors.
13         Schema::dropIfExists('admin_reports');
14 
15         Schema::create('admin_reports', function (Blueprint $table) {
16             $table->id();
17             $table->string('name');
18             $table->dateTime('start_date')->nullable();
19             $table->dateTime('end_date')->nullable();
20             $table->bigInteger('generated_by');
21             $table->json('payload');
22             $table->timestamps();
23 
24             $table->foreign('generated_by')
25                 ->references('id')
26                 ->on('users')
27                 ->onDelete('cascade');
28         });
29     }
30 
31     public function down(): void
32     {
33         Schema::dropIfExists('admin_reports');
34     }
35 };
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
- Line 11: The project uses raw sql migrations where users.id is bigint (signed).
- Line 12: Use a matching signed bigint to avoid mysql fk errors.
- Line 13: Performs a database schema or raw SQL operation: Schema::dropIfExists('admin_reports');
- Line 14: Blank line for separation.
- Line 15: Performs a database schema or raw SQL operation: Schema::create('admin_reports', function (Blueprint $table) {
- Line 16: Implements application logic: $table->id();
- Line 17: Implements application logic: $table->string('name');
- Line 18: Implements application logic: $table->dateTime('start_date')->nullable();
- Line 19: Implements application logic: $table->dateTime('end_date')->nullable();
- Line 20: Implements application logic: $table->bigInteger('generated_by');
- Line 21: Implements application logic: $table->json('payload');
- Line 22: Implements application logic: $table->timestamps();
- Line 23: Blank line for separation.
- Line 24: Implements application logic: $table->foreign('generated_by')
- Line 25: Implements application logic: ->references('id')
- Line 26: Implements application logic: ->on('users')
- Line 27: Implements application logic: ->onDelete('cascade');
- Line 28: Implements application logic: });
- Line 29: Implements application logic: }
- Line 30: Blank line for separation.
- Line 31: Defines the down function.
- Line 32: Implements application logic: {
- Line 33: Performs a database schema or raw SQL operation: Schema::dropIfExists('admin_reports');
- Line 34: Implements application logic: }
- Line 35: Implements application logic: };
