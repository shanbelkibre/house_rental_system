# AboutPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	import AnimatedHeading from "../components/AnimatedHeading";
     3	import FadeIn from "../components/FadeIn";
     4	import Counter from "../components/Counter";
     5	import TeamMember from "../components/TeamMember";
     6	import { getStats } from "../services/api";
     7	import imgShambel from "../../Asset/shanbel.png";
     8	import imgBelete from "../../Asset/belet.png";
     9	import imgSamuel from "../../Asset/sami.png";
    10	import imgKalkidan from "../../Asset/kalkidan.png";
    11	
    12	export default function AboutPage() {
    13	  const [stats, setStats] = useState({
    14	    total_houses: 500,
    15	    total_renters: 1200,
    16	    total_owners: 300,
    17	    cities_covered: 15,
    18	  });
    19	
    20	  useEffect(() => {
    21	    const fetchStats = async () => {
    22	      try {
    23	        const res = await getStats();
    24	        setStats(res.data);
    25	      } catch (err) {
    26	        console.error("Failed to load stats", err);
    27	      }
    28	    };
    29	    fetchStats();
    30	  }, []);
    31	
    32	  const team = [
    33	    {
    34	      name: "Shambel Kibre",
    35	      role: "Founder & CEO",
    36	      bio: "Former real estate agent who saw the need for a modern, digital approach to finding homes in Ethiopia.",
    37	      social: { twitter: "#", linkedin: "#" },
    38	      image: imgShambel,
    39	    },
    40	    {
    41	      name: "Belete Dereje",
    42	      role: "Head of Operations",
    43	      bio: "Ensures that all property owners are verified and the quality of listings remains top-notch.",
    44	      social: { linkedin: "#" },
    45	      image: imgBelete,
    46	      imagePosition: "object-center",
    47	    },
    48	    {
    49	      name: "Samuel Abera",
    50	      role: "Lead Developer",
    51	      bio: "The technical mind behind our fast, secure, and user-friendly platform.",
    52	      social: { twitter: "#", linkedin: "#" },
    53	      image: imgSamuel,
    54	    },
    55	    {
    56	      name: "Kalkidan Behailu",
    57	      role: "Customer Success",
    58	      bio: "Dedicated to providing the best support and experience for renters and property owners.",
    59	      social: { twitter: "#", linkedin: "#" },
    60	      image: imgKalkidan,
    61	    },
    62	  ];
    63	
    64	  return (
    65	    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
    66	      {/* Hero Section */}
    67	      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
    68	        <img
    69	          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
    70	          alt="Background"
    71	          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
    72	        />
    73	        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white dark:to-black z-0 transition-colors duration-300"></div>
    74	        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
    75	          <AnimatedHeading
    76	            text="Revolutionizing the way you find your home."
    77	            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
    78	          />
    79	          <FadeIn delay={400}>
    80	            <p className="text-lg text-gray-700 dark:text-gray-300">
    81	              HouseRental was founded with a simple mission: to make the process
    82	              of renting a house in Ethiopia transparent, secure, and completely
    83	              digital.
    84	            </p>
    85	          </FadeIn>
    86	        </div>
    87	      </div>
    88	
    89	      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
    90	        {/* Stats Section */}
    91	        <FadeIn delay={600}>
    92	          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-gray-200 dark:border-white/10 py-12">
    93	            <div className="text-center">
    94	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
    95	                <Counter end={stats.total_houses} suffix="+" />
    96	              </h3>
    97	              <p className="text-gray-600 dark:text-gray-400">
    98	                Available Houses
    99	              </p>
   100	            </div>
   101	            <div className="text-center">
   102	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   103	                <Counter end={stats.total_renters} suffix="+" />
   104	              </h3>
   105	              <p className="text-gray-600 dark:text-gray-400">Happy Renters</p>
   106	            </div>
   107	            <div className="text-center">
   108	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   109	                <Counter end={stats.total_owners} suffix="+" />
   110	              </h3>
   111	              <p className="text-gray-600 dark:text-gray-400">
   112	                Verified Owners
   113	              </p>
   114	            </div>
   115	            <div className="text-center">
   116	              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
   117	                <Counter end={stats.cities_covered} />
   118	              </h3>
   119	              <p className="text-gray-600 dark:text-gray-400">Cities Covered</p>
   120	            </div>
   121	          </div>
   122	        </FadeIn>
   123	
   124	        {/* Story Section */}
   125	        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
   126	          <FadeIn direction="right">
   127	            <img
   128	              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
   129	              alt="Our Story"
   130	              className="rounded-3xl shadow-2xl shadow-blue-500/10 w-full object-cover h-[400px]"
   131	            />
   132	          </FadeIn>
   133	          <FadeIn direction="left">
   134	            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
   135	              Our Story
   136	            </h2>
   137	            <div className="space-y-4 text-gray-600 dark:text-gray-400">
   138	              <p>
   139	                It all started when our founders struggled to find a reliable
   140	                rental property. The traditional process was slow, involved too
   141	                many middlemen, and lacked transparency.
   142	              </p>
   143	              <p>
   144	                We realized that property owners also faced challenges managing
   145	                tenants, collecting rent securely, and showcasing their
   146	                properties effectively.
   147	              </p>
   148	              <p>
   149	                That's why we built HouseRental. A unified platform bridging the
   150	                gap between property owners and renters, equipped with modern
   151	                tools like virtual visits, digital agreements, and secure
   152	                management.
   153	              </p>
   154	            </div>
   155	          </FadeIn>
   156	        </div>
   157	
   158	        {/* Team Section */}
   159	        <div className="mb-12">
   160	          <div className="text-center mb-12">
   161	            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
   162	              Meet Our Team
   163	            </h2>
   164	            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
   165	              The passionate people working behind the scenes to bring you the
   166	              best real estate experience.
   167	            </p>
   168	          </div>
   169	          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
   170	            {team.map((member, idx) => (
   171	              <FadeIn key={idx} delay={idx * 200}>
   172	                <TeamMember {...member} />
   173	              </FadeIn>
   174	            ))}
   175	          </div>
   176	        </div>
   177	      </div>
   178	    </div>
   179	  );
   180	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: import AnimatedHeading from "../components/AnimatedHeading";
- Line 3: import FadeIn from "../components/FadeIn";
- Line 4: import Counter from "../components/Counter";
- Line 5: import TeamMember from "../components/TeamMember";
- Line 6: import { getStats } from "../services/api";
- Line 7: import imgShambel from "../../Asset/shanbel.png";
- Line 8: import imgBelete from "../../Asset/belet.png";
- Line 9: import imgSamuel from "../../Asset/sami.png";
- Line 10: import imgKalkidan from "../../Asset/kalkidan.png";
- Line 11: 
- Line 12: export default function AboutPage() {
- Line 13:   const [stats, setStats] = useState({
- Line 14:     total_houses: 500,
- Line 15:     total_renters: 1200,
- Line 16:     total_owners: 300,
- Line 17:     cities_covered: 15,
- Line 18:   });
- Line 19: 
- Line 20:   useEffect(() => {
- Line 21:     const fetchStats = async () => {
- Line 22:       try {
- Line 23:         const res = await getStats();
- Line 24:         setStats(res.data);
- Line 25:       } catch (err) {
- Line 26:         console.error("Failed to load stats", err);
- Line 27:       }
- Line 28:     };
- Line 29:     fetchStats();
- Line 30:   }, []);
- Line 31: 
- Line 32:   const team = [
- Line 33:     {
- Line 34:       name: "Shambel Kibre",
- Line 35:       role: "Founder & CEO",
- Line 36:       bio: "Former real estate agent who saw the need for a modern, digital approach to finding homes in Ethiopia.",
- Line 37:       social: { twitter: "#", linkedin: "#" },
- Line 38:       image: imgShambel,
- Line 39:     },
- Line 40:     {
- Line 41:       name: "Belete Dereje",
- Line 42:       role: "Head of Operations",
- Line 43:       bio: "Ensures that all property owners are verified and the quality of listings remains top-notch.",
- Line 44:       social: { linkedin: "#" },
- Line 45:       image: imgBelete,
- Line 46:       imagePosition: "object-center",
- Line 47:     },
- Line 48:     {
- Line 49:       name: "Samuel Abera",
- Line 50:       role: "Lead Developer",
- Line 51:       bio: "The technical mind behind our fast, secure, and user-friendly platform.",
- Line 52:       social: { twitter: "#", linkedin: "#" },
- Line 53:       image: imgSamuel,
- Line 54:     },
- Line 55:     {
- Line 56:       name: "Kalkidan Behailu",
- Line 57:       role: "Customer Success",
- Line 58:       bio: "Dedicated to providing the best support and experience for renters and property owners.",
- Line 59:       social: { twitter: "#", linkedin: "#" },
- Line 60:       image: imgKalkidan,
- Line 61:     },
- Line 62:   ];
- Line 63: 
- Line 64:   return (
- Line 65:     <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
- Line 66:       {/* Hero Section */}
- Line 67:       <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
- Line 68:         <img
- Line 69:           src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
- Line 70:           alt="Background"
- Line 71:           className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
- Line 72:         />
- Line 73:         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white dark:to-black z-0 transition-colors duration-300"></div>
- Line 74:         <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
- Line 75:           <AnimatedHeading
- Line 76:             text="Revolutionizing the way you find your home."
- Line 77:             className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
- Line 78:           />
- Line 79:           <FadeIn delay={400}>
- Line 80:             <p className="text-lg text-gray-700 dark:text-gray-300">
- Line 81:               HouseRental was founded with a simple mission: to make the process
- Line 82:               of renting a house in Ethiopia transparent, secure, and completely
- Line 83:               digital.
- Line 84:             </p>
- Line 85:           </FadeIn>
- Line 86:         </div>
- Line 87:       </div>
- Line 88: 
- Line 89:       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
- Line 90:         {/* Stats Section */}
- Line 91:         <FadeIn delay={600}>
- Line 92:           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-gray-200 dark:border-white/10 py-12">
- Line 93:             <div className="text-center">
- Line 94:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 95:                 <Counter end={stats.total_houses} suffix="+" />
- Line 96:               </h3>
- Line 97:               <p className="text-gray-600 dark:text-gray-400">
- Line 98:                 Available Houses
- Line 99:               </p>
- Line 100:             </div>
- Line 101:             <div className="text-center">
- Line 102:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 103:                 <Counter end={stats.total_renters} suffix="+" />
- Line 104:               </h3>
- Line 105:               <p className="text-gray-600 dark:text-gray-400">Happy Renters</p>
- Line 106:             </div>
- Line 107:             <div className="text-center">
- Line 108:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 109:                 <Counter end={stats.total_owners} suffix="+" />
- Line 110:               </h3>
- Line 111:               <p className="text-gray-600 dark:text-gray-400">
- Line 112:                 Verified Owners
- Line 113:               </p>
- Line 114:             </div>
- Line 115:             <div className="text-center">
- Line 116:               <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
- Line 117:                 <Counter end={stats.cities_covered} />
- Line 118:               </h3>
- Line 119:               <p className="text-gray-600 dark:text-gray-400">Cities Covered</p>
- Line 120:             </div>
- Line 121:           </div>
- Line 122:         </FadeIn>
- Line 123: 
- Line 124:         {/* Story Section */}
- Line 125:         <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
- Line 126:           <FadeIn direction="right">
- Line 127:             <img
- Line 128:               src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
- Line 129:               alt="Our Story"
- Line 130:               className="rounded-3xl shadow-2xl shadow-blue-500/10 w-full object-cover h-[400px]"
- Line 131:             />
- Line 132:           </FadeIn>
- Line 133:           <FadeIn direction="left">
- Line 134:             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
- Line 135:               Our Story
- Line 136:             </h2>
- Line 137:             <div className="space-y-4 text-gray-600 dark:text-gray-400">
- Line 138:               <p>
- Line 139:                 It all started when our founders struggled to find a reliable
- Line 140:                 rental property. The traditional process was slow, involved too
- Line 141:                 many middlemen, and lacked transparency.
- Line 142:               </p>
- Line 143:               <p>
- Line 144:                 We realized that property owners also faced challenges managing
- Line 145:                 tenants, collecting rent securely, and showcasing their
- Line 146:                 properties effectively.
- Line 147:               </p>
- Line 148:               <p>
- Line 149:                 That's why we built HouseRental. A unified platform bridging the
- Line 150:                 gap between property owners and renters, equipped with modern
- Line 151:                 tools like virtual visits, digital agreements, and secure
- Line 152:                 management.
- Line 153:               </p>
- Line 154:             </div>
- Line 155:           </FadeIn>
- Line 156:         </div>
- Line 157: 
- Line 158:         {/* Team Section */}
- Line 159:         <div className="mb-12">
- Line 160:           <div className="text-center mb-12">
- Line 161:             <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
- Line 162:               Meet Our Team
- Line 163:             </h2>
- Line 164:             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
- Line 165:               The passionate people working behind the scenes to bring you the
- Line 166:               best real estate experience.
- Line 167:             </p>
- Line 168:           </div>
- Line 169:           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
- Line 170:             {team.map((member, idx) => (
- Line 171:               <FadeIn key={idx} delay={idx * 200}>
- Line 172:                 <TeamMember {...member} />
- Line 173:               </FadeIn>
- Line 174:             ))}
- Line 175:           </div>
- Line 176:         </div>
- Line 177:       </div>
- Line 178:     </div>
- Line 179:   );
- Line 180: }

