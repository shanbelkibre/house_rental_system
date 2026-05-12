# RequestRental.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Models;
4 
5 use Illuminate\Database\Eloquent\Model;
6 
7 class RequestRental extends Model
8 {
9     protected $table = 'requests';
10     
11     protected $fillable = ['renter_id', 'house_id', 'status', 'message'];
12     
13     public function renter()
14     {
15         return $this->belongsTo(User::class, 'renter_id');
16     }
17     
18     public function house()
19     {
20         return $this->belongsTo(House::class, 'house_id');
21     }
22 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Models
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Illuminate\Database\Eloquent\Model
- Line 6: Blank line for separation.
- Line 7: Defines the RequestRental class.
- Line 8: Implements application logic: {
- Line 9: Declares a class property: protected $table = 'requests';
- Line 10: Blank line for separation.
- Line 11: Declares a class property: protected $fillable = ['renter_id', 'house_id', 'status', 'message'];
- Line 12: Blank line for separation.
- Line 13: Defines the renter function.
- Line 14: Implements application logic: {
- Line 15: Returns a value from this function: return $this->belongsTo(User::class, 'renter_id');
- Line 16: Implements application logic: }
- Line 17: Blank line for separation.
- Line 18: Defines the house function.
- Line 19: Implements application logic: {
- Line 20: Returns a value from this function: return $this->belongsTo(House::class, 'house_id');
- Line 21: Implements application logic: }
- Line 22: Implements application logic: }
