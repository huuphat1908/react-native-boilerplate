import './i18n'

import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UnistylesTheme } from 'react-native-unistyles'
import { QueryClientProvider } from 'react-query'

import { reactQueryClient } from '@/libs'
import { theme } from '@/libs/styleManager'
import { AppNavigator } from '@/navigators'

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <QueryClientProvider client={reactQueryClient}>
        <UnistylesTheme theme={theme}>
          <AppNavigator />
        </UnistylesTheme>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default App
