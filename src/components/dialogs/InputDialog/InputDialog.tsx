import React, { FC, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ZodObject } from 'zod'

import {
  H3,
  HStack,
  InputField,
  PrimaryButton,
  SecondaryButton,
  Text,
  VStack,
} from '@/components'
import { styleManager } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'

import BaseDialog, { BaseDialogProps } from '../BaseDialog'
import { stylesheet } from './InputDialog.style'

type Props = Omit<BaseDialogProps, 'children'> & {
  onConfirm: (value: string) => void
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
  const formMethods = useForm({
    defaultValues: {
      input: initialValue || '',
    },
    mode: 'onChange',
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
      <BaseDialog isOpen={isOpen} onClose={onClose}>
        <VStack style={styles.textGroupWrapper}>
          <H3>{title}</H3>
          <Text style={styles.message}>{message}</Text>
          <InputField name="input" placeholder={placeholderInput} autoFocus />
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
      </BaseDialog>
    </FormProvider>
  )
}

export default InputDialog
