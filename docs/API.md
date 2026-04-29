# House Rental System — API (Backend ↔ Frontend)

This document is generated from the real Laravel code in:

- backend/routes/api.php
- backend/app/Http/Controllers/\*.php

Base URL (dev): `http://127.0.0.1:8000/api`

## Admin default login (recommended)

Manual SQL inserts often fail because:

- the Laravel app may be connected to a different DB than the one you edited in XAMPP/phpMyAdmin, or
- the bcrypt hash you pasted is not actually for the password you think.

This repo includes a seeder that creates/updates the admin in the **current** configured DB (`backend/.env`):

```bash
cd backend
php artisan db:seed --class=Database\\Seeders\\AdminUserSeeder
```

Default admin:

- Email: `admin@system.com`
- Password: `admin123`

## Authentication (Sanctum token)

### POST /register

**Controller**: `AuthController@register`

**Body (JSON)**

```json
{
  "name": "Belete Derege",
  "email": "belete@gmail.com",
  "password": "123456",
  "role": "owner",
  "phone": "0911111111"
}
```

**Success (201)**

```json
{
  "message": "Registration successful",
  "user": {
    "id": 1,
    "name": "...",
    "role": "owner",
    "is_verified": false,
    "...": "..."
  },
  "token": "5|..."
}
```

**Validation errors (422)**: Laravel returns `{ errors: { field: ["..."] } }`

**Frontend call**

```js
import api from "../src/api/axios";
await api.post("/register", payload);
```

---

### POST /login

**Controller**: `AuthController@login`

**Body (JSON)**

```json
{ "email": "john@example.com", "password": "123456" }
```

**Success (200)**

```json
{
  "message": "Login successful",
  "user": { "id": 1, "role": "renter", "...": "..." },
  "token": "5|..."
}
```

**Invalid credentials (422)**

```json
{
  "message": "The given data was invalid.",
  "errors": { "email": ["Invalid credentials"] }
}
```

**Frontend action**

- Save `token` in `localStorage`
- Save `user` in `localStorage`
- Include `Authorization: Bearer <token>` on protected requests

Your frontend already does this in `frontend/src/context/AuthContext.jsx`.

---

### Protected routes (require header)

```
Authorization: Bearer <token>
```

#### POST /logout

**Controller**: `AuthController@logout`

- Deletes the current access token

#### GET /me

**Controller**: `AuthController@me`

- Returns the authenticated user JSON

#### PUT /profile

**Controller**: `AuthController@updateProfile`

- Accepts optional: `name`, `phone`, `profile_image` (multipart)

#### PUT /change-password

**Controller**: `AuthController@changePassword`
**Body (JSON)**

```json
{
  "current_password": "oldpass",
  "new_password": "newpass",
  "new_password_confirmation": "newpass"
}
```

## Houses

### GET /houses (public)

**Controller**: `HouseController@index`

**Query params (optional)**

- `min_price`, `max_price`
- `rooms`
- `location`
- `status`
- `sort=latest`
- `page`

**Response (paginated)**

```json
{
  "data": [
    { "id": 1, "title": "...", "images": [], "owner": { "...": "..." } }
  ],
  "current_page": 1,
  "last_page": 5,
  "total": 60,
  "...": "..."
}
```

### GET /houses/{id} (public)

**Controller**: `HouseController@show`

- Returns house + owner + images + reviews

### POST /houses (owner only)

**Controller**: `HouseController@store`

Checks:

1. user must be owner (`$user->isOwner()`)
2. user must have active subscription (`$user->hasActiveSubscription()`)
3. validates `title`, `description`, `price`, `location`, `rooms`

**Success (201)**

```json
{
  "message": "House submitted for approval",
  "house": { "id": 1, "is_approved": false, "status": "available" }
}
```

### PUT /houses/{id} (owner only)

**Controller**: `HouseController@update`

- Updates only houses that belong to the owner

### DELETE /houses/{id} (owner only)

**Controller**: `HouseController@destroy`

- Deletes house and deletes all image files from `storage/app/public`

### POST /houses/{id}/images (owner only, multipart)

**Controller**: `HouseController@uploadImage`

**FormData**

- `image`: file (jpeg/png/jpg)

### DELETE /houses/{houseId}/images/{imageId} (owner only)

**Controller**: `HouseController@deleteImage`

### GET /my-houses (owner only)

**Controller**: `HouseController@myHouses`

- Returns paginated list

## Rental Requests

### POST /requests (renter only)

**Controller**: `RequestController@store`

**Body (JSON)**

```json
{ "house_id": 12, "message": "Optional" }
```

Checks:

