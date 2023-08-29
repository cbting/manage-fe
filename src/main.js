import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import config from './config'
import request from './utils/request'
import storage from './utils/storage'

console.log('环境变量： ',import.meta.env)
// 传统获取环境变量是：process.env

const app = createApp(App)
// axios.defaults.baseURL
// console.log(axios.defaults.baseURL)
// console.log(config)
// axios.get(config.mockApi + '/login').then((res)=>{
//   console.log(res)
// })

// 在app上全局挂载一个对象
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(ElementPlus)
app.use(router).mount('#app')
