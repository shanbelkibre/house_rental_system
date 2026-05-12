# Migrations

- [backend/database/migrations/2026_04_27_202424_create_personal_access_tokens_table.php](backend/database/migrations/2026_04_27_202424_create_personal_access_tokens_table.php): Creates Sanctum personal access tokens table.
- [backend/database/migrations/2026_04_27_204646_create_all_tables.php](backend/database/migrations/2026_04_27_204646_create_all_tables.php): Creates core app tables using raw SQL (users, houses, requests, reviews, subscriptions, payments, visits, agreements, notifications).
- [backend/database/migrations/2026_04_27_221623_create_sessions_table.php](backend/database/migrations/2026_04_27_221623_create_sessions_table.php): Creates sessions table for database-backed sessions.
- [backend/database/migrations/2026_04_28_000001_add_is_suspended_to_users_table.php](backend/database/migrations/2026_04_28_000001_add_is_suspended_to_users_table.php): Adds is_suspended flag to users.
- [backend/database/migrations/2026_04_28_000002_create_subscription_plans_table.php](backend/database/migrations/2026_04_28_000002_create_subscription_plans_table.php): Creates subscription_plans table.
- [backend/database/migrations/2026_04_28_000003_create_admin_reports_table.php](backend/database/migrations/2026_04_28_000003_create_admin_reports_table.php): Creates admin_reports table for saved reports.
- [backend/database/migrations/2026_05_02_123231_add_details_to_houses_table.php](backend/database/migrations/2026_05_02_123231_add_details_to_houses_table.php): Adds bathrooms, area, type, amenities, and availability_date to houses.
- [backend/database/migrations/2026_05_02_125627_add_license_image_to_houses_table.php](backend/database/migrations/2026_05_02_125627_add_license_image_to_houses_table.php): Adds license_image to houses.
