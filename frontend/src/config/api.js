export const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? 'https://portfolio-backend.onrender.com'
    : 'http://localhost:5000');
