import React from 'react'
import { SafeAreaView } from 'react-native'

import { styleManager } from '@/libs'
import { LoginScreen } from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { stylesheet } from './AuthNavigator.style'

const Stack = createNativeStackNavigator()

export enum AuthRoutes {
  LOGIN = 'Login',
}

export type AuthParamList = {
  [AuthRoutes.LOGIN]: undefined
}

const AuthNavigator = () => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={AuthRoutes.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default AuthNavigator
