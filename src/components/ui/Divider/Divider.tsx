import React, { FC } from 'react'
import { View } from 'react-native'

import { styleManager } from '@/libs'

type Props = {
  color?: string
  thickness?: number
  gap?: number
}

const Divider: FC<Props> = ({ color, thickness, gap }) => {
  const {
    theme: {
      colors,
      utils: { scale },
    },
  } = styleManager.useStyles()

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
