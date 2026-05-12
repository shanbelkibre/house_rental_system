# api.js

## Code (numbered)

```js
1 import api from "../api/axios";
2
3 // NOTE: This file is a thin wrapper around the shared Axios instance
4 // in src/api/axios.js. Keep exports here as a stable "service layer"
5 // for pages/components that prefer named API helpers.
6
7 // ===================== Auth =====================
8 export const getUser = () => api.get("/me");
9 export const updateProfile = (payload) => api.put("/profile", payload);
10 export const changePassword = (payload) => api.put("/change-password", payload);
11 export const logout = () => api.post("/logout");
12
13 // ===================== Houses =====================
14 export const listHouses = (params) => api.get("/houses", { params });
15 export const getHouse = (id) => api.get(`/houses/${id}`);
16 export const createHouse = (payload) => api.post("/houses", payload);
17 export const updateHouse = (id, payload) => api.put(`/houses/${id}`, payload);
18 export const deleteHouse = (id) => api.delete(`/houses/${id}`);
19 export const uploadHouseImage = (id, formData) =>
20   api.post(`/houses/${id}/images`, formData);
21 export const deleteHouseImage = (houseId, imageId) =>
22   api.delete(`/houses/${houseId}/images/${imageId}`);
23
24 export const uploadMultipleHouseImages = (houseId, formData, onUploadProgress) =>
25   api.post(`/houses/${houseId}/images/multiple`, formData, {
26     onUploadProgress,
27   });
28
29 export const uploadLicenseImage = (houseId, formData) =>
30   api.post(`/houses/${houseId}/license`, formData);
31
32 export const reorderImages = (houseId, imageIds) =>
33   api.put(`/houses/${houseId}/images/reorder`, { image_ids: imageIds });
34
35 export const setPrimaryImage = (houseId, imageId) =>
36   api.put(`/houses/${houseId}/images/${imageId}/primary`);
37
38 export const getMyHouses = () => api.get("/my-houses");
39
40 // ===================== Requests =====================
41 export const createRequest = (payload) => api.post("/requests", payload);
42 export const updateRequest = (id, status) =>
43   api.put(`/requests/${id}`, { status });
44 export const deleteRequest = (id) => api.delete(`/requests/${id}`);
45 export const getMyRequests = () => api.get("/my-requests");
46 export const getOwnerRequests = () => api.get("/owner-requests");
47
48 // ===================== Reviews =====================
49 export const createReview = (payload) => api.post("/reviews", payload);
50 export const getHouseReviews = (houseId) =>
51   api.get(`/houses/${houseId}/reviews`);
52
53 // ===================== Subscription =====================
54 export const getSubscription = () => api.get("/my-subscription");
55 export const subscribe = (payload) => api.post("/subscribe", payload);
56 export const canPost = () => api.get("/can-post");
57
58 // ===================== Visits =====================
59 export const scheduleVisit = (payload) => api.post("/visits", payload);
60 export const confirmVisit = (id, payload) => api.put(`/visits/${id}`, payload);
61 export const getMyVisits = () => api.get("/my-visits");
62
63 // ===================== Agreements =====================
64 export const createAgreement = (payload) => api.post("/agreements", payload);
65 export const confirmAgreement = (id) => api.put(`/agreements/${id}/confirm`);
66 export const terminateAgreement = (id) => api.put(`/agreements/${id}/terminate`);
67 export const getMyAgreements = () => api.get("/my-agreements");
68
69 // ===================== Notifications =====================
70 export const getNotifications = () => api.get("/notifications");
71 export const getUnreadNotificationCount = () =>
72   api.get("/notifications/unread-count");
73 export const markNotificationRead = (id) =>
74   api.put(`/notifications/${id}/read`);
75 export const markAllNotificationsRead = () =>
76   api.put("/notifications/read-all");
77 export const deleteNotification = (id) => api.delete(`/notifications/${id}`);
78
79 // ===================== Admin =====================
80 export const getAdminStats = () => api.get("/admin/dashboard");
81 export const getAdminReport = (params) => api.get("/admin/report", { params });
82 export const getAdminUsers = (params) => api.get("/admin/users", { params });
83 export const verifyAdminUser = (id) => api.put(`/admin/users/${id}/verify`);
84 export const suspendAdminUser = (id, is_suspended) =>
85   api.put(`/admin/users/${id}/suspend`, { is_suspended });
86 export const deleteAdminUser = (id) => api.delete(`/admin/users/${id}`);
87 export const getPendingHouses = (params) =>
88   api.get("/admin/pending-houses", { params });
89 export const getAllHousesAdmin = (params) =>
90   api.get("/admin/all-houses", { params });
91 export const approveHouseAdmin = (id) => api.put(`/admin/houses/${id}/approve`);
92 export const rejectHouseAdmin = (id) =>
93   api.delete(`/admin/houses/${id}/reject`);
94 export const removeHouseAdmin = (id, reason) =>
95   api.delete(`/admin/houses/${id}`, { data: { reason } });
96
97 // Saved reports
98 export const listSavedAdminReports = (params) =>
99   api.get("/admin/reports", { params });
100 export const saveAdminReport = (payload) => api.post("/admin/reports", payload);
101 export const getSavedAdminReport = (id) => api.get(`/admin/reports/${id}`);
102
103 // Subscription plans
104 export const listSubscriptionPlans = (params) =>
105   api.get("/admin/subscription-plans", { params });
106 export const createSubscriptionPlan = (payload) =>
107   api.post("/admin/subscription-plans", payload);
108 export const updateSubscriptionPlan = (id, payload) =>
109   api.put(`/admin/subscription-plans/${id}`, payload);
110 export const deleteSubscriptionPlan = (id) =>
111   api.delete(`/admin/subscription-plans/${id}`);
112
113 // ===================== Public / Marketing =====================
114 export const getStats = () => api.get("/stats");
115 export const submitContactForm = (payload) => api.post("/contact", payload);
116 export const getTestimonials = () => api.get("/testimonials");
117
118 export default api;
```

