# AuthController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\User;
6 use App\Models\Notification;
7 use Illuminate\Http\Request;
8 use Illuminate\Support\Facades\Hash;
9 use Illuminate\Support\Facades\Auth;
10 use Illuminate\Validation\ValidationException;
11 
12 
13 class AuthController extends Controller
14 {
15     // ========== REGISTER ==========
16     public function register(Request $request)
17     {
18         $request->validate([
19             'name' => 'required|string|max:255',
20             'email' => 'required|string|email|unique:users',
21             'password' => 'required|string|min:6|confirmed',
22             'role' => 'required|in:renter,owner',
23             'phone' => 'nullable|string|max:20'
24         ]);
25 
26         
27         $user = User::create([
28             'name' => $request->name,
29             'email' => $request->email,
30             'password' => Hash::make($request->password),
31             'role' => $request->role,
32             'phone' => $request->phone,
33             'profile_image' => null,
34             'is_verified' => false
35         ]);
36 
37         $token = $user->createToken('auth_token')->plainTextToken;
38 
39         // Welcome notification
40         Notification::create([
41             'user_id' => $user->id,
42             'message' => 'Welcome to House Rental System! Please complete your profile.',
43             'is_read' => false
44         ]);
45 
46         return response()->json([
47             'message' => 'Registration successful',
48             'user' => $user,
49             'token' => $token
50         ], 201);
51     }
52 
53     // ========== LOGIN ==========
54     public function login(Request $request)
55     {
56         $request->validate([
57             'email' => 'required|email',
58             'password' => 'required'
59         ]);
60 
61         $user = User::where('email', $request->email)->first();
62 
63         if ($user && $user->isSuspended()) {
64             return response()->json([
65                 'message' => 'Your account is suspended. Please contact support.'
66             ], 403);
67         }
68 
69         if (!$user || !Hash::check($request->password, $user->password)) {
70             throw ValidationException::withMessages([
71                 'email' => ['Invalid credentials']
72             ]);
73         }
74 
75         // Revoke old tokens
76         $user->tokens()->delete();
77 
78         $token = $user->createToken('auth_token')->plainTextToken;
79 
80         return response()->json([
81             'message' => 'Login successful',
82             'user' => $user,
83             'token' => $token
84         ]);
85     }
86 
87     // ========== LOGOUT ==========
88     public function logout(Request $request)
89     {
90         $request->user()->currentAccessToken()->delete();
91 
92         return response()->json([
93             'message' => 'Logged out successfully'
94         ]);
95     }
96 
97     // ========== GET CURRENT USER ==========
98     public function me(Request $request)
99     {
100         return response()->json($request->user());
101     }
102 
103     // ========== UPDATE PROFILE ==========
104     public function updateProfile(Request $request)
105     {
106         $user = $request->user();
107 
108         $request->validate([
109             'name' => 'sometimes|string|max:255',
110             'phone' => 'sometimes|string|max:20',
111             'profile_image' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048'
112         ]);
113 
114         if ($request->has('name')) {
115             $user->name = $request->name;
116         }
117 
118         if ($request->has('phone')) {
119             $user->phone = $request->phone;
120         }
121 
122         if ($request->hasFile('profile_image')) {
123             $path = $request->file('profile_image')->store('profiles', 'public');
124             $user->profile_image = $path;
125         }
126 
127         $user->save();
128 
129         return response()->json([
130             'message' => 'Profile updated',
131             'user' => $user
132         ]);
133     }
134 
135     // ========== CHANGE PASSWORD ==========
136     public function changePassword(Request $request)
137     {
138         $request->validate([
139             'current_password' => 'required',
140             'new_password' => 'required|min:6|confirmed'
141         ]);
142 
143         $user = $request->user();
144 
145         if (!Hash::check($request->current_password, $user->password)) {
146             return response()->json([
147                 'message' => 'Current password is incorrect'
148             ], 400);
149         }
150 
151         $user->password = Hash::make($request->new_password);
152         $user->save();
153 
154         return response()->json([
155             'message' => 'Password changed successfully'
156         ]);
157     }
158 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\User
- Line 6: Imports a dependency used in this file: App\Models\Notification
- Line 7: Imports a dependency used in this file: Illuminate\Http\Request
- Line 8: Imports a dependency used in this file: Illuminate\Support\Facades\Hash
- Line 9: Imports a dependency used in this file: Illuminate\Support\Facades\Auth
- Line 10: Imports a dependency used in this file: Illuminate\Validation\ValidationException
- Line 11: Blank line for separation.
- Line 12: Blank line for separation.
- Line 13: Defines the AuthController class.
- Line 14: Implements application logic: {
- Line 15: ========== register ==========
- Line 16: Defines the register function.
- Line 17: Implements application logic: {
- Line 18: Implements application logic: $request->validate([
- Line 19: Implements application logic: 'name' => 'required|string|max:255',
- Line 20: Implements application logic: 'email' => 'required|string|email|unique:users',
- Line 21: Implements application logic: 'password' => 'required|string|min:6|confirmed',
- Line 22: Implements application logic: 'role' => 'required|in:renter,owner',
- Line 23: Implements application logic: 'phone' => 'nullable|string|max:20'
- Line 24: Implements application logic: ]);
- Line 25: Blank line for separation.
- Line 26: Blank line for separation.
- Line 27: Implements application logic: $user = User::create([
- Line 28: Implements application logic: 'name' => $request->name,
- Line 29: Implements application logic: 'email' => $request->email,
- Line 30: Implements application logic: 'password' => Hash::make($request->password),
- Line 31: Implements application logic: 'role' => $request->role,
- Line 32: Implements application logic: 'phone' => $request->phone,
- Line 33: Implements application logic: 'profile_image' => null,
- Line 34: Implements application logic: 'is_verified' => false
- Line 35: Implements application logic: ]);
- Line 36: Blank line for separation.
- Line 37: Implements application logic: $token = $user->createToken('auth_token')->plainTextToken;
- Line 38: Blank line for separation.
- Line 39: Welcome notification
- Line 40: Implements application logic: Notification::create([
- Line 41: Implements application logic: 'user_id' => $user->id,
- Line 42: Implements application logic: 'message' => 'Welcome to House Rental System! Please complete your profile.',
- Line 43: Implements application logic: 'is_read' => false
- Line 44: Implements application logic: ]);
- Line 45: Blank line for separation.
- Line 46: Returns a JSON HTTP response to the client.
- Line 47: Implements application logic: 'message' => 'Registration successful',
- Line 48: Implements application logic: 'user' => $user,
- Line 49: Implements application logic: 'token' => $token
- Line 50: Implements application logic: ], 201);
- Line 51: Implements application logic: }
- Line 52: Blank line for separation.
- Line 53: ========== login ==========
- Line 54: Defines the login function.
- Line 55: Implements application logic: {
- Line 56: Implements application logic: $request->validate([
- Line 57: Implements application logic: 'email' => 'required|email',
- Line 58: Implements application logic: 'password' => 'required'
- Line 59: Implements application logic: ]);
- Line 60: Blank line for separation.
- Line 61: Implements application logic: $user = User::where('email', $request->email)->first();
- Line 62: Blank line for separation.
- Line 63: Adds a conditional branch: if ($user && $user->isSuspended()) {
- Line 64: Returns a JSON HTTP response to the client.
- Line 65: Implements application logic: 'message' => 'Your account is suspended. Please contact support.'
- Line 66: Implements application logic: ], 403);
- Line 67: Implements application logic: }
- Line 68: Blank line for separation.
- Line 69: Adds a conditional branch: if (!$user || !Hash::check($request->password, $user->password)) {
- Line 70: Implements application logic: throw ValidationException::withMessages([
- Line 71: Implements application logic: 'email' => ['Invalid credentials']
- Line 72: Implements application logic: ]);
- Line 73: Implements application logic: }
- Line 74: Blank line for separation.
- Line 75: Revoke old tokens
- Line 76: Implements application logic: $user->tokens()->delete();
- Line 77: Blank line for separation.
- Line 78: Implements application logic: $token = $user->createToken('auth_token')->plainTextToken;
- Line 79: Blank line for separation.
- Line 80: Returns a JSON HTTP response to the client.
- Line 81: Implements application logic: 'message' => 'Login successful',
- Line 82: Implements application logic: 'user' => $user,
- Line 83: Implements application logic: 'token' => $token
- Line 84: Implements application logic: ]);
- Line 85: Implements application logic: }
- Line 86: Blank line for separation.
- Line 87: ========== logout ==========
- Line 88: Defines the logout function.
- Line 89: Implements application logic: {
- Line 90: Implements application logic: $request->user()->currentAccessToken()->delete();
- Line 91: Blank line for separation.
- Line 92: Returns a JSON HTTP response to the client.
- Line 93: Implements application logic: 'message' => 'Logged out successfully'
- Line 94: Implements application logic: ]);
- Line 95: Implements application logic: }
- Line 96: Blank line for separation.
- Line 97: ========== get current user ==========
- Line 98: Defines the me function.
- Line 99: Implements application logic: {
- Line 100: Returns a JSON HTTP response to the client.
- Line 101: Implements application logic: }
- Line 102: Blank line for separation.
- Line 103: ========== update profile ==========
- Line 104: Defines the updateProfile function.
- Line 105: Implements application logic: {
- Line 106: Implements application logic: $user = $request->user();
- Line 107: Blank line for separation.
- Line 108: Implements application logic: $request->validate([
- Line 109: Implements application logic: 'name' => 'sometimes|string|max:255',
- Line 110: Implements application logic: 'phone' => 'sometimes|string|max:20',
- Line 111: Implements application logic: 'profile_image' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048'
- Line 112: Implements application logic: ]);
- Line 113: Blank line for separation.
- Line 114: Adds a conditional branch: if ($request->has('name')) {
- Line 115: Implements application logic: $user->name = $request->name;
- Line 116: Implements application logic: }
- Line 117: Blank line for separation.
- Line 118: Adds a conditional branch: if ($request->has('phone')) {
- Line 119: Implements application logic: $user->phone = $request->phone;
- Line 120: Implements application logic: }
- Line 121: Blank line for separation.
- Line 122: Adds a conditional branch: if ($request->hasFile('profile_image')) {
- Line 123: Implements application logic: $path = $request->file('profile_image')->store('profiles', 'public');
- Line 124: Implements application logic: $user->profile_image = $path;
- Line 125: Implements application logic: }
- Line 126: Blank line for separation.
- Line 127: Implements application logic: $user->save();
- Line 128: Blank line for separation.
- Line 129: Returns a JSON HTTP response to the client.
- Line 130: Implements application logic: 'message' => 'Profile updated',
- Line 131: Implements application logic: 'user' => $user
- Line 132: Implements application logic: ]);
- Line 133: Implements application logic: }
- Line 134: Blank line for separation.
- Line 135: ========== change password ==========
- Line 136: Defines the changePassword function.
- Line 137: Implements application logic: {
- Line 138: Implements application logic: $request->validate([
- Line 139: Implements application logic: 'current_password' => 'required',
- Line 140: Implements application logic: 'new_password' => 'required|min:6|confirmed'
- Line 141: Implements application logic: ]);
- Line 142: Blank line for separation.
- Line 143: Implements application logic: $user = $request->user();
- Line 144: Blank line for separation.
- Line 145: Adds a conditional branch: if (!Hash::check($request->current_password, $user->password)) {
- Line 146: Returns a JSON HTTP response to the client.
- Line 147: Implements application logic: 'message' => 'Current password is incorrect'
- Line 148: Implements application logic: ], 400);
- Line 149: Implements application logic: }
- Line 150: Blank line for separation.
- Line 151: Implements application logic: $user->password = Hash::make($request->new_password);
- Line 152: Implements application logic: $user->save();
- Line 153: Blank line for separation.
- Line 154: Returns a JSON HTTP response to the client.
- Line 155: Implements application logic: 'message' => 'Password changed successfully'
- Line 156: Implements application logic: ]);
- Line 157: Implements application logic: }
- Line 158: Implements application logic: }
