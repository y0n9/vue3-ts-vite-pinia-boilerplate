/*
 * @Author: paulWong
 * @LastEditors: paulWong
 * @Description: 页面头部注释
 */
import type { InterceptorHooks, ExpandAxiosResponse } from '../types/axiosTypes';
import { Message } from '@arco-design/web-vue';

export const transform: InterceptorHooks = {
    requestInterceptor(config: any) {
        // 请求头部处理，如添加token
        const token = 'token-value';
        if (token) {
            config!.headers!.Authorization = token;
        }
        return config;
    },
    requestInterceptorCatch(err: any) {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err);
    },
    responseInterceptor(result) {
        // 因为 axios 返回不支持扩展自定义配置，需要自己断言一下
        const res = result as ExpandAxiosResponse;
        // 与后端约定好的返回成功码
        const SUCCES_CODE = 200;
        if (res.status !== 200) return Promise.reject(res);
        if (res.data.code !== SUCCES_CODE) {
            if (res.config.requestOptions?.globalErrorMessage) {
                // 全局提示错误
                console.error(res.data.message);
                Message.error({
                    content: res.data.message || 'api返回错误！',
                    duration: 5 * 1000
                });
            }
            return Promise.reject(res.data);
        }
        if (res.config.requestOptions?.globalSuccessMessage) {
            // 全局提示成功
            console.log(res.data.message);
            Message.success({
                content: res.data.message || 'api返回成功！',
                duration: 5 * 1000
            });
        }
        return res.data.result;
    },
    responseInterceptorCatch(err) {
        // 处理http常见错误
        const mapErrorStatus = new Map([
            [400, '请求方式错误(400)'],
            [401, '请重新登录(401)'],
            [403, '拒绝访问(403)'],
            [404, '请求地址有误(404)'],
            [408, '请求超时(408)'],
            [500, '服务器出错(500)'],
            [501, '服务未实现(501)'],
            [502, '网络错误(502)'],
            [503, '服务不可用(503)'],
            [504, '网络超时(504)'],
            [505, 'HTTP版本不受支持(505)']
        ]);
        const message = mapErrorStatus.get(err.response.status) || '请求出错，请稍后再试';
        // 此处全局报错
        console.error(message);
        Message.error({
            content: message,
            duration: 5 * 1000
        });
        return Promise.reject(err.response);
    }
};
