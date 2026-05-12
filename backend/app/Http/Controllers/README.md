# Controllers

- [backend/app/Http/Controllers/AdminController.php](backend/app/Http/Controllers/AdminController.php): Admin-only endpoints for dashboard stats, user moderation, house approvals, subscription plans, and saved reports.
- [backend/app/Http/Controllers/AgreementController.php](backend/app/Http/Controllers/AgreementController.php): Creates and manages offline rental agreements, including confirm and terminate flows.
- [backend/app/Http/Controllers/AuthController.php](backend/app/Http/Controllers/AuthController.php): Register, login, logout, profile updates, and password changes for users.
- [backend/app/Http/Controllers/Controller.php](backend/app/Http/Controllers/Controller.php): Base controller with authorization and validation traits.
- [backend/app/Http/Controllers/HouseController.php](backend/app/Http/Controllers/HouseController.php): House listing CRUD, image/license uploads, owner views, and public stats.
- [backend/app/Http/Controllers/NotificationController.php](backend/app/Http/Controllers/NotificationController.php): List, count, mark read, and delete notifications.
- [backend/app/Http/Controllers/RequestController.php](backend/app/Http/Controllers/RequestController.php): Rental request creation, accept/reject, cancel, and requester/owner views.
- [backend/app/Http/Controllers/ReviewController.php](backend/app/Http/Controllers/ReviewController.php): Create reviews after confirmed agreements and list house reviews with averages.
- [backend/app/Http/Controllers/SubscriptionController.php](backend/app/Http/Controllers/SubscriptionController.php): Owner subscription status, subscribe flow, and can-post checks.
- [backend/app/Http/Controllers/VisitController.php](backend/app/Http/Controllers/VisitController.php): Schedule and confirm visits, plus renter/owner visit lists.
