import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ colors, shadow, utils: { scale } }) => ({
    fullWidth: {
      flex: 1,
    },
    wrapper: {
      width: '100%',
      backgroundColor: colors.white,
      padding: scale(12),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      borderColor: colors.blue,
      borderWidth: 1,
      ...shadow,
    },
    title: {
      color: colors.blue,
      fontSize: scale(16),
      fontFamily: 'SFProText-Bold',
    },
  }),
)
