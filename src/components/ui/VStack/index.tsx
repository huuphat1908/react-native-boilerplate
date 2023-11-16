/* eslint-disable react-native/no-inline-styles */
import React, { ComponentProps, FC } from 'react'
import { View } from 'react-native'

const VStack: FC<ComponentProps<typeof View>> = ({
  children,
  style,
  ...rest
}) => (
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

export default VStack
