import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { styleManager } from '@/libs'

import { secondaryButtonStyles } from './styles'

type SecondaryButtonProps = {
  children: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  children,
  disabled,
  onPress,
}) => {
  const { styles } = styleManager.useStyles(secondaryButtonStyles)

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={styles.view(disabled)}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SecondaryButton
