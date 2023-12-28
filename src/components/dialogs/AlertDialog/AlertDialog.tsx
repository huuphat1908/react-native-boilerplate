import React, { FC } from 'react'

import { H3, PrimaryButton, Text, VStack } from '@/components'
import { styleManager } from '@/libs'

import BaseDialog, { BaseDialogProps } from '../BaseDialog'
import { stylesheet } from './AlertDialog.style'

type Props = Omit<BaseDialogProps, 'children'> & {
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
    <BaseDialog isOpen={isOpen} onClose={onClose}>
      <VStack style={styles.textGroupWrapper}>
        <H3>{title}</H3>
        <Text style={styles.message}>{message}</Text>
      </VStack>

      <PrimaryButton onPress={onClose}>{confirmText}</PrimaryButton>
    </BaseDialog>
  )
}

export default AlertDialog
