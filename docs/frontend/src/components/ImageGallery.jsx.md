# ImageGallery.jsx

## Code (numbered)

```jsx
     1	import { useState } from 'react';
     2	import { toStorageUrl } from '../utils/media';
     3	
     4	export default function ImageGallery({ images = [], onDelete, onSetPrimary, isOwner }) {
     5	  const [mainIdx, setMainIdx] = useState(0);
     6	  const [fullscreen, setFullscreen] = useState(false);
     7	
     8	  if (!images || images.length === 0) {
     9	    return (
    10	      <div className="rounded-3xl overflow-hidden bg-gray-50 h-96 flex items-center justify-center text-8xl text-gray-200 border border-gray-100 shadow-inner">
    11	        🏠
    12	      </div>
    13	    );
    14	  }
    15	
    16	  const mainImage = images[mainIdx];
    17	  const mainUrl = toStorageUrl(mainImage?.image_path);
    18	
    19	  return (
    20	    <div className="space-y-4">
    21	      {/* Main Image */}
    22	      <div className="relative rounded-3xl overflow-hidden bg-gray-100 h-[450px] group border border-gray-200 shadow-sm">
    23	        <img 
    24	          src={mainUrl} 
    25	          alt="Main" 
    26	          className="w-full h-full object-contain bg-black/5 cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
    27	          onClick={() => setFullscreen(true)}
    28	        />
    29	        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full pointer-events-none font-medium tracking-wide">
    30	          {mainIdx + 1} / {images.length}
    31	        </div>
    32	        {mainImage.type && (
    33	          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg shadow-sm pointer-events-none font-medium tracking-wide">
    34	            {mainImage.type}
    35	          </div>
    36	        )}
    37	        {isOwner && (
    38	          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-[-10px] group-hover:translate-y-0">
    39	            {mainIdx !== 0 && (
    40	              <button 
    41	                onClick={(e) => { e.stopPropagation(); onSetPrimary && onSetPrimary(mainImage.id); }}
    42	                className="bg-white/95 text-blue-600 text-xs px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-white hover:shadow-lg transition-all"
    43	              >
    44	                Set Primary
    45	              </button>
    46	            )}
    47	            <button 
    48	              onClick={(e) => { e.stopPropagation(); onDelete && onDelete(mainImage.id); }}
    49	              className="bg-white/95 text-red-600 text-xs px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-white hover:shadow-lg transition-all"
    50	            >
    51	              Delete
    52	            </button>
    53	          </div>
    54	        )}
    55	      </div>
    56	
    57	      {/* Thumbnails */}
    58	      {images.length > 1 && (
    59	        <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin px-1">
    60	          {images.map((img, idx) => (
    61	            <div 
    62	              key={img.id} 
    63	              onClick={() => setMainIdx(idx)}
    64	              className={`w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 shadow-sm ${idx === mainIdx ? 'border-blue-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
    65	            >
    66	              <img src={toStorageUrl(img.image_path)} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
    67	            </div>
    68	          ))}
    69	        </div>
    70	      )}
    71	
    72	      {/* Fullscreen Modal */}
    73	      {fullscreen && (
    74	        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col transition-opacity duration-300" onClick={() => setFullscreen(false)}>
    75	          <div className="p-6 flex justify-between items-center text-white" onClick={e => e.stopPropagation()}>
    76	            <span className="text-sm font-semibold tracking-wider bg-black/50 px-4 py-1.5 rounded-full">{mainIdx + 1} / {images.length}</span>
    77	            <button onClick={() => setFullscreen(false)} className="text-4xl leading-none hover:text-red-400 transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">&times;</button>
    78	          </div>
    79	          <div className="flex-1 flex items-center justify-center relative px-4 md:px-20 pb-8" onClick={e => e.stopPropagation()}>
    80	            {images.length > 1 && (
    81	              <button 
    82	                onClick={(e) => { e.stopPropagation(); setMainIdx(prev => prev > 0 ? prev - 1 : images.length - 1); }}
    83	                className="absolute left-4 md:left-8 text-white/50 hover:text-white text-6xl hover:scale-110 transition-all p-4 bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center leading-none z-10"
    84	              >
    85	                &#8249;
    86	              </button>
    87	            )}
    88	            <img src={mainUrl} alt="Fullscreen" className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg z-0" />
    89	            {images.length > 1 && (
    90	              <button 
    91	                onClick={(e) => { e.stopPropagation(); setMainIdx(prev => prev < images.length - 1 ? prev + 1 : 0); }}
    92	                className="absolute right-4 md:right-8 text-white/50 hover:text-white text-6xl hover:scale-110 transition-all p-4 bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center leading-none z-10"
    93	              >
    94	                &#8250;
    95	              </button>
    96	            )}
    97	          </div>
    98	        </div>
    99	      )}
   100	    </div>
   101	  );
   102	}
