# ImageUploader.jsx

## Code (numbered)

```jsx
     1	import { useState } from 'react';
     2	import { Dropzone } from './UI';
     3	
     4	export default function ImageUploader({ images, setImages, max = 10 }) {
     5	  const [draggedIdx, setDraggedIdx] = useState(null);
     6	
     7	  const imageTypes = [
     8	    'Front View', 'Back View', 'Left Side', 'Right Side', 'House License/Carta', 'Other'
     9	  ];
    10	
    11	  const handleDropFiles = (files) => {
    12	    const fileArray = Array.isArray(files) ? files : [files];
    13	    const newImages = fileArray.map(file => ({
    14	      file,
    15	      preview: URL.createObjectURL(file),
    16	      type: 'Other',
    17	    }));
    18	    setImages(prev => [...prev, ...newImages].slice(0, max));
    19	  };
    20	
    21	  const handleRemove = (idx) => {
    22	    setImages(prev => {
    23	      const updated = [...prev];
    24	      URL.revokeObjectURL(updated[idx].preview);
    25	      updated.splice(idx, 1);
    26	      return updated;
    27	    });
    28	  };
    29	
    30	  const handleTypeChange = (idx, type) => {
    31	    setImages(prev => {
    32	      const updated = [...prev];
    33	      updated[idx].type = type;
    34	      return updated;
    35	    });
    36	  };
    37	
    38	  const handleDragStart = (idx) => setDraggedIdx(idx);
    39	  
    40	  const handleDragOver = (e, idx) => {
    41	    e.preventDefault();
    42	    if (draggedIdx === null || draggedIdx === idx) return;
    43	    
    44	    setImages(prev => {
    45	      const updated = [...prev];
    46	      const draggedItem = updated[draggedIdx];
    47	      updated.splice(draggedIdx, 1);
    48	      updated.splice(idx, 0, draggedItem);
    49	      return updated;
    50	    });
    51	    setDraggedIdx(idx);
    52	  };
    53	  
    54	  const handleDragEnd = () => setDraggedIdx(null);
    55	
    56	  return (
    57	    <div className="space-y-4">
    58	      <Dropzone onDrop={handleDropFiles} accept="image/*" multiple={true} className="w-full">
    59	        {({ isDragActive }) => (
    60	          <div className={`text-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
    61	            <span className="text-5xl mb-3 block">📸</span>
    62	            <p className="text-base font-medium text-gray-700">
    63	              {isDragActive ? "Drop images here" : "Drag & drop images here, or click to select"}
    64	            </p>
    65	            <p className="text-sm text-gray-500 mt-1">Up to {max} images supported</p>
    66	          </div>
    67	        )}
    68	      </Dropzone>
    69	
    70	      {images.length > 0 && (
    71	        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    72	          {images.map((img, idx) => (
    73	            <div 
    74	              key={idx} 
    75	              draggable 
    76	              onDragStart={() => handleDragStart(idx)}
    77	              onDragOver={(e) => handleDragOver(e, idx)}
    78	              onDragEnd={handleDragEnd}
    79	              className={`bg-white rounded-xl shadow-sm border overflow-hidden cursor-move transition-all ${draggedIdx === idx ? 'opacity-50 border-blue-500 shadow-md' : 'border-gray-200'}`}
    80	            >
    81	              <div className="h-28 bg-gray-100 relative group">
    82	                <img src={img.preview} alt="" className="w-full h-full object-cover" />
    83	                <button 
    84	                  type="button"
    85	                  onClick={(e) => { e.stopPropagation(); handleRemove(idx); }}
    86	                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
    87	                >
    88	                  &times;
    89	                </button>
    90	              </div>
    91	              <div className="p-2 border-t border-gray-100">
    92	                <select 
    93	                  value={img.type} 
    94	                  onChange={(e) => handleTypeChange(idx, e.target.value)}
    95	                  className="w-full text-xs font-medium text-gray-700 border-0 bg-gray-50 rounded py-1.5 px-2 focus:ring-1 focus:ring-blue-500 focus:bg-white cursor-pointer"
    96	                >
    97	                  {imageTypes.map(t => <option key={t} value={t}>{t}</option>)}
    98	                </select>
    99	              </div>
   100	            </div>
   101	          ))}
   102	        </div>
   103	      )}
   104	    </div>
   105	  );
   106	}
