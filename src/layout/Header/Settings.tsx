import { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import SettingDraw from '../SettingDraw'

export default function LayoutSettings() {
  const [showSetting, setShowSetting] = useState<boolean>(false)
  const handleClick = () => {
    setShowSetting(true)
  }

  return (
    <>
      <div className='mr-6 cursor-pointer' onClick={handleClick}>
        <SettingOutlined style={{ fontSize: 20 }} />
      </div>
      <SettingDraw open={showSetting} onCancel={() => setShowSetting(false)} />
    </>
  )
}
