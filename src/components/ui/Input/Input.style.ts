import { FORM_FIELD_READ_ONLY_OPACITY } from '@/constants'
import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    input: {
      borderWidth: scale(1),
      borderRadius: 10,
      borderColor: colors.black,
      paddingHorizontal: scale(12),
      height: scale(40),
      fontSize: scale(13),
      fontFamily: 'SFProText-Regular',
      color: colors.black,
      width: '100%',
    },
    leftIcon: {
      position: 'absolute',
      left: scale(10),
      height: '100%',
    },
    rightIcon: {
      position: 'absolute',
      right: scale(10),
      height: '100%',
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
    readOnlyIcon: {
      opacity: FORM_FIELD_READ_ONLY_OPACITY,
    },
  }),
)
