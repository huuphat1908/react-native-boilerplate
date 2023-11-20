import { scale, styleManager } from '@/libs'

export const dividerStyles = styleManager.createStyleSheet(theme => ({
  container: (color?: string, thickness?: number) => ({
    borderBottomColor: color || theme.colors.black,
    borderBottomWidth: thickness ? scale(thickness) : scale(1.5),
    height: 0,
  }),
}))
