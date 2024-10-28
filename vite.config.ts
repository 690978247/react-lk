import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { wrapperEnv } from './src/utils/getEnv'
// 引入资源分析工具
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  // loadEnv 用于打包时(构建时)需要引用的环境变量
  const viteEnv = wrapperEnv(env)

  return {
    plugins: [
      react(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: 'report.html', // 分析图生成的文件名
        open: true // 如果存在本地服务端口，将在打包后自动展示
      }),
    ],
    resolve: {
      // 配置路径别名
      alias: {
        "@": resolve(__dirname, './src')
      }
    },
    // 打包配置
    build: {
      outDir: 'dist',
      // minify: 'esbuild',
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      /* esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log */
        // minify: "terser",
        // terserOptions: {
        // 	compress: {
        // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
        // 		drop_debugger: true
        // 	}
        // },
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: '0.0.0.0',
      open: viteEnv.VITE_OPEN,
      port: viteEnv.VITE_PORT,
      cors: true,
      // 代理跨域（mock 不需要配置跨域，直接能访问，这里只是个示例）
      proxy: {
        '/api': {
          target:
            /* "https://mock.apifox.cn/m1/1736346-0-default/" */ viteEnv.VITE_BASE_URL,
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }
})

