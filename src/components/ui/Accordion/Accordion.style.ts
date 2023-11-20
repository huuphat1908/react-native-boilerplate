import { scale, styleManager } from '@/libs'

export const accordionStyles = styleManager.createStyleSheet(theme => ({
  container: {
    alignItems: 'center',
  },
  title: {
    color: theme.colors.blue,
    fontSize: scale(16),
    fontWeight: 'bold',
  },
}))
