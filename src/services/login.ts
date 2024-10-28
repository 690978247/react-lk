// import { API } from '@/services/ant-design-pro/'
// @ts-ignore
/* eslint-disable */
import request from '@/utils/request.ts'

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string
  },
  options?: { [key: string]: any }
) {
  return request('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params
    },
    ...(options || {})
  })
}

// 用户登录
export async function login(
  body: { userName?: string; password?: string; captcha?: string },
  options?: { [key: string]: any }
) {
  return request<API.postResult>('/api/user/manager/user/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}
// 获取钉钉验证码
export async function getCaptcha(
  body: { userName?: string },
  options?: { [key: string]: any }
) {
  return request<API.postResult>('/api/user/manager/user/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}
/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<{ data: any }>('/api/user/manager/user/userLogout', {
    method: 'GET',
    ...(options || {})
  })
}
// 根据token获取用户所有信息
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<{
    data: any
  }>('/api/user/manager/user/userInfo', {
    method: 'GET',
    ...(options || {})
  })
}
// 修改密码
export async function changePassword(
  body: { oldPwd?: string; newPwd?: string },
  options?: { [key: string]: any }
) {
  return request<API.postResult>('/api/user/manager/board/cpwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}
// 重置密码
export async function resetPassword(
  body: [string],
  options?: { [key: string]: any }
) {
  return request<API.postResult>('/api/user/manager/user/initpwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}

// 路由
export async function getMenuAndPerm(options?: { [key: string]: any }) {
  return request<API.postResult>('/api/user/manager/board/menuAndPerm', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    ...(options || {})
  })
}
