import axios from 'axios';

// Code nay toi hoi con Copilot nen toi khong hieu lam :)))

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'https://yourapi.com/api',
  timeout: 10000,
});

// Add JWT token to headers if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  });

// Optional global error handling
axiosInstance.interceptors.response.use(response => response, error => {
  if (error.response && error.response.status === 401) {
    console.error('Unauthorized - Please log in again');
    // Handle token expiration
    if (error.response.data.message === 'Token expired') {
      // Assume you have a function to refresh the token
      
      // return refreshToken().then(newToken => {
      //   localStorage.setItem('token', newToken);
      //   error.config.headers['Authorization'] = `Bearer ${newToken}`;
      //   return axiosInstance.request(error.config);
      // }).catch(refreshError => {
      //   console.error('Token refresh failed', refreshError);
      //   // Redirect to login page
      //   window.location.href = '/login';
      //   return Promise.reject(refreshError);
      // });
    }
  }
  return Promise.reject(error);
});

export default axiosInstance;
