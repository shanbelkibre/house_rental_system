


<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::unprepared("
        
            CREATE TABLE IF NOT EXISTS users (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                password VARCHAR(255),
                role ENUM('renter', 'owner', 'admin') DEFAULT 'renter',
                phone VARCHAR(20),
                profile_image VARCHAR(255),
                is_verified BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
            
            CREATE TABLE IF NOT EXISTS houses (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                owner_id BIGINT,
                title VARCHAR(150),
                description TEXT,
                price DECIMAL(10,2),
                location VARCHAR(255),
                rooms INT,
                status ENUM('available', 'rented') DEFAULT 'available',
                is_approved BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS house_images (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                house_id BIGINT,
                image_path VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS requests (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                renter_id BIGINT,
                house_id BIGINT,
                status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (renter_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS reviews (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                renter_id BIGINT,
                house_id BIGINT,
                rating INT CHECK (rating >= 1 AND rating <= 5),
                comment TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (renter_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS subscriptions (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                owner_id BIGINT,
                status ENUM('active', 'expired') DEFAULT 'active',
                start_date DATE,
                end_date DATE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS payments (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                owner_id BIGINT,
                amount DECIMAL(10,2),
                payment_method VARCHAR(50),
                status ENUM('success', 'failed') DEFAULT 'success',
                transaction_id VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS visits (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                renter_id BIGINT,
                house_id BIGINT,
                visit_date DATETIME,
                status ENUM('pending', 'confirmed', 'completed') DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (renter_id) REFERENCES users(id),
                FOREIGN KEY (house_id) REFERENCES houses(id)
            );
            
            CREATE TABLE IF NOT EXISTS agreements (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                renter_id BIGINT,
                house_id BIGINT,
                start_date DATE,
                end_date DATE,
                agreed_price DECIMAL(10,2),
                status ENUM('pending', 'confirmed') DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (renter_id) REFERENCES users(id),
                FOREIGN KEY (house_id) REFERENCES houses(id)
            );
            
            CREATE TABLE IF NOT EXISTS notifications (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                user_id BIGINT,
                message TEXT,
                is_read BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        ");
    }
    
    public function down()
    {
        DB::unprepared("
            DROP TABLE IF EXISTS notifications;
            DROP TABLE IF EXISTS agreements;
            DROP TABLE IF EXISTS visits;
            DROP TABLE IF EXISTS payments;
            DROP TABLE IF EXISTS subscriptions;
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS requests;
            DROP TABLE IF EXISTS house_images;
            DROP TABLE IF EXISTS houses;
            DROP TABLE IF EXISTS users;
        ");
    }
};