import useGlobalStore from '@/store/common'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import style from './index.module.less'

const Collapse = () => {
  const { isCollapse, switchCollapse } = useGlobalStore()

  return (
    <div
      className={style.collapsed}
      onClick={() => {
        switchCollapse()
      }}
    >
      {isCollapse ? (
        <MenuUnfoldOutlined id='isCollapse' />
      ) : (
        <MenuFoldOutlined id='isCollapse' />
      )}
    </div>
  )
}

export default Collapse
