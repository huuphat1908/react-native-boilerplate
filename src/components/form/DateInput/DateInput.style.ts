import { styleManager } from '@/libs'

export const dateInputStyles = styleManager.createStyleSheet(theme => ({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.black,
    paddingHorizontal: theme.paddings.xl,
  },
}))
