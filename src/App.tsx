import React from 'react'

import SampleUIComp from '@/components/ui/SampleUIComp'
import { NavigationContainer } from '@react-navigation/native'

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SampleUIComp />
    </NavigationContainer>
  )
}

export default App
