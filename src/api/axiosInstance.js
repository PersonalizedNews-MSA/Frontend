import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL:
    "http://localhost:30080/",
  withCredentials: true,
});

export default instance;
