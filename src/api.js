import axios from "axios";

const API = axios.create({
  baseURL: "https://rfid-1-ndcb.onrender.com/api", // URL base del backend Flask
});

export default API;
