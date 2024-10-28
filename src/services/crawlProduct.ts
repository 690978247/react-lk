import { message } from 'antd'

export function cheeckChromePlugin() {
  const pluginName = localStorage.getItem('sm-plugin-name')
  const pluginVersion = localStorage.getItem('sm-plugin-version')

  console.log('[💠插件检测]  pluginName: ', pluginName)
  console.log('[💠插件检测]  pluginVersion: ', pluginVersion)
  const dataInfo = localStorage.getItem('sm-spu-4')
  console.log('[💠插件检测]  [sm-spu-4]: ', dataInfo)

  if (pluginName === null || pluginVersion === null) {
    console.log('[💠插件检测]  插件未安装,如果开发环境,需要使用localhost:8000')
    message.warning('插件未安装,如果开发环境,需要使用localhost:8000')
    return false
  }

  console.log('[💠插件检测] ✅')
  return true
}

export function sendCrawlMessage(id: any, url: any) {
  console.log('[💠发送采集] id=', id, 'url=', url)
  window.postMessage(
    [
      {
        type: 'spu-link-storage',
        id: id,
        url: url,
      },
    ],
    '*',
  )
  console.log('[💠发送采集] 发送成功,3秒后检索结果')
}

export async function queryCrawlData(id: any): Promise<any> {
  let time = 1
  return new Promise((resolve, reject) => {
    let timer: any = setInterval(() => {
      console.log('执行几次', time)
      if (time > 5) {
        clearInterval(timer)
        timer = null
        reject(new Error('数据采集失败，请确认是否已进行验证'))
      } else {
        const res = localStorage.getItem(id)
        if (!res) {
          time++
        } else {
          clearInterval(timer)
          timer = null
          try {
            const jsonRes = JSON.parse(res)
            const clearRes = filterInvalidSkuData(jsonRes)
            const transRes = convertSkuIds(clearRes)
            console.log('[💠采集结果]  数据处理后: ', transRes)
            const { code } = transRes
            if (code === 10000) {
              resolve(transRes)
            } else {
              reject(new Error('采集失败，请检查下速卖通产品的属性是否存在或重新刷新下页面！'))
            }
          } catch (error) {
            clearInterval(timer)
            timer = null
            reject(new Error('数据采集失败，请确认是否已进行验证！'))
          }
        }
      }
    }, 1000)
  })

  // return new Promise((resolve, reject) => {
  //   setTimeout(async () => {
  //     console.log('[💠发送采集] 开始检测结果 id=', id)
  //     try {
  //       // 模拟数据采集过程
  //       const res = localStorage.getItem(id)
  //       if (!res) {
  //         console.log('[💠采集结果] ❌ 采集失败,数据为空')
  //         reject(new Error('数据采集失败'))
  //       } else {
  //         try {
  //           const jsonRes = JSON.parse(res)
  //           const clearRes = filterInvalidSkuData(jsonRes)
  //           const transRes = convertSkuIds(clearRes)
  //           console.log('[💠采集结果]  数据处理后: ', transRes)

  //           const { code } = transRes
  //           if (code === 10000) {
  //             resolve(transRes)
  //           } else {
  //             reject(new Error('[💠采集结果] 格式有误 01'))
  //           }
  //         } catch (error) {
  //           reject(new Error('[💠采集结果] 格式有误 02'))
  //         }
  //       }
  //     } catch (error) {
  //       message.error('数据采集出错')
  //       console.error('[💠采集结果] 采集出错:', error)
  //       reject(error)
  //     }
  //   }, 5000)
  // })
}

async function collectData(id: any): Promise<any> {
  // 这里模拟一个异步数据采集过程，实际中应该根据具体业务实现
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = localStorage.getItem(id)
      console.log('[💠采集结果]  localStorage 数据: ', res)
      if (!res || JSON.parse(res).status === 'error') {
        console.log('[💠采集结果]  localStorage 采集失败')
        resolve({})
      } else {
        const response = filterInvalidSkuData(JSON.parse(res))
        console.log('[💠采集结果]  localStorage 采集成功')
        resolve(response)
      }

      // 假设在这里进行数据采集操作
      resolve({ id, name: '商品名称', price: 99.99 })
    }, 2000) // 这里模拟一个耗时 2 秒的数据采集过程
  })
}

