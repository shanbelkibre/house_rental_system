# axios.js

## Code (numbered)

```js
1 import axios from 'axios';
2
3 const api = axios.create({
4   baseURL: 'http://localhost:8000/api',
5   headers: { Accept: 'application/json' },
6   withCredentials: false,
7 });
8
9 // Attach token automatically and handle FormData headers
10 api.interceptors.request.use((config) => {
11   const token = localStorage.getItem('token');
12   if (token) config.headers.Authorization = `Bearer ${token}`;
13
14
15   return config;
16 });
17
18 // Auto-logout on 401
19 api.interceptors.response.use(
20   (res) => res,
21   (err) => {
22     if (err.response?.status === 401) {
23       localStorage.removeItem('token');
24       localStorage.removeItem('user');
25       window.location.href = '/login';
26     }
27     return Promise.reject(err);
28   }
29 );
30
31 export default api;
```

## Line-by-line explanation

- Line 1: Imports Axios so we can create an HTTP client.
- Line 2: Blank line for separation.
- Line 3: Creates a configured Axios instance.
- Line 4: Sets the backend base URL for API requests.
- Line 5: Forces JSON responses by default.
- Line 6: Disables credential cookies for cross-site requests.
- Line 7: Closes the axios.create config.
- Line 8: Blank line for separation.
- Line 9: Comment describing the request interceptor purpose.
- Line 10: Adds a request interceptor before every request.
- Line 11: Reads the auth token from localStorage.
- Line 12: Adds the Authorization header when a token exists.
- Line 13: Blank line kept from the original file.
- Line 14: Blank line kept from the original file.
- Line 15: Returns the updated request config.
- Line 16: Ends the request interceptor.
- Line 17: Blank line for separation.
- Line 18: Comment describing the response interceptor behavior.
- Line 19: Adds a response interceptor for success and error.
- Line 20: Returns the response unchanged when successful.
- Line 21: Starts the error handler.
- Line 22: Checks for 401 unauthorized responses.
- Line 23: Clears the stored token on 401.
- Line 24: Clears the stored user on 401.
- Line 25: Redirects the browser to the login page.
- Line 26: Ends the 401 check.
- Line 27: Re-throws the error so callers can handle it.
- Line 28: Ends the error handler.
- Line 29: Ends the response interceptor.
- Line 30: Blank line for separation.
- Line 31: Exports the configured Axios instance.
