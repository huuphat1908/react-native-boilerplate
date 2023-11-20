import React, { ComponentProps, FC } from 'react'
import { Text } from 'react-native'

import { colors } from '@/constant'
import { scale } from '@/libs'

const Link: FC<ComponentProps<typeof Text>> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[
        {
          color: colors.blue,
          fontSize: scale(14),
          textDecorationLine: 'underline',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Link
