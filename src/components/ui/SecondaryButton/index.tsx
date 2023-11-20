import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { styleManager } from '@/libs'

import { secondaryButtonStyles } from './SecondaryButton.style'

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
  const { styles } = styleManager.useStyles(secondaryButtonStyles)

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

export default SecondaryButton
