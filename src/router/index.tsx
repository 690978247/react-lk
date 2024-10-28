/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import lazyComponent from './lazyComponent'

const Layout = lazyComponent(lazy(() => import('@/layout/index')))

/* 重定向 不要添加name属性 */

/* 静态页面 */
const routers = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: Layout,
    name: 'Home',
    icon: 'icon-shouye-xian',
    children: [
      // 默认子路由，注意重定向路径最前面要加'/'，并且斜杠后面跟的是带有父路由的完整路径
      {
        index: true,
        element: <Navigate to='/home/index' />
      },
      {
        path: '/home/index',
        name: '首页',
        element: lazyComponent(lazy(() => import('@/views/home/index')))
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      hideInMenu: true
    },
    element: lazyComponent(lazy(() => import('@/views/login/index')))
  },
  /* 嵌套路由 */
  {
    path: '/menu',
    element: Layout,
    name: 'Menu',
    icon: 'icon-shuju',
    children: [
      // 默认子路由，注意重定向路径最前面要加'/'，并且斜杠后面跟的是带有父路由的完整路径
      {
        index: true,
        element: <Navigate to='/menu/menu1-1' />
      },
      {
        path: '/menu/menu1-1',
        name: 'Menu1-1',
        icon: 'icon-xinxixianxing',
        element: lazyComponent(
          lazy(() => import('@/views/menus/menu1-1/index'))
        ),
        children: [
          // 默认子路由，注意重定向路径最前面要加'/'，并且斜杠后面跟的是带有父路由的完整路径
          {
            index: true,
            element: <Navigate to='/menu/menu1-1/menu1-1-1' />
          },
          {
            path: '/menu/menu1-1/menu1-1-1',
            name: 'Menu1-1-1',
            icon: 'icon-xinxixianxing',
            element: lazyComponent(
              lazy(() => import('@/views/menus/menu1-1/menu1-1-1/index'))
            )
          },
          {
            path: '/menu/menu1-1/menu1-1-2',
            name: 'Menu1-1-2',
            icon: 'icon-xinxixianxing',
            element: lazyComponent(
              lazy(() => import('@/views/menus/menu1-1/menu1-1-2/index'))
            )
          }
        ]
      },
      {
        path: '/menu/menu1-2',
        name: 'Menu1-2',
        icon: 'icon-xinxixianxing',
        element: lazyComponent(
          lazy(() => import('@/views/menus/menu1-2/index'))
        )
      },
      {
        path: '/menu/menu1-3',
        name: 'Menu1-3',
        icon: 'icon-xinxixianxing',
        element: lazyComponent(
          lazy(() => import('@/views/menus/menu1-3/index'))
        )
      }
    ]
  },
  /* 错误页面 */
  {
    path: '*',
    name: '404',
    meta: {
      hideInMenu: true
    },
    element: lazyComponent(lazy(() => import('@/views/error/404')))
  }
]

const router = createBrowserRouter(routers)
export { router }
