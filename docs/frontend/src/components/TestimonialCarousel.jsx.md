# TestimonialCarousel.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	
     3	export default function TestimonialCarousel({ testimonials = [] }) {
     4	  const [currentIndex, setCurrentIndex] = useState(0);
     5	
     6	  useEffect(() => {
     7	    if (testimonials.length <= 1) return;
     8	    
     9	    const interval = setInterval(() => {
    10	      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    11	    }, 5000); // Auto slide every 5s
    12	
    13	    return () => clearInterval(interval);
    14	  }, [testimonials.length]);
    15	
    16	  if (!testimonials || testimonials.length === 0) return null;
    17	
    18	  return (
    19	    <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-4">
    20	      <div 
    21	        className="flex transition-transform duration-700 ease-in-out"
    22	        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    23	      >
    24	        {testimonials.map((t, idx) => (
    25	          <div key={idx} className="w-full flex-shrink-0 px-4 md:px-12">
    26	            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative">
    27	              <span className="text-6xl text-blue-500/20 absolute top-4 left-8 font-serif">"</span>
    28	              <p className="text-lg md:text-xl text-gray-300 italic mb-8 relative z-10 leading-relaxed">
    29	                {t.content}
    30	              </p>
    31	              <div className="flex flex-col items-center">
    32	                <img 
    33	                  src={t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`} 
    34	                  alt={t.name}
    35	                  className="w-16 h-16 rounded-full border-2 border-gray-700 mb-3"
    36	                />
    37	                <h4 className="text-white font-semibold">{t.name}</h4>
    38	                <p className="text-blue-500 text-sm">{t.role}</p>
    39	              </div>
    40	            </div>
    41	          </div>
    42	        ))}
    43	      </div>
    44	
    45	      {/* Navigation dots */}
    46	      {testimonials.length > 1 && (
    47	        <div className="flex justify-center space-x-2 mt-6">
    48	          {testimonials.map((_, idx) => (
    49	            <button
    50	              key={idx}
    51	              onClick={() => setCurrentIndex(idx)}
    52	              className={`w-3 h-3 rounded-full transition-all duration-300 ${
    53	                idx === currentIndex ? "bg-blue-500 w-6" : "bg-gray-700 hover:bg-gray-500"
    54	              }`}
    55	              aria-label={`Go to slide ${idx + 1}`}
    56	            />
    57	          ))}
    58	        </div>
    59	      )}
    60	    </div>
    61	  );
    62	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: 
- Line 3: export default function TestimonialCarousel({ testimonials = [] }) {
- Line 4:   const [currentIndex, setCurrentIndex] = useState(0);
- Line 5: 
- Line 6:   useEffect(() => {
- Line 7:     if (testimonials.length <= 1) return;
- Line 8:     
- Line 9:     const interval = setInterval(() => {
- Line 10:       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
- Line 11:     }, 5000); // Auto slide every 5s
- Line 12: 
- Line 13:     return () => clearInterval(interval);
- Line 14:   }, [testimonials.length]);
- Line 15: 
- Line 16:   if (!testimonials || testimonials.length === 0) return null;
- Line 17: 
- Line 18:   return (
- Line 19:     <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-4">
- Line 20:       <div 
- Line 21:         className="flex transition-transform duration-700 ease-in-out"
- Line 22:         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
- Line 23:       >
- Line 24:         {testimonials.map((t, idx) => (
- Line 25:           <div key={idx} className="w-full flex-shrink-0 px-4 md:px-12">
- Line 26:             <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative">
- Line 27:               <span className="text-6xl text-blue-500/20 absolute top-4 left-8 font-serif">"</span>
- Line 28:               <p className="text-lg md:text-xl text-gray-300 italic mb-8 relative z-10 leading-relaxed">
- Line 29:                 {t.content}
- Line 30:               </p>
- Line 31:               <div className="flex flex-col items-center">
- Line 32:                 <img 
- Line 33:                   src={t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`} 
- Line 34:                   alt={t.name}
- Line 35:                   className="w-16 h-16 rounded-full border-2 border-gray-700 mb-3"
- Line 36:                 />
- Line 37:                 <h4 className="text-white font-semibold">{t.name}</h4>
- Line 38:                 <p className="text-blue-500 text-sm">{t.role}</p>
- Line 39:               </div>
- Line 40:             </div>
- Line 41:           </div>
- Line 42:         ))}
- Line 43:       </div>
- Line 44: 
- Line 45:       {/* Navigation dots */}
- Line 46:       {testimonials.length > 1 && (
- Line 47:         <div className="flex justify-center space-x-2 mt-6">
- Line 48:           {testimonials.map((_, idx) => (
- Line 49:             <button
- Line 50:               key={idx}
- Line 51:               onClick={() => setCurrentIndex(idx)}
- Line 52:               className={`w-3 h-3 rounded-full transition-all duration-300 ${
- Line 53:                 idx === currentIndex ? "bg-blue-500 w-6" : "bg-gray-700 hover:bg-gray-500"
- Line 54:               }`}
- Line 55:               aria-label={`Go to slide ${idx + 1}`}
- Line 56:             />
- Line 57:           ))}
- Line 58:         </div>
- Line 59:       )}
- Line 60:     </div>
- Line 61:   );
- Line 62: }

