import { scale, styleManager } from '@/libs'

export const uiStyles = styleManager.createStyleSheet(theme => ({
  parentContainer: {
    marginHorizontal: theme.margins.xl,
    rowGap: scale(20),
  },
  groupContainer: {
    gap: scale(5),
  },
  colorBox: (bgColor: string) => ({
    width: scale(40),
    height: scale(40),
    borderRadius: scale(80),
    backgroundColor: bgColor,
  }),
}))
