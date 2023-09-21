import axios from "axios";
import config from "./../config";
import {ElMessage} from 'element-plus'
import router from "../router";
/**
 * axios 二次封装
*/

const TOKEN_INVALID = 'Token认证失败，请重新登录。'
const NETWORK_ERROR = '网络请求异常，请稍后重试。'
// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
})
// 请求拦截 config防重名->req
service.interceptors.request.use((req)=>{
  //TODO
  const headers = req.headers;
  if(!headers.Authorization) headers.Authorization = 'cbt'
  return req;
})

// 响应拦截
service.interceptors.response.use((res)=>{
  //TODO
  const {code, data,msg} = res.data;
  if(code === 200){
    return data;
  }
  else if(code === 50001){
    // ElMessage.error(msg)
    ElMessage.error(TOKEN_INVALID)
    // 跳转登录界面
    setTimeout(()=>{
      router.push('./login')
    },15000)
    return Promise.reject(TOKEN_INVALID)
  }
  else{
    ELMessage.error(msg || NETWORK_ERROR)
  }
})
/**
 * 请求核心函数
 * @param {*} options  请求的配置
 * @returns 
 */
function request(options){
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === 'get'){
    options.params = options.data;
  }
  //设置的局部mock起作用
  if(typeof options.mock != 'undefined'){
    config.mock = options.mock
  }
  if(config.env === 'prod'){
    service.defaults.baseURL = config.baseApi  //防止指向mockApi
  }
  else{ //如果不是生产环境
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi //config.mock是否为true，如果可以mock则指向mockApi，否则则指向baseApi
  }
  return service(options)
}
export default request;