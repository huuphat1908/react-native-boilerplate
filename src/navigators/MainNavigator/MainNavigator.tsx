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
  FORM_ELEMENT = 'Form Element',
  BUTTON = 'Button',
  COLOR = 'Color',
  COMPONENT = 'Component',
  DIALOG = 'Dialog',
  TYPOGRAPHY = 'Typography',
}

export type MainParamList = {
  [MainRoutes.FORM_ELEMENT]: undefined
  [MainRoutes.BUTTON]: undefined
  [MainRoutes.COLOR]: undefined
  [MainRoutes.COMPONENT]: undefined
  [MainRoutes.DIALOG]: undefined
  [MainRoutes.TYPOGRAPHY]: undefined
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
      <Drawer.Screen
        name={MainRoutes.FORM_ELEMENT}
        component={FormElementScreen}
      />
      <Drawer.Screen name={MainRoutes.BUTTON} component={ButtonScreen} />
      <Drawer.Screen name={MainRoutes.COLOR} component={ColorScreen} />
      <Drawer.Screen name={MainRoutes.COMPONENT} component={ComponentScreen} />
      <Drawer.Screen name={MainRoutes.DIALOG} component={DialogScreen} />
      <Drawer.Screen
        name={MainRoutes.TYPOGRAPHY}
        component={TypographyScreen}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
