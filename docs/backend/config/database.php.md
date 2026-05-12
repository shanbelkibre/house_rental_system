# database.php

## Code (numbered)

```php
1 <?php
2 
3 use Illuminate\Support\Str;
4 use Pdo\Mysql;
5 
6 return [
7 
8     /*
9     |--------------------------------------------------------------------------
10     | Default Database Connection Name
11     |--------------------------------------------------------------------------
12     |
13     | Here you may specify which of the database connections below you wish
14     | to use as your default connection for database operations. This is
15     | the connection which will be utilized unless another connection
16     | is explicitly specified when you execute a query / statement.
17     |
18     */
19 
20     'default' => env('DB_CONNECTION', 'sqlite'),
21 
22     /*
23     |--------------------------------------------------------------------------
24     | Database Connections
25     |--------------------------------------------------------------------------
26     |
27     | Below are all of the database connections defined for your application.
28     | An example configuration is provided for each database system which
29     | is supported by Laravel. You're free to add / remove connections.
30     |
31     */
32 
33     'connections' => [
34 
35         'sqlite' => [
36             'driver' => 'sqlite',
37             'url' => env('DB_URL'),
38             'database' => env('DB_DATABASE', database_path('database.sqlite')),
39             'prefix' => '',
40             'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
41             'busy_timeout' => null,
42             'journal_mode' => null,
43             'synchronous' => null,
44             'transaction_mode' => 'DEFERRED',
45         ],
46 
47         'mysql' => [
48             'driver' => 'mysql',
49             'url' => env('DB_URL'),
50             'host' => env('DB_HOST', '127.0.0.1'),
51             'port' => env('DB_PORT', '3306'),
52             'database' => env('DB_DATABASE', 'laravel'),
53             'username' => env('DB_USERNAME', 'root'),
54             'password' => env('DB_PASSWORD', ''),
55             'unix_socket' => env('DB_SOCKET', ''),
56             'charset' => env('DB_CHARSET', 'utf8mb4'),
57             'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
58             'prefix' => '',
59             'prefix_indexes' => true,
60             'strict' => true,
61             'engine' => null,
62             'options' => extension_loaded('pdo_mysql') ? array_filter([
63                 (PHP_VERSION_ID >= 80500 ? Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
64             ]) : [],
65         ],
66 
67         'mariadb' => [
68             'driver' => 'mariadb',
69             'url' => env('DB_URL'),
70             'host' => env('DB_HOST', '127.0.0.1'),
71             'port' => env('DB_PORT', '3306'),
72             'database' => env('DB_DATABASE', 'laravel'),
73             'username' => env('DB_USERNAME', 'root'),
74             'password' => env('DB_PASSWORD', ''),
75             'unix_socket' => env('DB_SOCKET', ''),
76             'charset' => env('DB_CHARSET', 'utf8mb4'),
77             'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
78             'prefix' => '',
79             'prefix_indexes' => true,
80             'strict' => true,
81             'engine' => null,
82             'options' => extension_loaded('pdo_mysql') ? array_filter([
83                 (PHP_VERSION_ID >= 80500 ? Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
84             ]) : [],
85         ],
86 
87         'pgsql' => [
88             'driver' => 'pgsql',
89             'url' => env('DB_URL'),
90             'host' => env('DB_HOST', '127.0.0.1'),
91             'port' => env('DB_PORT', '5432'),
92             'database' => env('DB_DATABASE', 'laravel'),
93             'username' => env('DB_USERNAME', 'root'),
94             'password' => env('DB_PASSWORD', ''),
95             'charset' => env('DB_CHARSET', 'utf8'),
96             'prefix' => '',
97             'prefix_indexes' => true,
98             'search_path' => 'public',
99             'sslmode' => env('DB_SSLMODE', 'prefer'),
100         ],
101 
102         'sqlsrv' => [
103             'driver' => 'sqlsrv',
104             'url' => env('DB_URL'),
105             'host' => env('DB_HOST', 'localhost'),
106             'port' => env('DB_PORT', '1433'),
107             'database' => env('DB_DATABASE', 'laravel'),
108             'username' => env('DB_USERNAME', 'root'),
109             'password' => env('DB_PASSWORD', ''),
110             'charset' => env('DB_CHARSET', 'utf8'),
111             'prefix' => '',
112             'prefix_indexes' => true,
113             // 'encrypt' => env('DB_ENCRYPT', 'yes'),
114             // 'trust_server_certificate' => env('DB_TRUST_SERVER_CERTIFICATE', 'false'),
115         ],
116 
117     ],
118 
119     /*
120     |--------------------------------------------------------------------------
121     | Migration Repository Table
122     |--------------------------------------------------------------------------
123     |
124     | This table keeps track of all the migrations that have already run for
125     | your application. Using this information, we can determine which of
126     | the migrations on disk haven't actually been run on the database.
127     |
128     */
129 
130     'migrations' => [
131         'table' => 'migrations',
132         'update_date_on_publish' => true,
133     ],
134 
135     /*
136     |--------------------------------------------------------------------------
137     | Redis Databases
138     |--------------------------------------------------------------------------
139     |
140     | Redis is an open source, fast, and advanced key-value store that also
141     | provides a richer body of commands than a typical key-value system
142     | such as Memcached. You may define your connection settings here.
143     |
144     */
145 
146     'redis' => [
147 
148         'client' => env('REDIS_CLIENT', 'phpredis'),
149 
150         'options' => [
151             'cluster' => env('REDIS_CLUSTER', 'redis'),
152             'prefix' => env('REDIS_PREFIX', Str::slug((string) env('APP_NAME', 'laravel')).'-database-'),
153             'persistent' => env('REDIS_PERSISTENT', false),
154         ],
155 
156         'default' => [
157             'url' => env('REDIS_URL'),
158             'host' => env('REDIS_HOST', '127.0.0.1'),
159             'username' => env('REDIS_USERNAME'),
160             'password' => env('REDIS_PASSWORD'),
161             'port' => env('REDIS_PORT', '6379'),
162             'database' => env('REDIS_DB', '0'),
163             'max_retries' => env('REDIS_MAX_RETRIES', 3),
164             'backoff_algorithm' => env('REDIS_BACKOFF_ALGORITHM', 'decorrelated_jitter'),
165             'backoff_base' => env('REDIS_BACKOFF_BASE', 100),
166             'backoff_cap' => env('REDIS_BACKOFF_CAP', 1000),
167         ],
168 
169         'cache' => [
170             'url' => env('REDIS_URL'),
171             'host' => env('REDIS_HOST', '127.0.0.1'),
172             'username' => env('REDIS_USERNAME'),
173             'password' => env('REDIS_PASSWORD'),
174             'port' => env('REDIS_PORT', '6379'),
175             'database' => env('REDIS_CACHE_DB', '1'),
176             'max_retries' => env('REDIS_MAX_RETRIES', 3),
177             'backoff_algorithm' => env('REDIS_BACKOFF_ALGORITHM', 'decorrelated_jitter'),
178             'backoff_base' => env('REDIS_BACKOFF_BASE', 100),
179             'backoff_cap' => env('REDIS_BACKOFF_CAP', 1000),
180         ],
181 
182     ],
183 
184 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Illuminate\Support\Str
- Line 4: Imports a dependency used in this file: Pdo\Mysql
- Line 5: Blank line for separation.
- Line 6: Returns a configuration array.
- Line 7: Blank line for separation.
- Line 8: Implements application logic: /*
- Line 9: Implements application logic: |--------------------------------------------------------------------------
- Line 10: Implements application logic: | Default Database Connection Name
- Line 11: Implements application logic: |--------------------------------------------------------------------------
- Line 12: Implements application logic: |
- Line 13: Implements application logic: | Here you may specify which of the database connections below you wish
- Line 14: Implements application logic: | to use as your default connection for database operations. This is
- Line 15: Implements application logic: | the connection which will be utilized unless another connection
- Line 16: Implements application logic: | is explicitly specified when you execute a query / statement.
- Line 17: Implements application logic: |
- Line 18: Implements application logic: */
- Line 19: Blank line for separation.
- Line 20: Implements application logic: 'default' => env('DB_CONNECTION', 'sqlite'),
- Line 21: Blank line for separation.
- Line 22: Implements application logic: /*
- Line 23: Implements application logic: |--------------------------------------------------------------------------
- Line 24: Implements application logic: | Database Connections
- Line 25: Implements application logic: |--------------------------------------------------------------------------
- Line 26: Implements application logic: |
- Line 27: Implements application logic: | Below are all of the database connections defined for your application.
- Line 28: Implements application logic: | An example configuration is provided for each database system which
- Line 29: Implements application logic: | is supported by Laravel. You're free to add / remove connections.
- Line 30: Implements application logic: |
- Line 31: Implements application logic: */
- Line 32: Blank line for separation.
- Line 33: Implements application logic: 'connections' => [
- Line 34: Blank line for separation.
- Line 35: Implements application logic: 'sqlite' => [
- Line 36: Implements application logic: 'driver' => 'sqlite',
- Line 37: Implements application logic: 'url' => env('DB_URL'),
- Line 38: Implements application logic: 'database' => env('DB_DATABASE', database_path('database.sqlite')),
- Line 39: Implements application logic: 'prefix' => '',
- Line 40: Implements application logic: 'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
- Line 41: Implements application logic: 'busy_timeout' => null,
- Line 42: Implements application logic: 'journal_mode' => null,
- Line 43: Implements application logic: 'synchronous' => null,
- Line 44: Implements application logic: 'transaction_mode' => 'DEFERRED',
- Line 45: Implements application logic: ],
- Line 46: Blank line for separation.
- Line 47: Implements application logic: 'mysql' => [
- Line 48: Implements application logic: 'driver' => 'mysql',
- Line 49: Implements application logic: 'url' => env('DB_URL'),
- Line 50: Implements application logic: 'host' => env('DB_HOST', '127.0.0.1'),
- Line 51: Implements application logic: 'port' => env('DB_PORT', '3306'),
- Line 52: Implements application logic: 'database' => env('DB_DATABASE', 'laravel'),
- Line 53: Implements application logic: 'username' => env('DB_USERNAME', 'root'),
- Line 54: Implements application logic: 'password' => env('DB_PASSWORD', ''),
- Line 55: Implements application logic: 'unix_socket' => env('DB_SOCKET', ''),
- Line 56: Implements application logic: 'charset' => env('DB_CHARSET', 'utf8mb4'),
- Line 57: Implements application logic: 'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
- Line 58: Implements application logic: 'prefix' => '',
- Line 59: Implements application logic: 'prefix_indexes' => true,
- Line 60: Implements application logic: 'strict' => true,
- Line 61: Implements application logic: 'engine' => null,
- Line 62: Implements application logic: 'options' => extension_loaded('pdo_mysql') ? array_filter([
- Line 63: Implements application logic: (PHP_VERSION_ID >= 80500 ? Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
- Line 64: Implements application logic: ]) : [],
- Line 65: Implements application logic: ],
- Line 66: Blank line for separation.
- Line 67: Implements application logic: 'mariadb' => [
- Line 68: Implements application logic: 'driver' => 'mariadb',
- Line 69: Implements application logic: 'url' => env('DB_URL'),
- Line 70: Implements application logic: 'host' => env('DB_HOST', '127.0.0.1'),
- Line 71: Implements application logic: 'port' => env('DB_PORT', '3306'),
- Line 72: Implements application logic: 'database' => env('DB_DATABASE', 'laravel'),
- Line 73: Implements application logic: 'username' => env('DB_USERNAME', 'root'),
- Line 74: Implements application logic: 'password' => env('DB_PASSWORD', ''),
- Line 75: Implements application logic: 'unix_socket' => env('DB_SOCKET', ''),
- Line 76: Implements application logic: 'charset' => env('DB_CHARSET', 'utf8mb4'),
- Line 77: Implements application logic: 'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
- Line 78: Implements application logic: 'prefix' => '',
- Line 79: Implements application logic: 'prefix_indexes' => true,
- Line 80: Implements application logic: 'strict' => true,
- Line 81: Implements application logic: 'engine' => null,
- Line 82: Implements application logic: 'options' => extension_loaded('pdo_mysql') ? array_filter([
- Line 83: Implements application logic: (PHP_VERSION_ID >= 80500 ? Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
- Line 84: Implements application logic: ]) : [],
- Line 85: Implements application logic: ],
- Line 86: Blank line for separation.
- Line 87: Implements application logic: 'pgsql' => [
- Line 88: Implements application logic: 'driver' => 'pgsql',
- Line 89: Implements application logic: 'url' => env('DB_URL'),
- Line 90: Implements application logic: 'host' => env('DB_HOST', '127.0.0.1'),
- Line 91: Implements application logic: 'port' => env('DB_PORT', '5432'),
- Line 92: Implements application logic: 'database' => env('DB_DATABASE', 'laravel'),
- Line 93: Implements application logic: 'username' => env('DB_USERNAME', 'root'),
- Line 94: Implements application logic: 'password' => env('DB_PASSWORD', ''),
- Line 95: Implements application logic: 'charset' => env('DB_CHARSET', 'utf8'),
- Line 96: Implements application logic: 'prefix' => '',
- Line 97: Implements application logic: 'prefix_indexes' => true,
- Line 98: Implements application logic: 'search_path' => 'public',
- Line 99: Implements application logic: 'sslmode' => env('DB_SSLMODE', 'prefer'),
- Line 100: Implements application logic: ],
- Line 101: Blank line for separation.
- Line 102: Implements application logic: 'sqlsrv' => [
- Line 103: Implements application logic: 'driver' => 'sqlsrv',
- Line 104: Implements application logic: 'url' => env('DB_URL'),
- Line 105: Implements application logic: 'host' => env('DB_HOST', 'localhost'),
- Line 106: Implements application logic: 'port' => env('DB_PORT', '1433'),
- Line 107: Implements application logic: 'database' => env('DB_DATABASE', 'laravel'),
- Line 108: Implements application logic: 'username' => env('DB_USERNAME', 'root'),
- Line 109: Implements application logic: 'password' => env('DB_PASSWORD', ''),
- Line 110: Implements application logic: 'charset' => env('DB_CHARSET', 'utf8'),
- Line 111: Implements application logic: 'prefix' => '',
- Line 112: Implements application logic: 'prefix_indexes' => true,
- Line 113: 'encrypt' => env('db_encrypt', 'yes'),
- Line 114: 'trust_server_certificate' => env('db_trust_server_certificate', 'false'),
- Line 115: Implements application logic: ],
- Line 116: Blank line for separation.
- Line 117: Implements application logic: ],
- Line 118: Blank line for separation.
- Line 119: Implements application logic: /*
- Line 120: Implements application logic: |--------------------------------------------------------------------------
- Line 121: Implements application logic: | Migration Repository Table
- Line 122: Implements application logic: |--------------------------------------------------------------------------
- Line 123: Implements application logic: |
- Line 124: Implements application logic: | This table keeps track of all the migrations that have already run for
- Line 125: Implements application logic: | your application. Using this information, we can determine which of
- Line 126: Implements application logic: | the migrations on disk haven't actually been run on the database.
- Line 127: Implements application logic: |
- Line 128: Implements application logic: */
- Line 129: Blank line for separation.
- Line 130: Implements application logic: 'migrations' => [
- Line 131: Implements application logic: 'table' => 'migrations',
- Line 132: Implements application logic: 'update_date_on_publish' => true,
- Line 133: Implements application logic: ],
- Line 134: Blank line for separation.
- Line 135: Implements application logic: /*
- Line 136: Implements application logic: |--------------------------------------------------------------------------
- Line 137: Implements application logic: | Redis Databases
- Line 138: Implements application logic: |--------------------------------------------------------------------------
- Line 139: Implements application logic: |
- Line 140: Implements application logic: | Redis is an open source, fast, and advanced key-value store that also
- Line 141: Implements application logic: | provides a richer body of commands than a typical key-value system
- Line 142: Implements application logic: | such as Memcached. You may define your connection settings here.
- Line 143: Implements application logic: |
- Line 144: Implements application logic: */
- Line 145: Blank line for separation.
- Line 146: Implements application logic: 'redis' => [
- Line 147: Blank line for separation.
- Line 148: Implements application logic: 'client' => env('REDIS_CLIENT', 'phpredis'),
- Line 149: Blank line for separation.
- Line 150: Implements application logic: 'options' => [
- Line 151: Implements application logic: 'cluster' => env('REDIS_CLUSTER', 'redis'),
- Line 152: Implements application logic: 'prefix' => env('REDIS_PREFIX', Str::slug((string) env('APP_NAME', 'laravel')).'-database-'),
- Line 153: Implements application logic: 'persistent' => env('REDIS_PERSISTENT', false),
- Line 154: Implements application logic: ],
- Line 155: Blank line for separation.
- Line 156: Implements application logic: 'default' => [
- Line 157: Implements application logic: 'url' => env('REDIS_URL'),
- Line 158: Implements application logic: 'host' => env('REDIS_HOST', '127.0.0.1'),
- Line 159: Implements application logic: 'username' => env('REDIS_USERNAME'),
- Line 160: Implements application logic: 'password' => env('REDIS_PASSWORD'),
- Line 161: Implements application logic: 'port' => env('REDIS_PORT', '6379'),
- Line 162: Implements application logic: 'database' => env('REDIS_DB', '0'),
- Line 163: Implements application logic: 'max_retries' => env('REDIS_MAX_RETRIES', 3),
- Line 164: Implements application logic: 'backoff_algorithm' => env('REDIS_BACKOFF_ALGORITHM', 'decorrelated_jitter'),
- Line 165: Implements application logic: 'backoff_base' => env('REDIS_BACKOFF_BASE', 100),
- Line 166: Implements application logic: 'backoff_cap' => env('REDIS_BACKOFF_CAP', 1000),
- Line 167: Implements application logic: ],
- Line 168: Blank line for separation.
- Line 169: Implements application logic: 'cache' => [
- Line 170: Implements application logic: 'url' => env('REDIS_URL'),
- Line 171: Implements application logic: 'host' => env('REDIS_HOST', '127.0.0.1'),
- Line 172: Implements application logic: 'username' => env('REDIS_USERNAME'),
- Line 173: Implements application logic: 'password' => env('REDIS_PASSWORD'),
- Line 174: Implements application logic: 'port' => env('REDIS_PORT', '6379'),
- Line 175: Implements application logic: 'database' => env('REDIS_CACHE_DB', '1'),
- Line 176: Implements application logic: 'max_retries' => env('REDIS_MAX_RETRIES', 3),
- Line 177: Implements application logic: 'backoff_algorithm' => env('REDIS_BACKOFF_ALGORITHM', 'decorrelated_jitter'),
- Line 178: Implements application logic: 'backoff_base' => env('REDIS_BACKOFF_BASE', 100),
- Line 179: Implements application logic: 'backoff_cap' => env('REDIS_BACKOFF_CAP', 1000),
- Line 180: Implements application logic: ],
- Line 181: Blank line for separation.
- Line 182: Implements application logic: ],
- Line 183: Blank line for separation.
- Line 184: Implements application logic: ];
