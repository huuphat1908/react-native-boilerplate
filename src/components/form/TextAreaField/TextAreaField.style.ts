import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ components, paddings, colors, utils: { scale } }) => ({
    textArea: {
      ...components.input,
      paddingTop: paddings.lg,
      height: scale(100),
    },
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
