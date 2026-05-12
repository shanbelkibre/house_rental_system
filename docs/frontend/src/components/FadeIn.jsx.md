# FadeIn.jsx

## Code (numbered)

```jsx
     1	import React, { useEffect, useState } from 'react';
     2	
     3	export default function FadeIn({ children, delay = 0, duration = 1000, className = '' }) {
     4	  const [startAnim, setStartAnim] = useState(false);
     5	
     6	  useEffect(() => {
     7	    const timer = setTimeout(() => {
     8	      setStartAnim(true);
     9	    }, delay);
    10	    return () => clearTimeout(timer);
    11	  }, [delay]);
    12	
    13	  return (
    14	    <div
    15	      className={`transition-opacity ${className}`}
    16	      style={{
    17	        opacity: startAnim ? 1 : 0,
    18	        transitionDuration: `${duration}ms`,
    19	      }}
    20	    >
    21	      {children}
    22	    </div>
    23	  );
    24	}
```

## Line-by-line explanation

- Line 1: import React, { useEffect, useState } from 'react';
- Line 2: 
- Line 3: export default function FadeIn({ children, delay = 0, duration = 1000, className = '' }) {
- Line 4:   const [startAnim, setStartAnim] = useState(false);
- Line 5: 
- Line 6:   useEffect(() => {
- Line 7:     const timer = setTimeout(() => {
- Line 8:       setStartAnim(true);
- Line 9:     }, delay);
- Line 10:     return () => clearTimeout(timer);
- Line 11:   }, [delay]);
- Line 12: 
- Line 13:   return (
- Line 14:     <div
- Line 15:       className={`transition-opacity ${className}`}
- Line 16:       style={{
- Line 17:         opacity: startAnim ? 1 : 0,
- Line 18:         transitionDuration: `${duration}ms`,
- Line 19:       }}
- Line 20:     >
- Line 21:       {children}
- Line 22:     </div>
- Line 23:   );
- Line 24: }

