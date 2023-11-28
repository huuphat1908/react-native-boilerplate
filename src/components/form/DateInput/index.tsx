import moment from 'moment'
import React, { ComponentProps, FC, useCallback } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { Box, Center, ErrorText, HStack, Icon } from '@/components'
import { dateTimeFormat } from '@/constants'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { dateInputStyles } from './DateInput.style'

type DateInputProps = {
  name: string
  readOnly?: boolean
} & ComponentProps<typeof TextInput>

const DateInput: FC<DateInputProps> = ({ name, style, ...rest }) => {
  const { isOpen, open, close } = useDisclose()
  const { theme, styles } = styleManager.useStyles(dateInputStyles)
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { date: dateFormat } = dateTimeFormat
  const { readOnly } = rest
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
            <HStack>
              <TextInput
                value={value}
                editable={false}
                pointerEvents="none"
                placeholderTextColor={theme.colors.gray}
                style={[
                  styles.input,
                  readOnly && styles.readOnlyInput,
                  hasError && styles.errorInput,
                  style,
                ]}
                {...rest}
              />
              <Center style={styles.iconWrapper}>
                <Icon name="Calendar" size={20} color={theme.colors.black} />
              </Center>
            </HStack>
          </TouchableOpacity>
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default DateInput