// 过滤无效skuPriceList
const filterInvalidSkuData = (resJson: any) => {
  console.log('[💠采集结果] filterInvalidSkuData 处理数据', resJson)
  const { data } = resJson

  try {
    // 检查data中是否包含skuProperties
    if (!data || !data.skuProperties) {
      console.log('[💠采集结果] filterInvalidSkuData 错误: 缺少skuProperties数据')
      return data
    }

    // 从数据中提取skuPropertyValues中所有的propertyValueId
    const validIds = new Set()
    data.skuProperties.forEach((prop: any) => {
      if (prop.skuPropertyValues) {
        prop.skuPropertyValues.forEach((value: any) => {
          validIds.add(value.propertyValueId.toString())
        })
      }
    })

    // 检查data中是否包含skuPriceList
    if (!data.skuPriceList) {
      console.log('[💠采集结果] filterInvalidSkuData 缺少skuPriceList数据,不需要处理 ✅')
      return data
    }

    // 清洗skuPriceList，移除无效的skuPropIds
    const cleanSkuPriceList = data.skuPriceList.filter((sku: any) => {
      if (!sku.skuPropIds) {
        console.log('[💠采集结果] filterInvalidSkuData ❎ 删除的元素(无skuPropIds):', sku)
        return false
      }
      const isValid = sku.skuPropIds.every((id: any) => validIds.has(id))
      if (!isValid) {
        console.log('[💠采集结果] filterInvalidSkuData 删除的元素:', sku)
      }
      return isValid
    })

    data.skuPriceList = cleanSkuPriceList
    return resJson
  } catch (error) {
    console.log('[💠采集结果] ❌转换错误,', error)
    return data
  }
}

export const convertSkuIds = (resJson: any) => {
  try {
    const { data } = resJson // 修正数据访问方式，直接使用 resJson.data
    const uuidMap = new Map<number, string>() // 从原始 ID 映射到 UUID
    // 更新 skuPropertyId 并为每个 propertyValueId 创建新的 UUID 映射
    data?.skuProperties?.forEach((prop: any) => {
      const pidParent = `${getUUID()}` // 为 skuPropertyId 生成新的 UUID
      prop.skuPropertyId = pidParent // 将新 UUID 分配给 skuPropertyId

      prop.skuPropertyValues.forEach((value: any) => {
        const subPid = `${pidParent}_${getUUID()}` // 生成子 PID
        const newSkuAttr = subPid.replace('_', ':') // 替换 _ 为 : 生成新的 skuAttr
        uuidMap.set(value.propertyValueId, subPid) // 将新的 subPid 存储在映射中
        value.propertyValueId = subPid
        value.skuAttr = newSkuAttr
      })
    })

    // 更新 skuPriceList 中的 skuPropIds 以使用新的 subPid，并更新 skuAttr
    data?.skuPriceList?.forEach((sku: any) => {
      sku.skuPropIds = sku.skuPropIds.map((id: string) => uuidMap.get(parseInt(id)) || id) // 将 skuPropIds 更新为新的 subPid
      // 将每个 ID 的 _ 替换为 : 并使用 ; 拼接成新的 skuAttr
      sku.skuAttr = sku.skuPropIds.map((id: string) => id.replace(/_/g, ':')).join(';')
    })

    return resJson // 返回更新后的 JSON 对象
  } catch (error) {
    console.error('[💠采集结果] 转换 SKU IDs 时出错:', error) // 捕获并记录错误
    return resJson // 出错时返回原始 JSON 对象
  }
}

// UUID生成函数，确保它被正确定义和可

export function transformProductModel(data: any) {
  console.log('传入商品格式:', data)
  return {}
}

export function getUUID(): string {
  // return 'uuid' + Math.random().toString(36).substr(2, 16)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
