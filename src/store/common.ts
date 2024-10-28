import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IState {
  isCollapse: boolean
  theme?: any
  footer: boolean
  language: string
}

interface IAction {
  switchCollapse: () => void
  updateCollapse: (newCollapse: boolean) => void
  setTheme: (theme: any) => void
  setFooter: (state: boolean) => void
  setLanguage: (state: string) => void
}

const useGlobalStore = create<IState & IAction>()(
  persist(
    (set) => ({
      isCollapse: false,
      theme: {
        isDark: false
      },
      footer: false,
      language: 'zh',
      switchCollapse: () =>
        set((state: IState) => ({ isCollapse: !state.isCollapse })),

      updateCollapse: (newCollapse: IState['isCollapse']) =>
        set(() => ({ isCollapse: newCollapse })),
      setTheme: (newTheme: any) => {
        console.log(newTheme)
        return set((state) => ({
          theme: {
            ...state.theme,
            ...newTheme
          }
        }))
      },
      setFooter: (state: IState['footer']) => set(() => ({ footer: state })),
      setLanguage: (state: IState['language']) =>
        set(() => ({ language: state }))
    }),
    // 数据持久化
    {
      name: 'globalState' // name of the item in the storage (must be unique)
    }
  )
)

export default useGlobalStore
