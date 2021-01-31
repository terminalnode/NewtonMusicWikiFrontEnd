import axios from "axios";

export default axios.create({
  // defined in .env-file in project root directory
  baseURL: process.env.REACT_APP_API_URL
});