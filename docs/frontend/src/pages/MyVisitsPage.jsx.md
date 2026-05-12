# MyVisitsPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from 'react';
     2	import api from '../api/axios';
     3	import { Spinner, Alert, Badge } from '../components/UI';
     4	
     5	export default function MyVisitsPage() {
     6	  const [visits, setVisits]   = useState([]);
     7	  const [loading, setLoading] = useState(true);
     8	  const [error, setError]     = useState('');
     9	
    10	  useEffect(() => {
    11	    (async () => {
    12	      try {
    13	        const { data } = await api.get('/my-visits');
    14	        setVisits(data.data || []);
    15	      } catch { setError('Failed to load visits'); }
    16	      setLoading(false);
    17	    })();
    18	  }, []);
    19	
    20	  const statusColor = { pending: 'yellow', confirmed: 'green', completed: 'blue' };
    21	
    22	  return (
    23	    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
    24	      <h1 className="text-2xl font-bold text-gray-800">My Visits</h1>
    25	      {error && <Alert type="error" message={error} />}
    26	
    27	      {loading ? (
    28	        <div className="flex justify-center py-20"><Spinner size={12} /></div>
    29	      ) : visits.length === 0 ? (
    30	        <div className="text-center py-16 text-gray-400">
    31	          <div className="text-5xl mb-3">📅</div>
    32	          <p>No visits scheduled yet.</p>
    33	        </div>
    34	      ) : (
    35	        <div className="space-y-4">
    36	          {visits.map((v) => (
    37	            <div key={v.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
    38	              <div className="flex items-start justify-between gap-4">
    39	                <div className="space-y-1">
    40	                  <p className="font-semibold text-gray-800">{v.house?.title}</p>
    41	                  <p className="text-sm text-gray-500">📍 {v.house?.location}</p>
    42	                  <p className="text-sm text-blue-600 font-medium">
    43	                    📅 {new Date(v.visit_date).toLocaleString()}
    44	                  </p>
    45	                </div>
    46	                <Badge label={v.status} color={statusColor[v.status]} />
    47	              </div>
    48	            </div>
    49	          ))}
    50	        </div>
    51	      )}
    52	    </div>
    53	  );
    54	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from 'react';
- Line 2: import api from '../api/axios';
- Line 3: import { Spinner, Alert, Badge } from '../components/UI';
- Line 4: 
- Line 5: export default function MyVisitsPage() {
- Line 6:   const [visits, setVisits]   = useState([]);
- Line 7:   const [loading, setLoading] = useState(true);
- Line 8:   const [error, setError]     = useState('');
- Line 9: 
- Line 10:   useEffect(() => {
- Line 11:     (async () => {
- Line 12:       try {
- Line 13:         const { data } = await api.get('/my-visits');
- Line 14:         setVisits(data.data || []);
- Line 15:       } catch { setError('Failed to load visits'); }
- Line 16:       setLoading(false);
- Line 17:     })();
- Line 18:   }, []);
- Line 19: 
- Line 20:   const statusColor = { pending: 'yellow', confirmed: 'green', completed: 'blue' };
- Line 21: 
- Line 22:   return (
- Line 23:     <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
- Line 24:       <h1 className="text-2xl font-bold text-gray-800">My Visits</h1>
- Line 25:       {error && <Alert type="error" message={error} />}
- Line 26: 
- Line 27:       {loading ? (
- Line 28:         <div className="flex justify-center py-20"><Spinner size={12} /></div>
- Line 29:       ) : visits.length === 0 ? (
- Line 30:         <div className="text-center py-16 text-gray-400">
- Line 31:           <div className="text-5xl mb-3">📅</div>
- Line 32:           <p>No visits scheduled yet.</p>
- Line 33:         </div>
- Line 34:       ) : (
- Line 35:         <div className="space-y-4">
- Line 36:           {visits.map((v) => (
- Line 37:             <div key={v.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
- Line 38:               <div className="flex items-start justify-between gap-4">
- Line 39:                 <div className="space-y-1">
- Line 40:                   <p className="font-semibold text-gray-800">{v.house?.title}</p>
- Line 41:                   <p className="text-sm text-gray-500">📍 {v.house?.location}</p>
- Line 42:                   <p className="text-sm text-blue-600 font-medium">
- Line 43:                     📅 {new Date(v.visit_date).toLocaleString()}
- Line 44:                   </p>
- Line 45:                 </div>
- Line 46:                 <Badge label={v.status} color={statusColor[v.status]} />
- Line 47:               </div>
- Line 48:             </div>
- Line 49:           ))}
- Line 50:         </div>
- Line 51:       )}
- Line 52:     </div>
- Line 53:   );
- Line 54: }

