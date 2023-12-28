import React, { useCallback } from 'react'
import { Image } from 'react-native'

import { Box, H4, HStack } from '@/components'
import { useMainNavigation } from '@/hooks'
import { styleManager } from '@/libs'
import { useApplicationSetting, useDialogManager } from '@/store'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'

import DrawerItem from './DrawerItem'
import { MainRoutes } from './MainNavigator'

const DrawerMenu = (props: DrawerContentComponentProps) => {
  const { styles } = styleManager.useStyles(stylesheet)
  const navigation = useMainNavigation()
  const logout = useApplicationSetting(state => state.logout)
  const showConfirmationDialog = useDialogManager(
    state => state.showConfirmationDialog,
  )

  const currentRoute = props.state.routeNames[props.state.index]

  const handleLogoutPress = useCallback(() => {
    showConfirmationDialog({
      title: 'Confirmation',
      message: 'Are you sure you you want to logout?',
      confirmText: 'Logout',
      cancelText: 'Cancel',
      onConfirm: logout,
    })
  }, [logout, showConfirmationDialog])

  return (
    <DrawerContentScrollView {...props}>
      <Box style={styles.container}>
        <HStack style={styles.logoAppNameWrapper}>
          <Image
            source={require('@/assets/images/logo.png')}
            alt="rn-boilerplate-icon"
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
          <DrawerItem
            label="Log out"
            active={false}
            onPress={handleLogoutPress}
          />
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
      alignItems: 'center',
    },
    logo: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(36) / 2,
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
