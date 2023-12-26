import React, { useCallback } from 'react'
import { StatusBar } from 'react-native'
import { hide } from 'react-native-bootsplash'

import { colors } from '@/constants'
import { AuthNavigator, MainNavigator } from '@/navigators'
import { useApplicationSetting } from '@/store'
import { NavigationContainer } from '@react-navigation/native'

const AppNavigator = () => {
  const isLoggedIn = useApplicationSetting(state => state.isLoggedIn)

  const hideSplashScreen = useCallback(async () => {
    await hide({
      fade: true,
    })
  }, [])

  return (
    <NavigationContainer onReady={hideSplashScreen}>
      <StatusBar
        backgroundColor={isLoggedIn ? colors.blue : colors.white}
        barStyle={isLoggedIn ? 'light-content' : 'dark-content'}
      />
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator
