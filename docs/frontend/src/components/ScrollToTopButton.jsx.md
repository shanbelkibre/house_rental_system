# ScrollToTopButton.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	
     3	export default function ScrollToTopButton() {
     4	  const [isVisible, setIsVisible] = useState(false);
     5	
     6	  const toggleVisibility = () => {
     7	    if (window.pageYOffset > 300) {
     8	      setIsVisible(true);
     9	    } else {
    10	      setIsVisible(false);
    11	    }
    12	  };
    13	
    14	  const scrollToTop = () => {
    15	    window.scrollTo({
    16	      top: 0,
    17	      behavior: "smooth",
    18	    });
    19	  };
    20	
    21	  useEffect(() => {
    22	    window.addEventListener("scroll", toggleVisibility);
    23	
    24	    return () => {
    25	      window.removeEventListener("scroll", toggleVisibility);
    26	    };
    27	  }, []);
    28	
    29	  return (
    30	    <div className="fixed bottom-5 right-5 z-50">
    31	      {isVisible && (
    32	        <button
    33	          onClick={scrollToTop}
    34	          className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity duration-300"
    35	          aria-label="Go to top"
    36	        >
    37	          <span className="text-2xl">↑</span>
    38	        </button>
    39	      )}
    40	    </div>
    41	  );
    42	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: 
- Line 3: export default function ScrollToTopButton() {
- Line 4:   const [isVisible, setIsVisible] = useState(false);
- Line 5: 
- Line 6:   const toggleVisibility = () => {
- Line 7:     if (window.pageYOffset > 300) {
- Line 8:       setIsVisible(true);
- Line 9:     } else {
- Line 10:       setIsVisible(false);
- Line 11:     }
- Line 12:   };
- Line 13: 
- Line 14:   const scrollToTop = () => {
- Line 15:     window.scrollTo({
- Line 16:       top: 0,
- Line 17:       behavior: "smooth",
- Line 18:     });
- Line 19:   };
- Line 20: 
- Line 21:   useEffect(() => {
- Line 22:     window.addEventListener("scroll", toggleVisibility);
- Line 23: 
- Line 24:     return () => {
- Line 25:       window.removeEventListener("scroll", toggleVisibility);
- Line 26:     };
- Line 27:   }, []);
- Line 28: 
- Line 29:   return (
- Line 30:     <div className="fixed bottom-5 right-5 z-50">
- Line 31:       {isVisible && (
- Line 32:         <button
- Line 33:           onClick={scrollToTop}
- Line 34:           className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity duration-300"
- Line 35:           aria-label="Go to top"
- Line 36:         >
- Line 37:           <span className="text-2xl">↑</span>
- Line 38:         </button>
- Line 39:       )}
- Line 40:     </div>
- Line 41:   );
- Line 42: }

