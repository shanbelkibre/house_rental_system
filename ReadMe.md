````md
# House Rental System - Complete README

```js

┌─────────────────────────────────────────────────────────────────────┐
│  PHASE 1: PLANNING & SETUP (Day 1)                                  │
│  ├── Database Design (10 tables)                                    │
│  ├── Laravel Installation                                           │
│  └── React Frontend Setup                                           │
├─────────────────────────────────────────────────────────────────────┤
│  PHASE 2: BACKEND DEVELOPMENT (Day 2-4)                             │
│  ├── Models (11 models)                                             │
│  ├── Controllers (9 controllers)                                    │
│  ├── API Routes (44 endpoints)                                      │
│  └── Authentication (Sanctum)                                       │
├─────────────────────────────────────────────────────────────────────┤
│  PHASE 3: FRONTEND DEVELOPMENT (Day 5-7)                            │
│  ├── Authentication Pages (Login, Register)                         │
│  ├── House Management (List, Detail, Create, Edit)                  │
│  ├── Rental Requests                                                │
│  ├── Dashboard (Role-based)                                         │
│  └── Admin Panel (7 functions)                                      │
├─────────────────────────────────────────────────────────────────────┤
│  PHASE 4: TESTING & DEPLOYMENT (Day 8)                              │
│  ├── API Testing (43 endpoints)                                     │
│  ├── Integration Testing                                            │
│  └── Production Deployment                                          │
└─────────────────────────────────────────────────────────────────────┘

````

# **PHASE 1: INITIAL SETUP**

## **Step 1.1: Create Database**

## **Step 1.2: Install Laravel**

```bash
# Check required versions
php -v        # Need PHP 8.1+
composer -v   # Need Composer
node -v       # Need Node 18+
npm -v        # Need NPM
mysql --version  # Need MySQL 5.7+

composer create-project laravel/laravel house-rental-backend
cd house-rental-backend
```

## **Step 1.3: Install Required Packages**

```bash

# API Authentication
composer require laravel/sanctum

# Generate key
php artisan key:generate

# Publish Sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Create storage link for images
php artisan storage:link
```

## **Step 1.4: Configure .env**

```bash
APP_NAME="House Rental System"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=house_rental
DB_USERNAME=root
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost:3000
SESSION_DOMAIN=localhost
```

## **Step 1.6: Project Structure Created**

```bash

house-rental-backend/          # Laravel (port 8000)
├── app/
├── routes/
├── database/
└── public/

house-rental-frontend/         # React (port 5173)
├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── App.jsx
└── package.json
```

# 🗄️ **PHASE 2: DATABASE & MODELS**

## **Step 2.1: Create All Migrations**

```bash
cd house-rental-backend

# Create migration for each table
php artisan make:migration create_users_table
php artisan make:migration create_houses_table
php artisan make:migration create_house_images_table
php artisan make:migration create_requests_table
php artisan make:migration create_reviews_table
php artisan make:migration create_subscriptions_table
php artisan make:migration create_payments_table
php artisan make:migration create_visits_table
php artisan make:migration create_agreements_table
php artisan make:migration create_notifications_table

# Create Laravel required tables
php artisan session:table
php artisan cache:table
```

## **Step 2.2: Write Migration Code**

## **Step 2.3: Run Migrations**

## **Step 2.4: Create All Models**

```bash

php artisan make:model House
php artisan make:model HouseImage
php artisan make:model RequestRental
php artisan make:model Review
php artisan make:model Subscription
php artisan make:model Payment
php artisan make:model Visit
php artisan make:model Agreement
php artisan make:model Notification
```

## **Step 2.5: Update Each Model code**

# **PHASE 3: CONTROLLERS & API**

## **Step 3.1: Create Controllers**

```bash

