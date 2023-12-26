import { styleManager } from '@/libs'

const LOGO_SIZE = 120
const FIELD_GAP = 12

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, utils: { scale } }) => ({
    container: {
      flex: 1,
      padding: paddings.lg,
      backgroundColor: colors.white,
    },
    brandingWrapper: {
      gap: scale(FIELD_GAP),
      padding: paddings.xxl,
    },
    logo: {
      width: scale(LOGO_SIZE),
      height: scale(LOGO_SIZE),
    },
    formWrapper: {
      gap: scale(FIELD_GAP),
    },
    formGroupWrapper: {
      gap: scale(4),
    },
  }),
)
