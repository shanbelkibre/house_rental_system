# Navbar.jsx

## Code (numbered)

```jsx
     1	import { Link, useNavigate } from "react-router-dom";
     2	import { useAuth } from "../context/AuthContext";
     3	import { useState, useEffect } from "react";
     4	import UserAvatar from "./UserAvatar";
     5	import { useTheme } from "../context/ThemeContext";
     6	
     7	export default function Navbar() {
     8	  const { user, logout } = useAuth();
     9	  const navigate = useNavigate();
    10	  const [menuOpen, setMenuOpen] = useState(false);
    11	  const { isDark, toggleTheme } = useTheme();
    12	  const [isScrolled, setIsScrolled] = useState(false);
    13	
    14	  useEffect(() => {
    15	    const handleScroll = () => {
    16	      setIsScrolled(window.scrollY > 10);
    17	    };
    18	    window.addEventListener("scroll", handleScroll);
    19	    return () => window.removeEventListener("scroll", handleScroll);
    20	  }, []);
    21	
    22	  const handleLogout = async () => {
    23	    await logout();
    24	    navigate("/login");
    25	  };
    26	
    27	  return (
    28	    <div
    29	      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    30	    >
    31	      <nav
    32	        className={`px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between text-gray-900 dark:text-white transition-all duration-300 ${!isScrolled ? "bg-white dark:bg-gray-900" : "bg-transparent backdrop-blur-md"}`}
    33	      >
    34	        {/* Left Side: Mobile Hamburger & Logo */}
    35	        <div className="flex items-center gap-4">
    36	          <button
    37	            className="lg:hidden text-gray-900 dark:text-white text-2xl hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
    38	            onClick={() => setMenuOpen(!menuOpen)}
    39	          >
    40	            {menuOpen ? "✕" : "☰"}
    41	          </button>
    42	
    43	          <Link
    44	            to="/"
    45	            className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
    46	          >
    47	            🏠 HouseRental
    48	          </Link>
    49	        </div>
    50	
    51	        {/* Desktop Nav */}
    52	        <div className="hidden lg:flex items-center gap-4 text-base text-gray-900 dark:text-white font-medium">
    53	          <Link
    54	            to="/"
    55	            className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
    56	          >
    57	            Home
    58	          </Link>
    59	          {!user && (
    60	            <>
    61	              <Link
    62	                to="/about"
    63	                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
    64	              >
    65	                About
    66	              </Link>
    67	              <Link
    68	                to="/services"
    69	                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
    70	              >
    71	                Services
    72	              </Link>
    73	            </>
    74	          )}
    75	          {(!user || user.role === "renter") && (
    76	            <Link
    77	              to="/houses"
    78	              className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
    79	            >
    80	              Browse Houses
    81	            </Link>
    82	          )}
    83	          {(!user || user.role !== "admin") && (
    84	            <a
    85	              href="/#contact"
    86	              className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
    87	            >
    88	              Contact
    89	            </a>
    90	          )}
    91	
    92	          {user ? (
    93	            <>
    94	              {user.role === "owner" && (
    95	                <>
    96	                  <Link
    97	                    to="/my-houses"
    98	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
    99	                  >
   100	                    My Houses
   101	                  </Link>
   102	                  <Link
   103	                    to="/owner-requests"
   104	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
   105	                  >
   106	                    Requests
   107	                  </Link>
   108	                  <Link
   109	                    to="/subscription"
   110	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
   111	                  >
   112	                    Subscription
   113	                  </Link>
   114	                  <Link
   115	                    to="/agreements"
   116	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
   117	                  >
   118	                    Agreements
   119	                  </Link>
   120	                </>
   121	              )}
   122	              {user.role === "renter" && (
   123	                <>
   124	                  <Link
   125	                    to="/my-requests"
   126	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
   127	                  >
   128	                    My Requests
   129	                  </Link>
   130	                  <Link
   131	                    to="/my-visits"
   132	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
   133	                  >
   134	                    My Visits
   135	                  </Link>
   136	                  <Link
   137	                    to="/agreements"
   138	                    className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
   139	                  >
   140	                    Agreements
   141	                  </Link>
   142	                </>
   143	              )}
   144	              {user.role === "admin" && (
   145	                <Link
   146	                  to="/admin"
   147	                  className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
   148	                >
   149	                  Admin Panel
   150	                </Link>
   151	              )}
   152	              <Link
   153	                to="/notifications"
   154	                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
   155	              >
   156	                🔔 
   157	              </Link>
   158	              <div className="ml-4 flex items-center gap-2">
   159	                <UserAvatar
   160	                  user={user}
   161	                  size="sm"
   162	                  showDropdown={true}
   163	                  onLogout={handleLogout}
   164	                />
   165	                <button
   166	                  onClick={toggleTheme}
   167	                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg"
   168	                  title="Toggle Theme"
   169	                >
   170	                  {isDark ? "☀️" : "🌙"}
   171	                </button>
   172	              </div>
   173	            </>
   174	          ) : (
   175	            <div className="flex items-center gap-2">
   176	              <Link
   177	                to="/login"
   178	                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200 ml-2"
   179	              >
   180	                Login
   181	              </Link>
   182	              <button
   183	                onClick={toggleTheme}
   184	                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg ml-2"
   185	                title="Toggle Theme"
   186	              >
   187	                {isDark ? "☀️" : "🌙"}
   188	              </button>
   189	            </div>
   190	          )}
   191	        </div>
   192	
   193	        {/* Mobile right side - just the theme toggle (desktop toggle is already in the lg flex container) */}
   194	        <div className="lg:hidden flex items-center">
   195	          <button
   196	            onClick={toggleTheme}
   197	            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg"
   198	            title="Toggle Theme"
   199	          >
   200	            {isDark ? "☀️" : "🌙"}
   201	          </button>
   202	        </div>
   203	      </nav>
   204	
   205	      {/* Mobile menu */}
   206	      {menuOpen && (
   207	        <div className="lg:hidden mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl p-4 space-y-1 text-sm font-medium text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-white/10 max-h-[80vh] overflow-y-auto">
   208	          <Link
   209	            to="/"
   210	            className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   211	            onClick={() => setMenuOpen(false)}
   212	          >
   213	            Home
   214	          </Link>
   215	          {!user && (
   216	            <>
   217	              <Link
   218	                to="/about"
   219	                className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   220	                onClick={() => setMenuOpen(false)}
   221	              >
   222	                About
   223	              </Link>
   224	              <Link
   225	                to="/services"
   226	                className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   227	                onClick={() => setMenuOpen(false)}
   228	              >
   229	                Services
   230	              </Link>
   231	            </>
   232	          )}
   233	          {(!user || user.role === "renter") && (
   234	            <Link
   235	              to="/houses"
   236	              className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   237	              onClick={() => setMenuOpen(false)}
   238	            >
   239	              Browse Houses
   240	            </Link>
   241	          )}
   242	          {(!user || user.role !== "admin") && (
   243	            <a
   244	              href="/#contact"
   245	              className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   246	              onClick={() => setMenuOpen(false)}
   247	            >
   248	              Contact
   249	            </a>
   250	          )}
   251	          {user ? (
   252	            <>
   253	              <Link
   254	                to="/notifications"
   255	                className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   256	                onClick={() => setMenuOpen(false)}
   257	              >
   258	                🔔 
   259	              </Link>
   260	              <Link
   261	                to="/profile"
   262	                className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   263	                onClick={() => setMenuOpen(false)}
   264	              >
   265	                Profile
   266	              </Link>
   267	              {user.role === "owner" && (
   268	                <>
   269	                  <Link
   270	                    to="/my-houses"
   271	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   272	                    onClick={() => setMenuOpen(false)}
   273	                  >
   274	                    My Houses
   275	                  </Link>
   276	                  <Link
   277	                    to="/owner-requests"
   278	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   279	                    onClick={() => setMenuOpen(false)}
   280	                  >
   281	                    Requests
   282	                  </Link>
   283	                  <Link
   284	                    to="/subscription"
   285	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   286	                    onClick={() => setMenuOpen(false)}
   287	                  >
   288	                    Subscription
   289	                  </Link>
   290	                  <Link
   291	                    to="/agreements"
   292	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   293	                    onClick={() => setMenuOpen(false)}
   294	                  >
   295	                    Agreements
   296	                  </Link>
   297	                </>
   298	              )}
   299	              {user.role === "renter" && (
   300	                <>
   301	                  <Link
   302	                    to="/my-requests"
   303	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   304	                    onClick={() => setMenuOpen(false)}
   305	                  >
   306	                    My Requests
   307	                  </Link>
   308	                  <Link
   309	                    to="/my-visits"
   310	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   311	                    onClick={() => setMenuOpen(false)}
   312	                  >
   313	                    My Visits
   314	                  </Link>
   315	                  <Link
   316	                    to="/agreements"
   317	                    className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   318	                    onClick={() => setMenuOpen(false)}
   319	                  >
   320	                    Agreements
   321	                  </Link>
   322	                </>
   323	              )}
   324	              {user.role === "admin" && (
   325	                <Link
   326	                  to="/admin"
   327	                  className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   328	                  onClick={() => setMenuOpen(false)}
   329	                >
   330	                  Admin Panel
   331	                </Link>
   332	              )}
   333	              <button
   334	                onClick={() => {
   335	                  handleLogout();
   336	                  setMenuOpen(false);
   337	                }}
   338	                className="block w-full text-left py-2 px-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-white/10 rounded"
   339	              >
   340	                Logout
   341	              </button>
   342	            </>
   343	          ) : (
   344	            <div className="border-t border-gray-100 dark:border-white/10 pt-2 mt-2">
   345	              <Link
   346	                to="/login"
   347	                className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
   348	                onClick={() => setMenuOpen(false)}
   349	              >
   350	                Login
   351	              </Link>
   352	            </div>
   353	          )}
   354	        </div>
   355	      )}
   356	    </div>
   357	  );
   358	}
```

