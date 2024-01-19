const fetchClient = async (endPoint: string, options: RequestInit) => {
  const BASE_URL =
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";
  return fetch(`${BASE_URL}${endPoint}`, {
    ...options,
    headers: {
      ...options.headers,
    },
  });
};

export default fetchClient;
