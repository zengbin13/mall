import { request } from "@/utils/request";

export function GetCategory() {
  return request({
    url:'/category'
  })
}

export function GetSubcategory(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
