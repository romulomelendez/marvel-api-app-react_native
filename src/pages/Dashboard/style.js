import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        backgroundColor: '#820D01',
        alignItems: 'center',
        justifyContent: 'center',

    },

    text: {

        fontSize: 25,
        color: '#820D01',
        

    },

    button: {

        padding: 15,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
        backgroundColor: '#fff',
        marginRight: 10,
        marginLeft: 10,
        height: 60,
        width: 200,
        alignItems: 'center',

    },

    title: {

        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        margin: 20,

    },

    imageSection: {
        
        flexDirection: 'row',
        marginTop: 20,

    },

    interactiveSection: { flexDirection: 'column' },

    banner: {

        height: 400,
        width: 200,
        marginRight: 10,
        marginLeft: 10,
        //borderTopStartRadius: 4,
        //borderTopEndRadius: 4,

    },

    item: {},

})
