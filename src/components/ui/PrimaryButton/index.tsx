import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { styleManager } from '@/libs'

import { primaryButtonStyles } from './PrimaryButton.style'

type PrimaryButtonProps = {
  children: string
  disabled?: boolean
  fullWidth?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  disabled,
  fullWidth,
  onPress,
}) => {
  const { styles } = styleManager.useStyles(primaryButtonStyles)

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      {...(fullWidth ? { style: styles.fullWidth } : {})}>
      <View style={styles.wrapper(disabled)}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton
