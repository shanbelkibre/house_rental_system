# UI.jsx

## Code (numbered)

```jsx
     1	// ─── Spinner ────────────────────────────────────────────────────────────────
     2	export function Spinner({ size = 8 }) {
     3	  return (
     4	    <div className={`animate-spin rounded-full h-${size} w-${size} border-4 border-blue-600 border-t-transparent`} />
     5	  );
     6	}
     7	
     8	// ─── Alert ──────────────────────────────────────────────────────────────────
     9	export function Alert({ type = 'error', message }) {
    10	  if (!message) return null;
    11	  const styles = {
    12	    error:   'bg-red-50 border-red-400 text-red-800',
    13	    success: 'bg-green-50 border-green-400 text-green-800',
    14	    info:    'bg-blue-50 border-blue-400 text-blue-800',
    15	  };
    16	  return (
    17	    <div className={`border rounded-lg px-4 py-3 text-sm ${styles[type]}`}>
    18	      {message}
    19	    </div>
    20	  );
    21	}
    22	
    23	// ─── Badge ───────────────────────────────────────────────────────────────────
    24	export function Badge({ label, color = 'gray' }) {
    25	  const colors = {
    26	    green:  'bg-green-100 text-green-800',
    27	    red:    'bg-red-100 text-red-800',
    28	    yellow: 'bg-yellow-100 text-yellow-800',
    29	    blue:   'bg-blue-100 text-blue-800',
    30	    gray:   'bg-gray-100 text-gray-700',
    31	  };
    32	  return (
    33	    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
    34	      {label}
    35	    </span>
    36	  );
    37	}
    38	
    39	// ─── Card ────────────────────────────────────────────────────────────────────
    40	export function Card({ children, className = '' }) {
    41	  return (
    42	    <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 p-6 transition-colors duration-300 ${className}`}>
    43	      {children}
    44	    </div>
    45	  );
    46	}
    47	
    48	// ─── Button ──────────────────────────────────────────────────────────────────
    49	export function Button({ children, variant = 'primary', disabled, loading, className = '', ...props }) {
    50	  const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed';
    51	  const variants = {
    52	    primary:   'bg-blue-600 text-white hover:bg-blue-700',
    53	    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    54	    danger:    'bg-red-600 text-white hover:bg-red-700',
    55	    success:   'bg-green-600 text-white hover:bg-green-700',
    56	    outline:   'border border-gray-300 text-gray-700 hover:bg-gray-50',
    57	  };
    58	  return (
    59	    <button className={`${base} ${variants[variant]} ${className}`} disabled={disabled || loading} {...props}>
    60	      {loading && <Spinner size={4} />}
    61	      {children}
    62	    </button>
    63	  );
    64	}
    65	
    66	// ─── Input ───────────────────────────────────────────────────────────────────
    67	export function Input({ label, error, className = '', ...props }) {
    68	  return (
    69	    <div className="space-y-1">
    70	      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
    71	      <input
    72	        className={`w-full bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${error ? 'border-red-400 dark:border-red-500' : ''} ${className}`}
    73	        {...props}
    74	      />
    75	      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    76	    </div>
    77	  );
    78	}
    79	
    80	// ─── Select ──────────────────────────────────────────────────────────────────
    81	export function Select({ label, error, children, className = '', ...props }) {
    82	  return (
    83	    <div className="space-y-1">
    84	      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
    85	      <select
    86	        className={`w-full bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${error ? 'border-red-400 dark:border-red-500' : ''} ${className}`}
    87	        {...props}
    88	      >
    89	        {children}
    90	      </select>
    91	      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    92	    </div>
    93	  );
    94	}
    95	
    96	// ─── Modal ───────────────────────────────────────────────────────────────────
    97	export function Modal({ open, onClose, title, children }) {
    98	  if (!open) return null;
    99	  return (
   100	    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
   101	      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
   102	        <div className="flex items-center justify-between px-6 py-4 border-b">
   103	          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
   104	          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
   105	        </div>
   106	        <div className="px-6 py-4">{children}</div>
   107	      </div>
   108	    </div>
   109	  );
   110	}
   111	
   112	// ─── Star Rating ─────────────────────────────────────────────────────────────
   113	export function StarRating({ value = 0, max = 5 }) {
   114	  return (
   115	    <span className="flex gap-0.5">
   116	      {Array.from({ length: max }).map((_, i) => (
   117	        <span key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'}>★</span>
   118	      ))}
   119	    </span>
   120	  );
   121	}
   122	
   123	// ─── Pagination ──────────────────────────────────────────────────────────────
   124	export function Pagination({ meta, onPage }) {
   125	  if (!meta || meta.last_page <= 1) return null;
   126	  return (
   127	    <div className="flex items-center gap-2 justify-center mt-6">
   128	      <Button variant="outline" disabled={meta.current_page === 1} onClick={() => onPage(meta.current_page - 1)}>
   129	        ← Prev
   130	      </Button>
   131	      <span className="text-sm text-gray-600">Page {meta.current_page} / {meta.last_page}</span>
   132	      <Button variant="outline" disabled={meta.current_page === meta.last_page} onClick={() => onPage(meta.current_page + 1)}>
   133	        Next →
   134	      </Button>
   135	    </div>
   136	  );
   137	}
   138	
   139	export { default as ImageUploader } from './ImageUploader';
   140	export { default as ImageGallery } from './ImageGallery';
   141	export { default as UserAvatar } from './UserAvatar';
   142	export { default as Dropzone } from './Dropzone';
