import api from "../api";

export const postQr = async (name, url) => {
  try {
    const response = await api.post("/api/qr/code/", {
      website_url: url,
      name: name,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getQr = async () => {
  try {
    const response = await api.get("/api/qr/code/");
    return response.data;
  } catch (error) {
    return null;
  }
};
