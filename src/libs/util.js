import axios from 'axios';
import get_usr_info from './config';
import { Indicator,Toast } from 'mint-ui';
let util = {

};
/*
 **--axios handle config--
 使用方法:
 this.util.ajax.get(url?a=1&b=2).then().catch()
 this.util.ajax.post(url,{a:1,b:2}).then().catch()
 */
util.ajax =axios.create({
    baseURL: "/",
    timeout: 300000,
    responseType: 'json', //default
    //post split joint params
    // data: null,
    //get split joint params
    // params: params
});
util.ajax.interceptors.request.use(function (config) {
    //在请求发出之前进行一些操作
    config.headers=get_usr_info();
    Indicator.open({ spinnerType: 'fading-circle'});
    //守卫请求方式参数
    if(config.method=='post'){
        if(config.url.indexOf('upload')==-1){
            config.params=null;
            config.data=Object.assign(get_usr_info(),config.data?config.data:{});   
        }
    } else if(config.method=='get'){
        config.data=null;
        config.params=Object.assign(config.params?config.params:{},get_usr_info());
    }
    //守卫拦截请求url
    if(config.url.indexOf('vchat')>-1){
        config.baseURL='/'
    }
    
    // return config;
    return Promise.resolve(config);
   
}, function (err) {
    //Do something with request error
    return Promise.reject(error);
})
util.ajax.interceptors.response.use(function (config) {
    //在请求发出之前进行一些操作
    Indicator.close();
    // 请求异常提示
    if(config.data&&config.data.code!=200){
        Toast(config.data.message)
    }
    //请求参数拦截
    if(config.data&&config.data.code==-10){
        // window.vm.$router.push({name:"follow_dyr"});
    }
    return config.data;
}, function (err) {
    Indicator.close();
    Toast('网络异常或请求失败');
    //Do something with request error
    return Promise.reject(err);
})
export default util;