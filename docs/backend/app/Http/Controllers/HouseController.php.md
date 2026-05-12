# HouseController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\House;
6 use App\Models\HouseImage;
7 use App\Models\Notification;
8 use Illuminate\Http\Request;
9 use Illuminate\Support\Facades\Storage;
10 
11 class HouseController extends Controller
12 {
13     // ========== LIST ALL AVAILABLE HOUSES ==========
14     public function index(Request $request)
15     {
16         $query = House::with('owner', 'images')
17             ->where('is_approved', true)
18             ->where('status', 'available');
19 
20         // Filter by title (Name)
21         if ($request->has('title') && $request->title !== '') {
22             $query->where('title', 'like', '%' . $request->title . '%');
23         }
24 
25         // Filter by price
26         if ($request->has('min_price')) {
27             $query->where('price', '>=', $request->min_price);
28         }
29         if ($request->has('max_price')) {
30             $query->where('price', '<=', $request->max_price);
31         }
32 
33         // Filter by rooms
34         if ($request->has('rooms')) {
35             $query->where('rooms', $request->rooms);
36         }
37 
38         // Filter by location (Kifle Ketema / Kebele)
39         if ($request->has('location')) {
40             $query->where('location', 'like', '%' . $request->location . '%');
41         }
42 
43         // Filter by status
44         if ($request->has('status')) {
45             $query->where('status', $request->status);
46         }
47 
48         // Sort by latest
49         if ($request->has('sort') && $request->sort == 'latest') {
50             $query->latest();
51         }
52 
53         $houses = $query->latest()->paginate(12);
54 
55         return response()->json($houses);
56     }
57 
58     // ========== SHOW SINGLE HOUSE ==========
59     public function show($id)
60     {
61         $house = House::with('owner', 'images', 'reviews.renter')
62             ->findOrFail($id);
63 
64         // Increment view count (optional)
65         // $house->increment('views');
66 
67         return response()->json($house);
68     }
69 
70     // ========== CREATE NEW HOUSE (Owner only, with subscription check) ==========
71     public function store(Request $request)
72     {
73         $user = $request->user();
74 
75         // Check if user is owner
76         if (!$user->isOwner()) {
77             return response()->json([
78                 'message' => 'Only house owners can post houses'
79             ], 403);
80         }
81 
82         // Check subscription
83         if (!$user->hasActiveSubscription()) {
84             return response()->json([
85                 'message' => 'You need an active subscription to post houses. Please subscribe first.'
86             ], 403);
87         }
88 
89         $request->validate([
90             'title' => 'required|string|max:150',
91             'description' => 'required|string',
92             'price' => 'required|numeric|min:0',
93             'location' => 'required|string',
94             'rooms' => 'required|integer|min:1',
95             'bathrooms' => 'required|integer|min:1',
96             'area' => 'nullable|integer|min:1',
97             'type' => 'required|string',
98             'amenities' => 'nullable|array',
99             'availability_date' => 'nullable|date'
100         ]);
101 
102         $house = House::create([
103             'owner_id' => $user->id,
104             'title' => $request->title,
105             'description' => $request->description,
106             'price' => $request->price,
107             'location' => $request->location,
108             'rooms' => $request->rooms,
109             'bathrooms' => $request->bathrooms,
110             'area' => $request->area,
111             'type' => $request->type,
112             'amenities' => $request->amenities,
113             'availability_date' => $request->availability_date,
114             'status' => 'available',
115             'is_approved' => false  // Admin must approve
116         ]);
117 
118         // Notify admin
119         Notification::create([
120             'user_id' => 1, // Admin ID
121             'message' => "New house '{$house->title}' needs approval",
122             'is_read' => false
123         ]);
124 
125         return response()->json([
126             'message' => 'House submitted for approval',
127             'house' => $house
128         ], 201);
129     }
130 
131     // ========== UPDATE HOUSE ==========
132     public function update(Request $request, $id)
133     {
134         $house = House::where('owner_id', $request->user()->id)
135             ->findOrFail($id);
136 
137         $request->validate([
138             'title' => 'sometimes|string|max:150',
139             'description' => 'sometimes|string',
140             'price' => 'sometimes|numeric|min:0',
141             'location' => 'sometimes|string',
142             'rooms' => 'sometimes|integer|min:1',
143             'bathrooms' => 'sometimes|integer|min:1',
144             'area' => 'nullable|integer|min:1',
145             'type' => 'sometimes|string',
146             'amenities' => 'nullable|array',
147             'availability_date' => 'nullable|date',
148             'status' => 'sometimes|in:available,rented'
149         ]);
150 
151         $house->update($request->only([
152             'title', 'description', 'price', 'location', 'rooms', 'status',
153             'bathrooms', 'area', 'type', 'amenities', 'availability_date'
154         ]));
155 
156         return response()->json([
157             'message' => 'House updated',
158             'house' => $house
159         ]);
160     }
161 
162     // ========== DELETE HOUSE ==========
163     public function destroy(Request $request, $id)
164     {
165         $house = House::where('owner_id', $request->user()->id)
166             ->findOrFail($id);
167 
168         $house->delete();
169 
170         return response()->json([
171             'message' => 'House deleted successfully'
172         ]);
173     }
174 
175     // ========== UPLOAD HOUSE IMAGES ==========
176     public function uploadImage(Request $request, $id)
177     {
178         $house = House::where('owner_id', $request->user()->id)
179             ->findOrFail($id);
180 
181         $request->validate([
182             'image' => 'required|image|mimes:jpeg,png,jpg,webp,gif,jfif|max:2048'
183         ]);
184 
185         $path = $request->file('image')->store('houses', 'public');
186 
187         $image = $house->images()->create([
188             'image_path' => $path
189         ]);
190 
191         return response()->json([
192             'message' => 'Image uploaded',
193             'image' => $image
194         ], 201);
195     }
196 
197     // ========== UPLOAD MULTIPLE HOUSE IMAGES ==========
198     public function uploadMultipleImages(Request $request, $id)
199     {
200         $house = House::where('owner_id', $request->user()->id)->findOrFail($id);
201 
202         $request->validate([
203             'images' => 'required|array',
204             'images.*.file' => 'required|image|mimes:jpeg,png,jpg,webp,gif,jfif|max:5120'
205         ]);
206 
207         $uploadedImages = [];
208         foreach ($request->images as $imageData) {
209             $path = $imageData['file']->store('houses', 'public');
210             
211             $image = $house->images()->create([
212                 'image_path' => $path
213             ]);
214             $uploadedImages[] = $image;
215         }
216 
217         return response()->json([
218             'message' => 'Images uploaded successfully',
219             'images' => $uploadedImages
220         ], 201);
221     }
222 
223     // ========== UPLOAD LICENSE / KARTA ==========
224     public function uploadLicense(Request $request, $id)
225     {
226         $house = House::where('owner_id', $request->user()->id)->findOrFail($id);
227 
228         $request->validate([
229             'license_image' => 'required|file|mimes:jpeg,png,jpg,webp,gif,jfif,pdf|max:5120'
230         ]);
231 
232         if ($house->license_image) {
233             Storage::disk('public')->delete($house->license_image);
234         }
235 
236         $path = $request->file('license_image')->store('houses/licenses', 'public');
237         $house->update(['license_image' => $path]);
238 
239         return response()->json([
240             'message' => 'License document uploaded successfully',
241             'house' => $house
242         ]);
243     }
244 
245     // ========== DELETE HOUSE IMAGE ==========
246     public function deleteImage(Request $request, $houseId, $imageId)
247     {
248         $house = House::where('owner_id', $request->user()->id)
249             ->findOrFail($houseId);
250 
251         $image = $house->images()->findOrFail($imageId);
252 
253         Storage::disk('public')->delete($image->image_path);
254         $image->delete();
255 
256         return response()->json([
257             'message' => 'Image deleted'
258         ]);
259     }
260 
261     // ========== GET OWNER'S HOUSES ==========
262     public function myHouses(Request $request)
263     {
264         $houses = House::with('images')
265             ->where('owner_id', $request->user()->id)
266             ->latest()
267             ->paginate(10);
268 
269         return response()->json($houses);
270     }
271 
272     // ========== GET PUBLIC STATS ==========
273     public function stats()
274     {
275         $totalHouses = House::where('is_approved', true)->where('status', 'available')->count();
276         $totalRenters = \App\Models\User::where('role', 'renter')->count();
277         $totalOwners = \App\Models\User::where('role', 'owner')->count();
278         $citiesCovered = House::whereNotNull('location')->select('location')->distinct()->count();
279 
280         return response()->json([
281             'total_houses' => $totalHouses,
282             'total_renters' => $totalRenters,
283             'total_owners' => $totalOwners,
284             'cities_covered' => $citiesCovered,
285         ]);
286     }
287 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\House
- Line 6: Imports a dependency used in this file: App\Models\HouseImage
- Line 7: Imports a dependency used in this file: App\Models\Notification
- Line 8: Imports a dependency used in this file: Illuminate\Http\Request
- Line 9: Imports a dependency used in this file: Illuminate\Support\Facades\Storage
- Line 10: Blank line for separation.
- Line 11: Defines the HouseController class.
- Line 12: Implements application logic: {
- Line 13: ========== list all available houses ==========
- Line 14: Defines the index function.
- Line 15: Implements application logic: {
- Line 16: Implements application logic: $query = House::with('owner', 'images')
- Line 17: Implements application logic: ->where('is_approved', true)
- Line 18: Implements application logic: ->where('status', 'available');
- Line 19: Blank line for separation.
- Line 20: Filter by title (name)
- Line 21: Adds a conditional branch: if ($request->has('title') && $request->title !== '') {
- Line 22: Implements application logic: $query->where('title', 'like', '%' . $request->title . '%');
- Line 23: Implements application logic: }
- Line 24: Blank line for separation.
- Line 25: Filter by price
- Line 26: Adds a conditional branch: if ($request->has('min_price')) {
- Line 27: Implements application logic: $query->where('price', '>=', $request->min_price);
- Line 28: Implements application logic: }
- Line 29: Adds a conditional branch: if ($request->has('max_price')) {
- Line 30: Implements application logic: $query->where('price', '<=', $request->max_price);
- Line 31: Implements application logic: }
- Line 32: Blank line for separation.
- Line 33: Filter by rooms
- Line 34: Adds a conditional branch: if ($request->has('rooms')) {
- Line 35: Implements application logic: $query->where('rooms', $request->rooms);
- Line 36: Implements application logic: }
- Line 37: Blank line for separation.
- Line 38: Filter by location (kifle ketema / kebele)
- Line 39: Adds a conditional branch: if ($request->has('location')) {
- Line 40: Implements application logic: $query->where('location', 'like', '%' . $request->location . '%');
- Line 41: Implements application logic: }
- Line 42: Blank line for separation.
- Line 43: Filter by status
- Line 44: Adds a conditional branch: if ($request->has('status')) {
- Line 45: Implements application logic: $query->where('status', $request->status);
- Line 46: Implements application logic: }
- Line 47: Blank line for separation.
- Line 48: Sort by latest
- Line 49: Adds a conditional branch: if ($request->has('sort') && $request->sort == 'latest') {
- Line 50: Implements application logic: $query->latest();
- Line 51: Implements application logic: }
- Line 52: Blank line for separation.
- Line 53: Implements application logic: $houses = $query->latest()->paginate(12);
- Line 54: Blank line for separation.
- Line 55: Returns a JSON HTTP response to the client.
- Line 56: Implements application logic: }
- Line 57: Blank line for separation.
- Line 58: ========== show single house ==========
- Line 59: Defines the show function.
- Line 60: Implements application logic: {
- Line 61: Implements application logic: $house = House::with('owner', 'images', 'reviews.renter')
- Line 62: Implements application logic: ->findOrFail($id);
- Line 63: Blank line for separation.
- Line 64: Increment view count (optional)
- Line 65: $house->increment('views');
- Line 66: Blank line for separation.
- Line 67: Returns a JSON HTTP response to the client.
- Line 68: Implements application logic: }
- Line 69: Blank line for separation.
- Line 70: ========== create new house (owner only, with subscription check) ==========
- Line 71: Defines the store function.
- Line 72: Implements application logic: {
- Line 73: Implements application logic: $user = $request->user();
- Line 74: Blank line for separation.
- Line 75: Check if user is owner
- Line 76: Adds a conditional branch: if (!$user->isOwner()) {
- Line 77: Returns a JSON HTTP response to the client.
- Line 78: Implements application logic: 'message' => 'Only house owners can post houses'
- Line 79: Implements application logic: ], 403);
- Line 80: Implements application logic: }
- Line 81: Blank line for separation.
- Line 82: Check subscription
- Line 83: Adds a conditional branch: if (!$user->hasActiveSubscription()) {
- Line 84: Returns a JSON HTTP response to the client.
- Line 85: Implements application logic: 'message' => 'You need an active subscription to post houses. Please subscribe first.'
- Line 86: Implements application logic: ], 403);
- Line 87: Implements application logic: }
- Line 88: Blank line for separation.
- Line 89: Implements application logic: $request->validate([
- Line 90: Implements application logic: 'title' => 'required|string|max:150',
- Line 91: Implements application logic: 'description' => 'required|string',
- Line 92: Implements application logic: 'price' => 'required|numeric|min:0',
- Line 93: Implements application logic: 'location' => 'required|string',
- Line 94: Implements application logic: 'rooms' => 'required|integer|min:1',
- Line 95: Implements application logic: 'bathrooms' => 'required|integer|min:1',
- Line 96: Implements application logic: 'area' => 'nullable|integer|min:1',
- Line 97: Implements application logic: 'type' => 'required|string',
- Line 98: Implements application logic: 'amenities' => 'nullable|array',
- Line 99: Implements application logic: 'availability_date' => 'nullable|date'
- Line 100: Implements application logic: ]);
- Line 101: Blank line for separation.
- Line 102: Implements application logic: $house = House::create([
- Line 103: Implements application logic: 'owner_id' => $user->id,
- Line 104: Implements application logic: 'title' => $request->title,
- Line 105: Implements application logic: 'description' => $request->description,
- Line 106: Implements application logic: 'price' => $request->price,
- Line 107: Implements application logic: 'location' => $request->location,
- Line 108: Implements application logic: 'rooms' => $request->rooms,
- Line 109: Implements application logic: 'bathrooms' => $request->bathrooms,
- Line 110: Implements application logic: 'area' => $request->area,
- Line 111: Implements application logic: 'type' => $request->type,
- Line 112: Implements application logic: 'amenities' => $request->amenities,
- Line 113: Implements application logic: 'availability_date' => $request->availability_date,
- Line 114: Implements application logic: 'status' => 'available',
- Line 115: Implements application logic: 'is_approved' => false  // Admin must approve
- Line 116: Implements application logic: ]);
- Line 117: Blank line for separation.
- Line 118: Notify admin
- Line 119: Implements application logic: Notification::create([
- Line 120: Implements application logic: 'user_id' => 1, // Admin ID
- Line 121: Implements application logic: 'message' => "New house '{$house->title}' needs approval",
- Line 122: Implements application logic: 'is_read' => false
- Line 123: Implements application logic: ]);
- Line 124: Blank line for separation.
- Line 125: Returns a JSON HTTP response to the client.
- Line 126: Implements application logic: 'message' => 'House submitted for approval',
- Line 127: Implements application logic: 'house' => $house
- Line 128: Implements application logic: ], 201);
- Line 129: Implements application logic: }
- Line 130: Blank line for separation.
- Line 131: ========== update house ==========
- Line 132: Defines the update function.
- Line 133: Implements application logic: {
- Line 134: Implements application logic: $house = House::where('owner_id', $request->user()->id)
- Line 135: Implements application logic: ->findOrFail($id);
- Line 136: Blank line for separation.
- Line 137: Implements application logic: $request->validate([
- Line 138: Implements application logic: 'title' => 'sometimes|string|max:150',
- Line 139: Implements application logic: 'description' => 'sometimes|string',
- Line 140: Implements application logic: 'price' => 'sometimes|numeric|min:0',
- Line 141: Implements application logic: 'location' => 'sometimes|string',
- Line 142: Implements application logic: 'rooms' => 'sometimes|integer|min:1',
- Line 143: Implements application logic: 'bathrooms' => 'sometimes|integer|min:1',
- Line 144: Implements application logic: 'area' => 'nullable|integer|min:1',
- Line 145: Implements application logic: 'type' => 'sometimes|string',
- Line 146: Implements application logic: 'amenities' => 'nullable|array',
- Line 147: Implements application logic: 'availability_date' => 'nullable|date',
- Line 148: Implements application logic: 'status' => 'sometimes|in:available,rented'
- Line 149: Implements application logic: ]);
- Line 150: Blank line for separation.
- Line 151: Implements application logic: $house->update($request->only([
- Line 152: Implements application logic: 'title', 'description', 'price', 'location', 'rooms', 'status',
- Line 153: Implements application logic: 'bathrooms', 'area', 'type', 'amenities', 'availability_date'
- Line 154: Implements application logic: ]));
- Line 155: Blank line for separation.
- Line 156: Returns a JSON HTTP response to the client.
- Line 157: Implements application logic: 'message' => 'House updated',
- Line 158: Implements application logic: 'house' => $house
- Line 159: Implements application logic: ]);
- Line 160: Implements application logic: }
- Line 161: Blank line for separation.
- Line 162: ========== delete house ==========
- Line 163: Defines the destroy function.
- Line 164: Implements application logic: {
- Line 165: Implements application logic: $house = House::where('owner_id', $request->user()->id)
- Line 166: Implements application logic: ->findOrFail($id);
- Line 167: Blank line for separation.
- Line 168: Implements application logic: $house->delete();
- Line 169: Blank line for separation.
- Line 170: Returns a JSON HTTP response to the client.
- Line 171: Implements application logic: 'message' => 'House deleted successfully'
- Line 172: Implements application logic: ]);
- Line 173: Implements application logic: }
- Line 174: Blank line for separation.
- Line 175: ========== upload house images ==========
- Line 176: Defines the uploadImage function.
- Line 177: Implements application logic: {
- Line 178: Implements application logic: $house = House::where('owner_id', $request->user()->id)
- Line 179: Implements application logic: ->findOrFail($id);
- Line 180: Blank line for separation.
- Line 181: Implements application logic: $request->validate([
- Line 182: Implements application logic: 'image' => 'required|image|mimes:jpeg,png,jpg,webp,gif,jfif|max:2048'
- Line 183: Implements application logic: ]);
- Line 184: Blank line for separation.
- Line 185: Implements application logic: $path = $request->file('image')->store('houses', 'public');
- Line 186: Blank line for separation.
- Line 187: Implements application logic: $image = $house->images()->create([
- Line 188: Implements application logic: 'image_path' => $path
- Line 189: Implements application logic: ]);
- Line 190: Blank line for separation.
- Line 191: Returns a JSON HTTP response to the client.
- Line 192: Implements application logic: 'message' => 'Image uploaded',
- Line 193: Implements application logic: 'image' => $image
- Line 194: Implements application logic: ], 201);
- Line 195: Implements application logic: }
- Line 196: Blank line for separation.
- Line 197: ========== upload multiple house images ==========
- Line 198: Defines the uploadMultipleImages function.
- Line 199: Implements application logic: {
- Line 200: Implements application logic: $house = House::where('owner_id', $request->user()->id)->findOrFail($id);
- Line 201: Blank line for separation.
- Line 202: Implements application logic: $request->validate([
- Line 203: Implements application logic: 'images' => 'required|array',
- Line 204: Implements application logic: 'images.*.file' => 'required|image|mimes:jpeg,png,jpg,webp,gif,jfif|max:5120'
- Line 205: Implements application logic: ]);
- Line 206: Blank line for separation.
- Line 207: Implements application logic: $uploadedImages = [];
- Line 208: Implements application logic: foreach ($request->images as $imageData) {
- Line 209: Implements application logic: $path = $imageData['file']->store('houses', 'public');
- Line 210: Blank line for separation.
- Line 211: Implements application logic: $image = $house->images()->create([
- Line 212: Implements application logic: 'image_path' => $path
- Line 213: Implements application logic: ]);
- Line 214: Implements application logic: $uploadedImages[] = $image;
- Line 215: Implements application logic: }
- Line 216: Blank line for separation.
- Line 217: Returns a JSON HTTP response to the client.
- Line 218: Implements application logic: 'message' => 'Images uploaded successfully',
- Line 219: Implements application logic: 'images' => $uploadedImages
- Line 220: Implements application logic: ], 201);
- Line 221: Implements application logic: }
- Line 222: Blank line for separation.
- Line 223: ========== upload license / karta ==========
- Line 224: Defines the uploadLicense function.
- Line 225: Implements application logic: {
- Line 226: Implements application logic: $house = House::where('owner_id', $request->user()->id)->findOrFail($id);
- Line 227: Blank line for separation.
- Line 228: Implements application logic: $request->validate([
- Line 229: Implements application logic: 'license_image' => 'required|file|mimes:jpeg,png,jpg,webp,gif,jfif,pdf|max:5120'
- Line 230: Implements application logic: ]);
- Line 231: Blank line for separation.
- Line 232: Adds a conditional branch: if ($house->license_image) {
- Line 233: Implements application logic: Storage::disk('public')->delete($house->license_image);
- Line 234: Implements application logic: }
- Line 235: Blank line for separation.
- Line 236: Implements application logic: $path = $request->file('license_image')->store('houses/licenses', 'public');
- Line 237: Implements application logic: $house->update(['license_image' => $path]);
- Line 238: Blank line for separation.
- Line 239: Returns a JSON HTTP response to the client.
- Line 240: Implements application logic: 'message' => 'License document uploaded successfully',
- Line 241: Implements application logic: 'house' => $house
- Line 242: Implements application logic: ]);
- Line 243: Implements application logic: }
- Line 244: Blank line for separation.
- Line 245: ========== delete house image ==========
- Line 246: Defines the deleteImage function.
- Line 247: Implements application logic: {
- Line 248: Implements application logic: $house = House::where('owner_id', $request->user()->id)
- Line 249: Implements application logic: ->findOrFail($houseId);
- Line 250: Blank line for separation.
- Line 251: Implements application logic: $image = $house->images()->findOrFail($imageId);
- Line 252: Blank line for separation.
- Line 253: Implements application logic: Storage::disk('public')->delete($image->image_path);
- Line 254: Implements application logic: $image->delete();
- Line 255: Blank line for separation.
- Line 256: Returns a JSON HTTP response to the client.
- Line 257: Implements application logic: 'message' => 'Image deleted'
- Line 258: Implements application logic: ]);
- Line 259: Implements application logic: }
- Line 260: Blank line for separation.
- Line 261: ========== get owner's houses ==========
- Line 262: Defines the myHouses function.
- Line 263: Implements application logic: {
- Line 264: Implements application logic: $houses = House::with('images')
- Line 265: Implements application logic: ->where('owner_id', $request->user()->id)
- Line 266: Implements application logic: ->latest()
- Line 267: Implements application logic: ->paginate(10);
- Line 268: Blank line for separation.
- Line 269: Returns a JSON HTTP response to the client.
- Line 270: Implements application logic: }
- Line 271: Blank line for separation.
- Line 272: ========== get public stats ==========
- Line 273: Defines the stats function.
- Line 274: Implements application logic: {
- Line 275: Implements application logic: $totalHouses = House::where('is_approved', true)->where('status', 'available')->count();
- Line 276: Implements application logic: $totalRenters = \App\Models\User::where('role', 'renter')->count();
- Line 277: Implements application logic: $totalOwners = \App\Models\User::where('role', 'owner')->count();
- Line 278: Implements application logic: $citiesCovered = House::whereNotNull('location')->select('location')->distinct()->count();
- Line 279: Blank line for separation.
- Line 280: Returns a JSON HTTP response to the client.
- Line 281: Implements application logic: 'total_houses' => $totalHouses,
- Line 282: Implements application logic: 'total_renters' => $totalRenters,
- Line 283: Implements application logic: 'total_owners' => $totalOwners,
- Line 284: Implements application logic: 'cities_covered' => $citiesCovered,
- Line 285: Implements application logic: ]);
- Line 286: Implements application logic: }
- Line 287: Implements application logic: }
