import React, { FC } from 'react'
import { Modal, Platform, Pressable, useWindowDimensions } from 'react-native'

import { Box } from '@/components'
import { useKeyboard } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './BaseDialog.style'

export type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const BaseDialog: FC<Props> = ({ isOpen, onClose, children }) => {
  const {
    styles,
    theme: { paddings },
  } = styleManager.useStyles(stylesheet)
  const { isKeyboardVisible, keyboardHeight } = useKeyboard()
  const windowDimensions = useWindowDimensions()

  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
      transparent>
      <Pressable
        style={[
          styles.backdrop,
          isKeyboardVisible &&
            Platform.select({
              android: {
                justifyContent: 'center',
              },
              ios: {
                justifyContent: 'flex-end',
                bottom: keyboardHeight,
              },
            }),
        ]}
        onPress={onClose}>
        <Pressable>
          <Box
            style={[
              styles.wrapper,
              { width: windowDimensions.width - 2 * paddings.xxl },
            ]}>
            {children}
          </Box>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export default BaseDialog
