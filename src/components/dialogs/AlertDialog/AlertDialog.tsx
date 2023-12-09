import React, { FC } from 'react'
import { Modal, Pressable } from 'react-native'

import { Body, Box, H3, PrimaryButton, VStack } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './AlertDialog.style'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  confirmText: string
}

const AlertDialog: FC<Props> = ({
  isOpen,
  onClose,
  title,
  message,
  confirmText,
}) => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
      transparent>
      <Pressable style={styles.container} onPress={onClose}>
        <Pressable>
          <Box style={styles.wrapper}>
            <VStack style={styles.textGroupWrapper}>
              <H3>{title}</H3>
              <Body style={styles.message}>{message}</Body>
            </VStack>

            <PrimaryButton onPress={onClose}>{confirmText}</PrimaryButton>
          </Box>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export default AlertDialog