import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, utils: { scale } }) => ({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: paddings.lg,
      backgroundColor: colors.blue,
    },
    title: {
      color: colors.white,
      fontSize: scale(16),
      fontWeight: 'bold',
    },
  }),
)
