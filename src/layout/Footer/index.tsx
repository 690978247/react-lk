import { Layout } from 'antd'
import useGlobalStore from '@/store/common'

const LayoutFooter = () => {
  const { Footer } = Layout

  const { footer } = useGlobalStore()

  const footerStyle: React.CSSProperties = {
    padding: 0,
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }

  return (
    footer && <Footer style={footerStyle}>This is footer &copy; Footer</Footer>
  )
}

export default LayoutFooter
