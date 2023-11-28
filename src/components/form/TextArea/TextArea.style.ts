import { scale, styleManager } from '@/libs'

export const textAreaStyles = styleManager.createStyleSheet(theme => ({
  input: {
    borderWidth: scale(1),
    borderRadius: 10,
    borderColor: theme.colors.black,
    paddingHorizontal: theme.paddings.xl,
    paddingTop: theme.paddings.lg,
    height: scale(100),
    fontSize: scale(13),
    fontFamily: 'SFProText-Regular',
  },
  readOnlyInput: {
    opacity: 0.4,
  },
  focusedInput: {
    borderColor: theme.colors.blue,
    borderWidth: scale(1.5),
    color: theme.colors.black,
  },
  errorInput: {
    borderColor: theme.colors.red,
  },
}))
