import React, { ComponentProps, FC } from 'react'
import { Text } from 'react-native'

import { colors } from '@/constant'
import { scale } from '@/libs'

const Label: FC<ComponentProps<typeof Text>> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[
        {
          color: colors.black,
          fontSize: scale(14),
          fontWeight: 'bold',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Label
