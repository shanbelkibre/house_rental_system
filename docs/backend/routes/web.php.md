# web.php

## Code (numbered)

```php
1 <?php
2 
3 use Illuminate\Support\Facades\Route;
4 
5 Route::view('/', 'welcome');
6 
7 Route::view('/{any}', 'welcome')->where('any', '^(?!api|sanctum).*$');
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Imports a dependency used in this file: Illuminate\Support\Facades\Route
- Line 4: Blank line for separation.
- Line 5: Defines a route or routing rule: Route::view('/', 'welcome');
- Line 6: Blank line for separation.
- Line 7: Defines a route or routing rule: Route::view('/{any}', 'welcome')->where('any', '^(?!api|sanctum).*$');
