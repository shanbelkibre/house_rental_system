import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { uploadMultipleHouseImages, uploadLicenseImage } from "../services/api";
import { Alert, Button, Input, Card } from "../components/UI";
import ImageUploader from "../components/ImageUploader";

export default function CreateHousePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    rooms: "",
    bathrooms: "1",
    area: "",
    type: "apartment",
    amenities: [],
    availability_date: "",
  });

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
  const [images, setImages] = useState([]);
  const [licenseImage, setLicenseImage] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");

  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    
    try {
      const { data } = await api.post("/houses", form);
      const houseId = data.house?.id || data.data?.id || data.id;

      if (images.length > 0 && houseId) {
        const formData = new FormData();
        images.forEach((img, idx) => {
          formData.append(`images[${idx}][file]`, img.file);
          formData.append(`images[${idx}][type]`, img.type);
        });

        await uploadMultipleHouseImages(houseId, formData, (progressEvent) => {
          if (progressEvent.total) {
            setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          }
        });
      }

      if (licenseImage && houseId) {
        const licenseData = new FormData();
        licenseData.append("license_image", licenseImage);
        await uploadLicenseImage(houseId, licenseData);
      }

      navigate("/my-houses");
    } catch (e) {
      const msgs = e.response?.data?.errors;
      if (msgs) setError(Object.values(msgs).flat().join(" "));
      else setError(e.response?.data?.message || "Failed to create house");
    }
    setSaving(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Add New House</h1>
        <Button variant="outline" onClick={() => navigate("/my-houses")}>Back</Button>
      </div>
      
      {error && <Alert type="error" message={error} />}

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="space-y-4">
          <h2 className="font-semibold text-gray-700 border-b pb-2">House Details</h2>
          <Input label="Title" value={form.title} onChange={setF("title")} required />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
              value={form.description}
              onChange={setF("description")}
              required
            />
          </div>
          <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF("location")} required />
          <div className="grid grid-cols-2 gap-4">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
        </Card>

        <Card className="space-y-4">
          <h2 className="font-semibold text-gray-700 border-b pb-2">Ownership Document (Karta)</h2>
          <p className="text-sm text-gray-500">Upload your ownership certificate. This will only be visible to you and admins.</p>
          <input 
            type="file" 
            accept="image/*,.pdf" 
            onChange={(e) => setLicenseImage(e.target.files[0])}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </Card>

        <Card className="space-y-4">
          <h2 className="font-semibold text-gray-700 border-b pb-2">House Images</h2>
          <ImageUploader images={images} setImages={setImages} max={10} />
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
            </div>
          )}
        </Card>

        <div className="flex justify-end pt-2">
          <Button type="submit" loading={saving} className="w-48">Submit House</Button>
        </div>
      </form>
    </div>
  );
}