```

## Line-by-line explanation

- Line 1: // ─── Spinner ────────────────────────────────────────────────────────────────
- Line 2: export function Spinner({ size = 8 }) {
- Line 3:   return (
- Line 4:     <div className={`animate-spin rounded-full h-${size} w-${size} border-4 border-blue-600 border-t-transparent`} />
- Line 5:   );
- Line 6: }
- Line 7: 
- Line 8: // ─── Alert ──────────────────────────────────────────────────────────────────
- Line 9: export function Alert({ type = 'error', message }) {
- Line 10:   if (!message) return null;
- Line 11:   const styles = {
- Line 12:     error:   'bg-red-50 border-red-400 text-red-800',
- Line 13:     success: 'bg-green-50 border-green-400 text-green-800',
- Line 14:     info:    'bg-blue-50 border-blue-400 text-blue-800',
- Line 15:   };
- Line 16:   return (
- Line 17:     <div className={`border rounded-lg px-4 py-3 text-sm ${styles[type]}`}>
- Line 18:       {message}
- Line 19:     </div>
- Line 20:   );
- Line 21: }
- Line 22: 
- Line 23: // ─── Badge ───────────────────────────────────────────────────────────────────
- Line 24: export function Badge({ label, color = 'gray' }) {
- Line 25:   const colors = {
- Line 26:     green:  'bg-green-100 text-green-800',
- Line 27:     red:    'bg-red-100 text-red-800',
- Line 28:     yellow: 'bg-yellow-100 text-yellow-800',
- Line 29:     blue:   'bg-blue-100 text-blue-800',
- Line 30:     gray:   'bg-gray-100 text-gray-700',
- Line 31:   };
- Line 32:   return (
- Line 33:     <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
- Line 34:       {label}
- Line 35:     </span>
- Line 36:   );
- Line 37: }
- Line 38: 
- Line 39: // ─── Card ────────────────────────────────────────────────────────────────────
- Line 40: export function Card({ children, className = '' }) {
- Line 41:   return (
- Line 42:     <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 p-6 transition-colors duration-300 ${className}`}>
- Line 43:       {children}
- Line 44:     </div>
- Line 45:   );
- Line 46: }
- Line 47: 
- Line 48: // ─── Button ──────────────────────────────────────────────────────────────────
- Line 49: export function Button({ children, variant = 'primary', disabled, loading, className = '', ...props }) {
- Line 50:   const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed';
- Line 51:   const variants = {
- Line 52:     primary:   'bg-blue-600 text-white hover:bg-blue-700',
- Line 53:     secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
- Line 54:     danger:    'bg-red-600 text-white hover:bg-red-700',
- Line 55:     success:   'bg-green-600 text-white hover:bg-green-700',
- Line 56:     outline:   'border border-gray-300 text-gray-700 hover:bg-gray-50',
- Line 57:   };
- Line 58:   return (
- Line 59:     <button className={`${base} ${variants[variant]} ${className}`} disabled={disabled || loading} {...props}>
- Line 60:       {loading && <Spinner size={4} />}
- Line 61:       {children}
- Line 62:     </button>
- Line 63:   );
- Line 64: }
- Line 65: 
- Line 66: // ─── Input ───────────────────────────────────────────────────────────────────
- Line 67: export function Input({ label, error, className = '', ...props }) {
- Line 68:   return (
- Line 69:     <div className="space-y-1">
- Line 70:       {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
- Line 71:       <input
- Line 72:         className={`w-full bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${error ? 'border-red-400 dark:border-red-500' : ''} ${className}`}
- Line 73:         {...props}
- Line 74:       />
- Line 75:       {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
- Line 76:     </div>
- Line 77:   );
- Line 78: }
- Line 79: 
- Line 80: // ─── Select ──────────────────────────────────────────────────────────────────
- Line 81: export function Select({ label, error, children, className = '', ...props }) {
- Line 82:   return (
- Line 83:     <div className="space-y-1">
- Line 84:       {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
- Line 85:       <select
- Line 86:         className={`w-full bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${error ? 'border-red-400 dark:border-red-500' : ''} ${className}`}
- Line 87:         {...props}
- Line 88:       >
- Line 89:         {children}
- Line 90:       </select>
- Line 91:       {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
- Line 92:     </div>
- Line 93:   );
- Line 94: }
- Line 95: 
- Line 96: // ─── Modal ───────────────────────────────────────────────────────────────────
- Line 97: export function Modal({ open, onClose, title, children }) {
- Line 98:   if (!open) return null;
- Line 99:   return (
- Line 100:     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
- Line 101:       <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
- Line 102:         <div className="flex items-center justify-between px-6 py-4 border-b">
- Line 103:           <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
- Line 104:           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
- Line 105:         </div>
- Line 106:         <div className="px-6 py-4">{children}</div>
- Line 107:       </div>
- Line 108:     </div>
- Line 109:   );
- Line 110: }
- Line 111: 
- Line 112: // ─── Star Rating ─────────────────────────────────────────────────────────────
- Line 113: export function StarRating({ value = 0, max = 5 }) {
- Line 114:   return (
- Line 115:     <span className="flex gap-0.5">
- Line 116:       {Array.from({ length: max }).map((_, i) => (
- Line 117:         <span key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'}>★</span>
- Line 118:       ))}
- Line 119:     </span>
- Line 120:   );
- Line 121: }
- Line 122: 
- Line 123: // ─── Pagination ──────────────────────────────────────────────────────────────
- Line 124: export function Pagination({ meta, onPage }) {
- Line 125:   if (!meta || meta.last_page <= 1) return null;
- Line 126:   return (
- Line 127:     <div className="flex items-center gap-2 justify-center mt-6">
- Line 128:       <Button variant="outline" disabled={meta.current_page === 1} onClick={() => onPage(meta.current_page - 1)}>
- Line 129:         ← Prev
- Line 130:       </Button>
- Line 131:       <span className="text-sm text-gray-600">Page {meta.current_page} / {meta.last_page}</span>
- Line 132:       <Button variant="outline" disabled={meta.current_page === meta.last_page} onClick={() => onPage(meta.current_page + 1)}>
- Line 133:         Next →
- Line 134:       </Button>
- Line 135:     </div>
- Line 136:   );
- Line 137: }
- Line 138: 
- Line 139: export { default as ImageUploader } from './ImageUploader';
- Line 140: export { default as ImageGallery } from './ImageGallery';
- Line 141: export { default as UserAvatar } from './UserAvatar';
- Line 142: export { default as Dropzone } from './Dropzone';

