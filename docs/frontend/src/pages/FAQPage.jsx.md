# FAQPage.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import AnimatedHeading from "../components/AnimatedHeading";
     3	import FadeIn from "../components/FadeIn";
     4	import Accordion from "../components/Accordion";
     5	
     6	export default function FAQPage() {
     7	  const [activeCategory, setActiveCategory] = useState("renters");
     8	  const [searchQuery, setSearchQuery] = useState("");
     9	
    10	  const faqs = {
    11	    renters: [
    12	      { q: "How do I schedule a physical visit?", a: "Once you find a house you like, click the 'Request Visit' button on the property details page. You can choose a convenient date and time, and wait for the owner's confirmation." },
    13	      { q: "Is it safe to pay through the platform?", a: "Currently, our platform facilitates the digital agreement process. Payments should be handled securely offline or through your bank according to the agreed terms in your digital lease." },
    14	      { q: "What documents do I need to rent a house?", a: "Typically, owners require a valid Government ID (Kebele ID or Passport) and sometimes proof of income. You can upload these securely in your profile." },
    15	      { q: "Can I cancel a visit request?", a: "Yes, you can cancel a pending visit request from your 'My Visits' dashboard. If it's already confirmed, we recommend messaging the owner first." }
    16	    ],
    17	    owners: [
    18	      { q: "How do I list my property?", a: "Create an owner account, go to 'My Houses', and click 'Add New House'. Fill in all details, upload quality photos, and submit it for admin verification." },
    19	      { q: "What is the verification process?", a: "To ensure platform safety, all newly listed houses are reviewed by our admins before they go live. This usually takes less than 24 hours." },
    20	      { q: "How much does it cost to list a property?", a: "We offer different subscription tiers. The basic tier might allow you to list 1 property for free, while premium tiers allow multiple listings and better visibility." },
    21	      { q: "How do digital agreements work?", a: "When a renter accepts your terms, a digital lease is generated. Both parties sign it electronically on the platform, and a PDF copy is available for download." }
    22	    ],
    23	    general: [
    24	      { q: "What happens if there's a dispute?", a: "While we provide the platform to connect, disputes should be resolved based on the signed digital agreement. We recommend clear communication and adhering to local rental laws." },
    25	      { q: "How can I reset my password?", a: "Click on 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your inbox." },
    26	      { q: "Is the platform available everywhere in Ethiopia?", a: "We started in Debre Birhan but are rapidly expanding to Addis Ababa and other major cities." }
    27	    ]
    28	  };
    29	
    30	  const filteredFaqs = () => {
    31	    let currentList = faqs[activeCategory];
    32	    if (searchQuery) {
    33	      currentList = currentList.filter(
    34	        faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    35	               faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    36	      );
    37	    }
    38	    return currentList;
    39	  };
    40	
    41	  return (
    42	    <div className="min-h-screen bg-black text-white">
    43	      
    44	      {/* Hero Section */}
    45	      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
    46	        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
    47	        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0"></div>
    48	        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
    49	          <AnimatedHeading 
    50	            text="Frequently Asked Questions."
    51	            className="text-4xl md:text-5xl font-bold mb-6"
    52	          />
    53	          <FadeIn delay={400}>
    54	            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
    55	              Find answers to common questions about using HouseRental. Can't find what you're looking for? Contact our support team.
    56	            </p>
    57	            <div className="max-w-md mx-auto relative">
    58	              <input 
    59	                type="text" 
    60	                placeholder="Search FAQs..." 
    61	                className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
    62	                value={searchQuery}
    63	                onChange={(e) => setSearchQuery(e.target.value)}
    64	              />
    65	              <span className="absolute left-4 top-3 text-gray-500">🔍</span>
    66	            </div>
    67	          </FadeIn>
    68	        </div>
    69	      </div>
    70	
    71	      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
    72	
    73	        {/* Categories */}
    74	        <FadeIn delay={600}>
    75	          <div className="flex flex-wrap justify-center gap-2 mb-10">
    76	            {["renters", "owners", "general"].map((cat) => (
    77	              <button
    78	                key={cat}
    79	                onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}
    80	                className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
    81	                  activeCategory === cat 
    82	                    ? "bg-blue-600 text-white" 
    83	                    : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
    84	                }`}
    85	              >
    86	                For {cat}
    87	              </button>
    88	            ))}
    89	          </div>
    90	
    91	          {/* FAQ List */}
    92	          <div className="space-y-4 min-h-[400px]">
    93	            {filteredFaqs().length > 0 ? (
    94	              filteredFaqs().map((faq, idx) => (
    95	                <Accordion key={idx} question={faq.q} answer={faq.a} />
    96	              ))
    97	            ) : (
    98	              <div className="text-center py-10 text-gray-500">
    99	                No results found for "{searchQuery}".
   100	              </div>
   101	            )}
   102	          </div>
   103	        </FadeIn>
   104	
   105	      </div>
   106	    </div>
   107	  );
   108	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import AnimatedHeading from "../components/AnimatedHeading";
- Line 3: import FadeIn from "../components/FadeIn";
- Line 4: import Accordion from "../components/Accordion";
- Line 5: 
- Line 6: export default function FAQPage() {
- Line 7:   const [activeCategory, setActiveCategory] = useState("renters");
- Line 8:   const [searchQuery, setSearchQuery] = useState("");
- Line 9: 
- Line 10:   const faqs = {
- Line 11:     renters: [
- Line 12:       { q: "How do I schedule a physical visit?", a: "Once you find a house you like, click the 'Request Visit' button on the property details page. You can choose a convenient date and time, and wait for the owner's confirmation." },
- Line 13:       { q: "Is it safe to pay through the platform?", a: "Currently, our platform facilitates the digital agreement process. Payments should be handled securely offline or through your bank according to the agreed terms in your digital lease." },
- Line 14:       { q: "What documents do I need to rent a house?", a: "Typically, owners require a valid Government ID (Kebele ID or Passport) and sometimes proof of income. You can upload these securely in your profile." },
- Line 15:       { q: "Can I cancel a visit request?", a: "Yes, you can cancel a pending visit request from your 'My Visits' dashboard. If it's already confirmed, we recommend messaging the owner first." }
- Line 16:     ],
- Line 17:     owners: [
- Line 18:       { q: "How do I list my property?", a: "Create an owner account, go to 'My Houses', and click 'Add New House'. Fill in all details, upload quality photos, and submit it for admin verification." },
- Line 19:       { q: "What is the verification process?", a: "To ensure platform safety, all newly listed houses are reviewed by our admins before they go live. This usually takes less than 24 hours." },
- Line 20:       { q: "How much does it cost to list a property?", a: "We offer different subscription tiers. The basic tier might allow you to list 1 property for free, while premium tiers allow multiple listings and better visibility." },
- Line 21:       { q: "How do digital agreements work?", a: "When a renter accepts your terms, a digital lease is generated. Both parties sign it electronically on the platform, and a PDF copy is available for download." }
- Line 22:     ],
- Line 23:     general: [
- Line 24:       { q: "What happens if there's a dispute?", a: "While we provide the platform to connect, disputes should be resolved based on the signed digital agreement. We recommend clear communication and adhering to local rental laws." },
- Line 25:       { q: "How can I reset my password?", a: "Click on 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your inbox." },
- Line 26:       { q: "Is the platform available everywhere in Ethiopia?", a: "We started in Debre Birhan but are rapidly expanding to Addis Ababa and other major cities." }
- Line 27:     ]
- Line 28:   };
- Line 29: 
- Line 30:   const filteredFaqs = () => {
- Line 31:     let currentList = faqs[activeCategory];
- Line 32:     if (searchQuery) {
- Line 33:       currentList = currentList.filter(
- Line 34:         faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
- Line 35:                faq.a.toLowerCase().includes(searchQuery.toLowerCase())
- Line 36:       );
- Line 37:     }
- Line 38:     return currentList;
- Line 39:   };
- Line 40: 
- Line 41:   return (
- Line 42:     <div className="min-h-screen bg-black text-white">
- Line 43:       
- Line 44:       {/* Hero Section */}
- Line 45:       <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
- Line 46:         <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
- Line 47:         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0"></div>
- Line 48:         <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
- Line 49:           <AnimatedHeading 
- Line 50:             text="Frequently Asked Questions."
- Line 51:             className="text-4xl md:text-5xl font-bold mb-6"
- Line 52:           />
- Line 53:           <FadeIn delay={400}>
- Line 54:             <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
- Line 55:               Find answers to common questions about using HouseRental. Can't find what you're looking for? Contact our support team.
- Line 56:             </p>
- Line 57:             <div className="max-w-md mx-auto relative">
- Line 58:               <input 
- Line 59:                 type="text" 
- Line 60:                 placeholder="Search FAQs..." 
- Line 61:                 className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
- Line 62:                 value={searchQuery}
- Line 63:                 onChange={(e) => setSearchQuery(e.target.value)}
- Line 64:               />
- Line 65:               <span className="absolute left-4 top-3 text-gray-500">🔍</span>
- Line 66:             </div>
- Line 67:           </FadeIn>
- Line 68:         </div>
- Line 69:       </div>
- Line 70: 
- Line 71:       <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
- Line 72: 
- Line 73:         {/* Categories */}
- Line 74:         <FadeIn delay={600}>
- Line 75:           <div className="flex flex-wrap justify-center gap-2 mb-10">
- Line 76:             {["renters", "owners", "general"].map((cat) => (
- Line 77:               <button
- Line 78:                 key={cat}
- Line 79:                 onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}
- Line 80:                 className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
- Line 81:                   activeCategory === cat 
- Line 82:                     ? "bg-blue-600 text-white" 
- Line 83:                     : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
- Line 84:                 }`}
- Line 85:               >
- Line 86:                 For {cat}
- Line 87:               </button>
- Line 88:             ))}
- Line 89:           </div>
- Line 90: 
- Line 91:           {/* FAQ List */}
- Line 92:           <div className="space-y-4 min-h-[400px]">
- Line 93:             {filteredFaqs().length > 0 ? (
- Line 94:               filteredFaqs().map((faq, idx) => (
- Line 95:                 <Accordion key={idx} question={faq.q} answer={faq.a} />
- Line 96:               ))
- Line 97:             ) : (
- Line 98:               <div className="text-center py-10 text-gray-500">
- Line 99:                 No results found for "{searchQuery}".
- Line 100:               </div>
- Line 101:             )}
- Line 102:           </div>
- Line 103:         </FadeIn>
- Line 104: 
- Line 105:       </div>
- Line 106:     </div>
- Line 107:   );
- Line 108: }

