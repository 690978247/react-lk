import { Layout, theme } from 'antd'
import Collapse from './Collapse'
import style from './index.module.less'
import MyAvatar from './MyAvatar'
// import Theme from './Theme'
import LayoutSettings from './Settings'
import Lanauge from './language'

const LayoutHeader = () => {
  const { Header } = Layout
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const headerStyle: React.CSSProperties = {
    backgroundColor: colorBgContainer,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 24
  }

  return (
    <Header style={headerStyle}>
      <div className={style.headerLf}>
        <Collapse />
      </div>
      <div className={style.headerRt}>
        <Lanauge />
        <LayoutSettings />
        {/* <Theme /> */}
        <MyAvatar />
      </div>
    </Header>
  )
}

export default LayoutHeader
