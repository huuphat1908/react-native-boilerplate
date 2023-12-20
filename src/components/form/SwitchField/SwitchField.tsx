import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Switch } from '@/components'

type Props = {
  name: string
  readOnly?: boolean
}

const SwitchField: FC<Props> = ({ name, readOnly }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Switch value={value} onChange={onChange} readOnly={readOnly} />
      )}
    />
  )
}

SwitchField.defaultProps = {
  readOnly: false,
}

export default SwitchField
