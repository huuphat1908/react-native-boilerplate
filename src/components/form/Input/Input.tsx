import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'

import { Box, ErrorText } from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './Input.style'

type Props = {
  name: string
  readOnly?: boolean
} & TextInputProps

const Input: FC<Props> = ({ name, style, ...rest }) => {
  const { isOpen: isFocused, open: onFocus, close: onBlur } = useDisclose()
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const {
    theme: { colors, components },
    styles,
  } = styleManager.useStyles(stylesheet)
  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <TextInput
            value={field.value && field.value.toString()}
            onChangeText={field.onChange}
            onBlur={() => {
              field.onBlur()
              onBlur()
            }}
            onFocus={onFocus}
            placeholderTextColor={colors.gray}
            style={[
              components.input,
              rest.readOnly && styles.readOnlyInput,
              isFocused && styles.focusedInput,
              hasError && styles.errorInput,
              style,
            ]}
            {...rest}
          />
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default Input