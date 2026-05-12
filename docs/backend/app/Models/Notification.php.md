# Notification.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Models;
4 
5 use Illuminate\Database\Eloquent\Model;
6 
7 class Notification extends Model
8 {
9     protected $table = 'notifications';
10     
11     protected $fillable = ['user_id', 'message', 'is_read'];
12     
13     public function user()
14     {
15         return $this->belongsTo(User::class, 'user_id');
16     }
17 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Models
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Illuminate\Database\Eloquent\Model
- Line 6: Blank line for separation.
- Line 7: Defines the Notification class.
- Line 8: Implements application logic: {
- Line 9: Declares a class property: protected $table = 'notifications';
- Line 10: Blank line for separation.
- Line 11: Declares a class property: protected $fillable = ['user_id', 'message', 'is_read'];
- Line 12: Blank line for separation.
- Line 13: Defines the user function.
- Line 14: Implements application logic: {
- Line 15: Returns a value from this function: return $this->belongsTo(User::class, 'user_id');
- Line 16: Implements application logic: }
- Line 17: Implements application logic: }
