<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

In addition, [Laracasts](https://laracasts.com) contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

You can also watch bite-sized lessons with real-world projects on [Laravel Learn](https://laravel.com/learn), where you will be guided through building a Laravel application from scratch while learning PHP fundamentals.

## Agentic Development

Laravel's predictable structure and conventions make it ideal for AI coding agents like Claude Code, Cursor, and GitHub Copilot. Install [Laravel Boost](https://laravel.com/docs/ai) to supercharge your AI workflow:

```bash
composer require laravel/boost --dev

php artisan boost:install
```

Boost provides your agent 15+ tools and skills that help agents build Laravel applications while following best practices.

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


# 🏠 **House Rental Project - Complete Step-by-Step Guide**

## 📋 **Project Roadmap**

```
Phase 1: Setup & Configuration (Steps 1-4)
Phase 2: Database & Models (Steps 5-8)
Phase 3: Authentication API (Steps 9-11)
Phase 4: House Management (Steps 12-15)
Phase 5: Rental Requests (Steps 16-18)
Phase 6: Reviews & Images (Steps 19-21)
Phase 7: React Frontend (Steps 22-25)
```

---

# 🚀 **PHASE 1: SETUP & CONFIGURATION**

## **Step 1: Create New Laravel Project**

```bash
# Create project
composer create-project laravel/laravel house-rental

# Enter project folder
cd house-rental

# Verify installation
php artisan --version
```

## **Step 2: Install Required Packages**

```bash
# API authentication
composer require laravel/sanctum

# Image handling
composer require intervention/image

# CORS for React
composer require fruitcake/laravel-cors

# Install frontend dependencies
npm install
npm install axios react-router-dom
```

## **Step 3: Configure Environment (.env)**

Open `.env` file and update:

```env
APP_NAME="House Rental"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=house_rental
DB_USERNAME=root
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost
```

## **Step 4: Configure Laravel Settings**

```bash
# Publish Sanctum migrations
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Configure CORS
php artisan config:publish cors
```

Update `config/cors.php`:

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:3000'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'supports_credentials' => true,
```

---

# 🗄️ **PHASE 2: DATABASE & MODELS**

## **Step 5: Create Database**

**MySQL (XAMPP):**
```sql
CREATE DATABASE house_rental;
```

**PostgreSQL (Ubuntu):**
```sql
CREATE DATABASE house_rental;
```

## **Step 6: Create Migrations**

```bash
# Create all migrations
php artisan make:migration create_users_table
php artisan make:migration create_houses_table
php artisan make:migration create_house_images_table
php artisan make:migration create_requests_table
php artisan make:migration create_reviews_table
php artisan make:migration create_subscriptions_table
php artisan make:migration create_notifications_table
```

Update `database/migrations/xxxx_create_users_table.php`:

```php
public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->enum('role', ['renter', 'owner', 'admin'])->default('renter');
        $table->string('phone')->nullable();
        $table->string('profile_image')->nullable();
        $table->boolean('is_verified')->default(false);
        $table->timestamps();
    });
}
```

Update `database/migrations/xxxx_create_houses_table.php`:

```php
public function up()
{
    Schema::create('houses', function (Blueprint $table) {
        $table->id();
        $table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
        $table->string('title');
        $table->text('description');
        $table->decimal('price', 10, 2);
        $table->string('location');
        $table->integer('rooms');
        $table->enum('status', ['available', 'rented'])->default('available');
        $table->boolean('is_approved')->default(false);
        $table->timestamps();
    });
}
```

Update `database/migrations/xxxx_create_house_images_table.php`:

```php
public function up()
{
    Schema::create('house_images', function (Blueprint $table) {
        $table->id();
        $table->foreignId('house_id')->constrained()->onDelete('cascade');
        $table->string('image_path');
        $table->timestamps();
    });
}
```

Update `database/migrations/xxxx_create_requests_table.php`:

```php
public function up()
{
    Schema::create('requests', function (Blueprint $table) {
        $table->id();
        $table->foreignId('renter_id')->constrained('users')->onDelete('cascade');
        $table->foreignId('house_id')->constrained()->onDelete('cascade');
        $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');
        $table->text('message')->nullable();
        $table->timestamps();
    });
}
```

Update `database/migrations/xxxx_create_reviews_table.php`:

```php
public function up()
{
    Schema::create('reviews', function (Blueprint $table) {
        $table->id();
        $table->foreignId('renter_id')->constrained('users')->onDelete('cascade');
        $table->foreignId('house_id')->constrained()->onDelete('cascade');
        $table->integer('rating')->between(1, 5);
        $table->text('comment');
        $table->timestamps();
    });
}
```

## **Step 7: Run Migrations**

```bash
php artisan migrate
```

## **Step 8: Create Models**

Create `app/Models/User.php`:

```php
<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens;
    
    protected $fillable = [
        'name', 'email', 'password', 'role', 'phone', 'profile_image'
    ];
    
    protected $hidden = ['password'];
    
    public function houses()
    {
        return $this->hasMany(House::class, 'owner_id');
    }
    
    public function requests()
    {
        return $this->hasMany(RequestRental::class, 'renter_id');
    }
}
```

Create `app/Models/House.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    protected $fillable = [
        'owner_id', 'title', 'description', 'price', 
        'location', 'rooms', 'status', 'is_approved'
    ];
    
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
    
    public function images()
    {
        return $this->hasMany(HouseImage::class);
    }
    
    public function requests()
    {
        return $this->hasMany(RequestRental::class);
    }
}
```

Create `app/Models/RequestRental.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestRental extends Model
{
    protected $table = 'requests';
    
    protected $fillable = ['renter_id', 'house_id', 'status', 'message'];
    
    public function renter()
    {
        return $this->belongsTo(User::class, 'renter_id');
    }
    
    public function house()
    {
        return $this->belongsTo(House::class);
    }
}
```

---

# 🔐 **PHASE 3: AUTHENTICATION API**

## **Step 9: Create Auth Controller**

```bash
php artisan make:controller Api/AuthController
```

Create `app/Http/Controllers/Api/AuthController.php`:

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    // Register new user
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'role' => 'required|in:renter,owner',
            'phone' => 'nullable|string'
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'phone' => $request->phone
        ]);
        
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }
    
    // Login user
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        $user = User::where('email', $request->email)->first();
        
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials']
            ]);
        }
        
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
    
    // Logout user
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        
        return response()->json(['message' => 'Logged out']);
    }
    
    // Get current user
    public function me(Request $request)
    {
        return response()->json($request->user());
    }
}
```