- house must be `available`
- renter can’t send duplicate pending/accepted request for same house

### PUT /requests/{id} (owner of that house)

**Controller**: `RequestController@update`

**Body (JSON)**

```json
{ "status": "accepted" }
```

Allowed: `accepted` or `rejected`

If accepted: marks the house as `rented`.

### GET /my-requests (renter)

**Controller**: `RequestController@myRequests` (paginated)

### GET /owner-requests (owner)

**Controller**: `RequestController@ownerRequests` (paginated)

## Reviews

### POST /reviews (renter only)

**Controller**: `ReviewController@store`

**Body (JSON)**

```json
{ "house_id": 12, "rating": 5, "comment": "Great place" }
```

Checks:

- renter must have an accepted rental request for that house
- renter can only review once per house

### GET /houses/{houseId}/reviews (public)

**Controller**: `ReviewController@houseReviews`

**Response**

```json
{
  "average_rating": 4.5,
  "total_reviews": 10,
  "reviews": {
    "data": [{ "rating": 5, "renter": { "name": "..." }, "comment": "..." }],
    "...": "..."
  }
}
```

## Subscription

### GET /my-subscription (owner only)

**Controller**: `SubscriptionController@mySubscription`

**Response (no subscription)**

```json
{ "has_subscription": false, "message": "No active subscription" }
```

**Response (has subscription)**

```json
{
  "has_subscription": true,
  "subscription": {
    "status": "active",
    "start_date": "...",
    "end_date": "..."
  },
  "is_active": true,
  "days_remaining": 20
}
```

### POST /subscribe (owner only)

**Controller**: `SubscriptionController@subscribe`

**Body (JSON)**

```json
{ "payment_method": "telebirr", "amount": 500 }
```

### GET /can-post (owner)

**Controller**: `SubscriptionController@canPost`

## Visits

### POST /visits (renter only)

**Controller**: `VisitController@schedule`

**Body (JSON)**

```json
{ "house_id": 12, "visit_date": "2026-05-01T10:00:00" }
```

### PUT /visits/{id} (owner of the house)

**Controller**: `VisitController@confirm`

**Body (JSON)**

```json
{ "status": "confirmed" }
```

Allowed: `confirmed` or `completed`

### GET /my-visits (renter or owner)

**Controller**: `VisitController@myVisits` (paginated)

## Agreements

### POST /agreements (renter or owner involved)

**Controller**: `AgreementController@store`

**Body (JSON)**

```json
{
  "house_id": 12,
  "start_date": "2026-05-01",
  "end_date": "2027-05-01",
  "agreed_price": 15000
}
```

### PUT /agreements/{id}/confirm (renter or owner)

**Controller**: `AgreementController@confirm`

- Confirms agreement and marks house as `rented`

### GET /my-agreements (renter or owner)

**Controller**: `AgreementController@myAgreements` (paginated)

## Notifications

### GET /notifications

**Controller**: `NotificationController@index` (paginated)

### GET /notifications/unread-count

**Controller**: `NotificationController@unreadCount`

### PUT /notifications/{id}/read

**Controller**: `NotificationController@markAsRead`

### PUT /notifications/read-all

**Controller**: `NotificationController@markAllAsRead`

### DELETE /notifications/{id}

**Controller**: `NotificationController@destroy`

## Admin

All admin endpoints are protected by:

- `auth:sanctum`
- `user->isAdmin()` check in `AdminController` constructor

### GET /admin/dashboard

**Controller**: `AdminController@dashboard`

Response keys are snake_case (example):

- `total_users`, `total_houses`, `pending_houses`, `total_payments`, ...

### GET /admin/users

**Controller**: `AdminController@users` (paginated)

### PUT /admin/users/{id}/verify

**Controller**: `AdminController@verifyUser`

### DELETE /admin/users/{id}

**Controller**: `AdminController@deleteUser`

### GET /admin/pending-houses

**Controller**: `AdminController@pendingHouses` (paginated)

### GET /admin/all-houses

**Controller**: `AdminController@allHouses` (paginated)

### PUT /admin/houses/{id}/approve

**Controller**: `AdminController@approveHouse`

### DELETE /admin/houses/{id}/reject

**Controller**: `AdminController@rejectHouse`

### GET /admin/report

**Controller**: `AdminController@report`

**Query params (optional)**

- `start_date`
- `end_date`

---

## Frontend API layer

You have:

- `frontend/src/api/axios.js` — shared Axios instance (baseURL + token + global 401 handler)
- `frontend/src/services/api.js` — named helpers that call the endpoints above

Use whichever style you prefer, but avoid creating a 2nd Axios instance.
