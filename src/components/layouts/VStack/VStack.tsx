import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'

const VStack: FC<ViewProps> = ({ children, style, ...rest }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  )
}

export default VStack
