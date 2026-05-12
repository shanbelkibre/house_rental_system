# composer.json

## Code (numbered)

```text
1 {
2     "$schema": "https://getcomposer.org/schema.json",
3     "name": "laravel/laravel",
4     "type": "project",
5     "description": "The skeleton application for the Laravel framework.",
6     "keywords": ["laravel", "framework"],
7     "license": "MIT",
8     "require": {
9         "php": "^8.3",
10         "intervention/image": "^4.0",
11         "laravel/framework": "^13.0",
12         "laravel/sanctum": "^4.3",
13         "laravel/tinker": "^3.0"
14     },
15     "require-dev": {
16         "fakerphp/faker": "^1.23",
17         "laravel/pail": "^1.2.5",
18         "laravel/pint": "^1.27",
19         "mockery/mockery": "^1.6",
20         "nunomaduro/collision": "^8.6",
21         "phpunit/phpunit": "^12.5.12"
22     },
23     "autoload": {
24         "psr-4": {
25             "App\\": "app/",
26             "Database\\Factories\\": "database/factories/",
27             "Database\\Seeders\\": "database/seeders/"
28         }
29     },
30     "autoload-dev": {
31         "psr-4": {
32             "Tests\\": "tests/"
33         }
34     },
35     "scripts": {
36         "setup": [
37             "composer install",
38             "@php -r \"file_exists('.env') || copy('.env.example', '.env');\"",
39             "@php artisan key:generate",
40             "@php artisan migrate --force",
41             "npm install --ignore-scripts",
42             "npm run build"
43         ],
44         "dev": [
45             "Composer\\Config::disableProcessTimeout",
46             "npx concurrently -c \"#93c5fd,#c4b5fd,#fb7185,#fdba74\" \"php artisan serve\" \"php artisan queue:listen --tries=1 --timeout=0\" \"php artisan pail --timeout=0\" \"npm run dev\" --names=server,queue,logs,vite --kill-others"
47         ],
48         "test": [
49             "@php artisan config:clear --ansi",
50             "@php artisan test"
51         ],
52         "post-autoload-dump": [
53             "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
54             "@php artisan package:discover --ansi"
55         ],
56         "post-update-cmd": [
57             "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
58         ],
59         "post-root-package-install": [
60             "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
61         ],
62         "post-create-project-cmd": [
63             "@php artisan key:generate --ansi",
64             "@php -r \"file_exists('database/database.sqlite') || touch('database/database.sqlite');\"",
65             "@php artisan migrate --graceful --ansi"
66         ],
67         "pre-package-uninstall": [
68             "Illuminate\\Foundation\\ComposerScripts::prePackageUninstall"
69         ]
70     },
71     "extra": {
72         "laravel": {
73             "dont-discover": []
74         }
75     },
76     "config": {
77         "optimize-autoloader": true,
78         "preferred-install": "dist",
79         "sort-packages": true,
80         "allow-plugins": {
81             "pestphp/pest-plugin": true,
82             "php-http/discovery": true
83         }
84     },
85     "minimum-stability": "stable",
86     "prefer-stable": true
87 }
```

## Line-by-line explanation

