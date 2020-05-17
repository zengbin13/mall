import axios from "axios";

const BASEURL = process.env.NODE_ENV === "production" ? "/github" : "http://123.207.32.32:8000/api/m3";
export function request(config) {
  const instance = axios.create({
    baseURL: BASEURL,
    timeout: 10000
  });
  //拦截器
  instance.interceptors.request.use(
    function(config) {
      //请求数据前的处理
      return config;
    },
    function(error) {
      //请求数据错误的处理
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error)
    }
  );

  return instance(config)
}
