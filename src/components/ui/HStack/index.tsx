/* eslint-disable react-native/no-inline-styles */
import React, { ComponentProps, FC } from 'react'
import { View } from 'react-native'

const HStack: FC<ComponentProps<typeof View>> = ({ children }) => (
  <View
    style={{
      flexDirection: 'row',
    }}>
    {children}
  </View>
)

export default HStack
