import { styleManager } from '@/libs'

export const inputStyles = styleManager.createStyleSheet(theme => ({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.black,
    paddingHorizontal: theme.paddings.xl,
  },
}))
