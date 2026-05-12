# CreateHousePage.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import { useNavigate } from "react-router-dom";
     3	import api from "../api/axios";
     4	import { uploadMultipleHouseImages, uploadLicenseImage } from "../services/api";
     5	import { Alert, Button, Input, Card } from "../components/UI";
     6	import ImageUploader from "../components/ImageUploader";
     7	
     8	export default function CreateHousePage() {
     9	  const navigate = useNavigate();
    10	  const [form, setForm] = useState({
    11	    title: "",
    12	    description: "",
    13	    price: "",
    14	    location: "",
    15	    rooms: "",
    16	    bathrooms: "1",
    17	    area: "",
    18	    type: "apartment",
    19	    amenities: [],
    20	    availability_date: "",
    21	  });
    22	
    23	  const AMENITIES_LIST = [
    24	    "WiFi", "Parking", "Pool", "Gym", "Balcony", 
    25	    "Furnished", "Air Conditioning", "Heating", "Security"
    26	  ];
    27	
    28	  const toggleAmenity = (amenity) => {
    29	    setForm(prev => {
    30	      const exists = prev.amenities.includes(amenity);
    31	      if (exists) {
    32	        return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
    33	      } else {
    34	        return { ...prev, amenities: [...prev.amenities, amenity] };
    35	      }
    36	    });
    37	  };
    38	  const [images, setImages] = useState([]);
    39	  const [licenseImage, setLicenseImage] = useState(null);
    40	  const [saving, setSaving] = useState(false);
    41	  const [uploadProgress, setUploadProgress] = useState(0);
    42	  const [error, setError] = useState("");
    43	
    44	  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    45	
    46	  const handleSave = async (e) => {
    47	    e.preventDefault();
    48	    if (!licenseImage) {
    49	      setError("Ownership document (Karta) is required.");
    50	      return;
    51	    }
    52	    setSaving(true);
    53	    setError("");
    54	    
    55	    try {
    56	      const { data } = await api.post("/houses", form);
    57	      const houseId = data.house?.id || data.data?.id || data.id;
    58	
    59	      if (images.length > 0 && houseId) {
    60	        const formData = new FormData();
    61	        images.forEach((img, idx) => {
    62	          formData.append(`images[${idx}][file]`, img.file);
    63	          formData.append(`images[${idx}][type]`, img.type);
    64	        });
    65	
    66	        await uploadMultipleHouseImages(houseId, formData, (progressEvent) => {
    67	          if (progressEvent.total) {
    68	            setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
    69	          }
    70	        });
    71	      }
    72	
    73	      if (licenseImage && houseId) {
    74	        const licenseData = new FormData();
    75	        licenseData.append("license_image", licenseImage);
    76	        await uploadLicenseImage(houseId, licenseData);
    77	      }
    78	
    79	      navigate("/my-houses");
    80	    } catch (e) {
    81	      const msgs = e.response?.data?.errors;
    82	      if (msgs) setError(Object.values(msgs).flat().join(" "));
    83	      else setError(e.response?.data?.message || "Failed to create house");
    84	    }
    85	    setSaving(false);
    86	  };
    87	
    88	  return (
    89	    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8 space-y-6">
    90	      <div className="flex items-center justify-between">
    91	        <h1 className="text-2xl font-bold text-gray-800">Add New House</h1>
    92	        <Button variant="outline" onClick={() => navigate("/my-houses")}>Back</Button>
    93	      </div>
    94	      
    95	      {error && <Alert type="error" message={error} />}
    96	
    97	      <form onSubmit={handleSave} className="space-y-6">
    98	        <Card className="space-y-4">
    99	          <h2 className="font-semibold text-gray-700 border-b pb-2">House Details</h2>
   100	          <Input label="Title" value={form.title} onChange={setF("title")} required />
   101	          <div className="space-y-1">
   102	            <label className="block text-sm font-medium text-gray-700">Description</label>
   103	            <textarea
   104	              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
   105	              value={form.description}
   106	              onChange={setF("description")}
   107	              required
   108	            />
   109	          </div>
   110	          <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF("location")} required />
   111	          <div className="grid grid-cols-2 gap-4">
   112	            <Input label="Price (ETB/mo)" type="number" value={form.price} onChange={setF("price")} required />
   113	            <Input label="Rooms" type="number" min="1" value={form.rooms} onChange={setF("rooms")} required />
   114	            <Input label="Bathrooms" type="number" min="1" value={form.bathrooms} onChange={setF("bathrooms")} required />
   115	            <Input label="Area (sqm)" type="number" min="1" value={form.area} onChange={setF("area")} />
   116	            <div className="space-y-1">
   117	              <label className="block text-sm font-medium text-gray-700">Property Type</label>
   118	              <select 
   119	                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
   120	                value={form.type} onChange={setF("type")} required
   121	              >
   122	                <option value="apartment">Apartment</option>
   123	                <option value="villa">Villa</option>
   124	                <option value="condo">Condo</option>
   125	                <option value="house">House</option>
   126	                <option value="studio">Studio</option>
   127	              </select>
   128	            </div>
   129	            <Input label="Availability Date" type="date" value={form.availability_date} onChange={setF("availability_date")} />
   130	          </div>
   131	
   132	          <div className="space-y-2">
   133	            <label className="block text-sm font-medium text-gray-700">Amenities</label>
   134	            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
   135	              {AMENITIES_LIST.map(amenity => (
   136	                <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
   137	                  <input 
   138	                    type="checkbox" 
   139	                    checked={form.amenities.includes(amenity)}
   140	                    onChange={() => toggleAmenity(amenity)}
   141	                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
   142	                  />
   143	                  {amenity}
   144	                </label>
   145	              ))}
   146	            </div>
   147	          </div>
   148	        </Card>
   149	
   150	        <Card className="space-y-4">
   151	          <h2 className="font-semibold text-gray-700 border-b pb-2">Ownership Document (Karta)</h2>
   152	          <p className="text-sm text-gray-500">Upload your ownership certificate. This will only be visible to you and admins.</p>
   153	          <input 
   154	            type="file" 
   155	            accept="image/*,.pdf" 
   156	            onChange={(e) => setLicenseImage(e.target.files[0])}
   157	            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
   158	          />
   159	        </Card>
   160	
   161	        <Card className="space-y-4">
   162	          <h2 className="font-semibold text-gray-700 border-b pb-2">House Images</h2>
   163	          <ImageUploader images={images} setImages={setImages} max={10} />
   164	          {uploadProgress > 0 && uploadProgress < 100 && (
   165	            <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
   166	              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
   167	            </div>
   168	          )}
   169	        </Card>
   170	
   171	        <div className="flex justify-end pt-2">
   172	          <Button type="submit" loading={saving} className="w-48">Submit House</Button>
   173	        </div>
   174	      </form>
   175	    </div>
   176	  );
   177	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import { useNavigate } from "react-router-dom";
