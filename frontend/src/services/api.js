import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export const getUser = () => api.get("/me");
export const getMyHouses = () => api.get("/my-houses");
export const getOwnerRequests = () => api.get("/owner-requests");
export const getMyRequests = () => api.get("/my-requests");
export const getSubscription = () => api.get("/my-subscription");
export const getAdminStats = () => api.get("/admin/dashboard");
export const deleteHouse = (id) => api.delete(`/houses/${id}`);
export const updateRequest = (id, status) =>
  api.put(`/requests/${id}`, { status });

export default api;
