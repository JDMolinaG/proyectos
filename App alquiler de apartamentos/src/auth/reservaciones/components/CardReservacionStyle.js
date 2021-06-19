import { Dimensions, StyleSheet } from 'react-native'

const CardReservacionStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
       
    },
    containerCard: {
        height: Dimensions.get('screen').height * .09,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#ffffff'
        
    },
    containerImage: {
        borderRadius: 50,
        borderColor:'#43bd8e',
        borderWidth:3,
        height: 50,
        width: 50,
        backgroundColor: 'red',
        marginLeft: 10,
        overflow:'hidden',
        alignItems:'center'
    },
    image: {
        flex: 1, 
        width:100,
        height:100,
        resizeMode: 'contain'
    },
    containerText:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10
    },
    textContainer:{
        marginLeft:15,
    },
    cardText:{
        color:'#000',
        fontSize:19,
        fontWeight:'bold',
        
    },
    cardCorreo:{
        color:'#3e3e3e',
        fontSize:14,
        fontWeight:'100'
    }


    // container: {
    //     height: Dimensions.get('screen').height * 0.2,
    //     width: Dimensions.get('screen').width * 0.9,
    //     margin: 10,
    //     flexDirection:'row'
    // },
    // containerImage: {
    //     flex: 1
    // },
    // overlay: {
    //     flex: 1,
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     backgroundColor: 'black',
    //     width:'100%',
    //     height: 160,
    //     opacity: 0.6,
    //     borderRadius: 10,

    // },
    // containerUser: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    // }
})
export default CardReservacionStyle