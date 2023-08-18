/*
 * @Author: paulWong
 * @LastEditors: paulWong
 * @Description: 页面头部注释
 */
import Request from './axiosRequest';
import { transform } from '../../hooks/axiosInterceptorHooks';

const request = new Request({
    baseURL: '/api',
    timeout: 5000,
    interceptorHooks: transform
});

export default request;
