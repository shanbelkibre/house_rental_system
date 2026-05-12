# HouseDetailPage.jsx

## Code (numbered)

```jsx
     1	import { useState, useEffect } from "react";
     2	import { useParams, useNavigate } from "react-router-dom";
     3	import api from "../api/axios";
     4	import { getMyAgreements } from "../services/api";
     5	import { useAuth } from "../context/AuthContext";
     6	import {
     7	  Spinner,
     8	  Alert,
     9	  Button,
    10	  Badge,
    11	  StarRating,
    12	  Card,
    13	  Modal,
    14	  Input,
    15	} from "../components/UI";
    16	import ImageGallery from "../components/ImageGallery";
    17	import { toStorageUrl } from "../utils/media";
    18	
    19	export default function HouseDetailPage() {
    20	  const { id } = useParams();
    21	  const { user } = useAuth();
    22	  const navigate = useNavigate();
    23	
    24	  const [house, setHouse] = useState(null);
    25	  const [reviews, setReviews] = useState([]);
    26	  const [avgRating, setAvgRating] = useState(0);
    27	  const [loading, setLoading] = useState(true);
    28	  const [error, setError] = useState("");
    29	  const [success, setSuccess] = useState("");
    30	  const [canReview, setCanReview] = useState(false);
    31	
    32	  const [reqModal, setReqModal] = useState(false);
    33	  const [reqMsg, setReqMsg] = useState("");
    34	
    35	  const [visitModal, setVisitModal] = useState(false);
    36	  const [visitDate, setVisitDate] = useState("");
    37	
    38	  const [revModal, setRevModal] = useState(false);
    39	  const [revRating, setRevRating] = useState(5);
    40	  const [revComment, setRevComment] = useState("");
    41	
    42	  useEffect(() => {
    43	    (async () => {
    44	      try {
    45	        const [hRes, rRes] = await Promise.all([
    46	          api.get(`/houses/${id}`),
    47	          api.get(`/houses/${id}/reviews`),
    48	        ]);
    49	        setHouse(hRes.data);
    50	        setReviews(rRes.data.reviews?.data || []);
    51	        setAvgRating(rRes.data.average_rating || 0);
    52	      } catch {
    53	        setError("House not found");
    54	      } finally {
    55	        setLoading(false);
    56	      }
    57	
    58	      if (user?.role === "renter") {
    59	        try {
    60	          const agreementsRes = await getMyAgreements();
    61	          const list = agreementsRes.data?.data || [];
    62	          const confirmed = list.some(
    63	            (agreement) =>
    64	              String(agreement.house?.id) === String(id) &&
    65	              agreement.status === "confirmed",
    66	          );
    67	          setCanReview(confirmed);
    68	        } catch {
    69	          setCanReview(false);
    70	        }
    71	      } else {
    72	        setCanReview(false);
    73	      }
    74	    })();
    75	  }, [id, user?.role]);
    76	
    77	  const sendRequest = async () => {
    78	    setError("");
    79	    try {
    80	      await api.post("/requests", { house_id: id, message: reqMsg });
    81	      setSuccess("Rental request sent!");
    82	      setReqModal(false);
    83	    } catch (e) {
    84	      const msgs = e.response?.data?.errors;
    85	      if (msgs) setError(Object.values(msgs).flat().join(" "));
    86	      else setError(e.response?.data?.message || "Failed");
    87	    }
    88	  };
    89	
    90	  const scheduleVisit = async () => {
    91	    setError("");
    92	    try {
    93	      await api.post("/visits", { house_id: id, visit_date: visitDate });
    94	      setSuccess("Visit scheduled!");
    95	      setVisitModal(false);
    96	    } catch (e) {
    97	      const msgs = e.response?.data?.errors;
    98	      if (msgs) setError(Object.values(msgs).flat().join(" "));
    99	      else setError(e.response?.data?.message || "Failed");
   100	    }
   101	  };
   102	
   103	  const submitReview = async () => {
   104	    setError("");
   105	    try {
   106	      await api.post("/reviews", {
   107	        house_id: id,
   108	        rating: revRating,
   109	        comment: revComment,
   110	      });
   111	      setSuccess("Review submitted!");
   112	      setRevModal(false);
   113	      setRevComment("");
   114	      const { data } = await api.get(`/houses/${id}/reviews`);
   115	      setReviews(data.reviews?.data || []);
   116	      setAvgRating(data.average_rating || 0);
   117	    } catch (e) {
   118	      const msgs = e.response?.data?.errors;
   119	      if (msgs) setError(Object.values(msgs).flat().join(" "));
   120	      else setError(e.response?.data?.message || "Failed");
   121	    }
   122	  };
   123	
   124	  if (loading)
   125	    return (
   126	      <div className="flex justify-center py-20">
   127	        <Spinner size={12} />
   128	      </div>
   129	    );
   130	
   131	  if (error && !house)
   132	    return (
   133	      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
   134	        <Alert type="error" message={error} />
   135	        <Button
   136	          onClick={() => navigate("/houses")}
   137	          variant="outline"
   138	          className="mt-4"
   139	        >
   140	          ← Back to listings
   141	        </Button>
   142	      </div>
   143	    );
   144	
   145	  const images = house.images || [];
   146	
   147	  return (
   148	    <div className="max-w-5xl mx-auto px-4 pt-24 pb-8 space-y-6">
   149	      {success && <Alert type="success" message={success} />}
   150	      {error && <Alert type="error" message={error} />}
   151	
   152	      <ImageGallery
   153	        images={images}
   154	        isOwner={user?.id === house.owner?.id}
   155	        onDelete={async (imgId) => {
   156	          if (!confirm("Delete this image?")) return;
   157	          try {
   158	            await api.delete(`/houses/${house.id}/images/${imgId}`);
   159	            setHouse((prev) => ({
   160	              ...prev,
   161	              images: prev.images.filter((i) => i.id !== imgId),
   162	            }));
   163	            setSuccess("Image deleted.");
   164	          } catch (e) {
   165	            setError("Failed to delete image.");
   166	          }
   167	        }}
   168	        onSetPrimary={async (imgId) => {
   169	          try {
   170	            await api.put(`/houses/${house.id}/images/${imgId}/primary`);
   171	            setHouse((prev) => {
   172	              const newImgs = [...prev.images];
   173	              const idx = newImgs.findIndex((i) => i.id === imgId);
   174	              const [item] = newImgs.splice(idx, 1);
   175	              newImgs.unshift(item);
   176	              return { ...prev, images: newImgs };
   177	            });
   178	            setSuccess("Primary image updated.");
   179	          } catch (e) {
   180	            setError("Failed to set primary image.");
   181	          }
   182	        }}
   183	      />
   184	
   185	      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   186	        <div className="md:col-span-2 space-y-4">
   187	          <div className="flex items-start justify-between gap-4">
   188	            <div>
   189	              <div className="flex items-center gap-3">
   190	                <h1 className="text-2xl font-bold text-gray-800">
   191	                  {house.title}
   192	                </h1>
   193	                {house.type && (
   194	                  <Badge
   195	                    label={
   196	                      house.type.charAt(0).toUpperCase() + house.type.slice(1)
   197	                    }
   198	                    color="gray"
   199	                  />
   200	                )}
   201	              </div>
   202	              <p className="text-gray-500 mt-1">📍 {house.location}</p>
   203	            </div>
   204	            <Badge
   205	              label={house.status === "available" ? "Available" : "Rented"}
   206	              color={house.status === "available" ? "green" : "red"}
   207	            />
   208	          </div>
   209	
   210	          <div className="flex flex-wrap items-center gap-4">
   211	            <span className="text-3xl font-bold text-blue-600">
   212	              ETB {Number(house.price).toLocaleString()}
   213	              <span className="text-base font-normal text-gray-400">/mo</span>
   214	            </span>
   215	            <span className="text-gray-500">
   216	              🛏 {house.rooms} room{house.rooms !== 1 ? "s" : ""}
   217	            </span>
   218	            <span className="text-gray-500">
   219	              🛁 {house.bathrooms || 1} bath
   220	              {(house.bathrooms || 1) !== 1 ? "s" : ""}
   221	            </span>
   222	            {house.area && (
   223	              <span className="text-gray-500">📐 {house.area} sqm</span>
   224	            )}
   225	            <span className="flex items-center gap-1">
   226	              <StarRating value={Math.round(avgRating)} />
   227	              <span className="text-sm text-gray-500">({avgRating})</span>
   228	            </span>
   229	          </div>
   230	
   231	          {house.availability_date && (
   232	            <p className="text-sm font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
   233	              📅 Available from:{" "}
   234	              {new Date(house.availability_date).toLocaleDateString()}
   235	            </p>
   236	          )}
   237	
   238	          {house.amenities && house.amenities.length > 0 && (
   239	            <Card>
   240	              <h2 className="font-semibold text-gray-700 mb-3">Amenities</h2>
   241	              <div className="flex flex-wrap gap-2">
   242	                {house.amenities.map((amenity) => (
   243	                  <span
   244	                    key={amenity}
   245	                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
   246	                  >
   247	                    {amenity}
   248	                  </span>
   249	                ))}
   250	              </div>
   251	            </Card>
   252	          )}
   253	
   254	          <Card>
   255	            <h2 className="font-semibold text-gray-700 mb-2">Description</h2>
   256	            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
   257	              {house.description}
   258	            </p>
   259	          </Card>
   260	
   261	          <Card>
   262	            <h2 className="font-semibold text-gray-700 mb-3">
   263	              Reviews ({reviews.length})
   264	            </h2>
   265	            {reviews.length === 0 ? (
   266	              <p className="text-sm text-gray-400">No reviews yet.</p>
   267	            ) : (
   268	              reviews.map((r) => (
   269	                <div
   270	                  key={r.id}
   271	                  className="border-b border-gray-50 pb-3 mb-3 last:border-0 last:mb-0"
   272	                >
   273	                  <div className="flex items-center gap-2 mb-1">
   274	                    <span className="text-sm font-medium text-gray-700">
   275	                      {r.renter?.name}
   276	                    </span>
   277	                    <StarRating value={r.rating} />
   278	                  </div>
   279	                  <p className="text-sm text-gray-600">{r.comment}</p>
   280	                </div>
   281	              ))
   282	            )}
   283	          </Card>
   284	        </div>
   285	
   286	        <div className="space-y-4">
   287	          <Card>
   288	            <p className="text-sm font-medium text-gray-500 mb-1">Owner</p>
   289	            <p className="font-semibold text-gray-800">{house.owner?.name}</p>
   290	            {house.owner?.phone && (
   291	              <p className="text-sm text-gray-500 mt-1">
   292	                📞 {house.owner.phone}
   293	              </p>
   294	            )}
   295	          </Card>
   296	
   297	          {(user?.role === "admin" || user?.id === house.owner?.id) &&
   298	            house.license_image && (
   299	              <Card>
   300	                <h2 className="font-semibold text-gray-700 mb-2">
   301	                  Ownership Document (Karta)
   302	                </h2>
   303	                <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
   304	                  {house.license_image.endsWith(".pdf") ? (
   305	                    <a
   306	                      href={toStorageUrl(house.license_image)}
   307	                      target="_blank"
   308	                      rel="noreferrer"
   309	                      className="text-blue-600 hover:underline flex items-center gap-2 text-sm"
   310	                    >
   311	                      📄 View PDF Document
   312	                    </a>
   313	                  ) : (
   314	                    <a
   315	                      href={toStorageUrl(house.license_image)}
   316	                      target="_blank"
   317	                      rel="noreferrer"
   318	                      title="Click to view full size"
   319	                    >
   320	                      <img
   321	                        src={toStorageUrl(house.license_image)}
   322	                        alt="House License/Karta"
   323	                        className="max-w-full h-auto rounded cursor-pointer hover:opacity-90 transition-opacity"
   324	                      />
   325	                    </a>
   326	                  )}
   327	                </div>
   328	              </Card>
   329	            )}
   330	
   331	          {user?.role === "renter" && house.status === "available" && (
   332	            <Card className="space-y-3">
   333	              <Button onClick={() => setReqModal(true)} className="w-full">
   334	                📋 Request to Rent
   335	              </Button>
   336	              <Button
   337	                onClick={() => setVisitModal(true)}
   338	                variant="outline"
   339	                className="w-full"
   340	              >
   341	                📅 Schedule Visit
   342	              </Button>
   343	              {canReview && (
   344	                <Button
   345	                  onClick={() => setRevModal(true)}
   346	                  variant="secondary"
   347	                  className="w-full"
   348	                >
   349	                  ⭐ Leave Review
   350	                </Button>
   351	              )}
   352	            </Card>
   353	          )}
   354	
   355	          {user?.role === "renter" &&
   356	            house.status !== "available" &&
   357	            canReview && (
   358	              <Card className="space-y-3">
   359	                <Button
   360	                  onClick={() => setRevModal(true)}
   361	                  variant="secondary"
   362	                  className="w-full"
   363	                >
   364	                  ⭐ Leave Review
   365	                </Button>
   366	              </Card>
   367	            )}
   368	
   369	          {!user && (
   370	            <Card>
   371	              <p className="text-sm text-gray-500 text-center mb-2">
   372	                Login to rent or visit
   373	              </p>
   374	              <Button onClick={() => navigate("/login")} className="w-full">
   375	                Login
   376	              </Button>
   377	            </Card>
   378	          )}
   379	        </div>
   380	      </div>
   381	
   382	      <Modal
   383	        open={reqModal}
   384	        onClose={() => setReqModal(false)}
   385	        title="Send Rental Request"
   386	      >
   387	        <div className="space-y-4">
   388	          <textarea
   389	            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
   390	            placeholder="Optional message to the owner..."
   391	            value={reqMsg}
   392	            onChange={(e) => setReqMsg(e.target.value)}
   393	          />
   394	          <div className="flex gap-2 justify-end">
   395	            <Button variant="outline" onClick={() => setReqModal(false)}>
   396	              Cancel
   397	            </Button>
   398	            <Button onClick={sendRequest}>Send Request</Button>
   399	          </div>
   400	        </div>
   401	      </Modal>
   402	
   403	      <Modal
   404	        open={visitModal}
   405	        onClose={() => setVisitModal(false)}
   406	        title="Schedule a Visit"
   407	      >
   408	        <div className="space-y-4">
   409	          <Input
   410	            label="Visit Date & Time"
   411	            type="datetime-local"
   412	            value={visitDate}
   413	            onChange={(e) => setVisitDate(e.target.value)}
   414	          />
   415	          <div className="flex gap-2 justify-end">
   416	            <Button variant="outline" onClick={() => setVisitModal(false)}>
   417	              Cancel
   418	            </Button>
   419	            <Button onClick={scheduleVisit}>Schedule</Button>
   420	          </div>
   421	        </div>
   422	      </Modal>
   423	
   424	      <Modal
   425	        open={revModal}
   426	        onClose={() => setRevModal(false)}
   427	        title="Leave a Review"
   428	      >
   429	        <div className="space-y-4">
   430	          <div>
   431	            <label className="block text-sm font-medium text-gray-700 mb-1">
   432	              Rating
   433	            </label>
   434	            <div className="flex gap-2">
   435	              {[1, 2, 3, 4, 5].map((n) => (
   436	                <button
   437	                  key={n}
   438	                  onClick={() => setRevRating(n)}
   439	                  className={`text-2xl ${n <= revRating ? "text-yellow-400" : "text-gray-300"}`}
   440	                >
   441	                  ★
   442	                </button>
   443	              ))}
   444	            </div>
   445	          </div>
   446	          <div>
   447	            <label className="block text-sm font-medium text-gray-700 mb-1">
   448	              Comment
   449	            </label>
   450	            <textarea
   451	              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
   452	              value={revComment}
   453	              onChange={(e) => setRevComment(e.target.value)}
   454	            />
   455	          </div>
   456	          <div className="flex gap-2 justify-end">
   457	            <Button variant="outline" onClick={() => setRevModal(false)}>
   458	              Cancel
   459	            </Button>
   460	            <Button onClick={submitReview}>Submit Review</Button>
   461	          </div>
   462	        </div>
   463	      </Modal>
   464	    </div>
   465	  );
   466	}
```

