import moment from 'moment'
import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { Box, Center, ErrorText, HStack, Icon } from '@/components'
import { dateTimeFormat } from '@/constants'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './TimeInput.style'

type Props = {
  name: string
  readOnly?: boolean
} & TextInputProps

const TimeInput: FC<Props> = ({ name, style, readOnly, ...rest }) => {
  const { isOpen, open, close } = useDisclose()
  const {
    theme: { colors, components },
    styles,
  } = styleManager.useStyles(stylesheet)
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { time: timeFormat } = dateTimeFormat
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
            <HStack>
              <TextInput
                value={value}
                editable={false}
                pointerEvents="none"
                placeholderTextColor={colors.gray}
                style={[
                  components.input,
                  readOnly && styles.readOnlyInput,
                  hasError && styles.errorInput,
                  style,
                ]}
                {...rest}
              />
              <Center style={components.inputIcon}>
                <Icon name="Clock" size={20} color={colors.black} />
              </Center>
            </HStack>
          </TouchableOpacity>
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default TimeInput