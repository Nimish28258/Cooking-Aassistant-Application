import axios from "axios";

const apiUrl = "https://cooking-assistant-backend.onrender.com";

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
