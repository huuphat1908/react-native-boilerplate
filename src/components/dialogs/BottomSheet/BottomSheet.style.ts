import { scale, styleManager } from '@/libs'

export const bottomSheetStyles = styleManager.createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.utils.hexToRGBA(theme.colors.black, 0.4),
  },
  bottomSheet: {
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  dragableWrapper: {
    width: scale(100),
    height: scale(32),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dragHandle: {
    backgroundColor: theme.colors.gray,
    width: scale(100),
    height: scale(6),
    borderRadius: 10,
  },
}))
