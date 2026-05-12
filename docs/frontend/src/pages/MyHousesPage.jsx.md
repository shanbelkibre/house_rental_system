# MyHousesPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	import { useNavigate } from "react-router-dom";
     3	import api from "../api/axios";
     4	import { uploadMultipleHouseImages, reorderImages, uploadLicenseImage } from "../services/api";
     5	import {
     6	  Spinner,
     7	  Alert,
     8	  Button,
     9	  Badge,
    10	  Modal,
    11	  Input
    12	} from "../components/UI";
    13	import ImageUploader from "../components/ImageUploader";
    14	import { toStorageUrl } from "../utils/media";
    15	
    16	export default function MyHousesPage() {
    17	  const navigate = useNavigate();
    18	  const [houses, setHouses] = useState([]);
    19	  const [loading, setLoading] = useState(true);
    20	  const [error, setError] = useState("");
    21	  const [success, setSuccess] = useState("");
    22	
    23	  const [modal, setModal] = useState(false);
    24	  const [editing, setEditing] = useState(null);
    25	  const [form, setForm] = useState({ 
    26	    title: "", description: "", price: "", location: "", rooms: "",
    27	    bathrooms: "1", area: "", type: "apartment", amenities: [], availability_date: "",
    28	    status: "available"
    29	  });
    30	  const [saving, setSaving] = useState(false);
    31	
    32	  const AMENITIES_LIST = [
    33	    "WiFi", "Parking", "Pool", "Gym", "Balcony", 
    34	    "Furnished", "Air Conditioning", "Heating", "Security"
    35	  ];
    36	
    37	  const toggleAmenity = (amenity) => {
    38	    setForm(prev => {
    39	      const exists = prev.amenities.includes(amenity);
    40	      if (exists) {
    41	        return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
    42	      } else {
    43	        return { ...prev, amenities: [...prev.amenities, amenity] };
    44	      }
    45	    });
    46	  };
    47	
    48	  const [imgModal, setImgModal] = useState(null);
    49	  const [imagesToAdd, setImagesToAdd] = useState([]);
    50	  const [imgUploading, setImgUploading] = useState(0);
    51	  const [draggedExisting, setDraggedExisting] = useState(null);
    52	
    53	  const [kartaModal, setKartaModal] = useState(null);
    54	  const [kartaFile, setKartaFile] = useState(null);
    55	  const [kartaUploading, setKartaUploading] = useState(false);
    56	
    57	  const fetchHouses = async () => {
    58	    setLoading(true);
    59	    try {
    60	      const { data } = await api.get("/my-houses");
    61	      setHouses(data.data || []);
    62	    } catch {}
    63	    setLoading(false);
    64	  };
    65	
    66	  useEffect(() => {
    67	    fetchHouses();
    68	  }, []);
    69	
    70	  const openEdit = (h) => {
    71	    setEditing(h.id);
    72	    setForm({
    73	      title: h.title,
    74	      description: h.description,
    75	      price: h.price,
    76	      location: h.location,
    77	      rooms: h.rooms,
    78	      bathrooms: h.bathrooms || "1",
    79	      area: h.area || "",
    80	      type: h.type || "apartment",
    81	      amenities: h.amenities || [],
    82	      availability_date: h.availability_date || "",
    83	      status: h.status || "available",
    84	    });
    85	    setModal(true);
    86	  };
    87	
    88	  const handleSave = async () => {
    89	    setSaving(true);
    90	    setError("");
    91	    setSuccess("");
    92	    try {
    93	      await api.put(`/houses/${editing}`, form);
    94	      setSuccess("House updated!");
    95	      setModal(false);
    96	      fetchHouses();
    97	    } catch (e) {
    98	      const msgs = e.response?.data?.errors;
    99	      if (msgs) setError(Object.values(msgs).flat().join(" "));
   100	      else setError(e.response?.data?.message || "Failed");
   101	    }
   102	    setSaving(false);
   103	  };
   104	
   105	  const handleDelete = async (id) => {
   106	    if (!confirm("Delete this house?")) return;
   107	    try {
   108	      await api.delete(`/houses/${id}`);
   109	      setSuccess("House deleted");
   110	      fetchHouses();
   111	    } catch (e) {
   112	      setError(e.response?.data?.message || "Failed");
   113	    }
   114	  };
   115	
   116	  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
   117	
   118	  const handleDragOverExisting = (idx) => {
   119	    if (draggedExisting === null || draggedExisting === idx) return;
   120	    const newImages = [...imgModal.images];
   121	    const draggedItem = newImages[draggedExisting];
   122	    newImages.splice(draggedExisting, 1);
   123	    newImages.splice(idx, 0, draggedItem);
   124	    setImgModal({ ...imgModal, images: newImages });
   125	    setDraggedExisting(idx);
   126	  };
   127	
   128	  const handleDragEndExisting = async () => {
   129	    const currentHouseId = imgModal.id;
   130	    const currentImages = imgModal.images;
   131	    setDraggedExisting(null);
   132	
   133	    setHouses(houses.map(h => h.id === currentHouseId ? { ...h, images: currentImages } : h));
   134	    try {
   135	      await reorderImages(currentHouseId, currentImages.map(i => i.id));
   136	    } catch (e) {
   137	      setError("Failed to save new image order.");
   138	      fetchHouses();
   139	    }
   140	  };
   141	
   142	  const uploadNewImages = async () => {
   143	    if (imagesToAdd.length === 0) return;
   144	    setImgUploading(1);
   145	    const fd = new FormData();
   146	    imagesToAdd.forEach((img, idx) => {
   147	      fd.append(`images[${idx}][file]`, img.file);
   148	      fd.append(`images[${idx}][type]`, img.type);
   149	    });
   150	
   151	    try {
   152	      await uploadMultipleHouseImages(imgModal.id, fd, (e) => {
   153	        if (e.total) setImgUploading(Math.round((e.loaded * 100) / e.total));
   154	      });
   155	      setSuccess("Images uploaded successfully!");
   156	      setImagesToAdd([]);
   157	      setImgUploading(0);
   158	      fetchHouses();
   159	      const { data } = await api.get(`/houses/${imgModal.id}`);
   160	      setImgModal(data);
   161	    } catch (e) {
   162	      setError("Failed to upload images.");
   163	      setImgUploading(0);
   164	    }
   165	  };
   166	
   167	  const deleteExistingImage = async (imgId) => {
   168	    if (!confirm("Are you sure you want to delete this image?")) return;
   169	    try {
   170	      await api.delete(`/houses/${imgModal.id}/images/${imgId}`);
   171	      const updatedImages = imgModal.images.filter(i => i.id !== imgId);
   172	      setImgModal({ ...imgModal, images: updatedImages });
   173	      setHouses(houses.map(h => h.id === imgModal.id ? { ...h, images: updatedImages } : h));
   174	      setSuccess("Image deleted.");
   175	    } catch (e) {
   176	      setError("Failed to delete image.");
   177	    }
   178	  };
   179	
   180	  const handleUploadKarta = async () => {
   181	    if (!kartaFile) return;
   182	    setKartaUploading(true);
   183	    setError("");
   184	    try {
   185	      const fd = new FormData();
   186	      fd.append("license_image", kartaFile);
   187	      await uploadLicenseImage(kartaModal.id, fd);
   188	      setSuccess("Ownership document uploaded successfully!");
   189	      setKartaModal(null);
   190	      setKartaFile(null);
   191	      fetchHouses();
   192	    } catch (e) {
   193	      setError("Failed to upload ownership document.");
   194	    }
   195	    setKartaUploading(false);
   196	  };
   197	
   198	  return (
   199	    <div className="max-w-5xl mx-auto px-4 pt-24 pb-8 space-y-6">
   200	      <div className="flex items-center justify-between">
   201	        <div>
   202	          <h1 className="text-2xl font-bold text-gray-800">My Houses</h1>
   203	          <p className="text-gray-500 text-sm">Manage your property listings</p>
   204	        </div>
   205	        <Button onClick={() => navigate("/create-house")}>+ Add House</Button>
   206	      </div>
   207	
   208	      {success && <Alert type="success" message={success} />}
   209	      {error && <Alert type="error" message={error} />}
   210	
   211	      {loading ? (
   212	        <div className="flex justify-center py-20">
   213	          <Spinner size={12} />
   214	        </div>
   215	      ) : houses.length === 0 ? (
   216	        <div className="text-center py-16 text-gray-400">
   217	          <div className="text-6xl mb-4">🏚</div>
   218	          <p>You haven't listed any houses yet.</p>
   219	          <Button onClick={() => navigate("/create-house")} className="mt-4">
   220	            List Your First House
   221	          </Button>
   222	        </div>
   223	      ) : (
   224	        <div className="space-y-4">
   225	          {houses.map((h) => (
   226	            <div key={h.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row gap-4">
   227	              <div className="flex-1">
   228	                <div className="flex items-start justify-between gap-2">
   229	                  <div>
   230	                    <h3 className="font-semibold text-gray-800 text-lg">{h.title}</h3>
   231	                    <p className="text-sm text-gray-500 mt-1">
   232	                      📍 {h.location} · 🛏 {h.rooms} rooms · ETB {Number(h.price).toLocaleString()}/mo
   233	                    </p>
   234	                  </div>
   235	                  <div className="flex gap-2 flex-wrap">
   236	                    <Badge label={h.status} color={h.status === "available" ? "green" : "red"} />
   237	                    <Badge label={h.is_approved ? "Approved" : "Pending"} color={h.is_approved ? "blue" : "yellow"} />
   238	                  </div>
   239	                </div>
   240	                
   241	                {h.images && h.images.length > 0 ? (
   242	                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
   243	                    {h.images.map(img => (
   244	                      <img key={img.id} src={toStorageUrl(img.image_path)} className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-200 shadow-sm" alt="" />
   245	                    ))}
   246	                  </div>
   247	                ) : (
   248	                  <div className="mt-4 text-sm text-gray-400 italic">No images uploaded</div>
   249	                )}
   250	
   251	                {h.license_image && (
   252	                  <div className="mt-3 bg-blue-50 text-blue-800 text-xs px-3 py-2 rounded-lg inline-flex items-center gap-2 border border-blue-100">
   253	                    📄 Ownership Document (Karta)
   254	                    <a href={toStorageUrl(h.license_image)} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-blue-900">View Document</a>
   255	                  </div>
   256	                )}
   257	
   258	                <div className="mt-4 flex gap-2 flex-wrap border-t pt-4">
   259	                  <Button variant="outline" onClick={() => openEdit(h)}>Edit Details</Button>
   260	                  <Button variant="outline" onClick={() => { setImgModal(h); setImagesToAdd([]); }}>Manage Images</Button>
   261	                  <Button variant="outline" onClick={() => { setKartaModal(h); setKartaFile(null); }}>Manage Karta</Button>
   262	                  <Button variant="danger" onClick={() => handleDelete(h.id)}>Delete House</Button>
   263	                </div>
   264	              </div>
   265	            </div>
   266	          ))}
   267	        </div>
   268	      )}
   269	
   270	      <Modal open={modal} onClose={() => setModal(false)} title="Edit House Details">
   271	        <div className="space-y-4">
   272	          <Input label="Title" value={form.title} onChange={setF("title")} required />
   273	          <div className="space-y-1">
   274	            <label className="block text-sm font-medium text-gray-700">Description</label>
   275	            <textarea
   276	              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
   277	              value={form.description}
   278	              onChange={(e) => setForm({ ...form, description: e.target.value })}
   279	            />
   280	          </div>
   281	          <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF("location")} required />
   282	          <div className="grid grid-cols-2 gap-3">
   283	            <Input label="Price (ETB/mo)" type="number" value={form.price} onChange={setF("price")} required />
   284	            <Input label="Rooms" type="number" min="1" value={form.rooms} onChange={setF("rooms")} required />
   285	            <Input label="Bathrooms" type="number" min="1" value={form.bathrooms} onChange={setF("bathrooms")} required />
   286	            <Input label="Area (sqm)" type="number" min="1" value={form.area} onChange={setF("area")} />
   287	            <div className="space-y-1">
   288	              <label className="block text-sm font-medium text-gray-700">Property Type</label>
   289	              <select 
   290	                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
   291	                value={form.type} onChange={setF("type")} required
   292	              >
   293	                <option value="apartment">Apartment</option>
   294	                <option value="villa">Villa</option>
   295	                <option value="condo">Condo</option>
   296	                <option value="house">House</option>
   297	                <option value="studio">Studio</option>
   298	              </select>
   299	            </div>
   300	            <div className="space-y-1">
   301	              <label className="block text-sm font-medium text-gray-700">Status</label>
   302	              <select 
   303	                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
   304	                value={form.status} onChange={setF("status")} required
   305	              >
   306	                <option value="available">Available</option>
   307	                <option value="rented">Rented</option>
   308	              </select>
   309	            </div>
   310	            <Input label="Availability Date" type="date" value={form.availability_date} onChange={setF("availability_date")} />
   311	          </div>
   312	
   313	          <div className="space-y-2">
   314	            <label className="block text-sm font-medium text-gray-700">Amenities</label>
   315	            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
   316	              {AMENITIES_LIST.map(amenity => (
   317	                <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
   318	                  <input 
   319	                    type="checkbox" 
   320	                    checked={form.amenities.includes(amenity)}
   321	                    onChange={() => toggleAmenity(amenity)}
   322	                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
   323	                  />
   324	                  {amenity}
   325	                </label>
   326	              ))}
   327	            </div>
   328	          </div>
   329	          <div className="flex gap-2 justify-end pt-2">
   330	            <Button variant="outline" onClick={() => setModal(false)}>Cancel</Button>
   331	            <Button loading={saving} onClick={handleSave}>Update</Button>
   332	          </div>
   333	        </div>
   334	      </Modal>
   335	
   336	      <Modal open={!!imgModal} onClose={() => setImgModal(null)} title="Manage House Images">
   337	        <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
   338	          {imgModal?.images?.length > 0 && (
   339	            <div>
   340	              <h4 className="text-sm font-semibold mb-3 text-gray-700">Existing Images (Drag to reorder)</h4>
   341	              <div className="grid grid-cols-3 gap-3">
   342	                {imgModal.images.map((img, idx) => (
   343	                  <div 
   344	                    key={img.id}
   345	                    draggable
   346	                    onDragStart={() => setDraggedExisting(idx)}
   347	                    onDragOver={(e) => { e.preventDefault(); handleDragOverExisting(idx); }}
   348	                    onDragEnd={handleDragEndExisting}
   349	                    className={`relative group bg-gray-100 rounded-xl overflow-hidden h-28 border-2 cursor-move ${draggedExisting === idx ? 'border-blue-500 opacity-50' : 'border-transparent shadow-sm hover:border-gray-300'}`}
   350	                  >
   351	                    <img src={toStorageUrl(img.image_path)} className="w-full h-full object-cover" alt="" />
   352	                    <button 
   353	                      onClick={() => deleteExistingImage(img.id)} 
   354	                      className="absolute top-1 right-1 bg-red-600/90 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 text-sm shadow transition-opacity hover:bg-red-700"
   355	                    >
   356	                      &times;
   357	                    </button>
   358	                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-1 py-0.5 truncate pointer-events-none">
   359	                      {img.type || 'Image'}
   360	                    </div>
   361	                  </div>
   362	                ))}
   363	              </div>
   364	            </div>
   365	          )}
   366	
   367	          <div className="border-t border-gray-200 pt-5">
   368	            <h4 className="text-sm font-semibold mb-3 text-gray-700">Add New Images</h4>
   369	            <ImageUploader images={imagesToAdd} setImages={setImagesToAdd} max={10} />
   370	            {imgUploading > 0 && imgUploading < 100 && (
   371	               <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
   372	                 <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${imgUploading}%` }}></div>
   373	               </div>
   374	            )}
   375	            <div className="flex justify-end mt-4">
   376	              <Button loading={imgUploading > 0} onClick={uploadNewImages} disabled={imagesToAdd.length === 0}>
   377	                Upload Added Images
   378	              </Button>
   379	            </div>
   380	          </div>
   381	        </div>
   382	      </Modal>
   383	
   384	      <Modal open={!!kartaModal} onClose={() => setKartaModal(null)} title="Manage Ownership Document">
   385	        <div className="space-y-4">
   386	          {kartaModal?.license_image && (
   387	            <div className="bg-green-50 text-green-800 p-3 rounded-xl border border-green-200 text-sm flex justify-between items-center">
   388	              <span>✅ A document is already uploaded.</span>
   389	              <a href={toStorageUrl(kartaModal.license_image)} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-green-900">View</a>
   390	            </div>
   391	          )}
   392	          <p className="text-sm text-gray-600">Upload a new ownership certificate or Karta to verify your property. This replaces any existing document.</p>
   393	          <input 
   394	            type="file" 
   395	            accept="image/*,.pdf" 
   396	            onChange={(e) => setKartaFile(e.target.files[0])}
   397	            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
   398	          />
   399	          <div className="flex justify-end gap-2 pt-2">
   400	            <Button variant="outline" onClick={() => setKartaModal(null)}>Cancel</Button>
   401	            <Button loading={kartaUploading} onClick={handleUploadKarta} disabled={!kartaFile}>Upload Document</Button>
   402	          </div>
   403	        </div>
   404	      </Modal>
   405	    </div>
   406	  );
   407	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: import { useNavigate } from "react-router-dom";
- Line 3: import api from "../api/axios";
- Line 4: import { uploadMultipleHouseImages, reorderImages, uploadLicenseImage } from "../services/api";
- Line 5: import {
- Line 6:   Spinner,
- Line 7:   Alert,
- Line 8:   Button,
- Line 9:   Badge,
- Line 10:   Modal,
- Line 11:   Input
- Line 12: } from "../components/UI";
- Line 13: import ImageUploader from "../components/ImageUploader";
- Line 14: import { toStorageUrl } from "../utils/media";
- Line 15: 
- Line 16: export default function MyHousesPage() {
- Line 17:   const navigate = useNavigate();
- Line 18:   const [houses, setHouses] = useState([]);
- Line 19:   const [loading, setLoading] = useState(true);
- Line 20:   const [error, setError] = useState("");
- Line 21:   const [success, setSuccess] = useState("");
- Line 22: 
- Line 23:   const [modal, setModal] = useState(false);
- Line 24:   const [editing, setEditing] = useState(null);
- Line 25:   const [form, setForm] = useState({ 
- Line 26:     title: "", description: "", price: "", location: "", rooms: "",
- Line 27:     bathrooms: "1", area: "", type: "apartment", amenities: [], availability_date: "",
- Line 28:     status: "available"
- Line 29:   });
- Line 30:   const [saving, setSaving] = useState(false);
- Line 31: 
- Line 32:   const AMENITIES_LIST = [
- Line 33:     "WiFi", "Parking", "Pool", "Gym", "Balcony", 
- Line 34:     "Furnished", "Air Conditioning", "Heating", "Security"
- Line 35:   ];
- Line 36: 
- Line 37:   const toggleAmenity = (amenity) => {
- Line 38:     setForm(prev => {
- Line 39:       const exists = prev.amenities.includes(amenity);
- Line 40:       if (exists) {
- Line 41:         return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
- Line 42:       } else {
- Line 43:         return { ...prev, amenities: [...prev.amenities, amenity] };
- Line 44:       }
- Line 45:     });
- Line 46:   };
- Line 47: 
- Line 48:   const [imgModal, setImgModal] = useState(null);
- Line 49:   const [imagesToAdd, setImagesToAdd] = useState([]);
- Line 50:   const [imgUploading, setImgUploading] = useState(0);
- Line 51:   const [draggedExisting, setDraggedExisting] = useState(null);
- Line 52: 
- Line 53:   const [kartaModal, setKartaModal] = useState(null);
- Line 54:   const [kartaFile, setKartaFile] = useState(null);
- Line 55:   const [kartaUploading, setKartaUploading] = useState(false);
- Line 56: 
- Line 57:   const fetchHouses = async () => {
- Line 58:     setLoading(true);
- Line 59:     try {
- Line 60:       const { data } = await api.get("/my-houses");
- Line 61:       setHouses(data.data || []);
- Line 62:     } catch {}
- Line 63:     setLoading(false);
- Line 64:   };
- Line 65: 
- Line 66:   useEffect(() => {
- Line 67:     fetchHouses();
- Line 68:   }, []);
- Line 69: 
- Line 70:   const openEdit = (h) => {
- Line 71:     setEditing(h.id);
- Line 72:     setForm({
- Line 73:       title: h.title,
- Line 74:       description: h.description,
- Line 75:       price: h.price,
- Line 76:       location: h.location,
- Line 77:       rooms: h.rooms,
- Line 78:       bathrooms: h.bathrooms || "1",
- Line 79:       area: h.area || "",
- Line 80:       type: h.type || "apartment",
- Line 81:       amenities: h.amenities || [],
- Line 82:       availability_date: h.availability_date || "",
- Line 83:       status: h.status || "available",
- Line 84:     });
- Line 85:     setModal(true);
- Line 86:   };
- Line 87: 
- Line 88:   const handleSave = async () => {
- Line 89:     setSaving(true);
- Line 90:     setError("");
- Line 91:     setSuccess("");
- Line 92:     try {
- Line 93:       await api.put(`/houses/${editing}`, form);
- Line 94:       setSuccess("House updated!");
- Line 95:       setModal(false);
- Line 96:       fetchHouses();
- Line 97:     } catch (e) {
- Line 98:       const msgs = e.response?.data?.errors;
- Line 99:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 100:       else setError(e.response?.data?.message || "Failed");
- Line 101:     }
- Line 102:     setSaving(false);
- Line 103:   };
- Line 104: 
- Line 105:   const handleDelete = async (id) => {
- Line 106:     if (!confirm("Delete this house?")) return;
- Line 107:     try {
- Line 108:       await api.delete(`/houses/${id}`);
- Line 109:       setSuccess("House deleted");
- Line 110:       fetchHouses();
- Line 111:     } catch (e) {
- Line 112:       setError(e.response?.data?.message || "Failed");
- Line 113:     }
- Line 114:   };
- Line 115: 
- Line 116:   const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
- Line 117: 
- Line 118:   const handleDragOverExisting = (idx) => {
- Line 119:     if (draggedExisting === null || draggedExisting === idx) return;
- Line 120:     const newImages = [...imgModal.images];
- Line 121:     const draggedItem = newImages[draggedExisting];
- Line 122:     newImages.splice(draggedExisting, 1);
- Line 123:     newImages.splice(idx, 0, draggedItem);
- Line 124:     setImgModal({ ...imgModal, images: newImages });
- Line 125:     setDraggedExisting(idx);
- Line 126:   };
- Line 127: 
- Line 128:   const handleDragEndExisting = async () => {
- Line 129:     const currentHouseId = imgModal.id;
- Line 130:     const currentImages = imgModal.images;
- Line 131:     setDraggedExisting(null);
- Line 132: 
- Line 133:     setHouses(houses.map(h => h.id === currentHouseId ? { ...h, images: currentImages } : h));
- Line 134:     try {
- Line 135:       await reorderImages(currentHouseId, currentImages.map(i => i.id));
- Line 136:     } catch (e) {
- Line 137:       setError("Failed to save new image order.");
- Line 138:       fetchHouses();
- Line 139:     }
- Line 140:   };
- Line 141: 
- Line 142:   const uploadNewImages = async () => {
- Line 143:     if (imagesToAdd.length === 0) return;
- Line 144:     setImgUploading(1);
- Line 145:     const fd = new FormData();
- Line 146:     imagesToAdd.forEach((img, idx) => {
- Line 147:       fd.append(`images[${idx}][file]`, img.file);
- Line 148:       fd.append(`images[${idx}][type]`, img.type);
- Line 149:     });
- Line 150: 
- Line 151:     try {
- Line 152:       await uploadMultipleHouseImages(imgModal.id, fd, (e) => {
- Line 153:         if (e.total) setImgUploading(Math.round((e.loaded * 100) / e.total));
- Line 154:       });
- Line 155:       setSuccess("Images uploaded successfully!");
- Line 156:       setImagesToAdd([]);
- Line 157:       setImgUploading(0);
- Line 158:       fetchHouses();
- Line 159:       const { data } = await api.get(`/houses/${imgModal.id}`);
- Line 160:       setImgModal(data);
- Line 161:     } catch (e) {
- Line 162:       setError("Failed to upload images.");
- Line 163:       setImgUploading(0);
- Line 164:     }
- Line 165:   };
- Line 166: 
- Line 167:   const deleteExistingImage = async (imgId) => {
- Line 168:     if (!confirm("Are you sure you want to delete this image?")) return;
- Line 169:     try {
- Line 170:       await api.delete(`/houses/${imgModal.id}/images/${imgId}`);
- Line 171:       const updatedImages = imgModal.images.filter(i => i.id !== imgId);
- Line 172:       setImgModal({ ...imgModal, images: updatedImages });
- Line 173:       setHouses(houses.map(h => h.id === imgModal.id ? { ...h, images: updatedImages } : h));
- Line 174:       setSuccess("Image deleted.");
- Line 175:     } catch (e) {
- Line 176:       setError("Failed to delete image.");
- Line 177:     }
- Line 178:   };
- Line 179: 
- Line 180:   const handleUploadKarta = async () => {
- Line 181:     if (!kartaFile) return;
- Line 182:     setKartaUploading(true);
- Line 183:     setError("");
- Line 184:     try {
- Line 185:       const fd = new FormData();
- Line 186:       fd.append("license_image", kartaFile);
- Line 187:       await uploadLicenseImage(kartaModal.id, fd);
- Line 188:       setSuccess("Ownership document uploaded successfully!");
- Line 189:       setKartaModal(null);
- Line 190:       setKartaFile(null);
- Line 191:       fetchHouses();
- Line 192:     } catch (e) {
- Line 193:       setError("Failed to upload ownership document.");
- Line 194:     }
- Line 195:     setKartaUploading(false);
- Line 196:   };
- Line 197: 
- Line 198:   return (
- Line 199:     <div className="max-w-5xl mx-auto px-4 pt-24 pb-8 space-y-6">
- Line 200:       <div className="flex items-center justify-between">
- Line 201:         <div>
- Line 202:           <h1 className="text-2xl font-bold text-gray-800">My Houses</h1>
- Line 203:           <p className="text-gray-500 text-sm">Manage your property listings</p>
- Line 204:         </div>
- Line 205:         <Button onClick={() => navigate("/create-house")}>+ Add House</Button>
- Line 206:       </div>
- Line 207: 
- Line 208:       {success && <Alert type="success" message={success} />}
- Line 209:       {error && <Alert type="error" message={error} />}
- Line 210: 
- Line 211:       {loading ? (
- Line 212:         <div className="flex justify-center py-20">
- Line 213:           <Spinner size={12} />
- Line 214:         </div>
- Line 215:       ) : houses.length === 0 ? (
- Line 216:         <div className="text-center py-16 text-gray-400">
- Line 217:           <div className="text-6xl mb-4">🏚</div>
- Line 218:           <p>You haven't listed any houses yet.</p>
- Line 219:           <Button onClick={() => navigate("/create-house")} className="mt-4">
- Line 220:             List Your First House
- Line 221:           </Button>
- Line 222:         </div>
- Line 223:       ) : (
- Line 224:         <div className="space-y-4">
- Line 225:           {houses.map((h) => (
- Line 226:             <div key={h.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row gap-4">
- Line 227:               <div className="flex-1">
- Line 228:                 <div className="flex items-start justify-between gap-2">
- Line 229:                   <div>
- Line 230:                     <h3 className="font-semibold text-gray-800 text-lg">{h.title}</h3>
- Line 231:                     <p className="text-sm text-gray-500 mt-1">
- Line 232:                       📍 {h.location} · 🛏 {h.rooms} rooms · ETB {Number(h.price).toLocaleString()}/mo
- Line 233:                     </p>
- Line 234:                   </div>
- Line 235:                   <div className="flex gap-2 flex-wrap">
- Line 236:                     <Badge label={h.status} color={h.status === "available" ? "green" : "red"} />
- Line 237:                     <Badge label={h.is_approved ? "Approved" : "Pending"} color={h.is_approved ? "blue" : "yellow"} />
- Line 238:                   </div>
- Line 239:                 </div>
- Line 240:                 
- Line 241:                 {h.images && h.images.length > 0 ? (
- Line 242:                   <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
- Line 243:                     {h.images.map(img => (
- Line 244:                       <img key={img.id} src={toStorageUrl(img.image_path)} className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-200 shadow-sm" alt="" />
- Line 245:                     ))}
- Line 246:                   </div>
- Line 247:                 ) : (
- Line 248:                   <div className="mt-4 text-sm text-gray-400 italic">No images uploaded</div>
- Line 249:                 )}
- Line 250: 
- Line 251:                 {h.license_image && (
- Line 252:                   <div className="mt-3 bg-blue-50 text-blue-800 text-xs px-3 py-2 rounded-lg inline-flex items-center gap-2 border border-blue-100">
- Line 253:                     📄 Ownership Document (Karta)
- Line 254:                     <a href={toStorageUrl(h.license_image)} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-blue-900">View Document</a>
- Line 255:                   </div>
- Line 256:                 )}
- Line 257: 
- Line 258:                 <div className="mt-4 flex gap-2 flex-wrap border-t pt-4">
- Line 259:                   <Button variant="outline" onClick={() => openEdit(h)}>Edit Details</Button>
- Line 260:                   <Button variant="outline" onClick={() => { setImgModal(h); setImagesToAdd([]); }}>Manage Images</Button>
- Line 261:                   <Button variant="outline" onClick={() => { setKartaModal(h); setKartaFile(null); }}>Manage Karta</Button>
- Line 262:                   <Button variant="danger" onClick={() => handleDelete(h.id)}>Delete House</Button>
- Line 263:                 </div>
- Line 264:               </div>
- Line 265:             </div>
- Line 266:           ))}
- Line 267:         </div>
- Line 268:       )}
- Line 269: 
- Line 270:       <Modal open={modal} onClose={() => setModal(false)} title="Edit House Details">
- Line 271:         <div className="space-y-4">
- Line 272:           <Input label="Title" value={form.title} onChange={setF("title")} required />
- Line 273:           <div className="space-y-1">
- Line 274:             <label className="block text-sm font-medium text-gray-700">Description</label>
- Line 275:             <textarea
- Line 276:               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
- Line 277:               value={form.description}
- Line 278:               onChange={(e) => setForm({ ...form, description: e.target.value })}
- Line 279:             />
- Line 280:           </div>
- Line 281:           <Input label="Location (Kebele / Kifle Ketema)" value={form.location} onChange={setF("location")} required />
- Line 282:           <div className="grid grid-cols-2 gap-3">
- Line 283:             <Input label="Price (ETB/mo)" type="number" value={form.price} onChange={setF("price")} required />
- Line 284:             <Input label="Rooms" type="number" min="1" value={form.rooms} onChange={setF("rooms")} required />
- Line 285:             <Input label="Bathrooms" type="number" min="1" value={form.bathrooms} onChange={setF("bathrooms")} required />
- Line 286:             <Input label="Area (sqm)" type="number" min="1" value={form.area} onChange={setF("area")} />
- Line 287:             <div className="space-y-1">
- Line 288:               <label className="block text-sm font-medium text-gray-700">Property Type</label>
- Line 289:               <select 
- Line 290:                 className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
- Line 291:                 value={form.type} onChange={setF("type")} required
- Line 292:               >
- Line 293:                 <option value="apartment">Apartment</option>
- Line 294:                 <option value="villa">Villa</option>
- Line 295:                 <option value="condo">Condo</option>
- Line 296:                 <option value="house">House</option>
- Line 297:                 <option value="studio">Studio</option>
- Line 298:               </select>
- Line 299:             </div>
- Line 300:             <div className="space-y-1">
- Line 301:               <label className="block text-sm font-medium text-gray-700">Status</label>
- Line 302:               <select 
- Line 303:                 className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
- Line 304:                 value={form.status} onChange={setF("status")} required
- Line 305:               >
- Line 306:                 <option value="available">Available</option>
- Line 307:                 <option value="rented">Rented</option>
- Line 308:               </select>
- Line 309:             </div>
- Line 310:             <Input label="Availability Date" type="date" value={form.availability_date} onChange={setF("availability_date")} />
- Line 311:           </div>
- Line 312: 
- Line 313:           <div className="space-y-2">
- Line 314:             <label className="block text-sm font-medium text-gray-700">Amenities</label>
- Line 315:             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
- Line 316:               {AMENITIES_LIST.map(amenity => (
- Line 317:                 <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
- Line 318:                   <input 
- Line 319:                     type="checkbox" 
- Line 320:                     checked={form.amenities.includes(amenity)}
- Line 321:                     onChange={() => toggleAmenity(amenity)}
- Line 322:                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
- Line 323:                   />
- Line 324:                   {amenity}
- Line 325:                 </label>
- Line 326:               ))}
- Line 327:             </div>
- Line 328:           </div>
- Line 329:           <div className="flex gap-2 justify-end pt-2">
- Line 330:             <Button variant="outline" onClick={() => setModal(false)}>Cancel</Button>
- Line 331:             <Button loading={saving} onClick={handleSave}>Update</Button>
- Line 332:           </div>
- Line 333:         </div>
- Line 334:       </Modal>
- Line 335: 
- Line 336:       <Modal open={!!imgModal} onClose={() => setImgModal(null)} title="Manage House Images">
- Line 337:         <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
- Line 338:           {imgModal?.images?.length > 0 && (
- Line 339:             <div>
- Line 340:               <h4 className="text-sm font-semibold mb-3 text-gray-700">Existing Images (Drag to reorder)</h4>
- Line 341:               <div className="grid grid-cols-3 gap-3">
- Line 342:                 {imgModal.images.map((img, idx) => (
- Line 343:                   <div 
- Line 344:                     key={img.id}
- Line 345:                     draggable
- Line 346:                     onDragStart={() => setDraggedExisting(idx)}
- Line 347:                     onDragOver={(e) => { e.preventDefault(); handleDragOverExisting(idx); }}
- Line 348:                     onDragEnd={handleDragEndExisting}
- Line 349:                     className={`relative group bg-gray-100 rounded-xl overflow-hidden h-28 border-2 cursor-move ${draggedExisting === idx ? 'border-blue-500 opacity-50' : 'border-transparent shadow-sm hover:border-gray-300'}`}
- Line 350:                   >
- Line 351:                     <img src={toStorageUrl(img.image_path)} className="w-full h-full object-cover" alt="" />
- Line 352:                     <button 
- Line 353:                       onClick={() => deleteExistingImage(img.id)} 
- Line 354:                       className="absolute top-1 right-1 bg-red-600/90 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 text-sm shadow transition-opacity hover:bg-red-700"
- Line 355:                     >
- Line 356:                       &times;
- Line 357:                     </button>
- Line 358:                     <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-1 py-0.5 truncate pointer-events-none">
- Line 359:                       {img.type || 'Image'}
- Line 360:                     </div>
- Line 361:                   </div>
- Line 362:                 ))}
- Line 363:               </div>
- Line 364:             </div>
- Line 365:           )}
- Line 366: 
- Line 367:           <div className="border-t border-gray-200 pt-5">
- Line 368:             <h4 className="text-sm font-semibold mb-3 text-gray-700">Add New Images</h4>
- Line 369:             <ImageUploader images={imagesToAdd} setImages={setImagesToAdd} max={10} />
- Line 370:             {imgUploading > 0 && imgUploading < 100 && (
- Line 371:                <div className="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
- Line 372:                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${imgUploading}%` }}></div>
- Line 373:                </div>
- Line 374:             )}
- Line 375:             <div className="flex justify-end mt-4">
- Line 376:               <Button loading={imgUploading > 0} onClick={uploadNewImages} disabled={imagesToAdd.length === 0}>
- Line 377:                 Upload Added Images
- Line 378:               </Button>
- Line 379:             </div>
- Line 380:           </div>
- Line 381:         </div>
- Line 382:       </Modal>
- Line 383: 
- Line 384:       <Modal open={!!kartaModal} onClose={() => setKartaModal(null)} title="Manage Ownership Document">
- Line 385:         <div className="space-y-4">
- Line 386:           {kartaModal?.license_image && (
- Line 387:             <div className="bg-green-50 text-green-800 p-3 rounded-xl border border-green-200 text-sm flex justify-between items-center">
- Line 388:               <span>✅ A document is already uploaded.</span>
- Line 389:               <a href={toStorageUrl(kartaModal.license_image)} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-green-900">View</a>
- Line 390:             </div>
- Line 391:           )}
- Line 392:           <p className="text-sm text-gray-600">Upload a new ownership certificate or Karta to verify your property. This replaces any existing document.</p>
- Line 393:           <input 
- Line 394:             type="file" 
- Line 395:             accept="image/*,.pdf" 
- Line 396:             onChange={(e) => setKartaFile(e.target.files[0])}
- Line 397:             className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
- Line 398:           />
- Line 399:           <div className="flex justify-end gap-2 pt-2">
- Line 400:             <Button variant="outline" onClick={() => setKartaModal(null)}>Cancel</Button>
- Line 401:             <Button loading={kartaUploading} onClick={handleUploadKarta} disabled={!kartaFile}>Upload Document</Button>
- Line 402:           </div>
- Line 403:         </div>
- Line 404:       </Modal>
- Line 405:     </div>
- Line 406:   );
- Line 407: }

