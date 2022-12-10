const API_URL = "https://dummyjson.com";

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
