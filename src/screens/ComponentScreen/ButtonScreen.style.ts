import { scale } from 'react-native-size-matters'

import { styleManager } from '@/libs'

export const componentScreenStyles = styleManager.createStyleSheet(theme => ({
  container: {
    gap: scale(10),
    margin: theme.margins.xl,
  },
}))
