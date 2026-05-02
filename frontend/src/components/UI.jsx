// ─── Spinner ────────────────────────────────────────────────────────────────
export function Spinner({ size = 8 }) {
  return (
    <div className={`animate-spin rounded-full h-${size} w-${size} border-4 border-blue-600 border-t-transparent`} />
  );
}

// ─── Alert ──────────────────────────────────────────────────────────────────
export function Alert({ type = 'error', message }) {
  if (!message) return null;
  const styles = {
    error:   'bg-red-50 border-red-400 text-red-800',
    success: 'bg-green-50 border-green-400 text-green-800',
    info:    'bg-blue-50 border-blue-400 text-blue-800',
  };
  return (
    <div className={`border rounded-lg px-4 py-3 text-sm ${styles[type]}`}>
      {message}
    </div>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────
export function Badge({ label, color = 'gray' }) {
  const colors = {
    green:  'bg-green-100 text-green-800',
    red:    'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    blue:   'bg-blue-100 text-blue-800',
    gray:   'bg-gray-100 text-gray-700',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
      {label}
    </span>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────
export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 ${className}`}>
      {children}
    </div>
  );
}

// ─── Button ──────────────────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', disabled, loading, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:   'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    danger:    'bg-red-600 text-white hover:bg-red-700',
    success:   'bg-green-600 text-white hover:bg-green-700',
    outline:   'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} disabled={disabled || loading} {...props}>
      {loading && <Spinner size={4} />}
      {children}
    </button>
  );
}

// ─── Input ───────────────────────────────────────────────────────────────────
export function Input({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-400' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

// ─── Select ──────────────────────────────────────────────────────────────────
export function Select({ label, error, children, className = '', ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={`w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-400' : ''} ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────
export function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
export function StarRating({ value = 0, max = 5 }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
    </span>
  );
}

// ─── Pagination ──────────────────────────────────────────────────────────────
export function Pagination({ meta, onPage }) {
  if (!meta || meta.last_page <= 1) return null;
  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      <Button variant="outline" disabled={meta.current_page === 1} onClick={() => onPage(meta.current_page - 1)}>
        ← Prev
      </Button>
      <span className="text-sm text-gray-600">Page {meta.current_page} / {meta.last_page}</span>
      <Button variant="outline" disabled={meta.current_page === meta.last_page} onClick={() => onPage(meta.current_page + 1)}>
        Next →
      </Button>
    </div>
  );
}

export { default as ImageUploader } from './ImageUploader';
export { default as ImageGallery } from './ImageGallery';
export { default as UserAvatar } from './UserAvatar';
export { default as Dropzone } from './Dropzone';
