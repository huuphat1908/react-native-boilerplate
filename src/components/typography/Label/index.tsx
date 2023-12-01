import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'

import { colors } from '@/constants'
import { scale } from '@/libs'

const Label: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[
        {
          color: colors.black,
          fontSize: scale(14),
          fontFamily: 'SFProText-Bold',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Label
