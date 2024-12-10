const SERVER_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5273";

if (!import.meta.env.VITE_API_URL) {
  console.warn("VITE_API_URL is not set. Falling back to http://localhost:5273.");
}

export { SERVER_BASE_URL };
