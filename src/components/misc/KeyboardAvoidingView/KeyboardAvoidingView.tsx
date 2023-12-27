import React, { FC } from 'react'
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
} from 'react-native'

type Props = {
  children: React.ReactNode
}

const KeyboardAvoidingView: FC<Props> = ({ children }) => (
  <RNKeyboardAvoidingView
    style={{
      flex: 1,
    }}
    {...(Platform.OS === 'ios' && { behavior: 'padding' })}>
    {children}
  </RNKeyboardAvoidingView>
)

export default KeyboardAvoidingView
