import React, { FC, ReactNode, useCallback } from 'react'
import { Pressable, Text } from 'react-native'
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { HStack, Icon, VStack } from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './Accordion.style'

type Props = {
  title: string
  children: ReactNode
}

const Accordion: FC<Props> = ({ title, children }) => {
  const { isOpen, toggle } = useDisclose()
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)
  const rotateValue = useSharedValue(0)

  const handleToggle = useCallback(() => {
    rotateValue.value = withTiming(isOpen ? 0 : 1)
    toggle()
  }, [isOpen, rotateValue, toggle])

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateValue.value * 90}deg` }],
    }
  })

  return (
    <VStack>
      <Pressable onPress={handleToggle}>
        <HStack style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={rotateStyle}>
            <Icon name="ChevronRight" size={24} color={colors.white} />
          </Animated.View>
        </HStack>
      </Pressable>
      {isOpen && <Animated.View entering={FadeInUp}>{children}</Animated.View>}
    </VStack>
  )
}

export default Accordion
