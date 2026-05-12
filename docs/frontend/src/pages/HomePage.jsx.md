# HomePage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	import { Link } from "react-router-dom";
     3	import { useAuth } from "../context/AuthContext";
     4	import AnimatedHeading from "../components/AnimatedHeading";
     5	import FadeIn from "../components/FadeIn";
     6	import HeroSearch from "../components/HeroSearch";
     7	import FeaturedHouses from "../components/FeaturedHouses";
     8	import TestimonialCarousel from "../components/TestimonialCarousel";
     9	import Counter from "../components/Counter";
    10	import ContactSection from "../components/ContactSection";
    11	import { getStats } from "../services/api";
    12	import houseBg from "../../Asset/house background.jpg";
    13	
    14	export default function HomePage() {
    15	  const { user } = useAuth();
    16	  const [stats, setStats] = useState({
    17	    total_houses: 0,
    18	    total_renters: 0,
    19	    total_owners: 0,
    20	    cities_covered: 0,
    21	  });
    22	
    23	  useEffect(() => {
    24	    const fetchStats = async () => {
    25	      try {
    26	        const res = await getStats();
    27	        setStats(res.data);
    28	      } catch (err) {
    29	        console.error("Failed to load stats", err);
    30	      }
    31	    };
    32	    fetchStats();
    33	  }, []);
    34	
    35	  const dummyTestimonials = [
    36	    {
    37	      name: "Shambel Kibre",
    38	      role: "Renter",
    39	      content:
    40	        "I found a beautiful house in just two days using HouseRental. The virtual tour feature saved me so much time!",
    41	    },
    42	    {
    43	      name: "Sami Abera",
    44	      role: "Property Owner",
    45	      content:
    46	        "Managing my properties has never been easier. The digital agreements and tenant verification give me peace of mind.",
    47	    },
    48	    {
    49	      name: "Belete Derje",
    50	      role: "Renter",
    51	      content:
    52	        "The communication with owners is seamless. I highly recommend this platform to anyone looking for a stress-free renting experience.",
    53	    },
    54	  ];
    55	
    56	  return (
    57	    <div className="w-full bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
    58	      {/* Hero Section */}
    59	      <div className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
    60	        <div
    61	          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
    62	          style={{ backgroundImage: `url(${houseBg})` }}
    63	        ></div>
    64	        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-0"></div>
    65	
    66	        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-16 lg:pb-24 w-full">
    67	          <div className="max-w-4xl">
    68	            <AnimatedHeading
    69	              text="Find Your Perfect Home&#10;in Debre Birhan."
    70	              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6"
    71	              style={{ letterSpacing: "-0.04em" }}
    72	            />
    73	
    74	            <FadeIn delay={800} duration={1000}>
    75	              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
    76	                Browse verified rental listings. Connect directly with owners.
    77	                Sign digital agreements securely.
    78	              </p>
    79	            </FadeIn>
    80	
    81	            <FadeIn delay={1200} duration={1000} className="mb-8">
    82	              <HeroSearch />
    83	            </FadeIn>
    84	
    85	            <FadeIn delay={1400} duration={1000}>
    86	              <div className="flex gap-4">
    87	                <span className="liquid-glass border border-white/20 px-4 py-2 rounded-full text-sm">
    88	                  ✓ Verified Owners
    89	                </span>
    90	                <span className="liquid-glass border border-white/20 px-4 py-2 rounded-full text-sm">
    91	                  ✓ Secure Digital Agreements
    92	                </span>
    93	              </div>
    94	            </FadeIn>
    95	          </div>
    96	        </div>
    97	      </div>
    98	
    99	      {/* Featured Houses Section */}
   100	      <FeaturedHouses />
   101	
   102	      {/* How It Works Section */}
   103	      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
   104	        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
   105	          <div className="text-center mb-16">
   106	            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
   107	              How HouseRental Works
   108	            </h2>
   109	            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
   110	              Our streamlined process makes renting or listing a property as
   111	              simple as possible.
   112	            </p>
   113	          </div>
   114	
   115	          <div className="grid md:grid-cols-3 gap-12 relative">
   116	            {/* Connecting line (desktop only) */}
   117	            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-300 dark:bg-gray-800 -z-10 transition-colors duration-300"></div>
   118	
   119	            <FadeIn delay={0} className="text-center">
   120	              <div className="w-24 h-24 mx-auto bg-[#00FFFF] rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
   121	                🔍
   122	              </div>
   123	              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
   124	                1. Find Your Place
   125	              </h3>
   126	              <p className="text-gray-600 dark:text-gray-400">
   127	                Search through verified listings with high-quality photos and
   128	                detailed descriptions.
   129	              </p>
   130	            </FadeIn>
   131	
   132	            <FadeIn delay={200} className="text-center">
   133	              <div className="w-24 h-24 mx-auto bg-[#00FFFF] rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
   134	                📅
   135	              </div>
   136	              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
   137	                2. Request a Visit
   138	              </h3>
   139	              <p className="text-gray-600 dark:text-gray-400">
   140	                Schedule a convenient time to view the property physically or
   141	                take a virtual tour.
   142	              </p>
   143	            </FadeIn>
   144	
   145	            <FadeIn delay={400} className="text-center">
   146	              <div className="w-24 h-24 mx-auto bg-[#00FFFF] rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
   147	                ✍️
   148	              </div>
   149	              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
   150	                3. Sign Digitally
   151	              </h3>
   152	              <p className="text-gray-600 dark:text-gray-400">
   153	                Review and sign your rental agreement securely online. No
   154	                paperwork needed.
   155	              </p>
   156	            </FadeIn>
   157	          </div>
   158	        </div>
   159	      </section>
   160	
   161	      {/* Stats Section */}
   162	      <section className="py-20 border-y border-gray-200 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
   163	        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
   164	          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
   165	            <div className="text-center">
   166	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   167	                <Counter end={stats.total_houses} />
   168	              </h3>
   169	              <p className="text-gray-600 dark:text-gray-400 font-medium">
   170	                Available Houses
   171	              </p>
   172	            </div>
   173	            <div className="text-center">
   174	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   175	                <Counter end={stats.total_renters} />
   176	              </h3>
   177	              <p className="text-gray-600 dark:text-gray-400 font-medium">
   178	                Happy Renters
   179	              </p>
   180	            </div>
   181	            <div className="text-center">
   182	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   183	                <Counter end={stats.total_owners} />
   184	              </h3>
   185	              <p className="text-gray-600 dark:text-gray-400 font-medium">
   186	                Verified Owners
   187	              </p>
   188	            </div>
   189	            <div className="text-center">
   190	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   191	                <Counter end={stats.cities_covered} />
   192	              </h3>
   193	              <p className="text-gray-600 dark:text-gray-400 font-medium">
   194	                Cities Covered
   195	              </p>
   196	            </div>
   197	          </div>
   198	        </div>
   199	      </section>
   200	
   201	      {/* Testimonials */}
   202	      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
   203	        <div className="text-center mb-16 px-6">
   204	          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
   205	            What Our Users Say
   206	          </h2>
   207	          <p className="text-gray-600 dark:text-gray-400">
   208	            Don't just take our word for it.
   209	          </p>
   210	        </div>
   211	        <TestimonialCarousel testimonials={dummyTestimonials} />
   212	      </section>
   213	
   214	      {/* Contact Section */}
   215	      <ContactSection />
   216	
   217	      {/* CTA Section - Hide if logged in */}
   218	      {!user && (
   219	        <section className="py-24 relative overflow-hidden bg-blue-600 dark:bg-blue-900/20 transition-colors duration-300">
   220	          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
   221	          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
   222	            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
   223	              Own a property?
   224	            </h2>
   225	            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
   226	              Join thousands of property owners who are already managing their
   227	              rentals efficiently on our platform.
   228	            </p>
   229	            <div className="flex flex-col sm:flex-row justify-center gap-4">
   230	              <Link
   231	                to="/register"
   232	                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/30"
   233	              >
   234	                List Your Property
   235	              </Link>
   236	              <Link
   237	                to="/services"
   238	                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
   239	              >
   240	                Learn More
   241	              </Link>
   242	            </div>
   243	          </div>
   244	        </section>
   245	      )}
   246	    </div>
   247	  );
   248	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: import { Link } from "react-router-dom";
- Line 3: import { useAuth } from "../context/AuthContext";
- Line 4: import AnimatedHeading from "../components/AnimatedHeading";
- Line 5: import FadeIn from "../components/FadeIn";
- Line 6: import HeroSearch from "../components/HeroSearch";
- Line 7: import FeaturedHouses from "../components/FeaturedHouses";
- Line 8: import TestimonialCarousel from "../components/TestimonialCarousel";
- Line 9: import Counter from "../components/Counter";
- Line 10: import ContactSection from "../components/ContactSection";
- Line 11: import { getStats } from "../services/api";
- Line 12: import houseBg from "../../Asset/house background.jpg";
- Line 13: 
- Line 14: export default function HomePage() {
- Line 15:   const { user } = useAuth();
- Line 16:   const [stats, setStats] = useState({
- Line 17:     total_houses: 0,
- Line 18:     total_renters: 0,
- Line 19:     total_owners: 0,
- Line 20:     cities_covered: 0,
- Line 21:   });
- Line 22: 
- Line 23:   useEffect(() => {
- Line 24:     const fetchStats = async () => {
- Line 25:       try {
- Line 26:         const res = await getStats();
- Line 27:         setStats(res.data);
- Line 28:       } catch (err) {
- Line 29:         console.error("Failed to load stats", err);
- Line 30:       }
- Line 31:     };
- Line 32:     fetchStats();
- Line 33:   }, []);
- Line 34: 
- Line 35:   const dummyTestimonials = [
- Line 36:     {
- Line 37:       name: "Shambel Kibre",
- Line 38:       role: "Renter",
- Line 39:       content:
- Line 40:         "I found a beautiful house in just two days using HouseRental. The virtual tour feature saved me so much time!",
- Line 41:     },
- Line 42:     {
- Line 43:       name: "Sami Abera",
- Line 44:       role: "Property Owner",
- Line 45:       content:
- Line 46:         "Managing my properties has never been easier. The digital agreements and tenant verification give me peace of mind.",
- Line 47:     },
- Line 48:     {
- Line 49:       name: "Belete Derje",
- Line 50:       role: "Renter",
- Line 51:       content:
- Line 52:         "The communication with owners is seamless. I highly recommend this platform to anyone looking for a stress-free renting experience.",
- Line 53:     },
- Line 54:   ];
- Line 55: 
- Line 56:   return (
- Line 57:     <div className="w-full bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
- Line 58:       {/* Hero Section */}
- Line 59:       <div className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
- Line 60:         <div
- Line 61:           className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
- Line 62:           style={{ backgroundImage: `url(${houseBg})` }}
- Line 63:         ></div>
- Line 64:         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-0"></div>
- Line 65: 
- Line 66:         <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-16 lg:pb-24 w-full">
- Line 67:           <div className="max-w-4xl">
- Line 68:             <AnimatedHeading
- Line 69:               text="Find Your Perfect Home&#10;in Debre Birhan."
- Line 70:               className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6"
- Line 71:               style={{ letterSpacing: "-0.04em" }}
- Line 72:             />
- Line 73: 
- Line 74:             <FadeIn delay={800} duration={1000}>
- Line 75:               <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
- Line 76:                 Browse verified rental listings. Connect directly with owners.
- Line 77:                 Sign digital agreements securely.
- Line 78:               </p>
- Line 79:             </FadeIn>
- Line 80: 
- Line 81:             <FadeIn delay={1200} duration={1000} className="mb-8">
- Line 82:               <HeroSearch />
- Line 83:             </FadeIn>
- Line 84: 
- Line 85:             <FadeIn delay={1400} duration={1000}>
- Line 86:               <div className="flex gap-4">
- Line 87:                 <span className="liquid-glass border border-white/20 px-4 py-2 rounded-full text-sm">
- Line 88:                   ✓ Verified Owners
- Line 89:                 </span>
- Line 90:                 <span className="liquid-glass border border-white/20 px-4 py-2 rounded-full text-sm">
- Line 91:                   ✓ Secure Digital Agreements
- Line 92:                 </span>
- Line 93:               </div>
- Line 94:             </FadeIn>
- Line 95:           </div>
- Line 96:         </div>
- Line 97:       </div>
- Line 98: 
- Line 99:       {/* Featured Houses Section */}
- Line 100:       <FeaturedHouses />
- Line 101: 
- Line 102:       {/* How It Works Section */}
- Line 103:       <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
- Line 104:         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
- Line 105:           <div className="text-center mb-16">
- Line 106:             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
- Line 107:               How HouseRental Works
- Line 108:             </h2>
- Line 109:             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
- Line 110:               Our streamlined process makes renting or listing a property as
- Line 111:               simple as possible.
- Line 112:             </p>
- Line 113:           </div>
- Line 114: 
- Line 115:           <div className="grid md:grid-cols-3 gap-12 relative">
- Line 116:             {/* Connecting line (desktop only) */}
- Line 117:             <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-300 dark:bg-gray-800 -z-10 transition-colors duration-300"></div>
- Line 118: 
- Line 119:             <FadeIn delay={0} className="text-center">
- Line 120:               <div className="w-24 h-24 mx-auto bg-[#00FFFF] rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
- Line 121:                 🔍
- Line 122:               </div>
- Line 123:               <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
- Line 124:                 1. Find Your Place
- Line 125:               </h3>
- Line 126:               <p className="text-gray-600 dark:text-gray-400">
- Line 127:                 Search through verified listings with high-quality photos and
- Line 128:                 detailed descriptions.
- Line 129:               </p>
- Line 130:             </FadeIn>
- Line 131: 
- Line 132:             <FadeIn delay={200} className="text-center">
- Line 133:               <div className="w-24 h-24 mx-auto bg-[#00FFFF] rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
- Line 134:                 📅
- Line 135:               </div>
- Line 136:               <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
- Line 137:                 2. Request a Visit
- Line 138:               </h3>
- Line 139:               <p className="text-gray-600 dark:text-gray-400">
- Line 140:                 Schedule a convenient time to view the property physically or
- Line 141:                 take a virtual tour.
- Line 142:               </p>
- Line 143:             </FadeIn>
- Line 144: 
- Line 145:             <FadeIn delay={400} className="text-center">
- Line 146:               <div className="w-24 h-24 mx-auto bg-[#00FFFF] rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
- Line 147:                 ✍️
- Line 148:               </div>
- Line 149:               <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
- Line 150:                 3. Sign Digitally
- Line 151:               </h3>
- Line 152:               <p className="text-gray-600 dark:text-gray-400">
- Line 153:                 Review and sign your rental agreement securely online. No
- Line 154:                 paperwork needed.
- Line 155:               </p>
- Line 156:             </FadeIn>
- Line 157:           </div>
- Line 158:         </div>
- Line 159:       </section>
- Line 160: 
- Line 161:       {/* Stats Section */}
- Line 162:       <section className="py-20 border-y border-gray-200 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
- Line 163:         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
- Line 164:           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
- Line 165:             <div className="text-center">
- Line 166:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 167:                 <Counter end={stats.total_houses} />
- Line 168:               </h3>
- Line 169:               <p className="text-gray-600 dark:text-gray-400 font-medium">
- Line 170:                 Available Houses
- Line 171:               </p>
- Line 172:             </div>
- Line 173:             <div className="text-center">
- Line 174:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 175:                 <Counter end={stats.total_renters} />
- Line 176:               </h3>
- Line 177:               <p className="text-gray-600 dark:text-gray-400 font-medium">
- Line 178:                 Happy Renters
- Line 179:               </p>
- Line 180:             </div>
- Line 181:             <div className="text-center">
- Line 182:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 183:                 <Counter end={stats.total_owners} />
- Line 184:               </h3>
- Line 185:               <p className="text-gray-600 dark:text-gray-400 font-medium">
- Line 186:                 Verified Owners
- Line 187:               </p>
- Line 188:             </div>
- Line 189:             <div className="text-center">
- Line 190:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 191:                 <Counter end={stats.cities_covered} />
- Line 192:               </h3>
- Line 193:               <p className="text-gray-600 dark:text-gray-400 font-medium">
- Line 194:                 Cities Covered
- Line 195:               </p>
- Line 196:             </div>
- Line 197:           </div>
- Line 198:         </div>
- Line 199:       </section>
- Line 200: 
- Line 201:       {/* Testimonials */}
- Line 202:       <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
- Line 203:         <div className="text-center mb-16 px-6">
- Line 204:           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
- Line 205:             What Our Users Say
- Line 206:           </h2>
- Line 207:           <p className="text-gray-600 dark:text-gray-400">
- Line 208:             Don't just take our word for it.
- Line 209:           </p>
- Line 210:         </div>
- Line 211:         <TestimonialCarousel testimonials={dummyTestimonials} />
- Line 212:       </section>
- Line 213: 
- Line 214:       {/* Contact Section */}
- Line 215:       <ContactSection />
- Line 216: 
- Line 217:       {/* CTA Section - Hide if logged in */}
- Line 218:       {!user && (
- Line 219:         <section className="py-24 relative overflow-hidden bg-blue-600 dark:bg-blue-900/20 transition-colors duration-300">
- Line 220:           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
- Line 221:           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
- Line 222:             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
- Line 223:               Own a property?
- Line 224:             </h2>
- Line 225:             <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
- Line 226:               Join thousands of property owners who are already managing their
- Line 227:               rentals efficiently on our platform.
- Line 228:             </p>
- Line 229:             <div className="flex flex-col sm:flex-row justify-center gap-4">
- Line 230:               <Link
- Line 231:                 to="/register"
- Line 232:                 className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/30"
- Line 233:               >
- Line 234:                 List Your Property
- Line 235:               </Link>
- Line 236:               <Link
- Line 237:                 to="/services"
- Line 238:                 className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
- Line 239:               >
- Line 240:                 Learn More
- Line 241:               </Link>
- Line 242:             </div>
- Line 243:           </div>
- Line 244:         </section>
- Line 245:       )}
- Line 246:     </div>
- Line 247:   );
- Line 248: }

