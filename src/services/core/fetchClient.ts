const fetchClient = async (endPoint: string, options: RequestInit) => {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endPoint}`, {
    ...options,
    headers: {
      ...options.headers,
    },
  });
};

export default fetchClient;
