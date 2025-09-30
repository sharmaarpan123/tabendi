import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';

// import api from '';
import axios, { AxiosResponse } from 'axios';


export const BASE_URL = 'https://tabendihealthcarenetwork.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
    // Create a new object based on config
    const modifiedConfig = { ...config };

    // Add the Authorization header if a token is present
    const userData = getItem('userData');
    console.log('lklk', userData);

    if (userData) {
        modifiedConfig.headers.Authorization = `Bearer ${userData?.accessToken}`;
    }

    return modifiedConfig;
});
axiosInstance.interceptors.request.use(config => config);

axiosInstance.interceptors.response.use(
    async response => response,
    error => {
        // data outside of 2XX will go into the error->response object so handle all your error in here.
        if (error?.response?.status === 401) {
            return Promise.reject(error?.response?.data?.message || 'Unauthorized');
        }

        return Promise.reject(error?.response?.data?.message);
    },
);

interface MutationData { }
/**
 * A custom hook that abstracts the useMutation hook for different API endpoints.
 *
 * @param url - The API endpoint to hit.
 * @param options - Additional options for the mutation.
 * @returns - The result of the useMutation hook.
 */
const usePostData = <TData, TError, TVariables = MutationData, TContext = unknown>(
    url: APIS,
    options?: UseMutationOptions<AxiosResponse<TData>, TError, TVariables, TContext>,
): UseMutationResult<AxiosResponse<TData>, TError, TVariables, TContext> => {
    const result = useMutation<AxiosResponse<TData>, TError, TVariables, TContext>({
        ...options,
        mutationFn: (variables: TVariables) => {
            // Check if variables is FormData or not
            if (variables instanceof FormData) {
                return axiosInstance.post(url, variables, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                return axiosInstance.post<TData>(url, variables);
            }
        },
    });
    return result;
};

export default usePostData;
