import React from 'react'

import { AlertDialog, Toast } from '@/components'
import { useDialogManager } from '@/store'

export const DialogManager = () => {
  const { alertDialogProps, toastProps, hideAlertDialog, hideToast } =
    useDialogManager()

  return (
    <>
      <Toast {...toastProps} onClose={hideToast} />
      <AlertDialog {...alertDialogProps} onClose={hideAlertDialog} />
    </>
  )
}
