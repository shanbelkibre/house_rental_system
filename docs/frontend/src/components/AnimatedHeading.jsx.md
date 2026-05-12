# AnimatedHeading.jsx

## Code (numbered)

```jsx
     1	import React, { useEffect, useState } from 'react';
     2	
     3	export default function AnimatedHeading({ text, className }) {
     4	  const [startAnim, setStartAnim] = useState(false);
     5	
     6	  useEffect(() => {
     7	    const timer = setTimeout(() => {
     8	      setStartAnim(true);
     9	    }, 200);
    10	    return () => clearTimeout(timer);
    11	  }, []);
    12	
    13	  const lines = text.split('\n');
    14	  let charIndexAbsolute = 0;
    15	  const charDelay = 30; // 30ms
    16	
    17	  return (
    18	    <h1 className={className}>
    19	      {lines.map((line, lineIndex) => (
    20	        <span key={lineIndex} className="block">
    21	          {line.split('').map((char, charIndex) => {
    22	            const currentDelay = charIndexAbsolute * charDelay;
    23	            charIndexAbsolute++;
    24	            
    25	            return (
    26	              <span
    27	                key={charIndex}
    28	                className="inline-block transition-all duration-500 ease-out"
    29	                style={{
    30	                  opacity: startAnim ? 1 : 0,
    31	                  transform: startAnim ? 'translateX(0)' : 'translateX(-18px)',
    32	                  transitionDelay: `${currentDelay}ms`,
    33	                  whiteSpace: 'pre',
    34	                }}
    35	              >
    36	                {char === ' ' ? '\u00A0' : char}
    37	              </span>
    38	            );
    39	          })}
    40	        </span>
    41	      ))}
    42	    </h1>
    43	  );
    44	}
```

## Line-by-line explanation

- Line 1: import React, { useEffect, useState } from 'react';
- Line 2: 
- Line 3: export default function AnimatedHeading({ text, className }) {
- Line 4:   const [startAnim, setStartAnim] = useState(false);
- Line 5: 
- Line 6:   useEffect(() => {
- Line 7:     const timer = setTimeout(() => {
- Line 8:       setStartAnim(true);
- Line 9:     }, 200);
- Line 10:     return () => clearTimeout(timer);
- Line 11:   }, []);
- Line 12: 
- Line 13:   const lines = text.split('\n');
- Line 14:   let charIndexAbsolute = 0;
- Line 15:   const charDelay = 30; // 30ms
- Line 16: 
- Line 17:   return (
- Line 18:     <h1 className={className}>
- Line 19:       {lines.map((line, lineIndex) => (
- Line 20:         <span key={lineIndex} className="block">
- Line 21:           {line.split('').map((char, charIndex) => {
- Line 22:             const currentDelay = charIndexAbsolute * charDelay;
- Line 23:             charIndexAbsolute++;
- Line 24:             
- Line 25:             return (
- Line 26:               <span
- Line 27:                 key={charIndex}
- Line 28:                 className="inline-block transition-all duration-500 ease-out"
- Line 29:                 style={{
- Line 30:                   opacity: startAnim ? 1 : 0,
- Line 31:                   transform: startAnim ? 'translateX(0)' : 'translateX(-18px)',
- Line 32:                   transitionDelay: `${currentDelay}ms`,
- Line 33:                   whiteSpace: 'pre',
- Line 34:                 }}
- Line 35:               >
- Line 36:                 {char === ' ' ? '\u00A0' : char}
- Line 37:               </span>
- Line 38:             );
- Line 39:           })}
- Line 40:         </span>
- Line 41:       ))}
- Line 42:     </h1>
- Line 43:   );
- Line 44: }

