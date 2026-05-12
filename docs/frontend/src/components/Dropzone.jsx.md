# Dropzone.jsx

## Code (numbered)

```jsx
     1	import { useState, useRef } from 'react';
     2	
     3	export default function Dropzone({ onDrop, accept, multiple, children, className = '' }) {
     4	  const [isDragActive, setIsDragActive] = useState(false);
     5	  const inputRef = useRef(null);
     6	
     7	  const handleDrag = (e) => {
     8	    e.preventDefault();
     9	    e.stopPropagation();
    10	  };
    11	
    12	  const handleDragIn = (e) => {
    13	    e.preventDefault();
    14	    e.stopPropagation();
    15	    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
    16	      setIsDragActive(true);
    17	    }
    18	  };
    19	
    20	  const handleDragOut = (e) => {
    21	    e.preventDefault();
    22	    e.stopPropagation();
    23	    setIsDragActive(false);
    24	  };
    25	
    26	  const handleDrop = (e) => {
    27	    e.preventDefault();
    28	    e.stopPropagation();
    29	    setIsDragActive(false);
    30	    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    31	      onDrop(multiple ? Array.from(e.dataTransfer.files) : e.dataTransfer.files[0]);
    32	      e.dataTransfer.clearData();
    33	    }
    34	  };
    35	
    36	  const handleChange = (e) => {
    37	    if (e.target.files && e.target.files.length > 0) {
    38	      onDrop(multiple ? Array.from(e.target.files) : e.target.files[0]);
    39	    }
    40	  };
    41	
    42	  return (
    43	    <div
    44	      className={`relative ${className}`}
    45	      onDragEnter={handleDragIn}
    46	      onDragLeave={handleDragOut}
    47	      onDragOver={handleDrag}
    48	      onDrop={handleDrop}
    49	      onClick={() => inputRef.current?.click()}
    50	    >
    51	      <input
    52	        type="file"
    53	        ref={inputRef}
    54	        onChange={handleChange}
    55	        accept={accept}
    56	        multiple={multiple}
    57	        className="hidden"
    58	      />
    59	      {typeof children === 'function' ? children({ isDragActive }) : children}
    60	    </div>
    61	  );
    62	}
```

## Line-by-line explanation

- Line 1: import { useState, useRef } from 'react';
- Line 2: 
- Line 3: export default function Dropzone({ onDrop, accept, multiple, children, className = '' }) {
- Line 4:   const [isDragActive, setIsDragActive] = useState(false);
- Line 5:   const inputRef = useRef(null);
- Line 6: 
- Line 7:   const handleDrag = (e) => {
- Line 8:     e.preventDefault();
- Line 9:     e.stopPropagation();
- Line 10:   };
- Line 11: 
- Line 12:   const handleDragIn = (e) => {
- Line 13:     e.preventDefault();
- Line 14:     e.stopPropagation();
- Line 15:     if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
- Line 16:       setIsDragActive(true);
- Line 17:     }
- Line 18:   };
- Line 19: 
- Line 20:   const handleDragOut = (e) => {
- Line 21:     e.preventDefault();
- Line 22:     e.stopPropagation();
- Line 23:     setIsDragActive(false);
- Line 24:   };
- Line 25: 
- Line 26:   const handleDrop = (e) => {
- Line 27:     e.preventDefault();
- Line 28:     e.stopPropagation();
- Line 29:     setIsDragActive(false);
- Line 30:     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
- Line 31:       onDrop(multiple ? Array.from(e.dataTransfer.files) : e.dataTransfer.files[0]);
- Line 32:       e.dataTransfer.clearData();
- Line 33:     }
- Line 34:   };
- Line 35: 
- Line 36:   const handleChange = (e) => {
- Line 37:     if (e.target.files && e.target.files.length > 0) {
- Line 38:       onDrop(multiple ? Array.from(e.target.files) : e.target.files[0]);
- Line 39:     }
- Line 40:   };
- Line 41: 
- Line 42:   return (
- Line 43:     <div
- Line 44:       className={`relative ${className}`}
- Line 45:       onDragEnter={handleDragIn}
- Line 46:       onDragLeave={handleDragOut}
- Line 47:       onDragOver={handleDrag}
- Line 48:       onDrop={handleDrop}
- Line 49:       onClick={() => inputRef.current?.click()}
- Line 50:     >
- Line 51:       <input
- Line 52:         type="file"
- Line 53:         ref={inputRef}
- Line 54:         onChange={handleChange}
- Line 55:         accept={accept}
- Line 56:         multiple={multiple}
- Line 57:         className="hidden"
- Line 58:       />
- Line 59:       {typeof children === 'function' ? children({ isDragActive }) : children}
- Line 60:     </div>
- Line 61:   );
- Line 62: }

