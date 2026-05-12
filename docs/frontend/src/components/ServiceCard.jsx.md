# ServiceCard.jsx

## Code (numbered)

```jsx
     1	import { Link } from "react-router-dom";
     2	
     3	export default function ServiceCard({ icon, title, description, linkTo, linkText }) {
     4	  return (
     5	    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group shadow-sm dark:shadow-none">
     6	      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
     7	        {icon}
     8	      </div>
     9	      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
    10	      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
    11	        {description}
    12	      </p>
    13	      {linkTo && (
    14	        <Link 
    15	          to={linkTo} 
    16	          className="text-blue-500 hover:text-blue-400 font-medium text-sm flex items-center group-hover:underline"
    17	        >
    18	          {linkText || "Learn more"}
    19	          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
    20	        </Link>
    21	      )}
    22	    </div>
    23	  );
    24	}
```

## Line-by-line explanation

- Line 1: import { Link } from "react-router-dom";
- Line 2: 
- Line 3: export default function ServiceCard({ icon, title, description, linkTo, linkText }) {
- Line 4:   return (
- Line 5:     <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group shadow-sm dark:shadow-none">
- Line 6:       <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
- Line 7:         {icon}
- Line 8:       </div>
- Line 9:       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
- Line 10:       <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
- Line 11:         {description}
- Line 12:       </p>
- Line 13:       {linkTo && (
- Line 14:         <Link 
- Line 15:           to={linkTo} 
- Line 16:           className="text-blue-500 hover:text-blue-400 font-medium text-sm flex items-center group-hover:underline"
- Line 17:         >
- Line 18:           {linkText || "Learn more"}
- Line 19:           <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
- Line 20:         </Link>
- Line 21:       )}
- Line 22:     </div>
- Line 23:   );
- Line 24: }

