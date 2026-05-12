# App.jsx

## Code (numbered)

```jsx
1 import { Routes, Route } from "react-router-dom";
2 import Navbar from "./components/Navbar";
3 import Footer from "./components/Footer";
4 import ProtectedRoute from "./components/ProtectedRoute";
5 import { AuthProvider } from "./context/AuthContext";
6 import { ThemeProvider } from "./context/ThemeContext";
7 import ScrollToTop from "./components/ScrollToTop";
8 import ScrollToTopButton from "./components/ScrollToTopButton";
9
10 // Pages
11 import HomePage from "./pages/HomePage";
12 import HousesPage from "./pages/HousesPage";
13 import HouseDetailPage from "./pages/HouseDetailPage";
14 import LoginPage from "./pages/LoginPage";
15 import RegisterPage from "./pages/RegisterPage";
16 import Dashboard from "./pages/Dashboard";
17 import ProfilePage from "./pages/ProfilePage";
18 import MyHousesPage from "./pages/MyHousesPage";
19 import CreateHousePage from "./pages/CreateHousePage";
20 import OwnerRequestsPage from "./pages/OwnerRequestsPage";
21 import SubscriptionPage from "./pages/SubscriptionPage";
22 import AdminPage from "./pages/AdminPage";
23 import MyRequestsPage from "./pages/MyRequestsPage";
24 import MyVisitsPage from "./pages/MyVisitsPage";
25 import NotificationsPage from "./pages/NotificationsPage";
26 import MyAgreementsPage from "./pages/MyAgreementsPage";
27 import AgreementPage from "./pages/AgreementPage";
28 import CreateAgreementPage from "./pages/CreateAgreementPage";
29 import DesignProHero from "./pages/DesignProHero";
30
31 // Marketing / Static Pages
32 import AboutPage from "./pages/AboutPage";
33 import ServicesPage from "./pages/ServicesPage";
34 import FAQPage from "./pages/FAQPage";
35 import TermsPage from "./pages/TermsPage";
36 import PrivacyPage from "./pages/PrivacyPage";
37 import BlogPage from "./pages/BlogPage";
38
39 function App() {
40   return (
41     <ThemeProvider>
42       <AuthProvider>
43         <ScrollToTop />
44         <div className="min-h-screen bg-white dark:bg-black font-sans flex flex-col text-gray-900 dark:text-white transition-colors duration-300">
45           <Navbar />
46           <main className="flex-1 flex flex-col">
47             <Routes>
48               <Route path="/" element={<HomePage />} />
49               <Route path="/about" element={<AboutPage />} />
50               <Route path="/services" element={<ServicesPage />} />
51               <Route path="/faq" element={<FAQPage />} />
52               <Route path="/terms" element={<TermsPage />} />
53               <Route path="/privacy" element={<PrivacyPage />} />
54               <Route path="/blog" element={<BlogPage />} />
55               <Route path="/blog/:id" element={<BlogPage />} />
56
57               <Route path="/designpro" element={<DesignProHero />} />
58               <Route path="/houses" element={<HousesPage />} />
59               <Route path="/houses/:id" element={<HouseDetailPage />} />
60               <Route path="/login" element={<LoginPage />} />
61               <Route path="/register" element={<RegisterPage />} />
62
63               {/* Protected Routes */}
64               <Route element={<ProtectedRoute />}>
65                 <Route path="/dashboard" element={<Dashboard />} />
66                 <Route path="/profile" element={<ProfilePage />} />
67                 <Route path="/my-houses" element={<MyHousesPage />} />
68                 <Route path="/create-house" element={<CreateHousePage />} />
69                 <Route path="/owner-requests" element={<OwnerRequestsPage />} />
70                 <Route path="/subscription" element={<SubscriptionPage />} />
71                 <Route path="/my-requests" element={<MyRequestsPage />} />
72                 <Route path="/my-visits" element={<MyVisitsPage />} />
73                 <Route path="/notifications" element={<NotificationsPage />} />
74                 <Route path="/agreements" element={<MyAgreementsPage />} />
75                 <Route
76                   path="/agreements/create"
77                   element={<CreateAgreementPage />}
78                 />
79                 <Route path="/agreements/:id" element={<AgreementPage />} />
80               </Route>
81
82               {/* Admin-only */}
83               <Route element={<ProtectedRoute roles={["admin"]} />}>
84                 <Route path="/admin" element={<AdminPage />} />
85               </Route>
86             </Routes>
87           </main>
88           <Footer />
89         </div>
90         <ScrollToTopButton />
91       </AuthProvider>
92     </ThemeProvider>
93   );
94 }
95
96 export default App;
```

