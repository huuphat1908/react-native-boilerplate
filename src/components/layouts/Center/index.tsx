import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'

const Center: FC<ViewProps> = ({ children, style, ...rest }) => (
  <View
    style={[
      {
        alignItems: 'center',
        justifyContent: 'center',
      },
      style,
    ]}
    {...rest}>
    {children}
  </View>
)

export default Center
