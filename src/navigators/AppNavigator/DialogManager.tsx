import React from 'react'

import { AlertDialog, ConfirmationDialog, Toast } from '@/components'
import { useDialogManager } from '@/store'

export const DialogManager = () => {
  const {
    alertDialogProps,
    confirmationDialogProps,
    toastProps,
    hideAlertDialog,
    hideConfirmationDialog,
    hideToast,
  } = useDialogManager()

  return (
    <>
      <AlertDialog {...alertDialogProps} onClose={hideAlertDialog} />
      <ConfirmationDialog
        {...confirmationDialogProps}
        onClose={hideConfirmationDialog}
      />
      <Toast {...toastProps} onClose={hideToast} />
    </>
  )
}
