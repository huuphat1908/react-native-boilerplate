import moment from 'moment'
import React, { ComponentProps, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { ErrorText, Icon } from '@/components'
import { colors, dateTimeFormat } from '@/constants'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { dateInputStyles } from './DateInput.style'

type DateInputProps = {
  name: string
} & ComponentProps<typeof TextInput>

const DateInput: FC<DateInputProps> = ({ name, style, ...rest }) => {
  const { isOpen, open, close } = useDisclose()
  const { styles } = styleManager.useStyles(dateInputStyles)
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const dateFormat = dateTimeFormat.date
  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <DateTimePickerModal
            isVisible={isOpen}
            mode="date"
            date={new Date()}
            onCancel={close}
            onConfirm={date => {
              close()
              onChange(moment(date).format(dateFormat))
              onBlur()
            }}
          />
          <TouchableOpacity onPress={open}>
            <TextInput
              onBlur={() => {
                onChange()
                onBlur()
              }}
              value={value}
              editable={false}
              pointerEvents="none"
              style={[styles.input, style]}
              {...rest}
            />
          </TouchableOpacity>
          <ErrorText name={name} errors={errors} />
        </>
      )}
    />
  )
}

export default DateInput
