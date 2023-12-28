import * as icons from 'lucide-react-native'
import React, { FC, useMemo } from 'react'
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native'

import { HStack, Icon } from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './Input.style'

type Props = {
  readOnly?: boolean
  hasError?: boolean
  leftIconName?: keyof Omit<
    Omit<typeof icons, 'createLucideIcon'>,
    'createReactComponent'
  >
  onLeftIconPress?: () => void
  rightIconName?: keyof Omit<
    Omit<typeof icons, 'createLucideIcon'>,
    'createReactComponent'
  >
  onRightIconPress?: () => void
} & TextInputProps

const Input: FC<Props> = ({
  style,
  hasError,
  onFocus,
  onBlur,
  leftIconName,
  onLeftIconPress,
  rightIconName,
  onRightIconPress,
  editable,
  readOnly,
  ...rest
}) => {
  const [isFocused, onFocusInput, onBlurInput] = useDisclose()
  const {
    theme: { colors },
    styles,
  } = styleManager.useStyles(stylesheet)

  // if editable is passed as prop, remove readOnly from prop as readOnly will override editable
  const readOnlyProp = useMemo(
    () => (editable === undefined ? { readOnly } : {}),
    [editable, readOnly],
  )

  return (
    <HStack>
      {leftIconName && (
        <TouchableOpacity
          style={[styles.leftIcon, readOnly && styles.readOnlyIcon]}
          onPress={onLeftIconPress}>
          <Icon name={leftIconName} size={20} color={colors.black} />
        </TouchableOpacity>
      )}

      <TextInput
        onFocus={e => {
          onFocusInput()
          onFocus?.(e)
        }}
        onBlur={e => {
          onBlurInput()
          onBlur?.(e)
        }}
        placeholderTextColor={colors.gray}
        style={[
          styles.input,
          readOnly && styles.readOnlyInput,
          isFocused && styles.focusedInput,
          hasError && styles.errorInput,
          style,
        ]}
        editable={editable}
        {...readOnlyProp}
        {...rest}
      />

      {rightIconName && (
        <TouchableOpacity
          style={[styles.rightIcon, readOnly && styles.readOnlyIcon]}
          onPress={onRightIconPress}>
          <Icon name={rightIconName} size={20} color={colors.black} />
        </TouchableOpacity>
      )}
    </HStack>
  )
}

export default Input