## Line-by-line explanation

- Line 1: Imports the shared Axios instance to reuse base config.
- Line 2: Blank line for separation.
- Line 3: Comment explaining this file is a service wrapper.
- Line 4: Continues the comment describing stability for callers.
- Line 5: Continues the comment about named helpers.
- Line 6: Blank line for separation.
- Line 7: Section header for auth endpoints.
- Line 8: Helper to fetch the current user profile.
- Line 9: Helper to update user profile data.
- Line 10: Helper to change user password.
- Line 11: Helper to log out the current user.
- Line 12: Blank line for separation.
- Line 13: Section header for house endpoints.
- Line 14: Helper to list houses with optional query params.
- Line 15: Helper to get a single house by id.
- Line 16: Helper to create a new house.
- Line 17: Helper to update a house by id.
- Line 18: Helper to delete a house by id.
- Line 19: Starts the helper to upload a single house image.
- Line 20: Sends the image to the house images endpoint.
- Line 21: Starts the helper to delete a house image.
- Line 22: Sends delete request for a specific image.
- Line 23: Blank line for separation.
- Line 24: Starts the helper to upload multiple images.
- Line 25: Sends the multipart request to the multi-image endpoint.
- Line 26: Passes an upload progress callback.
- Line 27: Closes the request options.
- Line 28: Blank line for separation.
- Line 29: Starts the helper to upload the license image.
- Line 30: Sends the document to the license endpoint.
- Line 31: Blank line for separation.
- Line 32: Starts the helper to reorder house images.
- Line 33: Sends the new image id order.
- Line 34: Blank line for separation.
- Line 35: Starts the helper to set a primary image.
- Line 36: Sends the primary image update request.
- Line 37: Blank line for separation.
- Line 38: Helper to fetch the current owner's houses.
- Line 39: Blank line for separation.
- Line 40: Section header for rental requests.
- Line 41: Helper to create a rental request.
- Line 42: Starts helper to update request status.
- Line 43: Sends status payload to update the request.
- Line 44: Helper to delete a request.
- Line 45: Helper to list renter requests.
- Line 46: Helper to list owner requests.
- Line 47: Blank line for separation.
- Line 48: Section header for reviews.
- Line 49: Helper to create a review.
- Line 50: Starts helper to get house reviews.
- Line 51: Sends request to the reviews endpoint.
- Line 52: Blank line for separation.
- Line 53: Section header for subscriptions.
- Line 54: Helper to fetch subscription status.
- Line 55: Helper to create a subscription payment.
- Line 56: Helper to check if owner can post.
- Line 57: Blank line for separation.
- Line 58: Section header for visits.
- Line 59: Helper to schedule a visit.
- Line 60: Helper to confirm or update a visit.
- Line 61: Helper to list user visits.
- Line 62: Blank line for separation.
- Line 63: Section header for agreements.
- Line 64: Helper to create an agreement.
- Line 65: Helper to confirm an agreement.
- Line 66: Helper to terminate an agreement.
- Line 67: Helper to list user agreements.
- Line 68: Blank line for separation.
- Line 69: Section header for notifications.
- Line 70: Helper to list notifications.
- Line 71: Starts helper to get unread count.
- Line 72: Sends request for unread notification count.
- Line 73: Starts helper to mark a notification read.
- Line 74: Sends read update for a notification.
- Line 75: Starts helper to mark all notifications read.
- Line 76: Sends request to mark all as read.
- Line 77: Helper to delete a notification.
- Line 78: Blank line for separation.
- Line 79: Section header for admin endpoints.
- Line 80: Helper to load admin dashboard stats.
- Line 81: Helper to get admin report data.
- Line 82: Helper to search admin users.
- Line 83: Helper to verify a user.
- Line 84: Starts helper to suspend or unsuspend a user.
- Line 85: Sends suspension payload.
- Line 86: Helper to delete a user.
- Line 87: Starts helper to list pending houses.
- Line 88: Sends request for pending houses.
- Line 89: Starts helper to list all houses.
- Line 90: Sends request for all houses.
- Line 91: Helper to approve a house.
- Line 92: Starts helper to reject a house.
- Line 93: Sends request to reject and remove a house.
- Line 94: Starts helper to remove a house.
- Line 95: Sends request with optional reason.
- Line 96: Blank line for separation.
- Line 97: Comment for report helpers.
- Line 98: Starts helper to list saved reports.
- Line 99: Sends request for saved reports.
- Line 100: Helper to save a report.
- Line 101: Helper to fetch a saved report by id.
- Line 102: Blank line for separation.
- Line 103: Comment for subscription plan helpers.
- Line 104: Starts helper to list plans.
- Line 105: Sends request for plans.
- Line 106: Starts helper to create a plan.
- Line 107: Sends payload to create the plan.
- Line 108: Starts helper to update a plan.
- Line 109: Sends payload to update the plan.
- Line 110: Starts helper to delete a plan.
- Line 111: Sends request to delete the plan.
- Line 112: Blank line for separation.
- Line 113: Section header for public marketing endpoints.
- Line 114: Helper to fetch public stats.
- Line 115: Helper to submit contact form data.
- Line 116: Helper to fetch testimonials.
- Line 117: Blank line for separation.
- Line 118: Exports the Axios instance as default for direct use.
