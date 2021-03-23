import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3003/api/csv/clients",
  headers: {
    "Content-type": "application/json"
  }
});