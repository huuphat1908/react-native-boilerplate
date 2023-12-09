import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ margins, utils: { scale } }) => ({
    container: {
      gap: scale(10),
      margin: margins.xl,
    },
  }),
)
