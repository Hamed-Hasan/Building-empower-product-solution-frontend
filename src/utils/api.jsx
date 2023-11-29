import axios from 'axios';

const baseURL = "https://arraytics-product-solution-backend.vercel.app";

const api = axios.create({
  baseURL,
});

export default api;
