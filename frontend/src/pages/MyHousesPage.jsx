import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Spinner, Alert, Button, Badge, Modal, Input, Select } from '../components/UI';

const emptyForm = { title: '', description: '', price: '', location: '', rooms: '' };

export default function MyHousesPage() {
  const [houses, setHouses]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');

  const [modal, setModal]     = useState(false);
  const [editing, setEditing] = useState(null); // null = create
  const [form, setForm]       = useState(emptyForm);
  const [saving, setSaving]   = useState(false);

  const [imgModal, setImgModal] = useState(null); // house id
  const [imgFile, setImgFile]   = useState(null);
  const [imgUploading, setImgUploading] = useState(false);

  const fetchHouses = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/my-houses');
      setHouses(data.data || []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchHouses(); }, []);

  const openCreate = () => { setEditing(null); setForm(emptyForm); setModal(true); };
  const openEdit   = (h)  => {
    setEditing(h.id);
    setForm({ title: h.title, description: h.description, price: h.price, location: h.location, rooms: h.rooms });
    setModal(true);
  };

  const handleSave = async () => {
    setSaving(true); setError(''); setSuccess('');
    try {
      if (editing) {
        await api.put(`/houses/${editing}`, form);
        setSuccess('House updated!');
      } else {
        await api.post('/houses', form);
        setSuccess('House submitted for approval!');
      }
      setModal(false);
      fetchHouses();
    } catch (e) {
      const msgs = e.response?.data?.errors;
      if (msgs) setError(Object.values(msgs).flat().join(' '));
      else setError(e.response?.data?.message || 'Failed');
    }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this house?')) return;
    try {
      await api.delete(`/houses/${id}`);
      setSuccess('House deleted');
      fetchHouses();
    } catch (e) { setError(e.response?.data?.message || 'Failed'); }
  };

  const handleImageUpload = async () => {
    if (!imgFile) return;
    setImgUploading(true);
    const fd = new FormData();
    fd.append('image', imgFile);
    try {
      await api.post(`/houses/${imgModal}/images`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setSuccess('Image uploaded'); setImgModal(null); setImgFile(null);
      fetchHouses();
    } catch (e) { setError(e.response?.data?.message || 'Upload failed'); }
    setImgUploading(false);
  };

  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Houses</h1>
          <p className="text-gray-500 text-sm">Manage your property listings</p>
        </div>
        <Button onClick={openCreate}>+ Add House</Button>
      </div>

      {success && <Alert type="success" message={success} />}
      {error   && <Alert type="error"   message={error}   />}

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : houses.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-6xl mb-4">🏚</div>
          <p>You haven't listed any houses yet.</p>
          <Button onClick={openCreate} className="mt-4">List Your First House</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {houses.map((h) => (
            <div key={h.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row gap-4">
              <div className="w-24 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                {h.images?.[0] ? (
                  <img src={`http://localhost:8000/storage/${h.images[0].image_path}`} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">🏠</div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{h.title}</h3>
                    <p className="text-sm text-gray-500">📍 {h.location} · 🛏 {h.rooms} rooms · ETB {Number(h.price).toLocaleString()}/mo</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge label={h.status}     color={h.status === 'available' ? 'green' : 'red'} />
                    <Badge label={h.is_approved ? 'Approved' : 'Pending'} color={h.is_approved ? 'blue' : 'yellow'} />
                  </div>
                </div>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <Button variant="outline" onClick={() => openEdit(h)}>Edit</Button>
                  <Button variant="outline" onClick={() => { setImgModal(h.id); setImgFile(null); }}>Upload Image</Button>
                  <Button variant="danger"  onClick={() => handleDelete(h.id)}>Delete</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create / Edit modal */}
      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit House' : 'Add New House'}>
        <div className="space-y-3">
          <Input label="Title" value={form.title} onChange={setF('title')} required />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
              value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF('location')} required />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Price (ETB/mo)" type="number" value={form.price} onChange={setF('price')} required />
            <Input label="Rooms" type="number" min="1" value={form.rooms} onChange={setF('rooms')} required />
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <Button variant="outline" onClick={() => setModal(false)}>Cancel</Button>
            <Button loading={saving} onClick={handleSave}>{editing ? 'Update' : 'Submit'}</Button>
          </div>
        </div>
      </Modal>

      {/* Image upload modal */}
      <Modal open={!!imgModal} onClose={() => setImgModal(null)} title="Upload House Image">
        <div className="space-y-4">
          <input type="file" accept="image/*" onChange={(e) => setImgFile(e.target.files[0])}
            className="w-full text-sm text-gray-600" />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setImgModal(null)}>Cancel</Button>
            <Button loading={imgUploading} onClick={handleImageUpload} disabled={!imgFile}>Upload</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
