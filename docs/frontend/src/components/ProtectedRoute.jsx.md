# ProtectedRoute.jsx

## Code (numbered)

```jsx
     1	import { Navigate, Outlet } from "react-router-dom";
     2	import { useAuth } from "../context/AuthContext";
     3	
     4	export default function ProtectedRoute({ roles = [] }) {
     5	  const { user } = useAuth();
     6	
     7	  if (!user) return <Navigate to="/login" replace />;
     8	  if (roles.length > 0 && !roles.includes(user.role))
     9	    return <Navigate to="/" replace />;
    10	
    11	  return <Outlet />;
    12	}
```

## Line-by-line explanation

- Line 1: import { Navigate, Outlet } from "react-router-dom";
- Line 2: import { useAuth } from "../context/AuthContext";
- Line 3: 
- Line 4: export default function ProtectedRoute({ roles = [] }) {
- Line 5:   const { user } = useAuth();
- Line 6: 
- Line 7:   if (!user) return <Navigate to="/login" replace />;
- Line 8:   if (roles.length > 0 && !roles.includes(user.role))
- Line 9:     return <Navigate to="/" replace />;
- Line 10: 
- Line 11:   return <Outlet />;
- Line 12: }

