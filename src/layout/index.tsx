import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SiderMenu from './SiderMenu/index.tsx'
import LayoutHeader from '@/layout/Header/index.tsx'
import LayoutFooter from '@/layout/Footer/index.tsx'
import useGlobalStore from '@/store/common.ts'
import { useEffect } from 'react'

function MainLayout() {
  const { Sider, Content } = Layout
  const { isCollapse, updateCollapse } = useGlobalStore()

  const contentStyle: React.CSSProperties = {
    padding: 24
  }

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth
        if (!isCollapse && screenWidth < 1200) updateCollapse(true)
        if (!isCollapse && screenWidth > 1200) updateCollapse(false)
      })()
    }
  }

  useEffect(() => {
    listeningWindow()
  }, [])

  return (
    <Layout>
      {/* 侧边栏 */}
      <Sider theme='dark' collapsed={isCollapse}>
        <SiderMenu />
      </Sider>
      {/* 主题区域 */}
      <Layout>
        {/* header 顶部区域 */}
        <LayoutHeader />
        {/* 主体内容 */}
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        {/* 底部 */}
        <LayoutFooter />
      </Layout>
    </Layout>
  )
}

export default MainLayout
