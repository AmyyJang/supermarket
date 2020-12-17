import {request} from './request'
//将home页面所有的请求都放在这里
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

