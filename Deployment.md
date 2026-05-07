# Deployment Guide: React Frontend and Laravel Backend

This guide provides the steps to deploy your React frontend and Laravel backend.

## Backend Deployment (Laravel)

Deploying a Laravel application typically involves the following steps:

1.  **Server Requirements:**
    *   Ensure your server meets the Laravel framework's requirements (PHP version, extensions, etc.). You can find the specific requirements in the official Laravel documentation for the version you are using.
    *   You will also need a web server like Nginx or Apache.
    *   You'll need a database (like MySQL, PostgreSQL).
    *   Composer is required to manage PHP dependencies.
    *   You need shell access to your server.

2.  **Upload Your Code:**
    *   You can clone your repository onto the server using `git clone`.

3.  **Install Dependencies:**
    *   Navigate to your backend directory and run `composer install --optimize-autoloader --no-dev` to install the required packages for production.

4.  **Environment Configuration:**
    *   Create a `.env` file by copying `.env.example`: `cp .env.example .env`.
    *   Generate an application key: `php artisan key:generate`.
    *   Configure your `.env` file with your production database credentials, app URL, and other necessary settings. Set `APP_ENV=production` and `APP_DEBUG=false`.

5.  **Database Migration:**
    *   Run the database migrations to create your tables: `php artisan migrate --force`. The `--force` flag is required when in production.

6.  **Optimization:**
    *   Run the following commands to optimize your application for production:
        ```bash
        php artisan config:cache
        php artisan route:cache
        php artisan view:cache
        ```

7.  **Web Server Configuration:**
    *   Configure your web server (Nginx or Apache) to point to the `public` directory of your Laravel application. The document root should be `/path/to/your/project/backend/public`.
    *   Ensure you have the correct rewrite rules in place for Laravel.

8.  **Permissions:**
    *   Make sure the `storage` and `bootstrap/cache` directories are writable by your web server.

## Frontend Deployment (React)

Your React application needs to be built into static files, which can then be served by a web server.

1.  **Configure API URL:**
    *   In your React application's code, make sure the API calls point to your backend's domain. You might want to use an environment variable for this. For example, in your `.env.production` file for your frontend:
        ```
        VITE_API_BASE_URL=https://your-backend-api.com/api
        ```
    *   Make sure your code uses this environment variable when making API requests.

2.  **Build the Application:**
    *   In your `frontend` directory, run `npm install` to get all dependencies.
    *   Run `npm run build`. This will create a `dist` directory (or similar) containing the static HTML, CSS, and JavaScript files for your application.

3.  **Deploy Static Files:**
    You have a few options for deploying the static files:

    *   **On the same server as the backend:** You can configure your web server (Nginx/Apache) to serve the static files from the `dist` directory. You can even set it up so that your Laravel application serves the `index.html` for all frontend routes.
    *   **Using a static hosting service:** Services like Netlify, Vercel, or GitHub Pages are excellent for hosting React applications. You can connect your repository to these services, and they will automatically build and deploy your frontend whenever you push changes.

## CORS Configuration

You will likely need to configure Cross-Origin Resource Sharing (CORS) on your Laravel backend to allow requests from your frontend's domain.

*   In your Laravel project, you have a `config/cors.php` file. You can configure the `allowed_origins` to include the URL of your frontend application.

This is a general overview. The exact steps can vary depending on your hosting provider and setup.
