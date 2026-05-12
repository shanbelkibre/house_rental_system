# Footer.jsx

## Code (numbered)

```jsx
     1	import { Link } from "react-router-dom";
     2	
     3	export default function Footer() {
     4	  const currentYear = new Date().getFullYear();
     5	
     6	  return (
     7	    <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 py-12 px-6 md:px-12 lg:px-16 mt-auto border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
     8	      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
     9	        {/* Column 1: Brand & Social */}
    10	        <div className="space-y-4">
    11	          <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
    12	            HouseRental
    13	          </Link>
    14	          <p className="text-sm text-gray-500 dark:text-gray-400">
    15	            Our trusted platform for finding the perfect home or managing your rental properties securely and easily.
    16	          </p>
    17	          <div className="flex space-x-4 pt-2">
    18	  {/* GitHub */}
    19	  <a 
    20	    href="https://github.com/shanbelkibre" 
    21	    target="_blank" 
    22	    rel="noopener noreferrer"
    23	    className="hover:text-gray-400 transition-colors"
    24	  >
    25	    <span className="sr-only">GitHub</span>
    26	    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    27	      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    28	    </svg>
    29	  </a>
    30	
    31	  {/* LinkedIn */}
    32	  <a 
    33	    href="https://www.linkedin.com/in/shanbel-kibre/" 
    34	    target="_blank" 
    35	    rel="noopener noreferrer"
    36	    className="hover:text-blue-500 transition-colors"
    37	  >
    38	    <span className="sr-only">LinkedIn</span>
    39	    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    40	      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
    41	    </svg>
    42	  </a>
    43	</div>
    44	        </div>
    45	
    46	        {/* Column 2: Quick Links */}
    47	        <div>
    48	          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Quick Links</h3>
    49	          <ul className="space-y-2 text-sm">
    50	            <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About Us</Link></li>
    51	            <li><Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">Our Services</Link></li>
    52	            <li><Link to="/houses" className="hover:text-black dark:hover:text-white transition-colors">Browse Houses</Link></li>
    53	            <li><Link to="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog & News</Link></li>
    54	          </ul>
    55	        </div>
    56	
    57	        {/* Column 3: Support */}
    58	        <div>
    59	          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Support</h3>
    60	          <ul className="space-y-2 text-sm">
    61	            <li><Link to="/faq" className="hover:text-black dark:hover:text-white transition-colors">Help & FAQ</Link></li>
    62	            <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
    63	            <li><Link to="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link></li>
    64	            <li><Link to="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
    65	          </ul>
    66	        </div>
    67	
    68	        {/* Column 4: Contact */}
    69	        <div>
    70	          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Contact Us</h3>
    71	          <ul className="space-y-3 text-sm">
    72	            <li className="flex items-start">
    73	              <span className="mr-2">📍</span>
    74	              <span>Debre Birhan Road, North Shewa, Ethiopia</span>
    75	            </li>
    76	            <li className="flex items-center">
    77	              <span className="mr-2">📞</span>
    78	              <span>+251 946 340 709</span>
    79	            </li>
    80	            <li className="flex items-center">
    81	              <span className="mr-2">✉️</span>
    82	              <a href="mailto:shambel5110@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">shambel5110@gmail.com</a>
    83	            </li>
    84	          </ul>
    85	        </div>
    86	      </div>
    87	
    88	      {/* Bottom Bar */}
    89	      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
    90	        <p>&copy; {currentYear} HouseRental. All rights reserved.</p>
    91	       
    92	       
    93	      </div>
    94	    </footer>
    95	  );
    96	}
```

## Line-by-line explanation

