import React from 'react'

import { ButtonScreen } from '@/screens'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator<MainParamList>()

enum MainRoutes {
  BUTTON = 'Button',
}

type MainParamList = {
  [MainRoutes.BUTTON]: undefined
}

export const useAppNavigation = () => {
  return useNavigation<DrawerNavigationProp<MainParamList>>()
}

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={MainRoutes.BUTTON} component={ButtonScreen} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
