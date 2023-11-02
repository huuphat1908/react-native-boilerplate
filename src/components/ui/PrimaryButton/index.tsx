import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { styleManager } from '@/libs'

import { primaryButtonStyles } from './styles'

type PrimaryButtonProps = {
  children: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  disabled,
  onPress,
}) => {
  const { styles } = styleManager.useStyles(primaryButtonStyles)

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={styles.view(disabled)}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton
