import axios from "axios";


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PROXY_API_URL, // your backend URL
    withCredentials: true, // allows sending cookies if backend uses them
});


api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor → handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {

        return Promise.reject(error);
    }
);

export default api;

