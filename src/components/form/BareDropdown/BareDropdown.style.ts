import { colors } from '@/constants'
import { scale, styleManager } from '@/libs'

export const bareDropdownStyles = styleManager.createStyleSheet(theme => ({
  itemWrapper: {
    paddingHorizontal: theme.paddings.lg,
    paddingVertical: theme.paddings.lg,
    borderBottomWidth: scale(1),
    borderBottomColor: colors.black,
  },
  dropdownContainer: {
    width: '100%',
    height: '100%',
  },
  dropdownWrapper: {
    position: 'absolute',
    backgroundColor: colors.white,
    maxHeight: scale(240),
    borderRadius: scale(7),
  },
  searchWrapper: {
    borderBottomWidth: scale(1),
    borderBottomColor: colors.gray,
  },
  searchInput: {
    borderWidth: 0,
  },
  dropdownInput: {
    borderWidth: scale(1),
    borderRadius: 10,
    borderColor: theme.colors.black,
    paddingHorizontal: theme.paddings.xl,
    height: scale(40),
    fontSize: scale(13),
    fontFamily: 'SFProText-Regular',
    color: colors.black,
  },
}))
