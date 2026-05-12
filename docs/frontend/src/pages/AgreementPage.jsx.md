# AgreementPage.jsx

## Code (numbered)

```jsx
     1	import { useEffect, useMemo, useState } from "react";
     2	import { useParams } from "react-router-dom";
     3	import api from "../api/axios";
     4	import { confirmAgreement, getHouse, getMyAgreements } from "../services/api";
     5	import { Alert, Button, Modal, Spinner } from "../components/UI";
     6	import OwnerReliabilityCard from "../components/OwnerReliabilityCard";
     7	import AgreementCard from "../components/AgreementCard";
     8	
     9	export default function AgreementPage() {
    10	  const { id } = useParams();
    11	  const [agreement, setAgreement] = useState(null);
    12	  const [agreements, setAgreements] = useState([]);
    13	  const [owner, setOwner] = useState(null);
    14	  const [house, setHouse] = useState(null);
    15	  const [reviews, setReviews] = useState([]);
    16	  const [loading, setLoading] = useState(true);
    17	  const [error, setError] = useState("");
    18	  const [toast, setToast] = useState(null);
    19	  const [confirmChecked, setConfirmChecked] = useState(false);
    20	  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    21	  const [reportOpen, setReportOpen] = useState(false);
    22	
    23	  const selectedAgreement = useMemo(() => agreement, [agreement]);
    24	
    25	  const showToast = (type, message) => {
    26	    setToast({ type, message });
    27	    setTimeout(() => setToast(null), 3500);
    28	  };
    29	
    30	  const fetchAgreement = async () => {
    31	    setLoading(true);
    32	    try {
    33	      const { data } = await getMyAgreements();
    34	      const list = data.data || [];
    35	      setAgreements(list);
    36	      const found = list.find((a) => String(a.id) === String(id));
    37	      if (!found) {
    38	        setError("Agreement not found.");
    39	        setAgreement(null);
    40	        return;
    41	      }
    42	      setAgreement(found);
    43	
    44	      if (found.house?.id) {
    45	        const houseRes = await getHouse(found.house.id);
    46	        const houseData = houseRes.data?.data || houseRes.data;
    47	        setHouse(houseData);
    48	        setOwner(houseData?.owner || houseData?.user || null);
    49	        if (houseData?.owner?.id) {
    50	          const reviewRes = await api.get(
    51	            `/users/${houseData.owner.id}/reviews`,
    52	          );
    53	          const reviewData = reviewRes.data?.data || reviewRes.data || [];
    54	          setReviews(Array.isArray(reviewData) ? reviewData : []);
    55	        }
    56	      }
    57	    } catch (err) {
    58	      setError(err.response?.data?.message || "Failed to load agreement.");
    59	    } finally {
    60	      setLoading(false);
    61	    }
    62	  };
    63	
    64	  useEffect(() => {
    65	    fetchAgreement();
    66	  }, [id]);
    67	
    68	  const handleConfirm = async () => {
    69	    if (!selectedAgreement) return;
    70	    try {
    71	      await confirmAgreement(selectedAgreement.id);
    72	      showToast("success", "Agreement confirmed successfully.");
    73	      setConfirmModalOpen(false);
    74	      fetchAgreement();
    75	    } catch (err) {
    76	      showToast(
    77	        "error",
    78	        err.response?.data?.message || "Failed to confirm agreement.",
    79	      );
    80	    }
    81	  };
    82	
    83	  if (loading) {
    84	    return (
    85	      <div className="flex justify-center py-20">
    86	        <Spinner size={12} />
    87	      </div>
    88	    );
    89	  }
    90	
    91	  if (error) {
    92	    return (
    93	      <div className="max-w-3xl mx-auto px-6 py-12">
    94	        <Alert type="error" message={error} />
    95	      </div>
    96	    );
    97	  }
    98	
    99	  if (!selectedAgreement) {
   100	    return null;
   101	  }
   102	
   103	  return (
   104	    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
   105	      {toast && (
   106	        <div className="fixed top-24 right-6 z-50 w-80">
   107	          <Alert type={toast.type} message={toast.message} />
   108	        </div>
   109	      )}
   110	
   111	      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
   112	        <div className="space-y-6">
   113	          <div className="space-y-2">
   114	            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
   115	              Agreement Details
   116	            </h1>
   117	            <p className="text-gray-500">
   118	              Review all details before confirming.
   119	            </p>
   120	          </div>
   121	
   122	          <AgreementCard agreement={selectedAgreement} showLink={false} />
   123	
   124	          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 space-y-4 bg-white dark:bg-gray-900">
   125	            <div className="flex items-center justify-between">
   126	              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
   127	                Confirmation
   128	              </h2>
   129	              <span className="text-sm text-gray-500">
   130	                Status: {selectedAgreement.status}
   131	              </span>
   132	            </div>
   133	
   134	            <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
   135	              <input
   136	                type="checkbox"
   137	                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
   138	                checked={confirmChecked}
   139	                onChange={(event) => setConfirmChecked(event.target.checked)}
   140	                disabled={selectedAgreement.status === "confirmed"}
   141	              />
   142	              I agree to rent from {owner?.name || "the owner"}.
   143	            </label>
   144	
   145	            <p className="text-sm text-amber-600">
   146	              By confirming, you are entering a legally binding agreement.
   147	            </p>
   148	
   149	            <Button
   150	              variant="primary"
   151	              className="w-full"
   152	              disabled={
   153	                !confirmChecked || selectedAgreement.status === "confirmed"
   154	              }
   155	              onClick={() => setConfirmModalOpen(true)}
   156	            >
   157	              Confirm agreement
   158	            </Button>
   159	          </div>
   160	
   161	          <div className="space-y-4">
   162	            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
   163	              Recent reviews
   164	            </h2>
   165	            {reviews.length === 0 ? (
   166	              <p className="text-sm text-gray-500">No reviews yet.</p>
   167	            ) : (
   168	              <div className="space-y-3">
   169	                {reviews.slice(0, 3).map((review) => (
   170	                  <div
   171	                    key={review.id}
   172	                    className="rounded-2xl border border-gray-200 dark:border-white/10 p-4 bg-white dark:bg-gray-900"
   173	                  >
   174	                    <p className="text-sm text-gray-700 dark:text-gray-300">
   175	                      {review.comment || "No comment provided."}
   176	                    </p>
   177	                    <p className="text-xs text-gray-500 mt-2">
   178	                      Rating: {review.rating || "N/A"}
   179	                    </p>
   180	                  </div>
   181	                ))}
   182	              </div>
   183	            )}
   184	          </div>
   185	
   186	          <div className="space-y-4">
   187	            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
   188	              Agreement history
   189	            </h2>
   190	            {agreements.length === 0 ? (
   191	              <p className="text-sm text-gray-500">No agreements yet.</p>
   192	            ) : (
   193	              <div className="space-y-3">
   194	                {agreements.map((item) => (
   195	                  <AgreementCard key={item.id} agreement={item} />
   196	                ))}
   197	              </div>
   198	            )}
   199	          </div>
   200	        </div>
   201	
   202	        <div className="space-y-6">
   203	          <OwnerReliabilityCard
   204	            owner={owner}
   205	            reviews={reviews}
   206	            onReport={() => setReportOpen(true)}
   207	          />
   208	
   209	          {house && (
   210	            <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-gray-900 space-y-2">
   211	              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
   212	                House
   213	              </h3>
   214	              <p className="text-sm text-gray-500">{house.title}</p>
   215	              <p className="text-sm text-gray-500">
   216	                Location: {house.location}
   217	              </p>
   218	            </div>
   219	          )}
   220	        </div>
   221	      </div>
   222	
   223	      <Modal
   224	        open={confirmModalOpen}
   225	        onClose={() => setConfirmModalOpen(false)}
   226	        title="Confirm agreement"
   227	      >
   228	        <div className="space-y-4">
   229	          <p className="text-sm text-gray-600">
   230	            This will confirm the agreement and mark the house as rented.
   231	          </p>
   232	          <div className="flex gap-3 justify-end">
   233	            <Button
   234	              variant="outline"
   235	              onClick={() => setConfirmModalOpen(false)}
   236	            >
   237	              Cancel
   238	            </Button>
   239	            <Button variant="success" onClick={handleConfirm}>
   240	              Confirm
   241	            </Button>
   242	          </div>
   243	        </div>
   244	      </Modal>
   245	
   246	      <Modal
   247	        open={reportOpen}
   248	        onClose={() => setReportOpen(false)}
   249	        title="Report owner"
   250	      >
   251	        <div className="space-y-4">
   252	          <p className="text-sm text-gray-600">
   253	            Reporting is coming soon. Please contact support for urgent issues.
   254	          </p>
   255	          <div className="flex justify-end">
   256	            <Button variant="outline" onClick={() => setReportOpen(false)}>
   257	              Close
   258	            </Button>
   259	          </div>
   260	        </div>
   261	      </Modal>
   262	    </div>
   263	  );
   264	}
```

