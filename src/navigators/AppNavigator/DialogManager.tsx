import React from 'react'

import { AlertDialog, Toast } from '@/components'
import { useDialogManager } from '@/store'

export const DialogManager = () => {
  const { alertDialogProps, showAlertDialog, hideAlertDialog } =
    useDialogManager()

  return (
    <>
      {/* <Toast /> */}
      <AlertDialog {...alertDialogProps} onClose={hideAlertDialog} />
    </>
  )
}
