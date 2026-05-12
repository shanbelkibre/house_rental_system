# RegisterPage.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import { Link, useNavigate } from "react-router-dom";
     3	import { useAuth } from "../context/AuthContext";
     4	import { Input, Button, Alert, Select } from "../components/UI";
     5	
     6	export default function RegisterPage() {
     7	  
     8	  const { register, loading } = useAuth();
     9	
    10	  const navigate = useNavigate();
    11	
    12	  const [form, setForm] = useState({
    13	
    14	    name: "",
    15	    email: "",
    16	    password: "",
    17	    password_confirmation: "",
    18	    role: "renter",
    19	    phone: "",
    20	  });
    21	
    22	  const [error, setError] = useState("");
    23	
    24	  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    25	
    26	  const handleSubmit = async (e) => {
    27	    e.preventDefault();
    28	    setError("");
    29	    try {
    30	      await register(form);
    31	      navigate("/");
    32	    } catch (err) {
    33	      const msgs = err.response?.data?.errors;
    34	      if (msgs) setError(Object.values(msgs).flat().join(" "));
    35	      else setError(err.response?.data?.message || "Registration failed");
    36	    }
    37	  };
    38	
    39	
    40	  return (
    41	    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
    42	      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-transparent dark:border-white/10 w-full max-w-md p-8 space-y-6 transition-colors duration-300">
    43	        <div className="text-center space-y-1">
    44	          <div className="text-4xl">🏠</div>
    45	          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Create account</h1>
    46	          <p className="text-sm text-gray-500 dark:text-gray-400">
    47	            Join the House Rental platform
    48	          </p>
    49	        </div>
    50	
    51	        <Alert type="error" message={error} />
    52	
    53	        <form onSubmit={handleSubmit} className="space-y-4">
    54	          <Input
    55	            label="Full Name"
    56	            placeholder="Abebe Kebede"
    57	            value={form.name}
    58	            onChange={set("name")}
    59	            required
    60	          />
    61	          <Input
    62	            label="Email"
    63	            type="email"
    64	            placeholder="you@example.com"
    65	            value={form.email}
    66	            onChange={set("email")}
    67	            required
    68	          />
    69	          <Input
    70	            label="Phone (optional)"
    71	            placeholder="+251 9..."
    72	            value={form.phone}
    73	            onChange={set("phone")}
    74	          />
    75	          <Input
    76	            label="Password"
    77	            type="password"
    78	            placeholder="Min 6 characters"
    79	            value={form.password}
    80	            onChange={set("password")}
    81	            required
    82	          />
    83	          <Input
    84	            label="Confirm Password"
    85	            type="password"
    86	            placeholder="Repeat password"
    87	            value={form.password_confirmation}
    88	            onChange={set("password_confirmation")}
    89	            required
    90	          />
    91	
    92	          <Select label="I am a..." value={form.role} onChange={set("role")}>
    93	            <option value="renter">Renter – I want to rent a house</option>
    94	            <option value="owner">Owner – I want to list my house</option>
    95	          </Select>
    96	
    97	          <Button type="submit" loading={loading} className="w-full">
    98	            Create Account
    99	          </Button>
   100	        </form>
   101	
   102	        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
   103	          Already have an account?{" "}
   104	          <Link
   105	            to="/login"
   106	            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
   107	          >
   108	            Sign in
   109	          </Link>
   110	        </p>
   111	      </div>
   112	    </div>
   113	  );
   114	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import { Link, useNavigate } from "react-router-dom";
- Line 3: import { useAuth } from "../context/AuthContext";
- Line 4: import { Input, Button, Alert, Select } from "../components/UI";
- Line 5: 
- Line 6: export default function RegisterPage() {
- Line 7:   
- Line 8:   const { register, loading } = useAuth();
- Line 9: 
- Line 10:   const navigate = useNavigate();
- Line 11: 
- Line 12:   const [form, setForm] = useState({
- Line 13: 
- Line 14:     name: "",
- Line 15:     email: "",
- Line 16:     password: "",
- Line 17:     password_confirmation: "",
- Line 18:     role: "renter",
- Line 19:     phone: "",
- Line 20:   });
- Line 21: 
- Line 22:   const [error, setError] = useState("");
- Line 23: 
- Line 24:   const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
- Line 25: 
- Line 26:   const handleSubmit = async (e) => {
- Line 27:     e.preventDefault();
- Line 28:     setError("");
- Line 29:     try {
- Line 30:       await register(form);
- Line 31:       navigate("/");
- Line 32:     } catch (err) {
- Line 33:       const msgs = err.response?.data?.errors;
- Line 34:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 35:       else setError(err.response?.data?.message || "Registration failed");
- Line 36:     }
- Line 37:   };
- Line 38: 
- Line 39: 
- Line 40:   return (
- Line 41:     <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
- Line 42:       <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-transparent dark:border-white/10 w-full max-w-md p-8 space-y-6 transition-colors duration-300">
- Line 43:         <div className="text-center space-y-1">
- Line 44:           <div className="text-4xl">🏠</div>
- Line 45:           <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Create account</h1>
- Line 46:           <p className="text-sm text-gray-500 dark:text-gray-400">
- Line 47:             Join the House Rental platform
- Line 48:           </p>
- Line 49:         </div>
- Line 50: 
- Line 51:         <Alert type="error" message={error} />
- Line 52: 
- Line 53:         <form onSubmit={handleSubmit} className="space-y-4">
- Line 54:           <Input
- Line 55:             label="Full Name"
- Line 56:             placeholder="Abebe Kebede"
- Line 57:             value={form.name}
- Line 58:             onChange={set("name")}
- Line 59:             required
- Line 60:           />
- Line 61:           <Input
- Line 62:             label="Email"
- Line 63:             type="email"
- Line 64:             placeholder="you@example.com"
- Line 65:             value={form.email}
- Line 66:             onChange={set("email")}
- Line 67:             required
- Line 68:           />
- Line 69:           <Input
- Line 70:             label="Phone (optional)"
- Line 71:             placeholder="+251 9..."
- Line 72:             value={form.phone}
- Line 73:             onChange={set("phone")}
- Line 74:           />
- Line 75:           <Input
- Line 76:             label="Password"
- Line 77:             type="password"
- Line 78:             placeholder="Min 6 characters"
- Line 79:             value={form.password}
- Line 80:             onChange={set("password")}
- Line 81:             required
- Line 82:           />
- Line 83:           <Input
- Line 84:             label="Confirm Password"
- Line 85:             type="password"
- Line 86:             placeholder="Repeat password"
- Line 87:             value={form.password_confirmation}
- Line 88:             onChange={set("password_confirmation")}
- Line 89:             required
- Line 90:           />
- Line 91: 
- Line 92:           <Select label="I am a..." value={form.role} onChange={set("role")}>
- Line 93:             <option value="renter">Renter – I want to rent a house</option>
- Line 94:             <option value="owner">Owner – I want to list my house</option>
- Line 95:           </Select>
- Line 96: 
- Line 97:           <Button type="submit" loading={loading} className="w-full">
- Line 98:             Create Account
- Line 99:           </Button>
- Line 100:         </form>
- Line 101: 
- Line 102:         <p className="text-center text-sm text-gray-500 dark:text-gray-400">
- Line 103:           Already have an account?{" "}
- Line 104:           <Link
- Line 105:             to="/login"
- Line 106:             className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
- Line 107:           >
- Line 108:             Sign in
- Line 109:           </Link>
- Line 110:         </p>
- Line 111:       </div>
- Line 112:     </div>
- Line 113:   );
- Line 114: }

