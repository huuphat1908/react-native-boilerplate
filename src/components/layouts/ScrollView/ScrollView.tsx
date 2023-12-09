import React, { FC } from 'react'
import {
  Keyboard,
  ScrollView as RNScrollView,
  ScrollViewProps,
  TouchableWithoutFeedback,
} from 'react-native'

const ScrollView: FC<ScrollViewProps> = ({ children, style, ...rest }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <RNScrollView style={[style]} {...rest} automaticallyAdjustKeyboardInsets>
        {children}
      </RNScrollView>
    </TouchableWithoutFeedback>
  )
}

export default ScrollView
