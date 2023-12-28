import React, { FC, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Modal, Platform, Pressable, useWindowDimensions } from 'react-native'
import { ZodObject } from 'zod'

import {
  Box,
  H3,
  HStack,
  InputField,
  PrimaryButton,
  SecondaryButton,
  Text,
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
  const {
    styles,
    theme: { paddings },
  } = styleManager.useStyles(stylesheet)
  const { isKeyboardVisible, keyboardHeight } = useKeyboard()
  const formMethods = useForm({
    defaultValues: {
      input: initialValue || '',
    },
    mode: 'onChange',
    ...(validationSchema && { resolver: zodResolver(validationSchema()) }),
  })
  const windowDimensions = useWindowDimensions()

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
            <Box
              style={[
                styles.wrapper,
                { width: windowDimensions.width - 2 * paddings.xxl },
              ]}>
              <VStack style={styles.textGroupWrapper}>
                <H3>{title}</H3>
                <Text style={styles.message}>{message}</Text>
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
