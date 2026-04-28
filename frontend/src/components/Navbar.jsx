import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const roleColor = {
    admin:  'bg-white/20 text-white',
    owner:  'bg-white/20 text-white',
    renter: 'bg-white/20 text-white',
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white flex items-center">
          🏠 HouseRental
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <Link to="/houses" className="hover:text-gray-300 transition-colors">Browse Houses</Link>

          {user ? (
            <>
              {user.role === 'owner' && (
                <>
                  <Link to="/my-houses" className="hover:text-gray-300 transition-colors">My Houses</Link>
                  <Link to="/owner-requests" className="hover:text-gray-300 transition-colors">Requests</Link>
                  <Link to="/subscription" className="hover:text-gray-300 transition-colors">Subscription</Link>
                </>
              )}
              {user.role === 'renter' && (
                <>
                  <Link to="/my-requests" className="hover:text-gray-300 transition-colors">My Requests</Link>
                  <Link to="/my-visits" className="hover:text-gray-300 transition-colors">My Visits</Link>
                  <Link to="/my-agreements" className="hover:text-gray-300 transition-colors">Agreements</Link>
                </>
              )}
              {user.role === 'admin' && (
                <Link to="/admin" className="hover:text-gray-300 transition-colors">Admin Panel</Link>
              )}
              <Link to="/notifications" className="hover:text-gray-300 transition-colors">🔔 Alerts</Link>
              <Link to="/profile" className="hover:text-gray-300 transition-colors">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${roleColor[user.role]}`}>
                  {user.name}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
              <Link
                to="/register"
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 liquid-glass rounded-xl p-4 space-y-2 text-sm font-medium text-white">
          <Link to="/houses" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Browse Houses</Link>
          {user ? (
            <>
              <Link to="/notifications" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>🔔 Notifications</Link>
              <Link to="/profile" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Profile</Link>
              {user.role === 'owner' && <>
                <Link to="/my-houses" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>My Houses</Link>
                <Link to="/owner-requests" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Requests</Link>
                <Link to="/subscription" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Subscription</Link>
              </>}
              {user.role === 'renter' && <>
                <Link to="/my-requests" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>My Requests</Link>
                <Link to="/my-visits" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>My Visits</Link>
                <Link to="/my-agreements" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Agreements</Link>
              </>}
              {user.role === 'admin' && <Link to="/admin" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Admin Panel</Link>}
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block w-full text-left py-1 text-red-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-1 hover:text-gray-300" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="block py-1 bg-white text-black px-4 rounded-md mt-2 text-center" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