php artisan make:controller Api/AuthController
php artisan make:controller Api/HouseController
php artisan make:controller Api/RequestController
php artisan make:controller Api/ReviewController
php artisan make:controller Api/SubscriptionController
php artisan make:controller Api/VisitController
php artisan make:controller Api/AgreementController
php artisan make:controller Api/NotificationController
php artisan make:controller Api/AdminController
```

## **Step 3.2: Create and update each controller**

## **Step 3.3: Create AdminMiddleware**

## **Step 3.4: Create API Routes**

# **PHASE 4: FRONT END DEVELOPMENT**

## **Step 4.1: Create API Service**

**`frontend/src/services/api.js`**

```bash
┌─────────────────┐
│   frontend/     │ ← Presentation Layer (React)
│   src/          │
├─────────────────┤
│   backend/      │ ← Business Logic Layer (Laravel API)
│   app/          │
│   routes/       │
│   controllers/  │
├─────────────────┤
│   database/     │ ← Data Layer (MySQL)
│   migrations/   │
└─────────────────┘
```

```plaintext
house_rental_system/
├── backend/
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── AdminController.php
│   │   │   │   ├── AgreementController.php
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── Controller.php
│   │   │   │   ├── HouseController.php
│   │   │   │   ├── NotificationController.php
│   │   │   │   ├── RequestController.php
│   │   │   │   ├── ReviewController.php
│   │   │   │   ├── SubscriptionController.php
│   │   │   │   └── VisitController.php
│   │   │   └── Middleware/
│   │   │       ├── AdminMiddleware.php
│   │   │       └── ForceJsonResponse.php
│   │   ├── Models/
│   │   │   ├── AdminReport.php
│   │   │   ├── Agreement.php
│   │   │   ├── HouseImage.php
│   │   │   ├── House.php
│   │   │   ├── Notification.php
│   │   │   ├── Payment.php
│   │   │   ├── RequestRental.php
│   │   │   ├── Review.php
│   │   │   ├── Subscription.php
│   │   │   ├── SubscriptionPlan.php
│   │   │   ├── User.php
│   │   │   └── Visit.php
│   │   └── Providers/
│   │       └── AppServiceProvider.php
│   │
│   ├── config/
│   │   ├── app.php
│   │   ├── auth.php
│   │   ├── cache.php
│   │   ├── cors.php
│   │   ├── database.php
│   │   ├── filesystems.php
│   │   ├── logging.php
│   │   ├── mail.php
│   │   ├── queue.php
│   │   ├── sanctum.php
│   │   ├── services.php
│   │   └── session.php
│   │
│   ├── database/
│   │   ├── factories/
│   │   │   └── UserFactory.php
│   │   ├── migrations/
│   │   │   ├── 2026_04_27_202424_create_personal_access_tokens_table.php
│   │   │   ├── 2026_04_27_204646_create_all_tables.php
│   │   │   ├── 2026_04_27_221623_create_sessions_table.php
│   │   │   ├── 2026_04_28_000001_add_is_suspended_to_users_table.php
│   │   │   ├── 2026_04_28_000002_create_subscription_plans_table.php
│   │   │   └── 2026_04_28_000003_create_admin_reports_table.php
│   │   └── seeders/
│   │       ├── AdminUserSeeder.php
│   │       └── DatabaseSeeder.php
│   │
│   └── routes/
│       ├── api.php
│       ├── console.php
│       └── web.php
│
├── frontend/
│   └── src/
│       ├── api/
│       │   └── axios.js
│       ├── App.jsx
│       ├── components/
│       │   ├── AnimatedHeading.jsx
│       │   ├── FadeIn.jsx
│       │   ├── HouseCard.jsx
│       │   ├── Navbar.jsx
│       │   ├── ProtectedRoute.jsx
│       │   ├── ShinyText.tsx
│       │   └── UI.jsx
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── pages/
│       │   ├── AdminPage.jsx
│       │   ├── Dashboard.jsx
│       │   ├── DesignProHero.tsx
│       │   ├── HomePage.jsx
│       │   ├── HouseDetailPage.jsx
│       │   ├── HousesPage.jsx
│       │   ├── LoginPage.jsx
│       │   ├── MyAgreementsPage.jsx
│       │   ├── MyHousesPage.jsx
│       │   ├── MyRequestsPage.jsx
│       │   ├── MyVisitsPage.jsx
│       │   ├── NotificationsPage.jsx
│       │   ├── OwnerRequestsPage.jsx
│       │   ├── ProfilePage.jsx
│       │   ├── RegisterPage.jsx
│       │   └── SubscriptionPage.jsx
│       ├── services/
│       │   └── api.js
│       ├── utils/
│       │   └── media.js
│       └── vite-env.d.ts
```

```bash
┌─────────────────────────────────────────────────────────────────────┐
│                    HOUSE RENTAL SYSTEM                               │
│                    (3-Tier Architecture)                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐     │
│  │  TIER 1: PRESENTATION LAYER                                 │     │
│  │  ┌──────────────────────────────────────────────────────┐  │     │
│  │  │  frontend/src/                                       │  │     │
│  │  │  ├── pages/     (15 React pages)                     │  │     │
│  │  │  ├── components/ (Reusable UI)                       │  │     │
│  │  │  ├── context/    (AuthContext)                       │  │     │
│  │  │  └── services/   (API calls)                         │  │     │
│  │  └──────────────────────────────────────────────────────┘  │     │
│  │              │                                              │     │
│  │              │ HTTP / API Calls                            │     │
│  │              ▼                                              │     │
│  └────────────────────────────────────────────────────────────┘     │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐     │
│  │  TIER 2: BUSINESS LOGIC LAYER                               │     │
│  │  ┌──────────────────────────────────────────────────────┐  │     │
│  │  │  backend/app/Http/Controllers/                       │  │     │
│  │  │  ├── AuthController.php      (Auth logic)            │  │     │
│  │  │  ├── HouseController.php     (House CRUD)            │  │     │
│  │  │  ├── RequestController.php   (Rental requests)       │  │     │
│  │  │  ├── AdminController.php     (Admin functions)       │  │     │
│  │  │  └── 6 other controllers                             │  │     │
│  │  └──────────────────────────────────────────────────────┘  │     │
│  │  ┌──────────────────────────────────────────────────────┐  │     │
│  │  │  backend/app/Models/                                 │  │     │
│  │  │  ├── User.php, House.php, RequestRental.php...      │  │     │
│  │  │  └── 11 total models                                 │  │     │
│  │  └──────────────────────────────────────────────────────┘  │     │
│  │  ┌──────────────────────────────────────────────────────┐  │     │
│  │  │  backend/routes/api.php                              │  │     │
│  │  │  └── 44 API endpoints                                │  │     │
│  │  └──────────────────────────────────────────────────────┘  │     │
│  │              │                                              │     │
│  │              │ SQL Queries / Eloquent                      │     │
│  │              ▼                                              │     │
│  └────────────────────────────────────────────────────────────┘     │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐     │
│  │  TIER 3: DATA LAYER                                         │     │
│  │  ┌──────────────────────────────────────────────────────┐  │     │
│  │  │  backend/database/migrations/                        │  │     │
│  │  │  └── 10 tables + sessions + cache                    │  │     │
│  │  └──────────────────────────────────────────────────────┘  │     │
│  │  ┌──────────────────────────────────────────────────────┐  │     │
│  │  │  MySQL Database - house_rental                        │  │     │
│  │  │  ├── users, houses, house_images                     │  │     │
│  │  │  ├── requests, reviews, subscriptions                │  │     │
│  │  │  ├── payments, visits, agreements                    │  │     │
│  │  │  └── notifications                                    │  │     │
│  │  └──────────────────────────────────────────────────────┘  │     │
│  └────────────────────────────────────────────────────────────┘     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