- Line 1: Implements application logic: {
- Line 2: Implements application logic: "$schema": "https://getcomposer.org/schema.json",
- Line 3: Implements application logic: "name": "laravel/laravel",
- Line 4: Implements application logic: "type": "project",
- Line 5: Implements application logic: "description": "The skeleton application for the Laravel framework.",
- Line 6: Implements application logic: "keywords": ["laravel", "framework"],
- Line 7: Implements application logic: "license": "MIT",
- Line 8: Implements application logic: "require": {
- Line 9: Implements application logic: "php": "^8.3",
- Line 10: Implements application logic: "intervention/image": "^4.0",
- Line 11: Implements application logic: "laravel/framework": "^13.0",
- Line 12: Implements application logic: "laravel/sanctum": "^4.3",
- Line 13: Implements application logic: "laravel/tinker": "^3.0"
- Line 14: Implements application logic: },
- Line 15: Implements application logic: "require-dev": {
- Line 16: Implements application logic: "fakerphp/faker": "^1.23",
- Line 17: Implements application logic: "laravel/pail": "^1.2.5",
- Line 18: Implements application logic: "laravel/pint": "^1.27",
- Line 19: Implements application logic: "mockery/mockery": "^1.6",
- Line 20: Implements application logic: "nunomaduro/collision": "^8.6",
- Line 21: Implements application logic: "phpunit/phpunit": "^12.5.12"
- Line 22: Implements application logic: },
- Line 23: Implements application logic: "autoload": {
- Line 24: Implements application logic: "psr-4": {
- Line 25: Implements application logic: "App\\": "app/",
- Line 26: Implements application logic: "Database\\Factories\\": "database/factories/",
- Line 27: Implements application logic: "Database\\Seeders\\": "database/seeders/"
- Line 28: Implements application logic: }
- Line 29: Implements application logic: },
- Line 30: Implements application logic: "autoload-dev": {
- Line 31: Implements application logic: "psr-4": {
- Line 32: Implements application logic: "Tests\\": "tests/"
- Line 33: Implements application logic: }
- Line 34: Implements application logic: },
- Line 35: Implements application logic: "scripts": {
- Line 36: Implements application logic: "setup": [
- Line 37: Implements application logic: "composer install",
- Line 38: Implements application logic: "@php -r \"file_exists('.env') || copy('.env.example', '.env');\"",
- Line 39: Implements application logic: "@php artisan key:generate",
- Line 40: Implements application logic: "@php artisan migrate --force",
- Line 41: Implements application logic: "npm install --ignore-scripts",
- Line 42: Implements application logic: "npm run build"
- Line 43: Implements application logic: ],
- Line 44: Implements application logic: "dev": [
- Line 45: Implements application logic: "Composer\\Config::disableProcessTimeout",
- Line 46: Implements application logic: "npx concurrently -c \"#93c5fd,#c4b5fd,#fb7185,#fdba74\" \"php artisan serve\" \"php artisan queue:listen --tries=1 --timeout=0\" \"php artisan pail --timeout=0\" \"npm run dev\" --names=server,queue,logs,vite --kill-others"
- Line 47: Implements application logic: ],
- Line 48: Implements application logic: "test": [
- Line 49: Implements application logic: "@php artisan config:clear --ansi",
- Line 50: Implements application logic: "@php artisan test"
- Line 51: Implements application logic: ],
- Line 52: Implements application logic: "post-autoload-dump": [
- Line 53: Implements application logic: "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
- Line 54: Implements application logic: "@php artisan package:discover --ansi"
- Line 55: Implements application logic: ],
- Line 56: Implements application logic: "post-update-cmd": [
- Line 57: Implements application logic: "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
- Line 58: Implements application logic: ],
- Line 59: Implements application logic: "post-root-package-install": [
- Line 60: Implements application logic: "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
- Line 61: Implements application logic: ],
- Line 62: Implements application logic: "post-create-project-cmd": [
- Line 63: Implements application logic: "@php artisan key:generate --ansi",
- Line 64: Implements application logic: "@php -r \"file_exists('database/database.sqlite') || touch('database/database.sqlite');\"",
- Line 65: Implements application logic: "@php artisan migrate --graceful --ansi"
- Line 66: Implements application logic: ],
- Line 67: Implements application logic: "pre-package-uninstall": [
- Line 68: Implements application logic: "Illuminate\\Foundation\\ComposerScripts::prePackageUninstall"
- Line 69: Implements application logic: ]
- Line 70: Implements application logic: },
- Line 71: Implements application logic: "extra": {
- Line 72: Implements application logic: "laravel": {
- Line 73: Implements application logic: "dont-discover": []
- Line 74: Implements application logic: }
- Line 75: Implements application logic: },
- Line 76: Implements application logic: "config": {
- Line 77: Implements application logic: "optimize-autoloader": true,
- Line 78: Implements application logic: "preferred-install": "dist",
- Line 79: Implements application logic: "sort-packages": true,
- Line 80: Implements application logic: "allow-plugins": {
- Line 81: Implements application logic: "pestphp/pest-plugin": true,
- Line 82: Implements application logic: "php-http/discovery": true
- Line 83: Implements application logic: }
- Line 84: Implements application logic: },
- Line 85: Implements application logic: "minimum-stability": "stable",
- Line 86: Implements application logic: "prefer-stable": true
- Line 87: Implements application logic: }
