import { scale, styleManager } from '@/libs'

export const accordionStyles = styleManager.createStyleSheet(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.paddings.lg,
    backgroundColor: theme.colors.blue,
  },
  title: {
    color: theme.colors.white,
    fontSize: scale(16),
    fontWeight: 'bold',
  },
}))
