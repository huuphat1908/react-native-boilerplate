import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    textGroupWrapper: {
      gap: scale(15),
    },
    message: {
      color: colors.darkGray,
    },
    buttonGroupWrapper: {
      gap: scale(20),
    },
  }),
)
