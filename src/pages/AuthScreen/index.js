import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, } from 'react-native'

import { styles } from './style'

export const AuthScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

    return (

      <View style = { styles.container }>
    
        <Text style = { styles.tittle }>User Authentication</Text>

        <View style = { styles.container2 }>

          <TextInput

            style = { styles.input }
            placeholder = 'E-MAIL'
            keyboardType = 'email-address'
            keyboardAppearance = 'dark'
            onChangeText = { (e) => setEmail(e) }
              
          />

          <TextInput

            style = { styles.input }
            placeholder = 'PASSWORD'
            keyboardType = 'numeric'
            keyboardAppearance = 'dark'
            onChangeText = { (e) => setPassword(e) }
          
          />

          <TouchableOpacity style = { styles.button } onPress = { () => {

            ( email && password ) ?

              navigation.navigate('Dashboard')

            : alert('Email or Password input is empty!')

          }}>

            <Text style = { styles.loginText }>LOGIN</Text>

          </TouchableOpacity>

        </View>

      </View>
  
    )
  
  }