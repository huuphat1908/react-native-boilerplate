import React, { ComponentProps, FC } from 'react'
import { View } from 'react-native'

const Box: FC<ComponentProps<typeof View>> = ({ children, ...rest }) => (
  <View {...rest}>{children}</View>
)

export default Box
