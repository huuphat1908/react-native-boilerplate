import { scale, styleManager } from '@/libs'

export const formElementScreenStyles = styleManager.createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: theme.paddings.xl,
  },
  buttonGroupWrapper: {
    gap: scale(10),
  },
}))
