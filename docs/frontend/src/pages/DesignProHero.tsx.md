# DesignProHero.tsx

## Code (numbered)

```tsx
     1	import { ArrowRight, Menu } from "lucide-react";
     2	import ShinyText from "../components/ShinyText";
     3	
     4	const VIDEO_URL =
     5	  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";
     6	
     7	export default function DesignProHero() {
     8	  return (
     9	    <section className="relative h-screen bg-black overflow-hidden">
    10	      <video
    11	        className="absolute inset-0 w-full h-full object-cover"
    12	        src={VIDEO_URL}
    13	        autoPlay
    14	        loop
    15	        muted
    16	        playsInline
    17	      />
    18	
    19	      <div className="relative z-10 h-full">
    20	        {/* Nav */}
    21	        <header className="w-full">
    22	          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
    23	            <div className="flex items-center gap-3">
    24	              <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
    25	                <div className="w-3.5 h-3.5 rounded-full bg-white" />
    26	              </div>
    27	              <div className="text-white font-medium tracking-tight">
    28	                DesignPro
    29	              </div>
    30	            </div>
    31	
    32	            <nav className="hidden lg:flex items-center">
    33	              <div className="rounded-full border border-gray-700 px-3 py-2 flex items-center gap-4 text-sm">
    34	                {[
    35	                  "Home",
    36	                  "About Us",
    37	                  "Courses",
    38	                  "Instructors",
    39	                  "Testimonials",
    40	                  "Blog",
    41	                ].map((label) => (
    42	                  <a
    43	                    key={label}
    44	                    href="#"
    45	                    className="text-white/80 hover:text-white transition-colors"
    46	                  >
    47	                    {label}
    48	                  </a>
    49	                ))}
    50	
    51	                <a
    52	                  href="#"
    53	                  className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
    54	                >
    55	                  Contact us
    56	                  <ArrowRight className="w-4 h-4" />
    57	                </a>
    58	              </div>
    59	            </nav>
    60	
    61	            <button
    62	              type="button"
    63	              className="lg:hidden text-white/80 hover:text-white transition-colors"
    64	              aria-label="Open menu"
    65	            >
    66	              <Menu className="w-6 h-6" />
    67	            </button>
    68	          </div>
    69	        </header>
    70	
    71	        {/* Content */}
    72	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-80px)] flex flex-col">
    73	          {/* Top section */}
    74	          <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
    75	            <p className="text-white/80 text-sm md:text-base">
    76	              We deliver transformative programs that empower emerging product
    77	              designers with cutting-edge expertise and vision to thrive
    78	              globally.
    79	            </p>
    80	            <p className="text-white/80 text-sm md:text-base lg:text-right">
    81	              8000+ Talented Designers Launched !
    82	            </p>
    83	          </div>
    84	
    85	          {/* Hero center */}
    86	          <div className="flex-1 flex flex-col items-center justify-center text-center">
    87	            <div className="text-white/80 uppercase tracking-tight text-xs md:text-sm">
    88	              Seats for Next Program Opening Soon
    89	            </div>
    90	
    91	            <h1 className="mt-4 tracking-tighter leading-[0.85]">
    92	              <div className="text-white font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
    93	                Become
    94	              </div>
    95	              <ShinyText
    96	                text="Product Leader."
    97	                className="block font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
    98	                baseColor="#64CEFB"
    99	                shineColor="#ffffff"
   100	                durationSeconds={3}
   101	                spreadDegrees={100}
   102	              />
   103	            </h1>
   104	
   105	            <button
   106	              type="button"
   107	              className="group mt-8 rounded-full bg-black hover:bg-gray-900 transition-colors px-6 md:px-8 py-3 md:py-4 text-white inline-flex items-center gap-3"
   108	            >
   109	              Apply for Next Enrollment
   110	              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
   111	            </button>
   112	          </div>
   113	        </div>
   114	      </div>
   115	    </section>
   116	  );
   117	}
```

## Line-by-line explanation

