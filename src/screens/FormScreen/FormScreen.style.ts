import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, utils: { scale } }) => ({
    container: {
      flex: 1,
    },
    contentContainer: {
      padding: paddings.xl,
    },
    buttonGroupWrapper: {
      gap: scale(10),
    },
  }),
)
