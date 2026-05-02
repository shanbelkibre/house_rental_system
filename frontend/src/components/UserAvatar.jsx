import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toStorageUrl } from '../utils/media';

export default function UserAvatar({ user, size = 'md', showDropdown = false, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  
  const sizes = {
    sm: 'w-8 h-8 text-sm border-2',
    md: 'w-12 h-12 text-base border-2',
    lg: 'w-20 h-20 text-2xl border-4',
    xl: 'w-32 h-32 text-4xl border-4',
  };

  const currentSize = sizes[size] || sizes.md;
  const imgUrl = toStorageUrl(user?.profile_image);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const avatar = (
    <div 
      className={`${currentSize} rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer border-white shadow-sm transition-transform hover:scale-105`}
      onClick={() => showDropdown && setOpen(!open)}
    >
      {imgUrl ? (
        <img src={imgUrl} alt={user?.name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-400">👤</span>
      )}
    </div>
  );

  if (!showDropdown) return avatar;

  return (
    <div className="relative" ref={ref}>
      {avatar}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 transform origin-top-right transition-all">
          <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/50">
            <p className="text-sm font-bold text-gray-800 truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
          </div>
          <div className="py-1">
            <Link to="/profile" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setOpen(false)}>
              My Profile
            </Link>
          </div>
          <div className="border-t border-gray-50 py-1">
            <button 
              onClick={() => { setOpen(false); onLogout && onLogout(); }}
              className="w-full text-left px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
