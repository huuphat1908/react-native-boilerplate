import { scale, styleManager } from '@/libs'

export const selectStyles = styleManager.createStyleSheet(theme => ({
  itemWrapper: {
    padding: theme.paddings.xl,
  },
  dropdownContainer: {
    width: '100%',
    height: '100%',
  },
  dropdownWrapper: {
    position: 'absolute',
    backgroundColor: theme.colors.white,
    maxHeight: scale(240),
    borderRadius: 10,
    borderWidth: scale(1),
    borderColor: theme.colors.gray,
  },
  searchWrapper: {
    borderBottomWidth: scale(1),
    borderBottomColor: theme.colors.gray,
  },
  searchInput: {
    borderWidth: 0,
  },
  errorInput: {
    borderColor: theme.colors.red,
  },
  readOnlyInput: {
    opacity: 0.4,
  },
  focusedInput: {
    borderColor: theme.colors.blue,
    borderWidth: scale(1.5),
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    height: '100%',
  },
}))
