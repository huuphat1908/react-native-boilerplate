import React, { ComponentProps, FC } from 'react'
import { View } from 'react-native'

const Center: FC<ComponentProps<typeof View>> = ({
  children,
  style,
  ...rest
}) => (
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
