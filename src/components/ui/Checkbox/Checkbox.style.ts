import { FORM_FIELD_READ_ONLY_OPACITY } from '@/constants'
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
      opacity: FORM_FIELD_READ_ONLY_OPACITY,
    },
    wrapperChecked: {
      backgroundColor: colors.blue,
    },
  }),
)
