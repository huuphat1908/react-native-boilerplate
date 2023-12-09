import React, { FC } from 'react'
import {
  Keyboard,
  ScrollView as RNScrollView,
  ScrollViewProps,
  TouchableWithoutFeedback,
} from 'react-native'

import { styleManager } from '@/libs'

const ScrollView: FC<ScrollViewProps> = ({ children, style, ...rest }) => {
  const {
    theme: { colors },
  } = styleManager.useStyles()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <RNScrollView
        style={[
          {
            backgroundColor: colors.white,
          },
          style,
        ]}
        {...rest}
        automaticallyAdjustKeyboardInsets>
        {children}
      </RNScrollView>
    </TouchableWithoutFeedback>
  )
}

export default ScrollView
