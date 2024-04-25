import axios from "axios"; 


const API_BASE_URL= import.meta.env.VITE_API_BASE_URL

export const UserAxios = axios.create({
    baseURL: `${API_BASE_URL}`,
  });