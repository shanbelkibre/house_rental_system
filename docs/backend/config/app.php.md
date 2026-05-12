# app.php

## Code (numbered)

```php
1 <?php
2 
3 return [
4 
5     /*
6     |--------------------------------------------------------------------------
7     | Application Name
8     |--------------------------------------------------------------------------
9     |
10     | This value is the name of your application, which will be used when the
11     | framework needs to place the application's name in a notification or
12     | other UI elements where an application name needs to be displayed.
13     |
14     */
15 
16     'name' => env('APP_NAME', 'Laravel'),
17 
18     /*
19     |--------------------------------------------------------------------------
20     | Application Environment
21     |--------------------------------------------------------------------------
22     |
23     | This value determines the "environment" your application is currently
24     | running in. This may determine how you prefer to configure various
25     | services the application utilizes. Set this in your ".env" file.
26     |
27     */
28 
29     'env' => env('APP_ENV', 'production'),
30 
31     /*
32     |--------------------------------------------------------------------------
33     | Application Debug Mode
34     |--------------------------------------------------------------------------
35     |
36     | When your application is in debug mode, detailed error messages with
37     | stack traces will be shown on every error that occurs within your
38     | application. If disabled, a simple generic error page is shown.
39     |
40     */
41 
42     'debug' => (bool) env('APP_DEBUG', false),
43 
44     /*
45     |--------------------------------------------------------------------------
46     | Application URL
47     |--------------------------------------------------------------------------
48     |
49     | This URL is used by the console to properly generate URLs when using
50     | the Artisan command line tool. You should set this to the root of
51     | the application so that it's available within Artisan commands.
52     |
53     */
54 
55     'url' => env('APP_URL', 'http://localhost'),
56 
57     /*
58     |--------------------------------------------------------------------------
59     | Application Timezone
60     |--------------------------------------------------------------------------
61     |
62     | Here you may specify the default timezone for your application, which
63     | will be used by the PHP date and date-time functions. The timezone
64     | is set to "UTC" by default as it is suitable for most use cases.
65     |
66     */
67 
68     'timezone' => 'UTC',
69 
70     /*
71     |--------------------------------------------------------------------------
72     | Application Locale Configuration
73     |--------------------------------------------------------------------------
74     |
75     | The application locale determines the default locale that will be used
76     | by Laravel's translation / localization methods. This option can be
77     | set to any locale for which you plan to have translation strings.
78     |
79     */
80 
81     'locale' => env('APP_LOCALE', 'en'),
82 
83     'fallback_locale' => env('APP_FALLBACK_LOCALE', 'en'),
84 
85     'faker_locale' => env('APP_FAKER_LOCALE', 'en_US'),
86 
87     /*
88     |--------------------------------------------------------------------------
89     | Encryption Key
90     |--------------------------------------------------------------------------
91     |
92     | This key is utilized by Laravel's encryption services and should be set
93     | to a random, 32 character string to ensure that all encrypted values
94     | are secure. You should do this prior to deploying the application.
95     |
96     */
97 
98     'cipher' => 'AES-256-CBC',
99 
100     'key' => env('APP_KEY'),
101 
102     'previous_keys' => [
103         ...array_filter(
104             explode(',', (string) env('APP_PREVIOUS_KEYS', ''))
105         ),
106     ],
107 
108     /*
109     |--------------------------------------------------------------------------
110     | Maintenance Mode Driver
111     |--------------------------------------------------------------------------
112     |
113     | These configuration options determine the driver used to determine and
114     | manage Laravel's "maintenance mode" status. The "cache" driver will
115     | allow maintenance mode to be controlled across multiple machines.
116     |
117     | Supported drivers: "file", "cache"
118     |
119     */
120 
121     'maintenance' => [
122         'driver' => env('APP_MAINTENANCE_DRIVER', 'file'),
123         'store' => env('APP_MAINTENANCE_STORE', 'database'),
124     ],
125 
126 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Returns a configuration array.
- Line 4: Blank line for separation.
- Line 5: Implements application logic: /*
- Line 6: Implements application logic: |--------------------------------------------------------------------------
- Line 7: Implements application logic: | Application Name
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: |
- Line 10: Implements application logic: | This value is the name of your application, which will be used when the
- Line 11: Implements application logic: | framework needs to place the application's name in a notification or
- Line 12: Implements application logic: | other UI elements where an application name needs to be displayed.
- Line 13: Implements application logic: |
- Line 14: Implements application logic: */
- Line 15: Blank line for separation.
- Line 16: Implements application logic: 'name' => env('APP_NAME', 'Laravel'),
- Line 17: Blank line for separation.
- Line 18: Implements application logic: /*
- Line 19: Implements application logic: |--------------------------------------------------------------------------
- Line 20: Implements application logic: | Application Environment
- Line 21: Implements application logic: |--------------------------------------------------------------------------
- Line 22: Implements application logic: |
- Line 23: Implements application logic: | This value determines the "environment" your application is currently
- Line 24: Implements application logic: | running in. This may determine how you prefer to configure various
- Line 25: Implements application logic: | services the application utilizes. Set this in your ".env" file.
- Line 26: Implements application logic: |
- Line 27: Implements application logic: */
- Line 28: Blank line for separation.
- Line 29: Implements application logic: 'env' => env('APP_ENV', 'production'),
- Line 30: Blank line for separation.
- Line 31: Implements application logic: /*
- Line 32: Implements application logic: |--------------------------------------------------------------------------
- Line 33: Implements application logic: | Application Debug Mode
- Line 34: Implements application logic: |--------------------------------------------------------------------------
- Line 35: Implements application logic: |
- Line 36: Implements application logic: | When your application is in debug mode, detailed error messages with
- Line 37: Implements application logic: | stack traces will be shown on every error that occurs within your
- Line 38: Implements application logic: | application. If disabled, a simple generic error page is shown.
- Line 39: Implements application logic: |
- Line 40: Implements application logic: */
- Line 41: Blank line for separation.
- Line 42: Implements application logic: 'debug' => (bool) env('APP_DEBUG', false),
- Line 43: Blank line for separation.
- Line 44: Implements application logic: /*
- Line 45: Implements application logic: |--------------------------------------------------------------------------
- Line 46: Implements application logic: | Application URL
- Line 47: Implements application logic: |--------------------------------------------------------------------------
- Line 48: Implements application logic: |
- Line 49: Implements application logic: | This URL is used by the console to properly generate URLs when using
- Line 50: Implements application logic: | the Artisan command line tool. You should set this to the root of
- Line 51: Implements application logic: | the application so that it's available within Artisan commands.
- Line 52: Implements application logic: |
- Line 53: Implements application logic: */
- Line 54: Blank line for separation.
- Line 55: Implements application logic: 'url' => env('APP_URL', 'http://localhost'),
- Line 56: Blank line for separation.
- Line 57: Implements application logic: /*
- Line 58: Implements application logic: |--------------------------------------------------------------------------
- Line 59: Implements application logic: | Application Timezone
- Line 60: Implements application logic: |--------------------------------------------------------------------------
- Line 61: Implements application logic: |
- Line 62: Implements application logic: | Here you may specify the default timezone for your application, which
- Line 63: Implements application logic: | will be used by the PHP date and date-time functions. The timezone
- Line 64: Implements application logic: | is set to "UTC" by default as it is suitable for most use cases.
- Line 65: Implements application logic: |
- Line 66: Implements application logic: */
- Line 67: Blank line for separation.
- Line 68: Implements application logic: 'timezone' => 'UTC',
- Line 69: Blank line for separation.
- Line 70: Implements application logic: /*
- Line 71: Implements application logic: |--------------------------------------------------------------------------
- Line 72: Implements application logic: | Application Locale Configuration
- Line 73: Implements application logic: |--------------------------------------------------------------------------
- Line 74: Implements application logic: |
- Line 75: Implements application logic: | The application locale determines the default locale that will be used
- Line 76: Implements application logic: | by Laravel's translation / localization methods. This option can be
- Line 77: Implements application logic: | set to any locale for which you plan to have translation strings.
- Line 78: Implements application logic: |
- Line 79: Implements application logic: */
- Line 80: Blank line for separation.
- Line 81: Implements application logic: 'locale' => env('APP_LOCALE', 'en'),
- Line 82: Blank line for separation.
- Line 83: Implements application logic: 'fallback_locale' => env('APP_FALLBACK_LOCALE', 'en'),
- Line 84: Blank line for separation.
- Line 85: Implements application logic: 'faker_locale' => env('APP_FAKER_LOCALE', 'en_US'),
- Line 86: Blank line for separation.
- Line 87: Implements application logic: /*
- Line 88: Implements application logic: |--------------------------------------------------------------------------
- Line 89: Implements application logic: | Encryption Key
- Line 90: Implements application logic: |--------------------------------------------------------------------------
- Line 91: Implements application logic: |
- Line 92: Implements application logic: | This key is utilized by Laravel's encryption services and should be set
- Line 93: Implements application logic: | to a random, 32 character string to ensure that all encrypted values
- Line 94: Implements application logic: | are secure. You should do this prior to deploying the application.
- Line 95: Implements application logic: |
- Line 96: Implements application logic: */
- Line 97: Blank line for separation.
- Line 98: Implements application logic: 'cipher' => 'AES-256-CBC',
- Line 99: Blank line for separation.
- Line 100: Implements application logic: 'key' => env('APP_KEY'),
- Line 101: Blank line for separation.
- Line 102: Implements application logic: 'previous_keys' => [
- Line 103: Implements application logic: ...array_filter(
- Line 104: Implements application logic: explode(',', (string) env('APP_PREVIOUS_KEYS', ''))
- Line 105: Implements application logic: ),
- Line 106: Implements application logic: ],
- Line 107: Blank line for separation.
- Line 108: Implements application logic: /*
- Line 109: Implements application logic: |--------------------------------------------------------------------------
- Line 110: Implements application logic: | Maintenance Mode Driver
- Line 111: Implements application logic: |--------------------------------------------------------------------------
- Line 112: Implements application logic: |
- Line 113: Implements application logic: | These configuration options determine the driver used to determine and
- Line 114: Implements application logic: | manage Laravel's "maintenance mode" status. The "cache" driver will
- Line 115: Implements application logic: | allow maintenance mode to be controlled across multiple machines.
- Line 116: Implements application logic: |
- Line 117: Implements application logic: | Supported drivers: "file", "cache"
- Line 118: Implements application logic: |
- Line 119: Implements application logic: */
- Line 120: Blank line for separation.
- Line 121: Implements application logic: 'maintenance' => [
- Line 122: Implements application logic: 'driver' => env('APP_MAINTENANCE_DRIVER', 'file'),
- Line 123: Implements application logic: 'store' => env('APP_MAINTENANCE_STORE', 'database'),
- Line 124: Implements application logic: ],
- Line 125: Blank line for separation.
- Line 126: Implements application logic: ];
