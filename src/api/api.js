import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';
import { MessageBox } from 'element-ui';
import router from '../router/index'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 1500000
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

//请求拦截器
axios.interceptors.request.use(config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => {

        console.log('错误的传参！')
    })


//响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // console.log(error)
        if (error.response.status == 401) {
            var that = this;
            MessageBox.alert('请重新登录', '登录超时', {
                confirmButtonText: '确定',
                closeOnPressEscape: false,
                showClose: false,
                callback: action => {
                    if (action == 'confirm') {
                        router.push('/login');
                    }
                }
            });
        } else {
            Message({
                message: error.response.data.msg,
                type: 'error'
            });
        }
        return Promise.reject(error)
    })


let hosturl = 'http://111.230.135.20/api'

export default hosturl

//
export const requestConfigs = params => { return axios.get(`${hosturl}/configs`, params).then(res => res.data) } //

export const requestDocument = params => { return axios.get(`${hosturl}/document` + `${params}`).then(res => res.data) } //

export const requestMoments = params => { return axios.get(`${hosturl}/moments` + `${params}`).then(res => res.data) } //

export const requestMoment = params => { return axios.get(`${hosturl}/moment` + `${params}`).then(res => res.data) } //

export const requestBanners = params => { return axios.get(`${hosturl}/banners` + `${params}`).then(res => res.data) }

export const requestTypes = params => { return axios.get(`${hosturl}/types` + `${params}`).then(res => res.data) }

export const requestType = params => { return axios.get(`${hosturl}/type` + `${params}`).then(res => res.data) }

export const requestProduct = params => { return axios.get(`${hosturl}/product` + `${params}`).then(res => res.data) }

export const requestDatas = params => { return axios.get(`${hosturl}/data/documents` + `${params}`).then(res => res.data) }

export const requestData = params => { return axios.get(`${hosturl}/data/document` + `${params}`).then(res => res.data) }

export const requesProject = params => { return axios.get(`${hosturl}/projects` + `${params}`).then(res => res.data) }

export const requestProject = params => { return axios.get(`${hosturl}/project` + `${params}`).then(res => res.data) }