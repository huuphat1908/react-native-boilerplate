import { scale, styleManager } from '@/libs'

export const checkboxStyles = styleManager.createStyleSheet(theme => ({
  wrapper: {
    width: scale(24),
    height: scale(24),
    borderWidth: scale(1),
    borderRadius: 2,
  },
  wrapperReadOnly: {
    opacity: 0.4,
  },
  wrapperChecked: {
    backgroundColor: theme.colors.blue,
  },
}))
