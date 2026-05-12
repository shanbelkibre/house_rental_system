# TermsPage.jsx

## Code (numbered)

```jsx
     1	import AnimatedHeading from "../components/AnimatedHeading";
     2	import FadeIn from "../components/FadeIn";
     3	
     4	export default function TermsPage() {
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
    16	            text="Terms and Conditions"
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
    29	            <h3>1. Introduction</h3>
    30	            <p>
    31	              Welcome to HouseRental. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
    32	            </p>
    33	
    34	            <h3>2. Use of the Site</h3>
    35	            <p>
    36	              You must be at least 18 years of age to use our platform. You are responsible for ensuring that all persons who access our site through your internet connection are aware of these terms.
    37	            </p>
    38	
    39	            <h3>3. User Accounts</h3>
    40	            <ul>
    41	              <li>You are responsible for safeguarding the password that you use to access the Service.</li>
    42	              <li>You agree not to disclose your password to any third party.</li>
    43	              <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
    44	            </ul>
    45	
    46	            <h3>4. Property Listings</h3>
    47	            <p>
    48	              Owners are solely responsible for the accuracy of their property listings. HouseRental reserves the right to remove any listing that is found to be fraudulent, misleading, or violating local laws.
    49	            </p>
    50	
    51	            <h3>5. Agreements and Disputes</h3>
    52	            <p>
    53	              HouseRental provides a digital platform to facilitate rental agreements between owners and renters. We are not a party to the actual rental agreement. Any disputes arising from the rental relationship must be resolved directly between the renter and owner.
    54	            </p>
    55	
    56	            <h3>6. Limitation of Liability</h3>
    57	            <p>
    58	              In no event shall HouseRental, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
    59	            </p>
    60	
    61	            <h3>7. Changes to Terms</h3>
    62	            <p>
    63	              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
    64	            </p>
    65	          </div>
    66	        </FadeIn>
    67	
    68	      </div>
    69	    </div>
    70	  );
    71	}
```

## Line-by-line explanation

- Line 1: import AnimatedHeading from "../components/AnimatedHeading";
- Line 2: import FadeIn from "../components/FadeIn";
- Line 3: 
- Line 4: export default function TermsPage() {
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
- Line 16:             text="Terms and Conditions"
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
- Line 29:             <h3>1. Introduction</h3>
- Line 30:             <p>
- Line 31:               Welcome to HouseRental. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
- Line 32:             </p>
- Line 33: 
- Line 34:             <h3>2. Use of the Site</h3>
- Line 35:             <p>
- Line 36:               You must be at least 18 years of age to use our platform. You are responsible for ensuring that all persons who access our site through your internet connection are aware of these terms.
- Line 37:             </p>
- Line 38: 
- Line 39:             <h3>3. User Accounts</h3>
- Line 40:             <ul>
- Line 41:               <li>You are responsible for safeguarding the password that you use to access the Service.</li>
- Line 42:               <li>You agree not to disclose your password to any third party.</li>
- Line 43:               <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
- Line 44:             </ul>
- Line 45: 
- Line 46:             <h3>4. Property Listings</h3>
- Line 47:             <p>
- Line 48:               Owners are solely responsible for the accuracy of their property listings. HouseRental reserves the right to remove any listing that is found to be fraudulent, misleading, or violating local laws.
- Line 49:             </p>
- Line 50: 
- Line 51:             <h3>5. Agreements and Disputes</h3>
- Line 52:             <p>
- Line 53:               HouseRental provides a digital platform to facilitate rental agreements between owners and renters. We are not a party to the actual rental agreement. Any disputes arising from the rental relationship must be resolved directly between the renter and owner.
- Line 54:             </p>
- Line 55: 
- Line 56:             <h3>6. Limitation of Liability</h3>
- Line 57:             <p>
- Line 58:               In no event shall HouseRental, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
- Line 59:             </p>
- Line 60: 
- Line 61:             <h3>7. Changes to Terms</h3>
- Line 62:             <p>
- Line 63:               We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
- Line 64:             </p>
- Line 65:           </div>
- Line 66:         </FadeIn>
- Line 67: 
- Line 68:       </div>
- Line 69:     </div>
- Line 70:   );
- Line 71: }

