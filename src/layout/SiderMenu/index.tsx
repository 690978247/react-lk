import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { router } from '@/router/index'
// import { getAdminMenus } from '@/mock/index'
import { To, useLocation, useNavigate } from 'react-router-dom'
import { IconFont } from '@/utils/icon'
import { getOpenKeys } from '@/utils/utils'
import useGlobalStore from '@/store/common'

const { routes } = router

const SiderMenu: React.FC = () => {
  const { isCollapse } = useGlobalStore()

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuItems, setMenuItems] = useState<any[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    getMenuData()
  }, [])

  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname])
    isCollapse ? null : setOpenKeys(getOpenKeys(pathname))
  }, [pathname, isCollapse])

  // 设置当前展开的 subMenu
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1)
      return setOpenKeys(openKeys)
    const latestOpenKey = openKeys[openKeys.length - 1]
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
    setOpenKeys([latestOpenKey])
  }

  const getMenuData = () => {
    const menus = loopMenuItem(routes)
    setMenuItems(menus)
  }

  const hasOneShowingChild = (children: any = []) => {
    const showingChildren = children.filter((item: { hideInMenu: any }) => {
      if (item?.meta?.hideInMenu) {
        return false
      } else {
        return true
      }
    })

    if (showingChildren.length === 2) {
      return true
    }
    if (showingChildren.length === 0) {
      return true
    }
    return false
  }

  const loopMenuItem = (menus: any): any[] => {
    const newMenus: any = []
    menus.flatMap((item: any) => {
      const child = item.children ?? []
      if (!item?.meta?.hideInMenu) {
        if (hasOneShowingChild(child)) {
          if (child.length === 2) {
            /* 只有一个子节点的情况 */
            newMenus.push({
              key: child[1].path,
              label: child[1].name,
              icon: item.icon && <IconFont type={item.icon} />,
              // hideInMenu: child[1].hideInMenu
              meta: child[1].meta
            })
          } else {
            /* 多children 嵌套 && 去除重定向 */
            if (item.name) {
              newMenus.push({
                key: item.path,
                label: item.name,
                icon: item.icon && <IconFont type={item.icon} />,
                // hideInMenu: item.hideInMenu
                meta: item.meta
              })
            }
          }
        } else {
          newMenus.push({
            key: item.path,
            label: item.name,
            icon: item.icon && <IconFont type={item.icon} />,
            // hideInMenu: item.hideInMenu,
            meta: item.meta,
            children: [...loopMenuItem(child)]
          })
        }
      }
    })
    return newMenus
  }

  const handleItemClick = (data: { key: To }) => {
    navigate(data.key)
  }

  return (
    <Menu
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onClick={handleItemClick}
      mode='inline'
      theme='dark'
      items={menuItems}
      onOpenChange={onOpenChange}
    />
  )
}

export default SiderMenu
