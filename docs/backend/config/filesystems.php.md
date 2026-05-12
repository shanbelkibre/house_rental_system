# filesystems.php

## Code (numbered)

```php
1 <?php
2 
3 return [
4 
5     /*
6     |--------------------------------------------------------------------------
7     | Default Filesystem Disk
8     |--------------------------------------------------------------------------
9     |
10     | Here you may specify the default filesystem disk that should be used
11     | by the framework. The "local" disk, as well as a variety of cloud
12     | based disks are available to your application for file storage.
13     |
14     */
15 
16     'default' => env('FILESYSTEM_DISK', 'local'),
17 
18     /*
19     |--------------------------------------------------------------------------
20     | Filesystem Disks
21     |--------------------------------------------------------------------------
22     |
23     | Below you may configure as many filesystem disks as necessary, and you
24     | may even configure multiple disks for the same driver. Examples for
25     | most supported storage drivers are configured here for reference.
26     |
27     | Supported drivers: "local", "ftp", "sftp", "s3"
28     |
29     */
30 
31     'disks' => [
32 
33         'local' => [
34             'driver' => 'local',
35             'root' => storage_path('app/private'),
36             'serve' => true,
37             'throw' => false,
38             'report' => false,
39         ],
40 
41         'public' => [
42             'driver' => 'local',
43             'root' => storage_path('app/public'),
44             'url' => rtrim(env('APP_URL', 'http://localhost'), '/').'/storage',
45             'visibility' => 'public',
46             'throw' => false,
47             'report' => false,
48         ],
49 
50         's3' => [
51             'driver' => 's3',
52             'key' => env('AWS_ACCESS_KEY_ID'),
53             'secret' => env('AWS_SECRET_ACCESS_KEY'),
54             'region' => env('AWS_DEFAULT_REGION'),
55             'bucket' => env('AWS_BUCKET'),
56             'url' => env('AWS_URL'),
57             'endpoint' => env('AWS_ENDPOINT'),
58             'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
59             'throw' => false,
60             'report' => false,
61         ],
62 
63     ],
64 
65     /*
66     |--------------------------------------------------------------------------
67     | Symbolic Links
68     |--------------------------------------------------------------------------
69     |
70     | Here you may configure the symbolic links that will be created when the
71     | `storage:link` Artisan command is executed. The array keys should be
72     | the locations of the links and the values should be their targets.
73     |
74     */
75 
76     'links' => [
77         public_path('storage') => storage_path('app/public'),
78     ],
79 
80 ];
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Returns a configuration array.
- Line 4: Blank line for separation.
- Line 5: Implements application logic: /*
- Line 6: Implements application logic: |--------------------------------------------------------------------------
- Line 7: Implements application logic: | Default Filesystem Disk
- Line 8: Implements application logic: |--------------------------------------------------------------------------
- Line 9: Implements application logic: |
- Line 10: Implements application logic: | Here you may specify the default filesystem disk that should be used
- Line 11: Implements application logic: | by the framework. The "local" disk, as well as a variety of cloud
- Line 12: Implements application logic: | based disks are available to your application for file storage.
- Line 13: Implements application logic: |
- Line 14: Implements application logic: */
- Line 15: Blank line for separation.
- Line 16: Implements application logic: 'default' => env('FILESYSTEM_DISK', 'local'),
- Line 17: Blank line for separation.
- Line 18: Implements application logic: /*
- Line 19: Implements application logic: |--------------------------------------------------------------------------
- Line 20: Implements application logic: | Filesystem Disks
- Line 21: Implements application logic: |--------------------------------------------------------------------------
- Line 22: Implements application logic: |
- Line 23: Implements application logic: | Below you may configure as many filesystem disks as necessary, and you
- Line 24: Implements application logic: | may even configure multiple disks for the same driver. Examples for
- Line 25: Implements application logic: | most supported storage drivers are configured here for reference.
- Line 26: Implements application logic: |
- Line 27: Implements application logic: | Supported drivers: "local", "ftp", "sftp", "s3"
- Line 28: Implements application logic: |
- Line 29: Implements application logic: */
- Line 30: Blank line for separation.
- Line 31: Implements application logic: 'disks' => [
- Line 32: Blank line for separation.
- Line 33: Implements application logic: 'local' => [
- Line 34: Implements application logic: 'driver' => 'local',
- Line 35: Implements application logic: 'root' => storage_path('app/private'),
- Line 36: Implements application logic: 'serve' => true,
- Line 37: Implements application logic: 'throw' => false,
- Line 38: Implements application logic: 'report' => false,
- Line 39: Implements application logic: ],
- Line 40: Blank line for separation.
- Line 41: Implements application logic: 'public' => [
- Line 42: Implements application logic: 'driver' => 'local',
- Line 43: Implements application logic: 'root' => storage_path('app/public'),
- Line 44: Implements application logic: 'url' => rtrim(env('APP_URL', 'http://localhost'), '/').'/storage',
- Line 45: Implements application logic: 'visibility' => 'public',
- Line 46: Implements application logic: 'throw' => false,
- Line 47: Implements application logic: 'report' => false,
- Line 48: Implements application logic: ],
- Line 49: Blank line for separation.
- Line 50: Implements application logic: 's3' => [
- Line 51: Implements application logic: 'driver' => 's3',
- Line 52: Implements application logic: 'key' => env('AWS_ACCESS_KEY_ID'),
- Line 53: Implements application logic: 'secret' => env('AWS_SECRET_ACCESS_KEY'),
- Line 54: Implements application logic: 'region' => env('AWS_DEFAULT_REGION'),
- Line 55: Implements application logic: 'bucket' => env('AWS_BUCKET'),
- Line 56: Implements application logic: 'url' => env('AWS_URL'),
- Line 57: Implements application logic: 'endpoint' => env('AWS_ENDPOINT'),
- Line 58: Implements application logic: 'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
- Line 59: Implements application logic: 'throw' => false,
- Line 60: Implements application logic: 'report' => false,
- Line 61: Implements application logic: ],
- Line 62: Blank line for separation.
- Line 63: Implements application logic: ],
- Line 64: Blank line for separation.
- Line 65: Implements application logic: /*
- Line 66: Implements application logic: |--------------------------------------------------------------------------
- Line 67: Implements application logic: | Symbolic Links
- Line 68: Implements application logic: |--------------------------------------------------------------------------
- Line 69: Implements application logic: |
- Line 70: Implements application logic: | Here you may configure the symbolic links that will be created when the
- Line 71: Implements application logic: | `storage:link` Artisan command is executed. The array keys should be
- Line 72: Implements application logic: | the locations of the links and the values should be their targets.
- Line 73: Implements application logic: |
- Line 74: Implements application logic: */
- Line 75: Blank line for separation.
- Line 76: Implements application logic: 'links' => [
- Line 77: Implements application logic: public_path('storage') => storage_path('app/public'),
- Line 78: Implements application logic: ],
- Line 79: Blank line for separation.
- Line 80: Implements application logic: ];
