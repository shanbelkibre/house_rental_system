import api from "../api/axios";

// NOTE: This file is a thin wrapper around the shared Axios instance
// in src/api/axios.js. Keep exports here as a stable “service layer”
// for pages/components that prefer named API helpers.

// ===================== Auth =====================
export const getUser = () => api.get("/me");
export const updateProfile = (payload) => api.put("/profile", payload);
export const changePassword = (payload) => api.put("/change-password", payload);
export const logout = () => api.post("/logout");

// ===================== Houses =====================
export const listHouses = (params) => api.get("/houses", { params });
export const getHouse = (id) => api.get(`/houses/${id}`);
export const createHouse = (payload) => api.post("/houses", payload);
export const updateHouse = (id, payload) => api.put(`/houses/${id}`, payload);
export const deleteHouse = (id) => api.delete(`/houses/${id}`);
export const uploadHouseImage = (id, formData) =>
  api.post(`/houses/${id}/images`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteHouseImage = (houseId, imageId) =>
  api.delete(`/houses/${houseId}/images/${imageId}`);

export const uploadMultipleHouseImages = (houseId, formData, onUploadProgress) =>
  api.post(`/houses/${houseId}/images/multiple`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress,
  });

export const uploadLicenseImage = (houseId, formData) =>
  api.post(`/houses/${houseId}/license`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const reorderImages = (houseId, imageIds) =>
  api.put(`/houses/${houseId}/images/reorder`, { image_ids: imageIds });

export const setPrimaryImage = (houseId, imageId) =>
  api.put(`/houses/${houseId}/images/${imageId}/primary`);

export const getMyHouses = () => api.get("/my-houses");

// ===================== Requests =====================
export const createRequest = (payload) => api.post("/requests", payload);
export const updateRequest = (id, status) =>
  api.put(`/requests/${id}`, { status });
export const getMyRequests = () => api.get("/my-requests");
export const getOwnerRequests = () => api.get("/owner-requests");

// ===================== Reviews =====================
export const createReview = (payload) => api.post("/reviews", payload);
export const getHouseReviews = (houseId) =>
  api.get(`/houses/${houseId}/reviews`);

// ===================== Subscription =====================
export const getSubscription = () => api.get("/my-subscription");
export const subscribe = (payload) => api.post("/subscribe", payload);
export const canPost = () => api.get("/can-post");

// ===================== Visits =====================
export const scheduleVisit = (payload) => api.post("/visits", payload);
export const confirmVisit = (id, payload) => api.put(`/visits/${id}`, payload);
export const getMyVisits = () => api.get("/my-visits");

// ===================== Agreements =====================
export const createAgreement = (payload) => api.post("/agreements", payload);
export const confirmAgreement = (id) => api.put(`/agreements/${id}/confirm`);
export const getMyAgreements = () => api.get("/my-agreements");

// ===================== Notifications =====================
export const getNotifications = () => api.get("/notifications");
export const getUnreadNotificationCount = () =>
  api.get("/notifications/unread-count");
export const markNotificationRead = (id) =>
  api.put(`/notifications/${id}/read`);
export const markAllNotificationsRead = () =>
  api.put("/notifications/read-all");
export const deleteNotification = (id) => api.delete(`/notifications/${id}`);

// ===================== Admin =====================
export const getAdminStats = () => api.get("/admin/dashboard");
export const getAdminReport = (params) => api.get("/admin/report", { params });
export const getAdminUsers = (params) => api.get("/admin/users", { params });
export const verifyAdminUser = (id) => api.put(`/admin/users/${id}/verify`);
export const suspendAdminUser = (id, is_suspended) =>
  api.put(`/admin/users/${id}/suspend`, { is_suspended });
export const deleteAdminUser = (id) => api.delete(`/admin/users/${id}`);
export const getPendingHouses = (params) =>
  api.get("/admin/pending-houses", { params });
export const getAllHousesAdmin = (params) =>
  api.get("/admin/all-houses", { params });
export const approveHouseAdmin = (id) => api.put(`/admin/houses/${id}/approve`);
export const rejectHouseAdmin = (id) =>
  api.delete(`/admin/houses/${id}/reject`);
export const removeHouseAdmin = (id, reason) =>
  api.delete(`/admin/houses/${id}`, { data: { reason } });

// Saved reports
export const listSavedAdminReports = (params) =>
  api.get("/admin/reports", { params });
export const saveAdminReport = (payload) => api.post("/admin/reports", payload);
export const getSavedAdminReport = (id) => api.get(`/admin/reports/${id}`);

// Subscription plans
export const listSubscriptionPlans = (params) =>
  api.get("/admin/subscription-plans", { params });
export const createSubscriptionPlan = (payload) =>
  api.post("/admin/subscription-plans", payload);
export const updateSubscriptionPlan = (id, payload) =>
  api.put(`/admin/subscription-plans/${id}`, payload);
export const deleteSubscriptionPlan = (id) =>
  api.delete(`/admin/subscription-plans/${id}`);

// ===================== Public / Marketing =====================
export const getStats = () => api.get("/stats");
export const submitContactForm = (payload) => api.post("/contact", payload);
export const getTestimonials = () => api.get("/testimonials");

export default api;
