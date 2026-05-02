import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { uploadMultipleHouseImages, reorderImages, uploadLicenseImage } from "../services/api";
import {
  Spinner,
  Alert,
  Button,
  Badge,
  Modal,
  Input
} from "../components/UI";
import ImageUploader from "../components/ImageUploader";
import { toStorageUrl } from "../utils/media";

export default function MyHousesPage() {
  const navigate = useNavigate();
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ 
    title: "", description: "", price: "", location: "", rooms: "",
    bathrooms: "1", area: "", type: "apartment", amenities: [], availability_date: ""
  });
  const [saving, setSaving] = useState(false);

  const AMENITIES_LIST = [
    "WiFi", "Parking", "Pool", "Gym", "Balcony", 
    "Furnished", "Air Conditioning", "Heating", "Security"
  ];

  const toggleAmenity = (amenity) => {
    setForm(prev => {
      const exists = prev.amenities.includes(amenity);
      if (exists) {
        return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  const [imgModal, setImgModal] = useState(null);
  const [imagesToAdd, setImagesToAdd] = useState([]);
  const [imgUploading, setImgUploading] = useState(0);
  const [draggedExisting, setDraggedExisting] = useState(null);

  const [kartaModal, setKartaModal] = useState(null);
  const [kartaFile, setKartaFile] = useState(null);
  const [kartaUploading, setKartaUploading] = useState(false);

  const fetchHouses = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/my-houses");
      setHouses(data.data || []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  const openEdit = (h) => {
    setEditing(h.id);
    setForm({
      title: h.title,
      description: h.description,
      price: h.price,
      location: h.location,
      rooms: h.rooms,
      bathrooms: h.bathrooms || "1",
      area: h.area || "",
      type: h.type || "apartment",
      amenities: h.amenities || [],
      availability_date: h.availability_date || "",
    });
    setModal(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      await api.put(`/houses/${editing}`, form);
      setSuccess("House updated!");
      setModal(false);
      fetchHouses();
    } catch (e) {
      const msgs = e.response?.data?.errors;
      if (msgs) setError(Object.values(msgs).flat().join(" "));
      else setError(e.response?.data?.message || "Failed");
    }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this house?")) return;
    try {
      await api.delete(`/houses/${id}`);
      setSuccess("House deleted");
      fetchHouses();
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
    }
  };

  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleDragOverExisting = (idx) => {
    if (draggedExisting === null || draggedExisting === idx) return;
    const newImages = [...imgModal.images];
    const draggedItem = newImages[draggedExisting];
    newImages.splice(draggedExisting, 1);
    newImages.splice(idx, 0, draggedItem);
    setImgModal({ ...imgModal, images: newImages });
    setDraggedExisting(idx);
  };

  const handleDragEndExisting = async () => {
    const currentHouseId = imgModal.id;
    const currentImages = imgModal.images;
    setDraggedExisting(null);

    setHouses(houses.map(h => h.id === currentHouseId ? { ...h, images: currentImages } : h));
    try {
      await reorderImages(currentHouseId, currentImages.map(i => i.id));
    } catch (e) {
      setError("Failed to save new image order.");
      fetchHouses();
    }
  };

  const uploadNewImages = async () => {
    if (imagesToAdd.length === 0) return;
    setImgUploading(1);
    const fd = new FormData();
    imagesToAdd.forEach((img, idx) => {
      fd.append(`images[${idx}][file]`, img.file);
      fd.append(`images[${idx}][type]`, img.type);
    });

    try {
      await uploadMultipleHouseImages(imgModal.id, fd, (e) => {
        if (e.total) setImgUploading(Math.round((e.loaded * 100) / e.total));
      });
      setSuccess("Images uploaded successfully!");
      setImagesToAdd([]);
      setImgUploading(0);
      fetchHouses();
      const { data } = await api.get(`/houses/${imgModal.id}`);
      setImgModal(data);
    } catch (e) {
      setError("Failed to upload images.");
      setImgUploading(0);
    }
  };

  const deleteExistingImage = async (imgId) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      await api.delete(`/houses/${imgModal.id}/images/${imgId}`);
      const updatedImages = imgModal.images.filter(i => i.id !== imgId);
      setImgModal({ ...imgModal, images: updatedImages });
      setHouses(houses.map(h => h.id === imgModal.id ? { ...h, images: updatedImages } : h));
      setSuccess("Image deleted.");
    } catch (e) {
      setError("Failed to delete image.");
    }
  };

  const handleUploadKarta = async () => {
    if (!kartaFile) return;
    setKartaUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("license_image", kartaFile);
      await uploadLicenseImage(kartaModal.id, fd);
      setSuccess("Ownership document uploaded successfully!");
      setKartaModal(null);
      setKartaFile(null);
      fetchHouses();
    } catch (e) {
      setError("Failed to upload ownership document.");
    }
    setKartaUploading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Houses</h1>
          <p className="text-gray-500 text-sm">Manage your property listings</p>
        </div>
        <Button onClick={() => navigate("/create-house")}>+ Add House</Button>
      </div>

      {success && <Alert type="success" message={success} />}
      {error && <Alert type="error" message={error} />}

      {loading ? (
        <div className="flex justify-center py-20">
          <Spinner size={12} />
        </div>
      ) : houses.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-6xl mb-4">🏚</div>
          <p>You haven't listed any houses yet.</p>
          <Button onClick={() => navigate("/create-house")} className="mt-4">
            List Your First House
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {houses.map((h) => (
            <div key={h.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{h.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      📍 {h.location} · 🛏 {h.rooms} rooms · ETB {Number(h.price).toLocaleString()}/mo
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge label={h.status} color={h.status === "available" ? "green" : "red"} />
                    <Badge label={h.is_approved ? "Approved" : "Pending"} color={h.is_approved ? "blue" : "yellow"} />
                  </div>
                </div>
                
                {h.images && h.images.length > 0 ? (
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {h.images.map(img => (
                      <img key={img.id} src={toStorageUrl(img.image_path)} className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-200 shadow-sm" alt="" />
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 text-sm text-gray-400 italic">No images uploaded</div>
                )}

                {h.license_image && (
                  <div className="mt-3 bg-blue-50 text-blue-800 text-xs px-3 py-2 rounded-lg inline-flex items-center gap-2 border border-blue-100">
                    📄 Ownership Document (Karta)
                    <a href={toStorageUrl(h.license_image)} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-blue-900">View Document</a>
                  </div>
                )}

                <div className="mt-4 flex gap-2 flex-wrap border-t pt-4">
                  <Button variant="outline" onClick={() => openEdit(h)}>Edit Details</Button>
                  <Button variant="outline" onClick={() => { setImgModal(h); setImagesToAdd([]); }}>Manage Images</Button>
                  <Button variant="outline" onClick={() => { setKartaModal(h); setKartaFile(null); }}>Manage Karta</Button>
                  <Button variant="danger" onClick={() => handleDelete(h.id)}>Delete House</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal open={modal} onClose={() => setModal(false)} title="Edit House Details">
        <div className="space-y-4">
          <Input label="Title" value={form.title} onChange={setF("title")} required />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF("location")} required />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Price (ETB/mo)" type="number" value={form.price} onChange={setF("price")} required />
            <Input label="Rooms" type="number" min="1" value={form.rooms} onChange={setF("rooms")} required />
            <Input label="Bathrooms" type="number" min="1" value={form.bathrooms} onChange={setF("bathrooms")} required />
            <Input label="Area (sqm)" type="number" min="1" value={form.area} onChange={setF("area")} />
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select 
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.type} onChange={setF("type")} required
              >
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
              </select>
            </div>
            <Input label="Availability Date" type="date" value={form.availability_date} onChange={setF("availability_date")} />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Amenities</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {AMENITIES_LIST.map(amenity => (
                <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={form.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <Button variant="outline" onClick={() => setModal(false)}>Cancel</Button>
            <Button loading={saving} onClick={handleSave}>Update</Button>
          </div>
        </div>
      </Modal>

      <Modal open={!!imgModal} onClose={() => setImgModal(null)} title="Manage House Images">
        <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
          {imgModal?.images?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-700">Existing Images (Drag to reorder)</h4>
              <div className="grid grid-cols-3 gap-3">
                {imgModal.images.map((img, idx) => (
                  <div 
                    key={img.id}
                    draggable
                    onDragStart={() => setDraggedExisting(idx)}
                    onDragOver={(e) => { e.preventDefault(); handleDragOverExisting(idx); }}
                    onDragEnd={handleDragEndExisting}
                    className={`relative group bg-gray-100 rounded-xl overflow-hidden h-28 border-2 cursor-move ${draggedExisting === idx ? 'border-blue-500 opacity-50' : 'border-transparent shadow-sm hover:border-gray-300'}`}
                  >
                    <img src={toStorageUrl(img.image_path)} className="w-full h-full object-cover" alt="" />
                    <button 
                      onClick={() => deleteExistingImage(img.id)} 
                      className="absolute top-1 right-1 bg-red-600/90 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 text-sm shadow transition-opacity hover:bg-red-700"
                    >
                      &times;
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-1 py-0.5 truncate pointer-events-none">
                      {img.type || 'Image'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-5">
            <h4 className="text-sm font-semibold mb-3 text-gray-700">Add New Images</h4>
            <ImageUploader images={imagesToAdd} setImages={setImagesToAdd} max={10} />
            {imgUploading > 0 && imgUploading < 100 && (
               <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
                 <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${imgUploading}%` }}></div>
               </div>
            )}
            <div className="flex justify-end mt-4">
              <Button loading={imgUploading > 0} onClick={uploadNewImages} disabled={imagesToAdd.length === 0}>
                Upload Added Images
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={!!kartaModal} onClose={() => setKartaModal(null)} title="Manage Ownership Document">
        <div className="space-y-4">
          {kartaModal?.license_image && (
            <div className="bg-green-50 text-green-800 p-3 rounded-xl border border-green-200 text-sm flex justify-between items-center">
              <span>✅ A document is already uploaded.</span>
              <a href={toStorageUrl(kartaModal.license_image)} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-green-900">View</a>
            </div>
          )}
          <p className="text-sm text-gray-600">Upload a new ownership certificate or Karta to verify your property. This replaces any existing document.</p>
          <input 
            type="file" 
            accept="image/*,.pdf" 
            onChange={(e) => setKartaFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setKartaModal(null)}>Cancel</Button>
            <Button loading={kartaUploading} onClick={handleUploadKarta} disabled={!kartaFile}>Upload Document</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