## **Step 10: Setup API Routes**

Update `routes/api.php`:

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\HouseController;
use App\Http\Controllers\Api\RequestController;
use App\Http\Controllers\Api\ReviewController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public house viewing
Route::get('/houses', [HouseController::class, 'index']);
Route::get('/houses/{id}', [HouseController::class, 'show']);

// Protected routes (require token)
Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Houses (Owner only)
    Route::post('/houses', [HouseController::class, 'store']);
    Route::put('/houses/{id}', [HouseController::class, 'update']);
    Route::delete('/houses/{id}', [HouseController::class, 'destroy']);
    Route::post('/houses/{id}/images', [HouseController::class, 'uploadImage']);
    
    // Rental Requests
    Route::post('/requests', [RequestController::class, 'store']);
    Route::put('/requests/{id}', [RequestController::class, 'update']);
    Route::get('/my-requests', [RequestController::class, 'myRequests']);
    Route::get('/owner-requests', [RequestController::class, 'ownerRequests']);
    
    // Reviews
    Route::post('/reviews', [ReviewController::class, 'store']);
});
```

## **Step 11: Test Authentication**

```bash
# Start server
php artisan serve

# Test register (in another terminal)
curl -X POST http://localhost:8000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"123456","role":"owner"}'
```

Expected response:
```json
{
  "user": {...},
  "token": "1|xxxxxxxx..."
}
```

---

# 🏘️ **PHASE 4: HOUSE MANAGEMENT**

## **Step 12: Create House Controller**

```bash
php artisan make:controller Api/HouseController
```

Create `app/Http/Controllers/Api/HouseController.php`:

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\House;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class HouseController extends Controller
{
    // List all houses
    public function index(Request $request)
    {
        $query = House::with('owner', 'images')
            ->where('is_approved', true)
            ->where('status', 'available');
        
        // Filter by price
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }
        
        // Filter by rooms
        if ($request->has('rooms')) {
            $query->where('rooms', $request->rooms);
        }
        
        // Filter by location
        if ($request->has('location')) {
            $query->where('location', 'like', '%' . $request->location . '%');
        }
        
        $houses = $query->latest()->paginate(12);
        
        return response()->json($houses);
    }
    
    // Show single house
    public function show($id)
    {
        $house = House::with('owner', 'images', 'reviews.renter')
            ->findOrFail($id);
            
        return response()->json($house);
    }
    
    // Create new house
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:150',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'location' => 'required|string',
            'rooms' => 'required|integer|min:1'
        ]);
        
        $house = House::create([
            'owner_id' => $request->user()->id,
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'location' => $request->location,
            'rooms' => $request->rooms,
            'status' => 'available',
            'is_approved' => false // Admin must approve
        ]);
        
        return response()->json($house, 201);
    }
    
    // Update house
    public function update(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($id);
            
        $house->update($request->only([
            'title', 'description', 'price', 'location', 'rooms', 'status'
        ]));
        
        return response()->json($house);
    }
    
    // Delete house
    public function destroy(Request $request, $id)
    {
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($id);
            
        $house->delete();
        
        return response()->json(['message' => 'House deleted']);
    }
    
    // Upload house images
    public function uploadImage(Request $request, $id)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);
        
        $house = House::where('owner_id', $request->user()->id)
            ->findOrFail($id);
            
        $path = $request->file('image')->store('houses', 'public');
        
        $house->images()->create([
            'image_path' => $path
        ]);
        
        return response()->json(['path' => $path], 201);
    }
}
```

