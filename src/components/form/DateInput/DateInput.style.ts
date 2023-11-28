import { styleManager } from '@/libs'

export const dateInputStyles = styleManager.createStyleSheet(theme => ({
  readOnlyInput: {
    opacity: 0.4,
  },
  errorInput: {
    borderColor: theme.colors.red,
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    height: '100%',
  },
}))
