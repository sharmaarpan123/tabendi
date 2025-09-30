import api from "@/lib/axios";
import urls from "./urls";

export const loginApi = (data: unknown) => api.post(urls.logIn, data)
export const signupApi = (data: unknown) => api.post(urls.signUp, data)
export const forgetPasswordApi = (data: unknown) => api.post(urls.forgotPassword, data)