# artisan

## Code (numbered)

```text
1 #!/usr/bin/env php
2 <?php
3 
4 use Illuminate\Foundation\Application;
5 use Symfony\Component\Console\Input\ArgvInput;
6 
7 define('LARAVEL_START', microtime(true));
8 
9 // Register the Composer autoloader...
10 require __DIR__.'/vendor/autoload.php';
11 
12 // Bootstrap Laravel and handle the command...
13 /** @var Application $app */
14 $app = require_once __DIR__.'/bootstrap/app.php';
15 
16 $status = $app->handleCommand(new ArgvInput);
17 
18 exit($status);
```

## Line-by-line explanation

- Line 1: Implements application logic: #!/usr/bin/env php
- Line 2: Starts the PHP file.
- Line 3: Blank line for separation.
- Line 4: Imports a dependency used in this file: Illuminate\Foundation\Application
- Line 5: Imports a dependency used in this file: Symfony\Component\Console\Input\ArgvInput
- Line 6: Blank line for separation.
- Line 7: Implements application logic: define('LARAVEL_START', microtime(true));
- Line 8: Blank line for separation.
- Line 9: Register the composer autoloader...
- Line 10: Implements application logic: require __DIR__.'/vendor/autoload.php';
- Line 11: Blank line for separation.
- Line 12: Bootstrap laravel and handle the command...
- Line 13: Implements application logic: /** @var Application $app */
- Line 14: Implements application logic: $app = require_once __DIR__.'/bootstrap/app.php';
- Line 15: Blank line for separation.
- Line 16: Implements application logic: $status = $app->handleCommand(new ArgvInput);
- Line 17: Blank line for separation.
- Line 18: Implements application logic: exit($status);
