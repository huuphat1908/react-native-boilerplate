import { scale, styleManager } from '@/libs'

export const timeInputStyles = styleManager.createStyleSheet(theme => ({
  input: {
    borderWidth: scale(1),
    borderRadius: 10,
    borderColor: theme.colors.black,
    paddingHorizontal: theme.paddings.xl,
    width: '100%',
    height: scale(40),
    fontSize: scale(13),
    fontFamily: 'SFProText-Regular',
    color: theme.colors.black,
  },
  readOnlyInput: {
    opacity: 0.4,
  },
  errorInput: {
    borderColor: theme.colors.red,
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    height: '100%',
  },
}))
