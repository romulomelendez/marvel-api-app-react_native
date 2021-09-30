import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import md5 from 'md5'

import { styles } from './style'

export const Dashboard = () => {

    const [controlVariable, setControlVariable] = useState(0)
    const [responseOfApi, setResponseOfApi] = useState({})
        
    const getCharacterByApi = async () => {
        
        //  Building the URL's API
        const timeStamp = Number(new Date())
        const publicKey = '56c78e0a40ce63949db3669345950628'
        const privateKey = 'c8807d039107ef3ab3cdd034167fbb7abd4262d2'
        const hash = md5( timeStamp + privateKey + publicKey )
        const URL = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`

        //  Doing the Request and catching the response of it
        const data = await fetch(URL)
        const characters = await data.json()
        setResponseOfApi(characters.data['results'])
        setControlVariable(controlVariable + 1)
        //const items = [] = myCharacters.data['results'][i].name
        
    }
    
    return (

        <View style = { styles.container }>

            <Text style = { styles.title }>Which the option you wanna see about</Text>

            <View style = { styles.imageSection }>

                <View style = { styles.interactiveSection }>
                    
                    <Image style = { styles.banner } source = { require('../../../assets/super-hero.jpg') } />
                    
                    <TouchableOpacity style = { styles.button } onPress = { () => getCharacterByApi() }>

                        {
                            
                            controlVariable === 0 ? <Text style = { styles.text }>CHARACTERS</Text>
                            
                            : <Text>{ responseOfApi[1].name }</Text>
                            
                        }

                    </TouchableOpacity>
                    

                </View>

                <View style = { styles.interactiveSection }>

                    <Image style = { styles.banner } source = { require('../../../assets/comic.jpeg') } />

                    <TouchableOpacity style = { styles.button } onPress = { () => getCharacterByApi() }>

                        {

                            controlVariable === 0 ? <Text style = { styles.text }>COMICS</Text>

                            : <Text>{ responseOfApi[1].comics }</Text>

                        }

                    </TouchableOpacity>

                </View>

            </View>
                     
        </View>

    )
    
}
