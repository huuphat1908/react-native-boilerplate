import React, { FC, useCallback } from 'react'

import {
  H3,
  HStack,
  PrimaryButton,
  SecondaryButton,
  Text,
  VStack,
} from '@/components'
import { styleManager } from '@/libs'

import BaseDialog, { BaseDialogProps } from '../BaseDialog'
import { stylesheet } from './ConfirmationDialog.style'

type Props = Omit<BaseDialogProps, 'children'> & {
  onConfirm: () => void
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
  const { styles } = styleManager.useStyles(stylesheet)

  const handleConfirm = useCallback(() => {
    onConfirm()
    onClose()
  }, [onClose, onConfirm])

  return (
    <BaseDialog isOpen={isOpen} onClose={onClose}>
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
    </BaseDialog>
  )
}

export default ConfirmationDialog
