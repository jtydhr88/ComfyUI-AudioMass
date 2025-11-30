import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    audiomass: {
      title: 'AudioMass'
    }
  },
  zh: {
    audiomass: {
      title: 'AudioMass编辑器'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  messages
})
