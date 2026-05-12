# SubscriptionPlan.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Models;
4 
5 use Illuminate\Database\Eloquent\Model;
6 
7 class SubscriptionPlan extends Model
8 {
9     protected $fillable = [
10         'name',
11         'price',
12         'duration_days',
13         'is_active',
14     ];
15 
16     protected $casts = [
17         'price' => 'decimal:2',
18         'duration_days' => 'integer',
19         'is_active' => 'boolean',
20     ];
21 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Models
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Illuminate\Database\Eloquent\Model
- Line 6: Blank line for separation.
- Line 7: Defines the SubscriptionPlan class.
- Line 8: Implements application logic: {
- Line 9: Declares a class property: protected $fillable = [
- Line 10: Implements application logic: 'name',
- Line 11: Implements application logic: 'price',
- Line 12: Implements application logic: 'duration_days',
- Line 13: Implements application logic: 'is_active',
- Line 14: Implements application logic: ];
- Line 15: Blank line for separation.
- Line 16: Declares a class property: protected $casts = [
- Line 17: Implements application logic: 'price' => 'decimal:2',
- Line 18: Implements application logic: 'duration_days' => 'integer',
- Line 19: Implements application logic: 'is_active' => 'boolean',
- Line 20: Implements application logic: ];
- Line 21: Implements application logic: }
