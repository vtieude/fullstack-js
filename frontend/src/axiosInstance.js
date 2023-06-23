import axios from 'axios';
import { getAuthToken } from './util/auth';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = getAuthToken();
    if (!!authToken) {
    // Add the auth token to the request headers
    config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)
// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle error globally
    console.error('API request error:', error);

    // Pass the error to the component for further handling
    return Promise.reject(error);
  }
);

export default axiosInstance;
