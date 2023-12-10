import React from 'react'
import { Image } from 'react-native'

import { Box, H4, HStack } from '@/components'
import { styleManager } from '@/libs'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'

import { MainRoutes, useMainNavigation } from './'
import DrawerItem from './DrawerItem'

const DrawerMenu = (props: DrawerContentComponentProps) => {
  const navigation = useMainNavigation()
  const { styles } = styleManager.useStyles(stylesheet)

  const currentRoute = props.state.routeNames[props.state.index]

  return (
    <DrawerContentScrollView {...props}>
      <Box style={styles.container}>
        <HStack style={styles.logoAppNameWrapper}>
          <Image
            source={require('@/assets/images/logo.png')}
            alt="sf360-icon"
            style={styles.logo}
          />
          <H4 style={styles.appName}>Gooner007</H4>
        </HStack>

        <Box style={styles.itemListWrapper}>
          {Object.values(MainRoutes).map(route => (
            <DrawerItem
              key={route}
              label={route}
              active={route === currentRoute}
              onPress={() => navigation.navigate(route)}
            />
          ))}
        </Box>
      </Box>
    </DrawerContentScrollView>
  )
}

const stylesheet = styleManager.createStyleSheet(
  ({ colors, gutters, utils: { scale } }) => ({
    container: {
      paddingTop: scale(24),
    },
    logoAppNameWrapper: {
      paddingHorizontal: scale(16),
      gap: gutters.lg,
    },
    logo: {
      width: scale(24),
      height: scale(24),
    },
    appName: {
      color: colors.darkGray,
    },
    itemListWrapper: {
      marginVertical: scale(16),
    },
  }),
)

export default DrawerMenu
