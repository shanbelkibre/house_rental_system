# Models

- [backend/app/Models/AdminReport.php](backend/app/Models/AdminReport.php): Stores generated admin report data and links it to the creator.
- [backend/app/Models/Agreement.php](backend/app/Models/Agreement.php): Rental agreement between renter and house, with start/end dates and price.
- [backend/app/Models/House.php](backend/app/Models/House.php): House listing with relationships and cleanup logic for related records and images.
- [backend/app/Models/HouseImage.php](backend/app/Models/HouseImage.php): Image record tied to a house listing.
- [backend/app/Models/Notification.php](backend/app/Models/Notification.php): User notifications with read/unread state.
- [backend/app/Models/Payment.php](backend/app/Models/Payment.php): Payment records for owner subscriptions.
- [backend/app/Models/RequestRental.php](backend/app/Models/RequestRental.php): Rental request records between renters and houses.
- [backend/app/Models/Review.php](backend/app/Models/Review.php): Reviews authored by renters for houses.
- [backend/app/Models/Subscription.php](backend/app/Models/Subscription.php): Subscription status and period for owners.
- [backend/app/Models/SubscriptionPlan.php](backend/app/Models/SubscriptionPlan.php): Defines subscription pricing, duration, and active status.
- [backend/app/Models/User.php](backend/app/Models/User.php): Auth user model with role helpers, relationships, and profile accessor.
- [backend/app/Models/Visit.php](backend/app/Models/Visit.php): Scheduled house visits with renter and house relationships.
