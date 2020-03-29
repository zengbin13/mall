import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/h3",
    timeout: 5000
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