- Line 1: import { ArrowRight, Menu } from "lucide-react";
- Line 2: import ShinyText from "../components/ShinyText";
- Line 3: 
- Line 4: const VIDEO_URL =
- Line 5:   "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";
- Line 6: 
- Line 7: export default function DesignProHero() {
- Line 8:   return (
- Line 9:     <section className="relative h-screen bg-black overflow-hidden">
- Line 10:       <video
- Line 11:         className="absolute inset-0 w-full h-full object-cover"
- Line 12:         src={VIDEO_URL}
- Line 13:         autoPlay
- Line 14:         loop
- Line 15:         muted
- Line 16:         playsInline
- Line 17:       />
- Line 18: 
- Line 19:       <div className="relative z-10 h-full">
- Line 20:         {/* Nav */}
- Line 21:         <header className="w-full">
- Line 22:           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
- Line 23:             <div className="flex items-center gap-3">
- Line 24:               <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
- Line 25:                 <div className="w-3.5 h-3.5 rounded-full bg-white" />
- Line 26:               </div>
- Line 27:               <div className="text-white font-medium tracking-tight">
- Line 28:                 DesignPro
- Line 29:               </div>
- Line 30:             </div>
- Line 31: 
- Line 32:             <nav className="hidden lg:flex items-center">
- Line 33:               <div className="rounded-full border border-gray-700 px-3 py-2 flex items-center gap-4 text-sm">
- Line 34:                 {[
- Line 35:                   "Home",
- Line 36:                   "About Us",
- Line 37:                   "Courses",
- Line 38:                   "Instructors",
- Line 39:                   "Testimonials",
- Line 40:                   "Blog",
- Line 41:                 ].map((label) => (
- Line 42:                   <a
- Line 43:                     key={label}
- Line 44:                     href="#"
- Line 45:                     className="text-white/80 hover:text-white transition-colors"
- Line 46:                   >
- Line 47:                     {label}
- Line 48:                   </a>
- Line 49:                 ))}
- Line 50: 
- Line 51:                 <a
- Line 52:                   href="#"
- Line 53:                   className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
- Line 54:                 >
- Line 55:                   Contact us
- Line 56:                   <ArrowRight className="w-4 h-4" />
- Line 57:                 </a>
- Line 58:               </div>
- Line 59:             </nav>
- Line 60: 
- Line 61:             <button
- Line 62:               type="button"
- Line 63:               className="lg:hidden text-white/80 hover:text-white transition-colors"
- Line 64:               aria-label="Open menu"
- Line 65:             >
- Line 66:               <Menu className="w-6 h-6" />
- Line 67:             </button>
- Line 68:           </div>
- Line 69:         </header>
- Line 70: 
- Line 71:         {/* Content */}
- Line 72:         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-80px)] flex flex-col">
- Line 73:           {/* Top section */}
- Line 74:           <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
- Line 75:             <p className="text-white/80 text-sm md:text-base">
- Line 76:               We deliver transformative programs that empower emerging product
- Line 77:               designers with cutting-edge expertise and vision to thrive
- Line 78:               globally.
- Line 79:             </p>
- Line 80:             <p className="text-white/80 text-sm md:text-base lg:text-right">
- Line 81:               8000+ Talented Designers Launched !
- Line 82:             </p>
- Line 83:           </div>
- Line 84: 
- Line 85:           {/* Hero center */}
- Line 86:           <div className="flex-1 flex flex-col items-center justify-center text-center">
- Line 87:             <div className="text-white/80 uppercase tracking-tight text-xs md:text-sm">
- Line 88:               Seats for Next Program Opening Soon
- Line 89:             </div>
- Line 90: 
- Line 91:             <h1 className="mt-4 tracking-tighter leading-[0.85]">
- Line 92:               <div className="text-white font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
- Line 93:                 Become
- Line 94:               </div>
- Line 95:               <ShinyText
- Line 96:                 text="Product Leader."
- Line 97:                 className="block font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
- Line 98:                 baseColor="#64CEFB"
- Line 99:                 shineColor="#ffffff"
- Line 100:                 durationSeconds={3}
- Line 101:                 spreadDegrees={100}
- Line 102:               />
- Line 103:             </h1>
- Line 104: 
- Line 105:             <button
- Line 106:               type="button"
- Line 107:               className="group mt-8 rounded-full bg-black hover:bg-gray-900 transition-colors px-6 md:px-8 py-3 md:py-4 text-white inline-flex items-center gap-3"
- Line 108:             >
- Line 109:               Apply for Next Enrollment
- Line 110:               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
- Line 111:             </button>
- Line 112:           </div>
- Line 113:         </div>
- Line 114:       </div>
- Line 115:     </section>
- Line 116:   );
- Line 117: }

