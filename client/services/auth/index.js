import api from "../api";

export const loginService = async (username, password) => {
  try {
    const response = await api.post("/api/auth/login/", {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
