import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Spinner, Alert, Button } from '../components/UI';

export default function NotificationsPage() {
  const [notifs, setNotifs]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  const fetchNotifs = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/notifications');
      setNotifs(data.data || []);
    } catch { setError('Failed to load notifications'); }
    setLoading(false);
  };

  useEffect(() => { fetchNotifs(); }, []);

  const markRead = async (id) => {
    try { await api.put(`/notifications/${id}/read`); fetchNotifs(); } catch {}
  };

  const markAll = async () => {
    try { await api.put('/notifications/read-all'); fetchNotifs(); } catch {}
  };

  const deleteNotif = async (id) => {
    try { await api.delete(`/notifications/${id}`); fetchNotifs(); } catch {}
  };

  const unread = notifs.filter((n) => !n.is_read).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          {unread > 0 && <p className="text-sm text-blue-600 font-medium">{unread} unread</p>}
        </div>
        {unread > 0 && <Button variant="outline" onClick={markAll}>Mark all as read</Button>}
      </div>

      {error && <Alert type="error" message={error} />}

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : notifs.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">🔔</div>
          <p>No notifications yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {notifs.map((n) => (
            <div key={n.id} className={`rounded-2xl border p-4 flex items-start gap-3 transition-colors ${n.is_read ? 'bg-white border-gray-100' : 'bg-blue-50 border-blue-100'}`}>
              <span className="text-xl mt-0.5">{n.is_read ? '🔔' : '🔵'}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-700">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">{new Date(n.created_at).toLocaleString()}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                {!n.is_read && (
                  <button onClick={() => markRead(n.id)} className="text-xs text-blue-500 hover:underline">Read</button>
                )}
                <button onClick={() => deleteNotif(n.id)} className="text-xs text-red-400 hover:underline ml-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
