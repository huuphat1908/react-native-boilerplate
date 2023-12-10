import React, { useCallback } from 'react'

import {
  ButtonScreen,
  ColorScreen,
  ComponentScreen,
  DialogScreen,
  FormElementScreen,
  TypographyScreen,
} from '@/screens'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

import Header from './Header'

const Drawer = createDrawerNavigator<MainParamList>()

enum MainRoutes {
  BUTTON = 'Button',
  COLOR = 'Color',
  COMPONENT = 'Component',
  DIALOG = 'Dialog',
  TYPOGRAPHY = 'Typography',
  FORM_ELEMENT = 'Form Element',
}

type MainParamList = {
  [MainRoutes.BUTTON]: undefined
  [MainRoutes.COLOR]: undefined
  [MainRoutes.COMPONENT]: undefined
  [MainRoutes.DIALOG]: undefined
  [MainRoutes.TYPOGRAPHY]: undefined
  [MainRoutes.FORM_ELEMENT]: undefined
}

export const useMainNavigation = () => {
  return useNavigation<DrawerNavigationProp<MainParamList>>()
}

const MainNavigator = () => {
  const renderHeader = useCallback(() => <Header />, [])

  return (
    <Drawer.Navigator
      screenOptions={{
        header: renderHeader,
      }}>
      <Drawer.Screen
        name={MainRoutes.FORM_ELEMENT}
        component={FormElementScreen}
      />
      <Drawer.Screen name={MainRoutes.DIALOG} component={DialogScreen} />
      <Drawer.Screen name={MainRoutes.COMPONENT} component={ComponentScreen} />
      <Drawer.Screen name={MainRoutes.BUTTON} component={ButtonScreen} />
      <Drawer.Screen name={MainRoutes.COLOR} component={ColorScreen} />
      <Drawer.Screen
        name={MainRoutes.TYPOGRAPHY}
        component={TypographyScreen}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
