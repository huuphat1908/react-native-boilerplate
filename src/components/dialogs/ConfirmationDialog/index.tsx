import React, { FC } from 'react'
import { Modal, Pressable } from 'react-native'

import {
  Body,
  Box,
  H3,
  HStack,
  PrimaryButton,
  SecondaryButton,
  VStack,
} from '@/components'
import { styleManager } from '@/libs'

import { confirmationDialogStyles } from './ConfirmationDialog.style'

type ActionDialogProps = {
  isOpen: boolean
  onConfirm: () => void
  onClose: () => void
  title: string
  message: string
  confirmText: string
  cancelText: string
}

const ConfirmationDialog: FC<ActionDialogProps> = ({
  isOpen,
  onConfirm,
  onClose,
  title,
  message,
  confirmText,
  cancelText,
}) => {
  const { styles } = styleManager.useStyles(confirmationDialogStyles)

  return (
    <Modal visible={isOpen} animationType="fade" transparent>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Box style={styles.wrapper}>
          <VStack style={styles.textGroupWrapper}>
            <H3>{title}</H3>

            <Body style={styles.message}>{message}</Body>
          </VStack>

          <HStack style={styles.buttonGroupWrapper}>
            <SecondaryButton fullWidth onPress={onClose}>
              {cancelText}
            </SecondaryButton>
            <PrimaryButton fullWidth onPress={onConfirm}>
              {confirmText}
            </PrimaryButton>
          </HStack>
        </Box>
      </Pressable>
    </Modal>
  )
}

export default ConfirmationDialog
