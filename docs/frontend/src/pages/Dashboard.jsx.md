# Dashboard.jsx

## Code (numbered)

```jsx
     1	import React, { useState, useEffect } from "react";
     2	import { useNavigate } from "react-router-dom";
     3	import {
     4	  getUser,
     5	  getMyHouses,
     6	  getOwnerRequests,
     7	  getMyRequests,
     8	  getSubscription,
     9	  getAdminStats,
    10	  deleteHouse,
    11	  updateRequest,
    12	} from "../services/api";
    13	
    14	// --- Owner Dashboard ---
    15	const OwnerDashboard = () => {
    16	  const [houses, setHouses] = useState([]);
    17	  const [houseTotal, setHouseTotal] = useState(0);
    18	  const [requests, setRequests] = useState([]);
    19	  const [subscription, setSubscription] = useState(null);
    20	
    21	  useEffect(() => {
    22	    getSubscription()
    23	      .then((res) => setSubscription(res.data))
    24	      .catch(console.error);
    25	    getMyHouses()
    26	      .then((res) => {
    27	        const items = res.data?.data || [];
    28	        setHouses(items.slice(0, 5));
    29	        setHouseTotal(res.data?.total ?? items.length);
    30	      })
    31	      .catch(console.error);
    32	    getOwnerRequests()
    33	      .then((res) => setRequests(res.data?.data || []))
    34	      .catch(console.error);
    35	  }, []);
    36	
    37	  const handleAcceptRequest = async (id) => {
    38	    try {
    39	      await updateRequest(id, "accepted");
    40	      setRequests(
    41	        requests.map((r) => (r.id === id ? { ...r, status: "accepted" } : r)),
    42	      );
    43	    } catch (err) {
    44	      alert("Failed to update request");
    45	    }
    46	  };
    47	
    48	  const handleDeleteHouse = async (id) => {
    49	    if (!window.confirm("Delete this house?")) return;
    50	    try {
    51	      await deleteHouse(id);
    52	      setHouses(houses.filter((h) => h.id !== id));
    53	    } catch (err) {
    54	      alert("Failed to delete house");
    55	    }
    56	  };
    57	
    58	  return (
    59	    <div className="owner-dashboard">
    60	      <div className="stats-grid">
    61	        <div className="stat-card">
    62	          <h3>Subscription Status</h3>
    63	          <div className="value">
    64	            {subscription?.is_active ? "✅ Active" : "❌ Expired"}
    65	          </div>
    66	        </div>
    67	        <div className="stat-card">
    68	          <h3>Total Listings</h3>
    69	          <div className="value">{houseTotal}</div>
    70	        </div>
    71	        <div className="stat-card">
    72	          <h3>Pending Requests</h3>
    73	          <div className="value">
    74	            {requests.filter((r) => r.status === "pending").length}
    75	          </div>
    76	        </div>
    77	      </div>
    78	
    79	      <div className="quick-actions">
    80	        <button className="action-btn">➕ Add House</button>
    81	        <button className="action-btn secondary">📋 My Listings</button>
    82	      </div>
    83	
    84	      <h3>Recent Listings</h3>
    85	      {houses.length === 0 ? (
    86	        <div className="empty-state">No houses listed yet.</div>
    87	      ) : (
    88	        <div className="houses-grid">
    89	          {houses.map((house) => (
    90	            <div key={house.id} className="house-card">
    91	              <div className="house-details">
    92	                <h4 className="house-title">{house.title}</h4>
    93	                <div className="house-price">{house.price} ETB</div>
    94	                <button
    95	                  className="action-btn secondary"
    96	                  style={{ marginTop: "10px", width: "100%" }}
    97	                  onClick={() => handleDeleteHouse(house.id)}
    98	                >
    99	                  Delete
   100	                </button>
   101	              </div>
   102	            </div>
   103	          ))}
   104	        </div>
   105	      )}
   106	
   107	      <h3 style={{ marginTop: "40px" }}>Recent Rental Requests</h3>
   108	      {requests.length === 0 ? (
   109	        <div className="empty-state">No rental requests to show.</div>
   110	      ) : (
   111	        <table className="requests-table">
   112	          <thead>
   113	            <tr>
   114	              <th>House</th>
   115	              <th>Renter</th>
   116	              <th>Status</th>
   117	              <th>Actions</th>
   118	            </tr>
   119	          </thead>
   120	          <tbody>
   121	            {requests.map((req) => (
   122	              <tr key={req.id}>
   123	                <td>{req.house?.title}</td>
   124	                <td>{req.renter?.name}</td>
   125	                <td>
   126	                  <span className={`badge badge-${req.status}`}>
   127	                    {req.status}
   128	                  </span>
   129	                </td>
   130	                <td>
   131	                  {req.status === "pending" && (
   132	                    <button
   133	                      className="action-btn"
   134	                      onClick={() => handleAcceptRequest(req.id)}
   135	                    >
   136	                      Accept
   137	                    </button>
   138	                  )}
   139	                </td>
   140	              </tr>
   141	            ))}
   142	          </tbody>
   143	        </table>
   144	      )}
   145	    </div>
   146	  );
   147	};
   148	
   149	// --- Renter Dashboard ---
   150	const RenterDashboard = () => {
   151	  const [requests, setRequests] = useState([]);
   152	
   153	  useEffect(() => {
   154	    getMyRequests()
   155	      .then((res) => setRequests(res.data?.data || []))
   156	      .catch(console.error);
   157	  }, []);
   158	
   159	  return (
   160	    <div className="renter-dashboard">
   161	      <div className="quick-actions">
   162	        <button className="action-btn">🔍 Search Houses</button>
   163	        <button className="action-btn secondary">📅 My Visits</button>
   164	      </div>
   165	
   166	      <h3>My Rental Requests</h3>
   167	      {requests.length === 0 ? (
   168	        <div className="empty-state">You haven't made any requests yet.</div>
   169	      ) : (
   170	        <table className="requests-table">
   171	          <thead>
   172	            <tr>
   173	              <th>House</th>
   174	              <th>Price</th>
   175	              <th>Status</th>
   176	              <th>Actions</th>
   177	            </tr>
   178	          </thead>
   179	          <tbody>
   180	            {requests.map((req) => (
   181	              <tr key={req.id}>
   182	                <td>{req.house?.title}</td>
   183	                <td>{req.house?.price} ETB</td>
   184	                <td>
   185	                  <span className={`badge badge-${req.status}`}>
   186	                    {req.status}
   187	                  </span>
   188	                </td>
   189	                <td>
   190	                  {req.status === "accepted" ? (
   191	                    <button className="action-btn">Schedule Visit</button>
   192	                  ) : (
   193	                    "-"
   194	                  )}
   195	                </td>
   196	              </tr>
   197	            ))}
   198	          </tbody>
   199	        </table>
   200	      )}
   201	    </div>
   202	  );
   203	};
   204	
   205	// --- Admin Dashboard ---
   206	const AdminDashboard = () => {
   207	  const [stats, setStats] = useState(null);
   208	
   209	  useEffect(() => {
   210	    getAdminStats()
   211	      .then((res) => setStats(res.data))
   212	      .catch(console.error);
   213	  }, []);
   214	
   215	  if (!stats)
   216	    return <div className="loading-spinner">Loading admin stats...</div>;
   217	
   218	  return (
   219	    <div className="admin-dashboard">
   220	      <div className="stats-grid">
   221	        <div className="stat-card">
   222	          <h3>Total Users</h3>
   223	          <div className="value">{stats.total_users || 0}</div>
   224	        </div>
   225	        <div className="stat-card">
   226	          <h3>Total Houses</h3>
   227	          <div className="value">{stats.total_houses || 0}</div>
   228	        </div>
   229	        <div className="stat-card">
   230	          <h3>Total Requests</h3>
   231	          <div className="value">{stats.total_requests || 0}</div>
   232	        </div>
   233	        <div className="stat-card">
   234	          <h3>Revenue</h3>
   235	          <div className="value" style={{ color: "#059669" }}>
   236	            {stats.total_payments || 0} ETB
   237	          </div>
   238	        </div>
   239	      </div>
   240	
   241	      <div className="quick-actions">
   242	        <button className="action-btn">
   243	          ✅ Approve Houses{" "}
   244	          <span className="badge badge-pending">
   245	            {stats.pendingHouses || 0}
   246	          </span>
   247	        </button>
   248	        <button className="action-btn secondary">👥 Manage Users</button>
   249	      </div>
   250	    </div>
   251	  );
   252	};
   253	
   254	// --- Main Dashboard Router ---
   255	export default function Dashboard() {
   256	  const navigate = useNavigate();
   257	  const [user, setUser] = useState(null);
   258	  const [loading, setLoading] = useState(true);
   259	  const [error, setError] = useState("");
   260	
   261	  useEffect(() => {
   262	    const fetchUser = async () => {
   263	      try {
   264	        const response = await getUser();
   265	        setUser(response.data);
   266	        localStorage.setItem("role", response.data.role);
   267	      } catch (err) {
   268	        setError("Failed to load profile. Please login.");
   269	        navigate("/login");
   270	      } finally {
   271	        setLoading(false);
   272	      }
   273	    };
   274	    fetchUser();
   275	  }, [navigate]);
   276	
   277	  if (loading)
   278	    return <div className="loading-spinner">⏳ Loading Dashboard...</div>;
   279	  if (error) return <div className="empty-state">{error}</div>;
   280	
   281	  return (
   282	    <div className="dashboard-container">
   283	      <header className="dashboard-header">
   284	        <h1>Welcome back, {user?.name}! 👋</h1>
   285	        <p>
   286	          Dashboard Access Level: <strong>{user?.role.toUpperCase()}</strong>
   287	        </p>
   288	      </header>
   289	
   290	      {user?.role === "owner" && <OwnerDashboard />}
   291	      {user?.role === "renter" && <RenterDashboard />}
   292	      {user?.role === "admin" && <AdminDashboard />}
   293	    </div>
   294	  );
   295	}
```

