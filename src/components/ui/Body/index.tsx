import React, { ComponentProps, FC } from 'react'
import { Text } from 'react-native'

import { colors } from '@/constants'
import { scale } from '@/libs'

const Body: FC<ComponentProps<typeof Text>> = ({
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
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Body
