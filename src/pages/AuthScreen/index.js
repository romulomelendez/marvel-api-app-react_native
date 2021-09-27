import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './style'

export const AuthScreen = ({ navigation }) => {

    return (
  
      <View style = { styles.container }>
  
        <Text style ={ styles.text }>MOJO's Screen</Text>
        <TouchableOpacity onPress = { () => navigation.navigate('Dashboard') }>

          <Text>PRESS ME</Text>

        </TouchableOpacity>
  
      </View>
  
    )
  
  }