# cache.php

## Code (numbered)

```php
1 <?php
2 
3 use Illuminate\Support\Str;
4 
5 return [
6 
7     /*
8     |--------------------------------------------------------------------------
9     | Default Cache Store
10     |--------------------------------------------------------------------------
11     |
12     | This option controls the default cache store that will be used by the
13     | framework. This connection is utilized if another isn't explicitly
14     | specified when running a cache operation inside the application.
15     |
16     */
17 
18     'default' => env('CACHE_STORE', 'database'),
19 
20     /*
21     |--------------------------------------------------------------------------
22     | Cache Stores
23     |--------------------------------------------------------------------------
24     |
25     | Here you may define all of the cache "stores" for your application as
26     | well as their drivers. You may even define multiple stores for the
27     | same cache driver to group types of items stored in your caches.
28     |
29     | Supported drivers: "array", "database", "file", "memcached",
30     |                    "redis", "dynamodb", "octane",
31     |                    "failover", "null"
32     |
33     */
34 
35     'stores' => [
36 
37         'array' => [
38             'driver' => 'array',
39             'serialize' => false,
40         ],
41 
42         'database' => [
43             'driver' => 'database',
44             'connection' => env('DB_CACHE_CONNECTION'),
45             'table' => env('DB_CACHE_TABLE', 'cache'),
46             'lock_connection' => env('DB_CACHE_LOCK_CONNECTION'),
47             'lock_table' => env('DB_CACHE_LOCK_TABLE'),
48         ],
49 
50         'file' => [
51             'driver' => 'file',
52             'path' => storage_path('framework/cache/data'),
53             'lock_path' => storage_path('framework/cache/data'),
54         ],
55 
56         'memcached' => [
57             'driver' => 'memcached',
58             'persistent_id' => env('MEMCACHED_PERSISTENT_ID'),
59             'sasl' => [
60                 env('MEMCACHED_USERNAME'),
61                 env('MEMCACHED_PASSWORD'),
62             ],
63             'options' => [
64                 // Memcached::OPT_CONNECT_TIMEOUT => 2000,
65             ],
66             'servers' => [
67                 [
68                     'host' => env('MEMCACHED_HOST', '127.0.0.1'),
69                     'port' => env('MEMCACHED_PORT', 11211),
70                     'weight' => 100,
71                 ],
72             ],
73         ],
74 
75         'redis' => [
76             'driver' => 'redis',
77             'connection' => env('REDIS_CACHE_CONNECTION', 'cache'),
78             'lock_connection' => env('REDIS_CACHE_LOCK_CONNECTION', 'default'),
79         ],
80 
81         'dynamodb' => [
82             'driver' => 'dynamodb',
83             'key' => env('AWS_ACCESS_KEY_ID'),
84             'secret' => env('AWS_SECRET_ACCESS_KEY'),
85             'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
86             'table' => env('DYNAMODB_CACHE_TABLE', 'cache'),
87             'endpoint' => env('DYNAMODB_ENDPOINT'),
88         ],
89 
90         'octane' => [
91             'driver' => 'octane',
92         ],
93 
94         'failover' => [
95             'driver' => 'failover',
96             'stores' => [
97                 'database',
98                 'array',
99             ],
100         ],
101 
102     ],
103 
104     /*
105     |--------------------------------------------------------------------------
106     | Cache Key Prefix
107     |--------------------------------------------------------------------------
108     |
109     | When utilizing the APC, database, memcached, Redis, and DynamoDB cache
110     | stores, there might be other applications using the same cache. For
111     | that reason, you may prefix every cache key to avoid collisions.
112     |
113     */
114 
115     'prefix' => env('CACHE_PREFIX', Str::slug((string) env('APP_NAME', 'laravel')).'-cache-'),
116 
117     /*
118     |--------------------------------------------------------------------------
119     | Serializable Classes
120     |--------------------------------------------------------------------------
121     |
122     | This value determines the classes that can be unserialized from cache
123     | storage. By default, no PHP classes will be unserialized from your
124     | cache to prevent gadget chain attacks if your APP_KEY is leaked.
125     |
126     */
127 
128     'serializable_classes' => false,
129 
130 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Illuminate\Support\Str
- Line 4: Blank line for separation.
- Line 5: Returns a configuration array.
- Line 6: Blank line for separation.
- Line 7: Implements application logic: /*
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: | Default Cache Store
- Line 10: Implements application logic: |--------------------------------------------------------------------------
- Line 11: Implements application logic: |
- Line 12: Implements application logic: | This option controls the default cache store that will be used by the
- Line 13: Implements application logic: | framework. This connection is utilized if another isn't explicitly
- Line 14: Implements application logic: | specified when running a cache operation inside the application.
- Line 15: Implements application logic: |
- Line 16: Implements application logic: */
- Line 17: Blank line for separation.
- Line 18: Implements application logic: 'default' => env('CACHE_STORE', 'database'),
- Line 19: Blank line for separation.
- Line 20: Implements application logic: /*
- Line 21: Implements application logic: |--------------------------------------------------------------------------
- Line 22: Implements application logic: | Cache Stores
- Line 23: Implements application logic: |--------------------------------------------------------------------------
- Line 24: Implements application logic: |
- Line 25: Implements application logic: | Here you may define all of the cache "stores" for your application as
- Line 26: Implements application logic: | well as their drivers. You may even define multiple stores for the
- Line 27: Implements application logic: | same cache driver to group types of items stored in your caches.
- Line 28: Implements application logic: |
- Line 29: Implements application logic: | Supported drivers: "array", "database", "file", "memcached",
- Line 30: Implements application logic: |                    "redis", "dynamodb", "octane",
- Line 31: Implements application logic: |                    "failover", "null"
- Line 32: Implements application logic: |
- Line 33: Implements application logic: */
- Line 34: Blank line for separation.
- Line 35: Implements application logic: 'stores' => [
- Line 36: Blank line for separation.
- Line 37: Implements application logic: 'array' => [
- Line 38: Implements application logic: 'driver' => 'array',
- Line 39: Implements application logic: 'serialize' => false,
- Line 40: Implements application logic: ],
- Line 41: Blank line for separation.
- Line 42: Implements application logic: 'database' => [
- Line 43: Implements application logic: 'driver' => 'database',
- Line 44: Implements application logic: 'connection' => env('DB_CACHE_CONNECTION'),
- Line 45: Implements application logic: 'table' => env('DB_CACHE_TABLE', 'cache'),
- Line 46: Implements application logic: 'lock_connection' => env('DB_CACHE_LOCK_CONNECTION'),
- Line 47: Implements application logic: 'lock_table' => env('DB_CACHE_LOCK_TABLE'),
- Line 48: Implements application logic: ],
- Line 49: Blank line for separation.
- Line 50: Implements application logic: 'file' => [
- Line 51: Implements application logic: 'driver' => 'file',
- Line 52: Implements application logic: 'path' => storage_path('framework/cache/data'),
- Line 53: Implements application logic: 'lock_path' => storage_path('framework/cache/data'),
- Line 54: Implements application logic: ],
- Line 55: Blank line for separation.
- Line 56: Implements application logic: 'memcached' => [
- Line 57: Implements application logic: 'driver' => 'memcached',
- Line 58: Implements application logic: 'persistent_id' => env('MEMCACHED_PERSISTENT_ID'),
- Line 59: Implements application logic: 'sasl' => [
- Line 60: Implements application logic: env('MEMCACHED_USERNAME'),
- Line 61: Implements application logic: env('MEMCACHED_PASSWORD'),
- Line 62: Implements application logic: ],
- Line 63: Implements application logic: 'options' => [
- Line 64: Memcached::opt_connect_timeout => 2000,
- Line 65: Implements application logic: ],
- Line 66: Implements application logic: 'servers' => [
- Line 67: Implements application logic: [
- Line 68: Implements application logic: 'host' => env('MEMCACHED_HOST', '127.0.0.1'),
- Line 69: Implements application logic: 'port' => env('MEMCACHED_PORT', 11211),
- Line 70: Implements application logic: 'weight' => 100,
- Line 71: Implements application logic: ],
- Line 72: Implements application logic: ],
- Line 73: Implements application logic: ],
- Line 74: Blank line for separation.
- Line 75: Implements application logic: 'redis' => [
- Line 76: Implements application logic: 'driver' => 'redis',
- Line 77: Implements application logic: 'connection' => env('REDIS_CACHE_CONNECTION', 'cache'),
- Line 78: Implements application logic: 'lock_connection' => env('REDIS_CACHE_LOCK_CONNECTION', 'default'),
- Line 79: Implements application logic: ],
- Line 80: Blank line for separation.
- Line 81: Implements application logic: 'dynamodb' => [
- Line 82: Implements application logic: 'driver' => 'dynamodb',
- Line 83: Implements application logic: 'key' => env('AWS_ACCESS_KEY_ID'),
- Line 84: Implements application logic: 'secret' => env('AWS_SECRET_ACCESS_KEY'),
- Line 85: Implements application logic: 'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
- Line 86: Implements application logic: 'table' => env('DYNAMODB_CACHE_TABLE', 'cache'),
- Line 87: Implements application logic: 'endpoint' => env('DYNAMODB_ENDPOINT'),
- Line 88: Implements application logic: ],
- Line 89: Blank line for separation.
- Line 90: Implements application logic: 'octane' => [
- Line 91: Implements application logic: 'driver' => 'octane',
- Line 92: Implements application logic: ],
- Line 93: Blank line for separation.
- Line 94: Implements application logic: 'failover' => [
- Line 95: Implements application logic: 'driver' => 'failover',
- Line 96: Implements application logic: 'stores' => [
- Line 97: Implements application logic: 'database',
- Line 98: Implements application logic: 'array',
- Line 99: Implements application logic: ],
- Line 100: Implements application logic: ],
- Line 101: Blank line for separation.
- Line 102: Implements application logic: ],
- Line 103: Blank line for separation.
- Line 104: Implements application logic: /*
- Line 105: Implements application logic: |--------------------------------------------------------------------------
- Line 106: Implements application logic: | Cache Key Prefix
- Line 107: Implements application logic: |--------------------------------------------------------------------------
- Line 108: Implements application logic: |
- Line 109: Implements application logic: | When utilizing the APC, database, memcached, Redis, and DynamoDB cache
- Line 110: Implements application logic: | stores, there might be other applications using the same cache. For
- Line 111: Implements application logic: | that reason, you may prefix every cache key to avoid collisions.
- Line 112: Implements application logic: |
- Line 113: Implements application logic: */
- Line 114: Blank line for separation.
- Line 115: Implements application logic: 'prefix' => env('CACHE_PREFIX', Str::slug((string) env('APP_NAME', 'laravel')).'-cache-'),
- Line 116: Blank line for separation.
- Line 117: Implements application logic: /*
- Line 118: Implements application logic: |--------------------------------------------------------------------------
- Line 119: Implements application logic: | Serializable Classes
- Line 120: Implements application logic: |--------------------------------------------------------------------------
- Line 121: Implements application logic: |
- Line 122: Implements application logic: | This value determines the classes that can be unserialized from cache
- Line 123: Implements application logic: | storage. By default, no PHP classes will be unserialized from your
- Line 124: Implements application logic: | cache to prevent gadget chain attacks if your APP_KEY is leaked.
- Line 125: Implements application logic: |
- Line 126: Implements application logic: */
- Line 127: Blank line for separation.
- Line 128: Implements application logic: 'serializable_classes' => false,
- Line 129: Blank line for separation.
- Line 130: Implements application logic: ];
