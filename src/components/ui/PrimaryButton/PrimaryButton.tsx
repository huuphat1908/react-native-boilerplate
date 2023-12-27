import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

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
  const {
    styles,
    theme: { shadow },
  } = styleManager.useStyles(stylesheet)

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[shadow, fullWidth && styles.fullWidth]}>
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

export default PrimaryButton
