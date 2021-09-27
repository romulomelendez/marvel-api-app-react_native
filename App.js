import React from 'react'

//import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthScreen } from './src/pages/AuthScreen/index'
import { Dashboard } from './src/pages/Dashboard/index'

//import { styles } from './src/styles/index'

export default App = () => {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name = "Login" component = { AuthScreen } />
        <Stack.Screen name = "Dashboard" component = { Dashboard } />

      </Stack.Navigator>

    </NavigationContainer>

  )

}