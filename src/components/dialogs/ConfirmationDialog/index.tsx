import React, { FC, useCallback } from 'react'
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

  const handleConfirm = useCallback(() => {
    onConfirm()
    onClose()
  }, [onClose, onConfirm])

  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
      transparent>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable>
          <Box style={styles.wrapper}>
            <VStack style={styles.textGroupWrapper}>
              <H3>{title}</H3>
              <Body style={styles.message}>{message}</Body>
            </VStack>

            <HStack style={styles.buttonGroupWrapper}>
              <SecondaryButton fullWidth onPress={onClose}>
                {cancelText}
              </SecondaryButton>
              <PrimaryButton fullWidth onPress={handleConfirm}>
                {confirmText}
              </PrimaryButton>
            </HStack>
          </Box>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export default ConfirmationDialog
