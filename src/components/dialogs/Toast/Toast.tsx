import React, { FC, useEffect } from 'react'
import { Platform } from 'react-native'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './Toast.style'

type Props = {
  isOpen: boolean
  onClose: () => void
  message: string
  visibilityTime?: number
}

const Toast: FC<Props> = ({ isOpen, onClose, message, visibilityTime }) => {
  const {
    styles,
    theme: {
      utils: { scale },
    },
  } = styleManager.useStyles(stylesheet)
  const { bottom } = useSafeAreaInsets()

  useEffect(() => {
    let autoCloseTimeout: NodeJS.Timeout
    if (isOpen) {
      autoCloseTimeout = setTimeout(() => {
        onClose()
      }, visibilityTime)
    }

    return () => {
      clearTimeout(autoCloseTimeout)
    }
  }, [isOpen, onClose, visibilityTime])

  if (!isOpen) {
    return null
  }

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          bottom: Platform.select({
            android: scale(10),
            ios: scale(10) + bottom,
          }),
        },
      ]}
      entering={FadeInUp}
      exiting={FadeOutUp}>
      <Text>{message}</Text>
    </Animated.View>
  )
}

Toast.defaultProps = {
  visibilityTime: 3000,
}

export default Toast
