# mail.php

## Code (numbered)

```php
1 <?php
2 
3 return [
4 
5     /*
6     |--------------------------------------------------------------------------
7     | Default Mailer
8     |--------------------------------------------------------------------------
9     |
10     | This option controls the default mailer that is used to send all email
11     | messages unless another mailer is explicitly specified when sending
12     | the message. All additional mailers can be configured within the
13     | "mailers" array. Examples of each type of mailer are provided.
14     |
15     */
16 
17     'default' => env('MAIL_MAILER', 'log'),
18 
19     /*
20     |--------------------------------------------------------------------------
21     | Mailer Configurations
22     |--------------------------------------------------------------------------
23     |
24     | Here you may configure all of the mailers used by your application plus
25     | their respective settings. Several examples have been configured for
26     | you and you are free to add your own as your application requires.
27     |
28     | Laravel supports a variety of mail "transport" drivers that can be used
29     | when delivering an email. You may specify which one you're using for
30     | your mailers below. You may also add additional mailers if needed.
31     |
32     | Supported: "smtp", "sendmail", "mailgun", "ses", "ses-v2",
33     |            "postmark", "resend", "log", "array",
34     |            "failover", "roundrobin"
35     |
36     */
37 
38     'mailers' => [
39 
40         'smtp' => [
41             'transport' => 'smtp',
42             'scheme' => env('MAIL_SCHEME'),
43             'url' => env('MAIL_URL'),
44             'host' => env('MAIL_HOST', '127.0.0.1'),
45             'port' => env('MAIL_PORT', 2525),
46             'username' => env('MAIL_USERNAME'),
47             'password' => env('MAIL_PASSWORD'),
48             'timeout' => null,
49             'local_domain' => env('MAIL_EHLO_DOMAIN', parse_url((string) env('APP_URL', 'http://localhost'), PHP_URL_HOST)),
50         ],
51 
52         'ses' => [
53             'transport' => 'ses',
54         ],
55 
56         'postmark' => [
57             'transport' => 'postmark',
58             // 'message_stream_id' => env('POSTMARK_MESSAGE_STREAM_ID'),
59             // 'client' => [
60             //     'timeout' => 5,
61             // ],
62         ],
63 
64         'resend' => [
65             'transport' => 'resend',
66         ],
67 
68         'sendmail' => [
69             'transport' => 'sendmail',
70             'path' => env('MAIL_SENDMAIL_PATH', '/usr/sbin/sendmail -bs -i'),
71         ],
72 
73         'log' => [
74             'transport' => 'log',
75             'channel' => env('MAIL_LOG_CHANNEL'),
76         ],
77 
78         'array' => [
79             'transport' => 'array',
80         ],
81 
82         'failover' => [
83             'transport' => 'failover',
84             'mailers' => [
85                 'smtp',
86                 'log',
87             ],
88             'retry_after' => 60,
89         ],
90 
91         'roundrobin' => [
92             'transport' => 'roundrobin',
93             'mailers' => [
94                 'ses',
95                 'postmark',
96             ],
97             'retry_after' => 60,
98         ],
99 
100     ],
101 
102     /*
103     |--------------------------------------------------------------------------
104     | Global "From" Address
105     |--------------------------------------------------------------------------
106     |
107     | You may wish for all emails sent by your application to be sent from
108     | the same address. Here you may specify a name and address that is
109     | used globally for all emails that are sent by your application.
110     |
111     */
112 
113     'from' => [
114         'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
115         'name' => env('MAIL_FROM_NAME', env('APP_NAME', 'Laravel')),
116     ],
117 
118 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Returns a configuration array.
- Line 4: Blank line for separation.
- Line 5: Implements application logic: /*
- Line 6: Implements application logic: |--------------------------------------------------------------------------
- Line 7: Implements application logic: | Default Mailer
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: |
- Line 10: Implements application logic: | This option controls the default mailer that is used to send all email
- Line 11: Implements application logic: | messages unless another mailer is explicitly specified when sending
- Line 12: Implements application logic: | the message. All additional mailers can be configured within the
- Line 13: Implements application logic: | "mailers" array. Examples of each type of mailer are provided.
- Line 14: Implements application logic: |
- Line 15: Implements application logic: */
- Line 16: Blank line for separation.
- Line 17: Implements application logic: 'default' => env('MAIL_MAILER', 'log'),
- Line 18: Blank line for separation.
- Line 19: Implements application logic: /*
- Line 20: Implements application logic: |--------------------------------------------------------------------------
- Line 21: Implements application logic: | Mailer Configurations
- Line 22: Implements application logic: |--------------------------------------------------------------------------
- Line 23: Implements application logic: |
- Line 24: Implements application logic: | Here you may configure all of the mailers used by your application plus
- Line 25: Implements application logic: | their respective settings. Several examples have been configured for
- Line 26: Implements application logic: | you and you are free to add your own as your application requires.
- Line 27: Implements application logic: |
- Line 28: Implements application logic: | Laravel supports a variety of mail "transport" drivers that can be used
- Line 29: Implements application logic: | when delivering an email. You may specify which one you're using for
- Line 30: Implements application logic: | your mailers below. You may also add additional mailers if needed.
- Line 31: Implements application logic: |
- Line 32: Implements application logic: | Supported: "smtp", "sendmail", "mailgun", "ses", "ses-v2",
- Line 33: Implements application logic: |            "postmark", "resend", "log", "array",
- Line 34: Implements application logic: |            "failover", "roundrobin"
- Line 35: Implements application logic: |
- Line 36: Implements application logic: */
- Line 37: Blank line for separation.
- Line 38: Implements application logic: 'mailers' => [
- Line 39: Blank line for separation.
- Line 40: Implements application logic: 'smtp' => [
- Line 41: Implements application logic: 'transport' => 'smtp',
- Line 42: Implements application logic: 'scheme' => env('MAIL_SCHEME'),
- Line 43: Implements application logic: 'url' => env('MAIL_URL'),
- Line 44: Implements application logic: 'host' => env('MAIL_HOST', '127.0.0.1'),
- Line 45: Implements application logic: 'port' => env('MAIL_PORT', 2525),
- Line 46: Implements application logic: 'username' => env('MAIL_USERNAME'),
- Line 47: Implements application logic: 'password' => env('MAIL_PASSWORD'),
- Line 48: Implements application logic: 'timeout' => null,
- Line 49: Implements application logic: 'local_domain' => env('MAIL_EHLO_DOMAIN', parse_url((string) env('APP_URL', 'http://localhost'), PHP_URL_HOST)),
- Line 50: Implements application logic: ],
- Line 51: Blank line for separation.
- Line 52: Implements application logic: 'ses' => [
- Line 53: Implements application logic: 'transport' => 'ses',
- Line 54: Implements application logic: ],
- Line 55: Blank line for separation.
- Line 56: Implements application logic: 'postmark' => [
- Line 57: Implements application logic: 'transport' => 'postmark',
- Line 58: 'message_stream_id' => env('postmark_message_stream_id'),
- Line 59: 'client' => [
- Line 60: 'timeout' => 5,
- Line 61: ],
- Line 62: Implements application logic: ],
- Line 63: Blank line for separation.
- Line 64: Implements application logic: 'resend' => [
- Line 65: Implements application logic: 'transport' => 'resend',
- Line 66: Implements application logic: ],
- Line 67: Blank line for separation.
- Line 68: Implements application logic: 'sendmail' => [
- Line 69: Implements application logic: 'transport' => 'sendmail',
- Line 70: Implements application logic: 'path' => env('MAIL_SENDMAIL_PATH', '/usr/sbin/sendmail -bs -i'),
- Line 71: Implements application logic: ],
- Line 72: Blank line for separation.
- Line 73: Implements application logic: 'log' => [
- Line 74: Implements application logic: 'transport' => 'log',
- Line 75: Implements application logic: 'channel' => env('MAIL_LOG_CHANNEL'),
- Line 76: Implements application logic: ],
- Line 77: Blank line for separation.
- Line 78: Implements application logic: 'array' => [
- Line 79: Implements application logic: 'transport' => 'array',
- Line 80: Implements application logic: ],
- Line 81: Blank line for separation.
- Line 82: Implements application logic: 'failover' => [
- Line 83: Implements application logic: 'transport' => 'failover',
- Line 84: Implements application logic: 'mailers' => [
- Line 85: Implements application logic: 'smtp',
- Line 86: Implements application logic: 'log',
- Line 87: Implements application logic: ],
- Line 88: Implements application logic: 'retry_after' => 60,
- Line 89: Implements application logic: ],
- Line 90: Blank line for separation.
- Line 91: Implements application logic: 'roundrobin' => [
- Line 92: Implements application logic: 'transport' => 'roundrobin',
- Line 93: Implements application logic: 'mailers' => [
- Line 94: Implements application logic: 'ses',
- Line 95: Implements application logic: 'postmark',
- Line 96: Implements application logic: ],
- Line 97: Implements application logic: 'retry_after' => 60,
- Line 98: Implements application logic: ],
- Line 99: Blank line for separation.
- Line 100: Implements application logic: ],
- Line 101: Blank line for separation.
- Line 102: Implements application logic: /*
- Line 103: Implements application logic: |--------------------------------------------------------------------------
- Line 104: Implements application logic: | Global "From" Address
- Line 105: Implements application logic: |--------------------------------------------------------------------------
- Line 106: Implements application logic: |
- Line 107: Implements application logic: | You may wish for all emails sent by your application to be sent from
- Line 108: Implements application logic: | the same address. Here you may specify a name and address that is
- Line 109: Implements application logic: | used globally for all emails that are sent by your application.
- Line 110: Implements application logic: |
- Line 111: Implements application logic: */
- Line 112: Blank line for separation.
- Line 113: Implements application logic: 'from' => [
- Line 114: Implements application logic: 'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
- Line 115: Implements application logic: 'name' => env('MAIL_FROM_NAME', env('APP_NAME', 'Laravel')),
- Line 116: Implements application logic: ],
- Line 117: Blank line for separation.
- Line 118: Implements application logic: ];
