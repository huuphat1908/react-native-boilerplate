import React, { ComponentProps, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Box, ErrorText, Input } from '@/components'

type Props = {
  name: string
} & ComponentProps<typeof Input>

const InputField: FC<Props> = ({ name, style, ...rest }) => {
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
          <Input
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

export default InputField
