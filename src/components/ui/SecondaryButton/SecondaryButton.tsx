import React, { FC } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'

import { Text } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './SecondaryButton.style'

type SecondaryButtonProps = {
  children: string
  disabled?: boolean
  fullWidth?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
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
        {
          opacity: disabled ? 0.7 : 1,
        },
        fullWidth && styles.fullWidth,
      ]}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

export default SecondaryButton
