import { FORM_FIELD_READ_ONLY_OPACITY } from '@/constants'
import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    componentContainerReadOnly: {
      opacity: FORM_FIELD_READ_ONLY_OPACITY,
    },
    radioGroupWrapper: {
      gap: scale(5),
    },
    radioRowWrapper: {
      gap: scale(4),
      alignItems: 'center',
    },
    radioButtonWrapper: {
      width: scale(24),
      height: scale(24),
      borderWidth: scale(1),
      borderColor: colors.gray,
      borderRadius: scale(24) / 2,
    },
    radioButtonWrapperActive: {
      borderColor: colors.blue,
    },
    radioButtonWrapperError: {
      borderColor: colors.red,
    },
    radioButtonContent: {
      width: scale(14),
      height: scale(14),
      borderRadius: scale(14) / 2,
    },
    radioButtonContentActive: {
      backgroundColor: colors.blue,
    },
    radioButtonContentError: {
      backgroundColor: colors.red,
    },
  }),
)
