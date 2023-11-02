import { scale, styleManager } from '@/libs'

export const secondaryButtonStyles = styleManager.createStyleSheet(theme => ({
  view: (disabled: boolean | undefined) => ({
    backgroundColor: theme.colors.white,
    padding: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: theme.colors.blue,
    borderWidth: 1,
    opacity: disabled ? 0.7 : 1,
  }),
  text: {
    color: theme.colors.blue,
    fontSize: scale(16),
  },
}))
