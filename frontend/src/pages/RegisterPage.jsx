import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Input, Button, Alert, Select } from "../components/UI";

export default function RegisterPage() {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "renter",
    phone: "",
  });
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(form);
      navigate("/");
    } catch (err) {
      const msgs = err.response?.data?.errors;
      if (msgs) setError(Object.values(msgs).flat().join(" "));
      else setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-1">
          <div className="text-4xl">🏠</div>
          <h1 className="text-2xl font-bold text-gray-800">Create account</h1>
          <p className="text-sm text-gray-500">
            Join the House Rental platform
          </p>
        </div>

        <Alert type="error" message={error} />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Abebe Kebede"
            value={form.name}
            onChange={set("name")}
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            required
          />
          <Input
            label="Phone (optional)"
            placeholder="+251 9..."
            value={form.phone}
            onChange={set("phone")}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Min 6 characters"
            value={form.password}
            onChange={set("password")}
            required
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Repeat password"
            value={form.password_confirmation}
            onChange={set("password_confirmation")}
            required
          />

          <Select label="I am a..." value={form.role} onChange={set("role")}>
            <option value="renter">Renter – I want to rent a house</option>
            <option value="owner">Owner – I want to list my house</option>
          </Select>

          <Button type="submit" loading={loading} className="w-full">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
