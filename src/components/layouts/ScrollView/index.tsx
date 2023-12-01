import React, { FC } from 'react'
import {
  Keyboard,
  ScrollView as RNScrollView,
  ScrollViewProps,
  TouchableWithoutFeedback,
} from 'react-native'

const ScrollView: FC<ScrollViewProps> = ({ children, ...rest }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <RNScrollView {...rest} automaticallyAdjustKeyboardInsets>
      {children}
    </RNScrollView>
  </TouchableWithoutFeedback>
)

export default ScrollView
