import { BACKDROP_OPACITY } from '@/constants'
import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, utils: { scale, hexToRGBA } }) => ({
    backdrop: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: hexToRGBA(colors.black, BACKDROP_OPACITY),
    },
    wrapper: {
      borderRadius: 16,
      padding: paddings.xxl,
      gap: scale(40),
      backgroundColor: colors.white,
    },
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
