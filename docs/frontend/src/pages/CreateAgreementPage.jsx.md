# CreateAgreementPage.jsx

## Code (numbered)

```jsx
     1	import { useEffect, useMemo, useState } from "react";
     2	import {
     3	  createAgreement,
     4	  getMyAgreements,
     5	  getMyHouses,
     6	  getOwnerRequests,
     7	} from "../services/api";
     8	import { Alert, Button, Modal, Select, Input, Spinner } from "../components/UI";
     9	import AgreementCard from "../components/AgreementCard";
    10	
    11	export default function CreateAgreementPage() {
    12	  const [houses, setHouses] = useState([]);
    13	  const [requests, setRequests] = useState([]);
    14	  const [agreements, setAgreements] = useState([]);
    15	  const [loading, setLoading] = useState(true);
    16	  const [error, setError] = useState("");
    17	  const [toast, setToast] = useState(null);
    18	
    19	  const [houseId, setHouseId] = useState("");
    20	  const [requestId, setRequestId] = useState("");
    21	  const [startDate, setStartDate] = useState("");
    22	  const [endDate, setEndDate] = useState("");
    23	  const [agreedPrice, setAgreedPrice] = useState("");
    24	  const [confirmOpen, setConfirmOpen] = useState(false);
    25	
    26	  const showToast = (type, message) => {
    27	    setToast({ type, message });
    28	    setTimeout(() => setToast(null), 3500);
    29	  };
    30	
    31	  const fetchData = async () => {
    32	    setLoading(true);
    33	    try {
    34	      const [housesRes, requestsRes, agreementsRes] = await Promise.all([
    35	        getMyHouses(),
    36	        getOwnerRequests(),
    37	        getMyAgreements(),
    38	      ]);
    39	      setHouses(housesRes.data?.data || housesRes.data || []);
    40	      setRequests(requestsRes.data?.data || requestsRes.data || []);
    41	      setAgreements(agreementsRes.data?.data || []);
    42	    } catch (err) {
    43	      setError(err.response?.data?.message || "Failed to load data.");
    44	    } finally {
    45	      setLoading(false);
    46	    }
    47	  };
    48	
    49	  useEffect(() => {
    50	    fetchData();
    51	  }, []);
    52	
    53	  const acceptedRequests = useMemo(
    54	    () => requests.filter((req) => req.status === "accepted"),
    55	    [requests],
    56	  );
    57	
    58	  const requestsForHouse = useMemo(() => {
    59	    if (!houseId) return [];
    60	    return acceptedRequests.filter(
    61	      (req) => String(req.house?.id) === String(houseId),
    62	    );
    63	  }, [acceptedRequests, houseId]);
    64	
    65	  useEffect(() => {
    66	    if (requestsForHouse.length > 0) {
    67	      setRequestId(String(requestsForHouse[0].id));
    68	    } else {
    69	      setRequestId("");
    70	    }
    71	  }, [requestsForHouse]);
    72	
    73	  const selectedRequest = requestsForHouse.find(
    74	    (req) => String(req.id) === String(requestId),
    75	  );
    76	  const selectedHouse = houses.find(
    77	    (house) => String(house.id) === String(houseId),
    78	  );
    79	
    80	  const previewAgreement = {
    81	    id: "preview",
    82	    status: "pending",
    83	    house: selectedHouse,
    84	    renter: selectedRequest?.renter,
    85	    start_date: startDate,
    86	    end_date: endDate,
    87	    agreed_price: agreedPrice || 0,
    88	  };
    89	
    90	  const canSubmit =
    91	    houseId && startDate && endDate && agreedPrice && selectedRequest;
    92	
    93	  const handleSubmit = async () => {
    94	    try {
    95	      await createAgreement({
    96	        house_id: houseId,
    97	        start_date: startDate,
    98	        end_date: endDate,
    99	        agreed_price: agreedPrice,
   100	      });
   101	      showToast("success", "Agreement created successfully.");
   102	      setConfirmOpen(false);
   103	      setHouseId("");
   104	      setRequestId("");
   105	      setStartDate("");
   106	      setEndDate("");
   107	      setAgreedPrice("");
   108	      fetchData();
   109	    } catch (err) {
   110	      showToast(
   111	        "error",
   112	        err.response?.data?.message || "Failed to create agreement.",
   113	      );
   114	    }
   115	  };
   116	
   117	  if (loading) {
   118	    return (
   119	      <div className="flex justify-center py-20">
   120	        <Spinner size={12} />
   121	      </div>
   122	    );
   123	  }
   124	
   125	  return (
   126	    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
   127	      {toast && (
   128	        <div className="fixed top-24 right-6 z-50 w-80">
   129	          <Alert type={toast.type} message={toast.message} />
   130	        </div>
   131	      )}
   132	
   133	      <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
   134	        <div className="space-y-6">
   135	          <div>
   136	            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
   137	              Create agreement
   138	            </h1>
   139	            <p className="text-gray-500">
   140	              Fill in the rental details and preview before sending.
   141	            </p>
   142	          </div>
   143	
   144	          {error && <Alert type="error" message={error} />}
   145	
   146	          <div className="grid sm:grid-cols-2 gap-4">
   147	            <Select
   148	              label="House"
   149	              value={houseId}
   150	              onChange={(event) => setHouseId(event.target.value)}
   151	            >
   152	              <option value="">Select house</option>
   153	              {houses.map((house) => (
   154	                <option key={house.id} value={house.id}>
   155	                  {house.title}
   156	                </option>
   157	              ))}
   158	            </Select>
   159	
   160	            <Select
   161	              label="Renter request"
   162	              value={requestId}
   163	              onChange={(event) => setRequestId(event.target.value)}
   164	              disabled={!houseId || requestsForHouse.length === 0}
   165	            >
   166	              {!houseId && <option value="">Select house first</option>}
   167	              {houseId && requestsForHouse.length === 0 && (
   168	                <option value="">No accepted requests</option>
   169	              )}
   170	              {requestsForHouse.map((req) => (
   171	                <option key={req.id} value={req.id}>
   172	                  {req.renter?.name || "Renter"}
   173	                </option>
   174	              ))}
   175	            </Select>
   176	
   177	            <Input
   178	              label="Start date"
   179	              type="date"
   180	              value={startDate}
   181	              onChange={(event) => setStartDate(event.target.value)}
   182	            />
   183	
   184	            <Input
   185	              label="End date"
   186	              type="date"
   187	              value={endDate}
   188	              onChange={(event) => setEndDate(event.target.value)}
   189	            />
   190	
   191	            <Input
   192	              label="Agreed price (ETB/month)"
   193	              type="number"
   194	              min="0"
   195	              value={agreedPrice}
   196	              onChange={(event) => setAgreedPrice(event.target.value)}
   197	            />
   198	          </div>
   199	
   200	          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-5 space-y-2">
   201	            <p className="text-sm text-gray-500">Renter</p>
   202	            <p className="text-lg font-semibold text-gray-900 dark:text-white">
   203	              {selectedRequest?.renter?.name || "Select a request"}
   204	            </p>
   205	          </div>
   206	
   207	          <Button
   208	            variant="primary"
   209	            disabled={!canSubmit}
   210	            onClick={() => setConfirmOpen(true)}
   211	          >
   212	            Send agreement
   213	          </Button>
   214	        </div>
   215	
   216	        <div className="space-y-4">
   217	          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
   218	            Renter preview
   219	          </h2>
   220	          <AgreementCard
   221	            agreement={previewAgreement}
   222	            showLink={false}
   223	            compact
   224	          />
   225	        </div>
   226	      </div>
   227	
   228	      <div className="space-y-4">
   229	        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
   230	          Agreement history
   231	        </h2>
   232	        {agreements.length === 0 ? (
   233	          <p className="text-sm text-gray-500">No agreements yet.</p>
   234	        ) : (
   235	          <div className="space-y-3">
   236	            {agreements.map((item) => (
   237	              <AgreementCard key={item.id} agreement={item} />
   238	            ))}
   239	          </div>
   240	        )}
   241	      </div>
   242	
   243	      <Modal
   244	        open={confirmOpen}
   245	        onClose={() => setConfirmOpen(false)}
   246	        title="Send agreement"
   247	      >
   248	        <div className="space-y-4">
   249	          <p className="text-sm text-gray-600">
   250	            This will create a new agreement and notify the renter to confirm.
   251	          </p>
   252	          <div className="flex gap-3 justify-end">
   253	            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
   254	              Cancel
   255	            </Button>
   256	            <Button variant="success" onClick={handleSubmit}>
   257	              Send agreement
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
- Line 2: import {
- Line 3:   createAgreement,
- Line 4:   getMyAgreements,
- Line 5:   getMyHouses,
- Line 6:   getOwnerRequests,
- Line 7: } from "../services/api";
- Line 8: import { Alert, Button, Modal, Select, Input, Spinner } from "../components/UI";
- Line 9: import AgreementCard from "../components/AgreementCard";
- Line 10: 
- Line 11: export default function CreateAgreementPage() {
- Line 12:   const [houses, setHouses] = useState([]);
- Line 13:   const [requests, setRequests] = useState([]);
- Line 14:   const [agreements, setAgreements] = useState([]);
- Line 15:   const [loading, setLoading] = useState(true);
- Line 16:   const [error, setError] = useState("");
- Line 17:   const [toast, setToast] = useState(null);
- Line 18: 
- Line 19:   const [houseId, setHouseId] = useState("");
- Line 20:   const [requestId, setRequestId] = useState("");
- Line 21:   const [startDate, setStartDate] = useState("");
- Line 22:   const [endDate, setEndDate] = useState("");
- Line 23:   const [agreedPrice, setAgreedPrice] = useState("");
- Line 24:   const [confirmOpen, setConfirmOpen] = useState(false);
- Line 25: 
- Line 26:   const showToast = (type, message) => {
- Line 27:     setToast({ type, message });
- Line 28:     setTimeout(() => setToast(null), 3500);
- Line 29:   };
- Line 30: 
- Line 31:   const fetchData = async () => {
- Line 32:     setLoading(true);
- Line 33:     try {
- Line 34:       const [housesRes, requestsRes, agreementsRes] = await Promise.all([
- Line 35:         getMyHouses(),
- Line 36:         getOwnerRequests(),
- Line 37:         getMyAgreements(),
- Line 38:       ]);
- Line 39:       setHouses(housesRes.data?.data || housesRes.data || []);
- Line 40:       setRequests(requestsRes.data?.data || requestsRes.data || []);
- Line 41:       setAgreements(agreementsRes.data?.data || []);
- Line 42:     } catch (err) {
- Line 43:       setError(err.response?.data?.message || "Failed to load data.");
- Line 44:     } finally {
- Line 45:       setLoading(false);
- Line 46:     }
- Line 47:   };
- Line 48: 
- Line 49:   useEffect(() => {
- Line 50:     fetchData();
- Line 51:   }, []);
- Line 52: 
- Line 53:   const acceptedRequests = useMemo(
- Line 54:     () => requests.filter((req) => req.status === "accepted"),
- Line 55:     [requests],
- Line 56:   );
- Line 57: 
- Line 58:   const requestsForHouse = useMemo(() => {
- Line 59:     if (!houseId) return [];
- Line 60:     return acceptedRequests.filter(
- Line 61:       (req) => String(req.house?.id) === String(houseId),
- Line 62:     );
- Line 63:   }, [acceptedRequests, houseId]);
- Line 64: 
- Line 65:   useEffect(() => {
- Line 66:     if (requestsForHouse.length > 0) {
- Line 67:       setRequestId(String(requestsForHouse[0].id));
- Line 68:     } else {
- Line 69:       setRequestId("");
- Line 70:     }
- Line 71:   }, [requestsForHouse]);
- Line 72: 
- Line 73:   const selectedRequest = requestsForHouse.find(
- Line 74:     (req) => String(req.id) === String(requestId),
- Line 75:   );
- Line 76:   const selectedHouse = houses.find(
- Line 77:     (house) => String(house.id) === String(houseId),
- Line 78:   );
- Line 79: 
- Line 80:   const previewAgreement = {
- Line 81:     id: "preview",
- Line 82:     status: "pending",
- Line 83:     house: selectedHouse,
- Line 84:     renter: selectedRequest?.renter,
- Line 85:     start_date: startDate,
- Line 86:     end_date: endDate,
- Line 87:     agreed_price: agreedPrice || 0,
- Line 88:   };
- Line 89: 
- Line 90:   const canSubmit =
- Line 91:     houseId && startDate && endDate && agreedPrice && selectedRequest;
- Line 92: 
- Line 93:   const handleSubmit = async () => {
- Line 94:     try {
- Line 95:       await createAgreement({
- Line 96:         house_id: houseId,
- Line 97:         start_date: startDate,
- Line 98:         end_date: endDate,
- Line 99:         agreed_price: agreedPrice,
- Line 100:       });
- Line 101:       showToast("success", "Agreement created successfully.");
- Line 102:       setConfirmOpen(false);
- Line 103:       setHouseId("");
- Line 104:       setRequestId("");
- Line 105:       setStartDate("");
- Line 106:       setEndDate("");
- Line 107:       setAgreedPrice("");
- Line 108:       fetchData();
- Line 109:     } catch (err) {
- Line 110:       showToast(
- Line 111:         "error",
- Line 112:         err.response?.data?.message || "Failed to create agreement.",
- Line 113:       );
- Line 114:     }
- Line 115:   };
- Line 116: 
- Line 117:   if (loading) {
- Line 118:     return (
- Line 119:       <div className="flex justify-center py-20">
- Line 120:         <Spinner size={12} />
- Line 121:       </div>
- Line 122:     );
- Line 123:   }
- Line 124: 
- Line 125:   return (
- Line 126:     <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
- Line 127:       {toast && (
- Line 128:         <div className="fixed top-24 right-6 z-50 w-80">
- Line 129:           <Alert type={toast.type} message={toast.message} />
- Line 130:         </div>
- Line 131:       )}
- Line 132: 
- Line 133:       <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
- Line 134:         <div className="space-y-6">
- Line 135:           <div>
- Line 136:             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
- Line 137:               Create agreement
- Line 138:             </h1>
- Line 139:             <p className="text-gray-500">
- Line 140:               Fill in the rental details and preview before sending.
- Line 141:             </p>
- Line 142:           </div>
- Line 143: 
- Line 144:           {error && <Alert type="error" message={error} />}
- Line 145: 
- Line 146:           <div className="grid sm:grid-cols-2 gap-4">
- Line 147:             <Select
- Line 148:               label="House"
- Line 149:               value={houseId}
- Line 150:               onChange={(event) => setHouseId(event.target.value)}
- Line 151:             >
- Line 152:               <option value="">Select house</option>
- Line 153:               {houses.map((house) => (
- Line 154:                 <option key={house.id} value={house.id}>
- Line 155:                   {house.title}
- Line 156:                 </option>
- Line 157:               ))}
- Line 158:             </Select>
- Line 159: 
- Line 160:             <Select
- Line 161:               label="Renter request"
- Line 162:               value={requestId}
- Line 163:               onChange={(event) => setRequestId(event.target.value)}
- Line 164:               disabled={!houseId || requestsForHouse.length === 0}
- Line 165:             >
- Line 166:               {!houseId && <option value="">Select house first</option>}
- Line 167:               {houseId && requestsForHouse.length === 0 && (
- Line 168:                 <option value="">No accepted requests</option>
- Line 169:               )}
- Line 170:               {requestsForHouse.map((req) => (
- Line 171:                 <option key={req.id} value={req.id}>
- Line 172:                   {req.renter?.name || "Renter"}
- Line 173:                 </option>
- Line 174:               ))}
- Line 175:             </Select>
- Line 176: 
- Line 177:             <Input
- Line 178:               label="Start date"
- Line 179:               type="date"
- Line 180:               value={startDate}
- Line 181:               onChange={(event) => setStartDate(event.target.value)}
- Line 182:             />
- Line 183: 
- Line 184:             <Input
- Line 185:               label="End date"
- Line 186:               type="date"
- Line 187:               value={endDate}
- Line 188:               onChange={(event) => setEndDate(event.target.value)}
- Line 189:             />
- Line 190: 
- Line 191:             <Input
- Line 192:               label="Agreed price (ETB/month)"
- Line 193:               type="number"
- Line 194:               min="0"
- Line 195:               value={agreedPrice}
- Line 196:               onChange={(event) => setAgreedPrice(event.target.value)}
- Line 197:             />
- Line 198:           </div>
- Line 199: 
- Line 200:           <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-5 space-y-2">
- Line 201:             <p className="text-sm text-gray-500">Renter</p>
- Line 202:             <p className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 203:               {selectedRequest?.renter?.name || "Select a request"}
- Line 204:             </p>
- Line 205:           </div>
- Line 206: 
- Line 207:           <Button
- Line 208:             variant="primary"
- Line 209:             disabled={!canSubmit}
- Line 210:             onClick={() => setConfirmOpen(true)}
- Line 211:           >
- Line 212:             Send agreement
- Line 213:           </Button>
- Line 214:         </div>
- Line 215: 
- Line 216:         <div className="space-y-4">
- Line 217:           <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 218:             Renter preview
- Line 219:           </h2>
- Line 220:           <AgreementCard
- Line 221:             agreement={previewAgreement}
- Line 222:             showLink={false}
- Line 223:             compact
- Line 224:           />
- Line 225:         </div>
- Line 226:       </div>
- Line 227: 
- Line 228:       <div className="space-y-4">
- Line 229:         <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 230:           Agreement history
- Line 231:         </h2>
- Line 232:         {agreements.length === 0 ? (
- Line 233:           <p className="text-sm text-gray-500">No agreements yet.</p>
- Line 234:         ) : (
- Line 235:           <div className="space-y-3">
- Line 236:             {agreements.map((item) => (
- Line 237:               <AgreementCard key={item.id} agreement={item} />
- Line 238:             ))}
- Line 239:           </div>
- Line 240:         )}
- Line 241:       </div>
- Line 242: 
- Line 243:       <Modal
- Line 244:         open={confirmOpen}
- Line 245:         onClose={() => setConfirmOpen(false)}
- Line 246:         title="Send agreement"
- Line 247:       >
- Line 248:         <div className="space-y-4">
- Line 249:           <p className="text-sm text-gray-600">
- Line 250:             This will create a new agreement and notify the renter to confirm.
- Line 251:           </p>
- Line 252:           <div className="flex gap-3 justify-end">
- Line 253:             <Button variant="outline" onClick={() => setConfirmOpen(false)}>
- Line 254:               Cancel
- Line 255:             </Button>
- Line 256:             <Button variant="success" onClick={handleSubmit}>
- Line 257:               Send agreement
- Line 258:             </Button>
- Line 259:           </div>
- Line 260:         </div>
- Line 261:       </Modal>
- Line 262:     </div>
- Line 263:   );
- Line 264: }

