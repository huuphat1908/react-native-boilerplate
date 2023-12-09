import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    readOnlyInput: {
      opacity: 0.4,
    },
    focusedInput: {
      borderColor: colors.blue,
      borderWidth: scale(1.5),
      color: colors.black,
    },
    errorInput: {
      borderColor: colors.red,
    },
  }),
)