- Line 1: import { Link } from "react-router-dom";
- Line 2: 
- Line 3: export default function Footer() {
- Line 4:   const currentYear = new Date().getFullYear();
- Line 5: 
- Line 6:   return (
- Line 7:     <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 py-12 px-6 md:px-12 lg:px-16 mt-auto border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
- Line 8:       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
- Line 9:         {/* Column 1: Brand & Social */}
- Line 10:         <div className="space-y-4">
- Line 11:           <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
- Line 12:             HouseRental
- Line 13:           </Link>
- Line 14:           <p className="text-sm text-gray-500 dark:text-gray-400">
- Line 15:             Our trusted platform for finding the perfect home or managing your rental properties securely and easily.
- Line 16:           </p>
- Line 17:           <div className="flex space-x-4 pt-2">
- Line 18:   {/* GitHub */}
- Line 19:   <a 
- Line 20:     href="https://github.com/shanbelkibre" 
- Line 21:     target="_blank" 
- Line 22:     rel="noopener noreferrer"
- Line 23:     className="hover:text-gray-400 transition-colors"
- Line 24:   >
- Line 25:     <span className="sr-only">GitHub</span>
- Line 26:     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
- Line 27:       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
- Line 28:     </svg>
- Line 29:   </a>
- Line 30: 
- Line 31:   {/* LinkedIn */}
- Line 32:   <a 
- Line 33:     href="https://www.linkedin.com/in/shanbel-kibre/" 
- Line 34:     target="_blank" 
- Line 35:     rel="noopener noreferrer"
- Line 36:     className="hover:text-blue-500 transition-colors"
- Line 37:   >
- Line 38:     <span className="sr-only">LinkedIn</span>
- Line 39:     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
- Line 40:       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
- Line 41:     </svg>
- Line 42:   </a>
- Line 43: </div>
- Line 44:         </div>
- Line 45: 
- Line 46:         {/* Column 2: Quick Links */}
- Line 47:         <div>
- Line 48:           <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Quick Links</h3>
- Line 49:           <ul className="space-y-2 text-sm">
- Line 50:             <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About Us</Link></li>
- Line 51:             <li><Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">Our Services</Link></li>
- Line 52:             <li><Link to="/houses" className="hover:text-black dark:hover:text-white transition-colors">Browse Houses</Link></li>
- Line 53:             <li><Link to="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog & News</Link></li>
- Line 54:           </ul>
- Line 55:         </div>
- Line 56: 
- Line 57:         {/* Column 3: Support */}
- Line 58:         <div>
- Line 59:           <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Support</h3>
- Line 60:           <ul className="space-y-2 text-sm">
- Line 61:             <li><Link to="/faq" className="hover:text-black dark:hover:text-white transition-colors">Help & FAQ</Link></li>
- Line 62:             <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
- Line 63:             <li><Link to="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link></li>
- Line 64:             <li><Link to="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
- Line 65:           </ul>
- Line 66:         </div>
- Line 67: 
- Line 68:         {/* Column 4: Contact */}
- Line 69:         <div>
- Line 70:           <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Contact Us</h3>
- Line 71:           <ul className="space-y-3 text-sm">
- Line 72:             <li className="flex items-start">
- Line 73:               <span className="mr-2">📍</span>
- Line 74:               <span>Debre Birhan Road, North Shewa, Ethiopia</span>
- Line 75:             </li>
- Line 76:             <li className="flex items-center">
- Line 77:               <span className="mr-2">📞</span>
- Line 78:               <span>+251 946 340 709</span>
- Line 79:             </li>
- Line 80:             <li className="flex items-center">
- Line 81:               <span className="mr-2">✉️</span>
- Line 82:               <a href="mailto:shambel5110@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">shambel5110@gmail.com</a>
- Line 83:             </li>
- Line 84:           </ul>
- Line 85:         </div>
- Line 86:       </div>
- Line 87: 
- Line 88:       {/* Bottom Bar */}
- Line 89:       <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
- Line 90:         <p>&copy; {currentYear} HouseRental. All rights reserved.</p>
- Line 91:        
- Line 92:        
- Line 93:       </div>
- Line 94:     </footer>
- Line 95:   );
- Line 96: }

