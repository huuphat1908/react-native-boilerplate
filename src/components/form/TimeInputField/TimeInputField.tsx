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

const TimeInputField: FC<Props> = ({ name, style, readOnly, ...rest }) => {
  const { isOpen, open, close } = useDisclose()
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const timeFormat = useApplicationSetting(state => state.timeFormat)

  const hasError = errors[name] ? true : false

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Box>
          <DateTimePickerModal
            isVisible={isOpen}
            mode="time"
            positiveButton={{
              label: 'Confirm',
            }}
            negativeButton={{
              label: 'Cancel',
            }}
            confirmTextIOS="Confirm"
            cancelTextIOS="Cancel"
            date={value ? moment(value, timeFormat).toDate() : new Date()}
            is24Hour
            onCancel={close}
            onConfirm={date => {
              close()
              onChange(moment(date).format(timeFormat))
              onBlur()
            }}
          />
          <TouchableOpacity disabled={readOnly} onPress={open}>
            <Input
              value={value}
              editable={false}
              pointerEvents="none"
              rightIconName="Clock"
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

export default TimeInputField
