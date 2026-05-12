# BlogPage.jsx

## Code (numbered)

```jsx
     1	import AnimatedHeading from "../components/AnimatedHeading";
     2	import FadeIn from "../components/FadeIn";
     3	import { Link } from "react-router-dom";
     4	
     5	export default function BlogPage() {
     6	  const posts = [
     7	    {
     8	      id: 1,
     9	      title: "Top 10 Tips for Finding the Perfect Rental Home",
    10	      excerpt:
    11	        "Finding a rental home can be stressful. Here are our top 10 tips to ensure you find a place that fits your needs and budget.",
    12	      image:
    13	        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    14	      date: "Oct 12, 2025",
    15	      category: "For Renters",
    16	      author: "Tigist Haile",
    17	    },
    18	    {
    19	      id: 2,
    20	      title: "How to Take Photos That Get Your Property Rented Fast",
    21	      excerpt:
    22	        "Great photos are the key to a successful listing. Learn how to stage and photograph your property like a pro.",
    23	      image:
    24	        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    25	      date: "Oct 05, 2025",
    26	      category: "For Owners",
    27	      author: "Dawit Samuel",
    28	    },
    29	    {
    30	      id: 3,
    31	      title: "Understanding Digital Rental Agreements",
    32	      excerpt:
    33	        "Digital agreements are legally binding and easier to manage. We break down everything you need to know about signing online.",
    34	      image:
    35	        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    36	      date: "Sep 28, 2025",
    37	      category: "Legal",
    38	      author: "Abebe Kebede",
    39	    },
    40	    {
    41	      id: 4,
    42	      title: "The Ultimate Move-In Checklist",
    43	      excerpt:
    44	        "Don't forget anything on moving day! Use our comprehensive checklist to ensure a smooth transition to your new home.",
    45	      image:
    46	        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    47	      date: "Sep 15, 2025",
    48	      category: "For Renters",
    49	      author: "Tigist Haile",
    50	    },
    51	    {
    52	      id: 5,
    53	      title: "Why Tenant Screening is Crucial for Owners",
    54	      excerpt:
    55	        "Protect your investment by properly screening potential tenants. Here is how our platform helps you verify applicants.",
    56	      image:
    57	        "https://images.unsplash.com/photo-1556156653-e5a7c69cc263?w=800&q=80",
    58	      date: "Sep 02, 2025",
    59	      category: "For Owners",
    60	      author: "Dawit Samuel",
    61	    },
    62	    {
    63	      id: 6,
    64	      title: "Neighborhood Spotlight: Debre Birhan",
    65	      excerpt:
    66	        "Discover the best areas to live in Debre Birhan, with insights into local amenities, schools, and transportation.",
    67	      image:
    68	        "https://images.unsplash.com/photo-1519408469771-258609313b14?w=800&q=80",
    69	      date: "Aug 20, 2025",
    70	      category: "Market Trends",
    71	      author: "Abebe Kebede",
    72	    },
    73	  ];
    74	
    75	  return (
    76	    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
    77	      {/* Hero Section */}
    78	      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
    79	        <img
    80	          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
    81	          alt="Background"
    82	          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 dark:opacity-10"
    83	        />
    84	        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white dark:from-black/80 dark:via-black/40 dark:to-black z-0"></div>
    85	        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
    86	          <AnimatedHeading
    87	            text="HouseRental Blog."
    88	            className="text-4xl md:text-5xl font-bold mb-6"
    89	          />
    90	          <FadeIn delay={400}>
    91	            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
    92	              Tips, news, and insights for renters and property owners.
    93	            </p>
    94	          </FadeIn>
    95	        </div>
    96	      </div>
    97	
    98	      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
    99	        {/* Featured Post (First one) */}
   100	        <FadeIn delay={600}>
   101	          <div className="mb-16">
   102	            <Link to={`/blog/${posts[0].id}`} className="group block">
   103	              <div className="relative rounded-3xl overflow-hidden h-[500px] w-full">
   104	                <img
   105	                  src={posts[0].image}
   106	                  alt={posts[0].title}
   107	                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
   108	                />
   109	                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
   110	                  <div className="flex items-center space-x-4 mb-4">
   111	                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
   112	                      {posts[0].category}
   113	                    </span>
   114	                    <span className="text-gray-300 text-sm">
   115	                      {posts[0].date}
   116	                    </span>
   117	                  </div>
   118	                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
   119	                    {posts[0].title}
   120	                  </h2>
   121	                  <p className="text-gray-300 text-lg max-w-3xl mb-4 hidden md:block">
   122	                    {posts[0].excerpt}
   123	                  </p>
   124	                  <div className="flex items-center">
   125	                    <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 overflow-hidden">
   126	                      <img
   127	                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(posts[0].author)}&background=random`}
   128	                        alt={posts[0].author}
   129	                      />
   130	                    </div>
   131	                    <span className="text-sm text-gray-300">
   132	                      {posts[0].author}
   133	                    </span>
   134	                  </div>
   135	                </div>
   136	              </div>
   137	            </Link>
   138	          </div>
   139	        </FadeIn>
   140	
   141	        {/* Post Grid */}
   142	        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
   143	          {posts.slice(1).map((post, idx) => (
   144	            <FadeIn key={post.id} delay={idx * 100}>
   145	              <Link to={`/blog/${post.id}`} className="group block h-full">
   146	                <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full">
   147	                  <div className="relative h-48 w-full overflow-hidden">
   148	                    <img
   149	                      src={post.image}
   150	                      alt={post.title}
   151	                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
   152	                    />
   153	                    <div className="absolute top-4 left-4">
   154	                      <span className="bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
   155	                        {post.category}
   156	                      </span>
   157	                    </div>
   158	                  </div>
   159	                  <div className="p-6 flex-1 flex flex-col">
   160	                    <span className="text-gray-400 text-sm mb-3 block">
   161	                      {post.date}
   162	                    </span>
   163	                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
   164	                      {post.title}
   165	                    </h3>
   166	                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
   167	                      {post.excerpt}
   168	                    </p>
   169	                    <div className="flex items-center mt-auto">
   170	                      <div className="w-6 h-6 rounded-full bg-gray-700 mr-3 overflow-hidden">
   171	                        <img
   172	                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
   173	                          alt={post.author}
   174	                        />
   175	                      </div>
   176	                      <span className="text-xs text-gray-400">
   177	                        {post.author}
   178	                      </span>
   179	                    </div>
   180	                  </div>
   181	                </div>
   182	              </Link>
   183	            </FadeIn>
   184	          ))}
   185	        </div>
   186	      </div>
   187	    </div>
   188	  );
   189	}
