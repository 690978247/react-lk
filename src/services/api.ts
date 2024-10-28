import request from '@/utils/request.ts'
/**
 * 查询标签管理列表
 */
export async function queryTagList(options: any) {
  return request<API.postResult>('/api/mng/config/getMarks', {
    method: 'POST',
    data: options,
    timeout: 10000
  })
}

/**
 * 查询参数列表
 */
export async function queryParamsList(options: any) {
  return request<API.postResult>('/api/mng/config/getPriceConfig', {
    method: 'POST',
    data: options,
    timeout: 10000
  })
}
