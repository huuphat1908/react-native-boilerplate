import React, { ComponentProps, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Box, ErrorText } from '@/components'
import { colors } from '@/constants'

import BareDropdown from '../BareDropdown'

type DropdownProps = {
  name: string
} & Omit<
  ComponentProps<typeof BareDropdown>,
  'renderItem' | 'value' | 'onSelect'
>

const Dropdown: FC<DropdownProps> = ({
  name,
  label,
  data,
  inputProps,
  searchable,
}) => {
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
          <BareDropdown
            label={label}
            value={field.value}
            data={data}
            onSelect={item => field.onChange(item.value)}
            inputProps={{
              style: {
                borderColor: hasError ? colors.red : colors.black,
              },
              ...inputProps,
            }}
            searchable={searchable}
          />
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

Dropdown.defaultProps = {
  searchable: false,
}

export default Dropdown
