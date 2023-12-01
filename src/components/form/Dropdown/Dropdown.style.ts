import { colors } from '@/constants'
import { scale, styleManager } from '@/libs'

export const dropdownStyles = styleManager.createStyleSheet(theme => ({
  itemWrapper: {
    paddingHorizontal: theme.paddings.lg,
    paddingVertical: theme.paddings.lg,
  },
  dropdownContainer: {
    width: '100%',
    height: '100%',
  },
  dropdownWrapper: {
    position: 'absolute',
    backgroundColor: colors.white,
    maxHeight: scale(240),
    borderRadius: 10,
    borderWidth: scale(1),
    borderColor: colors.gray,
  },
  searchWrapper: {
    borderBottomWidth: scale(1),
    borderBottomColor: colors.gray,
  },
  searchInput: {
    borderWidth: 0,
  },
  errorInput: {
    borderColor: colors.red,
  },
  readOnlyInput: {
    opacity: 0.4,
  },
  focusedInput: {
    borderColor: colors.blue,
    borderWidth: scale(1.5),
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    height: '100%',
  },
}))
