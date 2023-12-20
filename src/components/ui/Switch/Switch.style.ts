import { FORM_FIELD_READ_ONLY_OPACITY } from '@/constants'
import { styleManager } from '@/libs'

export const stylesheet = styleManager.createStyleSheet(({ colors }) => ({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  switchButton: {
    backgroundColor: colors.red,
    position: 'absolute',
    borderRadius: 100,
  },
  wrapperReadOnly: {
    opacity: FORM_FIELD_READ_ONLY_OPACITY,
  },
}))
