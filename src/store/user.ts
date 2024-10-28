import { create } from 'zustand'

interface IUserState {
  userInfo: {
    name: string
    avatar: string
  }
}

const useUserStore = create<IUserState>((set) => ({
  userInfo: {
    name: '用户名',
    avatar: 'https://pro.spicyboy.cn/assets/png/avatar-2UWBzNdW.png'
  },
  updateUserInfo: (userInfo: any) => set((state) => ({ ...userInfo, ...state }))
}))

export default useUserStore
