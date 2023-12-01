import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'

import { colors } from '@/constants'
import { scale } from '@/libs'

const Body: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[
        {
          color: colors.black,
          fontSize: scale(13),
          fontFamily: 'SFProText-Regular',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Body
