# OwnerRequestsPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from 'react';
     2	import api from '../api/axios';
     3	import { Spinner, Alert, Button, Badge } from '../components/UI';
     4	
     5	export default function OwnerRequestsPage() {
     6	  const [requests, setRequests] = useState([]);
     7	  const [loading, setLoading]   = useState(true);
     8	  const [error, setError]       = useState('');
     9	  const [success, setSuccess]   = useState('');
    10	
    11	  const fetchRequests = async () => {
    12	    setLoading(true);
    13	    try {
    14	      const { data } = await api.get('/owner-requests');
    15	      setRequests(data.data || []);
    16	    } catch {}
    17	    setLoading(false);
    18	  };
    19	
    20	  useEffect(() => { fetchRequests(); }, []);
    21	
    22	  const handleUpdate = async (id, status) => {
    23	    try {
    24	      await api.put(`/requests/${id}`, { status });
    25	      setSuccess(`Request ${status}!`);
    26	      fetchRequests();
    27	    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
    28	  };
    29	
    30	  const statusColor = { pending: 'yellow', accepted: 'green', rejected: 'red' };
    31	
    32	  return (
    33	    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
    34	      <h1 className="text-2xl font-bold text-gray-800">Rental Requests</h1>
    35	      <p className="text-gray-500 -mt-4 text-sm">Review requests from potential renters</p>
    36	
    37	      {success && <Alert type="success" message={success} />}
    38	      {error   && <Alert type="error"   message={error}   />}
    39	
    40	      {loading ? (
    41	        <div className="flex justify-center py-20"><Spinner size={12} /></div>
    42	      ) : requests.length === 0 ? (
    43	        <div className="text-center py-16 text-gray-400">
    44	          <div className="text-5xl mb-3">📭</div>
    45	          <p>No rental requests yet.</p>
    46	        </div>
    47	      ) : (
    48	        <div className="space-y-4">
    49	          {requests.map((r) => (
    50	            <div key={r.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
    51	              <div className="flex items-start justify-between gap-4">
    52	                <div className="space-y-1">
    53	                  <p className="font-semibold text-gray-800">{r.house?.title}</p>
    54	                  <p className="text-sm text-gray-500">📍 {r.house?.location}</p>
    55	                  <p className="text-sm text-gray-600">
    56	                    <span className="font-medium">From:</span> {r.renter?.name}
    57	                    {r.renter?.phone && <span className="ml-2 text-gray-400">📞 {r.renter.phone}</span>}
    58	                  </p>
    59	                  {r.message && (
    60	                    <p className="text-sm text-gray-500 italic">"{r.message}"</p>
    61	                  )}
    62	                  <p className="text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</p>
    63	                </div>
    64	                <Badge label={r.status} color={statusColor[r.status]} />
    65	              </div>
    66	
    67	              {r.status === 'pending' && (
    68	                <div className="mt-4 flex gap-2">
    69	                  <Button variant="success" onClick={() => handleUpdate(r.id, 'accepted')}>✓ Accept</Button>
    70	                  <Button variant="danger"  onClick={() => handleUpdate(r.id, 'rejected')}>✗ Reject</Button>
    71	                </div>
    72	              )}
    73	            </div>
    74	          ))}
    75	        </div>
    76	      )}
    77	    </div>
    78	  );
    79	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from 'react';
- Line 2: import api from '../api/axios';
- Line 3: import { Spinner, Alert, Button, Badge } from '../components/UI';
- Line 4: 
- Line 5: export default function OwnerRequestsPage() {
- Line 6:   const [requests, setRequests] = useState([]);
- Line 7:   const [loading, setLoading]   = useState(true);
- Line 8:   const [error, setError]       = useState('');
- Line 9:   const [success, setSuccess]   = useState('');
- Line 10: 
- Line 11:   const fetchRequests = async () => {
- Line 12:     setLoading(true);
- Line 13:     try {
- Line 14:       const { data } = await api.get('/owner-requests');
- Line 15:       setRequests(data.data || []);
- Line 16:     } catch {}
- Line 17:     setLoading(false);
- Line 18:   };
- Line 19: 
- Line 20:   useEffect(() => { fetchRequests(); }, []);
- Line 21: 
- Line 22:   const handleUpdate = async (id, status) => {
- Line 23:     try {
- Line 24:       await api.put(`/requests/${id}`, { status });
- Line 25:       setSuccess(`Request ${status}!`);
- Line 26:       fetchRequests();
- Line 27:     } catch (e) { setError(e.response?.data?.message || 'Failed'); }
- Line 28:   };
- Line 29: 
- Line 30:   const statusColor = { pending: 'yellow', accepted: 'green', rejected: 'red' };
- Line 31: 
- Line 32:   return (
- Line 33:     <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
- Line 34:       <h1 className="text-2xl font-bold text-gray-800">Rental Requests</h1>
- Line 35:       <p className="text-gray-500 -mt-4 text-sm">Review requests from potential renters</p>
- Line 36: 
- Line 37:       {success && <Alert type="success" message={success} />}
- Line 38:       {error   && <Alert type="error"   message={error}   />}
- Line 39: 
- Line 40:       {loading ? (
- Line 41:         <div className="flex justify-center py-20"><Spinner size={12} /></div>
- Line 42:       ) : requests.length === 0 ? (
- Line 43:         <div className="text-center py-16 text-gray-400">
- Line 44:           <div className="text-5xl mb-3">📭</div>
- Line 45:           <p>No rental requests yet.</p>
- Line 46:         </div>
- Line 47:       ) : (
- Line 48:         <div className="space-y-4">
- Line 49:           {requests.map((r) => (
- Line 50:             <div key={r.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
- Line 51:               <div className="flex items-start justify-between gap-4">
- Line 52:                 <div className="space-y-1">
- Line 53:                   <p className="font-semibold text-gray-800">{r.house?.title}</p>
- Line 54:                   <p className="text-sm text-gray-500">📍 {r.house?.location}</p>
- Line 55:                   <p className="text-sm text-gray-600">
- Line 56:                     <span className="font-medium">From:</span> {r.renter?.name}
- Line 57:                     {r.renter?.phone && <span className="ml-2 text-gray-400">📞 {r.renter.phone}</span>}
- Line 58:                   </p>
- Line 59:                   {r.message && (
- Line 60:                     <p className="text-sm text-gray-500 italic">"{r.message}"</p>
- Line 61:                   )}
- Line 62:                   <p className="text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</p>
- Line 63:                 </div>
- Line 64:                 <Badge label={r.status} color={statusColor[r.status]} />
- Line 65:               </div>
- Line 66: 
- Line 67:               {r.status === 'pending' && (
- Line 68:                 <div className="mt-4 flex gap-2">
- Line 69:                   <Button variant="success" onClick={() => handleUpdate(r.id, 'accepted')}>✓ Accept</Button>
- Line 70:                   <Button variant="danger"  onClick={() => handleUpdate(r.id, 'rejected')}>✗ Reject</Button>
- Line 71:                 </div>
- Line 72:               )}
- Line 73:             </div>
- Line 74:           ))}
- Line 75:         </div>
- Line 76:       )}
- Line 77:     </div>
- Line 78:   );
- Line 79: }

