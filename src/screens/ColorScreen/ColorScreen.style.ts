import { scale, styleManager } from '@/libs'

export const colorScreenStyles = styleManager.createStyleSheet(theme => ({
  container: {
    gap: scale(10),
    margin: theme.margins.xl,
  },
  groupWrapper: {
    alignItems: 'center',
    gap: scale(4),
  },
  colorBox: (bgColor: string) => ({
    width: scale(40),
    height: scale(40),
    borderRadius: scale(80),
    backgroundColor: bgColor,
  }),
}))
