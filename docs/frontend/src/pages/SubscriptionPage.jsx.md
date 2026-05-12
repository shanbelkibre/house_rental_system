# SubscriptionPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from 'react';
     2	import api from '../api/axios';
     3	import { Spinner, Alert, Button, Card, Select, Input } from '../components/UI';
     4	
     5	export default function SubscriptionPage() {
     6	  const [sub, setSub]       = useState(null);
     7	  const [loading, setLoading] = useState(true);
     8	  const [paying, setPaying]   = useState(false);
     9	  const [error, setError]     = useState('');
    10	  const [success, setSuccess] = useState('');
    11	  const [method, setMethod]   = useState('telebirr');
    12	
    13	  const fetchSub = async () => {
    14	    setLoading(true);
    15	    try {
    16	      const { data } = await api.get('/my-subscription');
    17	      setSub(data);
    18	    } catch {}
    19	    setLoading(false);
    20	  };
    21	
    22	  useEffect(() => { fetchSub(); }, []);
    23	
    24	  const subscribe = async () => {
    25	    setPaying(true); setError(''); setSuccess('');
    26	    try {
    27	      await api.post('/subscribe', { payment_method: method, amount: 500 });
    28	      setSuccess('Subscription activated! You can now post houses.');
    29	      fetchSub();
    30	    } catch (e) { setError(e.response?.data?.message || 'Payment failed'); }
    31	    setPaying(false);
    32	  };
    33	
    34	  return (
    35	    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
    36	      <div>
    37	        <h1 className="text-2xl font-bold text-gray-800">Subscription</h1>
    38	        <p className="text-gray-500 text-sm mt-1">Subscribe to post houses on the platform</p>
    39	      </div>
    40	
    41	      {success && <Alert type="success" message={success} />}
    42	      {error   && <Alert type="error"   message={error}   />}
    43	
    44	      {loading ? (
    45	        <div className="flex justify-center py-16"><Spinner size={12} /></div>
    46	      ) : (
    47	        <>
    48	          {/* Current status */}
    49	          {sub?.has_subscription ? (
    50	            <Card>
    51	              <div className="flex items-center gap-3 mb-4">
    52	                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">✅</div>
    53	                <div>
    54	                  <p className="font-semibold text-gray-800">Active Subscription</p>
    55	                  <p className="text-sm text-gray-500">
    56	                    Expires: {new Date(sub.subscription.end_date).toLocaleDateString()}
    57	                    {sub.days_remaining > 0 && ` (${sub.days_remaining} days left)`}
    58	                  </p>
    59	                </div>
    60	              </div>
    61	              <p className="text-sm text-gray-500">You can post houses and manage your listings.</p>
    62	            </Card>
    63	          ) : (
    64	            <Card>
    65	              <div className="flex items-center gap-3 mb-4">
    66	                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl">❌</div>
    67	                <div>
    68	                  <p className="font-semibold text-gray-800">No Active Subscription</p>
    69	                  <p className="text-sm text-gray-500">Subscribe to start listing houses</p>
    70	                </div>
    71	              </div>
    72	            </Card>
    73	          )}
    74	
    75	          {/* Subscribe form */}
    76	          <Card>
    77	            <h2 className="font-semibold text-gray-700 mb-4">
    78	              {sub?.has_subscription ? 'Renew Subscription' : 'Subscribe Now'}
    79	            </h2>
    80	
    81	            <div className="space-y-4">
    82	              <div className="bg-blue-50 rounded-xl p-4">
    83	                <p className="text-2xl font-bold text-blue-600">ETB 500</p>
    84	                <p className="text-sm text-gray-500">per month · Unlimited house listings</p>
    85	              </div>
    86	
    87	              <Select label="Payment Method" value={method} onChange={(e) => setMethod(e.target.value)}>
    88	                <option value="telebirr">Telebirr</option>
    89	                <option value="chapa">Chapa</option>
    90	                <option value="bank">Bank Transfer</option>
    91	              </Select>
    92	
    93	              <p className="text-xs text-gray-400">* This is a simulated payment for demo purposes.</p>
    94	
    95	              <Button loading={paying} onClick={subscribe} className="w-full">
    96	                Pay ETB 500 & Subscribe
    97	              </Button>
    98	            </div>
    99	          </Card>
   100	        </>
   101	      )}
   102	    </div>
   103	  );
   104	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from 'react';
- Line 2: import api from '../api/axios';
- Line 3: import { Spinner, Alert, Button, Card, Select, Input } from '../components/UI';
- Line 4: 
- Line 5: export default function SubscriptionPage() {
- Line 6:   const [sub, setSub]       = useState(null);
- Line 7:   const [loading, setLoading] = useState(true);
- Line 8:   const [paying, setPaying]   = useState(false);
- Line 9:   const [error, setError]     = useState('');
- Line 10:   const [success, setSuccess] = useState('');
- Line 11:   const [method, setMethod]   = useState('telebirr');
- Line 12: 
- Line 13:   const fetchSub = async () => {
- Line 14:     setLoading(true);
- Line 15:     try {
- Line 16:       const { data } = await api.get('/my-subscription');
- Line 17:       setSub(data);
- Line 18:     } catch {}
- Line 19:     setLoading(false);
- Line 20:   };
- Line 21: 
- Line 22:   useEffect(() => { fetchSub(); }, []);
- Line 23: 
- Line 24:   const subscribe = async () => {
- Line 25:     setPaying(true); setError(''); setSuccess('');
- Line 26:     try {
- Line 27:       await api.post('/subscribe', { payment_method: method, amount: 500 });
- Line 28:       setSuccess('Subscription activated! You can now post houses.');
- Line 29:       fetchSub();
- Line 30:     } catch (e) { setError(e.response?.data?.message || 'Payment failed'); }
- Line 31:     setPaying(false);
- Line 32:   };
- Line 33: 
- Line 34:   return (
- Line 35:     <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
- Line 36:       <div>
- Line 37:         <h1 className="text-2xl font-bold text-gray-800">Subscription</h1>
- Line 38:         <p className="text-gray-500 text-sm mt-1">Subscribe to post houses on the platform</p>
- Line 39:       </div>
- Line 40: 
- Line 41:       {success && <Alert type="success" message={success} />}
- Line 42:       {error   && <Alert type="error"   message={error}   />}
- Line 43: 
- Line 44:       {loading ? (
- Line 45:         <div className="flex justify-center py-16"><Spinner size={12} /></div>
- Line 46:       ) : (
- Line 47:         <>
- Line 48:           {/* Current status */}
- Line 49:           {sub?.has_subscription ? (
- Line 50:             <Card>
- Line 51:               <div className="flex items-center gap-3 mb-4">
- Line 52:                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">✅</div>
- Line 53:                 <div>
- Line 54:                   <p className="font-semibold text-gray-800">Active Subscription</p>
- Line 55:                   <p className="text-sm text-gray-500">
- Line 56:                     Expires: {new Date(sub.subscription.end_date).toLocaleDateString()}
- Line 57:                     {sub.days_remaining > 0 && ` (${sub.days_remaining} days left)`}
- Line 58:                   </p>
- Line 59:                 </div>
- Line 60:               </div>
- Line 61:               <p className="text-sm text-gray-500">You can post houses and manage your listings.</p>
- Line 62:             </Card>
- Line 63:           ) : (
- Line 64:             <Card>
- Line 65:               <div className="flex items-center gap-3 mb-4">
- Line 66:                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl">❌</div>
- Line 67:                 <div>
- Line 68:                   <p className="font-semibold text-gray-800">No Active Subscription</p>
- Line 69:                   <p className="text-sm text-gray-500">Subscribe to start listing houses</p>
- Line 70:                 </div>
- Line 71:               </div>
- Line 72:             </Card>
- Line 73:           )}
- Line 74: 
- Line 75:           {/* Subscribe form */}
- Line 76:           <Card>
- Line 77:             <h2 className="font-semibold text-gray-700 mb-4">
- Line 78:               {sub?.has_subscription ? 'Renew Subscription' : 'Subscribe Now'}
- Line 79:             </h2>
- Line 80: 
- Line 81:             <div className="space-y-4">
- Line 82:               <div className="bg-blue-50 rounded-xl p-4">
- Line 83:                 <p className="text-2xl font-bold text-blue-600">ETB 500</p>
- Line 84:                 <p className="text-sm text-gray-500">per month · Unlimited house listings</p>
- Line 85:               </div>
- Line 86: 
- Line 87:               <Select label="Payment Method" value={method} onChange={(e) => setMethod(e.target.value)}>
- Line 88:                 <option value="telebirr">Telebirr</option>
- Line 89:                 <option value="chapa">Chapa</option>
- Line 90:                 <option value="bank">Bank Transfer</option>
- Line 91:               </Select>
- Line 92: 
- Line 93:               <p className="text-xs text-gray-400">* This is a simulated payment for demo purposes.</p>
- Line 94: 
- Line 95:               <Button loading={paying} onClick={subscribe} className="w-full">
- Line 96:                 Pay ETB 500 & Subscribe
- Line 97:               </Button>
- Line 98:             </div>
- Line 99:           </Card>
- Line 100:         </>
- Line 101:       )}
- Line 102:     </div>
- Line 103:   );
- Line 104: }

