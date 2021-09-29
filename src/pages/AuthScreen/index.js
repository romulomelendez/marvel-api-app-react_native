import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './style'

export const AuthScreen = ({ navigation }) => {

    return (
  
      <View style = { styles.container }>
  
        <Text style = { styles.textTitle }>MOJO's Screen</Text>
        <TouchableOpacity style = { styles.button }onPress = { () => navigation.navigate('Dashboard') }>

          <Text style = { styles.text }>PRESS ME</Text>

        </TouchableOpacity>
  
      </View>
  
    )
  
  }