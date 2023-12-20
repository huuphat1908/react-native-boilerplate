import React, { FC } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './TextArea.style'

type Props = {
  readOnly?: boolean
  hasError?: boolean
} & TextInputProps

const TextArea: FC<Props> = ({ hasError, style, onFocus, onBlur, ...rest }) => {
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
        styles.textArea,
        rest.readOnly && styles.readOnlyInput,
        isFocused && styles.focusedInput,
        hasError && styles.errorInput,
        style,
      ]}
      textAlignVertical="top"
      multiline
      {...rest}
    />
  )
}

export default TextArea
