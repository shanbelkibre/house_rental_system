# 2026_04_27_204646_create_all_tables.php

## Code (numbered)

```php
1 
2 
3 
4 <?php
5 use Illuminate\Database\Migrations\Migration;
6 use Illuminate\Support\Facades\DB;
7 
8 return new class extends Migration
9 {
10     public function up()
11     {
12         DB::unprepared("
13         
14             CREATE TABLE IF NOT EXISTS users (
15                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
16                 name VARCHAR(100),
17                 email VARCHAR(100) UNIQUE,
18                 password VARCHAR(255),
19                 role ENUM('renter', 'owner', 'admin') DEFAULT 'renter',
20                 phone VARCHAR(20),
21                 profile_image VARCHAR(255),
22                 is_verified BOOLEAN DEFAULT FALSE,
23                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
24                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
25             );
26             
27             CREATE TABLE IF NOT EXISTS houses (
28                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
29                 owner_id BIGINT,
30                 title VARCHAR(150),
31                 description TEXT,
32                 price DECIMAL(10,2),
33                 location VARCHAR(255),
34                 rooms INT,
35                 status ENUM('available', 'rented') DEFAULT 'available',
36                 is_approved BOOLEAN DEFAULT FALSE,
37                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
38                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
39                 FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
40             );
41             
42             CREATE TABLE IF NOT EXISTS house_images (
43                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
44                 house_id BIGINT,
45                 image_path VARCHAR(255),
46                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
47                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
48                 FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
49             );
50             
51             CREATE TABLE IF NOT EXISTS requests (
52                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
53                 renter_id BIGINT,
54                 house_id BIGINT,
55                 status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
56                 message TEXT,
57                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
58                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
59                 FOREIGN KEY (renter_id) REFERENCES users(id) ON DELETE CASCADE,
60                 FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
61             );
62             
63             CREATE TABLE IF NOT EXISTS reviews (
64                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
65                 renter_id BIGINT,
66                 house_id BIGINT,
67                 rating INT CHECK (rating >= 1 AND rating <= 5),
68                 comment TEXT,
69                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
70                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
71                 FOREIGN KEY (renter_id) REFERENCES users(id) ON DELETE CASCADE,
72                 FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
73             );
74             
75             CREATE TABLE IF NOT EXISTS subscriptions (
76                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
77                 owner_id BIGINT,
78                 status ENUM('active', 'expired') DEFAULT 'active',
79                 start_date DATE,
80                 end_date DATE,
81                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
82                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
83                 FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
84             );
85             
86             CREATE TABLE IF NOT EXISTS payments (
87                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
88                 owner_id BIGINT,
89                 amount DECIMAL(10,2),
90                 payment_method VARCHAR(50),
91                 status ENUM('success', 'failed') DEFAULT 'success',
92                 transaction_id VARCHAR(100),
93                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
94                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
95                 FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
96             );
97             
98             CREATE TABLE IF NOT EXISTS visits (
99                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
100                 renter_id BIGINT,
101                 house_id BIGINT,
102                 visit_date DATETIME,
103                 status ENUM('pending', 'confirmed', 'completed') DEFAULT 'pending',
104                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
105                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
106                 FOREIGN KEY (renter_id) REFERENCES users(id),
107                 FOREIGN KEY (house_id) REFERENCES houses(id)
108             );
109             
110             CREATE TABLE IF NOT EXISTS agreements (
111                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
112                 renter_id BIGINT,
113                 house_id BIGINT,
114                 start_date DATE,
115                 end_date DATE,
116                 agreed_price DECIMAL(10,2),
117                 status ENUM('pending', 'confirmed') DEFAULT 'pending',
118                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
119                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
120                 FOREIGN KEY (renter_id) REFERENCES users(id),
121                 FOREIGN KEY (house_id) REFERENCES houses(id)
122             );
123             
124             CREATE TABLE IF NOT EXISTS notifications (
125                 id BIGINT AUTO_INCREMENT PRIMARY KEY,
126                 user_id BIGINT,
127                 message TEXT,
128                 is_read BOOLEAN DEFAULT FALSE,
129                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
130                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
131                 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
132             );
133         ");
134     }
135     
136     public function down()
137     {
138         DB::unprepared("
139             DROP TABLE IF EXISTS notifications;
140             DROP TABLE IF EXISTS agreements;
141             DROP TABLE IF EXISTS visits;
142             DROP TABLE IF EXISTS payments;
143             DROP TABLE IF EXISTS subscriptions;
144             DROP TABLE IF EXISTS reviews;
145             DROP TABLE IF EXISTS requests;
146             DROP TABLE IF EXISTS house_images;
147             DROP TABLE IF EXISTS houses;
148             DROP TABLE IF EXISTS users;
149         ");
150     }
151 };
```

