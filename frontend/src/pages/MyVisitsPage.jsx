import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Spinner, Alert, Badge } from '../components/UI';

export default function MyVisitsPage() {
  const [visits, setVisits]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/my-visits');
        setVisits(data.data || []);
      } catch { setError('Failed to load visits'); }
      setLoading(false);
    })();
  }, []);

  const statusColor = { pending: 'yellow', confirmed: 'green', completed: 'blue' };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Visits</h1>
      {error && <Alert type="error" message={error} />}

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : visits.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">📅</div>
          <p>No visits scheduled yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {visits.map((v) => (
            <div key={v.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">{v.house?.title}</p>
                  <p className="text-sm text-gray-500">📍 {v.house?.location}</p>
                  <p className="text-sm text-blue-600 font-medium">
                    📅 {new Date(v.visit_date).toLocaleString()}
                  </p>
                </div>
                <Badge label={v.status} color={statusColor[v.status]} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