```

### **📁 Your File Structure is PERFECT**

| Layer            | Folder                          | Files Count    | Purpose               |   |
| ---------------- | ------------------------------- | -------------- | --------------------- | - |
| **Presentation** | `frontend/src/pages/`           | 15 pages       | React UI components   |   |
| **Presentation** | `frontend/src/components/`      | 7 components   | Reusable UI elements  |   |
| **Business**     | `backend/app/Http/Controllers/` | 10 controllers | API logic             |   |
| **Business**     | `backend/app/Models/`           | 12 models      | Database interactions |   |
| **Business**     | `backend/routes/api.php`        | 44 routes      | API endpoints         |   |
| **Data**         | `backend/database/migrations/`  | 6 migrations   | Table schemas         |   |

| Aspect         | Your Status                           |
| -------------- | ------------------------------------- |
| Architecture   | ✅ 3-Tier (Layered)                    |
| Separation     | ✅ Frontend & Backend separate folders |
| Communication  | ✅ API-based (REST)                    |
| Database       | ✅ MySQL with 10+ tables               |
| Authentication | ✅ Sanctum token-based                 |
| Deployment     | ✅ Can deploy independently            |

```bash
1. USER ACTION (Presentation Layer)
   ↓
   React component calls: api.post('/api/register', data)

