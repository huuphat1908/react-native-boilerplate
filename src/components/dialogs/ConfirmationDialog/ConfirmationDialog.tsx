import React, { FC, useCallback } from 'react'
import { Modal, Pressable, useWindowDimensions } from 'react-native'

import {
  Box,
  H3,
  HStack,
  PrimaryButton,
  SecondaryButton,
  Text,
  VStack,
} from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './ConfirmationDialog.style'

type Props = {
  isOpen: boolean
  onConfirm: () => void
  onClose: () => void
  title: string
  message: string
  confirmText: string
  cancelText: string
}

const ConfirmationDialog: FC<Props> = ({
  isOpen,
  onConfirm,
  onClose,
  title,
  message,
  confirmText,
  cancelText,
}) => {
  const {
    styles,
    theme: { paddings },
  } = styleManager.useStyles(stylesheet)
  const windowDimensions = useWindowDimensions()

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
          <Box
            style={[
              styles.wrapper,
              { width: windowDimensions.width - 2 * paddings.xxl },
            ]}>
            <VStack style={styles.textGroupWrapper}>
              <H3>{title}</H3>
              <Text style={styles.message}>{message}</Text>
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
