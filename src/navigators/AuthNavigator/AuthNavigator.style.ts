import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(({ colors }) => ({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
}))
