# queue.php

## Code (numbered)

```php
1 <?php
2 
3 return [
4 
5     /*
6     |--------------------------------------------------------------------------
7     | Default Queue Connection Name
8     |--------------------------------------------------------------------------
9     |
10     | Laravel's queue supports a variety of backends via a single, unified
11     | API, giving you convenient access to each backend using identical
12     | syntax for each. The default queue connection is defined below.
13     |
14     */
15 
16     'default' => env('QUEUE_CONNECTION', 'database'),
17 
18     /*
19     |--------------------------------------------------------------------------
20     | Queue Connections
21     |--------------------------------------------------------------------------
22     |
23     | Here you may configure the connection options for every queue backend
24     | used by your application. An example configuration is provided for
25     | each backend supported by Laravel. You're also free to add more.
26     |
27     | Drivers: "sync", "database", "beanstalkd", "sqs", "redis",
28     |          "deferred", "background", "failover", "null"
29     |
30     */
31 
32     'connections' => [
33 
34         'sync' => [
35             'driver' => 'sync',
36         ],
37 
38         'database' => [
39             'driver' => 'database',
40             'connection' => env('DB_QUEUE_CONNECTION'),
41             'table' => env('DB_QUEUE_TABLE', 'jobs'),
42             'queue' => env('DB_QUEUE', 'default'),
43             'retry_after' => (int) env('DB_QUEUE_RETRY_AFTER', 90),
44             'after_commit' => false,
45         ],
46 
47         'beanstalkd' => [
48             'driver' => 'beanstalkd',
49             'host' => env('BEANSTALKD_QUEUE_HOST', 'localhost'),
50             'queue' => env('BEANSTALKD_QUEUE', 'default'),
51             'retry_after' => (int) env('BEANSTALKD_QUEUE_RETRY_AFTER', 90),
52             'block_for' => 0,
53             'after_commit' => false,
54         ],
55 
56         'sqs' => [
57             'driver' => 'sqs',
58             'key' => env('AWS_ACCESS_KEY_ID'),
59             'secret' => env('AWS_SECRET_ACCESS_KEY'),
60             'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account-id'),
61             'queue' => env('SQS_QUEUE', 'default'),
62             'suffix' => env('SQS_SUFFIX'),
63             'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
64             'after_commit' => false,
65         ],
66 
67         'redis' => [
68             'driver' => 'redis',
69             'connection' => env('REDIS_QUEUE_CONNECTION', 'default'),
70             'queue' => env('REDIS_QUEUE', 'default'),
71             'retry_after' => (int) env('REDIS_QUEUE_RETRY_AFTER', 90),
72             'block_for' => null,
73             'after_commit' => false,
74         ],
75 
76         'deferred' => [
77             'driver' => 'deferred',
78         ],
79 
80         'background' => [
81             'driver' => 'background',
82         ],
83 
84         'failover' => [
85             'driver' => 'failover',
86             'connections' => [
87                 'database',
88                 'deferred',
89             ],
90         ],
91 
92     ],
93 
94     /*
95     |--------------------------------------------------------------------------
96     | Job Batching
97     |--------------------------------------------------------------------------
98     |
99     | The following options configure the database and table that store job
100     | batching information. These options can be updated to any database
101     | connection and table which has been defined by your application.
102     |
103     */
104 
105     'batching' => [
106         'database' => env('DB_CONNECTION', 'sqlite'),
107         'table' => 'job_batches',
108     ],
109 
110     /*
111     |--------------------------------------------------------------------------
112     | Failed Queue Jobs
113     |--------------------------------------------------------------------------
114     |
115     | These options configure the behavior of failed queue job logging so you
116     | can control how and where failed jobs are stored. Laravel ships with
117     | support for storing failed jobs in a simple file or in a database.
118     |
119     | Supported drivers: "database-uuids", "dynamodb", "file", "null"
120     |
121     */
122 
123     'failed' => [
124         'driver' => env('QUEUE_FAILED_DRIVER', 'database-uuids'),
125         'database' => env('DB_CONNECTION', 'sqlite'),
126         'table' => 'failed_jobs',
127     ],
128 
129 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Returns a configuration array.
- Line 4: Blank line for separation.
- Line 5: Implements application logic: /*
- Line 6: Implements application logic: |--------------------------------------------------------------------------
- Line 7: Implements application logic: | Default Queue Connection Name
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: |
- Line 10: Implements application logic: | Laravel's queue supports a variety of backends via a single, unified
- Line 11: Implements application logic: | API, giving you convenient access to each backend using identical
- Line 12: Implements application logic: | syntax for each. The default queue connection is defined below.
- Line 13: Implements application logic: |
- Line 14: Implements application logic: */
- Line 15: Blank line for separation.
- Line 16: Implements application logic: 'default' => env('QUEUE_CONNECTION', 'database'),
- Line 17: Blank line for separation.
- Line 18: Implements application logic: /*
- Line 19: Implements application logic: |--------------------------------------------------------------------------
- Line 20: Implements application logic: | Queue Connections
- Line 21: Implements application logic: |--------------------------------------------------------------------------
- Line 22: Implements application logic: |
- Line 23: Implements application logic: | Here you may configure the connection options for every queue backend
- Line 24: Implements application logic: | used by your application. An example configuration is provided for
- Line 25: Implements application logic: | each backend supported by Laravel. You're also free to add more.
- Line 26: Implements application logic: |
- Line 27: Implements application logic: | Drivers: "sync", "database", "beanstalkd", "sqs", "redis",
- Line 28: Implements application logic: |          "deferred", "background", "failover", "null"
- Line 29: Implements application logic: |
- Line 30: Implements application logic: */
- Line 31: Blank line for separation.
- Line 32: Implements application logic: 'connections' => [
- Line 33: Blank line for separation.
- Line 34: Implements application logic: 'sync' => [
- Line 35: Implements application logic: 'driver' => 'sync',
- Line 36: Implements application logic: ],
- Line 37: Blank line for separation.
- Line 38: Implements application logic: 'database' => [
- Line 39: Implements application logic: 'driver' => 'database',
- Line 40: Implements application logic: 'connection' => env('DB_QUEUE_CONNECTION'),
- Line 41: Implements application logic: 'table' => env('DB_QUEUE_TABLE', 'jobs'),
- Line 42: Implements application logic: 'queue' => env('DB_QUEUE', 'default'),
- Line 43: Implements application logic: 'retry_after' => (int) env('DB_QUEUE_RETRY_AFTER', 90),
- Line 44: Implements application logic: 'after_commit' => false,
- Line 45: Implements application logic: ],
- Line 46: Blank line for separation.
- Line 47: Implements application logic: 'beanstalkd' => [
- Line 48: Implements application logic: 'driver' => 'beanstalkd',
- Line 49: Implements application logic: 'host' => env('BEANSTALKD_QUEUE_HOST', 'localhost'),
- Line 50: Implements application logic: 'queue' => env('BEANSTALKD_QUEUE', 'default'),
- Line 51: Implements application logic: 'retry_after' => (int) env('BEANSTALKD_QUEUE_RETRY_AFTER', 90),
- Line 52: Implements application logic: 'block_for' => 0,
- Line 53: Implements application logic: 'after_commit' => false,
- Line 54: Implements application logic: ],
- Line 55: Blank line for separation.
- Line 56: Implements application logic: 'sqs' => [
- Line 57: Implements application logic: 'driver' => 'sqs',
- Line 58: Implements application logic: 'key' => env('AWS_ACCESS_KEY_ID'),
- Line 59: Implements application logic: 'secret' => env('AWS_SECRET_ACCESS_KEY'),
- Line 60: Implements application logic: 'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account-id'),
- Line 61: Implements application logic: 'queue' => env('SQS_QUEUE', 'default'),
- Line 62: Implements application logic: 'suffix' => env('SQS_SUFFIX'),
- Line 63: Implements application logic: 'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
- Line 64: Implements application logic: 'after_commit' => false,
- Line 65: Implements application logic: ],
- Line 66: Blank line for separation.
- Line 67: Implements application logic: 'redis' => [
- Line 68: Implements application logic: 'driver' => 'redis',
- Line 69: Implements application logic: 'connection' => env('REDIS_QUEUE_CONNECTION', 'default'),
- Line 70: Implements application logic: 'queue' => env('REDIS_QUEUE', 'default'),
- Line 71: Implements application logic: 'retry_after' => (int) env('REDIS_QUEUE_RETRY_AFTER', 90),
- Line 72: Implements application logic: 'block_for' => null,
- Line 73: Implements application logic: 'after_commit' => false,
- Line 74: Implements application logic: ],
- Line 75: Blank line for separation.
- Line 76: Implements application logic: 'deferred' => [
- Line 77: Implements application logic: 'driver' => 'deferred',
- Line 78: Implements application logic: ],
- Line 79: Blank line for separation.
- Line 80: Implements application logic: 'background' => [
- Line 81: Implements application logic: 'driver' => 'background',
- Line 82: Implements application logic: ],
- Line 83: Blank line for separation.
- Line 84: Implements application logic: 'failover' => [
- Line 85: Implements application logic: 'driver' => 'failover',
- Line 86: Implements application logic: 'connections' => [
- Line 87: Implements application logic: 'database',
- Line 88: Implements application logic: 'deferred',
- Line 89: Implements application logic: ],
- Line 90: Implements application logic: ],
- Line 91: Blank line for separation.
- Line 92: Implements application logic: ],
- Line 93: Blank line for separation.
- Line 94: Implements application logic: /*
- Line 95: Implements application logic: |--------------------------------------------------------------------------
- Line 96: Implements application logic: | Job Batching
- Line 97: Implements application logic: |--------------------------------------------------------------------------
- Line 98: Implements application logic: |
- Line 99: Implements application logic: | The following options configure the database and table that store job
- Line 100: Implements application logic: | batching information. These options can be updated to any database
- Line 101: Implements application logic: | connection and table which has been defined by your application.
- Line 102: Implements application logic: |
- Line 103: Implements application logic: */
- Line 104: Blank line for separation.
- Line 105: Implements application logic: 'batching' => [
- Line 106: Implements application logic: 'database' => env('DB_CONNECTION', 'sqlite'),
- Line 107: Implements application logic: 'table' => 'job_batches',
- Line 108: Implements application logic: ],
- Line 109: Blank line for separation.
- Line 110: Implements application logic: /*
- Line 111: Implements application logic: |--------------------------------------------------------------------------
- Line 112: Implements application logic: | Failed Queue Jobs
- Line 113: Implements application logic: |--------------------------------------------------------------------------
- Line 114: Implements application logic: |
- Line 115: Implements application logic: | These options configure the behavior of failed queue job logging so you
- Line 116: Implements application logic: | can control how and where failed jobs are stored. Laravel ships with
- Line 117: Implements application logic: | support for storing failed jobs in a simple file or in a database.
- Line 118: Implements application logic: |
- Line 119: Implements application logic: | Supported drivers: "database-uuids", "dynamodb", "file", "null"
- Line 120: Implements application logic: |
- Line 121: Implements application logic: */
- Line 122: Blank line for separation.
- Line 123: Implements application logic: 'failed' => [
- Line 124: Implements application logic: 'driver' => env('QUEUE_FAILED_DRIVER', 'database-uuids'),
- Line 125: Implements application logic: 'database' => env('DB_CONNECTION', 'sqlite'),
- Line 126: Implements application logic: 'table' => 'failed_jobs',
- Line 127: Implements application logic: ],
- Line 128: Blank line for separation.
- Line 129: Implements application logic: ];
