import { create } from 'zustand'

import { LanguageCode } from '@/types/i18next'

type AppTheme = 'Light' | 'Dark' | 'Setting'

type DateFormat = 'DD/MM/YYYY'

type TimeFormat = 'HH:mm'

type State = {
  theme: AppTheme
  language: LanguageCode
  dateFormat: DateFormat
  timeFormat: TimeFormat
  isLoggedIn: boolean
}

type Actions = {
  setTheme: (theme: AppTheme) => void
  setLanguage: (language: LanguageCode) => void
  setDateFormat: (dateFormat: DateFormat) => void
  setTimeFormat: (timeFormat: TimeFormat) => void
  login: () => void
  logout: () => void
}

const initialState: State = {
  theme: 'Light',
  language: 'en',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  isLoggedIn: false,
}

const useApplicationState = create<State & Actions>()(set => ({
  ...initialState,
  setTheme: theme => set(() => ({ theme })),
  setLanguage: language => set(() => ({ language })),
  setDateFormat: dateFormat => set(() => ({ dateFormat })),
  setTimeFormat: timeFormat => set(() => ({ timeFormat })),
  login: () => set(() => ({ isLoggedIn: true })),
  logout: () => set(() => ({ isLoggedIn: false })),
}))

export default useApplicationState
