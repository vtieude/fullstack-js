import axios from 'axios';

const axiosInstance = axios.create();

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
