import 'react-native-gesture-handler'

import React from 'react'
import { Text } from 'react-native'
import { UnistylesTheme } from 'react-native-unistyles'
import { QueryClientProvider } from 'react-query'

import { reactQueryClient } from '@/libs'
import { theme } from '@/libs/styleManager'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

const Feed = () => <Text>Feed</Text>
const Article = () => <Text>Article</Text>

function App(): JSX.Element {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <UnistylesTheme theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
          </Drawer.Navigator>
        </NavigationContainer>
      </UnistylesTheme>
    </QueryClientProvider>
  )
}

export default App
