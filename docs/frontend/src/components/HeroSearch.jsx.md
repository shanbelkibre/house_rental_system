# HeroSearch.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import { useNavigate } from "react-router-dom";
     3	
     4	export default function HeroSearch() {
     5	  const [location, setLocation] = useState("");
     6	  const [priceRange, setPriceRange] = useState("");
     7	  const [rooms, setRooms] = useState("");
     8	  const navigate = useNavigate();
     9	
    10	  const handleSearch = (e) => {
    11	    e.preventDefault();
    12	    const params = new URLSearchParams();
    13	    if (location) params.append("search", location);
    14	    if (priceRange) params.append("max_price", priceRange);
    15	    if (rooms) params.append("rooms", rooms);
    16	    
    17	    navigate(`/houses?${params.toString()}`);
    18	  };
    19	
    20	  return (
    21	    <form onSubmit={handleSearch} className="liquid-glass border border-white/20 p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-4xl w-full">
    22	      <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
    23	        <span className="text-gray-400 mr-3">📍</span>
    24	        <input 
    25	          type="text" 
    26	          placeholder="Where do you want to live?" 
    27	          className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-sm md:text-base"
    28	          value={location}
    29	          onChange={(e) => setLocation(e.target.value)}
    30	        />
    31	      </div>
    32	      
    33	      <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
    34	        <span className="text-gray-400 mr-3">💰</span>
    35	        <select 
    36	          className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base appearance-none cursor-pointer"
    37	          value={priceRange}
    38	          onChange={(e) => setPriceRange(e.target.value)}
    39	        >
    40	          <option value="" className="text-black">Any Price</option>
    41	          <option value="5000" className="text-black">Up to 5,000 ETB</option>
    42	          <option value="10000" className="text-black">Up to 10,000 ETB</option>
    43	          <option value="20000" className="text-black">Up to 20,000 ETB</option>
    44	          <option value="50000" className="text-black">Up to 50,000 ETB</option>
    45	        </select>
    46	      </div>
    47	
    48	      <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
    49	        <span className="text-gray-400 mr-3">🛏️</span>
    50	        <select 
    51	          className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base appearance-none cursor-pointer"
    52	          value={rooms}
    53	          onChange={(e) => setRooms(e.target.value)}
    54	        >
    55	          <option value="" className="text-black">Rooms</option>
    56	          <option value="1" className="text-black">1+ Rooms</option>
    57	          <option value="2" className="text-black">2+ Rooms</option>
    58	          <option value="3" className="text-black">3+ Rooms</option>
    59	          <option value="4" className="text-black">4+ Rooms</option>
    60	        </select>
    61	      </div>
    62	
    63	      <button 
    64	        type="submit" 
    65	        className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-3 md:py-4 font-semibold transition-colors flex items-center justify-center min-w-[120px]"
    66	      >
    67	        Search
    68	      </button>
    69	    </form>
    70	  );
    71	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import { useNavigate } from "react-router-dom";
- Line 3: 
- Line 4: export default function HeroSearch() {
- Line 5:   const [location, setLocation] = useState("");
- Line 6:   const [priceRange, setPriceRange] = useState("");
- Line 7:   const [rooms, setRooms] = useState("");
- Line 8:   const navigate = useNavigate();
- Line 9: 
- Line 10:   const handleSearch = (e) => {
- Line 11:     e.preventDefault();
- Line 12:     const params = new URLSearchParams();
- Line 13:     if (location) params.append("search", location);
- Line 14:     if (priceRange) params.append("max_price", priceRange);
- Line 15:     if (rooms) params.append("rooms", rooms);
- Line 16:     
- Line 17:     navigate(`/houses?${params.toString()}`);
- Line 18:   };
- Line 19: 
- Line 20:   return (
- Line 21:     <form onSubmit={handleSearch} className="liquid-glass border border-white/20 p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-4xl w-full">
- Line 22:       <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
- Line 23:         <span className="text-gray-400 mr-3">📍</span>
- Line 24:         <input 
- Line 25:           type="text" 
- Line 26:           placeholder="Where do you want to live?" 
- Line 27:           className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-sm md:text-base"
- Line 28:           value={location}
- Line 29:           onChange={(e) => setLocation(e.target.value)}
- Line 30:         />
- Line 31:       </div>
- Line 32:       
- Line 33:       <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
- Line 34:         <span className="text-gray-400 mr-3">💰</span>
- Line 35:         <select 
- Line 36:           className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base appearance-none cursor-pointer"
- Line 37:           value={priceRange}
- Line 38:           onChange={(e) => setPriceRange(e.target.value)}
- Line 39:         >
- Line 40:           <option value="" className="text-black">Any Price</option>
- Line 41:           <option value="5000" className="text-black">Up to 5,000 ETB</option>
- Line 42:           <option value="10000" className="text-black">Up to 10,000 ETB</option>
- Line 43:           <option value="20000" className="text-black">Up to 20,000 ETB</option>
- Line 44:           <option value="50000" className="text-black">Up to 50,000 ETB</option>
- Line 45:         </select>
- Line 46:       </div>
- Line 47: 
- Line 48:       <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
- Line 49:         <span className="text-gray-400 mr-3">🛏️</span>
- Line 50:         <select 
- Line 51:           className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base appearance-none cursor-pointer"
- Line 52:           value={rooms}
- Line 53:           onChange={(e) => setRooms(e.target.value)}
- Line 54:         >
- Line 55:           <option value="" className="text-black">Rooms</option>
- Line 56:           <option value="1" className="text-black">1+ Rooms</option>
- Line 57:           <option value="2" className="text-black">2+ Rooms</option>
- Line 58:           <option value="3" className="text-black">3+ Rooms</option>
- Line 59:           <option value="4" className="text-black">4+ Rooms</option>
- Line 60:         </select>
- Line 61:       </div>
- Line 62: 
- Line 63:       <button 
- Line 64:         type="submit" 
- Line 65:         className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-3 md:py-4 font-semibold transition-colors flex items-center justify-center min-w-[120px]"
- Line 66:       >
- Line 67:         Search
- Line 68:       </button>
- Line 69:     </form>
- Line 70:   );
- Line 71: }

