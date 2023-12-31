import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(
  ({ paddings, colors, utils: { scale } }) => ({
    itemWrapper: {
      paddingHorizontal: paddings.lg,
      paddingVertical: paddings.lg,
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
    noItemFoundText: {
      fontFamily: 'SFProText-Italic',
    },
  }),
)
