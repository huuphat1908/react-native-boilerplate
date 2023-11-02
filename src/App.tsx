import React from 'react'
import { Button, Text, View } from 'react-native'
import { UnistylesTheme } from 'react-native-unistyles'
import { QueryClient, QueryClientProvider } from 'react-query'

import { theme } from '@/libs/styles'
import { useBudget } from '@/store'
import { NavigationContainer } from '@react-navigation/native'

const queryClient = new QueryClient()

function App(): JSX.Element {
  const { budget, increase } = useBudget(state => state)

  return (
    <QueryClientProvider client={queryClient}>
      <UnistylesTheme theme={theme}>
        <NavigationContainer>
          <View>
            <Text>Sample UI {budget}</Text>
            <Button title="Increase" onPress={() => increase(1)} />
          </View>
        </NavigationContainer>
      </UnistylesTheme>
    </QueryClientProvider>
  )
}

export default App
