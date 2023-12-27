import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, shadow }) => ({
    wrapper: {
      position: 'absolute',
      alignSelf: 'center',
      backgroundColor: colors.lightGray,
      width: '90%',
      borderRadius: 5,
      padding: paddings.xxl,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      ...shadow,
    },
  }),
)
