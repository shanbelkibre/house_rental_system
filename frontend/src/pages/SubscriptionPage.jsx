import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Spinner, Alert, Button, Card, Select, Input } from '../components/UI';

export default function SubscriptionPage() {
  const [sub, setSub]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying]   = useState(false);
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');
  const [method, setMethod]   = useState('telebirr');

  const fetchSub = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/my-subscription');
      setSub(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchSub(); }, []);

  const subscribe = async () => {
    setPaying(true); setError(''); setSuccess('');
    try {
      await api.post('/subscribe', { payment_method: method, amount: 500 });
      setSuccess('Subscription activated! You can now post houses.');
      fetchSub();
    } catch (e) { setError(e.response?.data?.message || 'Payment failed'); }
    setPaying(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Subscription</h1>
        <p className="text-gray-500 text-sm mt-1">Subscribe to post houses on the platform</p>
      </div>

      {success && <Alert type="success" message={success} />}
      {error   && <Alert type="error"   message={error}   />}

      {loading ? (
        <div className="flex justify-center py-16"><Spinner size={12} /></div>
      ) : (
        <>
          {/* Current status */}
          {sub?.has_subscription ? (
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">✅</div>
                <div>
                  <p className="font-semibold text-gray-800">Active Subscription</p>
                  <p className="text-sm text-gray-500">
                    Expires: {new Date(sub.subscription.end_date).toLocaleDateString()}
                    {sub.days_remaining > 0 && ` (${sub.days_remaining} days left)`}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">You can post houses and manage your listings.</p>
            </Card>
          ) : (
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl">❌</div>
                <div>
                  <p className="font-semibold text-gray-800">No Active Subscription</p>
                  <p className="text-sm text-gray-500">Subscribe to start listing houses</p>
                </div>
              </div>
            </Card>
          )}

          {/* Subscribe form */}
          <Card>
            <h2 className="font-semibold text-gray-700 mb-4">
              {sub?.has_subscription ? 'Renew Subscription' : 'Subscribe Now'}
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-600">ETB 500</p>
                <p className="text-sm text-gray-500">per month · Unlimited house listings</p>
              </div>

              <Select label="Payment Method" value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="telebirr">Telebirr</option>
                <option value="chapa">Chapa</option>
                <option value="bank">Bank Transfer</option>
              </Select>

              <p className="text-xs text-gray-400">* This is a simulated payment for demo purposes.</p>

              <Button loading={paying} onClick={subscribe} className="w-full">
                Pay ETB 500 & Subscribe
              </Button>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
