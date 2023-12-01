import React, { ComponentProps, FC } from 'react'
import {
  Keyboard,
  ScrollView as RNScrollView,
  TouchableWithoutFeedback,
} from 'react-native'

const ScrollView: FC<ComponentProps<typeof RNScrollView>> = ({
  children,
  ...rest
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <RNScrollView {...rest} automaticallyAdjustKeyboardInsets>
      {children}
    </RNScrollView>
  </TouchableWithoutFeedback>
)

export default ScrollView
