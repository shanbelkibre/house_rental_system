# FeaturedHouses.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	import { Link } from "react-router-dom";
     3	import HouseCard from "./HouseCard";
     4	import { listHouses } from "../services/api";
     5	
     6	export default function FeaturedHouses() {
     7	  const [houses, setHouses] = useState([]);
     8	  const [loading, setLoading] = useState(true);
     9	
    10	  useEffect(() => {
    11	    const fetchHouses = async () => {
    12	      try {
    13	        // Fetch a few houses, assuming backend sorts by newest or featured
    14	        const res = await listHouses({ per_page: 3 });
    15	        // Use standard response structure
    16	        if (res.data?.data) {
    17	          setHouses(res.data.data.slice(0, 3));
    18	        } else if (Array.isArray(res.data)) {
    19	          setHouses(res.data.slice(0, 3));
    20	        }
    21	      } catch (error) {
    22	        console.error("Error fetching featured houses:", error);
    23	      } finally {
    24	        setLoading(false);
    25	      }
    26	    };
    27	
    28	    fetchHouses();
    29	  }, []);
    30	
    31	  if (loading) {
    32	    return (
    33	      <div className="py-20 flex justify-center">
    34	        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    35	      </div>
    36	    );
    37	  }
    38	
    39	  if (houses.length === 0) {
    40	    return null; // Don't show section if no houses
    41	  }
    42	
    43	  return (
    44	    <section className="py-20 bg-white dark:bg-black relative">
    45	      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
    46	        <div className="flex justify-between items-end mb-12">
    47	          <div>
    48	            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
    49	              Featured Properties
    50	            </h2>
    51	            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
    52	              Hand-picked selection of quality homes available for rent right
    53	              now.
    54	            </p>
    55	          </div>
    56	          <Link
    57	            to="/houses"
    58	            className="hidden md:flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-medium group"
    59	          >
    60	            View all properties
    61	            <span className="ml-2 group-hover:translate-x-1 transition-transform">
    62	              →
    63	            </span>
    64	          </Link>
    65	        </div>
    66	
    67	        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    68	          {houses.map((house) => (
    69	            <HouseCard key={house.id} house={house} />
    70	          ))}
    71	        </div>
    72	
    73	        <div className="mt-10 md:hidden text-center">
    74	          <Link
    75	            to="/houses"
    76	            className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-medium group"
    77	          >
    78	            View all properties
    79	            <span className="ml-2 group-hover:translate-x-1 transition-transform">
    80	              →
    81	            </span>
    82	          </Link>
    83	        </div>
    84	      </div>
    85	    </section>
    86	  );
    87	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: import { Link } from "react-router-dom";
- Line 3: import HouseCard from "./HouseCard";
- Line 4: import { listHouses } from "../services/api";
- Line 5: 
- Line 6: export default function FeaturedHouses() {
- Line 7:   const [houses, setHouses] = useState([]);
- Line 8:   const [loading, setLoading] = useState(true);
- Line 9: 
- Line 10:   useEffect(() => {
- Line 11:     const fetchHouses = async () => {
- Line 12:       try {
- Line 13:         // Fetch a few houses, assuming backend sorts by newest or featured
- Line 14:         const res = await listHouses({ per_page: 3 });
- Line 15:         // Use standard response structure
- Line 16:         if (res.data?.data) {
- Line 17:           setHouses(res.data.data.slice(0, 3));
- Line 18:         } else if (Array.isArray(res.data)) {
- Line 19:           setHouses(res.data.slice(0, 3));
- Line 20:         }
- Line 21:       } catch (error) {
- Line 22:         console.error("Error fetching featured houses:", error);
- Line 23:       } finally {
- Line 24:         setLoading(false);
- Line 25:       }
- Line 26:     };
- Line 27: 
- Line 28:     fetchHouses();
- Line 29:   }, []);
- Line 30: 
- Line 31:   if (loading) {
- Line 32:     return (
- Line 33:       <div className="py-20 flex justify-center">
- Line 34:         <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
- Line 35:       </div>
- Line 36:     );
- Line 37:   }
- Line 38: 
- Line 39:   if (houses.length === 0) {
- Line 40:     return null; // Don't show section if no houses
- Line 41:   }
- Line 42: 
- Line 43:   return (
- Line 44:     <section className="py-20 bg-white dark:bg-black relative">
- Line 45:       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
- Line 46:         <div className="flex justify-between items-end mb-12">
- Line 47:           <div>
- Line 48:             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
- Line 49:               Featured Properties
- Line 50:             </h2>
- Line 51:             <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
- Line 52:               Hand-picked selection of quality homes available for rent right
- Line 53:               now.
- Line 54:             </p>
- Line 55:           </div>
- Line 56:           <Link
- Line 57:             to="/houses"
- Line 58:             className="hidden md:flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-medium group"
- Line 59:           >
- Line 60:             View all properties
- Line 61:             <span className="ml-2 group-hover:translate-x-1 transition-transform">
- Line 62:               →
- Line 63:             </span>
- Line 64:           </Link>
- Line 65:         </div>
- Line 66: 
- Line 67:         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
- Line 68:           {houses.map((house) => (
- Line 69:             <HouseCard key={house.id} house={house} />
- Line 70:           ))}
- Line 71:         </div>
- Line 72: 
- Line 73:         <div className="mt-10 md:hidden text-center">
- Line 74:           <Link
- Line 75:             to="/houses"
- Line 76:             className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-medium group"
- Line 77:           >
- Line 78:             View all properties
- Line 79:             <span className="ml-2 group-hover:translate-x-1 transition-transform">
- Line 80:               →
- Line 81:             </span>
- Line 82:           </Link>
- Line 83:         </div>
- Line 84:       </div>
- Line 85:     </section>
- Line 86:   );
- Line 87: }

