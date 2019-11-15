import axios from 'axios'
import QS from 'qs'
import {get } from 'https';
import { resolve } from 'url';
import { reject } from 'q';

// 设置请求超时时间
axios.defaults.timeout = 10000;
// post 请求头处理
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 导出对外的接口
export function request({ method, url, parmas }) {
    // 如果是get类型调用get请求方法
    if (method == 'get') {
        return get(url, parmas)
    } else if (method == 'post') {
        // 调用post请求方法
        return post(url, parmas)
    }
}

// 封装get请求方式
function get(url, parmas) {
    return new Promise((resolve, reject) => {
        axios.get(url, parmas).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(false)
        })
    });
}
// 封装post请求方式
function post(url, parmas) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(parmas)).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(false);
        })
    })
}