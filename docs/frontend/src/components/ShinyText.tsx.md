# ShinyText.tsx

## Code (numbered)

```tsx
     1	import { motion } from "framer-motion";
     2	import React from "react";
     3	
     4	type ShinyTextProps = {
     5	  text: string;
     6	  className?: string;
     7	  baseColor?: string;
     8	  shineColor?: string;
     9	  durationSeconds?: number;
    10	  spreadDegrees?: number;
    11	};
    12	
    13	export default function ShinyText({
    14	  text,
    15	  className,
    16	  baseColor = "#64CEFB",
    17	  shineColor = "#ffffff",
    18	  durationSeconds = 3,
    19	  spreadDegrees = 100,
    20	}: ShinyTextProps) {
    21	  const style: React.CSSProperties = {
    22	    backgroundImage: `linear-gradient(${spreadDegrees}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`,
    23	    backgroundSize: "200% 100%",
    24	    backgroundPosition: "0% 50%",
    25	    WebkitBackgroundClip: "text",
    26	    backgroundClip: "text",
    27	    WebkitTextFillColor: "transparent",
    28	    color: "transparent",
    29	  };
    30	
    31	  return (
    32	    <motion.span
    33	      className={className}
    34	      style={style}
    35	      animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
    36	      transition={{
    37	        duration: durationSeconds,
    38	        ease: "linear",
    39	        repeat: Infinity,
    40	      }}
    41	    >
    42	      {text}
    43	    </motion.span>
    44	  );
    45	}
```

## Line-by-line explanation

- Line 1: import { motion } from "framer-motion";
- Line 2: import React from "react";
- Line 3: 
- Line 4: type ShinyTextProps = {
- Line 5:   text: string;
- Line 6:   className?: string;
- Line 7:   baseColor?: string;
- Line 8:   shineColor?: string;
- Line 9:   durationSeconds?: number;
- Line 10:   spreadDegrees?: number;
- Line 11: };
- Line 12: 
- Line 13: export default function ShinyText({
- Line 14:   text,
- Line 15:   className,
- Line 16:   baseColor = "#64CEFB",
- Line 17:   shineColor = "#ffffff",
- Line 18:   durationSeconds = 3,
- Line 19:   spreadDegrees = 100,
- Line 20: }: ShinyTextProps) {
- Line 21:   const style: React.CSSProperties = {
- Line 22:     backgroundImage: `linear-gradient(${spreadDegrees}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`,
- Line 23:     backgroundSize: "200% 100%",
- Line 24:     backgroundPosition: "0% 50%",
- Line 25:     WebkitBackgroundClip: "text",
- Line 26:     backgroundClip: "text",
- Line 27:     WebkitTextFillColor: "transparent",
- Line 28:     color: "transparent",
- Line 29:   };
- Line 30: 
- Line 31:   return (
- Line 32:     <motion.span
- Line 33:       className={className}
- Line 34:       style={style}
- Line 35:       animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
- Line 36:       transition={{
- Line 37:         duration: durationSeconds,
- Line 38:         ease: "linear",
- Line 39:         repeat: Infinity,
- Line 40:       }}
- Line 41:     >
- Line 42:       {text}
- Line 43:     </motion.span>
- Line 44:   );
- Line 45: }

