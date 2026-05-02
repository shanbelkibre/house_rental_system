import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import { Input, Button, Alert, Card } from "../components/UI";
import UserAvatar from "../components/UserAvatar";
import Dropzone from "../components/Dropzone";

export default function ProfilePage() {
  const { user, refreshUser, logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });
  const [pwForm, setPwForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [imgFile, setImgFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [saving, setSaving] = useState(false);
  const [changingPw, setChangingPw] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const setPw = (k) => (e) => setPwForm({ ...pwForm, [k]: e.target.value });

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("phone", form.phone);
      if (imgFile) fd.append("profile_image", imgFile);
      else if (imgFile === false) fd.append("remove_image", "1");

      await api.post("/profile?_method=PUT", fd, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        }
      });
      await refreshUser();
      setSuccess("Profile updated!");
      setImgFile(null);
      setPreviewUrl(null);
      setUploadProgress(0);
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
      setUploadProgress(0);
    }
    setSaving(false);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    setChangingPw(true);
    setError("");
    setSuccess("");
    try {
      await api.put("/change-password", pwForm);
      setSuccess("Password changed!");
      setPwForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
    }
    setChangingPw(false);
  };

  const roleColor = {
    admin: "text-purple-600",
    owner: "text-blue-600",
    renter: "text-green-600",
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
      {success && <Alert type="success" message={success} />}
      {error && <Alert type="error" message={error} />}

      <Card className="flex items-center gap-4">
        <UserAvatar user={user} size="lg" />
        <div className="flex-1">
          <p className="text-xl font-bold text-gray-800">{user?.name}</p>
          <p className={`text-sm font-semibold capitalize ${roleColor[user?.role]}`}>
            {user?.role}
          </p>
          <p className="text-sm text-gray-500">{user?.email}</p>
          {user?.is_verified && (
            <span className="text-xs text-green-600 font-medium">✓ Verified</span>
          )}
        </div>
        <Button onClick={handleLogout} variant="danger">
          Logout
        </Button>
      </Card>

      <Card>
        <h2 className="font-semibold text-gray-700 mb-4">Edit Profile</h2>
        <form onSubmit={saveProfile} className="space-y-4">
          <Input label="Full Name" value={form.name} onChange={setF("name")} />
          <Input label="Phone" value={form.phone} onChange={setF("phone")} />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <Dropzone 
              onDrop={(file) => {
                setImgFile(file);
                setPreviewUrl(URL.createObjectURL(file));
              }} 
              accept="image/*" 
              multiple={false}
            >
              {({ isDragActive }) => (
                <div className={`flex items-center gap-4 p-4 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
                  <UserAvatar 
                    user={previewUrl ? { ...user, profile_image: previewUrl } : (imgFile === false ? { ...user, profile_image: null } : user)} 
                    size="md" 
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">
                      {isDragActive ? "Drop image here" : "Click or drag to change photo"}
                    </p>
                    {(imgFile || (user?.profile_image && imgFile !== false)) && (
                      <button 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); setImgFile(false); setPreviewUrl(null); }}
                        className="text-xs text-red-600 hover:underline mt-1 font-medium"
                      >
                        Remove photo
                      </button>
                    )}
                  </div>
                </div>
              )}
            </Dropzone>
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            )}
          </div>

          <Button type="submit" loading={saving}>
            Save Changes
          </Button>
        </form>
      </Card>

      <Card>
        <h2 className="font-semibold text-gray-700 mb-4">Change Password</h2>
        <form onSubmit={changePassword} className="space-y-3">
          <Input
            label="Current Password"
            type="password"
            value={pwForm.current_password}
            onChange={setPw("current_password")}
            required
          />
          <Input
            label="New Password"
            type="password"
            value={pwForm.new_password}
            onChange={setPw("new_password")}
            required
          />
          <Input
            label="Confirm New Password"
            type="password"
            value={pwForm.new_password_confirmation}
            onChange={setPw("new_password_confirmation")}
            required
          />
          <Button type="submit" loading={changingPw} variant="secondary">
            Change Password
          </Button>
        </form>
      </Card>
    </div>
  );
}