## Line-by-line explanation

- Line 1: Blank line for separation.
- Line 2: Blank line for separation.
- Line 3: Blank line for separation.
- Line 4: Starts the PHP file.
- Line 5: Imports a dependency used in this file: Illuminate\Database\Migrations\Migration
- Line 6: Imports a dependency used in this file: Illuminate\Support\Facades\DB
- Line 7: Blank line for separation.
- Line 8: Returns an anonymous migration class.
- Line 9: Implements application logic: {
- Line 10: Defines the up function.
- Line 11: Implements application logic: {
- Line 12: Performs a database schema or raw SQL operation: DB::unprepared("
- Line 13: Blank line for separation.
- Line 14: Implements application logic: CREATE TABLE IF NOT EXISTS users (
- Line 15: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 16: Implements application logic: name VARCHAR(100),
- Line 17: Implements application logic: email VARCHAR(100) UNIQUE,
- Line 18: Implements application logic: password VARCHAR(255),
- Line 19: Implements application logic: role ENUM('renter', 'owner', 'admin') DEFAULT 'renter',
- Line 20: Implements application logic: phone VARCHAR(20),
- Line 21: Implements application logic: profile_image VARCHAR(255),
- Line 22: Implements application logic: is_verified BOOLEAN DEFAULT FALSE,
- Line 23: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 24: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
- Line 25: Implements application logic: );
- Line 26: Blank line for separation.
- Line 27: Implements application logic: CREATE TABLE IF NOT EXISTS houses (
- Line 28: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 29: Implements application logic: owner_id BIGINT,
- Line 30: Implements application logic: title VARCHAR(150),
- Line 31: Implements application logic: description TEXT,
- Line 32: Implements application logic: price DECIMAL(10,2),
- Line 33: Implements application logic: location VARCHAR(255),
- Line 34: Implements application logic: rooms INT,
- Line 35: Implements application logic: status ENUM('available', 'rented') DEFAULT 'available',
- Line 36: Implements application logic: is_approved BOOLEAN DEFAULT FALSE,
- Line 37: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 38: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 39: Implements application logic: FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
- Line 40: Implements application logic: );
- Line 41: Blank line for separation.
- Line 42: Implements application logic: CREATE TABLE IF NOT EXISTS house_images (
- Line 43: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 44: Implements application logic: house_id BIGINT,
- Line 45: Implements application logic: image_path VARCHAR(255),
- Line 46: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 47: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 48: Implements application logic: FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
- Line 49: Implements application logic: );
- Line 50: Blank line for separation.
- Line 51: Implements application logic: CREATE TABLE IF NOT EXISTS requests (
- Line 52: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 53: Implements application logic: renter_id BIGINT,
- Line 54: Implements application logic: house_id BIGINT,
- Line 55: Implements application logic: status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
- Line 56: Implements application logic: message TEXT,
- Line 57: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 58: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 59: Implements application logic: FOREIGN KEY (renter_id) REFERENCES users(id) ON DELETE CASCADE,
- Line 60: Implements application logic: FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
- Line 61: Implements application logic: );
- Line 62: Blank line for separation.
- Line 63: Implements application logic: CREATE TABLE IF NOT EXISTS reviews (
- Line 64: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 65: Implements application logic: renter_id BIGINT,
- Line 66: Implements application logic: house_id BIGINT,
- Line 67: Implements application logic: rating INT CHECK (rating >= 1 AND rating <= 5),
- Line 68: Implements application logic: comment TEXT,
- Line 69: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 70: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 71: Implements application logic: FOREIGN KEY (renter_id) REFERENCES users(id) ON DELETE CASCADE,
- Line 72: Implements application logic: FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE
- Line 73: Implements application logic: );
- Line 74: Blank line for separation.
- Line 75: Implements application logic: CREATE TABLE IF NOT EXISTS subscriptions (
- Line 76: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 77: Implements application logic: owner_id BIGINT,
- Line 78: Implements application logic: status ENUM('active', 'expired') DEFAULT 'active',
- Line 79: Implements application logic: start_date DATE,
- Line 80: Implements application logic: end_date DATE,
- Line 81: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 82: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 83: Implements application logic: FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
- Line 84: Implements application logic: );
- Line 85: Blank line for separation.
- Line 86: Implements application logic: CREATE TABLE IF NOT EXISTS payments (
- Line 87: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 88: Implements application logic: owner_id BIGINT,
- Line 89: Implements application logic: amount DECIMAL(10,2),
- Line 90: Implements application logic: payment_method VARCHAR(50),
- Line 91: Implements application logic: status ENUM('success', 'failed') DEFAULT 'success',
- Line 92: Implements application logic: transaction_id VARCHAR(100),
- Line 93: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 94: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 95: Implements application logic: FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
- Line 96: Implements application logic: );
- Line 97: Blank line for separation.
- Line 98: Implements application logic: CREATE TABLE IF NOT EXISTS visits (
- Line 99: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 100: Implements application logic: renter_id BIGINT,
- Line 101: Implements application logic: house_id BIGINT,
- Line 102: Implements application logic: visit_date DATETIME,
- Line 103: Implements application logic: status ENUM('pending', 'confirmed', 'completed') DEFAULT 'pending',
- Line 104: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 105: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 106: Implements application logic: FOREIGN KEY (renter_id) REFERENCES users(id),
- Line 107: Implements application logic: FOREIGN KEY (house_id) REFERENCES houses(id)
- Line 108: Implements application logic: );
- Line 109: Blank line for separation.
- Line 110: Implements application logic: CREATE TABLE IF NOT EXISTS agreements (
- Line 111: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 112: Implements application logic: renter_id BIGINT,
- Line 113: Implements application logic: house_id BIGINT,
- Line 114: Implements application logic: start_date DATE,
- Line 115: Implements application logic: end_date DATE,
- Line 116: Implements application logic: agreed_price DECIMAL(10,2),
- Line 117: Implements application logic: status ENUM('pending', 'confirmed') DEFAULT 'pending',
- Line 118: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 119: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 120: Implements application logic: FOREIGN KEY (renter_id) REFERENCES users(id),
- Line 121: Implements application logic: FOREIGN KEY (house_id) REFERENCES houses(id)
- Line 122: Implements application logic: );
- Line 123: Blank line for separation.
- Line 124: Implements application logic: CREATE TABLE IF NOT EXISTS notifications (
- Line 125: Implements application logic: id BIGINT AUTO_INCREMENT PRIMARY KEY,
- Line 126: Implements application logic: user_id BIGINT,
- Line 127: Implements application logic: message TEXT,
- Line 128: Implements application logic: is_read BOOLEAN DEFAULT FALSE,
- Line 129: Implements application logic: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
- Line 130: Implements application logic: updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
- Line 131: Implements application logic: FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
- Line 132: Implements application logic: );
- Line 133: Implements application logic: ");
- Line 134: Implements application logic: }
- Line 135: Blank line for separation.
- Line 136: Defines the down function.
- Line 137: Implements application logic: {
- Line 138: Performs a database schema or raw SQL operation: DB::unprepared("
- Line 139: Implements application logic: DROP TABLE IF EXISTS notifications;
- Line 140: Implements application logic: DROP TABLE IF EXISTS agreements;
- Line 141: Implements application logic: DROP TABLE IF EXISTS visits;
- Line 142: Implements application logic: DROP TABLE IF EXISTS payments;
- Line 143: Implements application logic: DROP TABLE IF EXISTS subscriptions;
- Line 144: Implements application logic: DROP TABLE IF EXISTS reviews;
- Line 145: Implements application logic: DROP TABLE IF EXISTS requests;
- Line 146: Implements application logic: DROP TABLE IF EXISTS house_images;
- Line 147: Implements application logic: DROP TABLE IF EXISTS houses;
- Line 148: Implements application logic: DROP TABLE IF EXISTS users;
- Line 149: Implements application logic: ");
- Line 150: Implements application logic: }
- Line 151: Implements application logic: };
