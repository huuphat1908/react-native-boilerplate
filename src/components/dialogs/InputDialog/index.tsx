import React, { FC, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Modal, Pressable } from 'react-native'

import {
  Body,
  Box,
  H3,
  HStack,
  Input,
  PrimaryButton,
  SecondaryButton,
  VStack,
} from '@/components'
import { styleManager } from '@/libs'

import { inputDialogStyles } from './InputDialog.style'

type InputDialogProps = {
  isOpen: boolean
  onConfirm: (value: string) => void
  onClose: () => void
  title: string
  message: string
  placeholderInput: string
  initialValue?: string
  confirmText: string
  cancelText: string
}

const InputDialog: FC<InputDialogProps> = ({
  isOpen,
  onConfirm,
  onClose,
  title,
  message,
  placeholderInput,
  initialValue,
  confirmText,
  cancelText,
}) => {
  const { styles } = styleManager.useStyles(inputDialogStyles)
  const methods = useForm({
    defaultValues: {
      input: initialValue || '',
    },
  })

  const handleConfirm = useCallback(() => {
    methods.handleSubmit(values => onConfirm(values.input))()
    methods.reset()
    onClose()
  }, [methods, onClose, onConfirm])

  return (
    <FormProvider {...methods}>
      <Modal
        visible={isOpen}
        animationType="fade"
        onRequestClose={onClose}
        transparent>
        <Pressable style={styles.backdrop} onPress={onClose}>
          <Box style={styles.wrapper}>
            <VStack style={styles.textGroupWrapper}>
              <H3>{title}</H3>
              <Body style={styles.message}>{message}</Body>
              <Input name="input" placeholder={placeholderInput} />
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
      </Modal>
    </FormProvider>
  )
}

export default InputDialog