```

## Line-by-line explanation

- Line 1: import { useState } from 'react';
- Line 2: import { Dropzone } from './UI';
- Line 3: 
- Line 4: export default function ImageUploader({ images, setImages, max = 10 }) {
- Line 5:   const [draggedIdx, setDraggedIdx] = useState(null);
- Line 6: 
- Line 7:   const imageTypes = [
- Line 8:     'Front View', 'Back View', 'Left Side', 'Right Side', 'House License/Carta', 'Other'
- Line 9:   ];
- Line 10: 
- Line 11:   const handleDropFiles = (files) => {
- Line 12:     const fileArray = Array.isArray(files) ? files : [files];
- Line 13:     const newImages = fileArray.map(file => ({
- Line 14:       file,
- Line 15:       preview: URL.createObjectURL(file),
- Line 16:       type: 'Other',
- Line 17:     }));
- Line 18:     setImages(prev => [...prev, ...newImages].slice(0, max));
- Line 19:   };
- Line 20: 
- Line 21:   const handleRemove = (idx) => {
- Line 22:     setImages(prev => {
- Line 23:       const updated = [...prev];
- Line 24:       URL.revokeObjectURL(updated[idx].preview);
- Line 25:       updated.splice(idx, 1);
- Line 26:       return updated;
- Line 27:     });
- Line 28:   };
- Line 29: 
- Line 30:   const handleTypeChange = (idx, type) => {
- Line 31:     setImages(prev => {
- Line 32:       const updated = [...prev];
- Line 33:       updated[idx].type = type;
- Line 34:       return updated;
- Line 35:     });
- Line 36:   };
- Line 37: 
- Line 38:   const handleDragStart = (idx) => setDraggedIdx(idx);
- Line 39:   
- Line 40:   const handleDragOver = (e, idx) => {
- Line 41:     e.preventDefault();
- Line 42:     if (draggedIdx === null || draggedIdx === idx) return;
- Line 43:     
- Line 44:     setImages(prev => {
- Line 45:       const updated = [...prev];
- Line 46:       const draggedItem = updated[draggedIdx];
- Line 47:       updated.splice(draggedIdx, 1);
- Line 48:       updated.splice(idx, 0, draggedItem);
- Line 49:       return updated;
- Line 50:     });
- Line 51:     setDraggedIdx(idx);
- Line 52:   };
- Line 53:   
- Line 54:   const handleDragEnd = () => setDraggedIdx(null);
- Line 55: 
- Line 56:   return (
- Line 57:     <div className="space-y-4">
- Line 58:       <Dropzone onDrop={handleDropFiles} accept="image/*" multiple={true} className="w-full">
- Line 59:         {({ isDragActive }) => (
- Line 60:           <div className={`text-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
- Line 61:             <span className="text-5xl mb-3 block">📸</span>
- Line 62:             <p className="text-base font-medium text-gray-700">
- Line 63:               {isDragActive ? "Drop images here" : "Drag & drop images here, or click to select"}
- Line 64:             </p>
- Line 65:             <p className="text-sm text-gray-500 mt-1">Up to {max} images supported</p>
- Line 66:           </div>
- Line 67:         )}
- Line 68:       </Dropzone>
- Line 69: 
- Line 70:       {images.length > 0 && (
- Line 71:         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
- Line 72:           {images.map((img, idx) => (
- Line 73:             <div 
- Line 74:               key={idx} 
- Line 75:               draggable 
- Line 76:               onDragStart={() => handleDragStart(idx)}
- Line 77:               onDragOver={(e) => handleDragOver(e, idx)}
- Line 78:               onDragEnd={handleDragEnd}
- Line 79:               className={`bg-white rounded-xl shadow-sm border overflow-hidden cursor-move transition-all ${draggedIdx === idx ? 'opacity-50 border-blue-500 shadow-md' : 'border-gray-200'}`}
- Line 80:             >
- Line 81:               <div className="h-28 bg-gray-100 relative group">
- Line 82:                 <img src={img.preview} alt="" className="w-full h-full object-cover" />
- Line 83:                 <button 
- Line 84:                   type="button"
- Line 85:                   onClick={(e) => { e.stopPropagation(); handleRemove(idx); }}
- Line 86:                   className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
- Line 87:                 >
- Line 88:                   &times;
- Line 89:                 </button>
- Line 90:               </div>
- Line 91:               <div className="p-2 border-t border-gray-100">
- Line 92:                 <select 
- Line 93:                   value={img.type} 
- Line 94:                   onChange={(e) => handleTypeChange(idx, e.target.value)}
- Line 95:                   className="w-full text-xs font-medium text-gray-700 border-0 bg-gray-50 rounded py-1.5 px-2 focus:ring-1 focus:ring-blue-500 focus:bg-white cursor-pointer"
- Line 96:                 >
- Line 97:                   {imageTypes.map(t => <option key={t} value={t}>{t}</option>)}
- Line 98:                 </select>
- Line 99:               </div>
- Line 100:             </div>
- Line 101:           ))}
- Line 102:         </div>
- Line 103:       )}
- Line 104:     </div>
- Line 105:   );
- Line 106: }

