# AuthContext.jsx

## Code (numbered)

```jsx
1 import { createContext, useContext, useState, useEffect } from 'react';
2 import api from '../api/axios';
3
4 const AuthContext = createContext(null);
5
6 export function AuthProvider({ children }) {
7   const [user, setUser]     = useState(() => {
8     try { return JSON.parse(localStorage.getItem('user')); } catch { return null; }
9   });
10  const [loading, setLoading] = useState(false);
11
12  const login = async (email, password) => {
13    setLoading(true);
14    try {
15      const { data } = await api.post('/login', { email, password });
16      localStorage.setItem('token', data.token);
17      localStorage.setItem('user', JSON.stringify(data.user));
18      setUser(data.user);
19      return data;
20    } finally {
21      setLoading(false);
22    }
23  };
24
25  const register = async (payload) => {
26    setLoading(true);
27    try {
28      const { data } = await api.post('/register', payload);
29      localStorage.setItem('token', data.token);
30      localStorage.setItem('user', JSON.stringify(data.user));
31      setUser(data.user);
32      return data;
33    } finally {
34      setLoading(false);
35    }
36  };
37
38  const logout = async () => {
39    try { await api.post('/logout'); } catch {}
40    localStorage.removeItem('token');
41    localStorage.removeItem('user');
42    setUser(null);
43  };
44
45  const refreshUser = async () => {
46    try {
47      const { data } = await api.get('/me');
48      localStorage.setItem('user', JSON.stringify(data));
49      setUser(data);
50    } catch {}
51  };
52
53  return (
54    <AuthContext.Provider value={{ user, loading, login, register, logout, refreshUser }}>
55      {children}
56    </AuthContext.Provider>
57  );
58 }
59
60 export const useAuth = () => useContext(AuthContext);
```

## Line-by-line explanation

- Line 1: Imports React context and state hooks used to store auth data.
- Line 2: Imports the shared Axios client for API calls.
- Line 3: Blank line for separation.
- Line 4: Creates a context object to share auth state.
- Line 5: Blank line for separation.
- Line 6: Exports the provider component that wraps the app.
- Line 7: Initializes user state by reading localStorage on first load.
- Line 8: Parses stored user JSON safely or returns null if invalid.
- Line 9: Closes the user state initializer.
- Line 10: Tracks loading state for auth actions.
- Line 11: Blank line for separation.
- Line 12: Defines the login function.
- Line 13: Sets loading true before the API call.
- Line 14: Starts a try block so loading resets in finally.
- Line 15: Calls the backend login endpoint.
- Line 16: Saves the auth token to localStorage.
- Line 17: Saves the user payload to localStorage.
- Line 18: Updates the user state in memory.
- Line 19: Returns the response data for callers.
- Line 20: Begins the finally block.
- Line 21: Sets loading false after the request.
- Line 22: Ends finally.
- Line 23: Ends the login function.
- Line 24: Blank line for separation.
- Line 25: Defines the register function.
- Line 26: Sets loading true before the API call.
- Line 27: Starts a try block.
- Line 28: Calls the backend register endpoint.
- Line 29: Saves the auth token to localStorage.
- Line 30: Saves the user payload to localStorage.
- Line 31: Updates the user state in memory.
- Line 32: Returns the response data for callers.
- Line 33: Begins the finally block.
- Line 34: Sets loading false after the request.
- Line 35: Ends finally.
- Line 36: Ends the register function.
- Line 37: Blank line for separation.
- Line 38: Defines the logout function.
- Line 39: Calls the backend logout endpoint and ignores errors.
- Line 40: Removes the token from localStorage.
- Line 41: Removes the user from localStorage.
- Line 42: Clears the in-memory user state.
- Line 43: Ends the logout function.
- Line 44: Blank line for separation.
- Line 45: Defines a helper to refresh user profile data.
- Line 46: Starts a try block to handle errors silently.
- Line 47: Calls the backend /me endpoint.
- Line 48: Updates localStorage with the fresh user data.
- Line 49: Updates the in-memory user state.
- Line 50: Ignores errors for refresh.
- Line 51: Ends refreshUser.
- Line 52: Blank line for separation.
- Line 53: Starts the provider render.
- Line 54: Supplies auth state and actions to all descendants.
- Line 55: Renders children inside the provider.
- Line 56: Closes the provider.
- Line 57: Ends the provider render.
- Line 58: Ends AuthProvider.
- Line 59: Blank line for separation.
- Line 60: Exports a convenience hook to read the auth context.
