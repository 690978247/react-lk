// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    userName?: string
    password?: string
    deptId?: string
    userId?: string
    token?: string
    avatar?: string
    deptNames?: string[]
    roleNames?: string[]
  }
  type LoginResult = {
    status?: string
    type?: string
    currentAuthority?: string
  }
  type postResult = {
    list: postResult
    total?: number | string
    success: true
    debugMsg?: any
    msg?: string
    code: number
    data?: any
    requestId: any
  }
  type getResult = {
    timestamp?: string
    status: number
    error?: string
    path?: string
  }
  type LoginParams = {
    userName: string
    password: string
    captcha?: string
  }

  type BtnPermission = {
    buttonCode: string
    permId: number
    permName: string
  }
}
