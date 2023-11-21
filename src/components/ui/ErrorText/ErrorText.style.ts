import { scale, styleManager } from '@/libs'

export const errorTextStyles = styleManager.createStyleSheet(theme => ({
  wrapper: {
    marginTop: scale(1),
    gap: scale(1),
    alignItems: 'center',
  },
  message: {
    color: theme.colors.red,
  },
}))
