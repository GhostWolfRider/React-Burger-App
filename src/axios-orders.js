import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-007.firebaseio.com/",
});

export default instance;
