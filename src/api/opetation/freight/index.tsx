import request from '@/utils/request.ts'

/* 运费规则 */
// 列表
export function getFreightData(data: any) {
  return request(`/api/mng/template/page`, {
    method: 'post',
    data
  })
}

// 添加
export function addFreight(data: any) {
  return request(`/api/mng/template/add`, {
    method: 'post',
    data
  })
}

// 启用/禁用
export function disabledFreight(data: any) {
  return request(`/api/mng/template/edit_disabled`, {
    method: 'post',
    data
  })
}

// 列表删除
export function delFreight(data: any) {
  return request(`/api/mng/template/del`, {
    method: 'post',
    data
  })
}

// 区域设置-列表
export function getFreightAreaData(code: string) {
  return request(`/api/mng/template/detail_list/${code}`, {
    method: 'get'
  })
}

// 区域设置-禁用启用
export function disabledArea(data: any) {
  return request(`/api/mng/template/edit_disabled_detail`, {
    method: 'post',
    data
  })
}

// 区域设置-删除
export function delArea(data: any) {
  return request(`/api/mng/template/del_detail`, {
    method: 'post',
    data
  })
}

// 区域设置-编辑-计费方式
export function editChargeData(data: any) {
  return request(`/api/mng/template/addEdit_detail`, {
    method: 'post',
    data
  })
}

// 区域设置-导入
export function importAreaExcel(data: any) {
  return request(`/api/mng/template/detail_import`, {
    method: 'post',
    data
  })
}

// 商品管理-导入
export function importExcel(data: any) {
  return request(`/api/mng/erp_url/import`, {
    method: 'post',
    data,
    showMsg: false
  })
}
// 导入未标记类目关联关系
export async function importUnmarkCategory(options: any) {
  return request('/api/mng/goods/importUnmarkCategory', {
    method: 'POST',
    data: options
  })
}

// 产品提取
export function manuallyPull(data: any) {
  return request(`/goods/manuallyPull`, {
    method: 'post',
    data
  })
}
