import React, { FC } from 'react'
import { Pressable } from 'react-native'

import { HStack, Text } from '@/components'

type Props = {
  isOpen: boolean
  type: ToastType
  message?: string
  position: ToastPosition
  visibilityTime: number
  topOffset: number
  bottomOffset: number
  keyboardOffset: number
  onShow: () => void
  onHide: () => void
  onPress?: () => void
}

const Toast: FC<Props> = ({
  isOpen,
  type,
  message,
  position,
  visibilityTime,
  topOffset,
  bottomOffset,
  keyboardOffset,
  onShow,
  onHide,
  onPress,
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Pressable onPress={onPress}>
      <HStack>
        <Text>{type}</Text>
        <Text>{message}</Text>
      </HStack>
    </Pressable>
  )
}

Toast.defaultProps = {
  type: 'info',
  position: 'bottom',
  visibilityTime: 3000,
}

export default Toast
