import React, { ComponentProps, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput } from 'react-native'

import { ErrorText } from '@/components/ui'
import { styleManager } from '@/libs'

import { inputStyles } from './Input.style'

type InputProps = {
  name: string
} & ComponentProps<typeof TextInput>

const Input: FC<InputProps> = ({ name, style, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { styles } = styleManager.useStyles(inputStyles)
  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <TextInput
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value && field.value.toString()}
            style={[styles.input, style]}
            {...rest}
          />
          <ErrorText name={name} errors={errors} />
        </>
      )}
    />
  )
}

export default Input
