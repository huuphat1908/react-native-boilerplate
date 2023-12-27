import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, shadow, utils: { scale } }) => ({
    fullWidth: {
      flex: 1,
    },
    wrapper: {
      backgroundColor: colors.blue,
      borderRadius: 8,
      padding: scale(12),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.blue,
      ...shadow,
    },
    title: {
      color: colors.white,
      fontSize: scale(16),
      fontFamily: 'SFProText-Bold',
    },
  }),
)
