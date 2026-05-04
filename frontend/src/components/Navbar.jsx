import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import UserAvatar from './UserAvatar';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <nav className="bg-white/80 dark:bg-black/40 backdrop-blur-md px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between text-gray-900 dark:text-white shadow-sm border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        {/* Left Side: Mobile Hamburger & Logo */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-gray-900 dark:text-white text-2xl hover:text-blue-600 dark:hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
          
          <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
            🏠 HouseRental
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-900 dark:text-white font-medium">
          <Link to="/" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Home</Link>
          {!user && (
            <>
              <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">About</Link>
              <Link to="/services" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Services</Link>
            </>
          )}
          <Link to="/houses" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Browse Houses</Link>
          <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Contact</Link>
          {!user && (
            <Link to="/faq" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">FAQ</Link>
          )}

          {user ? (
            <>
              {user.role === 'owner' && (
                <>
                  <Link to="/my-houses" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">My Houses</Link>
                  <Link to="/owner-requests" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Requests</Link>
                  <Link to="/subscription" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Subscription</Link>
                </>
              )}
              {user.role === 'renter' && (
                <>
                  <Link to="/my-requests" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">My Requests</Link>
                  <Link to="/my-visits" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">My Visits</Link>
                  <Link to="/my-agreements" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Agreements</Link>
                </>
              )}
              {user.role === 'admin' && (
                <Link to="/admin" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">Admin Panel</Link>
              )}
              <Link to="/notifications" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200">🔔 Alerts</Link>
              <div className="ml-2 flex items-center gap-2">
                <UserAvatar user={user} size="sm" showDropdown={true} onLogout={handleLogout} />
                <button 
                  onClick={toggleTheme} 
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg"
                  title="Toggle Theme"
                >
                  {isDark ? '☀️' : '🌙'}
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200 ml-2">Login</Link>
              <Link
                to="/register"
                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
              >
                Register
              </Link>
              <button 
                onClick={toggleTheme} 
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg ml-2"
                title="Toggle Theme"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          )}
        </div>

        {/* Mobile right side - just the theme toggle (desktop toggle is already in the lg flex container) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-lg"
            title="Toggle Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl p-4 space-y-1 text-sm font-medium text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-white/10 max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Home</Link>
          {!user && (
            <>
              <Link to="/about" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/services" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Services</Link>
            </>
          )}
          <Link to="/houses" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Browse Houses</Link>
          <Link to="/contact" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          {!user && (
            <Link to="/faq" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>FAQ</Link>
          )}
          {user ? (
            <>
              <Link to="/notifications" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>🔔 Notifications</Link>
              <Link to="/profile" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Profile</Link>
              {user.role === 'owner' && <>
                <Link to="/my-houses" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>My Houses</Link>
                <Link to="/owner-requests" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Requests</Link>
                <Link to="/subscription" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Subscription</Link>
              </>}
              {user.role === 'renter' && <>
                <Link to="/my-requests" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>My Requests</Link>
                <Link to="/my-visits" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>My Visits</Link>
                <Link to="/my-agreements" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Agreements</Link>
              </>}
              {user.role === 'admin' && <Link to="/admin" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Admin Panel</Link>}
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block w-full text-left py-2 px-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-white/10 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="block py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
