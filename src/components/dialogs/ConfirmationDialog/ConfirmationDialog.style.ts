import { scale, styleManager } from '@/libs'

export const confirmationDialogStyles = styleManager.createStyleSheet(
  theme => ({
    backdrop: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.utils.hexToRGBA(theme.colors.black, 0.4),
    },
    wrapper: {
      borderRadius: 16,
      padding: theme.paddings.xxl,
      marginHorizontal: theme.margins.xl,
      gap: scale(40),
    },
    textGroupWrapper: {
      gap: scale(15),
    },
    message: {
      color: theme.colors.darkGray,
    },
    buttonGroupWrapper: {
      gap: scale(20),
    },
  }),
)