```

## Line-by-line explanation

- Line 1: import { useState } from 'react';
- Line 2: import { toStorageUrl } from '../utils/media';
- Line 3: 
- Line 4: export default function ImageGallery({ images = [], onDelete, onSetPrimary, isOwner }) {
- Line 5:   const [mainIdx, setMainIdx] = useState(0);
- Line 6:   const [fullscreen, setFullscreen] = useState(false);
- Line 7: 
- Line 8:   if (!images || images.length === 0) {
- Line 9:     return (
- Line 10:       <div className="rounded-3xl overflow-hidden bg-gray-50 h-96 flex items-center justify-center text-8xl text-gray-200 border border-gray-100 shadow-inner">
- Line 11:         🏠
- Line 12:       </div>
- Line 13:     );
- Line 14:   }
- Line 15: 
- Line 16:   const mainImage = images[mainIdx];
- Line 17:   const mainUrl = toStorageUrl(mainImage?.image_path);
- Line 18: 
- Line 19:   return (
- Line 20:     <div className="space-y-4">
- Line 21:       {/* Main Image */}
- Line 22:       <div className="relative rounded-3xl overflow-hidden bg-gray-100 h-[450px] group border border-gray-200 shadow-sm">
- Line 23:         <img 
- Line 24:           src={mainUrl} 
- Line 25:           alt="Main" 
- Line 26:           className="w-full h-full object-contain bg-black/5 cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
- Line 27:           onClick={() => setFullscreen(true)}
- Line 28:         />
- Line 29:         <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full pointer-events-none font-medium tracking-wide">
- Line 30:           {mainIdx + 1} / {images.length}
- Line 31:         </div>
- Line 32:         {mainImage.type && (
- Line 33:           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg shadow-sm pointer-events-none font-medium tracking-wide">
- Line 34:             {mainImage.type}
- Line 35:           </div>
- Line 36:         )}
- Line 37:         {isOwner && (
- Line 38:           <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-[-10px] group-hover:translate-y-0">
- Line 39:             {mainIdx !== 0 && (
- Line 40:               <button 
- Line 41:                 onClick={(e) => { e.stopPropagation(); onSetPrimary && onSetPrimary(mainImage.id); }}
- Line 42:                 className="bg-white/95 text-blue-600 text-xs px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-white hover:shadow-lg transition-all"
- Line 43:               >
- Line 44:                 Set Primary
- Line 45:               </button>
- Line 46:             )}
- Line 47:             <button 
- Line 48:               onClick={(e) => { e.stopPropagation(); onDelete && onDelete(mainImage.id); }}
- Line 49:               className="bg-white/95 text-red-600 text-xs px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-white hover:shadow-lg transition-all"
- Line 50:             >
- Line 51:               Delete
- Line 52:             </button>
- Line 53:           </div>
- Line 54:         )}
- Line 55:       </div>
- Line 56: 
- Line 57:       {/* Thumbnails */}
- Line 58:       {images.length > 1 && (
- Line 59:         <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin px-1">
- Line 60:           {images.map((img, idx) => (
- Line 61:             <div 
- Line 62:               key={img.id} 
- Line 63:               onClick={() => setMainIdx(idx)}
- Line 64:               className={`w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 shadow-sm ${idx === mainIdx ? 'border-blue-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
- Line 65:             >
- Line 66:               <img src={toStorageUrl(img.image_path)} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
- Line 67:             </div>
- Line 68:           ))}
- Line 69:         </div>
- Line 70:       )}
- Line 71: 
- Line 72:       {/* Fullscreen Modal */}
- Line 73:       {fullscreen && (
- Line 74:         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col transition-opacity duration-300" onClick={() => setFullscreen(false)}>
- Line 75:           <div className="p-6 flex justify-between items-center text-white" onClick={e => e.stopPropagation()}>
- Line 76:             <span className="text-sm font-semibold tracking-wider bg-black/50 px-4 py-1.5 rounded-full">{mainIdx + 1} / {images.length}</span>
- Line 77:             <button onClick={() => setFullscreen(false)} className="text-4xl leading-none hover:text-red-400 transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">&times;</button>
- Line 78:           </div>
- Line 79:           <div className="flex-1 flex items-center justify-center relative px-4 md:px-20 pb-8" onClick={e => e.stopPropagation()}>
- Line 80:             {images.length > 1 && (
- Line 81:               <button 
- Line 82:                 onClick={(e) => { e.stopPropagation(); setMainIdx(prev => prev > 0 ? prev - 1 : images.length - 1); }}
- Line 83:                 className="absolute left-4 md:left-8 text-white/50 hover:text-white text-6xl hover:scale-110 transition-all p-4 bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center leading-none z-10"
- Line 84:               >
- Line 85:                 &#8249;
- Line 86:               </button>
- Line 87:             )}
- Line 88:             <img src={mainUrl} alt="Fullscreen" className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg z-0" />
- Line 89:             {images.length > 1 && (
- Line 90:               <button 
- Line 91:                 onClick={(e) => { e.stopPropagation(); setMainIdx(prev => prev < images.length - 1 ? prev + 1 : 0); }}
- Line 92:                 className="absolute right-4 md:right-8 text-white/50 hover:text-white text-6xl hover:scale-110 transition-all p-4 bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center leading-none z-10"
- Line 93:               >
- Line 94:                 &#8250;
- Line 95:               </button>
- Line 96:             )}
- Line 97:           </div>
- Line 98:         </div>
- Line 99:       )}
- Line 100:     </div>
- Line 101:   );
- Line 102: }

