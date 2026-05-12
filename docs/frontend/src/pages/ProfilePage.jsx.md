# ProfilePage.jsx

## Code (numbered)

```jsx
     1	import { useState } from "react";
     2	import { useNavigate } from "react-router-dom";
     3	import { useAuth } from "../context/AuthContext";
     4	import api from "../api/axios";
     5	import { Input, Button, Alert, Card } from "../components/UI";
     6	import UserAvatar from "../components/UserAvatar";
     7	import Dropzone from "../components/Dropzone";
     8	
     9	export default function ProfilePage() {
    10	  const { user, refreshUser, logout } = useAuth();
    11	  const navigate = useNavigate();
    12	  const [form, setForm] = useState({
    13	    name: user?.name || "",
    14	    phone: user?.phone || "",
    15	  });
    16	  const [pwForm, setPwForm] = useState({
    17	    current_password: "",
    18	    new_password: "",
    19	    new_password_confirmation: "",
    20	  });
    21	  const [imgFile, setImgFile] = useState(null);
    22	  const [previewUrl, setPreviewUrl] = useState(null);
    23	  const [saving, setSaving] = useState(false);
    24	  const [changingPw, setChangingPw] = useState(false);
    25	  const [error, setError] = useState("");
    26	  const [success, setSuccess] = useState("");
    27	  const [uploadProgress, setUploadProgress] = useState(0);
    28	
    29	  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    30	  const setPw = (k) => (e) => setPwForm({ ...pwForm, [k]: e.target.value });
    31	
    32	  const handleLogout = async () => {
    33	    await logout();
    34	    navigate("/login");
    35	  };
    36	
    37	  const saveProfile = async (e) => {
    38	    e.preventDefault();
    39	    setSaving(true);
    40	    setError("");
    41	    setSuccess("");
    42	    try {
    43	      const fd = new FormData();
    44	      fd.append("name", form.name);
    45	      fd.append("phone", form.phone);
    46	      if (imgFile) fd.append("profile_image", imgFile);
    47	      else if (imgFile === false) fd.append("remove_image", "1");
    48	
    49	      await api.post("/profile?_method=PUT", fd, {
    50	        headers: { "Content-Type": "multipart/form-data" },
    51	        onUploadProgress: (progressEvent) => {
    52	          if (progressEvent.total) {
    53	            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    54	            setUploadProgress(percentCompleted);
    55	          }
    56	        }
    57	      });
    58	      await refreshUser();
    59	      setSuccess("Profile updated!");
    60	      setImgFile(null);
    61	      setPreviewUrl(null);
    62	      setUploadProgress(0);
    63	    } catch (e) {
    64	      setError(e.response?.data?.message || "Failed");
    65	      setUploadProgress(0);
    66	    }
    67	    setSaving(false);
    68	  };
    69	
    70	  const changePassword = async (e) => {
    71	    e.preventDefault();
    72	    setChangingPw(true);
    73	    setError("");
    74	    setSuccess("");
    75	    try {
    76	      await api.put("/change-password", pwForm);
    77	      setSuccess("Password changed!");
    78	      setPwForm({
    79	        current_password: "",
    80	        new_password: "",
    81	        new_password_confirmation: "",
    82	      });
    83	    } catch (e) {
    84	      setError(e.response?.data?.message || "Failed");
    85	    }
    86	    setChangingPw(false);
    87	  };
    88	
    89	  const roleColor = {
    90	    admin: "text-purple-600",
    91	    owner: "text-blue-600",
    92	    renter: "text-green-600",
    93	  };
    94	
    95	  return (
    96	    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
    97	      <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
    98	      {success && <Alert type="success" message={success} />}
    99	      {error && <Alert type="error" message={error} />}
   100	
   101	      <Card className="flex items-center gap-4">
   102	        <UserAvatar user={user} size="lg" />
   103	        <div className="flex-1">
   104	          <p className="text-xl font-bold text-gray-800">{user?.name}</p>
   105	          <p className={`text-sm font-semibold capitalize ${roleColor[user?.role]}`}>
   106	            {user?.role}
   107	          </p>
   108	          <p className="text-sm text-gray-500">{user?.email}</p>
   109	          {user?.is_verified && (
   110	            <span className="text-xs text-green-600 font-medium">✓ Verified</span>
   111	          )}
   112	        </div>
   113	        <Button onClick={handleLogout} variant="danger">
   114	          Logout
   115	        </Button>
   116	      </Card>
   117	
   118	      <Card>
   119	        <h2 className="font-semibold text-gray-700 mb-4">Edit Profile</h2>
   120	        <form onSubmit={saveProfile} className="space-y-4">
   121	          <Input label="Full Name" value={form.name} onChange={setF("name")} />
   122	          <Input label="Phone" value={form.phone} onChange={setF("phone")} />
   123	          
   124	          <div className="space-y-2">
   125	            <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
   126	            <Dropzone 
   127	              onDrop={(file) => {
   128	                setImgFile(file);
   129	                setPreviewUrl(URL.createObjectURL(file));
   130	              }} 
   131	              accept="image/*" 
   132	              multiple={false}
   133	            >
   134	              {({ isDragActive }) => (
   135	                <div className={`flex items-center gap-4 p-4 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
   136	                  <UserAvatar 
   137	                    user={previewUrl ? { ...user, profile_image: previewUrl } : (imgFile === false ? { ...user, profile_image: null } : user)} 
   138	                    size="md" 
   139	                  />
   140	                  <div className="flex-1">
   141	                    <p className="text-sm font-medium text-gray-700">
   142	                      {isDragActive ? "Drop image here" : "Click or drag to change photo"}
   143	                    </p>
   144	                    {(imgFile || (user?.profile_image && imgFile !== false)) && (
   145	                      <button 
   146	                        type="button" 
   147	                        onClick={(e) => { e.stopPropagation(); setImgFile(false); setPreviewUrl(null); }}
   148	                        className="text-xs text-red-600 hover:underline mt-1 font-medium"
   149	                      >
   150	                        Remove photo
   151	                      </button>
   152	                    )}
   153	                  </div>
   154	                </div>
   155	              )}
   156	            </Dropzone>
   157	            {uploadProgress > 0 && uploadProgress < 100 && (
   158	              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
   159	                <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
   160	              </div>
   161	            )}
   162	          </div>
   163	
   164	          <Button type="submit" loading={saving}>
   165	            Save Changes
   166	          </Button>
   167	        </form>
   168	      </Card>
   169	
   170	      <Card>
   171	        <h2 className="font-semibold text-gray-700 mb-4">Change Password</h2>
   172	        <form onSubmit={changePassword} className="space-y-3">
   173	          <Input
   174	            label="Current Password"
   175	            type="password"
   176	            value={pwForm.current_password}
   177	            onChange={setPw("current_password")}
   178	            required
   179	          />
   180	          <Input
   181	            label="New Password"
   182	            type="password"
   183	            value={pwForm.new_password}
   184	            onChange={setPw("new_password")}
   185	            required
   186	          />
   187	          <Input
   188	            label="Confirm New Password"
   189	            type="password"
   190	            value={pwForm.new_password_confirmation}
   191	            onChange={setPw("new_password_confirmation")}
   192	            required
   193	          />
   194	          <Button type="submit" loading={changingPw} variant="secondary">
   195	            Change Password
   196	          </Button>
   197	        </form>
   198	      </Card>
   199	    </div>
   200	  );
   201	}
