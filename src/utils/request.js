import axios from 'axios';
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
import { getToken, removeToken } from './token';

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 15000 // request timeout
    // headers: {
    //     'Content-Type': 'multipart/form-data'
    // },
});

// request拦截器，每次发起请求都会调用这个方法
service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['authorization'] = 'j ' + getToken();
        }
        //如果是鲸小爱app的接口，是通过FormData传参的，在这里统一处理下header头
        if (Object.prototype.toString.call(config.data) == '[object FormData]') {
            //后端接口要求是formData格式，更改下header
            config.headers['Content-Type'] = 'multipart/form-data';
        }
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        if (response.status == 200) {
            if (response.data && response.data.code == 200) {
                return response.data;
            } else if (response.data && response.data.code == 403) {
                removeToken();
                console.log('登录信息未通过验证，请重新登录');
                if (window.location.href.indexOf('register') > 0) return; //如果当前页是login则不再跳转
                //跳转到登录页面，并且带着上个页面的信息，支持会跳回去
                let redirect =
                    window.location.pathname + window.location.search + window.location.hash;
                redirect = redirect.replace(process.env.BASE_URL, '/');
                window.location.href = process.env.BASE_URL + `register?redirect=${redirect}`;
                return response.data;
            } else {
                console.log('请求错误：' + response.data.code + '----' + response.data.msg);
                return Promise.resolve(response.data);
                // return Promise.reject({})
            }
        }
    },
    error => {
        // console.log('请求错误：' + error)
        console.log('err:' + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
