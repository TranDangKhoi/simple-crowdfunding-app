import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:3008",
  headers: {
    "Content-Type": "application/json",
  },
});
