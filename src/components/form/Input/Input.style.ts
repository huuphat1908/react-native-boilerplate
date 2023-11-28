import { scale, styleManager } from '@/libs'

export const inputStyles = styleManager.createStyleSheet(theme => ({
  readOnlyInput: {
    opacity: 0.4,
  },
  focusedInput: {
    borderColor: theme.colors.blue,
    borderWidth: scale(1.5),
    color: theme.colors.black,
  },
  errorInput: {
    borderColor: theme.colors.red,
  },
}))
