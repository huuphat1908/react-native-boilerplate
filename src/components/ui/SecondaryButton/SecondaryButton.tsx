import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

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
      style={fullWidth && styles.fullWidth}>
      <View
        style={[
          {
            opacity: disabled ? 0.7 : 1,
          },
          styles.wrapper,
        ]}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SecondaryButton
