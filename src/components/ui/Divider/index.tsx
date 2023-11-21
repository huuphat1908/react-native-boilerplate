import React, { FC } from 'react'
import { View } from 'react-native'

import { colors } from '@/constants'
import { scale } from '@/libs'

type DividerProps = {
  color?: string
  thickness?: number
  gap?: number
}

const Divider: FC<DividerProps> = ({ color, thickness, gap }) => {
  return (
    <View
      style={{
        borderBottomColor: color || colors.black,
        borderBottomWidth: thickness ? scale(thickness) : scale(1.5),
        height: 0,
        marginVertical: gap ? scale(gap) : 0,
      }}
    />
  )
}

export default Divider
