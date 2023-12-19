import * as icons from 'lucide-react-native'
import React, { FC } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { Center, HStack, Icon } from '@/components'
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
  rightIconName?: keyof Omit<
    Omit<typeof icons, 'createLucideIcon'>,
    'createReactComponent'
  >
} & TextInputProps

const Input: FC<Props> = ({
  style,
  hasError,
  onFocus,
  onBlur,
  leftIconName,
  rightIconName,
  ...rest
}) => {
  const {
    isOpen: isFocused,
    open: onFocusInput,
    close: onBlurInput,
  } = useDisclose()
  const {
    theme: { colors },
    styles,
  } = styleManager.useStyles(stylesheet)

  return (
    <HStack>
      {leftIconName && (
        <Center style={styles.rightIcon}>
          <Icon name={leftIconName} size={20} color={colors.black} />
        </Center>
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
          rest.readOnly && styles.readOnlyInput,
          isFocused && styles.focusedInput,
          hasError && styles.errorInput,
          style,
        ]}
        {...rest}
      />

      {rightIconName && (
        <Center style={styles.rightIcon}>
          <Icon name={rightIconName} size={20} color={colors.black} />
        </Center>
      )}
    </HStack>
  )
}

export default Input
