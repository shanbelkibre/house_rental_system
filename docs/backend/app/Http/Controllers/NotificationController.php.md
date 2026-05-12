# NotificationController.php

## Code (numbered)

```php
1 <?php
2 
3 namespace App\Http\Controllers;
4 
5 use App\Models\Notification;
6 use Illuminate\Http\Request;
7 
8 class NotificationController extends Controller
9 {
10     // ========== GET MY NOTIFICATIONS ==========
11     public function index(Request $request)
12     {
13         $notifications = Notification::where('user_id', $request->user()->id)
14             ->latest()
15             ->paginate(20);
16 
17         return response()->json($notifications);
18     }
19 
20     // ========== GET UNREAD COUNT ==========
21     public function unreadCount(Request $request)
22     {
23         $count = Notification::where('user_id', $request->user()->id)
24             ->where('is_read', false)
25             ->count();
26 
27         return response()->json(['unread_count' => $count]);
28     }
29 
30     // ========== MARK AS READ ==========
31     public function markAsRead(Request $request, $id)
32     {
33         $notification = Notification::where('user_id', $request->user()->id)
34             ->findOrFail($id);
35 
36         $notification->update(['is_read' => true]);
37 
38         return response()->json(['message' => 'Marked as read']);
39     }
40 
41     // ========== MARK ALL AS READ ==========
42     public function markAllAsRead(Request $request)
43     {
44         Notification::where('user_id', $request->user()->id)
45             ->where('is_read', false)
46             ->update(['is_read' => true]);
47 
48         return response()->json(['message' => 'All notifications marked as read']);
49     }
50 
51     // ========== DELETE NOTIFICATION ==========
52     public function destroy(Request $request, $id)
53     {
54         $notification = Notification::where('user_id', $request->user()->id)
55             ->findOrFail($id);
56 
57         $notification->delete();
58 
59         return response()->json(['message' => 'Notification deleted']);
60     }
61 }
```

## Line-by-line explanation

- Line 1: Starts the PHP file.
- Line 2: Blank line for separation.
- Line 3: Declares the namespace for this file: App\Http\Controllers
- Line 4: Blank line for separation.
- Line 5: Imports a dependency used in this file: App\Models\Notification
- Line 6: Imports a dependency used in this file: Illuminate\Http\Request
- Line 7: Blank line for separation.
- Line 8: Defines the NotificationController class.
- Line 9: Implements application logic: {
- Line 10: ========== get my notifications ==========
- Line 11: Defines the index function.
- Line 12: Implements application logic: {
- Line 13: Implements application logic: $notifications = Notification::where('user_id', $request->user()->id)
- Line 14: Implements application logic: ->latest()
- Line 15: Implements application logic: ->paginate(20);
- Line 16: Blank line for separation.
- Line 17: Returns a JSON HTTP response to the client.
- Line 18: Implements application logic: }
- Line 19: Blank line for separation.
- Line 20: ========== get unread count ==========
- Line 21: Defines the unreadCount function.
- Line 22: Implements application logic: {
- Line 23: Implements application logic: $count = Notification::where('user_id', $request->user()->id)
- Line 24: Implements application logic: ->where('is_read', false)
- Line 25: Implements application logic: ->count();
- Line 26: Blank line for separation.
- Line 27: Returns a JSON HTTP response to the client.
- Line 28: Implements application logic: }
- Line 29: Blank line for separation.
- Line 30: ========== mark as read ==========
- Line 31: Defines the markAsRead function.
- Line 32: Implements application logic: {
- Line 33: Implements application logic: $notification = Notification::where('user_id', $request->user()->id)
- Line 34: Implements application logic: ->findOrFail($id);
- Line 35: Blank line for separation.
- Line 36: Implements application logic: $notification->update(['is_read' => true]);
- Line 37: Blank line for separation.
- Line 38: Returns a JSON HTTP response to the client.
- Line 39: Implements application logic: }
- Line 40: Blank line for separation.
- Line 41: ========== mark all as read ==========
- Line 42: Defines the markAllAsRead function.
- Line 43: Implements application logic: {
- Line 44: Implements application logic: Notification::where('user_id', $request->user()->id)
- Line 45: Implements application logic: ->where('is_read', false)
- Line 46: Implements application logic: ->update(['is_read' => true]);
- Line 47: Blank line for separation.
- Line 48: Returns a JSON HTTP response to the client.
- Line 49: Implements application logic: }
- Line 50: Blank line for separation.
- Line 51: ========== delete notification ==========
- Line 52: Defines the destroy function.
- Line 53: Implements application logic: {
- Line 54: Implements application logic: $notification = Notification::where('user_id', $request->user()->id)
- Line 55: Implements application logic: ->findOrFail($id);
- Line 56: Blank line for separation.
- Line 57: Implements application logic: $notification->delete();
- Line 58: Blank line for separation.
- Line 59: Returns a JSON HTTP response to the client.
- Line 60: Implements application logic: }
- Line 61: Implements application logic: }
