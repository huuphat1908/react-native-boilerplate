import { FORM_FIELD_READ_ONLY_OPACITY } from '@/constants'
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
      opacity: FORM_FIELD_READ_ONLY_OPACITY,
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
