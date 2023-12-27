import React from 'react'

import {
  AlertDialog,
  ConfirmationDialog,
  InputDialog,
  Toast,
} from '@/components'
import { useDialogManager } from '@/store'

export const DialogManager = () => {
  const {
    alertDialogProps,
    confirmationDialogProps,
    inputDialogProps,
    toastProps,
    hideAlertDialog,
    hideConfirmationDialog,
    hideInputDialog,
    hideToast,
  } = useDialogManager()

  return (
    <>
      <AlertDialog {...alertDialogProps} onClose={hideAlertDialog} />
      <ConfirmationDialog
        {...confirmationDialogProps}
        onClose={hideConfirmationDialog}
      />
      <InputDialog {...inputDialogProps} onClose={hideInputDialog} />
      <Toast {...toastProps} onClose={hideToast} />
    </>
  )
}
