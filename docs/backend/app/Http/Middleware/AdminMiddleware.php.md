# AdminMiddleware.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Middleware;
4 
5 use Closure;
6 use Illuminate\Http\Request;
7 use Illuminate\Support\Facades\Auth;
8 use Symfony\Component\HttpFoundation\Response;
9 
10 class AdminMiddleware
11 {
12     /**
13      * Handle an incoming request.
14      *
15      * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
16      */
17     public function handle(Request $request, Closure $next): Response
18     {
19         if (Auth::check() && Auth::user()->role === 'admin') {
20             return $next($request);
21         }
22 
23         return response()->json(['message' => 'Unauthorized'], 403);
24     }
25 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Middleware
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Closure
- Line 6: Imports a dependency used in this file: Illuminate\Http\Request
- Line 7: Imports a dependency used in this file: Illuminate\Support\Facades\Auth
- Line 8: Imports a dependency used in this file: Symfony\Component\HttpFoundation\Response
- Line 9: Blank line for separation.
- Line 10: Defines the AdminMiddleware class.
- Line 11: Implements application logic: {
- Line 12: Implements application logic: /**
- Line 13: Implements application logic: * Handle an incoming request.
- Line 14: Implements application logic: *
- Line 15: Implements application logic: * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
- Line 16: Implements application logic: */
- Line 17: Defines the handle function.
- Line 18: Implements application logic: {
- Line 19: Adds a conditional branch: if (Auth::check() && Auth::user()->role === 'admin') {
- Line 20: Returns a value from this function: return $next($request);
- Line 21: Implements application logic: }
- Line 22: Blank line for separation.
- Line 23: Returns a JSON HTTP response to the client.
- Line 24: Implements application logic: }
- Line 25: Implements application logic: }
