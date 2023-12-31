/**
 * 环境配置封装
 *  
 */
const env = import.meta.env.MODE || 'prod'  //默认是‘dev’ 取不到就设为'prod'
const EnvConfig = {
  dev:{
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/cf528b81852e5883ba878cbd96bc38c0/api'
  },
  test:{
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/cf528b81852e5883ba878cbd96bc38c0/api'
    // https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api
  },
  prod:{ 
    baseApi: '//futurefe.com/api',
    mockApi: ''
  }
}
export default{
  // env: 'dev',
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}