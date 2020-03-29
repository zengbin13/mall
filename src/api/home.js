import { request } from "../utils/request";

export function GetHomeMultidata() {
  return request({
    method: "get",
    url: "/home/multidata"
  });
}

export function GetHomeGoods(type, page) {
  return request({
    method: "get",
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
