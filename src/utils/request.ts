import axios from 'axios'
import { message } from 'antd';

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

/**
 * @description 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * @description 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res instanceof Blob) {
      // 流文件
      return res
    }
    if (res.code !== 200 && response.config?.headers?.hideMsg !== 'true') {
      message.error({
        content: res.msg || 'Error',
        duration: 5
      });
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    message.error({
      content: 'The service is unavailable',
      duration: 2
    });

    return Promise.reject(error)
  }
)

export default service
