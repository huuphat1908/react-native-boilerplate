import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'

import { colors } from '@/constants'

const Box: FC<ViewProps> = ({ children, style, ...rest }) => (
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
