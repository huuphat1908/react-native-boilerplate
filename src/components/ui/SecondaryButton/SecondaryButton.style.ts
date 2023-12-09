import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    fullWidth: {
      flex: 1,
    },
    wrapper: {
      width: '100%',
      backgroundColor: colors.white,
      padding: scale(12),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      borderColor: colors.blue,
      borderWidth: 1,
    },
    title: {
      color: colors.blue,
      fontSize: scale(16),
      fontFamily: 'SFProText-Bold',
    },
  }),
)
