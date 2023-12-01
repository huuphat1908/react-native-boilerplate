import React from 'react'

import {
  AlertDialog,
  Box,
  ConfirmationDialog,
  Divider,
  InputDialog,
  PrimaryButton,
} from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { dialogScreenStyles } from './DialogScreen.style'

const DialogScreen = () => {
  const { styles } = styleManager.useStyles(dialogScreenStyles)
  const {
    isOpen: isOpenActionDialog,
    open: openActionDialog,
    close: closeActionDialog,
  } = useDisclose()
  const {
    isOpen: isOpenAlertDialog,
    open: openAlertDialog,
    close: closeAlertDialog,
  } = useDisclose()
  const {
    isOpen: isOpenInputDialog,
    open: openInputDialog,
    close: closeInputDialog,
  } = useDisclose()

  return (
    <Box style={styles.container}>
      <PrimaryButton onPress={openActionDialog}>Action Dialog</PrimaryButton>
      <ConfirmationDialog
        isOpen={isOpenActionDialog}
        onConfirm={() => console.log('onConfirm ConfirmationDialog')}
        onClose={closeActionDialog}
        title="Discard changes"
        message="When navigating away without saving, you will discard all unsaved
              data. Are you sure you want to continue?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
      <Divider />

      <PrimaryButton onPress={openAlertDialog}>Alert Dialog</PrimaryButton>
      <AlertDialog
        isOpen={isOpenAlertDialog}
        onClose={closeAlertDialog}
        title="Unable to upload"
        message="There is not sufficient storage on your device. Please clear up some space and try again."
        confirmText="Okay"
      />
      <Divider />

      <PrimaryButton onPress={openInputDialog}>Input Dialog</PrimaryButton>
      <InputDialog
        isOpen={isOpenInputDialog}
        onConfirm={value => console.log(`onConfirm InputDialog ${value}`)}
        onClose={closeInputDialog}
        title="Change filename"
        message="When uploading a file, it's a good idea to give it a meaningful title."
        placeholderInput="Enter file name"
        confirmText="Save"
        cancelText="Cancel"
      />
      <Divider />
    </Box>
  )
}

export default DialogScreen