## Line-by-line explanation

- Line 1: import { Link, useNavigate } from "react-router-dom";
- Line 2: import { useAuth } from "../context/AuthContext";
- Line 3: import { useState, useEffect } from "react";
- Line 4: import UserAvatar from "./UserAvatar";
- Line 5: import { useTheme } from "../context/ThemeContext";
- Line 6: 
- Line 7: export default function Navbar() {
- Line 8:   const { user, logout } = useAuth();
- Line 9:   const navigate = useNavigate();
- Line 10:   const [menuOpen, setMenuOpen] = useState(false);
- Line 11:   const { isDark, toggleTheme } = useTheme();
- Line 12:   const [isScrolled, setIsScrolled] = useState(false);
- Line 13: 
- Line 14:   useEffect(() => {
- Line 15:     const handleScroll = () => {
- Line 16:       setIsScrolled(window.scrollY > 10);
- Line 17:     };
- Line 18:     window.addEventListener("scroll", handleScroll);
- Line 19:     return () => window.removeEventListener("scroll", handleScroll);
- Line 20:   }, []);
- Line 21: 
- Line 22:   const handleLogout = async () => {
- Line 23:     await logout();
- Line 24:     navigate("/login");
- Line 25:   };
- Line 26: 
- Line 27:   return (
- Line 28:     <div
- Line 29:       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
- Line 30:     >
- Line 31:       <nav
- Line 32:         className={`px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between text-gray-900 dark:text-white transition-all duration-300 ${!isScrolled ? "bg-white dark:bg-gray-900" : "bg-transparent backdrop-blur-md"}`}
- Line 33:       >
- Line 34:         {/* Left Side: Mobile Hamburger & Logo */}
- Line 35:         <div className="flex items-center gap-4">
- Line 36:           <button
- Line 37:             className="lg:hidden text-gray-900 dark:text-white text-2xl hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
- Line 38:             onClick={() => setMenuOpen(!menuOpen)}
- Line 39:           >
- Line 40:             {menuOpen ? "✕" : "☰"}
- Line 41:           </button>
- Line 42: 
- Line 43:           <Link
- Line 44:             to="/"
- Line 45:             className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
- Line 46:           >
- Line 47:             🏠 HouseRental
- Line 48:           </Link>
- Line 49:         </div>
- Line 50: 
- Line 51:         {/* Desktop Nav */}
- Line 52:         <div className="hidden lg:flex items-center gap-4 text-base text-gray-900 dark:text-white font-medium">
- Line 53:           <Link
- Line 54:             to="/"
- Line 55:             className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 56:           >
- Line 57:             Home
- Line 58:           </Link>
- Line 59:           {!user && (
- Line 60:             <>
- Line 61:               <Link
- Line 62:                 to="/about"
- Line 63:                 className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 64:               >
- Line 65:                 About
- Line 66:               </Link>
- Line 67:               <Link
- Line 68:                 to="/services"
- Line 69:                 className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 70:               >
- Line 71:                 Services
- Line 72:               </Link>
- Line 73:             </>
- Line 74:           )}
- Line 75:           {(!user || user.role === "renter") && (
- Line 76:             <Link
- Line 77:               to="/houses"
- Line 78:               className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 79:             >
- Line 80:               Browse Houses
- Line 81:             </Link>
- Line 82:           )}
- Line 83:           {(!user || user.role !== "admin") && (
- Line 84:             <a
- Line 85:               href="/#contact"
- Line 86:               className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 87:             >
- Line 88:               Contact
- Line 89:             </a>
- Line 90:           )}
- Line 91: 
- Line 92:           {user ? (
- Line 93:             <>
- Line 94:               {user.role === "owner" && (
- Line 95:                 <>
- Line 96:                   <Link
- Line 97:                     to="/my-houses"
- Line 98:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 99:                   >
- Line 100:                     My Houses
- Line 101:                   </Link>
- Line 102:                   <Link
- Line 103:                     to="/owner-requests"
- Line 104:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 105:                   >
- Line 106:                     Requests
- Line 107:                   </Link>
- Line 108:                   <Link
- Line 109:                     to="/subscription"
- Line 110:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 111:                   >
- Line 112:                     Subscription
- Line 113:                   </Link>
- Line 114:                   <Link
- Line 115:                     to="/agreements"
- Line 116:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 117:                   >
- Line 118:                     Agreements
- Line 119:                   </Link>
- Line 120:                 </>
- Line 121:               )}
- Line 122:               {user.role === "renter" && (
- Line 123:                 <>
- Line 124:                   <Link
- Line 125:                     to="/my-requests"
- Line 126:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 127:                   >
- Line 128:                     My Requests
- Line 129:                   </Link>
- Line 130:                   <Link
- Line 131:                     to="/my-visits"
- Line 132:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 133:                   >
- Line 134:                     My Visits
- Line 135:                   </Link>
- Line 136:                   <Link
- Line 137:                     to="/agreements"
- Line 138:                     className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
- Line 139:                   >
- Line 140:                     Agreements
- Line 141:                   </Link>
- Line 142:                 </>
- Line 143:               )}
- Line 144:               {user.role === "admin" && (
- Line 145:                 <Link
- Line 146:                   to="/admin"
- Line 147:                   className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
- Line 148:                 >
- Line 149:                   Admin Panel
- Line 150:                 </Link>
- Line 151:               )}
- Line 152:               <Link
- Line 153:                 to="/notifications"
- Line 154:                 className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
- Line 155:               >
- Line 156:                 🔔 
- Line 157:               </Link>
- Line 158:               <div className="ml-4 flex items-center gap-2">
- Line 159:                 <UserAvatar
- Line 160:                   user={user}
- Line 161:                   size="sm"
- Line 162:                   showDropdown={true}
- Line 163:                   onLogout={handleLogout}
- Line 164:                 />
- Line 165:                 <button
- Line 166:                   onClick={toggleTheme}
- Line 167:                   className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg"
- Line 168:                   title="Toggle Theme"
- Line 169:                 >
- Line 170:                   {isDark ? "☀️" : "🌙"}
- Line 171:                 </button>
- Line 172:               </div>
- Line 173:             </>
- Line 174:           ) : (
- Line 175:             <div className="flex items-center gap-2">
- Line 176:               <Link
- Line 177:                 to="/login"
- Line 178:                 className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200 ml-2"
- Line 179:               >
- Line 180:                 Login
- Line 181:               </Link>
- Line 182:               <button
- Line 183:                 onClick={toggleTheme}
- Line 184:                 className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg ml-2"
- Line 185:                 title="Toggle Theme"
- Line 186:               >
- Line 187:                 {isDark ? "☀️" : "🌙"}
- Line 188:               </button>
- Line 189:             </div>
- Line 190:           )}
- Line 191:         </div>
- Line 192: 
- Line 193:         {/* Mobile right side - just the theme toggle (desktop toggle is already in the lg flex container) */}
- Line 194:         <div className="lg:hidden flex items-center">
- Line 195:           <button
- Line 196:             onClick={toggleTheme}
- Line 197:             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg"
- Line 198:             title="Toggle Theme"
- Line 199:           >
- Line 200:             {isDark ? "☀️" : "🌙"}
- Line 201:           </button>
- Line 202:         </div>
- Line 203:       </nav>
- Line 204: 
- Line 205:       {/* Mobile menu */}
- Line 206:       {menuOpen && (
- Line 207:         <div className="lg:hidden mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl p-4 space-y-1 text-sm font-medium text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-white/10 max-h-[80vh] overflow-y-auto">
- Line 208:           <Link
- Line 209:             to="/"
- Line 210:             className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 211:             onClick={() => setMenuOpen(false)}
- Line 212:           >
- Line 213:             Home
- Line 214:           </Link>
- Line 215:           {!user && (
- Line 216:             <>
- Line 217:               <Link
- Line 218:                 to="/about"
- Line 219:                 className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 220:                 onClick={() => setMenuOpen(false)}
- Line 221:               >
- Line 222:                 About
- Line 223:               </Link>
- Line 224:               <Link
- Line 225:                 to="/services"
- Line 226:                 className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 227:                 onClick={() => setMenuOpen(false)}
- Line 228:               >
- Line 229:                 Services
- Line 230:               </Link>
- Line 231:             </>
- Line 232:           )}
- Line 233:           {(!user || user.role === "renter") && (
- Line 234:             <Link
- Line 235:               to="/houses"
- Line 236:               className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 237:               onClick={() => setMenuOpen(false)}
- Line 238:             >
- Line 239:               Browse Houses
- Line 240:             </Link>
- Line 241:           )}
- Line 242:           {(!user || user.role !== "admin") && (
- Line 243:             <a
- Line 244:               href="/#contact"
- Line 245:               className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 246:               onClick={() => setMenuOpen(false)}
- Line 247:             >
- Line 248:               Contact
- Line 249:             </a>
- Line 250:           )}
- Line 251:           {user ? (
- Line 252:             <>
- Line 253:               <Link
- Line 254:                 to="/notifications"
- Line 255:                 className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 256:                 onClick={() => setMenuOpen(false)}
- Line 257:               >
- Line 258:                 🔔 
- Line 259:               </Link>
- Line 260:               <Link
- Line 261:                 to="/profile"
- Line 262:                 className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 263:                 onClick={() => setMenuOpen(false)}
- Line 264:               >
- Line 265:                 Profile
- Line 266:               </Link>
- Line 267:               {user.role === "owner" && (
- Line 268:                 <>
- Line 269:                   <Link
- Line 270:                     to="/my-houses"
- Line 271:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 272:                     onClick={() => setMenuOpen(false)}
- Line 273:                   >
- Line 274:                     My Houses
- Line 275:                   </Link>
- Line 276:                   <Link
- Line 277:                     to="/owner-requests"
- Line 278:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 279:                     onClick={() => setMenuOpen(false)}
- Line 280:                   >
- Line 281:                     Requests
- Line 282:                   </Link>
- Line 283:                   <Link
- Line 284:                     to="/subscription"
- Line 285:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 286:                     onClick={() => setMenuOpen(false)}
- Line 287:                   >
- Line 288:                     Subscription
- Line 289:                   </Link>
- Line 290:                   <Link
- Line 291:                     to="/agreements"
- Line 292:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 293:                     onClick={() => setMenuOpen(false)}
- Line 294:                   >
- Line 295:                     Agreements
- Line 296:                   </Link>
- Line 297:                 </>
- Line 298:               )}
- Line 299:               {user.role === "renter" && (
- Line 300:                 <>
- Line 301:                   <Link
- Line 302:                     to="/my-requests"
- Line 303:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 304:                     onClick={() => setMenuOpen(false)}
- Line 305:                   >
- Line 306:                     My Requests
- Line 307:                   </Link>
- Line 308:                   <Link
- Line 309:                     to="/my-visits"
- Line 310:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 311:                     onClick={() => setMenuOpen(false)}
- Line 312:                   >
- Line 313:                     My Visits
- Line 314:                   </Link>
- Line 315:                   <Link
- Line 316:                     to="/agreements"
- Line 317:                     className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 318:                     onClick={() => setMenuOpen(false)}
- Line 319:                   >
- Line 320:                     Agreements
- Line 321:                   </Link>
- Line 322:                 </>
- Line 323:               )}
- Line 324:               {user.role === "admin" && (
- Line 325:                 <Link
- Line 326:                   to="/admin"
- Line 327:                   className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 328:                   onClick={() => setMenuOpen(false)}
- Line 329:                 >
- Line 330:                   Admin Panel
- Line 331:                 </Link>
- Line 332:               )}
- Line 333:               <button
- Line 334:                 onClick={() => {
- Line 335:                   handleLogout();
- Line 336:                   setMenuOpen(false);
- Line 337:                 }}
- Line 338:                 className="block w-full text-left py-2 px-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-white/10 rounded"
- Line 339:               >
- Line 340:                 Logout
- Line 341:               </button>
- Line 342:             </>
- Line 343:           ) : (
- Line 344:             <div className="border-t border-gray-100 dark:border-white/10 pt-2 mt-2">
- Line 345:               <Link
- Line 346:                 to="/login"
- Line 347:                 className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2"
- Line 348:                 onClick={() => setMenuOpen(false)}
- Line 349:               >
- Line 350:                 Login
- Line 351:               </Link>
- Line 352:             </div>
- Line 353:           )}
- Line 354:         </div>
- Line 355:       )}
- Line 356:     </div>
- Line 357:   );
- Line 358: }

