import { forwardRef } from 'react'
import { Drawer, Divider, ColorPicker, Switch } from 'antd'
import { TrophyOutlined, SettingOutlined } from '@ant-design/icons'
import useGlobalStore from '@/store/common'

const SettingDraw = forwardRef((props: any, ref) => {
  const { open, onCancel } = props
  const { theme, setTheme, isCollapse, switchCollapse, footer, setFooter } =
    useGlobalStore()

  const handleCancel = () => {
    onCancel()
  }

  const switchDarkTheme = (checked: boolean) => {
    setTheme({
      isDark: checked
    })
  }

  const switchFooter = (checked: boolean) => {
    setFooter(checked)
  }

  return (
    <Drawer
      title='全局设置'
      closable={false}
      onClose={handleCancel}
      open={open}
    >
      {/* 主题 */}
      <Divider>
        <span className='text-[14px]'>
          <TrophyOutlined className='mr-2' />
          全局主题
        </span>
      </Divider>

      <div className='flex justify-between mb-5'>
        <span>主题颜色</span>
        <div>
          <ColorPicker
            showText
            value={theme?.token?.colorPrimary || '#1890ff'}
            onChangeComplete={(color) =>
              setTheme({
                token: {
                  colorPrimary: color.toHexString()
                }
              })
            }
          />
        </div>
      </div>

      <div className='flex justify-between'>
        <span>暗黑模式</span>
        <div>
          <Switch
            className='mr-2'
            checked={theme.isDark}
            onChange={switchDarkTheme}
          />
        </div>
      </div>

      {/* 界面设置 */}
      <Divider>
        <span className='text-[14px]'>
          <SettingOutlined className='mr-2' />
          界面设置
        </span>
      </Divider>

      <div className='flex justify-between mb-5'>
        <span>折叠菜单</span>
        <div>
          <Switch
            className='mr-2'
            checked={isCollapse}
            onChange={switchCollapse}
          />
        </div>
      </div>

      <div className='flex justify-between mb-5'>
        <span>页脚</span>
        <div>
          <Switch className='mr-2' checked={footer} onChange={switchFooter} />
        </div>
      </div>
    </Drawer>
  )
})

export default SettingDraw
