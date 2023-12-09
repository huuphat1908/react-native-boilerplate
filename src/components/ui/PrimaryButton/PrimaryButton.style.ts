import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    fullWidth: {
      flex: 1,
    },
    wrapper: {
      backgroundColor: colors.blue,
      padding: scale(12),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.blue,
      borderRadius: 12,
    },
    title: {
      color: colors.white,
      fontSize: scale(16),
      fontFamily: 'SFProText-Bold',
    },
  }),
)
