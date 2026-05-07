<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('houses', function (Blueprint $table) {
            $table->integer('bathrooms')->default(1)->after('rooms');
            $table->integer('area')->nullable()->after('bathrooms');
            $table->string('type')->default('apartment')->after('area');
            $table->json('amenities')->nullable()->after('type');
            $table->date('availability_date')->nullable()->after('amenities');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('houses', function (Blueprint $table) {
            $table->dropColumn(['bathrooms', 'area', 'type', 'amenities', 'availability_date']);
        });
    }
};
