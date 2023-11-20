import { scale, styleManager } from '@/libs'

export const typographyScreenStyles = styleManager.createStyleSheet(theme => ({
  container: {
    gap: scale(10),
    margin: theme.margins.xl,
  },
}))
