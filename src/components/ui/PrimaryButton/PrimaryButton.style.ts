import { scale, styleManager } from '@/libs'

export const primaryButtonStyles = styleManager.createStyleSheet(theme => ({
  fullWidth: {
    flex: 1,
  },
  wrapper: (disabled?: boolean) => ({
    backgroundColor: theme.colors.blue,
    padding: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    opacity: disabled ? 0.7 : 1,
  }),
  title: {
    color: theme.colors.white,
    fontSize: scale(16),
  },
}))
