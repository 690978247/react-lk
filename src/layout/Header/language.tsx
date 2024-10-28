import { Dropdown, MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { AlignCenterOutlined } from '@ant-design/icons'
import useGlobalStore from '@/store/common.ts'

export default function Language() {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useGlobalStore()

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span className='dropdown-item'>简体中文</span>,
      onClick: () => changeLanguage('zh'),
      disabled: language === 'zh' ? true : false
    },
    {
      key: '2',
      label: <span className='dropdown-item'>English</span>,
      onClick: () => changeLanguage('en'),
      disabled: language === 'en' ? true : false
    }
  ]

  return (
    <>
      <Dropdown menu={{ items }} placement='bottom' arrow trigger={['click']}>
        <AlignCenterOutlined style={{ fontSize: 20, marginRight: 24 }} />
      </Dropdown>
    </>
  )
}