## Line-by-line explanation

- Line 1: Imports routing components used to declare routes.
- Line 2: Imports the top navigation component.
- Line 3: Imports the footer component.
- Line 4: Imports a wrapper that protects routes by auth and role.
- Line 5: Imports the auth provider to supply auth state to the tree.
- Line 6: Imports the theme provider to manage dark/light mode.
- Line 7: Imports the component that resets scroll on route change.
- Line 8: Imports the floating scroll-to-top button.
- Line 9: Blank line for separation.
- Line 10: Comment marking the page imports.
- Line 11: Imports the landing page.
- Line 12: Imports the house listing page.
- Line 13: Imports the house details page.
- Line 14: Imports the login page.
- Line 15: Imports the registration page.
- Line 16: Imports the role-based dashboard page.
- Line 17: Imports the profile page.
- Line 18: Imports the owner house list page.
- Line 19: Imports the owner house creation page.
- Line 20: Imports the owner requests page.
- Line 21: Imports the subscription page.
- Line 22: Imports the admin dashboard page.
- Line 23: Imports the renter requests page.
- Line 24: Imports the visits page.
- Line 25: Imports the notifications page.
- Line 26: Imports the agreements list page.
- Line 27: Imports the agreement details page.
- Line 28: Imports the agreement creation page.
- Line 29: Imports a special marketing hero page.
- Line 30: Blank line for separation.
- Line 31: Comment marking marketing/static page imports.
- Line 32: Imports the about page.
- Line 33: Imports the services page.
- Line 34: Imports the FAQ page.
- Line 35: Imports the terms page.
- Line 36: Imports the privacy page.
- Line 37: Imports the blog page.
- Line 38: Blank line for separation.
- Line 39: Declares the App component.
- Line 40: Starts the component render return.
- Line 41: Wraps the app in ThemeProvider for theme state.
- Line 42: Wraps the app in AuthProvider for auth state.
- Line 43: Adds a scroll reset on route changes.
- Line 44: Defines the outer layout container and global styling classes.
- Line 45: Renders the navigation at the top.
- Line 46: Starts the main content area.
- Line 47: Starts route declarations.
- Line 48: Maps the root path to HomePage.
- Line 49: Maps /about to AboutPage.
- Line 50: Maps /services to ServicesPage.
- Line 51: Maps /faq to FAQPage.
- Line 52: Maps /terms to TermsPage.
- Line 53: Maps /privacy to PrivacyPage.
- Line 54: Maps /blog to BlogPage.
- Line 55: Maps /blog/:id to BlogPage for blog details.
- Line 56: Blank line for separation.
- Line 57: Maps /designpro to DesignProHero.
- Line 58: Maps /houses to HousesPage.
- Line 59: Maps /houses/:id to HouseDetailPage.
- Line 60: Maps /login to LoginPage.
- Line 61: Maps /register to RegisterPage.
- Line 62: Blank line for separation.
- Line 63: Comment for protected routes.
- Line 64: Wraps protected routes in ProtectedRoute.
- Line 65: Maps /dashboard to Dashboard.
- Line 66: Maps /profile to ProfilePage.
- Line 67: Maps /my-houses to MyHousesPage.
- Line 68: Maps /create-house to CreateHousePage.
- Line 69: Maps /owner-requests to OwnerRequestsPage.
- Line 70: Maps /subscription to SubscriptionPage.
- Line 71: Maps /my-requests to MyRequestsPage.
- Line 72: Maps /my-visits to MyVisitsPage.
- Line 73: Maps /notifications to NotificationsPage.
- Line 74: Maps /agreements to MyAgreementsPage.
- Line 75: Starts a multi-line route definition.
- Line 76: Sets the path for agreement creation.
- Line 77: Maps the route to CreateAgreementPage.
- Line 78: Closes the multi-line route.
- Line 79: Maps /agreements/:id to AgreementPage.
- Line 80: Ends the protected route group.
- Line 81: Blank line for separation.
- Line 82: Comment for admin-only routes.
- Line 83: Protects admin routes with role restriction.
- Line 84: Maps /admin to AdminPage.
- Line 85: Ends the admin-only group.
- Line 86: Ends the Routes block.
- Line 87: Closes the main content area.
- Line 88: Renders the footer.
- Line 89: Closes the layout container.
- Line 90: Renders the scroll-to-top button.
- Line 91: Closes the AuthProvider.
- Line 92: Closes the ThemeProvider.
- Line 93: Ends the return JSX.
- Line 94: Ends the App function.
- Line 95: Blank line for separation.
- Line 96: Exports App as the default export.
