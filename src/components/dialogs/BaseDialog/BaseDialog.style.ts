import { BACKDROP_OPACITY } from '@/constants'
import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, paddings, utils: { scale, hexToRGBA } }) => ({
    backdrop: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: hexToRGBA(colors.black, BACKDROP_OPACITY),
    },
    wrapper: {
      borderRadius: 16,
      padding: paddings.xxl,
      gap: scale(40),
      backgroundColor: colors.white,
    },
  }),
)
