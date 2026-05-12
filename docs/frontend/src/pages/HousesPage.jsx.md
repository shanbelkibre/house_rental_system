# HousesPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from 'react';
     2	import api from '../api/axios';
     3	import HouseCard from '../components/HouseCard';
     4	import { Spinner, Pagination, Input, Button, Select } from '../components/UI';
     5	
     6	export default function HousesPage() {
     7	  const [houses, setHouses] = useState([]);
     8	  const [meta, setMeta]     = useState(null);
     9	  const [page, setPage]     = useState(1);
    10	  const [loading, setLoading] = useState(true);
    11	  const [filters, setFilters] = useState({ title: '', location: '', min_price: '', max_price: '', rooms: '' });
    12	
    13	  const fetchHouses = async (p = page, f = filters) => {
    14	    setLoading(true);
    15	    try {
    16	      const params = { page: p, ...Object.fromEntries(Object.entries(f).filter(([, v]) => v !== '')) };
    17	      const { data } = await api.get('/houses', { params });
    18	      setHouses(data.data);
    19	      setMeta(data);
    20	    } catch {}
    21	    setLoading(false);
    22	  };
    23	
    24	  useEffect(() => { fetchHouses(); }, []);
    25	
    26	  const handleFilter = (e) => {
    27	    e.preventDefault();
    28	    setPage(1);
    29	    fetchHouses(1, filters);
    30	  };
    31	
    32	  const handlePage = (p) => {
    33	    setPage(p);
    34	    fetchHouses(p);
    35	    window.scrollTo({ top: 0, behavior: 'smooth' });
    36	  };
    37	
    38	  const setF = (k) => (e) => setFilters({ ...filters, [k]: e.target.value });
    39	
    40	  return (
    41	    <div className="max-w-7xl mx-auto px-4 py-8">
    42	      <div className="mb-8">
    43	        <h1 className="text-3xl font-bold text-gray-800">Browse Houses</h1>
    44	        <p className="text-gray-500 mt-1">Find your perfect rental home</p>
    45	      </div>
    46	
    47	      {/* Filters */}
    48	      <form onSubmit={handleFilter} className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
    49	        <Input placeholder="Search by name..." value={filters.title} onChange={setF('title')} />
    50	        <Input placeholder="Location..." value={filters.location} onChange={setF('location')} />
    51	        <Input type="number" placeholder="Min price" value={filters.min_price} onChange={setF('min_price')} />
    52	        <Input type="number" placeholder="Max price" value={filters.max_price} onChange={setF('max_price')} />
    53	        <div className="flex gap-2">
    54	          <Input type="number" placeholder="Rooms" value={filters.rooms} onChange={setF('rooms')} className="flex-1" />
    55	          <Button type="submit">Search</Button>
    56	        </div>
    57	      </form>
    58	
    59	      {loading ? (
    60	        <div className="flex justify-center py-20"><Spinner size={12} /></div>
    61	      ) : houses.length === 0 ? (
    62	        <div className="text-center py-20 text-gray-400">
    63	          <div className="text-6xl mb-4">🏚</div>
    64	          <p className="text-lg">No houses found matching your criteria.</p>
    65	        </div>
    66	      ) : (
    67	        <>
    68	          <p className="text-sm text-gray-500 mb-4">{meta?.total ?? houses.length} houses found</p>
    69	          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    70	            {houses.map((h) => <HouseCard key={h.id} house={h} />)}
    71	          </div>
    72	          <Pagination
    73	            meta={meta ? { current_page: meta.current_page, last_page: meta.last_page } : null}
    74	            onPage={handlePage}
    75	          />
    76	        </>
    77	      )}
    78	    </div>
    79	  );
    80	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from 'react';
- Line 2: import api from '../api/axios';
- Line 3: import HouseCard from '../components/HouseCard';
- Line 4: import { Spinner, Pagination, Input, Button, Select } from '../components/UI';
- Line 5: 
- Line 6: export default function HousesPage() {
- Line 7:   const [houses, setHouses] = useState([]);
- Line 8:   const [meta, setMeta]     = useState(null);
- Line 9:   const [page, setPage]     = useState(1);
- Line 10:   const [loading, setLoading] = useState(true);
- Line 11:   const [filters, setFilters] = useState({ title: '', location: '', min_price: '', max_price: '', rooms: '' });
- Line 12: 
- Line 13:   const fetchHouses = async (p = page, f = filters) => {
- Line 14:     setLoading(true);
- Line 15:     try {
- Line 16:       const params = { page: p, ...Object.fromEntries(Object.entries(f).filter(([, v]) => v !== '')) };
- Line 17:       const { data } = await api.get('/houses', { params });
- Line 18:       setHouses(data.data);
- Line 19:       setMeta(data);
- Line 20:     } catch {}
- Line 21:     setLoading(false);
- Line 22:   };
- Line 23: 
- Line 24:   useEffect(() => { fetchHouses(); }, []);
- Line 25: 
- Line 26:   const handleFilter = (e) => {
- Line 27:     e.preventDefault();
- Line 28:     setPage(1);
- Line 29:     fetchHouses(1, filters);
- Line 30:   };
- Line 31: 
- Line 32:   const handlePage = (p) => {
- Line 33:     setPage(p);
- Line 34:     fetchHouses(p);
- Line 35:     window.scrollTo({ top: 0, behavior: 'smooth' });
- Line 36:   };
- Line 37: 
- Line 38:   const setF = (k) => (e) => setFilters({ ...filters, [k]: e.target.value });
- Line 39: 
- Line 40:   return (
- Line 41:     <div className="max-w-7xl mx-auto px-4 py-8">
- Line 42:       <div className="mb-8">
- Line 43:         <h1 className="text-3xl font-bold text-gray-800">Browse Houses</h1>
- Line 44:         <p className="text-gray-500 mt-1">Find your perfect rental home</p>
- Line 45:       </div>
- Line 46: 
- Line 47:       {/* Filters */}
- Line 48:       <form onSubmit={handleFilter} className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
- Line 49:         <Input placeholder="Search by name..." value={filters.title} onChange={setF('title')} />
- Line 50:         <Input placeholder="Location..." value={filters.location} onChange={setF('location')} />
- Line 51:         <Input type="number" placeholder="Min price" value={filters.min_price} onChange={setF('min_price')} />
- Line 52:         <Input type="number" placeholder="Max price" value={filters.max_price} onChange={setF('max_price')} />
- Line 53:         <div className="flex gap-2">
- Line 54:           <Input type="number" placeholder="Rooms" value={filters.rooms} onChange={setF('rooms')} className="flex-1" />
- Line 55:           <Button type="submit">Search</Button>
- Line 56:         </div>
- Line 57:       </form>
- Line 58: 
- Line 59:       {loading ? (
- Line 60:         <div className="flex justify-center py-20"><Spinner size={12} /></div>
- Line 61:       ) : houses.length === 0 ? (
- Line 62:         <div className="text-center py-20 text-gray-400">
- Line 63:           <div className="text-6xl mb-4">🏚</div>
- Line 64:           <p className="text-lg">No houses found matching your criteria.</p>
- Line 65:         </div>
- Line 66:       ) : (
- Line 67:         <>
- Line 68:           <p className="text-sm text-gray-500 mb-4">{meta?.total ?? houses.length} houses found</p>
- Line 69:           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
- Line 70:             {houses.map((h) => <HouseCard key={h.id} house={h} />)}
- Line 71:           </div>
- Line 72:           <Pagination
- Line 73:             meta={meta ? { current_page: meta.current_page, last_page: meta.last_page } : null}
- Line 74:             onPage={handlePage}
- Line 75:           />
- Line 76:         </>
- Line 77:       )}
- Line 78:     </div>
- Line 79:   );
- Line 80: }

