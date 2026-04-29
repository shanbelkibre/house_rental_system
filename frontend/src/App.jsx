import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// Pages
import HomePage from "./pages/HomePage";
import HousesPage from "./pages/HousesPage";
import HouseDetailPage from "./pages/HouseDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import MyHousesPage from "./pages/MyHousesPage";
import OwnerRequestsPage from "./pages/OwnerRequestsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import AdminPage from "./pages/AdminPage";
import MyRequestsPage from "./pages/MyRequestsPage";
import MyVisitsPage from "./pages/MyVisitsPage";
import NotificationsPage from "./pages/NotificationsPage";
import MyAgreementsPage from "./pages/MyAgreementsPage";
import DesignProHero from "./pages/DesignProHero";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/designpro" element={<DesignProHero />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/houses/:id" element={<HouseDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/my-houses" element={<MyHousesPage />} />
              <Route path="/owner-requests" element={<OwnerRequestsPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/my-requests" element={<MyRequestsPage />} />
              <Route path="/my-visits" element={<MyVisitsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/agreements" element={<MyAgreementsPage />} />
            </Route>

            {/* Admin-only */}
            <Route element={<ProtectedRoute roles={["admin"]} />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
