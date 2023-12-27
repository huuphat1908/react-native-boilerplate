import React from 'react'

import {
  AlertDialog,
  ConfirmationDialog,
  Divider,
  H4,
  InputDialog,
  PrimaryButton,
  ScrollView,
} from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'
import { useDialogManager } from '@/store'

import { stylesheet } from './DialogScreen.style'
import { dialogScreenSchema } from './dialogScreenSchema'

const DialogScreen = () => {
  const { styles } = styleManager.useStyles(stylesheet)
  const [isOpenActionDialog, openActionDialog, closeActionDialog] =
    useDisclose()
  const [isOpenAlertDialog, openAlertDialog, closeAlertDialog] = useDisclose()
  const [isOpenInputDialog, openInputDialog, closeInputDialog] = useDisclose()
  const showAlertDialog = useDialogManager(state => state.showAlertDialog)
  const showConfirmationDialog = useDialogManager(
    state => state.showConfirmationDialog,
  )
  const showInputDialog = useDialogManager(state => state.showInputDialog)
  const showToast = useDialogManager(state => state.showToast)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <H4>Render dialogs directly</H4>
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

      <PrimaryButton onPress={openActionDialog}>
        Confirmation Dialog
      </PrimaryButton>
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
        validationSchema={dialogScreenSchema}
      />
      <Divider />

      <H4>Render dialogs using DialogManager</H4>
      <Divider />

      <PrimaryButton
        onPress={() =>
          showAlertDialog({
            title: 'Unable to upload',
            message:
              'There is not sufficient storage on your device. Please clear up some space and try again.',
            confirmText: 'Okay',
          })
        }>
        Alert Dialog
      </PrimaryButton>
      <Divider />

      <PrimaryButton
        onPress={() =>
          showConfirmationDialog({
            title: 'Discard changes',
            message:
              'When navigating away without saving, you will discard all unsaved data. Are you sure you want to continue?',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
            onConfirm: () => console.log('onConfirm ConfirmationDialog'),
          })
        }>
        Confirmation Dialog
      </PrimaryButton>
      <Divider />

      {/* <PrimaryButton
        onPress={() =>
          showInputDialog({
            title: 'Change filename',
            message:
              "When uploading a file, it's a good idea to give it a meaningful title.",
            confirmText: 'Save',
            cancelText: 'Cancel',
            placeholderInput: 'Enter file name',
            onConfirm: value => console.log(`onConfirm InputDialog ${value}`),
            validationSchema: dialogScreenSchema,
          })
        }>
        Input Dialog
      </PrimaryButton>
      <Divider /> */}

      {/* <PrimaryButton
        onPress={() =>
          showInputDialog({
            title: 'Title',
            message: 'Message.',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
            placeholderInput: 'Enter file name',
            onConfirm: value => console.log(`onConfirm InputDialog ${value}`),
          })
        }>
        Input Dialog
      </PrimaryButton>
      <Divider /> */}

      <PrimaryButton
        onPress={() =>
          showToast({
            message: 'This is toast message',
          })
        }>
        Toast
      </PrimaryButton>
      <Divider />
    </ScrollView>
  )
}

export default DialogScreen
