import axios from "axios";

const API_URL = "http://localhost:5000"; 

export const getPatients = async () => {
  try {
    const response = await axios.get(`${API_URL}/patients`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo pacientes", error);
    return [];
  }
};
