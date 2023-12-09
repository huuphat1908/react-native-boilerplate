import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'

import { styleManager } from '@/libs'

const H1: FC<TextProps> = ({ children, style, ...rest }) => {
  const {
    theme: {
      colors,
      utils: { scale },
    },
  } = styleManager.useStyles()

  return (
    <Text
      {...rest}
      style={[
        {
          color: colors.black,
          fontSize: scale(30),
          fontFamily: 'SFProText-Bold',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default H1
