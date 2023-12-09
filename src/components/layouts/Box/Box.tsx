import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'

const Box: FC<ViewProps> = ({ children, style, ...rest }) => {
  return (
    <View style={[style]} {...rest}>
      {children}
    </View>
  )
}

export default Box
