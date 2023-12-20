import { FORM_FIELD_READ_ONLY_OPACITY } from '@/constants'
import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, utils: { scale } }) => ({
    itemWrapper: {
      padding: paddings.xl,
    },
    dropdownContainer: {
      width: '100%',
      height: '100%',
    },
    dropdownWrapper: {
      position: 'absolute',
      backgroundColor: colors.white,
      maxHeight: scale(240),
      borderRadius: 10,
      borderWidth: scale(1),
      borderColor: colors.gray,
    },
    searchWrapper: {
      borderBottomWidth: scale(1),
      borderBottomColor: colors.gray,
    },
    searchInput: {
      borderWidth: 0,
    },
    errorInput: {
      borderColor: colors.red,
    },
    readOnlyInput: {
      opacity: FORM_FIELD_READ_ONLY_OPACITY,
    },
    focusedInput: {
      borderColor: colors.blue,
      borderWidth: scale(1.5),
    },
  }),
)
