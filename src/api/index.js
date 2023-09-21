/***
 * api管理
 */
import request  from "../utils/request"
export default{
  login(params){
    return request({
      url:'/users/login',
      data: params,
      method: 'post',
      mock: true
    })
  },
  noticeCount(params){
    return request({
      url:'/leave/count',
      data: {},
      method: 'get',
    })
  },
  getMenuList(params){
    return request({
      url:'/menu/list',
      data: {},
      method: 'get',
    })
  }  
}