# sanctum.php

## Code (numbered)

```php
1 <?php
2 
3 use Laravel\Sanctum\Sanctum;
4 
5 return [
6 
7     /*
8     |--------------------------------------------------------------------------
9     | Stateful Domains
10     |--------------------------------------------------------------------------
11     |
12     | Requests from the following domains / hosts will receive stateful API
13     | authentication cookies. Typically, these should include your local
14     | and production domains which access your API via a frontend SPA.
15     |
16     */
17 
18        'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
19         '%s%s',
20         'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
21         Sanctum::currentApplicationUrlWithPort()
22     ))),
23 
24     /*
25     |--------------------------------------------------------------------------
26     | Sanctum Guards
27     |--------------------------------------------------------------------------
28     |
29     | This array contains the authentication guards that will be checked when
30     | Sanctum is trying to authenticate a request. If none of these guards
31     | are able to authenticate the request, Sanctum will use the bearer
32     | token that's present on an incoming request for authentication.
33     |
34     */
35 
36     'guard' => ['web'],
37 
38     /*
39     |--------------------------------------------------------------------------
40     | Expiration Minutes
41     |--------------------------------------------------------------------------
42     |
43     | This value controls the number of minutes until an issued token will be
44     | considered expired. This will override any values set in the token's
45     | "expires_at" attribute, but first-party sessions are not affected.
46     |
47     */
48 
49     'expiration' => null,
50 
51     /*
52     |--------------------------------------------------------------------------
53     | Token Prefix
54     |--------------------------------------------------------------------------
55     |
56     | Sanctum can prefix new tokens in order to take advantage of numerous
57     | security scanning initiatives maintained by open source platforms
58     | that notify developers if they commit tokens into repositories.
59     |
60     | See: https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning
61     |
62     */
63 
64     'token_prefix' => env('SANCTUM_TOKEN_PREFIX', ''),
65 
66     /*
67     |--------------------------------------------------------------------------
68     | Sanctum Middleware
69     |--------------------------------------------------------------------------
70     |
71     | When authenticating your first-party SPA with Sanctum you may need to
72     | customize some of the middleware Sanctum uses while processing the
73     | request. You may change the middleware listed below as required.
74     |
75     */
76 
77     'middleware' => [
78         'authenticate_session' => Laravel\Sanctum\Http\Middleware\AuthenticateSession::class,
79         'encrypt_cookies' => Illuminate\Cookie\Middleware\EncryptCookies::class,
80         'validate_csrf_token' => Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
81     ],
82 
83 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Laravel\Sanctum\Sanctum
- Line 4: Blank line for separation.
- Line 5: Returns a configuration array.
- Line 6: Blank line for separation.
- Line 7: Implements application logic: /*
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: | Stateful Domains
- Line 10: Implements application logic: |--------------------------------------------------------------------------
- Line 11: Implements application logic: |
- Line 12: Implements application logic: | Requests from the following domains / hosts will receive stateful API
- Line 13: Implements application logic: | authentication cookies. Typically, these should include your local
- Line 14: Implements application logic: | and production domains which access your API via a frontend SPA.
- Line 15: Implements application logic: |
- Line 16: Implements application logic: */
- Line 17: Blank line for separation.
- Line 18: Implements application logic: 'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
- Line 19: Implements application logic: '%s%s',
- Line 20: Implements application logic: 'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
- Line 21: Implements application logic: Sanctum::currentApplicationUrlWithPort()
- Line 22: Implements application logic: ))),
- Line 23: Blank line for separation.
- Line 24: Implements application logic: /*
- Line 25: Implements application logic: |--------------------------------------------------------------------------
- Line 26: Implements application logic: | Sanctum Guards
- Line 27: Implements application logic: |--------------------------------------------------------------------------
- Line 28: Implements application logic: |
- Line 29: Implements application logic: | This array contains the authentication guards that will be checked when
- Line 30: Implements application logic: | Sanctum is trying to authenticate a request. If none of these guards
- Line 31: Implements application logic: | are able to authenticate the request, Sanctum will use the bearer
- Line 32: Implements application logic: | token that's present on an incoming request for authentication.
- Line 33: Implements application logic: |
- Line 34: Implements application logic: */
- Line 35: Blank line for separation.
- Line 36: Implements application logic: 'guard' => ['web'],
- Line 37: Blank line for separation.
- Line 38: Implements application logic: /*
- Line 39: Implements application logic: |--------------------------------------------------------------------------
- Line 40: Implements application logic: | Expiration Minutes
- Line 41: Implements application logic: |--------------------------------------------------------------------------
- Line 42: Implements application logic: |
- Line 43: Implements application logic: | This value controls the number of minutes until an issued token will be
- Line 44: Implements application logic: | considered expired. This will override any values set in the token's
- Line 45: Implements application logic: | "expires_at" attribute, but first-party sessions are not affected.
- Line 46: Implements application logic: |
- Line 47: Implements application logic: */
- Line 48: Blank line for separation.
- Line 49: Implements application logic: 'expiration' => null,
- Line 50: Blank line for separation.
- Line 51: Implements application logic: /*
- Line 52: Implements application logic: |--------------------------------------------------------------------------
- Line 53: Implements application logic: | Token Prefix
- Line 54: Implements application logic: |--------------------------------------------------------------------------
- Line 55: Implements application logic: |
- Line 56: Implements application logic: | Sanctum can prefix new tokens in order to take advantage of numerous
- Line 57: Implements application logic: | security scanning initiatives maintained by open source platforms
- Line 58: Implements application logic: | that notify developers if they commit tokens into repositories.
- Line 59: Implements application logic: |
- Line 60: Implements application logic: | See: https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning
- Line 61: Implements application logic: |
- Line 62: Implements application logic: */
- Line 63: Blank line for separation.
- Line 64: Implements application logic: 'token_prefix' => env('SANCTUM_TOKEN_PREFIX', ''),
- Line 65: Blank line for separation.
- Line 66: Implements application logic: /*
- Line 67: Implements application logic: |--------------------------------------------------------------------------
- Line 68: Implements application logic: | Sanctum Middleware
- Line 69: Implements application logic: |--------------------------------------------------------------------------
- Line 70: Implements application logic: |
- Line 71: Implements application logic: | When authenticating your first-party SPA with Sanctum you may need to
- Line 72: Implements application logic: | customize some of the middleware Sanctum uses while processing the
- Line 73: Implements application logic: | request. You may change the middleware listed below as required.
- Line 74: Implements application logic: |
- Line 75: Implements application logic: */
- Line 76: Blank line for separation.
- Line 77: Implements application logic: 'middleware' => [
- Line 78: Implements application logic: 'authenticate_session' => Laravel\Sanctum\Http\Middleware\AuthenticateSession::class,
- Line 79: Implements application logic: 'encrypt_cookies' => Illuminate\Cookie\Middleware\EncryptCookies::class,
- Line 80: Implements application logic: 'validate_csrf_token' => Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
- Line 81: Implements application logic: ],
- Line 82: Blank line for separation.
- Line 83: Implements application logic: ];
