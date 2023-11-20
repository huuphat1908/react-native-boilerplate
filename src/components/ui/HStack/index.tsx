import React, { ComponentProps, FC } from 'react'
import { View } from 'react-native'

const HStack: FC<ComponentProps<typeof View>> = ({
  children,
  style,
  ...rest
}) => (
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
