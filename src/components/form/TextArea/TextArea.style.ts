import { scale, styleManager } from '@/libs'

export const textAreaStyles = styleManager.createStyleSheet(theme => ({
  textArea: {
    ...theme.components.input,
    paddingTop: theme.paddings.lg,
    height: scale(100),
  },
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
