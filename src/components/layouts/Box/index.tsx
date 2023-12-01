import React, { ComponentProps, FC } from 'react'
import { View } from 'react-native'

import { colors } from '@/constants'

const Box: FC<ComponentProps<typeof View>> = ({ children, style, ...rest }) => (
  <View
    style={[
      {
        backgroundColor: colors.white,
      },
      style,
    ]}
    {...rest}>
    {children}
  </View>
)

export default Box
