import React from 'react'

import { ButtonScreen, ColorScreen } from '@/screens'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator<MainParamList>()

enum MainRoutes {
  BUTTON = 'Button',
  COLOR = 'COLOR',
}

type MainParamList = {
  [MainRoutes.BUTTON]: undefined
  [MainRoutes.COLOR]: undefined
}

export const useAppNavigation = () => {
  return useNavigation<DrawerNavigationProp<MainParamList>>()
}

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={MainRoutes.BUTTON} component={ButtonScreen} />
      <Drawer.Screen name={MainRoutes.COLOR} component={ColorScreen} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
