# User.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Models;
4 
5 use Laravel\Sanctum\HasApiTokens;
6 use Illuminate\Database\Eloquent\Factories\HasFactory;
7 use Illuminate\Foundation\Auth\User as Authenticatable;
8 use Illuminate\Notifications\Notifiable;
9 
10 class User extends Authenticatable
11 {
12     use HasApiTokens, HasFactory, Notifiable;
13     
14     
15     protected $table = 'users';
16     
17     
18     protected $primaryKey = 'id';
19     
20     
21 
22     protected $fillable = [
23         'name',
24         'email',
25         'password',
26         'role',
27         'phone',
28         'profile_image',
29         'is_verified',
30         'is_suspended'
31     ];
32     
33    
34     protected $hidden = [
35         'password',
36     ];
37     
38    
39     protected $casts = [
40         'is_verified' => 'boolean',
41         'is_suspended' => 'boolean',
42         'created_at' => 'datetime',
43         'updated_at' => 'datetime',
44     ];
45     
46     // ========== RELATIONSHIPS ==========
47     
48     /**
49      * Get all houses owned by this user.
50      */
51     public function houses()
52     {
53         return $this->hasMany(House::class, 'owner_id');
54     }
55     
56     /**
57      * Get all rental requests made by this user (as renter).
58      */
59     public function requests()
60     {
61         return $this->hasMany(RequestRental::class, 'renter_id');
62     }
63     
64     /**
65      * Get the subscription of this user (if owner).
66      */
67     public function subscription()
68     {
69         return $this->hasOne(Subscription::class, 'owner_id');
70     }
71     
72     /**
73      * Get all payments made by this user.
74      */
75     public function payments()
76     {
77         return $this->hasMany(Payment::class, 'owner_id');
78     }
79     
80     /**
81      * Get all visits scheduled by this user (as renter).
82      */
83     public function visits()
84     {
85         return $this->hasMany(Visit::class, 'renter_id');
86     }
87     
88     /**
89      * Get all agreements of this user (as renter).
90      */
91     public function agreements()
92     {
93         return $this->hasMany(Agreement::class, 'renter_id');
94     }
95     
96     /**
97      * Get all notifications for this user.
98      */
99     public function notifications()
100     {
101         return $this->hasMany(Notification::class, 'user_id');
102     }
103     
104     /**
105      * Get reviews written by this user.
106      */
107     public function reviews()
108     {
109         return $this->hasMany(Review::class, 'renter_id');
110     }
111     
112     // ========== HELPER METHODS ==========
113     
114     /**
115      * Check if user is an owner.
116      */
117     public function isOwner()
118     {
119         return $this->role === 'owner';
120     }
121     
122     /**
123      * Check if user is a renter.
124      */
125     public function isRenter()
126     {
127         return $this->role === 'renter';
128     }
129     
130     /**
131      * Check if user is admin.
132      */
133     public function isAdmin()
134     {
135         return $this->role === 'admin';
136     }
137 
138     /**
139      * Check if user is suspended.
140      */
141     public function isSuspended()
142     {
143         return (bool) $this->is_suspended;
144     }
145     
146     /**
147      * Check if user has active subscription.
148      */
149     public function hasActiveSubscription()
150     {
151         $subscription = $this->subscription;
152         
153         if (!$subscription) {
154             return false;
155         }
156         
157         return $subscription->status === 'active' && $subscription->end_date >= now();
158     }
159     
160     /**
161      * Get user's full profile info.
162      */
163     public function getProfileAttribute()
164     {
165         return [
166             'id' => $this->id,
167             'name' => $this->name,
168             'email' => $this->email,
169             'role' => $this->role,
170             'phone' => $this->phone,
171             'profile_image' => $this->profile_image ? asset('storage/' . $this->profile_image) : null,
172             'is_verified' => $this->is_verified,
173             'joined' => $this->created_at->format('M d, Y')
174         ];
175     }
176 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Models
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: Laravel\Sanctum\HasApiTokens
- Line 6: Imports a dependency used in this file: Illuminate\Database\Eloquent\Factories\HasFactory
- Line 7: Imports a dependency used in this file: Illuminate\Foundation\Auth\User as Authenticatable
- Line 8: Imports a dependency used in this file: Illuminate\Notifications\Notifiable
- Line 9: Blank line for separation.
- Line 10: Defines the User class.
- Line 11: Implements application logic: {
- Line 12: Imports a dependency used in this file: HasApiTokens, HasFactory, Notifiable
- Line 13: Blank line for separation.
- Line 14: Blank line for separation.
- Line 15: Declares a class property: protected $table = 'users';
- Line 16: Blank line for separation.
- Line 17: Blank line for separation.
- Line 18: Declares a class property: protected $primaryKey = 'id';
- Line 19: Blank line for separation.
- Line 20: Blank line for separation.
- Line 21: Blank line for separation.
- Line 22: Declares a class property: protected $fillable = [
- Line 23: Implements application logic: 'name',
- Line 24: Implements application logic: 'email',
- Line 25: Implements application logic: 'password',
- Line 26: Implements application logic: 'role',
- Line 27: Implements application logic: 'phone',
- Line 28: Implements application logic: 'profile_image',
- Line 29: Implements application logic: 'is_verified',
- Line 30: Implements application logic: 'is_suspended'
- Line 31: Implements application logic: ];
- Line 32: Blank line for separation.
- Line 33: Blank line for separation.
- Line 34: Declares a class property: protected $hidden = [
- Line 35: Implements application logic: 'password',
- Line 36: Implements application logic: ];
- Line 37: Blank line for separation.
- Line 38: Blank line for separation.
- Line 39: Declares a class property: protected $casts = [
- Line 40: Implements application logic: 'is_verified' => 'boolean',
- Line 41: Implements application logic: 'is_suspended' => 'boolean',
- Line 42: Implements application logic: 'created_at' => 'datetime',
- Line 43: Implements application logic: 'updated_at' => 'datetime',
- Line 44: Implements application logic: ];
- Line 45: Blank line for separation.
- Line 46: ========== relationships ==========
- Line 47: Blank line for separation.
- Line 48: Implements application logic: /**
- Line 49: Implements application logic: * Get all houses owned by this user.
- Line 50: Implements application logic: */
- Line 51: Defines the houses function.
- Line 52: Implements application logic: {
- Line 53: Returns a value from this function: return $this->hasMany(House::class, 'owner_id');
- Line 54: Implements application logic: }
- Line 55: Blank line for separation.
- Line 56: Implements application logic: /**
- Line 57: Implements application logic: * Get all rental requests made by this user (as renter).
- Line 58: Implements application logic: */
- Line 59: Defines the requests function.
- Line 60: Implements application logic: {
- Line 61: Returns a value from this function: return $this->hasMany(RequestRental::class, 'renter_id');
- Line 62: Implements application logic: }
- Line 63: Blank line for separation.
- Line 64: Implements application logic: /**
- Line 65: Implements application logic: * Get the subscription of this user (if owner).
- Line 66: Implements application logic: */
- Line 67: Defines the subscription function.
- Line 68: Implements application logic: {
- Line 69: Returns a value from this function: return $this->hasOne(Subscription::class, 'owner_id');
- Line 70: Implements application logic: }
- Line 71: Blank line for separation.
- Line 72: Implements application logic: /**
- Line 73: Implements application logic: * Get all payments made by this user.
- Line 74: Implements application logic: */
- Line 75: Defines the payments function.
- Line 76: Implements application logic: {
- Line 77: Returns a value from this function: return $this->hasMany(Payment::class, 'owner_id');
- Line 78: Implements application logic: }
- Line 79: Blank line for separation.
- Line 80: Implements application logic: /**
- Line 81: Implements application logic: * Get all visits scheduled by this user (as renter).
- Line 82: Implements application logic: */
- Line 83: Defines the visits function.
- Line 84: Implements application logic: {
- Line 85: Returns a value from this function: return $this->hasMany(Visit::class, 'renter_id');
- Line 86: Implements application logic: }
- Line 87: Blank line for separation.
- Line 88: Implements application logic: /**
- Line 89: Implements application logic: * Get all agreements of this user (as renter).
- Line 90: Implements application logic: */
- Line 91: Defines the agreements function.
- Line 92: Implements application logic: {
- Line 93: Returns a value from this function: return $this->hasMany(Agreement::class, 'renter_id');
- Line 94: Implements application logic: }
- Line 95: Blank line for separation.
- Line 96: Implements application logic: /**
- Line 97: Implements application logic: * Get all notifications for this user.
- Line 98: Implements application logic: */
- Line 99: Defines the notifications function.
- Line 100: Implements application logic: {
- Line 101: Returns a value from this function: return $this->hasMany(Notification::class, 'user_id');
- Line 102: Implements application logic: }
- Line 103: Blank line for separation.
- Line 104: Implements application logic: /**
- Line 105: Implements application logic: * Get reviews written by this user.
- Line 106: Implements application logic: */
- Line 107: Defines the reviews function.
- Line 108: Implements application logic: {
- Line 109: Returns a value from this function: return $this->hasMany(Review::class, 'renter_id');
- Line 110: Implements application logic: }
- Line 111: Blank line for separation.
- Line 112: ========== helper methods ==========
- Line 113: Blank line for separation.
- Line 114: Implements application logic: /**
- Line 115: Implements application logic: * Check if user is an owner.
- Line 116: Implements application logic: */
- Line 117: Defines the isOwner function.
- Line 118: Implements application logic: {
- Line 119: Returns a value from this function: return $this->role === 'owner';
- Line 120: Implements application logic: }
- Line 121: Blank line for separation.
- Line 122: Implements application logic: /**
- Line 123: Implements application logic: * Check if user is a renter.
- Line 124: Implements application logic: */
- Line 125: Defines the isRenter function.
- Line 126: Implements application logic: {
- Line 127: Returns a value from this function: return $this->role === 'renter';
- Line 128: Implements application logic: }
- Line 129: Blank line for separation.
- Line 130: Implements application logic: /**
- Line 131: Implements application logic: * Check if user is admin.
- Line 132: Implements application logic: */
- Line 133: Defines the isAdmin function.
- Line 134: Implements application logic: {
- Line 135: Returns a value from this function: return $this->role === 'admin';
- Line 136: Implements application logic: }
- Line 137: Blank line for separation.
- Line 138: Implements application logic: /**
- Line 139: Implements application logic: * Check if user is suspended.
- Line 140: Implements application logic: */
- Line 141: Defines the isSuspended function.
- Line 142: Implements application logic: {
- Line 143: Returns a value from this function: return (bool) $this->is_suspended;
- Line 144: Implements application logic: }
- Line 145: Blank line for separation.
- Line 146: Implements application logic: /**
- Line 147: Implements application logic: * Check if user has active subscription.
- Line 148: Implements application logic: */
- Line 149: Defines the hasActiveSubscription function.
- Line 150: Implements application logic: {
- Line 151: Implements application logic: $subscription = $this->subscription;
- Line 152: Blank line for separation.
- Line 153: Adds a conditional branch: if (!$subscription) {
- Line 154: Returns a value from this function: return false;
- Line 155: Implements application logic: }
- Line 156: Blank line for separation.
- Line 157: Returns a value from this function: return $subscription->status === 'active' && $subscription->end_date >= now();
- Line 158: Implements application logic: }
- Line 159: Blank line for separation.
- Line 160: Implements application logic: /**
- Line 161: Implements application logic: * Get user's full profile info.
- Line 162: Implements application logic: */
- Line 163: Defines the getProfileAttribute function.
- Line 164: Implements application logic: {
- Line 165: Returns a configuration array.
- Line 166: Implements application logic: 'id' => $this->id,
- Line 167: Implements application logic: 'name' => $this->name,
- Line 168: Implements application logic: 'email' => $this->email,
- Line 169: Implements application logic: 'role' => $this->role,
- Line 170: Implements application logic: 'phone' => $this->phone,
- Line 171: Implements application logic: 'profile_image' => $this->profile_image ? asset('storage/' . $this->profile_image) : null,
- Line 172: Implements application logic: 'is_verified' => $this->is_verified,
- Line 173: Implements application logic: 'joined' => $this->created_at->format('M d, Y')
- Line 174: Implements application logic: ];
- Line 175: Implements application logic: }
- Line 176: Implements application logic: }
