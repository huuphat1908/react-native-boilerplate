import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'

import { styleManager } from '@/libs'

const VStack: FC<ViewProps> = ({ children, style, ...rest }) => {
  const {
    theme: { colors },
  } = styleManager.useStyles()

  return (
    <View
      style={[
        {
          flexDirection: 'column',
          backgroundColor: colors.white,
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  )
}

export default VStack
