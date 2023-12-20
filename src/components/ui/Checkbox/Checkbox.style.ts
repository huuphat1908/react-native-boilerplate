import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    wrapper: {
      width: scale(24),
      height: scale(24),
      borderWidth: scale(1),
      borderRadius: 2,
    },
    wrapperReadOnly: {
      opacity: 0.4,
    },
    wrapperChecked: {
      backgroundColor: colors.blue,
    },
  }),
)
