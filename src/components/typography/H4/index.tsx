import React, { ComponentProps, FC } from 'react'
import { Text } from 'react-native'

import { colors } from '@/constants'
import { scale } from '@/libs'

const H4: FC<ComponentProps<typeof Text>> = ({ children, style, ...rest }) => {
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
