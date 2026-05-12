# session.php

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
9     | Default Session Driver
10     |--------------------------------------------------------------------------
11     |
12     | This option determines the default session driver that is utilized for
13     | incoming requests. Laravel supports a variety of storage options to
14     | persist session data. Database storage is a great default choice.
15     |
16     | Supported: "file", "cookie", "database", "memcached",
17     |            "redis", "dynamodb", "array"
18     |
19     */
20 
21     'driver' => env('SESSION_DRIVER', 'database'),
22 
23     /*
24     |--------------------------------------------------------------------------
25     | Session Lifetime
26     |--------------------------------------------------------------------------
27     |
28     | Here you may specify the number of minutes that you wish the session
29     | to be allowed to remain idle before it expires. If you want them
30     | to expire immediately when the browser is closed then you may
31     | indicate that via the expire_on_close configuration option.
32     |
33     */
34 
35     'lifetime' => (int) env('SESSION_LIFETIME', 120),
36 
37     'expire_on_close' => env('SESSION_EXPIRE_ON_CLOSE', false),
38 
39     /*
40     |--------------------------------------------------------------------------
41     | Session Encryption
42     |--------------------------------------------------------------------------
43     |
44     | This option allows you to easily specify that all of your session data
45     | should be encrypted before it's stored. All encryption is performed
46     | automatically by Laravel and you may use the session like normal.
47     |
48     */
49 
50     'encrypt' => env('SESSION_ENCRYPT', false),
51 
52     /*
53     |--------------------------------------------------------------------------
54     | Session File Location
55     |--------------------------------------------------------------------------
56     |
57     | When utilizing the "file" session driver, the session files are placed
58     | on disk. The default storage location is defined here; however, you
59     | are free to provide another location where they should be stored.
60     |
61     */
62 
63     'files' => storage_path('framework/sessions'),
64 
65     /*
66     |--------------------------------------------------------------------------
67     | Session Database Connection
68     |--------------------------------------------------------------------------
69     |
70     | When using the "database" or "redis" session drivers, you may specify a
71     | connection that should be used to manage these sessions. This should
72     | correspond to a connection in your database configuration options.
73     |
74     */
75 
76     'connection' => env('SESSION_CONNECTION'),
77 
78     /*
79     |--------------------------------------------------------------------------
80     | Session Database Table
81     |--------------------------------------------------------------------------
82     |
83     | When using the "database" session driver, you may specify the table to
84     | be used to store sessions. Of course, a sensible default is defined
85     | for you; however, you're welcome to change this to another table.
86     |
87     */
88 
89     'table' => env('SESSION_TABLE', 'sessions'),
90 
91     /*
92     |--------------------------------------------------------------------------
93     | Session Cache Store
94     |--------------------------------------------------------------------------
95     |
96     | When using one of the framework's cache driven session backends, you may
97     | define the cache store which should be used to store the session data
98     | between requests. This must match one of your defined cache stores.
99     |
100     | Affects: "dynamodb", "memcached", "redis"
101     |
102     */
103 
104     'store' => env('SESSION_STORE'),
105 
106     /*
107     |--------------------------------------------------------------------------
108     | Session Sweeping Lottery
109     |--------------------------------------------------------------------------
110     |
111     | Some session drivers must manually sweep their storage location to get
112     | rid of old sessions from storage. Here are the chances that it will
113     | happen on a given request. By default, the odds are 2 out of 100.
114     |
115     */
116 
117     'lottery' => [2, 100],
118 
119     /*
120     |--------------------------------------------------------------------------
121     | Session Cookie Name
122     |--------------------------------------------------------------------------
123     |
124     | Here you may change the name of the session cookie that is created by
125     | the framework. Typically, you should not need to change this value
126     | since doing so does not grant a meaningful security improvement.
127     |
128     */
129 
130     'cookie' => env(
131         'SESSION_COOKIE',
132         Str::slug((string) env('APP_NAME', 'laravel')).'-session'
133     ),
134 
135     /*
136     |--------------------------------------------------------------------------
137     | Session Cookie Path
138     |--------------------------------------------------------------------------
139     |
140     | The session cookie path determines the path for which the cookie will
141     | be regarded as available. Typically, this will be the root path of
142     | your application, but you're free to change this when necessary.
143     |
144     */
145 
146     'path' => env('SESSION_PATH', '/'),
147 
148     /*
149     |--------------------------------------------------------------------------
150     | Session Cookie Domain
151     |--------------------------------------------------------------------------
152     |
153     | This value determines the domain and subdomains the session cookie is
154     | available to. By default, the cookie will be available to the root
155     | domain without subdomains. Typically, this shouldn't be changed.
156     |
157     */
158 
159     'domain' => env('SESSION_DOMAIN'),
160 
161     /*
162     |--------------------------------------------------------------------------
163     | HTTPS Only Cookies
164     |--------------------------------------------------------------------------
165     |
166     | By setting this option to true, session cookies will only be sent back
167     | to the server if the browser has a HTTPS connection. This will keep
168     | the cookie from being sent to you when it can't be done securely.
169     |
170     */
171 
172     'secure' => env('SESSION_SECURE_COOKIE'),
173 
174     /*
175     |--------------------------------------------------------------------------
176     | HTTP Access Only
177     |--------------------------------------------------------------------------
178     |
179     | Setting this value to true will prevent JavaScript from accessing the
180     | value of the cookie and the cookie will only be accessible through
181     | the HTTP protocol. It's unlikely you should disable this option.
182     |
183     */
184 
185     'http_only' => env('SESSION_HTTP_ONLY', true),
186 
187     /*
188     |--------------------------------------------------------------------------
189     | Same-Site Cookies
190     |--------------------------------------------------------------------------
191     |
192     | This option determines how your cookies behave when cross-site requests
193     | take place, and can be used to mitigate CSRF attacks. By default, we
194     | will set this value to "lax" to permit secure cross-site requests.
195     |
196     | See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value
197     |
198     | Supported: "lax", "strict", "none", null
199     |
200     */
201 
202     'same_site' => env('SESSION_SAME_SITE', 'lax'),
203 
204     /*
205     |--------------------------------------------------------------------------
206     | Partitioned Cookies
207     |--------------------------------------------------------------------------
208     |
209     | Setting this value to true will tie the cookie to the top-level site for
210     | a cross-site context. Partitioned cookies are accepted by the browser
211     | when flagged "secure" and the Same-Site attribute is set to "none".
212     |
213     */
214 
215     'partitioned' => env('SESSION_PARTITIONED_COOKIE', false),
216 
217     /*
218     |--------------------------------------------------------------------------
219     | Session Serialization
220     |--------------------------------------------------------------------------
221     |
222     | This value controls the serialization strategy for session data, which
223     | is JSON by default. Setting this to "php" allows the storage of PHP
224     | objects in the session but can make an application vulnerable to
225     | "gadget chain" serialization attacks if the APP_KEY is leaked.
226     |
227     | Supported: "json", "php"
228     |
229     */
230 
231     'serialization' => 'json',
232 
233 ];
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
- Line 9: Implements application logic: | Default Session Driver
- Line 10: Implements application logic: |--------------------------------------------------------------------------
- Line 11: Implements application logic: |
- Line 12: Implements application logic: | This option determines the default session driver that is utilized for
- Line 13: Implements application logic: | incoming requests. Laravel supports a variety of storage options to
- Line 14: Implements application logic: | persist session data. Database storage is a great default choice.
- Line 15: Implements application logic: |
- Line 16: Implements application logic: | Supported: "file", "cookie", "database", "memcached",
- Line 17: Implements application logic: |            "redis", "dynamodb", "array"
- Line 18: Implements application logic: |
- Line 19: Implements application logic: */
- Line 20: Blank line for separation.
- Line 21: Implements application logic: 'driver' => env('SESSION_DRIVER', 'database'),
- Line 22: Blank line for separation.
- Line 23: Implements application logic: /*
- Line 24: Implements application logic: |--------------------------------------------------------------------------
- Line 25: Implements application logic: | Session Lifetime
- Line 26: Implements application logic: |--------------------------------------------------------------------------
- Line 27: Implements application logic: |
- Line 28: Implements application logic: | Here you may specify the number of minutes that you wish the session
- Line 29: Implements application logic: | to be allowed to remain idle before it expires. If you want them
- Line 30: Implements application logic: | to expire immediately when the browser is closed then you may
- Line 31: Implements application logic: | indicate that via the expire_on_close configuration option.
- Line 32: Implements application logic: |
- Line 33: Implements application logic: */
- Line 34: Blank line for separation.
- Line 35: Implements application logic: 'lifetime' => (int) env('SESSION_LIFETIME', 120),
- Line 36: Blank line for separation.
- Line 37: Implements application logic: 'expire_on_close' => env('SESSION_EXPIRE_ON_CLOSE', false),
- Line 38: Blank line for separation.
- Line 39: Implements application logic: /*
- Line 40: Implements application logic: |--------------------------------------------------------------------------
- Line 41: Implements application logic: | Session Encryption
- Line 42: Implements application logic: |--------------------------------------------------------------------------
- Line 43: Implements application logic: |
- Line 44: Implements application logic: | This option allows you to easily specify that all of your session data
- Line 45: Implements application logic: | should be encrypted before it's stored. All encryption is performed
- Line 46: Implements application logic: | automatically by Laravel and you may use the session like normal.
- Line 47: Implements application logic: |
- Line 48: Implements application logic: */
- Line 49: Blank line for separation.
- Line 50: Implements application logic: 'encrypt' => env('SESSION_ENCRYPT', false),
- Line 51: Blank line for separation.
- Line 52: Implements application logic: /*
- Line 53: Implements application logic: |--------------------------------------------------------------------------
- Line 54: Implements application logic: | Session File Location
- Line 55: Implements application logic: |--------------------------------------------------------------------------
- Line 56: Implements application logic: |
- Line 57: Implements application logic: | When utilizing the "file" session driver, the session files are placed
- Line 58: Implements application logic: | on disk. The default storage location is defined here; however, you
- Line 59: Implements application logic: | are free to provide another location where they should be stored.
- Line 60: Implements application logic: |
- Line 61: Implements application logic: */
- Line 62: Blank line for separation.
- Line 63: Implements application logic: 'files' => storage_path('framework/sessions'),
- Line 64: Blank line for separation.
- Line 65: Implements application logic: /*
- Line 66: Implements application logic: |--------------------------------------------------------------------------
- Line 67: Implements application logic: | Session Database Connection
- Line 68: Implements application logic: |--------------------------------------------------------------------------
- Line 69: Implements application logic: |
- Line 70: Implements application logic: | When using the "database" or "redis" session drivers, you may specify a
- Line 71: Implements application logic: | connection that should be used to manage these sessions. This should
- Line 72: Implements application logic: | correspond to a connection in your database configuration options.
- Line 73: Implements application logic: |
- Line 74: Implements application logic: */
- Line 75: Blank line for separation.
- Line 76: Implements application logic: 'connection' => env('SESSION_CONNECTION'),
- Line 77: Blank line for separation.
- Line 78: Implements application logic: /*
- Line 79: Implements application logic: |--------------------------------------------------------------------------
- Line 80: Implements application logic: | Session Database Table
- Line 81: Implements application logic: |--------------------------------------------------------------------------
- Line 82: Implements application logic: |
- Line 83: Implements application logic: | When using the "database" session driver, you may specify the table to
- Line 84: Implements application logic: | be used to store sessions. Of course, a sensible default is defined
- Line 85: Implements application logic: | for you; however, you're welcome to change this to another table.
- Line 86: Implements application logic: |
- Line 87: Implements application logic: */
- Line 88: Blank line for separation.
- Line 89: Implements application logic: 'table' => env('SESSION_TABLE', 'sessions'),
- Line 90: Blank line for separation.
- Line 91: Implements application logic: /*
- Line 92: Implements application logic: |--------------------------------------------------------------------------
- Line 93: Implements application logic: | Session Cache Store
- Line 94: Implements application logic: |--------------------------------------------------------------------------
- Line 95: Implements application logic: |
- Line 96: Implements application logic: | When using one of the framework's cache driven session backends, you may
- Line 97: Implements application logic: | define the cache store which should be used to store the session data
- Line 98: Implements application logic: | between requests. This must match one of your defined cache stores.
- Line 99: Implements application logic: |
- Line 100: Implements application logic: | Affects: "dynamodb", "memcached", "redis"
- Line 101: Implements application logic: |
- Line 102: Implements application logic: */
- Line 103: Blank line for separation.
- Line 104: Implements application logic: 'store' => env('SESSION_STORE'),
- Line 105: Blank line for separation.
- Line 106: Implements application logic: /*
- Line 107: Implements application logic: |--------------------------------------------------------------------------
- Line 108: Implements application logic: | Session Sweeping Lottery
- Line 109: Implements application logic: |--------------------------------------------------------------------------
- Line 110: Implements application logic: |
- Line 111: Implements application logic: | Some session drivers must manually sweep their storage location to get
- Line 112: Implements application logic: | rid of old sessions from storage. Here are the chances that it will
- Line 113: Implements application logic: | happen on a given request. By default, the odds are 2 out of 100.
- Line 114: Implements application logic: |
- Line 115: Implements application logic: */
- Line 116: Blank line for separation.
- Line 117: Implements application logic: 'lottery' => [2, 100],
- Line 118: Blank line for separation.
- Line 119: Implements application logic: /*
- Line 120: Implements application logic: |--------------------------------------------------------------------------
- Line 121: Implements application logic: | Session Cookie Name
- Line 122: Implements application logic: |--------------------------------------------------------------------------
- Line 123: Implements application logic: |
- Line 124: Implements application logic: | Here you may change the name of the session cookie that is created by
- Line 125: Implements application logic: | the framework. Typically, you should not need to change this value
- Line 126: Implements application logic: | since doing so does not grant a meaningful security improvement.
- Line 127: Implements application logic: |
- Line 128: Implements application logic: */
- Line 129: Blank line for separation.
- Line 130: Implements application logic: 'cookie' => env(
- Line 131: Implements application logic: 'SESSION_COOKIE',
- Line 132: Implements application logic: Str::slug((string) env('APP_NAME', 'laravel')).'-session'
- Line 133: Implements application logic: ),
- Line 134: Blank line for separation.
- Line 135: Implements application logic: /*
- Line 136: Implements application logic: |--------------------------------------------------------------------------
- Line 137: Implements application logic: | Session Cookie Path
- Line 138: Implements application logic: |--------------------------------------------------------------------------
- Line 139: Implements application logic: |
- Line 140: Implements application logic: | The session cookie path determines the path for which the cookie will
- Line 141: Implements application logic: | be regarded as available. Typically, this will be the root path of
- Line 142: Implements application logic: | your application, but you're free to change this when necessary.
- Line 143: Implements application logic: |
- Line 144: Implements application logic: */
- Line 145: Blank line for separation.
- Line 146: Implements application logic: 'path' => env('SESSION_PATH', '/'),
- Line 147: Blank line for separation.
- Line 148: Implements application logic: /*
- Line 149: Implements application logic: |--------------------------------------------------------------------------
- Line 150: Implements application logic: | Session Cookie Domain
- Line 151: Implements application logic: |--------------------------------------------------------------------------
- Line 152: Implements application logic: |
- Line 153: Implements application logic: | This value determines the domain and subdomains the session cookie is
- Line 154: Implements application logic: | available to. By default, the cookie will be available to the root
- Line 155: Implements application logic: | domain without subdomains. Typically, this shouldn't be changed.
- Line 156: Implements application logic: |
- Line 157: Implements application logic: */
- Line 158: Blank line for separation.
- Line 159: Implements application logic: 'domain' => env('SESSION_DOMAIN'),
- Line 160: Blank line for separation.
- Line 161: Implements application logic: /*
- Line 162: Implements application logic: |--------------------------------------------------------------------------
- Line 163: Implements application logic: | HTTPS Only Cookies
- Line 164: Implements application logic: |--------------------------------------------------------------------------
- Line 165: Implements application logic: |
- Line 166: Implements application logic: | By setting this option to true, session cookies will only be sent back
- Line 167: Implements application logic: | to the server if the browser has a HTTPS connection. This will keep
- Line 168: Implements application logic: | the cookie from being sent to you when it can't be done securely.
- Line 169: Implements application logic: |
- Line 170: Implements application logic: */
- Line 171: Blank line for separation.
- Line 172: Implements application logic: 'secure' => env('SESSION_SECURE_COOKIE'),
- Line 173: Blank line for separation.
- Line 174: Implements application logic: /*
- Line 175: Implements application logic: |--------------------------------------------------------------------------
- Line 176: Implements application logic: | HTTP Access Only
- Line 177: Implements application logic: |--------------------------------------------------------------------------
- Line 178: Implements application logic: |
- Line 179: Implements application logic: | Setting this value to true will prevent JavaScript from accessing the
- Line 180: Implements application logic: | value of the cookie and the cookie will only be accessible through
- Line 181: Implements application logic: | the HTTP protocol. It's unlikely you should disable this option.
- Line 182: Implements application logic: |
- Line 183: Implements application logic: */
- Line 184: Blank line for separation.
- Line 185: Implements application logic: 'http_only' => env('SESSION_HTTP_ONLY', true),
- Line 186: Blank line for separation.
- Line 187: Implements application logic: /*
- Line 188: Implements application logic: |--------------------------------------------------------------------------
- Line 189: Implements application logic: | Same-Site Cookies
- Line 190: Implements application logic: |--------------------------------------------------------------------------
- Line 191: Implements application logic: |
- Line 192: Implements application logic: | This option determines how your cookies behave when cross-site requests
- Line 193: Implements application logic: | take place, and can be used to mitigate CSRF attacks. By default, we
- Line 194: Implements application logic: | will set this value to "lax" to permit secure cross-site requests.
- Line 195: Implements application logic: |
- Line 196: Implements application logic: | See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value
- Line 197: Implements application logic: |
- Line 198: Implements application logic: | Supported: "lax", "strict", "none", null
- Line 199: Implements application logic: |
- Line 200: Implements application logic: */
- Line 201: Blank line for separation.
- Line 202: Implements application logic: 'same_site' => env('SESSION_SAME_SITE', 'lax'),
- Line 203: Blank line for separation.
- Line 204: Implements application logic: /*
- Line 205: Implements application logic: |--------------------------------------------------------------------------
- Line 206: Implements application logic: | Partitioned Cookies
- Line 207: Implements application logic: |--------------------------------------------------------------------------
- Line 208: Implements application logic: |
- Line 209: Implements application logic: | Setting this value to true will tie the cookie to the top-level site for
- Line 210: Implements application logic: | a cross-site context. Partitioned cookies are accepted by the browser
- Line 211: Implements application logic: | when flagged "secure" and the Same-Site attribute is set to "none".
- Line 212: Implements application logic: |
- Line 213: Implements application logic: */
- Line 214: Blank line for separation.
- Line 215: Implements application logic: 'partitioned' => env('SESSION_PARTITIONED_COOKIE', false),
- Line 216: Blank line for separation.
- Line 217: Implements application logic: /*
- Line 218: Implements application logic: |--------------------------------------------------------------------------
- Line 219: Implements application logic: | Session Serialization
- Line 220: Implements application logic: |--------------------------------------------------------------------------
- Line 221: Implements application logic: |
- Line 222: Implements application logic: | This value controls the serialization strategy for session data, which
- Line 223: Implements application logic: | is JSON by default. Setting this to "php" allows the storage of PHP
- Line 224: Implements application logic: | objects in the session but can make an application vulnerable to
- Line 225: Implements application logic: | "gadget chain" serialization attacks if the APP_KEY is leaked.
- Line 226: Implements application logic: |
- Line 227: Implements application logic: | Supported: "json", "php"
- Line 228: Implements application logic: |
- Line 229: Implements application logic: */
- Line 230: Blank line for separation.
- Line 231: Implements application logic: 'serialization' => 'json',
- Line 232: Blank line for separation.
- Line 233: Implements application logic: ];
