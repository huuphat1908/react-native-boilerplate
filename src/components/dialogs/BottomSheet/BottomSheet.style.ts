import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale, hexToRGBA } }) => ({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: hexToRGBA(colors.black, 0.4),
    },
    bottomSheet: {
      backgroundColor: colors.white,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
    },
    dragableWrapper: {
      width: scale(100),
      height: scale(32),
      alignSelf: 'center',
      justifyContent: 'center',
    },
    dragHandle: {
      backgroundColor: colors.gray,
      width: scale(100),
      height: scale(6),
      borderRadius: 10,
    },
  }),
)
