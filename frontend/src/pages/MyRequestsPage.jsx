import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import { deleteRequest } from '../services/api';
import { Spinner, Alert, Badge, Button } from '../components/UI';

export default function MyRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/my-requests');
        setRequests(data.data || []);
      } catch { setError('Failed to load requests'); }
      setLoading(false);
    })();
  }, []);

  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this request?")) return;
    try {
      await deleteRequest(id);
      setRequests(requests.filter(r => r.id !== id));
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to cancel request');
    }
  };

  const statusColor = { pending: 'yellow', accepted: 'green', rejected: 'red' };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Rental Requests</h1>

      {error && <Alert type="error" message={error} />}

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : requests.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">📭</div>
          <p>You haven't sent any requests yet.</p>
          <Link to="/houses" className="mt-3 inline-block text-blue-600 font-medium hover:underline">Browse houses →</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <Link to={`/houses/${r.house?.id}`} className="font-semibold text-gray-800 hover:text-blue-600">
                    {r.house?.title}
                  </Link>
                  <p className="text-sm text-gray-500">📍 {r.house?.location}</p>
                  <p className="text-sm text-gray-500">Owner: {r.house?.owner?.name}</p>
                  {r.message && <p className="text-sm italic text-gray-400">"{r.message}"</p>}
                  <p className="text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <Badge label={r.status} color={statusColor[r.status]} />
                  {(r.status === 'pending' || r.status === 'accepted') && (
                    <Button variant="danger" onClick={() => handleCancel(r.id)}>
                      Cancel Request
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
