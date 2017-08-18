import axios from 'axios'
import nprogress from './nprogress'

axios.defaults.baseURL = ''
axios.defaults.timeout = '5000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode;charset=UTF-8'

// 拦截请求
axios.interceptors.request.use(config => {
    nprogress.start()
    // 将post传参序列化
    if(config.method === 'post') {
        config.data = JSON.stringify(config.data)
    }
    return config
},err => {
    nprogress.done()
   return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    nprogress.done()
    return res
},err => {
    nprogress.done()
    return Promise.reject(err)
})

export default axios