import React, { FC } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'

import { Text } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './PrimaryButton.style'

type Props = {
  children: string
  disabled?: boolean
  fullWidth?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const PrimaryButton: FC<Props> = ({
  children,
  disabled,
  fullWidth,
  onPress,
}) => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.wrapper,
        { opacity: disabled ? 0.7 : 1 },
        fullWidth && styles.fullWidth,
      ]}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