## Line-by-line explanation

- Line 1: import { useState, useEffect } from "react";
- Line 2: import { useParams, useNavigate } from "react-router-dom";
- Line 3: import api from "../api/axios";
- Line 4: import { getMyAgreements } from "../services/api";
- Line 5: import { useAuth } from "../context/AuthContext";
- Line 6: import {
- Line 7:   Spinner,
- Line 8:   Alert,
- Line 9:   Button,
- Line 10:   Badge,
- Line 11:   StarRating,
- Line 12:   Card,
- Line 13:   Modal,
- Line 14:   Input,
- Line 15: } from "../components/UI";
- Line 16: import ImageGallery from "../components/ImageGallery";
- Line 17: import { toStorageUrl } from "../utils/media";
- Line 18: 
- Line 19: export default function HouseDetailPage() {
- Line 20:   const { id } = useParams();
- Line 21:   const { user } = useAuth();
- Line 22:   const navigate = useNavigate();
- Line 23: 
- Line 24:   const [house, setHouse] = useState(null);
- Line 25:   const [reviews, setReviews] = useState([]);
- Line 26:   const [avgRating, setAvgRating] = useState(0);
- Line 27:   const [loading, setLoading] = useState(true);
- Line 28:   const [error, setError] = useState("");
- Line 29:   const [success, setSuccess] = useState("");
- Line 30:   const [canReview, setCanReview] = useState(false);
- Line 31: 
- Line 32:   const [reqModal, setReqModal] = useState(false);
- Line 33:   const [reqMsg, setReqMsg] = useState("");
- Line 34: 
- Line 35:   const [visitModal, setVisitModal] = useState(false);
- Line 36:   const [visitDate, setVisitDate] = useState("");
- Line 37: 
- Line 38:   const [revModal, setRevModal] = useState(false);
- Line 39:   const [revRating, setRevRating] = useState(5);
- Line 40:   const [revComment, setRevComment] = useState("");
- Line 41: 
- Line 42:   useEffect(() => {
- Line 43:     (async () => {
- Line 44:       try {
- Line 45:         const [hRes, rRes] = await Promise.all([
- Line 46:           api.get(`/houses/${id}`),
- Line 47:           api.get(`/houses/${id}/reviews`),
- Line 48:         ]);
- Line 49:         setHouse(hRes.data);
- Line 50:         setReviews(rRes.data.reviews?.data || []);
- Line 51:         setAvgRating(rRes.data.average_rating || 0);
- Line 52:       } catch {
- Line 53:         setError("House not found");
- Line 54:       } finally {
- Line 55:         setLoading(false);
- Line 56:       }
- Line 57: 
- Line 58:       if (user?.role === "renter") {
- Line 59:         try {
- Line 60:           const agreementsRes = await getMyAgreements();
- Line 61:           const list = agreementsRes.data?.data || [];
- Line 62:           const confirmed = list.some(
- Line 63:             (agreement) =>
- Line 64:               String(agreement.house?.id) === String(id) &&
- Line 65:               agreement.status === "confirmed",
- Line 66:           );
- Line 67:           setCanReview(confirmed);
- Line 68:         } catch {
- Line 69:           setCanReview(false);
- Line 70:         }
- Line 71:       } else {
- Line 72:         setCanReview(false);
- Line 73:       }
- Line 74:     })();
- Line 75:   }, [id, user?.role]);
- Line 76: 
- Line 77:   const sendRequest = async () => {
- Line 78:     setError("");
- Line 79:     try {
- Line 80:       await api.post("/requests", { house_id: id, message: reqMsg });
- Line 81:       setSuccess("Rental request sent!");
- Line 82:       setReqModal(false);
- Line 83:     } catch (e) {
- Line 84:       const msgs = e.response?.data?.errors;
- Line 85:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 86:       else setError(e.response?.data?.message || "Failed");
- Line 87:     }
- Line 88:   };
- Line 89: 
- Line 90:   const scheduleVisit = async () => {
- Line 91:     setError("");
- Line 92:     try {
- Line 93:       await api.post("/visits", { house_id: id, visit_date: visitDate });
- Line 94:       setSuccess("Visit scheduled!");
- Line 95:       setVisitModal(false);
- Line 96:     } catch (e) {
- Line 97:       const msgs = e.response?.data?.errors;
- Line 98:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 99:       else setError(e.response?.data?.message || "Failed");
- Line 100:     }
- Line 101:   };
- Line 102: 
- Line 103:   const submitReview = async () => {
- Line 104:     setError("");
- Line 105:     try {
- Line 106:       await api.post("/reviews", {
- Line 107:         house_id: id,
- Line 108:         rating: revRating,
- Line 109:         comment: revComment,
- Line 110:       });
- Line 111:       setSuccess("Review submitted!");
- Line 112:       setRevModal(false);
- Line 113:       setRevComment("");
- Line 114:       const { data } = await api.get(`/houses/${id}/reviews`);
- Line 115:       setReviews(data.reviews?.data || []);
- Line 116:       setAvgRating(data.average_rating || 0);
- Line 117:     } catch (e) {
- Line 118:       const msgs = e.response?.data?.errors;
- Line 119:       if (msgs) setError(Object.values(msgs).flat().join(" "));
- Line 120:       else setError(e.response?.data?.message || "Failed");
- Line 121:     }
- Line 122:   };
- Line 123: 
- Line 124:   if (loading)
- Line 125:     return (
- Line 126:       <div className="flex justify-center py-20">
- Line 127:         <Spinner size={12} />
- Line 128:       </div>
- Line 129:     );
- Line 130: 
- Line 131:   if (error && !house)
- Line 132:     return (
- Line 133:       <div className="max-w-2xl mx-auto px-4 py-16 text-center">
- Line 134:         <Alert type="error" message={error} />
- Line 135:         <Button
- Line 136:           onClick={() => navigate("/houses")}
- Line 137:           variant="outline"
- Line 138:           className="mt-4"
- Line 139:         >
- Line 140:           ← Back to listings
- Line 141:         </Button>
- Line 142:       </div>
- Line 143:     );
- Line 144: 
- Line 145:   const images = house.images || [];
- Line 146: 
- Line 147:   return (
- Line 148:     <div className="max-w-5xl mx-auto px-4 pt-24 pb-8 space-y-6">
- Line 149:       {success && <Alert type="success" message={success} />}
- Line 150:       {error && <Alert type="error" message={error} />}
- Line 151: 
- Line 152:       <ImageGallery
- Line 153:         images={images}
- Line 154:         isOwner={user?.id === house.owner?.id}
- Line 155:         onDelete={async (imgId) => {
- Line 156:           if (!confirm("Delete this image?")) return;
- Line 157:           try {
- Line 158:             await api.delete(`/houses/${house.id}/images/${imgId}`);
- Line 159:             setHouse((prev) => ({
- Line 160:               ...prev,
- Line 161:               images: prev.images.filter((i) => i.id !== imgId),
- Line 162:             }));
- Line 163:             setSuccess("Image deleted.");
- Line 164:           } catch (e) {
- Line 165:             setError("Failed to delete image.");
- Line 166:           }
- Line 167:         }}
- Line 168:         onSetPrimary={async (imgId) => {
- Line 169:           try {
- Line 170:             await api.put(`/houses/${house.id}/images/${imgId}/primary`);
- Line 171:             setHouse((prev) => {
- Line 172:               const newImgs = [...prev.images];
- Line 173:               const idx = newImgs.findIndex((i) => i.id === imgId);
- Line 174:               const [item] = newImgs.splice(idx, 1);
- Line 175:               newImgs.unshift(item);
- Line 176:               return { ...prev, images: newImgs };
- Line 177:             });
- Line 178:             setSuccess("Primary image updated.");
- Line 179:           } catch (e) {
- Line 180:             setError("Failed to set primary image.");
- Line 181:           }
- Line 182:         }}
- Line 183:       />
- Line 184: 
- Line 185:       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
- Line 186:         <div className="md:col-span-2 space-y-4">
- Line 187:           <div className="flex items-start justify-between gap-4">
- Line 188:             <div>
- Line 189:               <div className="flex items-center gap-3">
- Line 190:                 <h1 className="text-2xl font-bold text-gray-800">
- Line 191:                   {house.title}
- Line 192:                 </h1>
- Line 193:                 {house.type && (
- Line 194:                   <Badge
- Line 195:                     label={
- Line 196:                       house.type.charAt(0).toUpperCase() + house.type.slice(1)
- Line 197:                     }
- Line 198:                     color="gray"
- Line 199:                   />
- Line 200:                 )}
- Line 201:               </div>
- Line 202:               <p className="text-gray-500 mt-1">📍 {house.location}</p>
- Line 203:             </div>
- Line 204:             <Badge
- Line 205:               label={house.status === "available" ? "Available" : "Rented"}
- Line 206:               color={house.status === "available" ? "green" : "red"}
- Line 207:             />
- Line 208:           </div>
- Line 209: 
- Line 210:           <div className="flex flex-wrap items-center gap-4">
- Line 211:             <span className="text-3xl font-bold text-blue-600">
- Line 212:               ETB {Number(house.price).toLocaleString()}
- Line 213:               <span className="text-base font-normal text-gray-400">/mo</span>
- Line 214:             </span>
- Line 215:             <span className="text-gray-500">
- Line 216:               🛏 {house.rooms} room{house.rooms !== 1 ? "s" : ""}
- Line 217:             </span>
- Line 218:             <span className="text-gray-500">
- Line 219:               🛁 {house.bathrooms || 1} bath
- Line 220:               {(house.bathrooms || 1) !== 1 ? "s" : ""}
- Line 221:             </span>
- Line 222:             {house.area && (
- Line 223:               <span className="text-gray-500">📐 {house.area} sqm</span>
- Line 224:             )}
- Line 225:             <span className="flex items-center gap-1">
- Line 226:               <StarRating value={Math.round(avgRating)} />
- Line 227:               <span className="text-sm text-gray-500">({avgRating})</span>
- Line 228:             </span>
- Line 229:           </div>
- Line 230: 
- Line 231:           {house.availability_date && (
- Line 232:             <p className="text-sm font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
- Line 233:               📅 Available from:{" "}
- Line 234:               {new Date(house.availability_date).toLocaleDateString()}
- Line 235:             </p>
- Line 236:           )}
- Line 237: 
- Line 238:           {house.amenities && house.amenities.length > 0 && (
- Line 239:             <Card>
- Line 240:               <h2 className="font-semibold text-gray-700 mb-3">Amenities</h2>
- Line 241:               <div className="flex flex-wrap gap-2">
- Line 242:                 {house.amenities.map((amenity) => (
- Line 243:                   <span
- Line 244:                     key={amenity}
- Line 245:                     className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
- Line 246:                   >
- Line 247:                     {amenity}
- Line 248:                   </span>
- Line 249:                 ))}
- Line 250:               </div>
- Line 251:             </Card>
- Line 252:           )}
- Line 253: 
- Line 254:           <Card>
- Line 255:             <h2 className="font-semibold text-gray-700 mb-2">Description</h2>
- Line 256:             <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
- Line 257:               {house.description}
- Line 258:             </p>
- Line 259:           </Card>
- Line 260: 
- Line 261:           <Card>
- Line 262:             <h2 className="font-semibold text-gray-700 mb-3">
- Line 263:               Reviews ({reviews.length})
- Line 264:             </h2>
- Line 265:             {reviews.length === 0 ? (
- Line 266:               <p className="text-sm text-gray-400">No reviews yet.</p>
- Line 267:             ) : (
- Line 268:               reviews.map((r) => (
- Line 269:                 <div
- Line 270:                   key={r.id}
- Line 271:                   className="border-b border-gray-50 pb-3 mb-3 last:border-0 last:mb-0"
- Line 272:                 >
- Line 273:                   <div className="flex items-center gap-2 mb-1">
- Line 274:                     <span className="text-sm font-medium text-gray-700">
- Line 275:                       {r.renter?.name}
- Line 276:                     </span>
- Line 277:                     <StarRating value={r.rating} />
- Line 278:                   </div>
- Line 279:                   <p className="text-sm text-gray-600">{r.comment}</p>
- Line 280:                 </div>
- Line 281:               ))
- Line 282:             )}
- Line 283:           </Card>
- Line 284:         </div>
- Line 285: 
- Line 286:         <div className="space-y-4">
- Line 287:           <Card>
- Line 288:             <p className="text-sm font-medium text-gray-500 mb-1">Owner</p>
- Line 289:             <p className="font-semibold text-gray-800">{house.owner?.name}</p>
- Line 290:             {house.owner?.phone && (
- Line 291:               <p className="text-sm text-gray-500 mt-1">
- Line 292:                 📞 {house.owner.phone}
- Line 293:               </p>
- Line 294:             )}
- Line 295:           </Card>
- Line 296: 
- Line 297:           {(user?.role === "admin" || user?.id === house.owner?.id) &&
- Line 298:             house.license_image && (
- Line 299:               <Card>
- Line 300:                 <h2 className="font-semibold text-gray-700 mb-2">
- Line 301:                   Ownership Document (Karta)
- Line 302:                 </h2>
- Line 303:                 <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
- Line 304:                   {house.license_image.endsWith(".pdf") ? (
- Line 305:                     <a
- Line 306:                       href={toStorageUrl(house.license_image)}
- Line 307:                       target="_blank"
- Line 308:                       rel="noreferrer"
- Line 309:                       className="text-blue-600 hover:underline flex items-center gap-2 text-sm"
- Line 310:                     >
- Line 311:                       📄 View PDF Document
- Line 312:                     </a>
- Line 313:                   ) : (
- Line 314:                     <a
- Line 315:                       href={toStorageUrl(house.license_image)}
- Line 316:                       target="_blank"
- Line 317:                       rel="noreferrer"
- Line 318:                       title="Click to view full size"
- Line 319:                     >
- Line 320:                       <img
- Line 321:                         src={toStorageUrl(house.license_image)}
- Line 322:                         alt="House License/Karta"
- Line 323:                         className="max-w-full h-auto rounded cursor-pointer hover:opacity-90 transition-opacity"
- Line 324:                       />
- Line 325:                     </a>
- Line 326:                   )}
- Line 327:                 </div>
- Line 328:               </Card>
- Line 329:             )}
- Line 330: 
- Line 331:           {user?.role === "renter" && house.status === "available" && (
- Line 332:             <Card className="space-y-3">
- Line 333:               <Button onClick={() => setReqModal(true)} className="w-full">
- Line 334:                 📋 Request to Rent
- Line 335:               </Button>
- Line 336:               <Button
- Line 337:                 onClick={() => setVisitModal(true)}
- Line 338:                 variant="outline"
- Line 339:                 className="w-full"
- Line 340:               >
- Line 341:                 📅 Schedule Visit
- Line 342:               </Button>
- Line 343:               {canReview && (
- Line 344:                 <Button
- Line 345:                   onClick={() => setRevModal(true)}
- Line 346:                   variant="secondary"
- Line 347:                   className="w-full"
- Line 348:                 >
- Line 349:                   ⭐ Leave Review
- Line 350:                 </Button>
- Line 351:               )}
- Line 352:             </Card>
- Line 353:           )}
- Line 354: 
- Line 355:           {user?.role === "renter" &&
- Line 356:             house.status !== "available" &&
- Line 357:             canReview && (
- Line 358:               <Card className="space-y-3">
- Line 359:                 <Button
- Line 360:                   onClick={() => setRevModal(true)}
- Line 361:                   variant="secondary"
- Line 362:                   className="w-full"
- Line 363:                 >
- Line 364:                   ⭐ Leave Review
- Line 365:                 </Button>
- Line 366:               </Card>
- Line 367:             )}
- Line 368: 
- Line 369:           {!user && (
- Line 370:             <Card>
- Line 371:               <p className="text-sm text-gray-500 text-center mb-2">
- Line 372:                 Login to rent or visit
- Line 373:               </p>
- Line 374:               <Button onClick={() => navigate("/login")} className="w-full">
- Line 375:                 Login
- Line 376:               </Button>
- Line 377:             </Card>
- Line 378:           )}
- Line 379:         </div>
- Line 380:       </div>
- Line 381: 
- Line 382:       <Modal
- Line 383:         open={reqModal}
- Line 384:         onClose={() => setReqModal(false)}
- Line 385:         title="Send Rental Request"
- Line 386:       >
- Line 387:         <div className="space-y-4">
- Line 388:           <textarea
- Line 389:             className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
- Line 390:             placeholder="Optional message to the owner..."
- Line 391:             value={reqMsg}
- Line 392:             onChange={(e) => setReqMsg(e.target.value)}
- Line 393:           />
- Line 394:           <div className="flex gap-2 justify-end">
- Line 395:             <Button variant="outline" onClick={() => setReqModal(false)}>
- Line 396:               Cancel
- Line 397:             </Button>
- Line 398:             <Button onClick={sendRequest}>Send Request</Button>
- Line 399:           </div>
- Line 400:         </div>
- Line 401:       </Modal>
- Line 402: 
- Line 403:       <Modal
- Line 404:         open={visitModal}
- Line 405:         onClose={() => setVisitModal(false)}
- Line 406:         title="Schedule a Visit"
- Line 407:       >
- Line 408:         <div className="space-y-4">
- Line 409:           <Input
- Line 410:             label="Visit Date & Time"
- Line 411:             type="datetime-local"
- Line 412:             value={visitDate}
- Line 413:             onChange={(e) => setVisitDate(e.target.value)}
- Line 414:           />
- Line 415:           <div className="flex gap-2 justify-end">
- Line 416:             <Button variant="outline" onClick={() => setVisitModal(false)}>
- Line 417:               Cancel
- Line 418:             </Button>
- Line 419:             <Button onClick={scheduleVisit}>Schedule</Button>
- Line 420:           </div>
- Line 421:         </div>
- Line 422:       </Modal>
- Line 423: 
- Line 424:       <Modal
- Line 425:         open={revModal}
- Line 426:         onClose={() => setRevModal(false)}
- Line 427:         title="Leave a Review"
- Line 428:       >
- Line 429:         <div className="space-y-4">
- Line 430:           <div>
- Line 431:             <label className="block text-sm font-medium text-gray-700 mb-1">
- Line 432:               Rating
- Line 433:             </label>
- Line 434:             <div className="flex gap-2">
- Line 435:               {[1, 2, 3, 4, 5].map((n) => (
- Line 436:                 <button
- Line 437:                   key={n}
- Line 438:                   onClick={() => setRevRating(n)}
- Line 439:                   className={`text-2xl ${n <= revRating ? "text-yellow-400" : "text-gray-300"}`}
- Line 440:                 >
- Line 441:                   ★
- Line 442:                 </button>
- Line 443:               ))}
- Line 444:             </div>
- Line 445:           </div>
- Line 446:           <div>
- Line 447:             <label className="block text-sm font-medium text-gray-700 mb-1">
- Line 448:               Comment
- Line 449:             </label>
- Line 450:             <textarea
- Line 451:               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
- Line 452:               value={revComment}
- Line 453:               onChange={(e) => setRevComment(e.target.value)}
- Line 454:             />
- Line 455:           </div>
- Line 456:           <div className="flex gap-2 justify-end">
- Line 457:             <Button variant="outline" onClick={() => setRevModal(false)}>
- Line 458:               Cancel
- Line 459:             </Button>
- Line 460:             <Button onClick={submitReview}>Submit Review</Button>
- Line 461:           </div>
- Line 462:         </div>
- Line 463:       </Modal>
- Line 464:     </div>
- Line 465:   );
- Line 466: }

