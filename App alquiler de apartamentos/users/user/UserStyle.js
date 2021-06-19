import { Dimensions, StyleSheet } from 'react-native'

const UserStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        flex: -.5,
        flexDirection: 'row',
        marginTop: 40,
        alignItems:'center',
        // backgroundColor:'blue'
    },
    infoContainer: {
        width: Dimensions.get('screen').width * .9,
        alignItems: 'center',
        flex: 1,
    },
    containerImage: {
        borderRadius: 100,
        borderColor:'#43bd8e',
        borderWidth:3,
        height: 150,
        width: 150,
        marginLeft: 10,
        overflow:'hidden',
        alignItems:'center'
    },
    image: {
        flex: 1, 
        width:300,
        resizeMode: 'contain'
    },
    UserInfo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        // backgroundColor:'red'
    },
    nombre:{
        fontSize:30,
        fontWeight:'bold',
        color:'#3e3e3e',
        textAlign:'center'
        
    },
    user:{
        fontSize:15,
        fontWeight:'bold',
        color:'#3e3e3e',
        textAlign:'left'
    },
    ButtonsContainer: {
        flexDirection: 'row',
        // marginTop:
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    
    inputDataContainer: {
        width:Dimensions.get('screen').width * 0.9,
        height:Dimensions.get('screen').height * 0.34,
        backgroundColor:'#ffffff',
        marginTop:10,
        // alignItems: 'center',
        // justifyContent:'center',
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
        borderRadius: 5,
        borderColor:'#43bd8e',
        borderWidth:2,
        width: '45%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#43bd8e',
        marginRight: 4,
        marginLeft: 4,
        marginBottom: 20,
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
        fontSize: 15,
    },
    reservaButton:{
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#43bd8e',
        marginRight: 4,
        marginLeft: 4,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
    },
    reservaText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 17,
    },
    buttonApartamento: {
        borderRadius: 5,
        borderColor:'#43bd8e',
        borderWidth:2,
        width: '45%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#43bd8e',
        marginRight: 4,
        marginLeft: 4,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
    },
    textButtonApartamento: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 15,
    },
    buttonApartamentoDisabled: {
        borderRadius: 5,
        borderColor:'#e3e3e3',
        borderWidth:2,
        width: '45%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e3e3e3',
        marginRight: 4,
        marginLeft: 4,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
    },
    textButtonApartamentoDisabled: {
        color: '#3e3e3e',
        fontWeight: '700',
        fontSize: 15,
    },
    formA: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },

})


export default UserStyles