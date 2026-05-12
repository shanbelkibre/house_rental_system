# ScrollToTop.jsx

## Code (numbered)

```jsx
     1	import { useEffect } from "react";
     2	import { useLocation } from "react-router-dom";
     3	
     4	export default function ScrollToTop() {
     5	  const { pathname } = useLocation();
     6	
     7	  useEffect(() => {
     8	    window.scrollTo(0, 0);
     9	  }, [pathname]);
    10	
    11	  return null;
    12	}
```

## Line-by-line explanation

- Line 1: import { useEffect } from "react";
- Line 2: import { useLocation } from "react-router-dom";
- Line 3: 
- Line 4: export default function ScrollToTop() {
- Line 5:   const { pathname } = useLocation();
- Line 6: 
- Line 7:   useEffect(() => {
- Line 8:     window.scrollTo(0, 0);
- Line 9:   }, [pathname]);
- Line 10: 
- Line 11:   return null;
- Line 12: }

