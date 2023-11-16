import { scale, styleManager } from '@/libs'

export const uiStyles = styleManager.createStyleSheet(theme => ({
  parentContainer: {
    marginHorizontal: theme.margins.xl,
    paddingTop: theme.margins.xl,
    paddingBottom: scale(40),
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

  hStackContainter: {
    justifyContent: 'space-between',
  },
  vStackContainer: {
    gap: scale(10),
  },
  stackItem: {
    width: scale(60),
    height: scale(60),
    backgroundColor: theme.colors.blue,
  },
  center: {
    backgroundColor: theme.colors.gold,
    height: scale(100),
  },
}))
