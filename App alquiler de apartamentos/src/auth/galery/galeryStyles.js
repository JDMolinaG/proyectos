import { StyleSheet, Dimensions } from 'react-native';


const GaleryStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#e3e3e3'
    },
    
    contenedorPortada: {
        height: Dimensions.get('screen').height * 0.2,
        width:'100%',
        // backgroundColor: 'blue',
        position:'relative',
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent:'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems:'center',
        // flexWrap: 'wrap',
        // alignItems: 'flex-start' 
    },
    contenedorGaleria: {
        flex:1,
        padding: 10,
    },
    textoPortada: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        position:'absolute',
        zIndex:1,
    },
    card:{
        width:160,
        height:140,
        marginTop:20,
        borderRadius:10
    },
    list:{
        flex:3
    }
    // subtituloPortada: {
    //     color: 'white',
    //     fontSize: 15,
    //     justifyContent: 'center',
    //     marginBottom: 80,
    //     textAlign: 'center'
    // },
    // textoGaleria: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     marginTop: 10
    // },
    // // Vertical
    // containerCard: {
    //     flex: 1,
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // card: {
    //    flex:1,
    //     marginBottom: 15,
    //     borderRadius: 10,
    //     backgroundColor: 'black',
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.27,
    //     shadowRadius: 4.65,
    //     elevation: 6,
    //     backgroundColor:'red',
    // },
    // imagenCard: {
    //     // width: Dimensions.get('screen').width * 0.43,
    //     // height: 160,
    //     // borderRadius: 10,

    // },
    // // overlay: {
    // //     flex: 1,
    // //     position: 'absolute',
    // //     left: 0,
    // //     top: 0,
    // //     backgroundColor: 'black',
    // //     width: Dimensions.get('screen').width * 0.43,
    // //     height: 160,
    // //     opacity: 0.4,
    // //     borderRadius: 10,

    // // },
    // subtitleCard: {
    //     color: 'white',
    //     position: 'absolute',
    //     top: 10,
    //     left: 10,
    //     fontSize: 12,
    //     fontWeight: '100'
    // },
    // titleCard: {
    //     color: 'white',
    //     position: 'absolute',
    //     top: 60,
    //     left: 10,
    //     fontSize: 18,
    //     fontWeight: '700',
    //     paddingRight: 20
    // },
    // starCard: {
    //     color: 'white',
    //     position: 'absolute',
    //     bottom: 10,
    //     right: -10,
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     paddingRight: 20,

    // },

    // // horizontal
    // horizontalContenedor: {
    //     flex: 1,
    //     marginTop: 10
    // },
    // cardHorizontal: {
    //     width: Dimensions.get('screen').width * 0.45,
    //     marginBottom: 15,
    //     borderRadius: 10,
    //     backgroundColor: 'black',
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.27,
    //     shadowRadius: 4.65,

    //     elevation: 6,
    //     marginRight: 20,
    //     flex: 1,


    // },
    // imagenCardHorizontal: {
    //     width: Dimensions.get('screen').width * 0.45,
    //     height: 120,
    //     borderRadius: 10,

    // },
    // overlayHorizontal: {
    //     flex: 1,
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     backgroundColor: 'black',
    //     width: Dimensions.get('screen').width * 0.45,
    //     height: 120,
    //     opacity: 0.4,
    //     borderRadius: 10,

    // },

    // subtitleCardHorizontal: {
    //     color: 'white',
    //     position: 'absolute',
    //     top: 10,
    //     left: 10,
    //     fontSize: 12,
    //     fontWeight: '100',
    //     alignItems: 'center',
    //     // paddingRight: 10,
    //     // paddingLeft:25,
    //     width: '90%',
    //     textAlign: 'center'
    // },
    // titleCardHorizontal: {
    //     color: 'white',
    //     position: 'absolute',
    //     top: 50,
    //     fontSize: 18,
    //     fontWeight: '700',
    //     width: '95%',
    //     textAlign: 'center',
    //     alignItems: 'center',
    // },


})

export default GaleryStyles