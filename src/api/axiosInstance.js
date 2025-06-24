import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL:
    "http://localhost:8082/",
  withCredentials: true,
});

export default instance;
