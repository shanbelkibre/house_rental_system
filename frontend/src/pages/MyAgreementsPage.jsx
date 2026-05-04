import { useState, useEffect } from 'react';
import api from '../api/axios';
import { terminateAgreement } from '../services/api';
import { Spinner, Alert, Badge, Button } from '../components/UI';
import { useAuth } from '../context/AuthContext';

export default function MyAgreementsPage() {
  const { user } = useAuth();
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState('');
  const [success, setSuccess]       = useState('');

  const fetchAgreements = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/my-agreements');
      setAgreements((data.data || []).filter(a => a.status !== 'terminated'));
    } catch { setError('Failed to load agreements'); }
    setLoading(false);
  };

  useEffect(() => { fetchAgreements(); }, []);

  const confirm = async (id) => {
    try {
      await api.put(`/agreements/${id}/confirm`);
      setSuccess('Agreement confirmed!');
      fetchAgreements();
    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const leaveHouse = async (id) => {
    if (!window.confirm("Are you sure you want to leave this house and terminate the rental?")) return;
    try {
      await terminateAgreement(id);
      setSuccess('You have left the house successfully!');
      fetchAgreements();
    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Agreements</h1>
      {success && <Alert type="success" message={success} />}
      {error   && <Alert type="error"   message={error}   />}

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : agreements.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">📄</div>
          <p>No agreements yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {agreements.map((a) => (
            <div key={a.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">{a.house?.title}</p>
                  <p className="text-sm text-gray-500">📍 {a.house?.location}</p>
                  <p className="text-sm text-gray-600">
                    📅 {new Date(a.start_date).toLocaleDateString()} → {new Date(a.end_date).toLocaleDateString()}
                  </p>
                  <p className="text-sm font-medium text-blue-600">
                    ETB {Number(a.agreed_price).toLocaleString()}/mo
                  </p>
                  {user?.role === 'owner' && a.renter && (
                    <p className="text-xs text-gray-400">Renter: {a.renter.name}</p>
                  )}
                </div>
                <Badge label={a.status} color={a.status === 'confirmed' ? 'green' : 'yellow'} />
              </div>

              {a.status === 'pending' && (
                <Button variant="success" onClick={() => confirm(a.id)}>✓ Confirm Agreement</Button>
              )}
              {a.status === 'confirmed' && user?.role === 'renter' && (
                <div className="flex justify-end pt-2">
                  <Button variant="danger" onClick={() => leaveHouse(a.id)}>🚪 Leave Out (Terminate)</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
