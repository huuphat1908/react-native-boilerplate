import { styleManager } from '@/libs'

export const switchStyles = styleManager.createStyleSheet(theme => ({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    borderColor: theme.colors.gray,
    borderWidth: 1,
  },
  switchButton: {
    backgroundColor: theme.colors.red,
    position: 'absolute',
    borderRadius: 100,
  },
  wrapperReadOnly: {
    opacity: 0.4,
  },
}))