```

## Line-by-line explanation

- Line 1: import { useState } from "react";
- Line 2: import { useNavigate } from "react-router-dom";
- Line 3: import { useAuth } from "../context/AuthContext";
- Line 4: import api from "../api/axios";
- Line 5: import { Input, Button, Alert, Card } from "../components/UI";
- Line 6: import UserAvatar from "../components/UserAvatar";
- Line 7: import Dropzone from "../components/Dropzone";
- Line 8: 
- Line 9: export default function ProfilePage() {
- Line 10:   const { user, refreshUser, logout } = useAuth();
- Line 11:   const navigate = useNavigate();
- Line 12:   const [form, setForm] = useState({
- Line 13:     name: user?.name || "",
- Line 14:     phone: user?.phone || "",
- Line 15:   });
- Line 16:   const [pwForm, setPwForm] = useState({
- Line 17:     current_password: "",
- Line 18:     new_password: "",
- Line 19:     new_password_confirmation: "",
- Line 20:   });
- Line 21:   const [imgFile, setImgFile] = useState(null);
- Line 22:   const [previewUrl, setPreviewUrl] = useState(null);
- Line 23:   const [saving, setSaving] = useState(false);
- Line 24:   const [changingPw, setChangingPw] = useState(false);
- Line 25:   const [error, setError] = useState("");
- Line 26:   const [success, setSuccess] = useState("");
- Line 27:   const [uploadProgress, setUploadProgress] = useState(0);
- Line 28: 
- Line 29:   const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
- Line 30:   const setPw = (k) => (e) => setPwForm({ ...pwForm, [k]: e.target.value });
- Line 31: 
- Line 32:   const handleLogout = async () => {
- Line 33:     await logout();
- Line 34:     navigate("/login");
- Line 35:   };
- Line 36: 
- Line 37:   const saveProfile = async (e) => {
- Line 38:     e.preventDefault();
- Line 39:     setSaving(true);
- Line 40:     setError("");
- Line 41:     setSuccess("");
- Line 42:     try {
- Line 43:       const fd = new FormData();
- Line 44:       fd.append("name", form.name);
- Line 45:       fd.append("phone", form.phone);
- Line 46:       if (imgFile) fd.append("profile_image", imgFile);
- Line 47:       else if (imgFile === false) fd.append("remove_image", "1");
- Line 48: 
- Line 49:       await api.post("/profile?_method=PUT", fd, {
- Line 50:         headers: { "Content-Type": "multipart/form-data" },
- Line 51:         onUploadProgress: (progressEvent) => {
- Line 52:           if (progressEvent.total) {
- Line 53:             const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
- Line 54:             setUploadProgress(percentCompleted);
- Line 55:           }
- Line 56:         }
- Line 57:       });
- Line 58:       await refreshUser();
- Line 59:       setSuccess("Profile updated!");
- Line 60:       setImgFile(null);
- Line 61:       setPreviewUrl(null);
- Line 62:       setUploadProgress(0);
- Line 63:     } catch (e) {
- Line 64:       setError(e.response?.data?.message || "Failed");
- Line 65:       setUploadProgress(0);
- Line 66:     }
- Line 67:     setSaving(false);
- Line 68:   };
- Line 69: 
- Line 70:   const changePassword = async (e) => {
- Line 71:     e.preventDefault();
- Line 72:     setChangingPw(true);
- Line 73:     setError("");
- Line 74:     setSuccess("");
- Line 75:     try {
- Line 76:       await api.put("/change-password", pwForm);
- Line 77:       setSuccess("Password changed!");
- Line 78:       setPwForm({
- Line 79:         current_password: "",
- Line 80:         new_password: "",
- Line 81:         new_password_confirmation: "",
- Line 82:       });
- Line 83:     } catch (e) {
- Line 84:       setError(e.response?.data?.message || "Failed");
- Line 85:     }
- Line 86:     setChangingPw(false);
- Line 87:   };
- Line 88: 
- Line 89:   const roleColor = {
- Line 90:     admin: "text-purple-600",
- Line 91:     owner: "text-blue-600",
- Line 92:     renter: "text-green-600",
- Line 93:   };
- Line 94: 
- Line 95:   return (
- Line 96:     <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
- Line 97:       <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
- Line 98:       {success && <Alert type="success" message={success} />}
- Line 99:       {error && <Alert type="error" message={error} />}
- Line 100: 
- Line 101:       <Card className="flex items-center gap-4">
- Line 102:         <UserAvatar user={user} size="lg" />
- Line 103:         <div className="flex-1">
- Line 104:           <p className="text-xl font-bold text-gray-800">{user?.name}</p>
- Line 105:           <p className={`text-sm font-semibold capitalize ${roleColor[user?.role]}`}>
- Line 106:             {user?.role}
- Line 107:           </p>
- Line 108:           <p className="text-sm text-gray-500">{user?.email}</p>
- Line 109:           {user?.is_verified && (
- Line 110:             <span className="text-xs text-green-600 font-medium">✓ Verified</span>
- Line 111:           )}
- Line 112:         </div>
- Line 113:         <Button onClick={handleLogout} variant="danger">
- Line 114:           Logout
- Line 115:         </Button>
- Line 116:       </Card>
- Line 117: 
- Line 118:       <Card>
- Line 119:         <h2 className="font-semibold text-gray-700 mb-4">Edit Profile</h2>
- Line 120:         <form onSubmit={saveProfile} className="space-y-4">
- Line 121:           <Input label="Full Name" value={form.name} onChange={setF("name")} />
- Line 122:           <Input label="Phone" value={form.phone} onChange={setF("phone")} />
- Line 123:           
- Line 124:           <div className="space-y-2">
- Line 125:             <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
- Line 126:             <Dropzone 
- Line 127:               onDrop={(file) => {
- Line 128:                 setImgFile(file);
- Line 129:                 setPreviewUrl(URL.createObjectURL(file));
- Line 130:               }} 
- Line 131:               accept="image/*" 
- Line 132:               multiple={false}
- Line 133:             >
- Line 134:               {({ isDragActive }) => (
- Line 135:                 <div className={`flex items-center gap-4 p-4 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
- Line 136:                   <UserAvatar 
- Line 137:                     user={previewUrl ? { ...user, profile_image: previewUrl } : (imgFile === false ? { ...user, profile_image: null } : user)} 
- Line 138:                     size="md" 
- Line 139:                   />
- Line 140:                   <div className="flex-1">
- Line 141:                     <p className="text-sm font-medium text-gray-700">
- Line 142:                       {isDragActive ? "Drop image here" : "Click or drag to change photo"}
- Line 143:                     </p>
- Line 144:                     {(imgFile || (user?.profile_image && imgFile !== false)) && (
- Line 145:                       <button 
- Line 146:                         type="button" 
- Line 147:                         onClick={(e) => { e.stopPropagation(); setImgFile(false); setPreviewUrl(null); }}
- Line 148:                         className="text-xs text-red-600 hover:underline mt-1 font-medium"
- Line 149:                       >
- Line 150:                         Remove photo
- Line 151:                       </button>
- Line 152:                     )}
- Line 153:                   </div>
- Line 154:                 </div>
- Line 155:               )}
- Line 156:             </Dropzone>
- Line 157:             {uploadProgress > 0 && uploadProgress < 100 && (
- Line 158:               <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
- Line 159:                 <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
- Line 160:               </div>
- Line 161:             )}
- Line 162:           </div>
- Line 163: 
- Line 164:           <Button type="submit" loading={saving}>
- Line 165:             Save Changes
- Line 166:           </Button>
- Line 167:         </form>
- Line 168:       </Card>
- Line 169: 
- Line 170:       <Card>
- Line 171:         <h2 className="font-semibold text-gray-700 mb-4">Change Password</h2>
- Line 172:         <form onSubmit={changePassword} className="space-y-3">
- Line 173:           <Input
- Line 174:             label="Current Password"
- Line 175:             type="password"
- Line 176:             value={pwForm.current_password}
- Line 177:             onChange={setPw("current_password")}
- Line 178:             required
- Line 179:           />
- Line 180:           <Input
- Line 181:             label="New Password"
- Line 182:             type="password"
- Line 183:             value={pwForm.new_password}
- Line 184:             onChange={setPw("new_password")}
- Line 185:             required
- Line 186:           />
- Line 187:           <Input
- Line 188:             label="Confirm New Password"
- Line 189:             type="password"
- Line 190:             value={pwForm.new_password_confirmation}
- Line 191:             onChange={setPw("new_password_confirmation")}
- Line 192:             required
- Line 193:           />
- Line 194:           <Button type="submit" loading={changingPw} variant="secondary">
- Line 195:             Change Password
- Line 196:           </Button>
- Line 197:         </form>
- Line 198:       </Card>
- Line 199:     </div>
- Line 200:   );
- Line 201: }

