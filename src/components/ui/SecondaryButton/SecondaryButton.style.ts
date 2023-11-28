import { scale, styleManager } from '@/libs'

export const secondaryButtonStyles = styleManager.createStyleSheet(theme => ({
  fullWidth: {
    flex: 1,
  },
  wrapper: (disabled: boolean | undefined) => ({
    width: '100%',
    backgroundColor: theme.colors.white,
    padding: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: theme.colors.blue,
    borderWidth: 1,
    opacity: disabled ? 0.7 : 1,
  }),
  title: {
    color: theme.colors.blue,
    fontSize: scale(16),
    fontFamily: 'SFProText-Bold',
  },
}))
