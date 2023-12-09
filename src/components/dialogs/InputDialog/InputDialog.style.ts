import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, margins, colors, utils: { scale, hexToRGBA } }) => ({
    backdrop: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: hexToRGBA(colors.black, 0.4),
    },
    wrapper: {
      borderRadius: 16,
      padding: paddings.xxl,
      marginHorizontal: margins.xl,
      gap: scale(40),
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
