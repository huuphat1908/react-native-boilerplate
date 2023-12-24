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
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

import DrawerMenu from './DrawerMenu'
import Header from './Header'

const Drawer = createDrawerNavigator<MainParamList>()

export enum MainRoutes {
  COLOR = 'Color',
  TYPOGRAPHY = 'Typography',
  FORM_ELEMENT = 'Form Element',
  BUTTON = 'Button',
  DIALOG = 'Dialog',
  COMPONENT = 'Component',
}

export type MainParamList = {
  [MainRoutes.COLOR]: undefined
  [MainRoutes.TYPOGRAPHY]: undefined
  [MainRoutes.FORM_ELEMENT]: undefined
  [MainRoutes.BUTTON]: undefined
  [MainRoutes.DIALOG]: undefined
  [MainRoutes.COMPONENT]: undefined
}

const MainNavigator = () => {
  const renderHeader = useCallback(() => <Header />, [])
  const renderDrawer = useCallback(
    (props: DrawerContentComponentProps) => <DrawerMenu {...props} />,
    [],
  )

  return (
    <Drawer.Navigator
      drawerContent={renderDrawer}
      screenOptions={{
        header: renderHeader,
      }}>
      <Drawer.Screen name={MainRoutes.COLOR} component={ColorScreen} />
      <Drawer.Screen
        name={MainRoutes.TYPOGRAPHY}
        component={TypographyScreen}
      />
      <Drawer.Screen
        name={MainRoutes.FORM_ELEMENT}
        component={FormElementScreen}
      />
      <Drawer.Screen name={MainRoutes.BUTTON} component={ButtonScreen} />
      <Drawer.Screen name={MainRoutes.DIALOG} component={DialogScreen} />
      <Drawer.Screen name={MainRoutes.COMPONENT} component={ComponentScreen} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
