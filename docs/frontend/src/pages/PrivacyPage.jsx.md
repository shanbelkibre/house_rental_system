# PrivacyPage.jsx

## Code (numbered)

```jsx
     1	import AnimatedHeading from "../components/AnimatedHeading";
     2	import FadeIn from "../components/FadeIn";
     3	
     4	export default function PrivacyPage() {
     5	  const lastUpdated = "October 15, 2025";
     6	
     7	  return (
     8	    <div className="min-h-screen bg-black text-white">
     9	      
    10	      {/* Hero Section */}
    11	      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
    12	        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
    13	        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0"></div>
    14	        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
    15	          <AnimatedHeading 
    16	            text="Privacy Policy"
    17	            className="text-4xl md:text-5xl font-bold mb-4"
    18	          />
    19	          <FadeIn delay={200}>
    20	            <p className="text-gray-300">Last updated: {lastUpdated}</p>
    21	          </FadeIn>
    22	        </div>
    23	      </div>
    24	
    25	      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
    26	
    27	        <FadeIn delay={400}>
    28	          <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-400 prose-li:text-gray-400">
    29	            <h3>1. Information We Collect</h3>
    30	            <p>
    31	              We collect information to provide better services to all our users. We collect information in the following ways:
    32	            </p>
    33	            <ul>
    34	              <li><strong>Information you give us:</strong> For example, our services require you to sign up for an account. When you do, we'll ask for personal information, like your name, email address, telephone number.</li>
    35	              <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them.</li>
    36	            </ul>
    37	
    38	            <h3>2. How We Use Information</h3>
    39	            <p>
    40	              We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect HouseRental and our users. We also use this information to offer you tailored content – like giving you more relevant search results.
    41	            </p>
    42	
    43	            <h3>3. Information Sharing</h3>
    44	            <p>
    45	              We do not share personal information with companies, organizations and individuals outside of HouseRental unless one of the following circumstances applies:
    46	            </p>
    47	            <ul>
    48	              <li><strong>With your consent:</strong> We will share personal information with companies when we have your consent to do so. (e.g., sharing renter info with an owner when a visit is requested).</li>
    49	              <li><strong>For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
    50	            </ul>
    51	
    52	            <h3>4. Data Security</h3>
    53	            <p>
    54	              We work hard to protect HouseRental and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
    55	            </p>
    56	
    57	            <h3>5. Your Rights</h3>
    58	            <p>
    59	              You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access and update your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
    60	            </p>
    61	          </div>
    62	        </FadeIn>
    63	
    64	      </div>
    65	    </div>
    66	  );
    67	}
```

## Line-by-line explanation

- Line 1: import AnimatedHeading from "../components/AnimatedHeading";
- Line 2: import FadeIn from "../components/FadeIn";
- Line 3: 
- Line 4: export default function PrivacyPage() {
- Line 5:   const lastUpdated = "October 15, 2025";
- Line 6: 
- Line 7:   return (
- Line 8:     <div className="min-h-screen bg-black text-white">
- Line 9:       
- Line 10:       {/* Hero Section */}
- Line 11:       <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
- Line 12:         <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
- Line 13:         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0"></div>
- Line 14:         <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
- Line 15:           <AnimatedHeading 
- Line 16:             text="Privacy Policy"
- Line 17:             className="text-4xl md:text-5xl font-bold mb-4"
- Line 18:           />
- Line 19:           <FadeIn delay={200}>
- Line 20:             <p className="text-gray-300">Last updated: {lastUpdated}</p>
- Line 21:           </FadeIn>
- Line 22:         </div>
- Line 23:       </div>
- Line 24: 
- Line 25:       <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
- Line 26: 
- Line 27:         <FadeIn delay={400}>
- Line 28:           <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-400 prose-li:text-gray-400">
- Line 29:             <h3>1. Information We Collect</h3>
- Line 30:             <p>
- Line 31:               We collect information to provide better services to all our users. We collect information in the following ways:
- Line 32:             </p>
- Line 33:             <ul>
- Line 34:               <li><strong>Information you give us:</strong> For example, our services require you to sign up for an account. When you do, we'll ask for personal information, like your name, email address, telephone number.</li>
- Line 35:               <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them.</li>
- Line 36:             </ul>
- Line 37: 
- Line 38:             <h3>2. How We Use Information</h3>
- Line 39:             <p>
- Line 40:               We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect HouseRental and our users. We also use this information to offer you tailored content – like giving you more relevant search results.
- Line 41:             </p>
- Line 42: 
- Line 43:             <h3>3. Information Sharing</h3>
- Line 44:             <p>
- Line 45:               We do not share personal information with companies, organizations and individuals outside of HouseRental unless one of the following circumstances applies:
- Line 46:             </p>
- Line 47:             <ul>
- Line 48:               <li><strong>With your consent:</strong> We will share personal information with companies when we have your consent to do so. (e.g., sharing renter info with an owner when a visit is requested).</li>
- Line 49:               <li><strong>For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
- Line 50:             </ul>
- Line 51: 
- Line 52:             <h3>4. Data Security</h3>
- Line 53:             <p>
- Line 54:               We work hard to protect HouseRental and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
- Line 55:             </p>
- Line 56: 
- Line 57:             <h3>5. Your Rights</h3>
- Line 58:             <p>
- Line 59:               You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access and update your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
- Line 60:             </p>
- Line 61:           </div>
- Line 62:         </FadeIn>
- Line 63: 
- Line 64:       </div>
- Line 65:     </div>
- Line 66:   );
- Line 67: }

