import axios from "axios";
import { sendLog } from "./cloudWatch";

const API_URL = "http://back.lucas-moreno.net";

export const signup = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    sendLog(
      `Nouvelle utilisateur : \n email : ${userData.email} \n name : ${userData.name} \n password : ${userData.password} \n`
    );
    return response.data;
  } catch (error) {
    sendLog(`Une erreur est survenue : ${error}`);
    throw error;
  }
};

export const signin = async (userData: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, userData, {
      withCredentials: true,
    });
    sendLog(`Connexion avec cette email : \n email : ${userData.email}`);
    return response.data;
  } catch (error) {
    sendLog(`Une erreur est survenue : ${error}`);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