## Line-by-line explanation

- Line 1: import React, { useState, useEffect } from "react";
- Line 2: import { useNavigate } from "react-router-dom";
- Line 3: import {
- Line 4:   getUser,
- Line 5:   getMyHouses,
- Line 6:   getOwnerRequests,
- Line 7:   getMyRequests,
- Line 8:   getSubscription,
- Line 9:   getAdminStats,
- Line 10:   deleteHouse,
- Line 11:   updateRequest,
- Line 12: } from "../services/api";
- Line 13: 
- Line 14: // --- Owner Dashboard ---
- Line 15: const OwnerDashboard = () => {
- Line 16:   const [houses, setHouses] = useState([]);
- Line 17:   const [houseTotal, setHouseTotal] = useState(0);
- Line 18:   const [requests, setRequests] = useState([]);
- Line 19:   const [subscription, setSubscription] = useState(null);
- Line 20: 
- Line 21:   useEffect(() => {
- Line 22:     getSubscription()
- Line 23:       .then((res) => setSubscription(res.data))
- Line 24:       .catch(console.error);
- Line 25:     getMyHouses()
- Line 26:       .then((res) => {
- Line 27:         const items = res.data?.data || [];
- Line 28:         setHouses(items.slice(0, 5));
- Line 29:         setHouseTotal(res.data?.total ?? items.length);
- Line 30:       })
- Line 31:       .catch(console.error);
- Line 32:     getOwnerRequests()
- Line 33:       .then((res) => setRequests(res.data?.data || []))
- Line 34:       .catch(console.error);
- Line 35:   }, []);
- Line 36: 
- Line 37:   const handleAcceptRequest = async (id) => {
- Line 38:     try {
- Line 39:       await updateRequest(id, "accepted");
- Line 40:       setRequests(
- Line 41:         requests.map((r) => (r.id === id ? { ...r, status: "accepted" } : r)),
- Line 42:       );
- Line 43:     } catch (err) {
- Line 44:       alert("Failed to update request");
- Line 45:     }
- Line 46:   };
- Line 47: 
- Line 48:   const handleDeleteHouse = async (id) => {
- Line 49:     if (!window.confirm("Delete this house?")) return;
- Line 50:     try {
- Line 51:       await deleteHouse(id);
- Line 52:       setHouses(houses.filter((h) => h.id !== id));
- Line 53:     } catch (err) {
- Line 54:       alert("Failed to delete house");
- Line 55:     }
- Line 56:   };
- Line 57: 
- Line 58:   return (
- Line 59:     <div className="owner-dashboard">
- Line 60:       <div className="stats-grid">
- Line 61:         <div className="stat-card">
- Line 62:           <h3>Subscription Status</h3>
- Line 63:           <div className="value">
- Line 64:             {subscription?.is_active ? "✅ Active" : "❌ Expired"}
- Line 65:           </div>
- Line 66:         </div>
- Line 67:         <div className="stat-card">
- Line 68:           <h3>Total Listings</h3>
- Line 69:           <div className="value">{houseTotal}</div>
- Line 70:         </div>
- Line 71:         <div className="stat-card">
- Line 72:           <h3>Pending Requests</h3>
- Line 73:           <div className="value">
- Line 74:             {requests.filter((r) => r.status === "pending").length}
- Line 75:           </div>
- Line 76:         </div>
- Line 77:       </div>
- Line 78: 
- Line 79:       <div className="quick-actions">
- Line 80:         <button className="action-btn">➕ Add House</button>
- Line 81:         <button className="action-btn secondary">📋 My Listings</button>
- Line 82:       </div>
- Line 83: 
- Line 84:       <h3>Recent Listings</h3>
- Line 85:       {houses.length === 0 ? (
- Line 86:         <div className="empty-state">No houses listed yet.</div>
- Line 87:       ) : (
- Line 88:         <div className="houses-grid">
- Line 89:           {houses.map((house) => (
- Line 90:             <div key={house.id} className="house-card">
- Line 91:               <div className="house-details">
- Line 92:                 <h4 className="house-title">{house.title}</h4>
- Line 93:                 <div className="house-price">{house.price} ETB</div>
- Line 94:                 <button
- Line 95:                   className="action-btn secondary"
- Line 96:                   style={{ marginTop: "10px", width: "100%" }}
- Line 97:                   onClick={() => handleDeleteHouse(house.id)}
- Line 98:                 >
- Line 99:                   Delete
- Line 100:                 </button>
- Line 101:               </div>
- Line 102:             </div>
- Line 103:           ))}
- Line 104:         </div>
- Line 105:       )}
- Line 106: 
- Line 107:       <h3 style={{ marginTop: "40px" }}>Recent Rental Requests</h3>
- Line 108:       {requests.length === 0 ? (
- Line 109:         <div className="empty-state">No rental requests to show.</div>
- Line 110:       ) : (
- Line 111:         <table className="requests-table">
- Line 112:           <thead>
- Line 113:             <tr>
- Line 114:               <th>House</th>
- Line 115:               <th>Renter</th>
- Line 116:               <th>Status</th>
- Line 117:               <th>Actions</th>
- Line 118:             </tr>
- Line 119:           </thead>
- Line 120:           <tbody>
- Line 121:             {requests.map((req) => (
- Line 122:               <tr key={req.id}>
- Line 123:                 <td>{req.house?.title}</td>
- Line 124:                 <td>{req.renter?.name}</td>
- Line 125:                 <td>
- Line 126:                   <span className={`badge badge-${req.status}`}>
- Line 127:                     {req.status}
- Line 128:                   </span>
- Line 129:                 </td>
- Line 130:                 <td>
- Line 131:                   {req.status === "pending" && (
- Line 132:                     <button
- Line 133:                       className="action-btn"
- Line 134:                       onClick={() => handleAcceptRequest(req.id)}
- Line 135:                     >
- Line 136:                       Accept
- Line 137:                     </button>
- Line 138:                   )}
- Line 139:                 </td>
- Line 140:               </tr>
- Line 141:             ))}
- Line 142:           </tbody>
- Line 143:         </table>
- Line 144:       )}
- Line 145:     </div>
- Line 146:   );
- Line 147: };
- Line 148: 
- Line 149: // --- Renter Dashboard ---
- Line 150: const RenterDashboard = () => {
- Line 151:   const [requests, setRequests] = useState([]);
- Line 152: 
- Line 153:   useEffect(() => {
- Line 154:     getMyRequests()
- Line 155:       .then((res) => setRequests(res.data?.data || []))
- Line 156:       .catch(console.error);
- Line 157:   }, []);
- Line 158: 
- Line 159:   return (
- Line 160:     <div className="renter-dashboard">
- Line 161:       <div className="quick-actions">
- Line 162:         <button className="action-btn">🔍 Search Houses</button>
- Line 163:         <button className="action-btn secondary">📅 My Visits</button>
- Line 164:       </div>
- Line 165: 
- Line 166:       <h3>My Rental Requests</h3>
- Line 167:       {requests.length === 0 ? (
- Line 168:         <div className="empty-state">You haven't made any requests yet.</div>
- Line 169:       ) : (
- Line 170:         <table className="requests-table">
- Line 171:           <thead>
- Line 172:             <tr>
- Line 173:               <th>House</th>
- Line 174:               <th>Price</th>
- Line 175:               <th>Status</th>
- Line 176:               <th>Actions</th>
- Line 177:             </tr>
- Line 178:           </thead>
- Line 179:           <tbody>
- Line 180:             {requests.map((req) => (
- Line 181:               <tr key={req.id}>
- Line 182:                 <td>{req.house?.title}</td>
- Line 183:                 <td>{req.house?.price} ETB</td>
- Line 184:                 <td>
- Line 185:                   <span className={`badge badge-${req.status}`}>
- Line 186:                     {req.status}
- Line 187:                   </span>
- Line 188:                 </td>
- Line 189:                 <td>
- Line 190:                   {req.status === "accepted" ? (
- Line 191:                     <button className="action-btn">Schedule Visit</button>
- Line 192:                   ) : (
- Line 193:                     "-"
- Line 194:                   )}
- Line 195:                 </td>
- Line 196:               </tr>
- Line 197:             ))}
- Line 198:           </tbody>
- Line 199:         </table>
- Line 200:       )}
- Line 201:     </div>
- Line 202:   );
- Line 203: };
- Line 204: 
- Line 205: // --- Admin Dashboard ---
- Line 206: const AdminDashboard = () => {
- Line 207:   const [stats, setStats] = useState(null);
- Line 208: 
- Line 209:   useEffect(() => {
- Line 210:     getAdminStats()
- Line 211:       .then((res) => setStats(res.data))
- Line 212:       .catch(console.error);
- Line 213:   }, []);
- Line 214: 
- Line 215:   if (!stats)
- Line 216:     return <div className="loading-spinner">Loading admin stats...</div>;
- Line 217: 
- Line 218:   return (
- Line 219:     <div className="admin-dashboard">
- Line 220:       <div className="stats-grid">
- Line 221:         <div className="stat-card">
- Line 222:           <h3>Total Users</h3>
- Line 223:           <div className="value">{stats.total_users || 0}</div>
- Line 224:         </div>
- Line 225:         <div className="stat-card">
- Line 226:           <h3>Total Houses</h3>
- Line 227:           <div className="value">{stats.total_houses || 0}</div>
- Line 228:         </div>
- Line 229:         <div className="stat-card">
- Line 230:           <h3>Total Requests</h3>
- Line 231:           <div className="value">{stats.total_requests || 0}</div>
- Line 232:         </div>
- Line 233:         <div className="stat-card">
- Line 234:           <h3>Revenue</h3>
- Line 235:           <div className="value" style={{ color: "#059669" }}>
- Line 236:             {stats.total_payments || 0} ETB
- Line 237:           </div>
- Line 238:         </div>
- Line 239:       </div>
- Line 240: 
- Line 241:       <div className="quick-actions">
- Line 242:         <button className="action-btn">
- Line 243:           ✅ Approve Houses{" "}
- Line 244:           <span className="badge badge-pending">
- Line 245:             {stats.pendingHouses || 0}
- Line 246:           </span>
- Line 247:         </button>
- Line 248:         <button className="action-btn secondary">👥 Manage Users</button>
- Line 249:       </div>
- Line 250:     </div>
- Line 251:   );
- Line 252: };
- Line 253: 
- Line 254: // --- Main Dashboard Router ---
- Line 255: export default function Dashboard() {
- Line 256:   const navigate = useNavigate();
- Line 257:   const [user, setUser] = useState(null);
- Line 258:   const [loading, setLoading] = useState(true);
- Line 259:   const [error, setError] = useState("");
- Line 260: 
- Line 261:   useEffect(() => {
- Line 262:     const fetchUser = async () => {
- Line 263:       try {
- Line 264:         const response = await getUser();
- Line 265:         setUser(response.data);
- Line 266:         localStorage.setItem("role", response.data.role);
- Line 267:       } catch (err) {
- Line 268:         setError("Failed to load profile. Please login.");
- Line 269:         navigate("/login");
- Line 270:       } finally {
- Line 271:         setLoading(false);
- Line 272:       }
- Line 273:     };
- Line 274:     fetchUser();
- Line 275:   }, [navigate]);
- Line 276: 
- Line 277:   if (loading)
- Line 278:     return <div className="loading-spinner">⏳ Loading Dashboard...</div>;
- Line 279:   if (error) return <div className="empty-state">{error}</div>;
- Line 280: 
- Line 281:   return (
- Line 282:     <div className="dashboard-container">
- Line 283:       <header className="dashboard-header">
- Line 284:         <h1>Welcome back, {user?.name}! 👋</h1>
- Line 285:         <p>
- Line 286:           Dashboard Access Level: <strong>{user?.role.toUpperCase()}</strong>
- Line 287:         </p>
- Line 288:       </header>
- Line 289: 
- Line 290:       {user?.role === "owner" && <OwnerDashboard />}
- Line 291:       {user?.role === "renter" && <RenterDashboard />}
- Line 292:       {user?.role === "admin" && <AdminDashboard />}
- Line 293:     </div>
- Line 294:   );
- Line 295: }