2. API REQUEST (Business Layer)
   ↓
   routes/api.php → AuthController@register
   ↓
   Controller validates → Model saves to database

3. DATABASE (Data Layer)
   ↓
   MySQL stores user record
   ↓
   Returns response back up the layers

4. RESPONSE (Back to Presentation)
   ↓
   React receives JSON {user, token}
   ↓
   Updates UI and localStorage
```

**Layered (3-Tier) Architecture**

* **Presentation Layer** → React Frontend (UI)
* **Business Logic Layer** → Laravel Backend (API + Controllers)
* **Data Layer** → MySQLDatabase

# 📖 **House Rental System - Complete Workflow & Build Guide**

## **Based on Your Complete System Architecture**

# 🗺️ **PART 1: SYSTEM OVERVIEW**

## **What This System Does**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    HOUSE RENTAL MANAGEMENT SYSTEM                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   A complete web platform where:                                         │
│                                                                          │
│   🏠 OWNERS → Post houses (after paying subscription)                    │
│   🔍 RENTERS → Search and request houses                                 │
│   👑 ADMIN → Approve everything & manage platform                        │
│   📄 OFFLINE → Physical agreement happens outside the system             │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

#  **PART 2: USER ROLES & PERMISSIONS**

## **Three User Types**

| Role       |   | Permissions                                                                                                       |
| ---------- | - | ----------------------------------------------------------------------------------------------------------------- |
| **Owner**  |   | Register, Login, Subscribe, Post Houses, Upload Images, Accept/Reject Requests, Confirm Visits, Create Agreements |
| **Renter** |   | Register, Login, Browse Houses, Send Requests, Schedule Visits, Leave Reviews, Confirm Agreements                 |
| **Admin**  |   | Login, View Dashboard Stats, Approve/Reject Houses, Manage Users, Generate Reports                                |

---

# 🔄 **PART 3: COMPLETE WORKFLOW (11 Phases)**

## **Phase 1: System Setup (Done Once)**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 1.1: Create Database                                              │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ mysql -u root -p                                                  │  │
│  │ CREATE DATABASE house_rental;                                     │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  STEP 1.2: Install Laravel Backend                                       │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ composer create-project laravel/laravel house-rental-backend      │  │
│  │ cd house-rental-backend                                           │  │
│  │ composer require laravel/sanctum                                  │  │
│  │ php artisan vendor:publish --provider="Laravel\Sanctum\..."       │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  STEP 1.3: Create React Frontend                                         │  │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ npm create vite@latest house-rental-frontend -- --template react  │  │
│  │ cd house-rental-frontend                                          │  │
│  │ npm install axios react-router-dom                                │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  STEP 1.4: Create 10 Database Tables                                     │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ users | houses | house_images | requests | reviews                │  │
│  │ subscriptions | payments | visits | agreements | notifications    │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 2: User Registration**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ User visits  │────▶│  Clicks      │────▶│  Fills Form  │             │
│  │ Website      │     │  Register    │     │  (name,email,│             │
│  │              │     │              │     │   password,  │             │
│  │              │     │              │     │   role)      │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ POST /api/   │────▶│  Database    │       │
│                              │ register     │     │  saves user  │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Returns      │     │ User receives│       │
│                              │ Token + User │◀────│  Token       │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│  📝 API CALL: POST /api/register                                         │
│  📦 REQUEST BODY: {name, email, password, role, phone}                   │
│  ✅ RESPONSE: {user, token}                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 3: User Login**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ User enters  │────▶│ POST /api/   │────▶│ Laravel      │             │
│  │ email + pwd  │     │ login        │     │ validates    │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                              ┌────────────────────┼────────────────────┐ │
│                              │                    │                    │ │
│                              ▼                    ▼                    │ │
│                    ┌──────────────┐      ┌──────────────┐              │ │
│                    │ User found?  │      │ Password     │              │ │
│                    │ Check email  │      │ match?       │              │ │
│                    └──────┬───────┘      └──────┬───────┘              │ │
│                           │                     │                       │ │
│                           └──────────┬──────────┘                       │ │
│                                      │                                  │ │
│                                      ▼                                  │ │
│                    ┌──────────────┐      ┌──────────────┐               │
│                    │ Delete old   │────▶│ Create new   │               │
│                    │ tokens       │      │ token        │               │
│                    └──────────────┘      └──────┬───────┘               │
│                                                  │                       │
│                                                  ▼                       │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Return to    │     │ Frontend     │       │
│                              │ Frontend     │────▶│ saves token  │       │
│                              │ {user,token} │     │ in localStorage│     │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│  API CALL: POST /api/login                                            │
│   REQUEST BODY: {email, password}                                      │
│  RESPONSE: {user, token}                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 4: Owner Subscription (Required to Post Houses)**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ Owner logs   │────▶│ Sees "No     │────▶│ Clicks       │             │
│  │ in           │     │ Subscription"│     │ Subscribe    │             │
│  │              │     │ warning      │     │              │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Selects      │────▶│ POST /api/   │       │
│                              │ Payment      │     │ subscribe    │       │
│                              │ Method       │     │              │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Subscription │     │ Owner can    │       │
│                              │ created      │────▶│ now post     │       │
│                              │ (30 days)    │     │ houses       │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│   API CALL: POST /api/subscribe (requires auth)                        │
│   REQUEST BODY: {payment_method, amount}                               │
│   RESPONSE: {subscription, payment}                                    │
│   CONDITION: Owner MUST have active subscription to post houses        │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 5: Owner Posts a House**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ Owner clicks │────▶│ Fills form:  │────▶│ Uploads      │             │
│  │ "Add House"  │     │ title, desc, │     │ images       │             │
│  │              │     │ price, loc,  │     │ (multiple)   │             │
│  │              │     │ rooms        │     │              │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ POST /api/   │────▶│ House saved  │       │
│                              │ houses       │     │ is_approved= │       │
│                              │ + images     │     │ false        │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Admin gets   │     │ House not    │       │
│                              │ notification │────▶│ visible to   │       │
│                              │ to approve   │     │ renters yet  │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│   API CALLS:                                                           │
│  1. POST /api/houses - Create house                                      │
│  2. POST /api/houses/{id}/images - Upload each image                     │
│  REQUEST BODY: {title, description, price, location, rooms}           │
│  RESPONSE: {message: "House submitted for approval", house}           │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 6: Admin Approves House**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ Admin logs   │────▶│ Sees pending │────▶│ Clicks       │             │
│  │ in           │     │ approvals    │     │ "Approve     │             │
│  │              │     │ counter      │     │ Houses"      │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Reviews      │────▶│ Clicks       │       │
│                              │ house        │     │ "Approve"    │       │
│                              │ details      │     │ button       │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ PUT /api/    │────▶│ House becomes│       │
│                              │ admin/houses │     │ visible to   │       │
│                              │ /{id}/approve│     │ renters      │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Owner gets   │     │ Renter can   │       │
│                              │ notification │────▶│ now see      │       │
│                              │ "House       │     │ the house    │       │
│                              │ approved"    │     │              │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│   API CALL: PUT /api/admin/houses/{id}/approve (Admin only)            │
│  RESPONSE: {message: "House approved", house}                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 7: Renter Finds and Views Houses**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ Renter logs  │────▶│ Browses      │────▶│ Filters by:  │             │
│  │ in           │     │ /houses page │     │ - price range│             │
│  │              │     │              │     │ - rooms      │             │
│  │              │     │              │     │ - location   │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ GET /api/    │────▶│ House list   │       │
│                              │ houses?      │     │ displayed    │       │
│                              │ min_price=   │     │ with images  │       │
│                              │ 5000&rooms=3 │     │ & prices     │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Clicks on    │────▶│ GET /api/    │       │
│                              │ a house      │     │ houses/{id}  │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Sees full    │     │ Can send     │       │
│                              │ details:     │────▶│ rental       │       │
│                              │ images,      │     │ request      │       │
│                              │ price,       │     │              │       │
│                              │ owner info,  │     │              │       │
│                              │ reviews      │     │              │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│  API CALLS:                                                           │
│  1. GET /api/houses?min_price=&max_price=&rooms=&location=&sort=latest   │
│  2. GET /api/houses/{id}                                                 │
│  3. GET /api/houses/{id}/reviews                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 8: Renter Sends Rental Request**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ Renter views │────▶│ Clicks       │────▶│ Writes       │             │
│  │ house detail │     │ "Request to  │     │ optional     │             │
│  │ page         │     │ Rent" button │     │ message      │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ POST /api/   │────▶│ Request saved│       │
│                              │ requests     │     │ status =     │       │
│                              │              │     │ "pending"    │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Owner gets   │     │ Renter sees  │       │
│                              │ notification │────▶│ "Request     │       │
│                              │ "New rental  │     │ sent"        │       │
│                              │ request"     │     │ confirmation │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│   API CALL: POST /api/requests (Renter only)                           │
│   REQUEST BODY: {house_id, message}                                    │
│  RESPONSE: {message: "Rental request sent", request}                  │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 9: Owner Responds to Request**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ Owner logs   │────▶│ Goes to      │────▶│ Sees list of │             │
│  │ in           │     │ /owner-      │     │ pending      │             │
│  │              │     │ requests     │     │ requests     │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                              ┌────────────────────┼────────────────────┐ │
│                              │                    │                    │ │
│                              ▼                    ▼                    │ │
│                    ┌──────────────┐      ┌──────────────┐              │ │
│                    │ Clicks       │      │ Clicks       │              │ │
│                    │ "Accept"     │      │ "Reject"     │              │ │
│                    └──────┬───────┘      └──────┬───────┘              │ │
│                           │                    │                       │ │
│                           ▼                    ▼                       │ │
│                    ┌──────────────┐      ┌──────────────┐               │
│                    │ PUT /api/    │      │ PUT /api/    │               │
│                    │ requests/{id}│      │ requests/{id}│               │
│                    │ status:      │      │ status:      │               │
│                    │ "accepted"   │      │ "rejected"   │               │
│                    └──────┬───────┘      └──────┬───────┘               │
│                           │                    │                       │
│                           ▼                    ▼                       │
│                    ┌──────────────┐      ┌──────────────┐               │
│                    │ House marked │      │ Request      │               │
│                    │ as "rented"  │      │ rejected     │               │
│                    └──────────────┘      └──────────────┘               │
│                                                                          │
│   API CALL: PUT /api/requests/{id} (Owner only)                        │
│   REQUEST BODY: {status: "accepted" or "rejected"}                     │
│   RESPONSE: {message: "Request accepted", request}                     │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 10: Schedule Physical Visit**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ After        │────▶│ Renter picks │────▶│ POST /api/   │             │
│  │ request      │     │ date & time  │     │ visits       │             │
│  │ accepted     │     │              │     │              │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Visit saved  │────▶│ Owner gets   │       │
│                              │ status =     │     │ notification │       │
│                              │ "pending"    │     │              │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Owner        │────▶│ PUT /api/    │       │
│                              │ confirms     │     │ visits/{id}  │       │
│                              │ visit        │     │ status:      │       │
│                              │              │     │ "confirmed"  │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Renter gets  │     │ Renter       │       │
│                              │ notification │────▶│ visits house │       │
│                              │ "Visit       │     │ physically   │       │
│                              │ confirmed"   │     │              │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│  📝 API CALLS:                                                           │
│  1. POST /api/visits (Renter) - Schedule visit                          │
│  2. PUT /api/visits/{id} (Owner) - Confirm visit                        │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Phase 11: Create Offline Agreement**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM:                                                           │
│                                                                          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐             │
│  │ After        │────▶│ Both parties │────▶│ Owner creates│             │
│  │ physical     │     │ agree on     │     │ agreement in │             │
│  │ visit        │     │ terms        │     │ system       │             │
│  └──────────────┘     └──────────────┘     └──────┬───────┘             │
│                                                    │                      │
│                                                    ▼                      │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ POST /api/   │────▶│ Agreement    │       │
│                              │ agreements   │     │ saved with   │       │
│                              │              │     │ status =     │       │
│                              │              │     │ "pending"    │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Renter       │────▶│ PUT /api/    │       │
│                              │ confirms     │     │ agreements/  │       │
│                              │ agreement    │     │ {id}/confirm │       │
│                              └──────────────┘     └──────┬───────┘       │
│                                                          │               │
│                                                          ▼               │
│                              ┌──────────────┐     ┌──────────────┐       │
│                              │ Agreement    │     │ House is     │       │
│                              │ confirmed    │────▶│ officially   │       │
│                              │ status =     │     │ rented       │       │
│                              └──────────────┘     └──────────────┘       │
│                                                                          │
│  📝 API CALLS:                                                           │
│  1. POST /api/agreements (Owner) - Create agreement                     │
│  2. PUT /api/agreements/{id}/confirm (Renter) - Confirm agreement       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

# 📊 **PART 4: DATABASE SCHEMA (10 Tables)**

## **Table Relationships Diagram**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DATABASE RELATIONSHIPS                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│    ┌──────────┐                                                          │
│    │  users   │                                                          │
│    │  (id PK) │                                                          │
│    └────┬─────┘                                                          │
│         │                                                                │
│         │ 1 ─────────────────────────────────────────────────────┐      │
│         │                                                         │      │
│         ▼                                                         ▼      │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐         │
│    │  houses  │    │ requests │    │reviews   │    │notifica- │         │
│    │owner_id  │    │renter_id │    │renter_id │    │tions     │         │
│    │  (FK)    │    │house_id  │    │house_id  │    │user_id   │         │
│    └────┬─────┘    │  (FK)    │    │  (FK)    │    │  (FK)    │         │
│         │          └──────────┘    └──────────┘    └──────────┘         │
│         │                                                                │
│         │ 1                                                             │
│         ▼                                                               │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐         │
│    │house_    │    │subscript-│    │ payments │    │ visits   │         │
│    │images    │    │ions      │    │owner_id  │    │renter_id │         │
│    │house_id  │    │owner_id  │    │  (FK)    │    │house_id  │         │
│    │  (FK)    │    │  (FK)    │    └──────────┘    │  (FK)    │         │
│    └──────────┘    └──────────┘                    └──────────┘         │
│                                                                          │
│    ┌──────────┐                                                          │
│    │agreements│                                                          │
│    │renter_id │                                                          │
│    │house_id  │                                                          │
│    │  (FK)    │                                                          │
│    └──────────┘                                                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Table Details**

| Table             | Columns                                                                                   | Purpose                   |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------- |
| **users**         | id, name, email, password, role, phone, profile_image, is_verified, timestamps            | Store all user accounts   |
| **houses**        | id, owner_id, title, description, price, location, rooms, status, is_approved, timestamps | Store house listings      |
| **house_images**  | id, house_id, image_path, timestamps                                                      | Store house photos        |
| **requests**      | id, renter_id, house_id, status, message, timestamps                                      | Store rental requests     |
| **reviews**       | id, renter_id, house_id, rating, comment, timestamps                                      | Store ratings & comments  |
| **subscriptions** | id, owner_id, status, start_date, end_date, timestamps                                    | Track owner subscriptions |
| **payments**      | id, owner_id, amount, payment_method, status, transaction_id, timestamps                  | Track payments            |
| **visits**        | id, renter_id, house_id, visit_date, status, timestamps                                   | Schedule house visits     |
| **agreements**    | id, renter_id, house_id, start_date, end_date, agreed_price, status, timestamps           | Offline rental agreements |
| **notifications** | id, user_id, message, is_read, timestamps                                                 | User notifications        |

---

# 🔗 **PART 5: ALL API ENDPOINTS (44 Total)**

## **Public Routes (No Authentication)**

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| POST   | `/api/register`            | Create new user account  |
| POST   | `/api/login`               | Login and get token      |
| GET    | `/api/houses`              | List all approved houses |
| GET    | `/api/houses/{id}`         | Get single house details |
| GET    | `/api/houses/{id}/reviews` | Get house reviews        |

## **Protected Routes (Requires Token)**

### Authentication & Profile

| Method | Endpoint               | Who       |
| ------ | ---------------------- | --------- |
| POST   | `/api/logout`          | All users |
| GET    | `/api/me`              | All users |
| PUT    | `/api/profile`         | All users |
| PUT    | `/api/change-password` | All users |

### House Management

| Method | Endpoint                                 | Who        |
| ------ | ---------------------------------------- | ---------- |
| POST   | `/api/houses`                            | Owner only |
| PUT    | `/api/houses/{id}`                       | Owner only |
| DELETE | `/api/houses/{id}`                       | Owner only |
| POST   | `/api/houses/{id}/images`                | Owner only |
| DELETE | `/api/houses/{houseId}/images/{imageId}` | Owner only |
| GET    | `/api/my-houses`                         | Owner only |

### Rental Requests

| Method | Endpoint              | Who         |
| ------ | --------------------- | ----------- |
| POST   | `/api/requests`       | Renter only |
| PUT    | `/api/requests/{id}`  | Owner only  |
| GET    | `/api/my-requests`    | Renter only |
| GET    | `/api/owner-requests` | Owner only  |

### Reviews

| Method | Endpoint       | Who         |
| ------ | -------------- | ----------- |
| POST   | `/api/reviews` | Renter only |

### Subscription

| Method | Endpoint               | Who        |
| ------ | ---------------------- | ---------- |
| GET    | `/api/my-subscription` | Owner only |
| POST   | `/api/subscribe`       | Owner only |
| GET    | `/api/can-post`        | Owner only |

### Visits

| Method | Endpoint           | Who         |
| ------ | ------------------ | ----------- |
| POST   | `/api/visits`      | Renter only |
| PUT    | `/api/visits/{id}` | Owner only  |
| GET    | `/api/my-visits`   | Both        |

### Agreements

| Method | Endpoint                       | Who         |
| ------ | ------------------------------ | ----------- |
| POST   | `/api/agreements`              | Owner only  |
| PUT    | `/api/agreements/{id}/confirm` | Renter only |
| GET    | `/api/my-agreements`           | Both        |

### Notifications

| Method | Endpoint                          | Who       |
| ------ | --------------------------------- | --------- |
| GET    | `/api/notifications`              | All users |
| GET    | `/api/notifications/unread-count` | All users |
| PUT    | `/api/notifications/{id}/read`    | All users |
| PUT    | `/api/notifications/read-all`     | All users |
| DELETE | `/api/notifications/{id}`         | All users |

### Admin Routes

| Method | Endpoint                         | Who        |
| ------ | -------------------------------- | ---------- |
| GET    | `/api/admin/dashboard`           | Admin only |
| GET    | `/api/admin/users`               | Admin only |
| GET    | `/api/admin/pending-houses`      | Admin only |
| GET    | `/api/admin/all-houses`          | Admin only |
| PUT    | `/api/admin/users/{id}/verify`   | Admin only |
| DELETE | `/api/admin/users/{id}`          | Admin only |
| PUT    | `/api/admin/houses/{id}/approve` | Admin only |
| DELETE | `/api/admin/houses/{id}/reject`  | Admin only |
| GET    | `/api/admin/report`              | Admin only |

---

# Build Priority

| Order | Role       | Status in Your Project                            |
| ----- | ---------- | ------------------------------------------------- |
| 1st   | **ADMIN**  | Built (Dashboard, Approve Houses, Manage Users) |
| 2nd   | **OWNER**  |  Built (Post houses, Subscribe, Manage requests) |
| 3rd   | **RENTER** |  Built (Browse, Request, Review)                 |

```
```
