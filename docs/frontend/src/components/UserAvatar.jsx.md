# UserAvatar.jsx

## Code (numbered)

```jsx
     1	import { useState, useRef, useEffect } from 'react';
     2	import { Link } from 'react-router-dom';
     3	import { toStorageUrl } from '../utils/media';
     4	
     5	export default function UserAvatar({ user, size = 'md', showDropdown = false, onLogout }) {
     6	  const [open, setOpen] = useState(false);
     7	  const ref = useRef(null);
     8	  
     9	  const sizes = {
    10	    sm: 'w-8 h-8 text-sm border-2',
    11	    md: 'w-12 h-12 text-base border-2',
    12	    lg: 'w-20 h-20 text-2xl border-4',
    13	    xl: 'w-32 h-32 text-4xl border-4',
    14	  };
    15	
    16	  const currentSize = sizes[size] || sizes.md;
    17	  const imgUrl = toStorageUrl(user?.profile_image);
    18	
    19	  useEffect(() => {
    20	    const handleClickOutside = (event) => {
    21	      if (ref.current && !ref.current.contains(event.target)) {
    22	        setOpen(false);
    23	      }
    24	    };
    25	    document.addEventListener("mousedown", handleClickOutside);
    26	    return () => document.removeEventListener("mousedown", handleClickOutside);
    27	  }, [ref]);
    28	
    29	  const avatar = (
    30	    <div 
    31	      className={`${currentSize} rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer border-white shadow-sm transition-transform hover:scale-105`}
    32	      onClick={() => showDropdown && setOpen(!open)}
    33	    >
    34	      {imgUrl ? (
    35	        <img src={imgUrl} alt={user?.name} className="w-full h-full object-cover" />
    36	      ) : (
    37	        <span className="text-gray-400">👤</span>
    38	      )}
    39	    </div>
    40	  );
    41	
    42	  if (!showDropdown) return avatar;
    43	
    44	  return (
    45	    <div className="relative" ref={ref}>
    46	      {avatar}
    47	      {open && (
    48	        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 transform origin-top-right transition-all">
    49	          <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/50">
    50	            <p className="text-sm font-bold text-gray-800 truncate">{user?.name}</p>
    51	            <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
    52	          </div>
    53	          <div className="py-1">
    54	            <Link to="/profile" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setOpen(false)}>
    55	              My Profile
    56	            </Link>
    57	          </div>
    58	          <div className="border-t border-gray-50 py-1">
    59	            <button 
    60	              onClick={() => { setOpen(false); onLogout && onLogout(); }}
    61	              className="w-full text-left px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
    62	            >
    63	              Logout
    64	            </button>
    65	          </div>
    66	        </div>
    67	      )}
    68	    </div>
    69	  );
    70	}
```

## Line-by-line explanation

- Line 1: import { useState, useRef, useEffect } from 'react';
- Line 2: import { Link } from 'react-router-dom';
- Line 3: import { toStorageUrl } from '../utils/media';
- Line 4: 
- Line 5: export default function UserAvatar({ user, size = 'md', showDropdown = false, onLogout }) {
- Line 6:   const [open, setOpen] = useState(false);
- Line 7:   const ref = useRef(null);
- Line 8:   
- Line 9:   const sizes = {
- Line 10:     sm: 'w-8 h-8 text-sm border-2',
- Line 11:     md: 'w-12 h-12 text-base border-2',
- Line 12:     lg: 'w-20 h-20 text-2xl border-4',
- Line 13:     xl: 'w-32 h-32 text-4xl border-4',
- Line 14:   };
- Line 15: 
- Line 16:   const currentSize = sizes[size] || sizes.md;
- Line 17:   const imgUrl = toStorageUrl(user?.profile_image);
- Line 18: 
- Line 19:   useEffect(() => {
- Line 20:     const handleClickOutside = (event) => {
- Line 21:       if (ref.current && !ref.current.contains(event.target)) {
- Line 22:         setOpen(false);
- Line 23:       }
- Line 24:     };
- Line 25:     document.addEventListener("mousedown", handleClickOutside);
- Line 26:     return () => document.removeEventListener("mousedown", handleClickOutside);
- Line 27:   }, [ref]);
- Line 28: 
- Line 29:   const avatar = (
- Line 30:     <div 
- Line 31:       className={`${currentSize} rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer border-white shadow-sm transition-transform hover:scale-105`}
- Line 32:       onClick={() => showDropdown && setOpen(!open)}
- Line 33:     >
- Line 34:       {imgUrl ? (
- Line 35:         <img src={imgUrl} alt={user?.name} className="w-full h-full object-cover" />
- Line 36:       ) : (
- Line 37:         <span className="text-gray-400">👤</span>
- Line 38:       )}
- Line 39:     </div>
- Line 40:   );
- Line 41: 
- Line 42:   if (!showDropdown) return avatar;
- Line 43: 
- Line 44:   return (
- Line 45:     <div className="relative" ref={ref}>
- Line 46:       {avatar}
- Line 47:       {open && (
- Line 48:         <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 transform origin-top-right transition-all">
- Line 49:           <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/50">
- Line 50:             <p className="text-sm font-bold text-gray-800 truncate">{user?.name}</p>
- Line 51:             <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
- Line 52:           </div>
- Line 53:           <div className="py-1">
- Line 54:             <Link to="/profile" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setOpen(false)}>
- Line 55:               My Profile
- Line 56:             </Link>
- Line 57:           </div>
- Line 58:           <div className="border-t border-gray-50 py-1">
- Line 59:             <button 
- Line 60:               onClick={() => { setOpen(false); onLogout && onLogout(); }}
- Line 61:               className="w-full text-left px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
- Line 62:             >
- Line 63:               Logout
- Line 64:             </button>
- Line 65:           </div>
- Line 66:         </div>
- Line 67:       )}
- Line 68:     </div>
- Line 69:   );
- Line 70: }

