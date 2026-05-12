# MyAgreementsPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from 'react';
     2	import api from '../api/axios';
     3	import { terminateAgreement } from '../services/api';
     4	import { Spinner, Alert, Badge, Button } from '../components/UI';
     5	import { useAuth } from '../context/AuthContext';
     6	
     7	export default function MyAgreementsPage() {
     8	  const { user } = useAuth();
     9	  const [agreements, setAgreements] = useState([]);
    10	  const [loading, setLoading]       = useState(true);
    11	  const [error, setError]           = useState('');
    12	  const [success, setSuccess]       = useState('');
    13	
    14	  const fetchAgreements = async () => {
    15	    setLoading(true);
    16	    try {
    17	      const { data } = await api.get('/my-agreements');
    18	      setAgreements((data.data || []).filter(a => a.status !== 'terminated'));
    19	    } catch { setError('Failed to load agreements'); }
    20	    setLoading(false);
    21	  };
    22	
    23	  useEffect(() => { fetchAgreements(); }, []);
    24	
    25	  const confirm = async (id) => {
    26	    try {
    27	      await api.put(`/agreements/${id}/confirm`);
    28	      setSuccess('Agreement confirmed!');
    29	      fetchAgreements();
    30	    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
    31	  };
    32	
    33	  const leaveHouse = async (id) => {
    34	    if (!window.confirm("Are you sure you want to leave this house and terminate the rental?")) return;
    35	    try {
    36	      await terminateAgreement(id);
    37	      setSuccess('You have left the house successfully!');
    38	      fetchAgreements();
    39	    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
    40	  };
    41	
    42	  return (
    43	    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
    44	      <h1 className="text-2xl font-bold text-gray-800">My Agreements</h1>
    45	      {success && <Alert type="success" message={success} />}
    46	      {error   && <Alert type="error"   message={error}   />}
    47	
    48	      {loading ? (
    49	        <div className="flex justify-center py-20"><Spinner size={12} /></div>
    50	      ) : agreements.length === 0 ? (
    51	        <div className="text-center py-16 text-gray-400">
    52	          <div className="text-5xl mb-3">📄</div>
    53	          <p>No agreements yet.</p>
    54	        </div>
    55	      ) : (
    56	        <div className="space-y-4">
    57	          {agreements.map((a) => (
    58	            <div key={a.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
    59	              <div className="flex items-start justify-between gap-4">
    60	                <div className="space-y-1">
    61	                  <p className="font-semibold text-gray-800">{a.house?.title}</p>
    62	                  <p className="text-sm text-gray-500">📍 {a.house?.location}</p>
    63	                  <p className="text-sm text-gray-600">
    64	                    📅 {new Date(a.start_date).toLocaleDateString()} → {new Date(a.end_date).toLocaleDateString()}
    65	                  </p>
    66	                  <p className="text-sm font-medium text-blue-600">
    67	                    ETB {Number(a.agreed_price).toLocaleString()}/mo
    68	                  </p>
    69	                  {user?.role === 'owner' && a.renter && (
    70	                    <p className="text-xs text-gray-400">Renter: {a.renter.name}</p>
    71	                  )}
    72	                </div>
    73	                <Badge label={a.status} color={a.status === 'confirmed' ? 'green' : 'yellow'} />
    74	              </div>
    75	
    76	              {a.status === 'pending' && (
    77	                <Button variant="success" onClick={() => confirm(a.id)}>✓ Confirm Agreement</Button>
    78	              )}
    79	              {a.status === 'confirmed' && user?.role === 'renter' && (
    80	                <div className="flex justify-end pt-2">
    81	                  <Button variant="danger" onClick={() => leaveHouse(a.id)}>🚪 Leave Out (Terminate)</Button>
    82	                </div>
    83	              )}
    84	            </div>
    85	          ))}
    86	        </div>
    87	      )}
    88	    </div>
    89	  );
    90	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from 'react';
- Line 2: import api from '../api/axios';
- Line 3: import { terminateAgreement } from '../services/api';
- Line 4: import { Spinner, Alert, Badge, Button } from '../components/UI';
- Line 5: import { useAuth } from '../context/AuthContext';
- Line 6: 
- Line 7: export default function MyAgreementsPage() {
- Line 8:   const { user } = useAuth();
- Line 9:   const [agreements, setAgreements] = useState([]);
- Line 10:   const [loading, setLoading]       = useState(true);
- Line 11:   const [error, setError]           = useState('');
- Line 12:   const [success, setSuccess]       = useState('');
- Line 13: 
- Line 14:   const fetchAgreements = async () => {
- Line 15:     setLoading(true);
- Line 16:     try {
- Line 17:       const { data } = await api.get('/my-agreements');
- Line 18:       setAgreements((data.data || []).filter(a => a.status !== 'terminated'));
- Line 19:     } catch { setError('Failed to load agreements'); }
- Line 20:     setLoading(false);
- Line 21:   };
- Line 22: 
- Line 23:   useEffect(() => { fetchAgreements(); }, []);
- Line 24: 
- Line 25:   const confirm = async (id) => {
- Line 26:     try {
- Line 27:       await api.put(`/agreements/${id}/confirm`);
- Line 28:       setSuccess('Agreement confirmed!');
- Line 29:       fetchAgreements();
- Line 30:     } catch (e) { setError(e.response?.data?.message || 'Failed'); }
- Line 31:   };
- Line 32: 
- Line 33:   const leaveHouse = async (id) => {
- Line 34:     if (!window.confirm("Are you sure you want to leave this house and terminate the rental?")) return;
- Line 35:     try {
- Line 36:       await terminateAgreement(id);
- Line 37:       setSuccess('You have left the house successfully!');
- Line 38:       fetchAgreements();
- Line 39:     } catch (e) { setError(e.response?.data?.message || 'Failed'); }
- Line 40:   };
- Line 41: 
- Line 42:   return (
- Line 43:     <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
- Line 44:       <h1 className="text-2xl font-bold text-gray-800">My Agreements</h1>
- Line 45:       {success && <Alert type="success" message={success} />}
- Line 46:       {error   && <Alert type="error"   message={error}   />}
- Line 47: 
- Line 48:       {loading ? (
- Line 49:         <div className="flex justify-center py-20"><Spinner size={12} /></div>
- Line 50:       ) : agreements.length === 0 ? (
- Line 51:         <div className="text-center py-16 text-gray-400">
- Line 52:           <div className="text-5xl mb-3">📄</div>
- Line 53:           <p>No agreements yet.</p>
- Line 54:         </div>
- Line 55:       ) : (
- Line 56:         <div className="space-y-4">
- Line 57:           {agreements.map((a) => (
- Line 58:             <div key={a.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
- Line 59:               <div className="flex items-start justify-between gap-4">
- Line 60:                 <div className="space-y-1">
- Line 61:                   <p className="font-semibold text-gray-800">{a.house?.title}</p>
- Line 62:                   <p className="text-sm text-gray-500">📍 {a.house?.location}</p>
- Line 63:                   <p className="text-sm text-gray-600">
- Line 64:                     📅 {new Date(a.start_date).toLocaleDateString()} → {new Date(a.end_date).toLocaleDateString()}
- Line 65:                   </p>
- Line 66:                   <p className="text-sm font-medium text-blue-600">
- Line 67:                     ETB {Number(a.agreed_price).toLocaleString()}/mo
- Line 68:                   </p>
- Line 69:                   {user?.role === 'owner' && a.renter && (
- Line 70:                     <p className="text-xs text-gray-400">Renter: {a.renter.name}</p>
- Line 71:                   )}
- Line 72:                 </div>
- Line 73:                 <Badge label={a.status} color={a.status === 'confirmed' ? 'green' : 'yellow'} />
- Line 74:               </div>
- Line 75: 
- Line 76:               {a.status === 'pending' && (
- Line 77:                 <Button variant="success" onClick={() => confirm(a.id)}>✓ Confirm Agreement</Button>
- Line 78:               )}
- Line 79:               {a.status === 'confirmed' && user?.role === 'renter' && (
- Line 80:                 <div className="flex justify-end pt-2">
- Line 81:                   <Button variant="danger" onClick={() => leaveHouse(a.id)}>🚪 Leave Out (Terminate)</Button>
- Line 82:                 </div>
- Line 83:               )}
- Line 84:             </div>
- Line 85:           ))}
- Line 86:         </div>
- Line 87:       )}
- Line 88:     </div>
- Line 89:   );
- Line 90: }