```

## Line-by-line explanation

- Line 1: import AnimatedHeading from "../components/AnimatedHeading";
- Line 2: import FadeIn from "../components/FadeIn";
- Line 3: import { Link } from "react-router-dom";
- Line 4: 
- Line 5: export default function BlogPage() {
- Line 6:   const posts = [
- Line 7:     {
- Line 8:       id: 1,
- Line 9:       title: "Top 10 Tips for Finding the Perfect Rental Home",
- Line 10:       excerpt:
- Line 11:         "Finding a rental home can be stressful. Here are our top 10 tips to ensure you find a place that fits your needs and budget.",
- Line 12:       image:
- Line 13:         "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
- Line 14:       date: "Oct 12, 2025",
- Line 15:       category: "For Renters",
- Line 16:       author: "Tigist Haile",
- Line 17:     },
- Line 18:     {
- Line 19:       id: 2,
- Line 20:       title: "How to Take Photos That Get Your Property Rented Fast",
- Line 21:       excerpt:
- Line 22:         "Great photos are the key to a successful listing. Learn how to stage and photograph your property like a pro.",
- Line 23:       image:
- Line 24:         "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
- Line 25:       date: "Oct 05, 2025",
- Line 26:       category: "For Owners",
- Line 27:       author: "Dawit Samuel",
- Line 28:     },
- Line 29:     {
- Line 30:       id: 3,
- Line 31:       title: "Understanding Digital Rental Agreements",
- Line 32:       excerpt:
- Line 33:         "Digital agreements are legally binding and easier to manage. We break down everything you need to know about signing online.",
- Line 34:       image:
- Line 35:         "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
- Line 36:       date: "Sep 28, 2025",
- Line 37:       category: "Legal",
- Line 38:       author: "Abebe Kebede",
- Line 39:     },
- Line 40:     {
- Line 41:       id: 4,
- Line 42:       title: "The Ultimate Move-In Checklist",
- Line 43:       excerpt:
- Line 44:         "Don't forget anything on moving day! Use our comprehensive checklist to ensure a smooth transition to your new home.",
- Line 45:       image:
- Line 46:         "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
- Line 47:       date: "Sep 15, 2025",
- Line 48:       category: "For Renters",
- Line 49:       author: "Tigist Haile",
- Line 50:     },
- Line 51:     {
- Line 52:       id: 5,
- Line 53:       title: "Why Tenant Screening is Crucial for Owners",
- Line 54:       excerpt:
- Line 55:         "Protect your investment by properly screening potential tenants. Here is how our platform helps you verify applicants.",
- Line 56:       image:
- Line 57:         "https://images.unsplash.com/photo-1556156653-e5a7c69cc263?w=800&q=80",
- Line 58:       date: "Sep 02, 2025",
- Line 59:       category: "For Owners",
- Line 60:       author: "Dawit Samuel",
- Line 61:     },
- Line 62:     {
- Line 63:       id: 6,
- Line 64:       title: "Neighborhood Spotlight: Debre Birhan",
- Line 65:       excerpt:
- Line 66:         "Discover the best areas to live in Debre Birhan, with insights into local amenities, schools, and transportation.",
- Line 67:       image:
- Line 68:         "https://images.unsplash.com/photo-1519408469771-258609313b14?w=800&q=80",
- Line 69:       date: "Aug 20, 2025",
- Line 70:       category: "Market Trends",
- Line 71:       author: "Abebe Kebede",
- Line 72:     },
- Line 73:   ];
- Line 74: 
- Line 75:   return (
- Line 76:     <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
- Line 77:       {/* Hero Section */}
- Line 78:       <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
- Line 79:         <img
- Line 80:           src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
- Line 81:           alt="Background"
- Line 82:           className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 dark:opacity-10"
- Line 83:         />
- Line 84:         <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white dark:from-black/80 dark:via-black/40 dark:to-black z-0"></div>
- Line 85:         <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
- Line 86:           <AnimatedHeading
- Line 87:             text="HouseRental Blog."
- Line 88:             className="text-4xl md:text-5xl font-bold mb-6"
- Line 89:           />
- Line 90:           <FadeIn delay={400}>
- Line 91:             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
- Line 92:               Tips, news, and insights for renters and property owners.
- Line 93:             </p>
- Line 94:           </FadeIn>
- Line 95:         </div>
- Line 96:       </div>
- Line 97: 
- Line 98:       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
- Line 99:         {/* Featured Post (First one) */}
- Line 100:         <FadeIn delay={600}>
- Line 101:           <div className="mb-16">
- Line 102:             <Link to={`/blog/${posts[0].id}`} className="group block">
- Line 103:               <div className="relative rounded-3xl overflow-hidden h-[500px] w-full">
- Line 104:                 <img
- Line 105:                   src={posts[0].image}
- Line 106:                   alt={posts[0].title}
- Line 107:                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
- Line 108:                 />
- Line 109:                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
- Line 110:                   <div className="flex items-center space-x-4 mb-4">
- Line 111:                     <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
- Line 112:                       {posts[0].category}
- Line 113:                     </span>
- Line 114:                     <span className="text-gray-300 text-sm">
- Line 115:                       {posts[0].date}
- Line 116:                     </span>
- Line 117:                   </div>
- Line 118:                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
- Line 119:                     {posts[0].title}
- Line 120:                   </h2>
- Line 121:                   <p className="text-gray-300 text-lg max-w-3xl mb-4 hidden md:block">
- Line 122:                     {posts[0].excerpt}
- Line 123:                   </p>
- Line 124:                   <div className="flex items-center">
- Line 125:                     <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 overflow-hidden">
- Line 126:                       <img
- Line 127:                         src={`https://ui-avatars.com/api/?name=${encodeURIComponent(posts[0].author)}&background=random`}
- Line 128:                         alt={posts[0].author}
- Line 129:                       />
- Line 130:                     </div>
- Line 131:                     <span className="text-sm text-gray-300">
- Line 132:                       {posts[0].author}
- Line 133:                     </span>
- Line 134:                   </div>
- Line 135:                 </div>
- Line 136:               </div>
- Line 137:             </Link>
- Line 138:           </div>
- Line 139:         </FadeIn>
- Line 140: 
- Line 141:         {/* Post Grid */}
- Line 142:         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
- Line 143:           {posts.slice(1).map((post, idx) => (
- Line 144:             <FadeIn key={post.id} delay={idx * 100}>
- Line 145:               <Link to={`/blog/${post.id}`} className="group block h-full">
- Line 146:                 <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full">
- Line 147:                   <div className="relative h-48 w-full overflow-hidden">
- Line 148:                     <img
- Line 149:                       src={post.image}
- Line 150:                       alt={post.title}
- Line 151:                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
- Line 152:                     />
- Line 153:                     <div className="absolute top-4 left-4">
- Line 154:                       <span className="bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
- Line 155:                         {post.category}
- Line 156:                       </span>
- Line 157:                     </div>
- Line 158:                   </div>
- Line 159:                   <div className="p-6 flex-1 flex flex-col">
- Line 160:                     <span className="text-gray-400 text-sm mb-3 block">
- Line 161:                       {post.date}
- Line 162:                     </span>
- Line 163:                     <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
- Line 164:                       {post.title}
- Line 165:                     </h3>
- Line 166:                     <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
- Line 167:                       {post.excerpt}
- Line 168:                     </p>
- Line 169:                     <div className="flex items-center mt-auto">
- Line 170:                       <div className="w-6 h-6 rounded-full bg-gray-700 mr-3 overflow-hidden">
- Line 171:                         <img
- Line 172:                           src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
- Line 173:                           alt={post.author}
- Line 174:                         />
- Line 175:                       </div>
- Line 176:                       <span className="text-xs text-gray-400">
- Line 177:                         {post.author}
- Line 178:                       </span>
- Line 179:                     </div>
- Line 180:                   </div>
- Line 181:                 </div>
- Line 182:               </Link>
- Line 183:             </FadeIn>
- Line 184:           ))}
- Line 185:         </div>
- Line 186:       </div>
- Line 187:     </div>
- Line 188:   );
- Line 189: }

