# NotificationsPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	import api from "../api/axios";
     3	import { Spinner, Alert, Button, Modal } from "../components/UI";
     4	
     5	export default function NotificationsPage() {
     6	  const [notifs, setNotifs] = useState([]);
     7	  const [loading, setLoading] = useState(true);
     8	  const [error, setError] = useState("");
     9	  const [selectedNotif, setSelectedNotif] = useState(null);
    10	
    11	  const fetchNotifs = async () => {
    12	    setLoading(true);
    13	    try {
    14	      const { data } = await api.get("/notifications");
    15	      setNotifs(data.data || []);
    16	    } catch {
    17	      setError("Failed to load notifications");
    18	    }
    19	    setLoading(false);
    20	  };
    21	
    22	  useEffect(() => {
    23	    fetchNotifs();
    24	  }, []);
    25	
    26	  const markRead = async (id) => {
    27	    try {
    28	      await api.put(`/notifications/${id}/read`);
    29	      fetchNotifs();
    30	    } catch {}
    31	  };
    32	
    33	  const markAll = async () => {
    34	    try {
    35	      await api.put("/notifications/read-all");
    36	      fetchNotifs();
    37	    } catch {}
    38	  };
    39	
    40	  const deleteNotif = async (id) => {
    41	    try {
    42	      await api.delete(`/notifications/${id}`);
    43	      fetchNotifs();
    44	    } catch {}
    45	  };
    46	
    47	  const unread = notifs.filter((n) => !n.is_read).length;
    48	
    49	  return (
    50	    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-16">
    51	      <div className="max-w-3xl mx-auto px-6 space-y-6">
    52	        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-6">
    53	          <div>
    54	            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
    55	              Notifications
    56	            </h1>
    57	            {unread > 0 && (
    58	              <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
    59	                {unread} unread message{unread > 1 ? "s" : ""}
    60	              </p>
    61	            )}
    62	          </div>
    63	          {unread > 0 && (
    64	            <button
    65	              onClick={markAll}
    66	              className="px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
    67	            >
    68	              Mark all as read
    69	            </button>
    70	          )}
    71	        </div>
    72	
    73	        {error && <Alert type="error" message={error} />}
    74	
    75	        {loading ? (
    76	          <div className="flex justify-center py-20">
    77	            <Spinner size={12} />
    78	          </div>
    79	        ) : notifs.length === 0 ? (
    80	          <div className="text-center py-24 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30 rounded-3xl border border-gray-200 dark:border-white/5">
    81	            <div className="text-6xl mb-4">🔔</div>
    82	            <p className="text-lg">You're all caught up!</p>
    83	            <p className="text-sm mt-2 opacity-60">
    84	              No new notifications at the moment.
    85	            </p>
    86	          </div>
    87	        ) : (
    88	          <div className="space-y-3">
    89	            {notifs.map((n) => (
    90	              <div
    91	                key={n.id}
    92	                onClick={() => {
    93	                  setSelectedNotif(n);
    94	                  if (!n.is_read) markRead(n.id);
    95	                }}
    96	                className={`rounded-2xl border p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 ${n.is_read ? "bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-800" : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/30"}`}
    97	              >
    98	                <div className="mt-1 flex-shrink-0">
    99	                  <span className="text-2xl">{n.is_read ? "📭" : "📬"}</span>
   100	                </div>
   101	                <div className="flex-1">
   102	                  <h3
   103	                    className={`font-medium mb-1 text-lg ${n.is_read ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white font-semibold"}`}
   104	                  >
   105	                    {n.message.length > 60
   106	                      ? n.message.substring(0, 60) + "..."
   107	                      : n.message}
   108	                  </h3>
   109	                  <p className="text-xs text-gray-500 dark:text-gray-400">
   110	                    {new Date(n.created_at).toLocaleString()}
   111	                  </p>
   112	                </div>
   113	                <div className="flex gap-2 flex-shrink-0 items-center">
   114	                  <button
   115	                    onClick={(e) => {
   116	                      e.stopPropagation();
   117	                      deleteNotif(n.id);
   118	                    }}
   119	                    className="p-2 rounded-xl text-gray-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-400/10 transition-colors"
   120	                    title="Delete"
   121	                  >
   122	                    <svg
   123	                      className="w-5 h-5"
   124	                      fill="none"
   125	                      viewBox="0 0 24 24"
   126	                      stroke="currentColor"
   127	                    >
   128	                      <path
   129	                        strokeLinecap="round"
   130	                        strokeLinejoin="round"
   131	                        strokeWidth={2}
   132	                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
   133	                      />
   134	                    </svg>
   135	                  </button>
   136	                </div>
   137	              </div>
   138	            ))}
   139	          </div>
   140	        )}
   141	
   142	        {/* Detail Modal */}
   143	        <Modal
   144	          open={!!selectedNotif}
   145	          onClose={() => setSelectedNotif(null)}
   146	          title="Message Details"
   147	        >
   148	          {selectedNotif && (
   149	            <div className="space-y-5">
   150	              <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-5">
   151	                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center text-2xl">
   152	                  🔔
   153	                </div>
   154	                <div>
   155	                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
   156	                    Received
   157	                  </p>
   158	                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
   159	                    {new Date(selectedNotif.created_at).toLocaleString()}
   160	                  </p>
   161	                </div>
   162	              </div>
   163	              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
   164	                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed text-[15px]">
   165	                  {selectedNotif.message}
   166	                </p>
   167	              </div>
   168	              <div className="flex justify-end pt-2">
   169	                <Button onClick={() => setSelectedNotif(null)}>Close</Button>
   170	              </div>
   171	            </div>
   172	          )}
   173	        </Modal>
   174	      </div>
   175	    </div>
   176	  );
   177	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: import api from "../api/axios";
- Line 3: import { Spinner, Alert, Button, Modal } from "../components/UI";
- Line 4: 
- Line 5: export default function NotificationsPage() {
- Line 6:   const [notifs, setNotifs] = useState([]);
- Line 7:   const [loading, setLoading] = useState(true);
- Line 8:   const [error, setError] = useState("");
- Line 9:   const [selectedNotif, setSelectedNotif] = useState(null);
- Line 10: 
- Line 11:   const fetchNotifs = async () => {
- Line 12:     setLoading(true);
- Line 13:     try {
- Line 14:       const { data } = await api.get("/notifications");
- Line 15:       setNotifs(data.data || []);
- Line 16:     } catch {
- Line 17:       setError("Failed to load notifications");
- Line 18:     }
- Line 19:     setLoading(false);
- Line 20:   };
- Line 21: 
- Line 22:   useEffect(() => {
- Line 23:     fetchNotifs();
- Line 24:   }, []);
- Line 25: 
- Line 26:   const markRead = async (id) => {
- Line 27:     try {
- Line 28:       await api.put(`/notifications/${id}/read`);
- Line 29:       fetchNotifs();
- Line 30:     } catch {}
- Line 31:   };
- Line 32: 
- Line 33:   const markAll = async () => {
- Line 34:     try {
- Line 35:       await api.put("/notifications/read-all");
- Line 36:       fetchNotifs();
- Line 37:     } catch {}
- Line 38:   };
- Line 39: 
- Line 40:   const deleteNotif = async (id) => {
- Line 41:     try {
- Line 42:       await api.delete(`/notifications/${id}`);
- Line 43:       fetchNotifs();
- Line 44:     } catch {}
- Line 45:   };
- Line 46: 
- Line 47:   const unread = notifs.filter((n) => !n.is_read).length;
- Line 48: 
- Line 49:   return (
- Line 50:     <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-16">
- Line 51:       <div className="max-w-3xl mx-auto px-6 space-y-6">
- Line 52:         <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-6">
- Line 53:           <div>
- Line 54:             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
- Line 55:               Notifications
- Line 56:             </h1>
- Line 57:             {unread > 0 && (
- Line 58:               <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
- Line 59:                 {unread} unread message{unread > 1 ? "s" : ""}
- Line 60:               </p>
- Line 61:             )}
- Line 62:           </div>
- Line 63:           {unread > 0 && (
- Line 64:             <button
- Line 65:               onClick={markAll}
- Line 66:               className="px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
- Line 67:             >
- Line 68:               Mark all as read
- Line 69:             </button>
- Line 70:           )}
- Line 71:         </div>
- Line 72: 
- Line 73:         {error && <Alert type="error" message={error} />}
- Line 74: 
- Line 75:         {loading ? (
- Line 76:           <div className="flex justify-center py-20">
- Line 77:             <Spinner size={12} />
- Line 78:           </div>
- Line 79:         ) : notifs.length === 0 ? (
- Line 80:           <div className="text-center py-24 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30 rounded-3xl border border-gray-200 dark:border-white/5">
- Line 81:             <div className="text-6xl mb-4">🔔</div>
- Line 82:             <p className="text-lg">You're all caught up!</p>
- Line 83:             <p className="text-sm mt-2 opacity-60">
- Line 84:               No new notifications at the moment.
- Line 85:             </p>
- Line 86:           </div>
- Line 87:         ) : (
- Line 88:           <div className="space-y-3">
- Line 89:             {notifs.map((n) => (
- Line 90:               <div
- Line 91:                 key={n.id}
- Line 92:                 onClick={() => {
- Line 93:                   setSelectedNotif(n);
- Line 94:                   if (!n.is_read) markRead(n.id);
- Line 95:                 }}
- Line 96:                 className={`rounded-2xl border p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 ${n.is_read ? "bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-800" : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/30"}`}
- Line 97:               >
- Line 98:                 <div className="mt-1 flex-shrink-0">
- Line 99:                   <span className="text-2xl">{n.is_read ? "📭" : "📬"}</span>
- Line 100:                 </div>
- Line 101:                 <div className="flex-1">
- Line 102:                   <h3
- Line 103:                     className={`font-medium mb-1 text-lg ${n.is_read ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white font-semibold"}`}
- Line 104:                   >
- Line 105:                     {n.message.length > 60
- Line 106:                       ? n.message.substring(0, 60) + "..."
- Line 107:                       : n.message}
- Line 108:                   </h3>
- Line 109:                   <p className="text-xs text-gray-500 dark:text-gray-400">
- Line 110:                     {new Date(n.created_at).toLocaleString()}
- Line 111:                   </p>
- Line 112:                 </div>
- Line 113:                 <div className="flex gap-2 flex-shrink-0 items-center">
- Line 114:                   <button
- Line 115:                     onClick={(e) => {
- Line 116:                       e.stopPropagation();
- Line 117:                       deleteNotif(n.id);
- Line 118:                     }}
- Line 119:                     className="p-2 rounded-xl text-gray-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-400/10 transition-colors"
- Line 120:                     title="Delete"
- Line 121:                   >
- Line 122:                     <svg
- Line 123:                       className="w-5 h-5"
- Line 124:                       fill="none"
- Line 125:                       viewBox="0 0 24 24"
- Line 126:                       stroke="currentColor"
- Line 127:                     >
- Line 128:                       <path
- Line 129:                         strokeLinecap="round"
- Line 130:                         strokeLinejoin="round"
- Line 131:                         strokeWidth={2}
- Line 132:                         d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
- Line 133:                       />
- Line 134:                     </svg>
- Line 135:                   </button>
- Line 136:                 </div>
- Line 137:               </div>
- Line 138:             ))}
- Line 139:           </div>
- Line 140:         )}
- Line 141: 
- Line 142:         {/* Detail Modal */}
- Line 143:         <Modal
- Line 144:           open={!!selectedNotif}
- Line 145:           onClose={() => setSelectedNotif(null)}
- Line 146:           title="Message Details"
- Line 147:         >
- Line 148:           {selectedNotif && (
- Line 149:             <div className="space-y-5">
- Line 150:               <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-5">
- Line 151:                 <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center text-2xl">
- Line 152:                   🔔
- Line 153:                 </div>
- Line 154:                 <div>
- Line 155:                   <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
- Line 156:                     Received
- Line 157:                   </p>
- Line 158:                   <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
- Line 159:                     {new Date(selectedNotif.created_at).toLocaleString()}
- Line 160:                   </p>
- Line 161:                 </div>
- Line 162:               </div>
- Line 163:               <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
- Line 164:                 <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed text-[15px]">
- Line 165:                   {selectedNotif.message}
- Line 166:                 </p>
- Line 167:               </div>
- Line 168:               <div className="flex justify-end pt-2">
- Line 169:                 <Button onClick={() => setSelectedNotif(null)}>Close</Button>
- Line 170:               </div>
- Line 171:             </div>
- Line 172:           )}
- Line 173:         </Modal>
- Line 174:       </div>
- Line 175:     </div>
- Line 176:   );
- Line 177: }

