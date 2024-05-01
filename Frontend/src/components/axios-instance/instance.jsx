import axios from "axios"; 
import { useState } from "react";


const API_BASE_URL= import.meta.env.VITE_API_BASE_URL

export const UserAxios = axios.create({
    baseURL: `${API_BASE_URL}`,
  });

export const AuthUserAxios = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// export const AuthUserAxios = () => {
//   const [access, setAccess] = useState(localStorage.getItem('access'));

//   return (axios.create({
//       baseURL: `${API_BASE_URL}`,
//       headers: {
//           Authorization: `Bearer ${access}`,
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//       },
//   }))
// };

