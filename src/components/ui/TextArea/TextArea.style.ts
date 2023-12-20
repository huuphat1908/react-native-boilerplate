import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, utils: { scale } }) => ({
    textArea: {
      borderWidth: scale(1),
      borderRadius: 10,
      borderColor: colors.black,
      paddingHorizontal: scale(12),
      fontSize: scale(13),
      fontFamily: 'SFProText-Regular',
      color: colors.black,
      width: '100%',
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
