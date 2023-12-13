import { create } from 'zustand'

import { LanguageCode } from '@/types/i18next'

type AppTheme = 'Light' | 'Dark' | 'Setting'

type DateFormat = 'DD/MM/YYYY'

type TimeFormat = 'HH:mm'

interface ApplicationState {
  theme: AppTheme
  language: LanguageCode
  dateFormat: DateFormat
  timeFormat: TimeFormat
  isLoggedIn: boolean
}

const useApplicationState = create<ApplicationState>()(set => ({
  theme: 'Light',
  language: 'en',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  isLoggedIn: false,

  setTheme: (theme: AppTheme) => set(() => ({ theme })),
  setLanguage: (language: LanguageCode) => set(() => ({ language })),
  setDateFormat: (dateFormat: DateFormat) => set(() => ({ dateFormat })),
  setTimeFormat: (timeFormat: TimeFormat) => set(() => ({ timeFormat })),
  login: () => set(() => ({ isLoggedIn: true })),
  logout: () => set(() => ({ isLoggedIn: false })),
}))

export default useApplicationState
