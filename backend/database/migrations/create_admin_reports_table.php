<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // The project uses raw SQL migrations where users.id is BIGINT (signed).
        // Use a matching signed BIGINT to avoid MySQL FK errors.
        Schema::dropIfExists('admin_reports');

        Schema::create('admin_reports', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->bigInteger('generated_by');
            $table->json('payload');
            $table->timestamps();

            $table->foreign('generated_by')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admin_reports');
    }
};
