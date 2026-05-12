# ForceJsonResponse.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Middleware;
4 
5 use Closure;
6 use Illuminate\Http\Request;
7 use Symfony\Component\HttpFoundation\Response;
8 
9 class ForceJsonResponse
10 {
11     /**
12      * Handle an incoming request.
13      *
14      * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
15      */
16     public function handle(Request $request, Closure $next): Response
17     {
18         $request->headers->set('Accept', 'application/json');
19         return $next($request);
20     }
21 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Middleware
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Closure
- Line 6: Imports a dependency used in this file: Illuminate\Http\Request
- Line 7: Imports a dependency used in this file: Symfony\Component\HttpFoundation\Response
- Line 8: Blank line for separation.
- Line 9: Defines the ForceJsonResponse class.
- Line 10: Implements application logic: {
- Line 11: Implements application logic: /**
- Line 12: Implements application logic: * Handle an incoming request.
- Line 13: Implements application logic: *
- Line 14: Implements application logic: * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
- Line 15: Implements application logic: */
- Line 16: Defines the handle function.
- Line 17: Implements application logic: {
- Line 18: Implements application logic: $request->headers->set('Accept', 'application/json');
- Line 19: Returns a value from this function: return $next($request);
- Line 20: Implements application logic: }
- Line 21: Implements application logic: }
