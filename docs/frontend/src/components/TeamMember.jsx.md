# TeamMember.jsx

## Code (numbered)

```jsx
     1	export default function TeamMember({ image, name, role, bio, social, imagePosition = "object-top" }) {
     2	  return (
     3	    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center p-6 group shadow-sm dark:shadow-none">
     4	      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100 dark:border-gray-800 group-hover:border-blue-500/50 transition-colors">
     5	        <img 
     6	          src={image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=random"} 
     7	          alt={name}
     8	          className={`w-full h-full object-cover ${imagePosition} group-hover:scale-105 transition-transform duration-500`}
     9	          loading="lazy"
    10	        />
    11	      </div>
    12	      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
    13	      <p className="text-blue-600 dark:text-blue-500 text-sm font-medium mb-3">{role}</p>
    14	      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
    15	        {bio}
    16	      </p>
    17	      <div className="mt-auto flex space-x-3">
    18	        {social?.twitter && (
    19	          <a href={social.twitter} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-colors">
    20	            <span className="sr-only">Twitter</span>
    21	            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
    22	          </a>
    23	        )}
    24	        {social?.linkedin && (
    25	          <a href={social.linkedin} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-700 hover:text-white transition-colors">
    26	            <span className="sr-only">LinkedIn</span>
    27	            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    28	          </a>
    29	        )}
    30	      </div>
    31	    </div>
    32	  );
    33	}
```

## Line-by-line explanation

- Line 1: export default function TeamMember({ image, name, role, bio, social, imagePosition = "object-top" }) {
- Line 2:   return (
- Line 3:     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center p-6 group shadow-sm dark:shadow-none">
- Line 4:       <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100 dark:border-gray-800 group-hover:border-blue-500/50 transition-colors">
- Line 5:         <img 
- Line 6:           src={image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=random"} 
- Line 7:           alt={name}
- Line 8:           className={`w-full h-full object-cover ${imagePosition} group-hover:scale-105 transition-transform duration-500`}
- Line 9:           loading="lazy"
- Line 10:         />
- Line 11:       </div>
- Line 12:       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
- Line 13:       <p className="text-blue-600 dark:text-blue-500 text-sm font-medium mb-3">{role}</p>
- Line 14:       <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
- Line 15:         {bio}
- Line 16:       </p>
- Line 17:       <div className="mt-auto flex space-x-3">
- Line 18:         {social?.twitter && (
- Line 19:           <a href={social.twitter} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-colors">
- Line 20:             <span className="sr-only">Twitter</span>
- Line 21:             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
- Line 22:           </a>
- Line 23:         )}
- Line 24:         {social?.linkedin && (
- Line 25:           <a href={social.linkedin} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-700 hover:text-white transition-colors">
- Line 26:             <span className="sr-only">LinkedIn</span>
- Line 27:             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
- Line 28:           </a>
- Line 29:         )}
- Line 30:       </div>
- Line 31:     </div>
- Line 32:   );
- Line 33: }

