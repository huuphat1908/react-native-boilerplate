import React from 'react'
import { UnistylesTheme } from 'react-native-unistyles'
import { QueryClientProvider } from 'react-query'

import { reactQueryClient } from '@/libs'
import { theme } from '@/libs/styleManager'
import { NavigationContainer } from '@react-navigation/native'

function App(): JSX.Element {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <UnistylesTheme theme={theme}>
        <NavigationContainer></NavigationContainer>
      </UnistylesTheme>
    </QueryClientProvider>
  )
}

export default App
