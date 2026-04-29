import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import { Input, Button, Alert, Card } from "../components/UI";
import { toStorageUrl } from "../utils/media";

export default function ProfilePage() {
  const { user, refreshUser } = useAuth();
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
  const [saving, setSaving] = useState(false);
  const [changingPw, setChangingPw] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const setPw = (k) => (e) => setPwForm({ ...pwForm, [k]: e.target.value });

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
      await api.put("/profile", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await refreshUser();
      setSuccess("Profile updated!");
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
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

      {/* Avatar */}
      <Card className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
          {user?.profile_image ? (
            <img
              src={toStorageUrl(user.profile_image)}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">
              👤
            </div>
          )}
        </div>
        <div>
          <p className="text-xl font-bold text-gray-800">{user?.name}</p>
          <p
            className={`text-sm font-semibold capitalize ${roleColor[user?.role]}`}
          >
            {user?.role}
          </p>
          <p className="text-sm text-gray-500">{user?.email}</p>
          {user?.is_verified && (
            <span className="text-xs text-green-600 font-medium">
              ✓ Verified
            </span>
          )}
        </div>
      </Card>

      {/* Edit profile */}
      <Card>
        <h2 className="font-semibold text-gray-700 mb-4">Edit Profile</h2>
        <form onSubmit={saveProfile} className="space-y-3">
          <Input label="Full Name" value={form.name} onChange={setF("name")} />
          <Input label="Phone" value={form.phone} onChange={setF("phone")} />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImgFile(e.target.files[0])}
              className="text-sm text-gray-600"
            />
          </div>
          <Button type="submit" loading={saving}>
            Save Changes
          </Button>
        </form>
      </Card>

      {/* Change password */}
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