## **Step 13: Create Admin Middleware**

```bash
php artisan make:middleware AdminMiddleware
```

Update `app/Http/Middleware/AdminMiddleware.php`:

```php
<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        if ($request->user() && $request->user()->role === 'admin') {
            return $next($request);
        }
        
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
```

Register in `app/Http/Kernel.php`:

```php
protected $routeMiddleware = [
    // ... other middleware
    'admin' => \App\Http\Middleware\AdminMiddleware::class,
];
```

## **Step 14: Create Request Controller**

```bash
php artisan make:controller Api/RequestController
```

Create `app/Http/Controllers/Api/RequestController.php`:

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\RequestRental;
use App\Models\House;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RequestController extends Controller
{
    // Send rental request
    public function store(Request $request)
    {
        $request->validate([
            'house_id' => 'required|exists:houses,id',
            'message' => 'nullable|string'
        ]);
        
        // Check if already requested
        $existing = RequestRental::where('renter_id', $request->user()->id)
            ->where('house_id', $request->house_id)
            ->whereIn('status', ['pending', 'accepted'])
            ->first();
            
        if ($existing) {
            return response()->json(['message' => 'Request already sent'], 400);
        }
        
        $rentalRequest = RequestRental::create([
            'renter_id' => $request->user()->id,
            'house_id' => $request->house_id,
            'message' => $request->message,
            'status' => 'pending'
        ]);
        
        return response()->json($rentalRequest, 201);
    }
    
    // Update request status (accept/reject)
    public function update(Request $request, $id)
    {
        $rentalRequest = RequestRental::with('house')
            ->findOrFail($id);
            
        // Only owner can update
        if ($rentalRequest->house->owner_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        $request->validate([
            'status' => 'required|in:accepted,rejected'
        ]);
        
        $rentalRequest->update(['status' => $request->status]);
        
        // If accepted, mark house as rented
        if ($request->status === 'accepted') {
            $rentalRequest->house->update(['status' => 'rented']);
        }
        
        return response()->json($rentalRequest);
    }
    
    // Get renter's requests
    public function myRequests(Request $request)
    {
        $requests = RequestRental::with('house')
            ->where('renter_id', $request->user()->id)
            ->latest()
            ->paginate(10);
            
        return response()->json($requests);
    }
    
    // Get owner's requests
    public function ownerRequests(Request $request)
    {
        $requests = RequestRental::with('house', 'renter')
            ->whereHas('house', function($query) use ($request) {
                $query->where('owner_id', $request->user()->id);
            })
            ->latest()
            ->paginate(10);
            
        return response()->json($requests);
    }
}
```

## **Step 15: Create Review Controller**

```bash
php artisan make:controller Api/ReviewController
```

Create `app/Http/Controllers/Api/ReviewController.php`:

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\Review;
use App\Models\RequestRental;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'house_id' => 'required|exists:houses,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string'
        ]);
        
        // Check if user has rented this house (accepted request)
        $hasRented = RequestRental::where('renter_id', $request->user()->id)
            ->where('house_id', $request->house_id)
            ->where('status', 'accepted')
            ->exists();
            
        if (!$hasRented) {
            return response()->json(['message' => 'You can only review houses you rented'], 403);
        }
        
        $review = Review::create([
            'renter_id' => $request->user()->id,
            'house_id' => $request->house_id,
            'rating' => $request->rating,
            'comment' => $request->comment
        ]);
        
        return response()->json($review, 201);
    }
}
```

---

# 🎨 **PHASE 5: REACT FRONTEND**

## **Step 16: Setup React**

```bash
# Install React with Vite
npm create vite@latest frontend -- --template react

# Or use Laravel's built-in Vite (simpler)
npm install react react-dom react-router-dom axios
```

Update `resources/js/app.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

## **Step 17: Create API Service**

Create `resources/js/services/api.js`:

```javascript
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

// Auth functions
export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const logout = () => api.post('/logout');
export const getUser = () => api.get('/me');

// House functions
export const getHouses = (params) => api.get('/houses', { params });
export const getHouse = (id) => api.get(`/houses/${id}`);
export const createHouse = (data) => api.post('/houses', data);
export const updateHouse = (id, data) => api.put(`/houses/${id}`, data);
export const deleteHouse = (id) => api.delete(`/houses/${id}`);
export const uploadImage = (id, file) => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post(`/houses/${id}/images`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
};

// Request functions
export const sendRequest = (data) => api.post('/requests', data);
export const updateRequest = (id, status) => api.put(`/requests/${id}`, { status });
export const getMyRequests = () => api.get('/my-requests');
export const getOwnerRequests = () => api.get('/owner-requests');

// Review functions
export const addReview = (data) => api.post('/reviews', data);
```

## **Step 18: Create Auth Component**

Create `resources/js/components/Login.jsx`:

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };
    
    return (
        <div className="container">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
```

## **Step 19: Create Houses List Component**

Create `resources/js/components/HouseList.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouses } from '../services/api';

function HouseList() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        min_price: '',
        max_price: '',
        rooms: '',
        location: ''
    });
    
    useEffect(() => {
        fetchHouses();
    }, [filters]);
    
    const fetchHouses = async () => {
        setLoading(true);
        try {
            const response = await getHouses(filters);
            setHouses(response.data.data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <div className="container">
            <h1>Available Houses</h1>
            
            {/* Filters */}
            <div className="filters">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={filters.min_price}
                    onChange={(e) => setFilters({...filters, min_price: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={filters.max_price}
                    onChange={(e) => setFilters({...filters, max_price: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Rooms"
                    value={filters.rooms}
                    onChange={(e) => setFilters({...filters, rooms: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                />
            </div>
            
            {/* Houses Grid */}
            <div className="houses-grid">
                {houses.map(house => (
                    <div key={house.id} className="house-card">
                        {house.images.length > 0 && (
                            <img src={`/storage/${house.images[0].image_path}`} alt={house.title} />
                        )}
                        <h3>{house.title}</h3>
                        <p>${house.price}/month</p>
                        <p>{house.location}</p>
                        <p>{house.rooms} rooms</p>
                        <Link to={`/houses/${house.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HouseList;
```

## **Step 20: Setup Routes**

Create `resources/js/App.jsx`:

```jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HouseList from './components/HouseList';
import HouseDetail from './components/HouseDetail';
import Dashboard from './components/Dashboard';

function App() {
    const isAuthenticated = localStorage.getItem('token');
    
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/houses" element={<HouseList />} />
            <Route path="/houses/:id" element={<HouseDetail />} />
            <Route 
                path="/dashboard" 
                element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route path="/" element={<Navigate to="/houses" />} />
        </Routes>
    );
}

export default App;
```

## **Step 21: Create House Form (Owner)**

Create `resources/js/components/CreateHouse.jsx`:

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHouse, uploadImage } from '../services/api';

function CreateHouse() {
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        rooms: ''
    });
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createHouse(form);
            const houseId = response.data.id;
            
            // Upload images
            for (let image of images) {
                await uploadImage(houseId, image);
            }
            
            navigate('/my-houses');
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div className="container">
            <h2>List Your House</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({...form, title: e.target.value})}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    required
                />
                <input
                    type="number"
                    placeholder="Price per month"
                    value={form.price}
                    onChange={(e) => setForm({...form, price: e.target.value})}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={form.location}
                    onChange={(e) => setForm({...form, location: e.target.value})}
                    required
                />
                <input
                    type="number"
                    placeholder="Number of rooms"
                    value={form.rooms}
                    onChange={(e) => setForm({...form, rooms: e.target.value})}
                    required
                />
                <input
                    type="file"
                    multiple
                    onChange={(e) => setImages(Array.from(e.target.files))}
                />
                <button type="submit">Submit for Approval</button>
            </form>
        </div>
    );
}

export default CreateHouse;
```

---

# ✅ **FINAL TESTING STEPS**

## **Step 22: Run Both Servers**

```bash
# Terminal 1 - Laravel
php artisan serve

# Terminal 2 - React (if separate)
npm run dev

# Or if using Laravel Vite
npm run dev
```

## **Step 23: Test Complete Flow**

1. **Register as Owner**
   - POST `/api/register` with role=owner

2. **Create House**
   - POST `/api/houses` with your house data

3. **Upload Images**
   - POST `/api/houses/1/images` with image file

4. **Register as Renter** (different email)
   - POST `/api/register` with role=renter

5. **Browse Houses**
   - GET `/api/houses`

6. **Send Rental Request**
   - POST `/api/requests` with house_id

7. **Owner Accepts Request**
   - PUT `/api/requests/1` with status=accepted

8. **Add Review**
   - POST `/api/reviews` with rating and comment

---

## **Step 24: Common Errors & Fixes**

| Error | Solution |
|-------|----------|
| 500 Server Error | `php artisan config:clear` |
| 419 CSRF Token | Add `'X-CSRF-TOKEN'` header or use Sanctum |
| 401 Unauthorized | Check if token is in localStorage |
| Image not showing | `php artisan storage:link` |
| Class not found | `composer dump-autoload` |
| Migration error | `php artisan migrate:fresh` |

## **Step 25: Next Steps**

Now you have a working foundation! Add these features next:

1. ✅ **Admin approval system** for houses
2. ✅ **Subscription payments** for owners
3. ✅ **Real-time notifications** using Laravel Echo
4. ✅ **Google Maps integration** for locations
5. ✅ **More filters** (amenities, nearby places)

---

## 📝 **Quick Commands Reference**

```bash
# Create new model with migration
php artisan make:model ModelName -m

# Create controller
php artisan make:controller Api/NameController

# Create seeder
php artisan make:seeder NameSeeder

# Run seeders
php artisan db:seed

# Clear cache
php artisan cache:clear && php artisan config:clear && php artisan route:clear

# List all routes
php artisan route:list

# Create new middleware
php artisan make:middleware MiddlewareName
```

---

**🎉 CONGRATULATIONS!** You have a complete House Rental System!

Would you like me to:
- Add **Admin Panel** features?
- Implement **Payment Integration** (Stripe/PayPal)?
- Add **Email Notifications**?
- Create **Mobile API** endpoints?