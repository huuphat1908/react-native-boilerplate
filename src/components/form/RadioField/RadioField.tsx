import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Box, ErrorText, Radio } from '@/components'

type Props = {
  name: string
  data: Array<RadioItem>
  readOnly?: boolean
}

const RadioField: FC<Props> = ({ name, data, readOnly }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Box>
          <Radio
            data={data}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            hasError={hasError}
          />
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default RadioField
