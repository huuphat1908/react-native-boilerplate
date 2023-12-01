import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'

const HStack: FC<ViewProps> = ({ children, style, ...rest }) => (
  <View
    style={[
      {
        flexDirection: 'row',
      },
      style,
    ]}
    {...rest}>
    {children}
  </View>
)

export default HStack
