import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'

import { styleManager } from '@/libs'

const H4: FC<TextProps> = ({ children, style, ...rest }) => {
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
          fontSize: scale(18),
          fontFamily: 'SFProText-Bold',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default H4
