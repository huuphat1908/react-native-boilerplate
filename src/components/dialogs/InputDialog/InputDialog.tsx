import React, { FC, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Modal, Platform, Pressable } from 'react-native'
import { ZodObject } from 'zod'

import {
  Body,
  Box,
  H3,
  HStack,
  InputField,
  PrimaryButton,
  SecondaryButton,
  VStack,
} from '@/components'
import { useKeyboard } from '@/hooks'
import { styleManager } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'

import { stylesheet } from './InputDialog.style'

type Props = {
  isOpen: boolean
  onConfirm: (value: string) => void
  onClose: () => void
  title: string
  message: string
  placeholderInput: string
  initialValue?: string
  confirmText: string
  cancelText: string
  validationSchema?: () => ZodObject<any>
}

const InputDialog: FC<Props> = ({
  isOpen,
  onConfirm,
  onClose,
  title,
  message,
  placeholderInput,
  initialValue,
  confirmText,
  cancelText,
  validationSchema,
}) => {
  const { styles } = styleManager.useStyles(stylesheet)
  const { isKeyboardVisible, keyboardHeight } = useKeyboard()
  const formMethods = useForm({
    defaultValues: {
      input: initialValue || '',
    },
    ...(validationSchema && { resolver: zodResolver(validationSchema()) }),
  })

  const handleConfirm = useCallback(() => {
    formMethods.handleSubmit(values => onConfirm(values.input))()
    formMethods.reset()
    onClose()
  }, [formMethods, onClose, onConfirm])

  const handleCancel = useCallback(() => {
    formMethods.reset()
    onClose()
  }, [formMethods, onClose])

  return (
    <FormProvider {...formMethods}>
      <Modal
        visible={isOpen}
        animationType="fade"
        onRequestClose={onClose}
        transparent>
        <Pressable
          style={[
            styles.backdrop,
            isKeyboardVisible && Platform.OS === 'ios'
              ? { justifyContent: 'flex-end', bottom: keyboardHeight }
              : { justifyContent: 'center' },
          ]}
          onPress={onClose}>
          <Pressable>
            <Box style={styles.wrapper}>
              <VStack style={styles.textGroupWrapper}>
                <H3>{title}</H3>
                <Body style={styles.message}>{message}</Body>
                <InputField
                  name="input"
                  placeholder={placeholderInput}
                  autoFocus
                />
              </VStack>

              <HStack style={styles.buttonGroupWrapper}>
                <SecondaryButton fullWidth onPress={handleCancel}>
                  {cancelText}
                </SecondaryButton>
                <PrimaryButton
                  fullWidth
                  onPress={handleConfirm}
                  disabled={!formMethods.formState.isValid}>
                  {confirmText}
                </PrimaryButton>
              </HStack>
            </Box>
          </Pressable>
        </Pressable>
      </Modal>
    </FormProvider>
  )
}

export default InputDialog
