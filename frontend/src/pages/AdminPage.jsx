import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Spinner, Alert, Button, Badge, Card } from '../components/UI';

const tabs = ['Dashboard', 'Users', 'Pending Houses', 'All Houses'];

export default function AdminPage() {
  const [tab, setTab]       = useState('Dashboard');
  const [stats, setStats]   = useState(null);
  const [users, setUsers]   = useState([]);
  const [pending, setPending] = useState([]);
  const [allHouses, setAllHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => { loadTab(tab); }, [tab]);

  const loadTab = async (t) => {
    setLoading(true); setError('');
    try {
      if (t === 'Dashboard') {
        const { data } = await api.get('/admin/dashboard');
        setStats(data);
      } else if (t === 'Users') {
        const { data } = await api.get('/admin/users');
        setUsers(data.data || []);
      } else if (t === 'Pending Houses') {
        const { data } = await api.get('/admin/pending-houses');
        setPending(data.data || []);
      } else if (t === 'All Houses') {
        const { data } = await api.get('/admin/all-houses');
        setAllHouses(data.data || []);
      }
    } catch { setError('Failed to load data'); }
    setLoading(false);
  };

  const verifyUser = async (id) => {
    try { await api.put(`/admin/users/${id}/verify`); setSuccess('User verified'); loadTab('Users'); }
    catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const deleteUser = async (id) => {
    if (!confirm('Delete this user?')) return;
    try { await api.delete(`/admin/users/${id}`); setSuccess('User deleted'); loadTab('Users'); }
    catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const approveHouse = async (id) => {
    try { await api.put(`/admin/houses/${id}/approve`); setSuccess('House approved!'); loadTab('Pending Houses'); }
    catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const rejectHouse = async (id) => {
    if (!confirm('Reject and delete this house?')) return;
    try { await api.delete(`/admin/houses/${id}/reject`); setSuccess('House rejected'); loadTab('Pending Houses'); }
    catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const StatCard = ({ label, value, icon, color = 'blue' }) => {
    const colors = { blue: 'bg-blue-50 text-blue-700', green: 'bg-green-50 text-green-700', yellow: 'bg-yellow-50 text-yellow-700', purple: 'bg-purple-50 text-purple-700' };
    return (
      <div className={`rounded-2xl p-5 ${colors[color]}`}>
        <div className="text-2xl mb-1">{icon}</div>
        <p className="text-3xl font-bold">{value ?? '—'}</p>
        <p className="text-sm opacity-70 mt-1">{label}</p>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        <p className="text-gray-500 text-sm">Manage the platform</p>
      </div>

      {success && <Alert type="success" message={success} />}
      {error   && <Alert type="error"   message={error}   />}

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
              tab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : (
        <>
          {/* Dashboard */}
          {tab === 'Dashboard' && stats && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <StatCard label="Total Users"          value={stats.total_users}           icon="👥" color="blue"   />
              <StatCard label="Owners"               value={stats.total_owners}          icon="🏠" color="purple" />
              <StatCard label="Renters"              value={stats.total_renters}         icon="🔑" color="green"  />
              <StatCard label="Total Houses"         value={stats.total_houses}          icon="🏘" color="blue"   />
              <StatCard label="Pending Approval"     value={stats.pending_houses}        icon="⏳" color="yellow" />
              <StatCard label="Available Houses"     value={stats.available_houses}      icon="✅" color="green"  />
              <StatCard label="Rented Houses"        value={stats.rented_houses}         icon="📝" color="purple" />
              <StatCard label="Active Subscriptions" value={stats.active_subscriptions}  icon="💳" color="green"  />
              <StatCard label="Total Requests"       value={stats.total_requests}        icon="📋" color="blue"   />
              <StatCard label="Revenue (ETB)"        value={Number(stats.total_payments).toLocaleString()} icon="💰" color="green" />
            </div>
          )}

          {/* Users */}
          {tab === 'Users' && (
            <div className="space-y-3">
              {users.map((u) => (
                <div key={u.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-gray-800">{u.name}</p>
                    <p className="text-sm text-gray-500">{u.email} · {u.phone || 'No phone'}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge label={u.role}                        color={u.role === 'admin' ? 'purple' : u.role === 'owner' ? 'blue' : 'green'} />
                      <Badge label={u.is_verified ? 'Verified' : 'Unverified'} color={u.is_verified ? 'green' : 'yellow'} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!u.is_verified && <Button variant="success" onClick={() => verifyUser(u.id)}>Verify</Button>}
                    {u.role !== 'admin' && <Button variant="danger" onClick={() => deleteUser(u.id)}>Delete</Button>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pending Houses */}
          {tab === 'Pending Houses' && (
            <div className="space-y-3">
              {pending.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-5xl mb-3">🎉</div>
                  <p>No pending houses — all clear!</p>
                </div>
              ) : pending.map((h) => (
                <div key={h.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-gray-800">{h.title}</p>
                    <p className="text-sm text-gray-500">📍 {h.location} · ETB {Number(h.price).toLocaleString()}/mo · 🛏 {h.rooms} rooms</p>
                    <p className="text-xs text-gray-400 mt-1">Owner: {h.owner?.name} · {new Date(h.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="success" onClick={() => approveHouse(h.id)}>✓ Approve</Button>
                    <Button variant="danger"  onClick={() => rejectHouse(h.id)}>✗ Reject</Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* All Houses */}
          {tab === 'All Houses' && (
            <div className="space-y-3">
              {allHouses.map((h) => (
                <div key={h.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-800">{h.title}</p>
                      <p className="text-sm text-gray-500">📍 {h.location} · ETB {Number(h.price).toLocaleString()}/mo</p>
                      <p className="text-xs text-gray-400 mt-1">Owner: {h.owner?.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge label={h.status}                            color={h.status === 'available' ? 'green' : 'red'} />
                      <Badge label={h.is_approved ? 'Approved' : 'Pending'} color={h.is_approved ? 'blue' : 'yellow'} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
