//请求详情页的数据
import { request } from "@/utils/request";

export function GetDetail(iid) {
  return request({
    method: "get",
    url: "/detail",
    params: {
      iid
    }
  });
}
