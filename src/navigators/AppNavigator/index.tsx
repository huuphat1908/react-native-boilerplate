import React, { useCallback } from 'react'
import { hide } from 'react-native-bootsplash'

import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from '../MainNavigator'

const AppNavigator = () => {
  const hideSplashScreen = useCallback(async () => {
    await hide({
      fade: true,
    })
  }, [])

  return (
    <NavigationContainer onReady={hideSplashScreen}>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
