// !!!!!

const API_URL = "https://dummyjson.com";

export const login = ({ username, password }) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const { users } = await response.json();
  return users;
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  const user = await response.json();
  return user;
};
