import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Pages
import HomePage from "./pages/HomePage";
import HousesPage from "./pages/HousesPage";
import HouseDetailPage from "./pages/HouseDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import MyHousesPage from "./pages/MyHousesPage";
import CreateHousePage from "./pages/CreateHousePage";
import OwnerRequestsPage from "./pages/OwnerRequestsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import AdminPage from "./pages/AdminPage";
import MyRequestsPage from "./pages/MyRequestsPage";
import MyVisitsPage from "./pages/MyVisitsPage";
import NotificationsPage from "./pages/NotificationsPage";
import MyAgreementsPage from "./pages/MyAgreementsPage";
import DesignProHero from "./pages/DesignProHero";

// Marketing / Static Pages
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FAQPage from "./pages/FAQPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-black font-sans flex flex-col text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPage />} />

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
                <Route path="/create-house" element={<CreateHousePage />} />
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
          <Footer />
        </div>
        <ScrollToTopButton />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
