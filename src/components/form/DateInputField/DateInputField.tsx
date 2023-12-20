import moment from 'moment'
import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInputProps, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { Box, ErrorText, Input } from '@/components'
import { useDisclose } from '@/hooks'
import { useApplicationSetting } from '@/store'

type Props = {
  name: string
  readOnly?: boolean
} & TextInputProps

const DateInputField: FC<Props> = ({ name, style, readOnly, ...rest }) => {
  const { isOpen, open, close } = useDisclose()
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const dateFormat = useApplicationSetting(state => state.dateFormat)

  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Box>
          <DateTimePickerModal
            isVisible={isOpen}
            mode="date"
            positiveButton={{
              label: 'Confirm',
            }}
            negativeButton={{
              label: 'Cancel',
            }}
            confirmTextIOS="Confirm"
            cancelTextIOS="Cancel"
            date={value ? moment(value, dateFormat).toDate() : new Date()}
            onCancel={close}
            onConfirm={date => {
              close()
              onChange(moment(date).format(dateFormat))
              onBlur()
            }}
          />
          <TouchableOpacity disabled={readOnly} onPress={open}>
            <Input
              value={value}
              editable={false}
              pointerEvents="none"
              rightIconName="Calendar"
              hasError={hasError}
              readOnly={readOnly}
              {...rest}
            />
          </TouchableOpacity>
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default DateInputField
