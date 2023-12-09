import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(({ colors }) => ({
  readOnlyInput: {
    opacity: 0.4,
  },
  errorInput: {
    borderColor: colors.red,
  },
}))
