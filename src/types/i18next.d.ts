import 'i18next'

import { defaultNS } from '@/i18n'
import * as resources from '@/i18n/resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}

type LanguageCode = keyof typeof resources

export const languages: Record<LanguageCode, string> = {
  en: 'English',
  vi: 'Việt Nam',
}
