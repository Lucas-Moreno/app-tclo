import axios from "axios";

const API_URL = "http://back.lucas-moreno.net";

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