## Line-by-line explanation

- Line 1: import { useEffect, useMemo, useState } from "react";
- Line 2: import { useParams } from "react-router-dom";
- Line 3: import api from "../api/axios";
- Line 4: import { confirmAgreement, getHouse, getMyAgreements } from "../services/api";
- Line 5: import { Alert, Button, Modal, Spinner } from "../components/UI";
- Line 6: import OwnerReliabilityCard from "../components/OwnerReliabilityCard";
- Line 7: import AgreementCard from "../components/AgreementCard";
- Line 8: 
- Line 9: export default function AgreementPage() {
- Line 10:   const { id } = useParams();
- Line 11:   const [agreement, setAgreement] = useState(null);
- Line 12:   const [agreements, setAgreements] = useState([]);
- Line 13:   const [owner, setOwner] = useState(null);
- Line 14:   const [house, setHouse] = useState(null);
- Line 15:   const [reviews, setReviews] = useState([]);
- Line 16:   const [loading, setLoading] = useState(true);
- Line 17:   const [error, setError] = useState("");
- Line 18:   const [toast, setToast] = useState(null);
- Line 19:   const [confirmChecked, setConfirmChecked] = useState(false);
- Line 20:   const [confirmModalOpen, setConfirmModalOpen] = useState(false);
- Line 21:   const [reportOpen, setReportOpen] = useState(false);
- Line 22: 
- Line 23:   const selectedAgreement = useMemo(() => agreement, [agreement]);
- Line 24: 
- Line 25:   const showToast = (type, message) => {
- Line 26:     setToast({ type, message });
- Line 27:     setTimeout(() => setToast(null), 3500);
- Line 28:   };
- Line 29: 
- Line 30:   const fetchAgreement = async () => {
- Line 31:     setLoading(true);
- Line 32:     try {
- Line 33:       const { data } = await getMyAgreements();
- Line 34:       const list = data.data || [];
- Line 35:       setAgreements(list);
- Line 36:       const found = list.find((a) => String(a.id) === String(id));
- Line 37:       if (!found) {
- Line 38:         setError("Agreement not found.");
- Line 39:         setAgreement(null);
- Line 40:         return;
- Line 41:       }
- Line 42:       setAgreement(found);
- Line 43: 
- Line 44:       if (found.house?.id) {
- Line 45:         const houseRes = await getHouse(found.house.id);
- Line 46:         const houseData = houseRes.data?.data || houseRes.data;
- Line 47:         setHouse(houseData);
- Line 48:         setOwner(houseData?.owner || houseData?.user || null);
- Line 49:         if (houseData?.owner?.id) {
- Line 50:           const reviewRes = await api.get(
- Line 51:             `/users/${houseData.owner.id}/reviews`,
- Line 52:           );
- Line 53:           const reviewData = reviewRes.data?.data || reviewRes.data || [];
- Line 54:           setReviews(Array.isArray(reviewData) ? reviewData : []);
- Line 55:         }
- Line 56:       }
- Line 57:     } catch (err) {
- Line 58:       setError(err.response?.data?.message || "Failed to load agreement.");
- Line 59:     } finally {
- Line 60:       setLoading(false);
- Line 61:     }
- Line 62:   };
- Line 63: 
- Line 64:   useEffect(() => {
- Line 65:     fetchAgreement();
- Line 66:   }, [id]);
- Line 67: 
- Line 68:   const handleConfirm = async () => {
- Line 69:     if (!selectedAgreement) return;
- Line 70:     try {
- Line 71:       await confirmAgreement(selectedAgreement.id);
- Line 72:       showToast("success", "Agreement confirmed successfully.");
- Line 73:       setConfirmModalOpen(false);
- Line 74:       fetchAgreement();
- Line 75:     } catch (err) {
- Line 76:       showToast(
- Line 77:         "error",
- Line 78:         err.response?.data?.message || "Failed to confirm agreement.",
- Line 79:       );
- Line 80:     }
- Line 81:   };
- Line 82: 
- Line 83:   if (loading) {
- Line 84:     return (
- Line 85:       <div className="flex justify-center py-20">
- Line 86:         <Spinner size={12} />
- Line 87:       </div>
- Line 88:     );
- Line 89:   }
- Line 90: 
- Line 91:   if (error) {
- Line 92:     return (
- Line 93:       <div className="max-w-3xl mx-auto px-6 py-12">
- Line 94:         <Alert type="error" message={error} />
- Line 95:       </div>
- Line 96:     );
- Line 97:   }
- Line 98: 
- Line 99:   if (!selectedAgreement) {
- Line 100:     return null;
- Line 101:   }
- Line 102: 
- Line 103:   return (
- Line 104:     <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
- Line 105:       {toast && (
- Line 106:         <div className="fixed top-24 right-6 z-50 w-80">
- Line 107:           <Alert type={toast.type} message={toast.message} />
- Line 108:         </div>
- Line 109:       )}
- Line 110: 
- Line 111:       <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
- Line 112:         <div className="space-y-6">
- Line 113:           <div className="space-y-2">
- Line 114:             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
- Line 115:               Agreement Details
- Line 116:             </h1>
- Line 117:             <p className="text-gray-500">
- Line 118:               Review all details before confirming.
- Line 119:             </p>
- Line 120:           </div>
- Line 121: 
- Line 122:           <AgreementCard agreement={selectedAgreement} showLink={false} />
- Line 123: 
- Line 124:           <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 space-y-4 bg-white dark:bg-gray-900">
- Line 125:             <div className="flex items-center justify-between">
- Line 126:               <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 127:                 Confirmation
- Line 128:               </h2>
- Line 129:               <span className="text-sm text-gray-500">
- Line 130:                 Status: {selectedAgreement.status}
- Line 131:               </span>
- Line 132:             </div>
- Line 133: 
- Line 134:             <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
- Line 135:               <input
- Line 136:                 type="checkbox"
- Line 137:                 className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
- Line 138:                 checked={confirmChecked}
- Line 139:                 onChange={(event) => setConfirmChecked(event.target.checked)}
- Line 140:                 disabled={selectedAgreement.status === "confirmed"}
- Line 141:               />
- Line 142:               I agree to rent from {owner?.name || "the owner"}.
- Line 143:             </label>
- Line 144: 
- Line 145:             <p className="text-sm text-amber-600">
- Line 146:               By confirming, you are entering a legally binding agreement.
- Line 147:             </p>
- Line 148: 
- Line 149:             <Button
- Line 150:               variant="primary"
- Line 151:               className="w-full"
- Line 152:               disabled={
- Line 153:                 !confirmChecked || selectedAgreement.status === "confirmed"
- Line 154:               }
- Line 155:               onClick={() => setConfirmModalOpen(true)}
- Line 156:             >
- Line 157:               Confirm agreement
- Line 158:             </Button>
- Line 159:           </div>
- Line 160: 
- Line 161:           <div className="space-y-4">
- Line 162:             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 163:               Recent reviews
- Line 164:             </h2>
- Line 165:             {reviews.length === 0 ? (
- Line 166:               <p className="text-sm text-gray-500">No reviews yet.</p>
- Line 167:             ) : (
- Line 168:               <div className="space-y-3">
- Line 169:                 {reviews.slice(0, 3).map((review) => (
- Line 170:                   <div
- Line 171:                     key={review.id}
- Line 172:                     className="rounded-2xl border border-gray-200 dark:border-white/10 p-4 bg-white dark:bg-gray-900"
- Line 173:                   >
- Line 174:                     <p className="text-sm text-gray-700 dark:text-gray-300">
- Line 175:                       {review.comment || "No comment provided."}
- Line 176:                     </p>
- Line 177:                     <p className="text-xs text-gray-500 mt-2">
- Line 178:                       Rating: {review.rating || "N/A"}
- Line 179:                     </p>
- Line 180:                   </div>
- Line 181:                 ))}
- Line 182:               </div>
- Line 183:             )}
- Line 184:           </div>
- Line 185: 
- Line 186:           <div className="space-y-4">
- Line 187:             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 188:               Agreement history
- Line 189:             </h2>
- Line 190:             {agreements.length === 0 ? (
- Line 191:               <p className="text-sm text-gray-500">No agreements yet.</p>
- Line 192:             ) : (
- Line 193:               <div className="space-y-3">
- Line 194:                 {agreements.map((item) => (
- Line 195:                   <AgreementCard key={item.id} agreement={item} />
- Line 196:                 ))}
- Line 197:               </div>
- Line 198:             )}
- Line 199:           </div>
- Line 200:         </div>
- Line 201: 
- Line 202:         <div className="space-y-6">
- Line 203:           <OwnerReliabilityCard
- Line 204:             owner={owner}
- Line 205:             reviews={reviews}
- Line 206:             onReport={() => setReportOpen(true)}
- Line 207:           />
- Line 208: 
- Line 209:           {house && (
- Line 210:             <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-gray-900 space-y-2">
- Line 211:               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 212:                 House
- Line 213:               </h3>
- Line 214:               <p className="text-sm text-gray-500">{house.title}</p>
- Line 215:               <p className="text-sm text-gray-500">
- Line 216:                 Location: {house.location}
- Line 217:               </p>
- Line 218:             </div>
- Line 219:           )}
- Line 220:         </div>
- Line 221:       </div>
- Line 222: 
- Line 223:       <Modal
- Line 224:         open={confirmModalOpen}
- Line 225:         onClose={() => setConfirmModalOpen(false)}
- Line 226:         title="Confirm agreement"
- Line 227:       >
- Line 228:         <div className="space-y-4">
- Line 229:           <p className="text-sm text-gray-600">
- Line 230:             This will confirm the agreement and mark the house as rented.
- Line 231:           </p>
- Line 232:           <div className="flex gap-3 justify-end">
- Line 233:             <Button
- Line 234:               variant="outline"
- Line 235:               onClick={() => setConfirmModalOpen(false)}
- Line 236:             >
- Line 237:               Cancel
- Line 238:             </Button>
- Line 239:             <Button variant="success" onClick={handleConfirm}>
- Line 240:               Confirm
- Line 241:             </Button>
- Line 242:           </div>
- Line 243:         </div>
- Line 244:       </Modal>
- Line 245: 
- Line 246:       <Modal
- Line 247:         open={reportOpen}
- Line 248:         onClose={() => setReportOpen(false)}
- Line 249:         title="Report owner"
- Line 250:       >
- Line 251:         <div className="space-y-4">
- Line 252:           <p className="text-sm text-gray-600">
- Line 253:             Reporting is coming soon. Please contact support for urgent issues.
- Line 254:           </p>
- Line 255:           <div className="flex justify-end">
- Line 256:             <Button variant="outline" onClick={() => setReportOpen(false)}>
- Line 257:               Close
- Line 258:             </Button>
- Line 259:           </div>
- Line 260:         </div>
- Line 261:       </Modal>
- Line 262:     </div>
- Line 263:   );
- Line 264: }

