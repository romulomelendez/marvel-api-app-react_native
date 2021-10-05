import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import md5 from 'md5'

import { styles } from './style'

export const Dashboard = () => {

    const [controlVariable, setControlVariable] = useState(0)
    const [controlVariable2, setControlVariable2] = useState(0)
    const [responseOfApi, setResponseOfApi] = useState([])
        
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

        for ( var i = 0; i = 20; i++) {

            var aux = [i] = characters.data['results'][i]
            setResponseOfApi(aux)

        }

        setControlVariable(controlVariable + 1)
        
        //setResponseOfApi(characters.data['results'])
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
                            
                            : responseOfApi.forEach( item => {

                                <>
                                
                                    <Text>{ item.id }</Text>
                                    <Text>{ item.name }</Text>

                                </>

                            })
                            
                        }

                    </TouchableOpacity>
                    

                </View>

                <View style = { styles.interactiveSection }>

                    <Image style = { styles.banner } source = { require('../../../assets/comic.jpeg') } />

                    <TouchableOpacity style = { styles.button } onPress = { () => getComicByApi() }>

                        {

                            controlVariable2 === 0 ? <Text style = { styles.text }>COMICS</Text>

                            : <Text>MEUS COMICS</Text>

                        }

                    </TouchableOpacity>

                </View>

            </View>
                     
        </View>

    )
    
}
