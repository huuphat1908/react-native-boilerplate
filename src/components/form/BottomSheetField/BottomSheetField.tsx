import { find } from 'lodash'
import React, { FC, useCallback } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInputProps, TouchableOpacity } from 'react-native'

import { Body, BottomSheet, Box, ErrorText, Input } from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './BottomSheetField.style'

type Props = {
  name: string
  label: string
  data: Array<SelectItem>
  readOnly?: boolean
  inputProps?: TextInputProps
}

const BottomSheetField: FC<Props> = ({
  name,
  label,
  data,
  readOnly,
  inputProps,
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext()
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)
  const {
    isOpen: isOpenBottomSheet,
    open: openBottomSheet,
    close: closeBottomSheet,
  } = useDisclose()
  const hasError = errors[name] ? true : false

  const onItemPress = useCallback(
    (item: SelectItem) => {
      setValue(name, item.value, {
        shouldValidate: true,
        shouldTouch: true,
      })
      closeBottomSheet()
    },
    [closeBottomSheet, name, setValue],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value } }) => (
        <Box>
          <TouchableOpacity
            style={{ zIndex: 1 }}
            disabled={readOnly}
            onPress={openBottomSheet}>
            <Input
              value={find(data, { value })?.label}
              pointerEvents="none"
              editable={false}
              placeholder={label}
              rightIconName="ChevronDown"
              hasError={hasError}
              readOnly={readOnly}
              {...inputProps}
            />
          </TouchableOpacity>

          <BottomSheet isOpen={isOpenBottomSheet} onClose={closeBottomSheet}>
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

export default BottomSheetField
