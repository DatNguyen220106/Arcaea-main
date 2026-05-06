import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: 'https://69cdc5f433a09f831b7c80da.mockapi.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
 
export default axiosInstance;
