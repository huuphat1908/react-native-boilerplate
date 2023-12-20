import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Box, ErrorText, TextArea } from '@/components'

type Props = {
  name: string
  readOnly?: boolean
} & TextInputProps

const TextAreaField: FC<Props> = ({ name, style, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <TextArea
            value={field.value && field.value.toString()}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            hasError={hasError}
            {...rest}
          />
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default TextAreaField
