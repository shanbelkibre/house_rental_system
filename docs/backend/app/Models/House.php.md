# House.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Models;
4 
5 use Illuminate\Database\Eloquent\Model;
6 
7 class House extends Model
8 {
9     protected $table = 'houses';
10     
11     protected $fillable = [
12         'owner_id', 'title', 'description', 'price', 
13         'location', 'rooms', 'status', 'is_approved',
14         'bathrooms', 'area', 'type', 'amenities', 'availability_date',
15         'license_image'
16     ];
17     
18     protected $casts = [
19         'amenities' => 'array',
20         'availability_date' => 'date',
21     ];
22     
23     public function owner()
24     {
25         return $this->belongsTo(User::class, 'owner_id');
26     }
27     
28     public function images()
29     {
30         return $this->hasMany(HouseImage::class, 'house_id');
31     }
32     
33     public function requests()
34     {
35         return $this->hasMany(RequestRental::class, 'house_id');
36     }
37 
38     public function reviews()
39     {
40         return $this->hasMany(Review::class, 'house_id');
41     }
42 
43     public function visits()
44     {
45         return $this->hasMany(Visit::class, 'house_id');
46     }
47 
48     public function agreements()
49     {
50         return $this->hasMany(Agreement::class, 'house_id');
51     }
52 
53     protected static function booted()
54     {
55         static::deleting(function ($house) {
56             // Delete related images from storage and database
57             foreach ($house->images as $image) {
58                 \Illuminate\Support\Facades\Storage::disk('public')->delete($image->image_path);
59                 $image->delete();
60             }
61             
62             // Delete other related records to prevent foreign key constraints
63             $house->requests()->delete();
64             $house->reviews()->delete();
65             $house->visits()->delete();
66             $house->agreements()->delete();
67         });
68     }
69 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Models
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Illuminate\Database\Eloquent\Model
- Line 6: Blank line for separation.
- Line 7: Defines the House class.
- Line 8: Implements application logic: {
- Line 9: Declares a class property: protected $table = 'houses';
- Line 10: Blank line for separation.
- Line 11: Declares a class property: protected $fillable = [
- Line 12: Implements application logic: 'owner_id', 'title', 'description', 'price',
- Line 13: Implements application logic: 'location', 'rooms', 'status', 'is_approved',
- Line 14: Implements application logic: 'bathrooms', 'area', 'type', 'amenities', 'availability_date',
- Line 15: Implements application logic: 'license_image'
- Line 16: Implements application logic: ];
- Line 17: Blank line for separation.
- Line 18: Declares a class property: protected $casts = [
- Line 19: Implements application logic: 'amenities' => 'array',
- Line 20: Implements application logic: 'availability_date' => 'date',
- Line 21: Implements application logic: ];
- Line 22: Blank line for separation.
- Line 23: Defines the owner function.
- Line 24: Implements application logic: {
- Line 25: Returns a value from this function: return $this->belongsTo(User::class, 'owner_id');
- Line 26: Implements application logic: }
- Line 27: Blank line for separation.
- Line 28: Defines the images function.
- Line 29: Implements application logic: {
- Line 30: Returns a value from this function: return $this->hasMany(HouseImage::class, 'house_id');
- Line 31: Implements application logic: }
- Line 32: Blank line for separation.
- Line 33: Defines the requests function.
- Line 34: Implements application logic: {
- Line 35: Returns a value from this function: return $this->hasMany(RequestRental::class, 'house_id');
- Line 36: Implements application logic: }
- Line 37: Blank line for separation.
- Line 38: Defines the reviews function.
- Line 39: Implements application logic: {
- Line 40: Returns a value from this function: return $this->hasMany(Review::class, 'house_id');
- Line 41: Implements application logic: }
- Line 42: Blank line for separation.
- Line 43: Defines the visits function.
- Line 44: Implements application logic: {
- Line 45: Returns a value from this function: return $this->hasMany(Visit::class, 'house_id');
- Line 46: Implements application logic: }
- Line 47: Blank line for separation.
- Line 48: Defines the agreements function.
- Line 49: Implements application logic: {
- Line 50: Returns a value from this function: return $this->hasMany(Agreement::class, 'house_id');
- Line 51: Implements application logic: }
- Line 52: Blank line for separation.
- Line 53: Implements application logic: protected static function booted()
- Line 54: Implements application logic: {
- Line 55: Implements application logic: static::deleting(function ($house) {
- Line 56: Delete related images from storage and database
- Line 57: Implements application logic: foreach ($house->images as $image) {
- Line 58: Implements application logic: \Illuminate\Support\Facades\Storage::disk('public')->delete($image->image_path);
- Line 59: Implements application logic: $image->delete();
- Line 60: Implements application logic: }
- Line 61: Blank line for separation.
- Line 62: Delete other related records to prevent foreign key constraints
- Line 63: Implements application logic: $house->requests()->delete();
- Line 64: Implements application logic: $house->reviews()->delete();
- Line 65: Implements application logic: $house->visits()->delete();
- Line 66: Implements application logic: $house->agreements()->delete();
- Line 67: Implements application logic: });
- Line 68: Implements application logic: }
- Line 69: Implements application logic: }
