import request from '@/utils/request.ts'
// 上传图片
export async function uploadPic(body: any) {
  return request<API.postResult>('/api/third/oss/uploadFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: body
  })
}

// 一键查重
export function checkRepeatFields(data: any) {
  return request(`/center/manager/extra/info/contact/checkInfo`, {
    method: 'post',
    data
  })
}
// 获取下拉框配置接口
export async function getDropDown(options: { typeList: any }) {
  return request<API.postResult>('/api/center/dropDown/getByType', {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params: options,
    ...(options || {})
  })
}

// 下拉接口
export function getDropDatas(list: Array<number>) {
  return request(`/center/dropDown/getByType?typeList=${list}`, {
    method: 'get'
  })
}

/* 看板接口 */
// 新增
export function getPanelDatas(data: any) {
  return request(`/center/manager/panel/add`, {
    method: 'post',
    data
  })
}

// 更新
export function updPanelDatas(data: any) {
  return request(`/center/manager/panel/update`, {
    method: 'post',
    data
  })
}

// 看板查询
export function queryPanelDatas(data: any) {
  return request(`/center/manager/panel/list`, {
    method: 'post',
    data
  })
}
// 参与人/创建人下拉框
export async function getCreator() {
  return request<API.postResult>('/api/user/manager/user/dropDown/one', {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
// 业务员下拉框
export async function getServicer() {
  return request<API.postResult>('/api/user/manager/user/dropDown/two', {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
// manager/extra/info/domain/check
export async function checkDomain(body: any) {
  return request<API.postResult>(
    '/api/center/manager/extra/info/domain/check',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    }
  )
}
// 添加关联 manager/extra/info/addContactRelation
export async function addContactRelation(body: any) {
  return request<API.postResult>(
    '/api/center/manager/extra/info/addContactRelation',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    }
  )
}
//manager/share/pool/deal
export async function checkPoolDeal(body: any) {
  return request<API.postResult>('/api/center/manager/share/pool/deal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body
  })
}
