import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components'

type Props = {
  name: string
  readOnly?: boolean
}

const CheckboxField: FC<Props> = ({ name, readOnly }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Checkbox value={value} onChange={onChange} readOnly={readOnly} />
      )}
    />
  )
}

CheckboxField.defaultProps = {
  readOnly: false,
}

export default CheckboxField
