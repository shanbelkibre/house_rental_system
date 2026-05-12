# auth.php

## Code (numbered)

```php
1 <?php
2 
3 use App\Models\User;
4 
5 return [
6 
7     /*
8     |--------------------------------------------------------------------------
9     | Authentication Defaults
10     |--------------------------------------------------------------------------
11     |
12     | This option defines the default authentication "guard" and password
13     | reset "broker" for your application. You may change these values
14     | as required, but they're a perfect start for most applications.
15     |
16     */
17 
18     'defaults' => [
19         'guard' => env('AUTH_GUARD', 'web'),
20         'passwords' => env('AUTH_PASSWORD_BROKER', 'users'),
21     ],
22 
23     /*
24     |--------------------------------------------------------------------------
25     | Authentication Guards
26     |--------------------------------------------------------------------------
27     |
28     | Next, you may define every authentication guard for your application.
29     | Of course, a great default configuration has been defined for you
30     | which utilizes session storage plus the Eloquent user provider.
31     |
32     | All authentication guards have a user provider, which defines how the
33     | users are actually retrieved out of your database or other storage
34     | system used by the application. Typically, Eloquent is utilized.
35     |
36     | Supported: "session"
37     |
38     */
39 
40     'guards' => [
41         'web' => [
42             'driver' => 'session',
43             'provider' => 'users',
44         ],
45     ],
46 
47     /*
48     |--------------------------------------------------------------------------
49     | User Providers
50     |--------------------------------------------------------------------------
51     |
52     | All authentication guards have a user provider, which defines how the
53     | users are actually retrieved out of your database or other storage
54     | system used by the application. Typically, Eloquent is utilized.
55     |
56     | If you have multiple user tables or models you may configure multiple
57     | providers to represent the model / table. These providers may then
58     | be assigned to any extra authentication guards you have defined.
59     |
60     | Supported: "database", "eloquent"
61     |
62     */
63 
64     'providers' => [
65         'users' => [
66             'driver' => 'eloquent',
67             'model' => env('AUTH_MODEL', User::class),
68         ],
69 
70         // 'users' => [
71         //     'driver' => 'database',
72         //     'table' => 'users',
73         // ],
74     ],
75 
76     /*
77     |--------------------------------------------------------------------------
78     | Resetting Passwords
79     |--------------------------------------------------------------------------
80     |
81     | These configuration options specify the behavior of Laravel's password
82     | reset functionality, including the table utilized for token storage
83     | and the user provider that is invoked to actually retrieve users.
84     |
85     | The expiry time is the number of minutes that each reset token will be
86     | considered valid. This security feature keeps tokens short-lived so
87     | they have less time to be guessed. You may change this as needed.
88     |
89     | The throttle setting is the number of seconds a user must wait before
90     | generating more password reset tokens. This prevents the user from
91     | quickly generating a very large amount of password reset tokens.
92     |
93     */
94 
95     'passwords' => [
96         'users' => [
97             'provider' => 'users',
98             'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
99             'expire' => 60,
100             'throttle' => 60,
101         ],
102     ],
103 
104     /*
105     |--------------------------------------------------------------------------
106     | Password Confirmation Timeout
107     |--------------------------------------------------------------------------
108     |
109     | Here you may define the number of seconds before a password confirmation
110     | window expires and users are asked to re-enter their password via the
111     | confirmation screen. By default, the timeout lasts for three hours.
112     |
113     */
114 
115     'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),
116 
117 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: App\Models\User
- Line 4: Blank line for separation.
- Line 5: Returns a configuration array.
- Line 6: Blank line for separation.
- Line 7: Implements application logic: /*
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: | Authentication Defaults
- Line 10: Implements application logic: |--------------------------------------------------------------------------
- Line 11: Implements application logic: |
- Line 12: Implements application logic: | This option defines the default authentication "guard" and password
- Line 13: Implements application logic: | reset "broker" for your application. You may change these values
- Line 14: Implements application logic: | as required, but they're a perfect start for most applications.
- Line 15: Implements application logic: |
- Line 16: Implements application logic: */
- Line 17: Blank line for separation.
- Line 18: Implements application logic: 'defaults' => [
- Line 19: Implements application logic: 'guard' => env('AUTH_GUARD', 'web'),
- Line 20: Implements application logic: 'passwords' => env('AUTH_PASSWORD_BROKER', 'users'),
- Line 21: Implements application logic: ],
- Line 22: Blank line for separation.
- Line 23: Implements application logic: /*
- Line 24: Implements application logic: |--------------------------------------------------------------------------
- Line 25: Implements application logic: | Authentication Guards
- Line 26: Implements application logic: |--------------------------------------------------------------------------
- Line 27: Implements application logic: |
- Line 28: Implements application logic: | Next, you may define every authentication guard for your application.
- Line 29: Implements application logic: | Of course, a great default configuration has been defined for you
- Line 30: Implements application logic: | which utilizes session storage plus the Eloquent user provider.
- Line 31: Implements application logic: |
- Line 32: Implements application logic: | All authentication guards have a user provider, which defines how the
- Line 33: Implements application logic: | users are actually retrieved out of your database or other storage
- Line 34: Implements application logic: | system used by the application. Typically, Eloquent is utilized.
- Line 35: Implements application logic: |
- Line 36: Implements application logic: | Supported: "session"
- Line 37: Implements application logic: |
- Line 38: Implements application logic: */
- Line 39: Blank line for separation.
- Line 40: Implements application logic: 'guards' => [
- Line 41: Implements application logic: 'web' => [
- Line 42: Implements application logic: 'driver' => 'session',
- Line 43: Implements application logic: 'provider' => 'users',
- Line 44: Implements application logic: ],
- Line 45: Implements application logic: ],
- Line 46: Blank line for separation.
- Line 47: Implements application logic: /*
- Line 48: Implements application logic: |--------------------------------------------------------------------------
- Line 49: Implements application logic: | User Providers
- Line 50: Implements application logic: |--------------------------------------------------------------------------
- Line 51: Implements application logic: |
- Line 52: Implements application logic: | All authentication guards have a user provider, which defines how the
- Line 53: Implements application logic: | users are actually retrieved out of your database or other storage
- Line 54: Implements application logic: | system used by the application. Typically, Eloquent is utilized.
- Line 55: Implements application logic: |
- Line 56: Implements application logic: | If you have multiple user tables or models you may configure multiple
- Line 57: Implements application logic: | providers to represent the model / table. These providers may then
- Line 58: Implements application logic: | be assigned to any extra authentication guards you have defined.
- Line 59: Implements application logic: |
- Line 60: Implements application logic: | Supported: "database", "eloquent"
- Line 61: Implements application logic: |
- Line 62: Implements application logic: */
- Line 63: Blank line for separation.
- Line 64: Implements application logic: 'providers' => [
- Line 65: Implements application logic: 'users' => [
- Line 66: Implements application logic: 'driver' => 'eloquent',
- Line 67: Implements application logic: 'model' => env('AUTH_MODEL', User::class),
- Line 68: Implements application logic: ],
- Line 69: Blank line for separation.
- Line 70: 'users' => [
- Line 71: 'driver' => 'database',
- Line 72: 'table' => 'users',
- Line 73: ],
- Line 74: Implements application logic: ],
- Line 75: Blank line for separation.
- Line 76: Implements application logic: /*
- Line 77: Implements application logic: |--------------------------------------------------------------------------
- Line 78: Implements application logic: | Resetting Passwords
- Line 79: Implements application logic: |--------------------------------------------------------------------------
- Line 80: Implements application logic: |
- Line 81: Implements application logic: | These configuration options specify the behavior of Laravel's password
- Line 82: Implements application logic: | reset functionality, including the table utilized for token storage
- Line 83: Implements application logic: | and the user provider that is invoked to actually retrieve users.
- Line 84: Implements application logic: |
- Line 85: Implements application logic: | The expiry time is the number of minutes that each reset token will be
- Line 86: Implements application logic: | considered valid. This security feature keeps tokens short-lived so
- Line 87: Implements application logic: | they have less time to be guessed. You may change this as needed.
- Line 88: Implements application logic: |
- Line 89: Implements application logic: | The throttle setting is the number of seconds a user must wait before
- Line 90: Implements application logic: | generating more password reset tokens. This prevents the user from
- Line 91: Implements application logic: | quickly generating a very large amount of password reset tokens.
- Line 92: Implements application logic: |
- Line 93: Implements application logic: */
- Line 94: Blank line for separation.
- Line 95: Implements application logic: 'passwords' => [
- Line 96: Implements application logic: 'users' => [
- Line 97: Implements application logic: 'provider' => 'users',
- Line 98: Implements application logic: 'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
- Line 99: Implements application logic: 'expire' => 60,
- Line 100: Implements application logic: 'throttle' => 60,
- Line 101: Implements application logic: ],
- Line 102: Implements application logic: ],
- Line 103: Blank line for separation.
- Line 104: Implements application logic: /*
- Line 105: Implements application logic: |--------------------------------------------------------------------------
- Line 106: Implements application logic: | Password Confirmation Timeout
- Line 107: Implements application logic: |--------------------------------------------------------------------------
- Line 108: Implements application logic: |
- Line 109: Implements application logic: | Here you may define the number of seconds before a password confirmation
- Line 110: Implements application logic: | window expires and users are asked to re-enter their password via the
- Line 111: Implements application logic: | confirmation screen. By default, the timeout lasts for three hours.
- Line 112: Implements application logic: |
- Line 113: Implements application logic: */
- Line 114: Blank line for separation.
- Line 115: Implements application logic: 'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),
- Line 116: Blank line for separation.
- Line 117: Implements application logic: ];
