# media.js

## Code (numbered)

```js
1 import api from "../api/axios";
2
3 const DEFAULT_BACKEND_ORIGIN = "http://localhost:8000";
4
5 function resolveBackendOrigin() {
6   const baseURL = api?.defaults?.baseURL;
7   if (!baseURL || typeof baseURL !== "string") return DEFAULT_BACKEND_ORIGIN;
8
9   try {
10    return new URL(baseURL).origin;
11  } catch {
12    return DEFAULT_BACKEND_ORIGIN;
13  }
14 }
15
16 const BACKEND_ORIGIN = resolveBackendOrigin();
17
18 export function toStorageUrl(pathOrUrl) {
19  if (!pathOrUrl) return null;
20  if (typeof pathOrUrl !== "string") return null;
21
22  // Already a full URL or data/blob URI
23  if (/^(https?:\/\/|data:|blob:)/i.test(pathOrUrl)) return pathOrUrl;
24
25  const trimmed = pathOrUrl.replace(/^\/+/, "");
26
27  // Already contains storage prefix
28  if (trimmed.startsWith("storage/")) {
29    return `${BACKEND_ORIGIN}/${trimmed}`;
30  }
31
32  if (trimmed.startsWith("public/storage/")) {
33    return `${BACKEND_ORIGIN}/${trimmed.replace(/^public\//, "")}`;
34  }
35
36  return `${BACKEND_ORIGIN}/storage/${trimmed}`;
37 }
```

## Line-by-line explanation

- Line 1: Imports the Axios instance to read its baseURL.
- Line 2: Blank line for separation.
- Line 3: Defines a fallback backend origin.
- Line 4: Blank line for separation.
- Line 5: Declares a helper to resolve the backend origin.
- Line 6: Reads baseURL from the Axios defaults.
- Line 7: Returns the fallback if baseURL is missing or invalid.
- Line 8: Blank line for separation.
- Line 9: Starts a try block to parse the URL.
- Line 10: Returns the origin portion of the baseURL.
- Line 11: Catches invalid URL parsing.
- Line 12: Returns the fallback on error.
- Line 13: Ends the try/catch block.
- Line 14: Ends the helper function.
- Line 15: Blank line for separation.
- Line 16: Stores the resolved backend origin.
- Line 17: Blank line for separation.
- Line 18: Exports a helper to build storage URLs.
- Line 19: Returns null if no path is given.
- Line 20: Returns null if the input is not a string.
- Line 21: Blank line for separation.
- Line 22: Comment describing absolute URL handling.
- Line 23: Returns the input if it is already a full URL or data/blob URI.
- Line 24: Blank line for separation.
- Line 25: Removes leading slashes for consistent path handling.
- Line 26: Blank line for separation.
- Line 27: Comment for storage prefix handling.
- Line 28: Checks if the path already starts with storage/.
- Line 29: Prepends the backend origin.
- Line 30: Ends the storage prefix branch.
- Line 31: Blank line for separation.
- Line 32: Checks for public/storage/ paths.
- Line 33: Strips public/ and prepends the backend origin.
- Line 34: Ends the public/storage branch.
- Line 35: Blank line for separation.
- Line 36: Falls back to /storage/ for generic paths.
- Line 37: Ends the toStorageUrl function.
