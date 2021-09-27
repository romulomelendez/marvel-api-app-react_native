import React from 'react'
import { View, Button } from 'react-native'

import md5 from 'md5'

import { styles } from './style'

export const Dashboard = () => {

    const timeStamp = Number(new Date())
    const publicKey = '56c78e0a40ce63949db3669345950628'
    const privateKey = 'c8807d039107ef3ab3cdd034167fbb7abd4262d2'
    const hash = md5( timeStamp + privateKey + publicKey )
    
    const getCharacter = async () => {

        const URL = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
        const data = await fetch(URL)
        const myCharacters = await data.json()
        var i = 0

        while( i < myCharacters.data['count'] ) {

            console.log(myCharacters.data['results'][i].name)
            i++

        }

    }

    return(

        <View style = { styles.container }>

                <Button title = "CHARACTERS" onPress = { () => getCharacter() } />
                

        </View>

    )
    
}
