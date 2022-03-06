import axios from "axios";

const instance = axios.create({
  baseURL: "https://kmmerntiktok.herokuapp.com",
});

export default instance;
