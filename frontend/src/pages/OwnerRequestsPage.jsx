import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Spinner, Alert, Button, Badge } from '../components/UI';

export default function OwnerRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState('');

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/owner-requests');
      setRequests(data.data || []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchRequests(); }, []);

  const handleUpdate = async (id, status) => {
    try {
      await api.put(`/requests/${id}`, { status });
      setSuccess(`Request ${status}!`);
      fetchRequests();
    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const statusColor = { pending: 'yellow', accepted: 'green', rejected: 'red' };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Rental Requests</h1>
      <p className="text-gray-500 -mt-4 text-sm">Review requests from potential renters</p>

      {success && <Alert type="success" message={success} />}
      {error   && <Alert type="error"   message={error}   />}

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : requests.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">📭</div>
          <p>No rental requests yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">{r.house?.title}</p>
                  <p className="text-sm text-gray-500">📍 {r.house?.location}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">From:</span> {r.renter?.name}
                    {r.renter?.phone && <span className="ml-2 text-gray-400">📞 {r.renter.phone}</span>}
                  </p>
                  {r.message && (
                    <p className="text-sm text-gray-500 italic">"{r.message}"</p>
                  )}
                  <p className="text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</p>
                </div>
                <Badge label={r.status} color={statusColor[r.status]} />
              </div>

              {r.status === 'pending' && (
                <div className="mt-4 flex gap-2">
                  <Button variant="success" onClick={() => handleUpdate(r.id, 'accepted')}>✓ Accept</Button>
                  <Button variant="danger"  onClick={() => handleUpdate(r.id, 'rejected')}>✗ Reject</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
