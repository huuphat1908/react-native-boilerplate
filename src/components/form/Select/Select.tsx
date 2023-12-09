import { find } from 'lodash'
import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native'

import {
  Body,
  BottomSheet,
  Box,
  Center,
  ErrorText,
  HStack,
  Icon,
} from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './Select.style'

type Props = {
  name: string
  label: string
  data: Array<SelectItem>
  readOnly?: boolean
  inputProps?: TextInputProps
}

const Select: FC<Props> = ({ name, label, data, readOnly, inputProps }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext()
  const {
    styles,
    theme: { colors, components },
  } = styleManager.useStyles(stylesheet)
  const { isOpen, open, close } = useDisclose()
  const hasError = errors[name] ? true : false

  const onItemPress = (item: SelectItem) => {
    setValue(name, item.value, {
      shouldValidate: true,
      shouldTouch: true,
    })
    close()
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value } }) => (
        <Box>
          <TouchableOpacity
            style={{ zIndex: 1 }}
            disabled={readOnly}
            onPress={open}>
            <HStack>
              <TextInput
                value={find(data, { value })?.label}
                pointerEvents="none"
                editable={false}
                placeholder={label}
                placeholderTextColor={colors.gray}
                {...inputProps}
                style={[
                  components.input,
                  readOnly && styles.readOnlyInput,
                  isOpen && styles.focusedInput,
                  hasError && styles.errorInput,
                  inputProps?.style,
                ]}
              />
              <Center style={components.inputIcon}>
                <Icon name="ChevronDown" size={20} color={colors.black} />
              </Center>
            </HStack>
          </TouchableOpacity>

          <BottomSheet isOpen={isOpen} onClose={close}>
            {data.map(item => (
              <TouchableOpacity
                key={item.value}
                onPress={() => onItemPress(item)}>
                <Box
                  style={[
                    styles.itemWrapper,
                    {
                      backgroundColor:
                        item.value === value ? colors.lightGray : colors.white,
                    },
                  ]}>
                  <Body>{item.label}</Body>
                </Box>
              </TouchableOpacity>
            ))}
          </BottomSheet>

          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default Select
