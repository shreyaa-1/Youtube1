import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://internship-service.onrender.com",
});

export default API;