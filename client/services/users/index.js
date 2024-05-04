import api from "../api";

export const getMe = async (id) => {
  try {
    const response = await api.get(`/api/users/users/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};
