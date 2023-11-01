import React from 'react'
import { Button, Text, View } from 'react-native'

import { useBudget } from '@/store'

const SampleUIComp = () => {
  const { budget, increase } = useBudget(state => state)

  return (
    <View>
      <Text>Sample UI {budget}</Text>
      <Button title="Increase" onPress={() => increase(1)} />
    </View>
  )
}

export default SampleUIComp
