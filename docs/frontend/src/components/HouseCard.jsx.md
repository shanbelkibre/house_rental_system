# HouseCard.jsx

## Code (numbered)

```jsx
     1	import { Link } from "react-router-dom";
     2	import { Badge } from "./UI";
     3	import { toStorageUrl } from "../utils/media";
     4	
     5	export default function HouseCard({ house }) {
     6	  const imgSrc = toStorageUrl(house.images?.[0]?.image_path);
     7	
     8	  return (
     9	    <div className="bg-white dark:bg-gray-800/20 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden hover:shadow-md transition-shadow group">
    10	      {/* Image */}
    11	      <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
    12	        {imgSrc ? (
    13	          <img
    14	            src={imgSrc}
    15	            alt={house.title}
    16	            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    17	          />
    18	        ) : (
    19	          <div className="w-full h-full flex items-center justify-center text-5xl text-gray-400 dark:text-gray-500">
    20	            🏠
    21	          </div>
    22	        )}
    23	        <div className="absolute top-3 left-3">
    24	          <Badge
    25	            label={house.status === "available" ? "Available" : "Rented"}
    26	            color={house.status === "available" ? "green" : "red"}
    27	          />
    28	        </div>
    29	      </div>
    30	
    31	      {/* Content */}
    32	      <div className="p-4 space-y-2">
    33	        <h3 className="font-semibold text-gray-800 dark:text-white text-base line-clamp-1">
    34	          {house.title}
    35	        </h3>
    36	
    37	        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
    38	          <span>📍</span> {house.location}
    39	        </p>
    40	
    41	        <div className="flex items-center justify-between">
    42	          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
    43	            ETB {Number(house.price).toLocaleString()}
    44	            <span className="text-gray-400 dark:text-gray-500 font-normal text-sm">
    45	              /mo
    46	            </span>
    47	          </span>
    48	          <span className="text-sm text-gray-500 dark:text-gray-400">
    49	            🛏 {house.rooms} room{house.rooms !== 1 ? "s" : ""}
    50	          </span>
    51	        </div>
    52	
    53	        {house.owner && (
    54	          <p className="text-xs text-gray-400 dark:text-gray-500">
    55	            Owner: {house.owner.name}
    56	          </p>
    57	        )}
    58	
    59	        <Link
    60	          to={`/houses/${house.id}`}
    61	          className="block mt-2 text-center bg-blue-600/80 dark:bg-blue-500/50 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700/90 dark:hover:bg-blue-600/60 transition-colors"
    62	        >
    63	          View Details
    64	        </Link>
    65	      </div>
    66	    </div>
    67	  );
    68	}
```

## Line-by-line explanation

- Line 1: import { Link } from "react-router-dom";
- Line 2: import { Badge } from "./UI";
- Line 3: import { toStorageUrl } from "../utils/media";
- Line 4: 
- Line 5: export default function HouseCard({ house }) {
- Line 6:   const imgSrc = toStorageUrl(house.images?.[0]?.image_path);
- Line 7: 
- Line 8:   return (
- Line 9:     <div className="bg-white dark:bg-gray-800/20 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden hover:shadow-md transition-shadow group">
- Line 10:       {/* Image */}
- Line 11:       <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
- Line 12:         {imgSrc ? (
- Line 13:           <img
- Line 14:             src={imgSrc}
- Line 15:             alt={house.title}
- Line 16:             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
- Line 17:           />
- Line 18:         ) : (
- Line 19:           <div className="w-full h-full flex items-center justify-center text-5xl text-gray-400 dark:text-gray-500">
- Line 20:             🏠
- Line 21:           </div>
- Line 22:         )}
- Line 23:         <div className="absolute top-3 left-3">
- Line 24:           <Badge
- Line 25:             label={house.status === "available" ? "Available" : "Rented"}
- Line 26:             color={house.status === "available" ? "green" : "red"}
- Line 27:           />
- Line 28:         </div>
- Line 29:       </div>
- Line 30: 
- Line 31:       {/* Content */}
- Line 32:       <div className="p-4 space-y-2">
- Line 33:         <h3 className="font-semibold text-gray-800 dark:text-white text-base line-clamp-1">
- Line 34:           {house.title}
- Line 35:         </h3>
- Line 36: 
- Line 37:         <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
- Line 38:           <span>📍</span> {house.location}
- Line 39:         </p>
- Line 40: 
- Line 41:         <div className="flex items-center justify-between">
- Line 42:           <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
- Line 43:             ETB {Number(house.price).toLocaleString()}
- Line 44:             <span className="text-gray-400 dark:text-gray-500 font-normal text-sm">
- Line 45:               /mo
- Line 46:             </span>
- Line 47:           </span>
- Line 48:           <span className="text-sm text-gray-500 dark:text-gray-400">
- Line 49:             🛏 {house.rooms} room{house.rooms !== 1 ? "s" : ""}
- Line 50:           </span>
- Line 51:         </div>
- Line 52: 
- Line 53:         {house.owner && (
- Line 54:           <p className="text-xs text-gray-400 dark:text-gray-500">
- Line 55:             Owner: {house.owner.name}
- Line 56:           </p>
- Line 57:         )}
- Line 58: 
- Line 59:         <Link
- Line 60:           to={`/houses/${house.id}`}
- Line 61:           className="block mt-2 text-center bg-blue-600/80 dark:bg-blue-500/50 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700/90 dark:hover:bg-blue-600/60 transition-colors"
- Line 62:         >
- Line 63:           View Details
- Line 64:         </Link>
- Line 65:       </div>
- Line 66:     </div>
- Line 67:   );
- Line 68: }

