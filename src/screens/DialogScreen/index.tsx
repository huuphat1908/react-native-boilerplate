import React from 'react'

import { Box, ConfirmationDialog, Divider, PrimaryButton } from '@/components'
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

  return (
    <Box style={styles.container}>
      <PrimaryButton onPress={openActionDialog}>Action Dialog</PrimaryButton>
      <ConfirmationDialog
        isOpen={isOpenActionDialog}
        onClose={closeActionDialog}
        title="Discard changes"
        message="When navigating away without saving, you will discard all unsaved
              data. Are you sure you want to continue?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
      <Divider />
    </Box>
  )
}

export default DialogScreen
