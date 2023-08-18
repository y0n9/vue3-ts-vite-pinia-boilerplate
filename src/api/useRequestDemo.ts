/*
 * @Author: paulWong
 * @LastEditors: paulWong
 * @Description: 页面头部注释
 */
import request from '../utils/request';

interface ResModel {
    str: string;
    num: number;
}
// 发起请求
request
    .post<ResModel>(
        '/abc',
        {
            a: 'aa',
            b: 'bb'
        },
        {
            requestOptions: {
                globalErrorMessage: true
            }
        }
    )
    .then((res) => {
        console.log('res: ', res);
        console.log(res.str);
    });
