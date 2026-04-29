import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUser,
  getMyHouses,
  getOwnerRequests,
  getMyRequests,
  getSubscription,
  getAdminStats,
  deleteHouse,
  updateRequest,
} from "../services/api";

// --- Owner Dashboard ---
const OwnerDashboard = () => {
  const [houses, setHouses] = useState([]);
  const [houseTotal, setHouseTotal] = useState(0);
  const [requests, setRequests] = useState([]);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    getSubscription()
      .then((res) => setSubscription(res.data))
      .catch(console.error);
    getMyHouses()
      .then((res) => {
        const items = res.data?.data || [];
        setHouses(items.slice(0, 5));
        setHouseTotal(res.data?.total ?? items.length);
      })
      .catch(console.error);
    getOwnerRequests()
      .then((res) => setRequests(res.data?.data || []))
      .catch(console.error);
  }, []);

  const handleAcceptRequest = async (id) => {
    try {
      await updateRequest(id, "accepted");
      setRequests(
        requests.map((r) => (r.id === id ? { ...r, status: "accepted" } : r)),
      );
    } catch (err) {
      alert("Failed to update request");
    }
  };

  const handleDeleteHouse = async (id) => {
    if (!window.confirm("Delete this house?")) return;
    try {
      await deleteHouse(id);
      setHouses(houses.filter((h) => h.id !== id));
    } catch (err) {
      alert("Failed to delete house");
    }
  };

  return (
    <div className="owner-dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Subscription Status</h3>
          <div className="value">
            {subscription?.is_active ? "✅ Active" : "❌ Expired"}
          </div>
        </div>
        <div className="stat-card">
          <h3>Total Listings</h3>
          <div className="value">{houseTotal}</div>
        </div>
        <div className="stat-card">
          <h3>Pending Requests</h3>
          <div className="value">
            {requests.filter((r) => r.status === "pending").length}
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-btn">➕ Add House</button>
        <button className="action-btn secondary">📋 My Listings</button>
      </div>

      <h3>Recent Listings</h3>
      {houses.length === 0 ? (
        <div className="empty-state">No houses listed yet.</div>
      ) : (
        <div className="houses-grid">
          {houses.map((house) => (
            <div key={house.id} className="house-card">
              <div className="house-details">
                <h4 className="house-title">{house.title}</h4>
                <div className="house-price">{house.price} ETB</div>
                <button
                  className="action-btn secondary"
                  style={{ marginTop: "10px", width: "100%" }}
                  onClick={() => handleDeleteHouse(house.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginTop: "40px" }}>Recent Rental Requests</h3>
      {requests.length === 0 ? (
        <div className="empty-state">No rental requests to show.</div>
      ) : (
        <table className="requests-table">
          <thead>
            <tr>
              <th>House</th>
              <th>Renter</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.house?.title}</td>
                <td>{req.renter?.name}</td>
                <td>
                  <span className={`badge badge-${req.status}`}>
                    {req.status}
                  </span>
                </td>
                <td>
                  {req.status === "pending" && (
                    <button
                      className="action-btn"
                      onClick={() => handleAcceptRequest(req.id)}
                    >
                      Accept
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// --- Renter Dashboard ---
const RenterDashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getMyRequests()
      .then((res) => setRequests(res.data?.data || []))
      .catch(console.error);
  }, []);

  return (
    <div className="renter-dashboard">
      <div className="quick-actions">
        <button className="action-btn">🔍 Search Houses</button>
        <button className="action-btn secondary">📅 My Visits</button>
      </div>

      <h3>My Rental Requests</h3>
      {requests.length === 0 ? (
        <div className="empty-state">You haven't made any requests yet.</div>
      ) : (
        <table className="requests-table">
          <thead>
            <tr>
              <th>House</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.house?.title}</td>
                <td>{req.house?.price} ETB</td>
                <td>
                  <span className={`badge badge-${req.status}`}>
                    {req.status}
                  </span>
                </td>
                <td>
                  {req.status === "accepted" ? (
                    <button className="action-btn">Schedule Visit</button>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// --- Admin Dashboard ---
const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getAdminStats()
      .then((res) => setStats(res.data))
      .catch(console.error);
  }, []);

  if (!stats)
    return <div className="loading-spinner">Loading admin stats...</div>;

  return (
    <div className="admin-dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <div className="value">{stats.total_users || 0}</div>
        </div>
        <div className="stat-card">
          <h3>Total Houses</h3>
          <div className="value">{stats.total_houses || 0}</div>
        </div>
        <div className="stat-card">
          <h3>Total Requests</h3>
          <div className="value">{stats.total_requests || 0}</div>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <div className="value" style={{ color: "#059669" }}>
            {stats.total_payments || 0} ETB
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-btn">
          ✅ Approve Houses{" "}
          <span className="badge badge-pending">
            {stats.pendingHouses || 0}
          </span>
        </button>
        <button className="action-btn secondary">👥 Manage Users</button>
      </div>
    </div>
  );
};

// --- Main Dashboard Router ---
export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response.data);
        localStorage.setItem("role", response.data.role);
      } catch (err) {
        setError("Failed to load profile. Please login.");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  if (loading)
    return <div className="loading-spinner">⏳ Loading Dashboard...</div>;
  if (error) return <div className="empty-state">{error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome back, {user?.name}! 👋</h1>
        <p>
          Dashboard Access Level: <strong>{user?.role.toUpperCase()}</strong>
        </p>
      </header>

      {user?.role === "owner" && <OwnerDashboard />}
      {user?.role === "renter" && <RenterDashboard />}
      {user?.role === "admin" && <AdminDashboard />}
    </div>
  );
}
