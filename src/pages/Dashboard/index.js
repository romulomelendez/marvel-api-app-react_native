import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native'

import md5 from 'md5'

import { styles } from './style'

export const Dashboard = () => {

    const timeStamp = Number(new Date())
    const publicKey = '56c78e0a40ce63949db3669345950628'
    const privateKey = 'c8807d039107ef3ab3cdd034167fbb7abd4262d2'
    const hash = md5( timeStamp + privateKey + publicKey )

    const [comic, setComic] = useState(false)
    //const [character, setCharacter] = useState(false)
    
    useEffect( async () => {

        const URL = `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
        const data = await fetch(URL)
        const myComics = await data.json()
        console.log(myComics)
        setComic(false)

    }, [ comic == true ] )

    //useEffect( async () => {

    //     const URL = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    //     const data = await fetch(URL)
    //     const character = await data.json()
    //     console.log(character)

    // }, [character] )

    return(

        <View style = { styles.container }>

                <Button title = "COMICS" onPress = { () => setComic(true) }></Button>
                

        </View>

    )
    
}
