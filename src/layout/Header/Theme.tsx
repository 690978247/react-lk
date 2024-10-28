import useGlobalStore from '@/store/common'
import { SkinOutlined } from '@ant-design/icons'
import { ColorPicker, Divider, Popover, Switch, theme as antdTheme } from 'antd'

export default function Theme() {
  const { theme, setTheme } = useGlobalStore()

  const switchDarkTheme = (checked: boolean) => {
    setTheme({
      isDark: checked
    })
  }

  const content = (
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
      <Divider />
      <div>
        <Switch
          className='mr-2'
          checked={theme.isDark}
          onChange={switchDarkTheme}
        />
        暗黑模式
      </div>
    </div>
  )

  return (
    <div className='mr-6'>
      <Popover trigger='click' placement='bottom' content={content}>
        <SkinOutlined style={{ fontSize: 20 }} />
      </Popover>
    </div>
  )
}
