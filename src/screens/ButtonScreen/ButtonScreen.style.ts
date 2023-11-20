import { scale } from 'react-native-size-matters'

import { styleManager } from '@/libs'

export const buttonScreenStyles = styleManager.createStyleSheet(theme => ({
  container: {
    gap: scale(10),
    margin: theme.margins.xl,
  },
  twoButtonWrapper: {
    gap: scale(10),
  },
}))
