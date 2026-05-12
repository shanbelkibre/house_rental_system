# Accordion.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	
     3	export default function Accordion({ question, answer, isOpen: initialIsOpen = false }) {
     4	  const [isOpen, setIsOpen] = useState(initialIsOpen);
     5	
     6	  return (
     7	    <div className="border border-gray-800 rounded-xl mb-4 overflow-hidden bg-gray-900/50 hover:bg-gray-900 transition-colors">
     8	      <button
     9	        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
    10	        onClick={() => setIsOpen(!isOpen)}
    11	      >
    12	        <span className="font-medium text-white pr-8">{question}</span>
    13	        <span className={`text-blue-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
    14	          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    15	            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    16	          </svg>
    17	        </span>
    18	      </button>
    19	      <div 
    20	        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
    21	          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
    22	        }`}
    23	      >
    24	        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    25	      </div>
    26	    </div>
    27	  );
    28	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: 
- Line 3: export default function Accordion({ question, answer, isOpen: initialIsOpen = false }) {
- Line 4:   const [isOpen, setIsOpen] = useState(initialIsOpen);
- Line 5: 
- Line 6:   return (
- Line 7:     <div className="border border-gray-800 rounded-xl mb-4 overflow-hidden bg-gray-900/50 hover:bg-gray-900 transition-colors">
- Line 8:       <button
- Line 9:         className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
- Line 10:         onClick={() => setIsOpen(!isOpen)}
- Line 11:       >
- Line 12:         <span className="font-medium text-white pr-8">{question}</span>
- Line 13:         <span className={`text-blue-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
- Line 14:           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
- Line 15:             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
- Line 16:           </svg>
- Line 17:         </span>
- Line 18:       </button>
- Line 19:       <div 
- Line 20:         className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
- Line 21:           isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
- Line 22:         }`}
- Line 23:       >
- Line 24:         <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
- Line 25:       </div>
- Line 26:     </div>
- Line 27:   );
- Line 28: }

