import React, { FC, ReactNode, useCallback, useState } from 'react'
import { LayoutChangeEvent, Modal, Pressable } from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { Box } from '@/components'
import { styleManager } from '@/libs'

import { bottomSheetStyles } from './BottomSheet.style'

type BottomSheetProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const BottomSheet: FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const { styles } = styleManager.useStyles(bottomSheetStyles)
  const [height, setHeight] = useState(0)
  const offset = useSharedValue(0)

  const bottomSheetAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }))

  //please always put handleClose above const pan
  const handleClose = useCallback(() => {
    onClose()
    offset.value = 0
  }, [offset, onClose])

  const pan = Gesture.Pan()
    .onChange(event => {
      const offsetDelta = event.changeY + offset.value
      offset.value = offsetDelta > 0 ? offsetDelta : 0
    })
    .onFinalize(() => {
      if (offset.value < height / 2) {
        offset.value = withSpring(0)
      } else {
        offset.value = withTiming(height, {}, () => {
          runOnJS(handleClose)()
        })
      }
    })

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height)
  }, [])

  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
      transparent>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Pressable style={styles.container} onPress={handleClose}>
          <GestureDetector gesture={pan}>
            <AnimatedPressable
              style={[styles.bottomSheet, bottomSheetAnimatedStyles]}
              entering={SlideInDown}
              exiting={SlideOutDown}
              onLayout={handleLayout}>
              <Box style={styles.dragableWrapper}>
                <Box style={styles.dragHandle} />
              </Box>
              {children}
            </AnimatedPressable>
          </GestureDetector>
        </Pressable>
      </GestureHandlerRootView>
    </Modal>
  )
}

export default BottomSheet
