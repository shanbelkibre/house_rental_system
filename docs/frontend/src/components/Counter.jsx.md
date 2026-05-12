# Counter.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect, useRef } from "react";
     2	
     3	export default function Counter({ end, duration = 2000, suffix = "" }) {
     4	  const [count, setCount] = useState(0);
     5	  const countRef = useRef(null);
     6	  const [isVisible, setIsVisible] = useState(false);
     7	
     8	  useEffect(() => {
     9	    const observer = new IntersectionObserver(
    10	      ([entry]) => {
    11	        if (entry.isIntersecting) {
    12	          setIsVisible(true);
    13	          observer.disconnect();
    14	        }
    15	      },
    16	      { threshold: 0.1 }
    17	    );
    18	
    19	    if (countRef.current) {
    20	      observer.observe(countRef.current);
    21	    }
    22	
    23	    return () => observer.disconnect();
    24	  }, []);
    25	
    26	  useEffect(() => {
    27	    if (!isVisible) return;
    28	
    29	    let startTime = null;
    30	    const animateCount = (timestamp) => {
    31	      if (!startTime) startTime = timestamp;
    32	      const progress = timestamp - startTime;
    33	      const progressPercentage = Math.min(progress / duration, 1);
    34	      
    35	      // Easing function (easeOutExpo)
    36	      const easeOut = progressPercentage === 1 ? 1 : 1 - Math.pow(2, -10 * progressPercentage);
    37	      
    38	      setCount(Math.floor(easeOut * end));
    39	
    40	      if (progressPercentage < 1) {
    41	        requestAnimationFrame(animateCount);
    42	      } else {
    43	        setCount(end);
    44	      }
    45	    };
    46	
    47	    requestAnimationFrame(animateCount);
    48	  }, [end, duration, isVisible]);
    49	
    50	  return (
    51	    <span ref={countRef}>
    52	      {count}{suffix}
    53	    </span>
    54	  );
    55	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect, useRef } from "react";
- Line 2: 
- Line 3: export default function Counter({ end, duration = 2000, suffix = "" }) {
- Line 4:   const [count, setCount] = useState(0);
- Line 5:   const countRef = useRef(null);
- Line 6:   const [isVisible, setIsVisible] = useState(false);
- Line 7: 
- Line 8:   useEffect(() => {
- Line 9:     const observer = new IntersectionObserver(
- Line 10:       ([entry]) => {
- Line 11:         if (entry.isIntersecting) {
- Line 12:           setIsVisible(true);
- Line 13:           observer.disconnect();
- Line 14:         }
- Line 15:       },
- Line 16:       { threshold: 0.1 }
- Line 17:     );
- Line 18: 
- Line 19:     if (countRef.current) {
- Line 20:       observer.observe(countRef.current);
- Line 21:     }
- Line 22: 
- Line 23:     return () => observer.disconnect();
- Line 24:   }, []);
- Line 25: 
- Line 26:   useEffect(() => {
- Line 27:     if (!isVisible) return;
- Line 28: 
- Line 29:     let startTime = null;
- Line 30:     const animateCount = (timestamp) => {
- Line 31:       if (!startTime) startTime = timestamp;
- Line 32:       const progress = timestamp - startTime;
- Line 33:       const progressPercentage = Math.min(progress / duration, 1);
- Line 34:       
- Line 35:       // Easing function (easeOutExpo)
- Line 36:       const easeOut = progressPercentage === 1 ? 1 : 1 - Math.pow(2, -10 * progressPercentage);
- Line 37:       
- Line 38:       setCount(Math.floor(easeOut * end));
- Line 39: 
- Line 40:       if (progressPercentage < 1) {
- Line 41:         requestAnimationFrame(animateCount);
- Line 42:       } else {
- Line 43:         setCount(end);
- Line 44:       }
- Line 45:     };
- Line 46: 
- Line 47:     requestAnimationFrame(animateCount);
- Line 48:   }, [end, duration, isVisible]);
- Line 49: 
- Line 50:   return (
- Line 51:     <span ref={countRef}>
- Line 52:       {count}{suffix}
- Line 53:     </span>
- Line 54:   );
- Line 55: }

