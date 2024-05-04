import api from "../api";

export const postQr = async (url) => {
  try {
    const response = await api.post("/api/qr/code/", { website_url: url });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
