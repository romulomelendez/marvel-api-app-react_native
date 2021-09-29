import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import md5 from 'md5'

import { styles } from './style'

export const Dashboard = () => {

    const [controlVariable, setControlVariable] = useState(0)
    const [responseOfApi, setResponseOfApi] = useState({})

    useEffect( () => {

        if( controlVariable !== 0 ) {
        
            const response = async () => {
            
                const timeStamp = Number(new Date())
                const publicKey = '56c78e0a40ce63949db3669345950628'
                const privateKey = 'c8807d039107ef3ab3cdd034167fbb7abd4262d2'
                const hash = md5( timeStamp + privateKey + publicKey )
                const URL = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
                const data = await fetch(URL)
                const characters = await data.json()
                setResponseOfApi(characters.data['results'])
                console.log(responseOfApi)
                //const items = [] = myCharacters.data['results'][i].name
                
            }

            response()
            
        }
        
        return () => {}

    }, [controlVariable])

    return (

        <View style = { styles.container }>

            <TouchableOpacity style = { styles.button } onPress = { () => setControlVariable(controlVariable + 1) }>

                <Text style = { styles.text }>CHARACTERS</Text>

            </TouchableOpacity>              

        </View>

    )
    
}
