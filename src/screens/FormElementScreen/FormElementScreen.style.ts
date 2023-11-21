import { scale } from 'react-native-size-matters'

import { styleManager } from '@/libs'

export const formElementScreenStyles = styleManager.createStyleSheet(theme => ({
  container: {
    flex: 1,
    padding: theme.margins.xl,
  },
  gap: {
    marginVertical: scale(10),
  },
}))
