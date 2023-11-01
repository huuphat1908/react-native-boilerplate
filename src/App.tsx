import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import SampleUIComp from '@/components/ui/SampleUIComp'
import { NavigationContainer } from '@react-navigation/native'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SampleUIComp />
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App
