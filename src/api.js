// !!!!!

const API_URL = "https://dummyjson.com";

export const login = (credentials) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
};
