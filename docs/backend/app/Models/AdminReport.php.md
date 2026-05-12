# AdminReport.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Models;
4 
5 use Illuminate\Database\Eloquent\Model;
6 
7 class AdminReport extends Model
8 {
9     protected $fillable = [
10         'name',
11         'start_date',
12         'end_date',
13         'generated_by',
14         'payload',
15     ];
16 
17     protected $casts = [
18         'start_date' => 'datetime',
19         'end_date' => 'datetime',
20         'payload' => 'array',
21     ];
22 
23     public function user()
24     {
25         return $this->belongsTo(User::class, 'generated_by');
26     }
27 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Models
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Illuminate\Database\Eloquent\Model
- Line 6: Blank line for separation.
- Line 7: Defines the AdminReport class.
- Line 8: Implements application logic: {
- Line 9: Declares a class property: protected $fillable = [
- Line 10: Implements application logic: 'name',
- Line 11: Implements application logic: 'start_date',
- Line 12: Implements application logic: 'end_date',
- Line 13: Implements application logic: 'generated_by',
- Line 14: Implements application logic: 'payload',
- Line 15: Implements application logic: ];
- Line 16: Blank line for separation.
- Line 17: Declares a class property: protected $casts = [
- Line 18: Implements application logic: 'start_date' => 'datetime',
- Line 19: Implements application logic: 'end_date' => 'datetime',
- Line 20: Implements application logic: 'payload' => 'array',
- Line 21: Implements application logic: ];
- Line 22: Blank line for separation.
- Line 23: Defines the user function.
- Line 24: Implements application logic: {
- Line 25: Returns a value from this function: return $this->belongsTo(User::class, 'generated_by');
- Line 26: Implements application logic: }
- Line 27: Implements application logic: }
