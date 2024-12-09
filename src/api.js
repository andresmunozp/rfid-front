import axios from "axios";

const API = axios.create({
  baseURL: "https://rfid-i6fn.onrender.com/api", // URL base del backend Flask
});

export default API;
