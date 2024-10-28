import { createFromIconfontCN } from '@ant-design/icons'

const scriptUrl = new URL('@/assets/iconfont/iconfont.js', import.meta.url).href;
// 使用iconfont图标
export const IconFont = createFromIconfontCN({
  scriptUrl,
  extraCommonProps: { style: { fontSize: '14px' } },
})
