import React, { ComponentProps, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput } from 'react-native'

import { Box, ErrorText } from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { textAreaStyles } from './TextArea.style'

type InputProps = {
  name: string
  readOnly?: boolean
} & ComponentProps<typeof TextInput>

const TextArea: FC<InputProps> = ({ name, style, ...rest }) => {
  const { isOpen: isFocused, open: onFocus, close: onBlur } = useDisclose()
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { theme, styles } = styleManager.useStyles(textAreaStyles)
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
            placeholderTextColor={theme.colors.gray}
            style={[
              styles.input,
              rest.readOnly && styles.readOnlyInput,
              isFocused && styles.focusedInput,
              hasError && styles.errorInput,
              style,
            ]}
            textAlignVertical="top"
            multiline
            {...rest}
          />
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default TextArea
