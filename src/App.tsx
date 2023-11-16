import 'react-native-gesture-handler'

import React from 'react'
import { UnistylesTheme } from 'react-native-unistyles'
import { QueryClientProvider } from 'react-query'

import { reactQueryClient } from '@/libs'
import { theme } from '@/libs/styleManager'
import ApplicationNavigator from '@/navigators/ApplicationNavigator'

const App = () => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <UnistylesTheme theme={theme}>
        <ApplicationNavigator />
      </UnistylesTheme>
    </QueryClientProvider>
  )
}

export default App
