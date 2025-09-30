import { getCookie } from "@/utils/commonFunc";
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api", // your backend URL
    withCredentials: true, // allows sending cookies if backend uses them
});

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    document.cookie = "authorization=; path=/;";
    document.cookie = "role=; path=/;";
}

api.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = getCookie("authorization");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor → handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
                logout()
                window.location.href = "/auth/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;

