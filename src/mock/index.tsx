export const getAdminMenus = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          name: 'home',
          route: '/home'
        },
        {
          name: 'test',
          route: '/home/test'
        }
      ])
    }, 1000)
  })
}

export const getUserMenus = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          name: 'home',
          route: '/home'
        }
      ])
    }, 1000)
  })
}