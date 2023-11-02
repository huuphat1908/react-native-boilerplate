import { scale, styleManager } from '@/libs'

export const primaryButtonStyles = styleManager.createStyleSheet(theme => ({
  view: (disabled: boolean | undefined) => ({
    backgroundColor: theme.colors.blue,
    padding: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    opacity: disabled ? 0.7 : 1,
  }),
  text: {
    color: theme.colors.white,
    fontSize: scale(16),
  },
}))
