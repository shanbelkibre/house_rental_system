# app.php

## Code (numbered)

```php
1 <?php
2 
3 use Illuminate\Foundation\Application;
4 use Illuminate\Foundation\Configuration\Exceptions;
5 use Illuminate\Foundation\Configuration\Middleware;
6 
7 return Application::configure(basePath: dirname(__DIR__))
8     ->withRouting(
9         web: __DIR__.'/../routes/web.php',
10         api: __DIR__.'/../routes/api.php',
11         commands: __DIR__.'/../routes/console.php',
12         health: '/up',
13     )
14     ->withMiddleware(function (Middleware $middleware) {
15         $middleware->alias([
16             'admin' => \App\Http\Middleware\AdminMiddleware::class,
17         ]);
18 
19         $middleware->api(prepend: [
20             \App\Http\Middleware\ForceJsonResponse::class,
21         ]);
22     })
23 
24     ->withExceptions(function (Exceptions $exceptions): void {
25         //
26     })->create();
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Illuminate\Foundation\Application
- Line 4: Imports a dependency used in this file: Illuminate\Foundation\Configuration\Exceptions
- Line 5: Imports a dependency used in this file: Illuminate\Foundation\Configuration\Middleware
- Line 6: Blank line for separation.
- Line 7: Returns a value from this function: return Application::configure(basePath: dirname(__DIR__))
- Line 8: Implements application logic: ->withRouting(
- Line 9: Implements application logic: web: __DIR__.'/../routes/web.php',
- Line 10: Implements application logic: api: __DIR__.'/../routes/api.php',
- Line 11: Implements application logic: commands: __DIR__.'/../routes/console.php',
- Line 12: Implements application logic: health: '/up',
- Line 13: Implements application logic: )
- Line 14: Implements application logic: ->withMiddleware(function (Middleware $middleware) {
- Line 15: Implements application logic: $middleware->alias([
- Line 16: Implements application logic: 'admin' => \App\Http\Middleware\AdminMiddleware::class,
- Line 17: Implements application logic: ]);
- Line 18: Blank line for separation.
- Line 19: Implements application logic: $middleware->api(prepend: [
- Line 20: Implements application logic: \App\Http\Middleware\ForceJsonResponse::class,
- Line 21: Implements application logic: ]);
- Line 22: Implements application logic: })
- Line 23: Blank line for separation.
- Line 24: Implements application logic: ->withExceptions(function (Exceptions $exceptions): void {
- Line 25: 
- Line 26: Implements application logic: })->create();
