import { StyleSheet, Dimensions } from 'react-native';

const CrudApartamentoStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#eeeeee',
        // alignItems:'center',
    },
    logoContainer: {
        height:Dimensions.get('screen').height * .3,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        position:'absolute',
        top:100

    },
    marco:{
        position: 'absolute',
        right: 0,
        top: 0,
    },

    inputDataContainer: {
        width:Dimensions.get('screen').width * 0.9,
        height:Dimensions.get('screen').height*0.6,
        backgroundColor:'#ffffff',
        // height:450,
        alignItems: 'center',
        // paddingTop: 10,
        // paddingBottom: 10,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 0,
    },
    textData:{
        color:'#003f5a',
        fontWeight:'bold',
        fontSize:20
    },
    inputData: {
        width: Dimensions.get('screen').width * 0.8,
        borderBottomColor:'#eeeeee',
        borderBottomWidth:2,
        marginTop: 5,
        
    },
   
    button: {
        borderRadius: 70,
        width: '80%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#43bd8e',
        marginTop:30,
        marginRight: 4,
        marginLeft:4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,
    },
    textButton: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 17
    },
 


});
export default CrudApartamentoStyle