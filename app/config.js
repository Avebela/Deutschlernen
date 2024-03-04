const API_URL =
  process.env.VERCEL_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  "http://127.0.0.1:1337";
export default API_URL;
