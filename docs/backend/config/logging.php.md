# logging.php

## Code (numbered)

```php
1 <?php
2 
3 use Monolog\Handler\NullHandler;
4 use Monolog\Handler\StreamHandler;
5 use Monolog\Handler\SyslogUdpHandler;
6 use Monolog\Processor\PsrLogMessageProcessor;
7 
8 return [
9 
10     /*
11     |--------------------------------------------------------------------------
12     | Default Log Channel
13     |--------------------------------------------------------------------------
14     |
15     | This option defines the default log channel that is utilized to write
16     | messages to your logs. The value provided here should match one of
17     | the channels present in the list of "channels" configured below.
18     |
19     */
20 
21     'default' => env('LOG_CHANNEL', 'stack'),
22 
23     /*
24     |--------------------------------------------------------------------------
25     | Deprecations Log Channel
26     |--------------------------------------------------------------------------
27     |
28     | This option controls the log channel that should be used to log warnings
29     | regarding deprecated PHP and library features. This allows you to get
30     | your application ready for upcoming major versions of dependencies.
31     |
32     */
33 
34     'deprecations' => [
35         'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),
36         'trace' => env('LOG_DEPRECATIONS_TRACE', false),
37     ],
38 
39     /*
40     |--------------------------------------------------------------------------
41     | Log Channels
42     |--------------------------------------------------------------------------
43     |
44     | Here you may configure the log channels for your application. Laravel
45     | utilizes the Monolog PHP logging library, which includes a variety
46     | of powerful log handlers and formatters that you're free to use.
47     |
48     | Available drivers: "single", "daily", "slack", "syslog",
49     |                    "errorlog", "monolog", "custom", "stack"
50     |
51     */
52 
53     'channels' => [
54 
55         'stack' => [
56             'driver' => 'stack',
57             'channels' => explode(',', (string) env('LOG_STACK', 'single')),
58             'ignore_exceptions' => false,
59         ],
60 
61         'single' => [
62             'driver' => 'single',
63             'path' => storage_path('logs/laravel.log'),
64             'level' => env('LOG_LEVEL', 'debug'),
65             'replace_placeholders' => true,
66         ],
67 
68         'daily' => [
69             'driver' => 'daily',
70             'path' => storage_path('logs/laravel.log'),
71             'level' => env('LOG_LEVEL', 'debug'),
72             'days' => env('LOG_DAILY_DAYS', 14),
73             'replace_placeholders' => true,
74         ],
75 
76         'slack' => [
77             'driver' => 'slack',
78             'url' => env('LOG_SLACK_WEBHOOK_URL'),
79             'username' => env('LOG_SLACK_USERNAME', env('APP_NAME', 'Laravel')),
80             'emoji' => env('LOG_SLACK_EMOJI', ':boom:'),
81             'level' => env('LOG_LEVEL', 'critical'),
82             'replace_placeholders' => true,
83         ],
84 
85         'papertrail' => [
86             'driver' => 'monolog',
87             'level' => env('LOG_LEVEL', 'debug'),
88             'handler' => env('LOG_PAPERTRAIL_HANDLER', SyslogUdpHandler::class),
89             'handler_with' => [
90                 'host' => env('PAPERTRAIL_URL'),
91                 'port' => env('PAPERTRAIL_PORT'),
92                 'connectionString' => 'tls://'.env('PAPERTRAIL_URL').':'.env('PAPERTRAIL_PORT'),
93             ],
94             'processors' => [PsrLogMessageProcessor::class],
95         ],
96 
97         'stderr' => [
98             'driver' => 'monolog',
99             'level' => env('LOG_LEVEL', 'debug'),
100             'handler' => StreamHandler::class,
101             'handler_with' => [
102                 'stream' => 'php://stderr',
103             ],
104             'formatter' => env('LOG_STDERR_FORMATTER'),
105             'processors' => [PsrLogMessageProcessor::class],
106         ],
107 
108         'syslog' => [
109             'driver' => 'syslog',
110             'level' => env('LOG_LEVEL', 'debug'),
111             'facility' => env('LOG_SYSLOG_FACILITY', LOG_USER),
112             'replace_placeholders' => true,
113         ],
114 
115         'errorlog' => [
116             'driver' => 'errorlog',
117             'level' => env('LOG_LEVEL', 'debug'),
118             'replace_placeholders' => true,
119         ],
120 
121         'null' => [
122             'driver' => 'monolog',
123             'handler' => NullHandler::class,
124         ],
125 
126         'emergency' => [
127             'path' => storage_path('logs/laravel.log'),
128         ],
129 
130     ],
131 
132 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Monolog\Handler\NullHandler
- Line 4: Imports a dependency used in this file: Monolog\Handler\StreamHandler
- Line 5: Imports a dependency used in this file: Monolog\Handler\SyslogUdpHandler
- Line 6: Imports a dependency used in this file: Monolog\Processor\PsrLogMessageProcessor
- Line 7: Blank line for separation.
- Line 8: Returns a configuration array.
- Line 9: Blank line for separation.
- Line 10: Implements application logic: /*
- Line 11: Implements application logic: |--------------------------------------------------------------------------
- Line 12: Implements application logic: | Default Log Channel
- Line 13: Implements application logic: |--------------------------------------------------------------------------
- Line 14: Implements application logic: |
- Line 15: Implements application logic: | This option defines the default log channel that is utilized to write
- Line 16: Implements application logic: | messages to your logs. The value provided here should match one of
- Line 17: Implements application logic: | the channels present in the list of "channels" configured below.
- Line 18: Implements application logic: |
- Line 19: Implements application logic: */
- Line 20: Blank line for separation.
- Line 21: Implements application logic: 'default' => env('LOG_CHANNEL', 'stack'),
- Line 22: Blank line for separation.
- Line 23: Implements application logic: /*
- Line 24: Implements application logic: |--------------------------------------------------------------------------
- Line 25: Implements application logic: | Deprecations Log Channel
- Line 26: Implements application logic: |--------------------------------------------------------------------------
- Line 27: Implements application logic: |
- Line 28: Implements application logic: | This option controls the log channel that should be used to log warnings
- Line 29: Implements application logic: | regarding deprecated PHP and library features. This allows you to get
- Line 30: Implements application logic: | your application ready for upcoming major versions of dependencies.
- Line 31: Implements application logic: |
- Line 32: Implements application logic: */
- Line 33: Blank line for separation.
- Line 34: Implements application logic: 'deprecations' => [
- Line 35: Implements application logic: 'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),
- Line 36: Implements application logic: 'trace' => env('LOG_DEPRECATIONS_TRACE', false),
- Line 37: Implements application logic: ],
- Line 38: Blank line for separation.
- Line 39: Implements application logic: /*
- Line 40: Implements application logic: |--------------------------------------------------------------------------
- Line 41: Implements application logic: | Log Channels
- Line 42: Implements application logic: |--------------------------------------------------------------------------
- Line 43: Implements application logic: |
- Line 44: Implements application logic: | Here you may configure the log channels for your application. Laravel
- Line 45: Implements application logic: | utilizes the Monolog PHP logging library, which includes a variety
- Line 46: Implements application logic: | of powerful log handlers and formatters that you're free to use.
- Line 47: Implements application logic: |
- Line 48: Implements application logic: | Available drivers: "single", "daily", "slack", "syslog",
- Line 49: Implements application logic: |                    "errorlog", "monolog", "custom", "stack"
- Line 50: Implements application logic: |
- Line 51: Implements application logic: */
- Line 52: Blank line for separation.
- Line 53: Implements application logic: 'channels' => [
- Line 54: Blank line for separation.
- Line 55: Implements application logic: 'stack' => [
- Line 56: Implements application logic: 'driver' => 'stack',
- Line 57: Implements application logic: 'channels' => explode(',', (string) env('LOG_STACK', 'single')),
- Line 58: Implements application logic: 'ignore_exceptions' => false,
- Line 59: Implements application logic: ],
- Line 60: Blank line for separation.
- Line 61: Implements application logic: 'single' => [
- Line 62: Implements application logic: 'driver' => 'single',
- Line 63: Implements application logic: 'path' => storage_path('logs/laravel.log'),
- Line 64: Implements application logic: 'level' => env('LOG_LEVEL', 'debug'),
- Line 65: Implements application logic: 'replace_placeholders' => true,
- Line 66: Implements application logic: ],
- Line 67: Blank line for separation.
- Line 68: Implements application logic: 'daily' => [
- Line 69: Implements application logic: 'driver' => 'daily',
- Line 70: Implements application logic: 'path' => storage_path('logs/laravel.log'),
- Line 71: Implements application logic: 'level' => env('LOG_LEVEL', 'debug'),
- Line 72: Implements application logic: 'days' => env('LOG_DAILY_DAYS', 14),
- Line 73: Implements application logic: 'replace_placeholders' => true,
- Line 74: Implements application logic: ],
- Line 75: Blank line for separation.
- Line 76: Implements application logic: 'slack' => [
- Line 77: Implements application logic: 'driver' => 'slack',
- Line 78: Implements application logic: 'url' => env('LOG_SLACK_WEBHOOK_URL'),
- Line 79: Implements application logic: 'username' => env('LOG_SLACK_USERNAME', env('APP_NAME', 'Laravel')),
- Line 80: Implements application logic: 'emoji' => env('LOG_SLACK_EMOJI', ':boom:'),
- Line 81: Implements application logic: 'level' => env('LOG_LEVEL', 'critical'),
- Line 82: Implements application logic: 'replace_placeholders' => true,
- Line 83: Implements application logic: ],
- Line 84: Blank line for separation.
- Line 85: Implements application logic: 'papertrail' => [
- Line 86: Implements application logic: 'driver' => 'monolog',
- Line 87: Implements application logic: 'level' => env('LOG_LEVEL', 'debug'),
- Line 88: Implements application logic: 'handler' => env('LOG_PAPERTRAIL_HANDLER', SyslogUdpHandler::class),
- Line 89: Implements application logic: 'handler_with' => [
- Line 90: Implements application logic: 'host' => env('PAPERTRAIL_URL'),
- Line 91: Implements application logic: 'port' => env('PAPERTRAIL_PORT'),
- Line 92: Implements application logic: 'connectionString' => 'tls://'.env('PAPERTRAIL_URL').':'.env('PAPERTRAIL_PORT'),
- Line 93: Implements application logic: ],
- Line 94: Implements application logic: 'processors' => [PsrLogMessageProcessor::class],
- Line 95: Implements application logic: ],
- Line 96: Blank line for separation.
- Line 97: Implements application logic: 'stderr' => [
- Line 98: Implements application logic: 'driver' => 'monolog',
- Line 99: Implements application logic: 'level' => env('LOG_LEVEL', 'debug'),
- Line 100: Implements application logic: 'handler' => StreamHandler::class,
- Line 101: Implements application logic: 'handler_with' => [
- Line 102: Implements application logic: 'stream' => 'php://stderr',
- Line 103: Implements application logic: ],
- Line 104: Implements application logic: 'formatter' => env('LOG_STDERR_FORMATTER'),
- Line 105: Implements application logic: 'processors' => [PsrLogMessageProcessor::class],
- Line 106: Implements application logic: ],
- Line 107: Blank line for separation.
- Line 108: Implements application logic: 'syslog' => [
- Line 109: Implements application logic: 'driver' => 'syslog',
- Line 110: Implements application logic: 'level' => env('LOG_LEVEL', 'debug'),
- Line 111: Implements application logic: 'facility' => env('LOG_SYSLOG_FACILITY', LOG_USER),
- Line 112: Implements application logic: 'replace_placeholders' => true,
- Line 113: Implements application logic: ],
- Line 114: Blank line for separation.
- Line 115: Implements application logic: 'errorlog' => [
- Line 116: Implements application logic: 'driver' => 'errorlog',
- Line 117: Implements application logic: 'level' => env('LOG_LEVEL', 'debug'),
- Line 118: Implements application logic: 'replace_placeholders' => true,
- Line 119: Implements application logic: ],
- Line 120: Blank line for separation.
- Line 121: Implements application logic: 'null' => [
- Line 122: Implements application logic: 'driver' => 'monolog',
- Line 123: Implements application logic: 'handler' => NullHandler::class,
- Line 124: Implements application logic: ],
- Line 125: Blank line for separation.
- Line 126: Implements application logic: 'emergency' => [
- Line 127: Implements application logic: 'path' => storage_path('logs/laravel.log'),
- Line 128: Implements application logic: ],
- Line 129: Blank line for separation.
- Line 130: Implements application logic: ],
- Line 131: Blank line for separation.
- Line 132: Implements application logic: ];
