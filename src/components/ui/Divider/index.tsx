import React, { FC } from 'react'
import { View } from 'react-native'

import { styleManager } from '@/libs'

import { dividerStyles } from './Divider.style'

type DividerProps = {
  color?: string
  thickness?: number
}

const Divider: FC<DividerProps> = ({ color, thickness }) => {
  const { styles } = styleManager.useStyles(dividerStyles)

  return <View style={styles.container(color, thickness)} />
}

export default Divider
