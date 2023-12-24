import React, { useCallback } from 'react'
import { hide } from 'react-native-bootsplash'

import MainNavigator from '@/navigators/MainNavigator'
import { NavigationContainer } from '@react-navigation/native'

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
