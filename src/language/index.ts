import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './modules/zh.ts'
import en from './modules/en.ts'

const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
}

// https://www.i18next.com/overview/configuration-options
i18n.use(initReactI18next).init({
  resources,
  // fallbackLng: "zh", 没有可用的翻译语言时，要使用的语言
  lng: 'zh',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
