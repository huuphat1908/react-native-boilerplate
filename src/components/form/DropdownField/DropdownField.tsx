import React, { ComponentProps, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Box, Dropdown, ErrorText } from '@/components'

type Props = {
  name: string
} & Omit<ComponentProps<typeof Dropdown>, 'value' | 'onSelect' | 'hasError'>

const DropdownField: FC<Props> = ({ name, ...rest }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext()
  const hasError = errors[name] ? true : false

  const onSelect = (item: DropdownItem) => {
    setValue(name, item.value, {
      shouldValidate: true,
      shouldTouch: true,
    })
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value } }) => (
        <Box>
          <Dropdown
            value={value}
            onSelect={onSelect}
            hasError={hasError}
            {...rest}
          />
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default DropdownField
