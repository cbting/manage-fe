/***
 * api管理
 */
import request from "../utils/request";
export default {
  login(params) {
    return request({
      url: "/users/login",
      data: params,
      method: "post",
      mock: false
    });
  },
  noticeCount(params) {
    return request({
      url: "/leave/count",
      data: {},
      method: "get",
      mock: true
    });
  },
  getMenuList(params) {
    return request({
      url: "/menu/list",
      data: params,
      method: "get",
      mock: true
    });
  }
};
