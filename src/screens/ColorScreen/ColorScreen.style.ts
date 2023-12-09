import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ margins, utils: { scale } }) => ({
    container: {
      gap: scale(10),
      margin: margins.xl,
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
  }),
)
