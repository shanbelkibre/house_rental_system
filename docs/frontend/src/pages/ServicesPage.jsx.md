# ServicesPage.jsx

## Code (numbered)

```jsx
     1	import AnimatedHeading from "../components/AnimatedHeading";
     2	import FadeIn from "../components/FadeIn";
     3	import ServiceCard from "../components/ServiceCard";
     4	import ContactSection from "../components/ContactSection";
     5	import { Link } from "react-router-dom";
     6	import { useAuth } from "../context/AuthContext";
     7	
     8	export default function ServicesPage() {
     9	  const { user } = useAuth();
    10	
    11	  const renterServices = [
    12	    {
    13	      icon: "🔍",
    14	      title: "Smart Search",
    15	      description: "Filter properties by location, price, rooms, and amenities to find exactly what you're looking for.",
    16	    },
    17	    {
    18	      icon: "📅",
    19	      title: "Virtual & Physical Visits",
    20	      description: "Schedule property viewings directly through the platform at your convenience.",
    21	    },
    22	    {
    23	      icon: "📝",
    24	      title: "Digital Agreements",
    25	      description: "Review, sign, and manage your rental agreements entirely online without paperwork.",
    26	    },
    27	    {
    28	      icon: "💳",
    29	      title: "Secure Management",
    30	      description: "Track your rent status, communicate with owners, and manage your lease securely.",
    31	    }
    32	  ];
    33	
    34	  const ownerServices = [
    35	    {
    36	      icon: "🏠",
    37	      title: "Property Listing",
    38	      description: "Showcase your properties with high-quality image galleries and detailed descriptions.",
    39	    },
    40	    {
    41	      icon: "🛡️",
    42	      title: "Verified Renters",
    43	      description: "Connect with authenticated users and manage rental requests efficiently.",
    44	    },
    45	    {
    46	      icon: "📊",
    47	      title: "Management Dashboard",
    48	      description: "Get a comprehensive view of your properties, active agreements, and visit schedules.",
    49	    },
    50	    {
    51	      icon: "🚀",
    52	      title: "Premium Reach",
    53	      description: "Boost your property visibility to reach more potential renters faster.",
    54	    }
    55	  ];
    56	
    57	  return (
    58	    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
    59	      
    60	      {/* Hero Section */}
    61	      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
    62	        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
    63	        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white dark:to-black z-0 transition-colors duration-300"></div>
    64	        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
    65	          <AnimatedHeading 
    66	            text="Comprehensive Services for Renters and Owners."
    67	            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
    68	          />
    69	          <FadeIn delay={400}>
    70	            <p className="text-lg text-gray-700 dark:text-gray-300">
    71	              Whether you are looking for a new home or managing multiple properties, we provide the tools you need for a seamless experience.
    72	            </p>
    73	          </FadeIn>
    74	        </div>
    75	      </div>
    76	
    77	      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
    78	
    79	        {/* For Renters */}
    80	        <div className="mb-24">
    81	          <div className="flex items-center mb-10">
    82	            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Renters</h2>
    83	            <div className="h-px bg-gray-200 dark:bg-white/10 flex-1 ml-6 transition-colors duration-300"></div>
    84	          </div>
    85	          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    86	            {renterServices.map((service, idx) => (
    87	              <FadeIn key={idx} delay={idx * 100}>
    88	                <ServiceCard {...service} />
    89	              </FadeIn>
    90	            ))}
    91	          </div>
    92	        </div>
    93	
    94	        {/* For Owners */}
    95	        <div className="mb-24">
    96	          <div className="flex items-center mb-10">
    97	            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Property Owners</h2>
    98	            <div className="h-px bg-gray-200 dark:bg-white/10 flex-1 ml-6 transition-colors duration-300"></div>
    99	          </div>
   100	          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
   101	            {ownerServices.map((service, idx) => (
   102	              <FadeIn key={idx} delay={idx * 100}>
   103	                <ServiceCard {...service} />
   104	              </FadeIn>
   105	            ))}
   106	          </div>
   107	        </div>
   108	
   109	        {/* CTA / Pricing Teaser - Hide if logged in */}
   110	        {!user && (
   111	          <FadeIn delay={200}>
   112	            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 border border-blue-200 dark:border-blue-500/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto transition-colors duration-300">
   113	              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to list your property?</h2>
   114	              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
   115	                Join hundreds of property owners who are already managing their rentals efficiently. Choose a subscription plan that fits your needs.
   116	              </p>
   117	              <div className="flex flex-col sm:flex-row justify-center gap-4">
   118	                <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
   119	                  Create Owner Account
   120	                </Link>
   121	                <a href="#contactform" className="bg-transparent border border-blue-600 dark:border-white/20 hover:bg-blue-50 dark:hover:bg-white/5 text-blue-600 dark:text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-block">
   122	                  Contact Sales
   123	                </a>
   124	              </div>
   125	            </div>
   126	          </FadeIn>
   127	        )}
   128	
   129	      </div>
   130	      
   131	      {/* Contact Section */}
   132	      <ContactSection />
   133	    </div>
   134	  );
   135	}
```

## Line-by-line explanation

