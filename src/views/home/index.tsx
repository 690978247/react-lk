import { message, Button } from 'antd'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  const clickMe = () => {
    message.error({
      content: 'Hello, Ant Design!',
      duration: 5
    })
  }

  return (
    <div className='page'>
      这是 一个 Home 页面 <br />
      <Button onClick={clickMe} type='primary'>
        点我!!!
      </Button>
      <div>多语言</div>
      <div>{t('title')}</div>
    </div>
  )
}

export default Home
