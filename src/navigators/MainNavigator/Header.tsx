import React from 'react'
import { Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { H4, HStack, Icon } from '@/components'
import { useMainNavigation } from '@/hooks'
import { styleManager } from '@/libs'
import { useRoute } from '@react-navigation/native'

const Header = () => {
  const route = useRoute()
  const navigation = useMainNavigation()
  const { top } = useSafeAreaInsets()
  const {
    theme: { colors, paddings },
    styles,
  } = styleManager.useStyles(stylesheet)

  return (
    <HStack
      style={[
        styles.wrapper,
        {
          paddingTop: paddings.xl + top,
        },
      ]}>
      <Pressable onPress={navigation.toggleDrawer}>
        <Icon name="Menu" color={colors.white} size={24} />
      </Pressable>
      <H4 style={styles.title}>{route.name}</H4>
    </HStack>
  )
}

const stylesheet = styleManager.createStyleSheet(
  ({ colors, paddings, gutters }) => ({
    wrapper: {
      backgroundColor: colors.blue,
      padding: paddings.xl,
      alignItems: 'center',
      gap: gutters.xl,
    },
    title: {
      color: colors.white,
    },
  }),
)

export default Header
