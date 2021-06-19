import { StyleSheet, Dimensions } from 'react-native';


const CardApartamentoStyle = StyleSheet.create({

    containerImage: {
        flex: 1,
        borderRadius: 8,
        borderWidth: 0,
        width: 160,
        height: 130,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        // resizeMode: 'cover',
        marginLeft: 30,
        marginTop: 15,
    },
    Image:{
        flex:1,
    },
 
    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '100',
        // justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        // left: 10,
        // bottom: 50,
        fontWeight: 'bold'
    },
    cardDisponible: {
        color: 'white',
        fontSize: 14,
        fontWeight: '100',
        // justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 10,
        // right: 10
    },
   
   
})

export default CardApartamentoStyle