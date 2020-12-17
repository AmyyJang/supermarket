import axios from 'axios'

export function request(config) {
    //1创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2.axios的拦截器
    //2.1请求拦截
    // instance.interceptors.request.use(config => {
    //     return config
    // },err => {

    // })

   //2.2响应拦截
   instance.interceptors.response.use(config => {
    // console.log(res);
    return config.data
    },err => {
        console.log(err);
    })

    //3.发送真正的网络请求
    return instance(config)

}