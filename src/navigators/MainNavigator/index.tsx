import React from 'react'

import { Form as FormScreen, UI as UIScreen } from '@/screens'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator<MainParamList>()

enum MainRoutes {
  UI = 'UI',
  Form = 'Form',
}

type MainParamList = {
  [MainRoutes.UI]: undefined
  [MainRoutes.Form]: undefined
}

export const useAppNavigation = () => {
  return useNavigation<DrawerNavigationProp<MainParamList>>()
}

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={MainRoutes.UI} component={UIScreen} />
      <Drawer.Screen name={MainRoutes.Form} component={FormScreen} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