- Line 1: import AnimatedHeading from "../components/AnimatedHeading";
- Line 2: import FadeIn from "../components/FadeIn";
- Line 3: import ServiceCard from "../components/ServiceCard";
- Line 4: import ContactSection from "../components/ContactSection";
- Line 5: import { Link } from "react-router-dom";
- Line 6: import { useAuth } from "../context/AuthContext";
- Line 7: 
- Line 8: export default function ServicesPage() {
- Line 9:   const { user } = useAuth();
- Line 10: 
- Line 11:   const renterServices = [
- Line 12:     {
- Line 13:       icon: "🔍",
- Line 14:       title: "Smart Search",
- Line 15:       description: "Filter properties by location, price, rooms, and amenities to find exactly what you're looking for.",
- Line 16:     },
- Line 17:     {
- Line 18:       icon: "📅",
- Line 19:       title: "Virtual & Physical Visits",
- Line 20:       description: "Schedule property viewings directly through the platform at your convenience.",
- Line 21:     },
- Line 22:     {
- Line 23:       icon: "📝",
- Line 24:       title: "Digital Agreements",
- Line 25:       description: "Review, sign, and manage your rental agreements entirely online without paperwork.",
- Line 26:     },
- Line 27:     {
- Line 28:       icon: "💳",
- Line 29:       title: "Secure Management",
- Line 30:       description: "Track your rent status, communicate with owners, and manage your lease securely.",
- Line 31:     }
- Line 32:   ];
- Line 33: 
- Line 34:   const ownerServices = [
- Line 35:     {
- Line 36:       icon: "🏠",
- Line 37:       title: "Property Listing",
- Line 38:       description: "Showcase your properties with high-quality image galleries and detailed descriptions.",
- Line 39:     },
- Line 40:     {
- Line 41:       icon: "🛡️",
- Line 42:       title: "Verified Renters",
- Line 43:       description: "Connect with authenticated users and manage rental requests efficiently.",
- Line 44:     },
- Line 45:     {
- Line 46:       icon: "📊",
- Line 47:       title: "Management Dashboard",
- Line 48:       description: "Get a comprehensive view of your properties, active agreements, and visit schedules.",
- Line 49:     },
- Line 50:     {
- Line 51:       icon: "🚀",
- Line 52:       title: "Premium Reach",
- Line 53:       description: "Boost your property visibility to reach more potential renters faster.",
- Line 54:     }
- Line 55:   ];
- Line 56: 
- Line 57:   return (
- Line 58:     <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
- Line 59:       
- Line 60:       {/* Hero Section */}
- Line 61:       <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
- Line 62:         <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
- Line 63:         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white dark:to-black z-0 transition-colors duration-300"></div>
- Line 64:         <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
- Line 65:           <AnimatedHeading 
- Line 66:             text="Comprehensive Services for Renters and Owners."
- Line 67:             className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
- Line 68:           />
- Line 69:           <FadeIn delay={400}>
- Line 70:             <p className="text-lg text-gray-700 dark:text-gray-300">
- Line 71:               Whether you are looking for a new home or managing multiple properties, we provide the tools you need for a seamless experience.
- Line 72:             </p>
- Line 73:           </FadeIn>
- Line 74:         </div>
- Line 75:       </div>
- Line 76: 
- Line 77:       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
- Line 78: 
- Line 79:         {/* For Renters */}
- Line 80:         <div className="mb-24">
- Line 81:           <div className="flex items-center mb-10">
- Line 82:             <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Renters</h2>
- Line 83:             <div className="h-px bg-gray-200 dark:bg-white/10 flex-1 ml-6 transition-colors duration-300"></div>
- Line 84:           </div>
- Line 85:           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
- Line 86:             {renterServices.map((service, idx) => (
- Line 87:               <FadeIn key={idx} delay={idx * 100}>
- Line 88:                 <ServiceCard {...service} />
- Line 89:               </FadeIn>
- Line 90:             ))}
- Line 91:           </div>
- Line 92:         </div>
- Line 93: 
- Line 94:         {/* For Owners */}
- Line 95:         <div className="mb-24">
- Line 96:           <div className="flex items-center mb-10">
- Line 97:             <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Property Owners</h2>
- Line 98:             <div className="h-px bg-gray-200 dark:bg-white/10 flex-1 ml-6 transition-colors duration-300"></div>
- Line 99:           </div>
- Line 100:           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
- Line 101:             {ownerServices.map((service, idx) => (
- Line 102:               <FadeIn key={idx} delay={idx * 100}>
- Line 103:                 <ServiceCard {...service} />
- Line 104:               </FadeIn>
- Line 105:             ))}
- Line 106:           </div>
- Line 107:         </div>
- Line 108: 
- Line 109:         {/* CTA / Pricing Teaser - Hide if logged in */}
- Line 110:         {!user && (
- Line 111:           <FadeIn delay={200}>
- Line 112:             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 border border-blue-200 dark:border-blue-500/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto transition-colors duration-300">
- Line 113:               <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to list your property?</h2>
- Line 114:               <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
- Line 115:                 Join hundreds of property owners who are already managing their rentals efficiently. Choose a subscription plan that fits your needs.
- Line 116:               </p>
- Line 117:               <div className="flex flex-col sm:flex-row justify-center gap-4">
- Line 118:                 <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
- Line 119:                   Create Owner Account
- Line 120:                 </Link>
- Line 121:                 <a href="#contactform" className="bg-transparent border border-blue-600 dark:border-white/20 hover:bg-blue-50 dark:hover:bg-white/5 text-blue-600 dark:text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-block">
- Line 122:                   Contact Sales
- Line 123:                 </a>
- Line 124:               </div>
- Line 125:             </div>
- Line 126:           </FadeIn>
- Line 127:         )}
- Line 128: 
- Line 129:       </div>
- Line 130:       
- Line 131:       {/* Contact Section */}
- Line 132:       <ContactSection />
- Line 133:     </div>
- Line 134:   );
- Line 135: }

