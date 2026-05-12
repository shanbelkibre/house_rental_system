# LoginPage.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import { Link, useNavigate } from "react-router-dom";
     3	import { useAuth } from "../context/AuthContext";
     4	import { Input, Button, Alert } from "../components/UI";
     5	
     6	export default function LoginPage() {
     7	  const { login, loading } = useAuth();
     8	  const navigate = useNavigate();
     9	  const [form, setForm] = useState({ email: "", password: "" });
    10	  const [error, setError] = useState("");
    11	
    12	  const handleSubmit = async (e) => {
    13	    e.preventDefault();
    14	    setError("");
    15	    try {
    16	      const data = await login(form.email, form.password);
    17	      if (data.user.role === "admin") navigate("/admin");
    18	      else navigate("/");
    19	    } catch (err) {
    20	      const msgs = err.response?.data?.errors;
    21	      if (msgs) setError(Object.values(msgs).flat().join(" "));
    22	      else setError(err.response?.data?.message || "Login failed");
    23	    }
    24	  };
    25	
    26	  return (
    27	    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900 flex items-center justify-center py-16 px-4 md:py-24 transition-colors duration-300">
    28	      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-transparent dark:border-white/10 w-full max-w-md p-8 space-y-6 transition-colors duration-300">
    29	        <div className="text-center space-y-1">
    30	          <div className="text-4xl">🏠</div>
    31	          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome back</h1>
    32	          <p className="text-sm text-gray-500 dark:text-gray-400">Sign in to your account</p>
    33	        </div>
    34	
    35	        <Alert type="error" message={error} />
    36	
    37	        <form onSubmit={handleSubmit} className="space-y-4">
    38	          <Input
    39	            label="Email"
    40	            type="email"
    41	            placeholder="you@example.com"
    42	            value={form.email}
    43	            onChange={(e) => setForm({ ...form, email: e.target.value })}
    44	            required
    45	          />
    46	          <Input
    47	            label="Password"
    48	            type="password"
    49	            placeholder="••••••••"
    50	            value={form.password}
    51	            onChange={(e) => setForm({ ...form, password: e.target.value })}
    52	            required
    53	          />
    54	          <Button type="submit" loading={loading} className="w-full">
    55	            Sign In
    56	          </Button>
    57	        </form>
    58	
    59	        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
    60	          Don't have an account?{" "}
    61	          <Link
    62	            to="/register"
    63	            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
    64	          >
    65	            Register
    66	          </Link>
    67	        </p>
    68	      </div>
    69	    </div>
    70	  );
    71	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import { Link, useNavigate } from "react-router-dom";
- Line 3: import { useAuth } from "../context/AuthContext";
- Line 4: import { Input, Button, Alert } from "../components/UI";
- Line 5: 
- Line 6: export default function LoginPage() {
- Line 7:   const { login, loading } = useAuth();
- Line 8:   const navigate = useNavigate();
- Line 9:   const [form, setForm] = useState({ email: "", password: "" });
- Line 10:   const [error, setError] = useState("");
- Line 11: 
- Line 12:   const handleSubmit = async (e) => {
- Line 13:     e.preventDefault();
- Line 14:     setError("");
- Line 15:     try {
- Line 16:       const data = await login(form.email, form.password);
- Line 17:       if (data.user.role === "admin") navigate("/admin");
- Line 18:       else navigate("/");
- Line 19:     } catch (err) {
- Line 20:       const msgs = err.response?.data?.errors;
- Line 21:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 22:       else setError(err.response?.data?.message || "Login failed");
- Line 23:     }
- Line 24:   };
- Line 25: 
- Line 26:   return (
- Line 27:     <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900 flex items-center justify-center py-16 px-4 md:py-24 transition-colors duration-300">
- Line 28:       <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-transparent dark:border-white/10 w-full max-w-md p-8 space-y-6 transition-colors duration-300">
- Line 29:         <div className="text-center space-y-1">
- Line 30:           <div className="text-4xl">🏠</div>
- Line 31:           <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome back</h1>
- Line 32:           <p className="text-sm text-gray-500 dark:text-gray-400">Sign in to your account</p>
- Line 33:         </div>
- Line 34: 
- Line 35:         <Alert type="error" message={error} />
- Line 36: 
- Line 37:         <form onSubmit={handleSubmit} className="space-y-4">
- Line 38:           <Input
- Line 39:             label="Email"
- Line 40:             type="email"
- Line 41:             placeholder="you@example.com"
- Line 42:             value={form.email}
- Line 43:             onChange={(e) => setForm({ ...form, email: e.target.value })}
- Line 44:             required
- Line 45:           />
- Line 46:           <Input
- Line 47:             label="Password"
- Line 48:             type="password"
- Line 49:             placeholder="••••••••"
- Line 50:             value={form.password}
- Line 51:             onChange={(e) => setForm({ ...form, password: e.target.value })}
- Line 52:             required
- Line 53:           />
- Line 54:           <Button type="submit" loading={loading} className="w-full">
- Line 55:             Sign In
- Line 56:           </Button>
- Line 57:         </form>
- Line 58: 
- Line 59:         <p className="text-center text-sm text-gray-500 dark:text-gray-400">
- Line 60:           Don't have an account?{" "}
- Line 61:           <Link
- Line 62:             to="/register"
- Line 63:             className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
- Line 64:           >
- Line 65:             Register
- Line 66:           </Link>
- Line 67:         </p>
- Line 68:       </div>
- Line 69:     </div>
- Line 70:   );
- Line 71: }