- Line 3: import api from "../api/axios";
- Line 4: import { uploadMultipleHouseImages, uploadLicenseImage } from "../services/api";
- Line 5: import { Alert, Button, Input, Card } from "../components/UI";
- Line 6: import ImageUploader from "../components/ImageUploader";
- Line 7: 
- Line 8: export default function CreateHousePage() {
- Line 9:   const navigate = useNavigate();
- Line 10:   const [form, setForm] = useState({
- Line 11:     title: "",
- Line 12:     description: "",
- Line 13:     price: "",
- Line 14:     location: "",
- Line 15:     rooms: "",
- Line 16:     bathrooms: "1",
- Line 17:     area: "",
- Line 18:     type: "apartment",
- Line 19:     amenities: [],
- Line 20:     availability_date: "",
- Line 21:   });
- Line 22: 
- Line 23:   const AMENITIES_LIST = [
- Line 24:     "WiFi", "Parking", "Pool", "Gym", "Balcony", 
- Line 25:     "Furnished", "Air Conditioning", "Heating", "Security"
- Line 26:   ];
- Line 27: 
- Line 28:   const toggleAmenity = (amenity) => {
- Line 29:     setForm(prev => {
- Line 30:       const exists = prev.amenities.includes(amenity);
- Line 31:       if (exists) {
- Line 32:         return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
- Line 33:       } else {
- Line 34:         return { ...prev, amenities: [...prev.amenities, amenity] };
- Line 35:       }
- Line 36:     });
- Line 37:   };
- Line 38:   const [images, setImages] = useState([]);
- Line 39:   const [licenseImage, setLicenseImage] = useState(null);
- Line 40:   const [saving, setSaving] = useState(false);
- Line 41:   const [uploadProgress, setUploadProgress] = useState(0);
- Line 42:   const [error, setError] = useState("");
- Line 43: 
- Line 44:   const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
- Line 45: 
- Line 46:   const handleSave = async (e) => {
- Line 47:     e.preventDefault();
- Line 48:     if (!licenseImage) {
- Line 49:       setError("Ownership document (Karta) is required.");
- Line 50:       return;
- Line 51:     }
- Line 52:     setSaving(true);
- Line 53:     setError("");
- Line 54:     
- Line 55:     try {
- Line 56:       const { data } = await api.post("/houses", form);
- Line 57:       const houseId = data.house?.id || data.data?.id || data.id;
- Line 58: 
- Line 59:       if (images.length > 0 && houseId) {
- Line 60:         const formData = new FormData();
- Line 61:         images.forEach((img, idx) => {
- Line 62:           formData.append(`images[${idx}][file]`, img.file);
- Line 63:           formData.append(`images[${idx}][type]`, img.type);
- Line 64:         });
- Line 65: 
- Line 66:         await uploadMultipleHouseImages(houseId, formData, (progressEvent) => {
- Line 67:           if (progressEvent.total) {
- Line 68:             setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
- Line 69:           }
- Line 70:         });
- Line 71:       }
- Line 72: 
- Line 73:       if (licenseImage && houseId) {
- Line 74:         const licenseData = new FormData();
- Line 75:         licenseData.append("license_image", licenseImage);
- Line 76:         await uploadLicenseImage(houseId, licenseData);
- Line 77:       }
- Line 78: 
- Line 79:       navigate("/my-houses");
- Line 80:     } catch (e) {
- Line 81:       const msgs = e.response?.data?.errors;
- Line 82:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 83:       else setError(e.response?.data?.message || "Failed to create house");
- Line 84:     }
- Line 85:     setSaving(false);
- Line 86:   };
- Line 87: 
- Line 88:   return (
- Line 89:     <div className="max-w-4xl mx-auto px-4 pt-24 pb-8 space-y-6">
- Line 90:       <div className="flex items-center justify-between">
- Line 91:         <h1 className="text-2xl font-bold text-gray-800">Add New House</h1>
- Line 92:         <Button variant="outline" onClick={() => navigate("/my-houses")}>Back</Button>
- Line 93:       </div>
- Line 94:       
- Line 95:       {error && <Alert type="error" message={error} />}
- Line 96: 
- Line 97:       <form onSubmit={handleSave} className="space-y-6">
- Line 98:         <Card className="space-y-4">
- Line 99:           <h2 className="font-semibold text-gray-700 border-b pb-2">House Details</h2>
- Line 100:           <Input label="Title" value={form.title} onChange={setF("title")} required />
- Line 101:           <div className="space-y-1">
- Line 102:             <label className="block text-sm font-medium text-gray-700">Description</label>
- Line 103:             <textarea
- Line 104:               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
- Line 105:               value={form.description}
- Line 106:               onChange={setF("description")}
- Line 107:               required
- Line 108:             />
- Line 109:           </div>
- Line 110:           <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF("location")} required />
- Line 111:           <div className="grid grid-cols-2 gap-4">
- Line 112:             <Input label="Price (ETB/mo)" type="number" value={form.price} onChange={setF("price")} required />
- Line 113:             <Input label="Rooms" type="number" min="1" value={form.rooms} onChange={setF("rooms")} required />
- Line 114:             <Input label="Bathrooms" type="number" min="1" value={form.bathrooms} onChange={setF("bathrooms")} required />
- Line 115:             <Input label="Area (sqm)" type="number" min="1" value={form.area} onChange={setF("area")} />
- Line 116:             <div className="space-y-1">
- Line 117:               <label className="block text-sm font-medium text-gray-700">Property Type</label>
- Line 118:               <select 
- Line 119:                 className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
- Line 120:                 value={form.type} onChange={setF("type")} required
- Line 121:               >
- Line 122:                 <option value="apartment">Apartment</option>
- Line 123:                 <option value="villa">Villa</option>
- Line 124:                 <option value="condo">Condo</option>
- Line 125:                 <option value="house">House</option>
- Line 126:                 <option value="studio">Studio</option>
- Line 127:               </select>
- Line 128:             </div>
- Line 129:             <Input label="Availability Date" type="date" value={form.availability_date} onChange={setF("availability_date")} />
- Line 130:           </div>
- Line 131: 
- Line 132:           <div className="space-y-2">
- Line 133:             <label className="block text-sm font-medium text-gray-700">Amenities</label>
- Line 134:             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
- Line 135:               {AMENITIES_LIST.map(amenity => (
- Line 136:                 <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
- Line 137:                   <input 
- Line 138:                     type="checkbox" 
- Line 139:                     checked={form.amenities.includes(amenity)}
- Line 140:                     onChange={() => toggleAmenity(amenity)}
- Line 141:                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
- Line 142:                   />
- Line 143:                   {amenity}
- Line 144:                 </label>
- Line 145:               ))}
- Line 146:             </div>
- Line 147:           </div>
- Line 148:         </Card>
- Line 149: 
- Line 150:         <Card className="space-y-4">
- Line 151:           <h2 className="font-semibold text-gray-700 border-b pb-2">Ownership Document (Karta)</h2>
- Line 152:           <p className="text-sm text-gray-500">Upload your ownership certificate. This will only be visible to you and admins.</p>
- Line 153:           <input 
- Line 154:             type="file" 
- Line 155:             accept="image/*,.pdf" 
- Line 156:             onChange={(e) => setLicenseImage(e.target.files[0])}
- Line 157:             className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
- Line 158:           />
- Line 159:         </Card>
- Line 160: 
- Line 161:         <Card className="space-y-4">
- Line 162:           <h2 className="font-semibold text-gray-700 border-b pb-2">House Images</h2>
- Line 163:           <ImageUploader images={images} setImages={setImages} max={10} />
- Line 164:           {uploadProgress > 0 && uploadProgress < 100 && (
- Line 165:             <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
- Line 166:               <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
- Line 167:             </div>
- Line 168:           )}
- Line 169:         </Card>
- Line 170: 
- Line 171:         <div className="flex justify-end pt-2">
- Line 172:           <Button type="submit" loading={saving} className="w-48">Submit House</Button>
- Line 173:         </div>
- Line 174:       </form>
- Line 175:     </div>
- Line 176:   );
- Line 177: }

