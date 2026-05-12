# MyRequestsPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from 'react';
     2	import { Link } from 'react-router-dom';
     3	import api from '../api/axios';
     4	import { deleteRequest } from '../services/api';
     5	import { Spinner, Alert, Badge, Button } from '../components/UI';
     6	
     7	export default function MyRequestsPage() {
     8	  const [requests, setRequests] = useState([]);
     9	  const [loading, setLoading]   = useState(true);
    10	  const [error, setError]       = useState('');
    11	
    12	  useEffect(() => {
    13	    (async () => {
    14	      try {
    15	        const { data } = await api.get('/my-requests');
    16	        setRequests(data.data || []);
    17	      } catch { setError('Failed to load requests'); }
    18	      setLoading(false);
    19	    })();
    20	  }, []);
    21	
    22	  const handleCancel = async (id) => {
    23	    if (!window.confirm("Are you sure you want to cancel this request?")) return;
    24	    try {
    25	      await deleteRequest(id);
    26	      setRequests(requests.filter(r => r.id !== id));
    27	    } catch (e) {
    28	      setError(e.response?.data?.message || 'Failed to cancel request');
    29	    }
    30	  };
    31	
    32	  const statusColor = { pending: 'yellow', accepted: 'green', rejected: 'red' };
    33	
    34	  return (
    35	    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
    36	      <h1 className="text-2xl font-bold text-gray-800">My Rental Requests</h1>
    37	
    38	      {error && <Alert type="error" message={error} />}
    39	
    40	      {loading ? (
    41	        <div className="flex justify-center py-20"><Spinner size={12} /></div>
    42	      ) : requests.length === 0 ? (
    43	        <div className="text-center py-16 text-gray-400">
    44	          <div className="text-5xl mb-3">📭</div>
    45	          <p>You haven't sent any requests yet.</p>
    46	          <Link to="/houses" className="mt-3 inline-block text-blue-600 font-medium hover:underline">Browse houses →</Link>
    47	        </div>
    48	      ) : (
    49	        <div className="space-y-4">
    50	          {requests.map((r) => (
    51	            <div key={r.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
    52	              <div className="flex items-start justify-between gap-4">
    53	                <div className="space-y-1">
    54	                  <Link to={`/houses/${r.house?.id}`} className="font-semibold text-gray-800 hover:text-blue-600">
    55	                    {r.house?.title}
    56	                  </Link>
    57	                  <p className="text-sm text-gray-500">📍 {r.house?.location}</p>
    58	                  <p className="text-sm text-gray-500">Owner: {r.house?.owner?.name}</p>
    59	                  {r.message && <p className="text-sm italic text-gray-400">"{r.message}"</p>}
    60	                  <p className="text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</p>
    61	                </div>
    62	                <div className="flex flex-col items-end gap-3">
    63	                  <Badge label={r.status} color={statusColor[r.status]} />
    64	                  {(r.status === 'pending' || r.status === 'accepted') && (
    65	                    <Button variant="danger" onClick={() => handleCancel(r.id)}>
    66	                      Cancel Request
    67	                    </Button>
    68	                  )}
    69	                </div>
    70	              </div>
    71	            </div>
    72	          ))}
    73	        </div>
    74	      )}
    75	    </div>
    76	  );
    77	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from 'react';
- Line 2: import { Link } from 'react-router-dom';
- Line 3: import api from '../api/axios';
- Line 4: import { deleteRequest } from '../services/api';
- Line 5: import { Spinner, Alert, Badge, Button } from '../components/UI';
- Line 6: 
- Line 7: export default function MyRequestsPage() {
- Line 8:   const [requests, setRequests] = useState([]);
- Line 9:   const [loading, setLoading]   = useState(true);
- Line 10:   const [error, setError]       = useState('');
- Line 11: 
- Line 12:   useEffect(() => {
- Line 13:     (async () => {
- Line 14:       try {
- Line 15:         const { data } = await api.get('/my-requests');
- Line 16:         setRequests(data.data || []);
- Line 17:       } catch { setError('Failed to load requests'); }
- Line 18:       setLoading(false);
- Line 19:     })();
- Line 20:   }, []);
- Line 21: 
- Line 22:   const handleCancel = async (id) => {
- Line 23:     if (!window.confirm("Are you sure you want to cancel this request?")) return;
- Line 24:     try {
- Line 25:       await deleteRequest(id);
- Line 26:       setRequests(requests.filter(r => r.id !== id));
- Line 27:     } catch (e) {
- Line 28:       setError(e.response?.data?.message || 'Failed to cancel request');
- Line 29:     }
- Line 30:   };
- Line 31: 
- Line 32:   const statusColor = { pending: 'yellow', accepted: 'green', rejected: 'red' };
- Line 33: 
- Line 34:   return (
- Line 35:     <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
- Line 36:       <h1 className="text-2xl font-bold text-gray-800">My Rental Requests</h1>
- Line 37: 
- Line 38:       {error && <Alert type="error" message={error} />}
- Line 39: 
- Line 40:       {loading ? (
- Line 41:         <div className="flex justify-center py-20"><Spinner size={12} /></div>
- Line 42:       ) : requests.length === 0 ? (
- Line 43:         <div className="text-center py-16 text-gray-400">
- Line 44:           <div className="text-5xl mb-3">📭</div>
- Line 45:           <p>You haven't sent any requests yet.</p>
- Line 46:           <Link to="/houses" className="mt-3 inline-block text-blue-600 font-medium hover:underline">Browse houses →</Link>
- Line 47:         </div>
- Line 48:       ) : (
- Line 49:         <div className="space-y-4">
- Line 50:           {requests.map((r) => (
- Line 51:             <div key={r.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
- Line 52:               <div className="flex items-start justify-between gap-4">
- Line 53:                 <div className="space-y-1">
- Line 54:                   <Link to={`/houses/${r.house?.id}`} className="font-semibold text-gray-800 hover:text-blue-600">
- Line 55:                     {r.house?.title}
- Line 56:                   </Link>
- Line 57:                   <p className="text-sm text-gray-500">📍 {r.house?.location}</p>
- Line 58:                   <p className="text-sm text-gray-500">Owner: {r.house?.owner?.name}</p>
- Line 59:                   {r.message && <p className="text-sm italic text-gray-400">"{r.message}"</p>}
- Line 60:                   <p className="text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</p>
- Line 61:                 </div>
- Line 62:                 <div className="flex flex-col items-end gap-3">
- Line 63:                   <Badge label={r.status} color={statusColor[r.status]} />
- Line 64:                   {(r.status === 'pending' || r.status === 'accepted') && (
- Line 65:                     <Button variant="danger" onClick={() => handleCancel(r.id)}>
- Line 66:                       Cancel Request
- Line 67:                     </Button>
- Line 68:                   )}
- Line 69:                 </div>
- Line 70:               </div>
- Line 71:             </div>
- Line 72:           ))}
- Line 73:         </div>
- Line 74:       )}
- Line 75:     </div>
- Line 76:   );
- Line 77: }

