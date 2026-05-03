import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import UserAvatar from './UserAvatar';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between text-white shadow-sm">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white flex items-center">
          🏠 HouseRental
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 text-sm text-white font-medium">
          <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition-colors">About</Link>
          <Link to="/services" className="hover:text-gray-200 transition-colors">Services</Link>
          <Link to="/houses" className="hover:text-gray-200 transition-colors">Browse Houses</Link>
          <Link to="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
          <Link to="/faq" className="hover:text-gray-200 transition-colors">FAQ</Link>

          {user ? (
            <>
              {user.role === 'owner' && (
                <>
                  <Link to="/my-houses" className="hover:text-gray-200 transition-colors">My Houses</Link>
                  <Link to="/owner-requests" className="hover:text-gray-200 transition-colors">Requests</Link>
                  <Link to="/subscription" className="hover:text-gray-200 transition-colors">Subscription</Link>
                </>
              )}
              {user.role === 'renter' && (
                <>
                  <Link to="/my-requests" className="hover:text-gray-200 transition-colors">My Requests</Link>
                  <Link to="/my-visits" className="hover:text-gray-200 transition-colors">My Visits</Link>
                  <Link to="/my-agreements" className="hover:text-gray-200 transition-colors">Agreements</Link>
                </>
              )}
              {user.role === 'admin' && (
                <Link to="/admin" className="hover:text-gray-200 transition-colors">Admin Panel</Link>
              )}
              <Link to="/notifications" className="hover:text-gray-200 transition-colors">🔔 Alerts</Link>
              <div className="ml-2">
                <UserAvatar user={user} size="sm" showDropdown={true} onLogout={handleLogout} />
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200 transition-colors ml-4">Login</Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-gray-50 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 liquid-glass rounded-xl p-4 space-y-1 text-sm font-medium text-white shadow-lg max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/houses" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Browse Houses</Link>
          <Link to="/contact" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/faq" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>FAQ</Link>
          {user ? (
            <>
              <Link to="/notifications" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>🔔 Notifications</Link>
              <Link to="/profile" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Profile</Link>
              {user.role === 'owner' && <>
                <Link to="/my-houses" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>My Houses</Link>
                <Link to="/owner-requests" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Requests</Link>
                <Link to="/subscription" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Subscription</Link>
              </>}
              {user.role === 'renter' && <>
                <Link to="/my-requests" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>My Requests</Link>
                <Link to="/my-visits" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>My Visits</Link>
                <Link to="/my-agreements" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Agreements</Link>
              </>}
              {user.role === 'admin' && <Link to="/admin" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Admin Panel</Link>}
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block w-full text-left py-2 px-2 text-red-300 hover:bg-white/10 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="block py-2 bg-white text-blue-600 px-4 rounded-lg mt-3 text-center font-semibold" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
