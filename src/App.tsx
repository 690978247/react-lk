import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import { App as AntdApp, ConfigProvider, theme as antdTheme } from 'antd'
import useGlobalStore from './store/common'

function App() {
  const { theme } = useGlobalStore()
  const { isDark } = theme
  const algorithm = isDark
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm

  return (
    <ConfigProvider
      theme={{
        ...theme,
        algorithm
      }}
    >
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
