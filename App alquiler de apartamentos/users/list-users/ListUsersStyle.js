import { Dimensions, StyleSheet } from 'react-native'

const ListUsersStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',

    },
    contenedorInfoUser: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        // marginLeft:60,
        position:'absolute',
        left:'40%',
        top:10
        
    },
    textInfoUser: {
        color: '#000000',
        position: 'relative',
        right: 150,
        marginLeft:10
    },
    containerImage: {
        borderRadius: 50,
        borderColor: '#43bd8e',
        borderWidth: 3,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        marginLeft: 10,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        right: 150,

    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',

    },
    header: {
        flex: 1,
        backgroundColor: '#43bd8e',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 100,
        // borderBottomRightRadius:100
    },
    headerText: {
        color: '#3e3e3e',
        fontSize: 19,
        fontWeight: '100',
        top: '30%',
        position:'relative'
    },
    logoContainer: {
        height: Dimensions.get('screen').height * .3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 90

    },
    marco: {
        position: 'absolute',
        right: 0,
        top: 0,

    },
    imagen: {
        width: 120,
        height: 100,

    },
    textHeader: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: '300'
    },
    list: {
        flex: 3
    },
    listUser: {

    },
    botonFlotante: {
        width: 50,
        height: 50,
        backgroundColor: '#003f5a',
        position: 'relative',
        left: 300,
        bottom: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botonFlotanteDisabled: {
        width: 50,
        height: 50,
    
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'relative',
        left: 300,
        bottom: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textButton: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    }




})
export default ListUsersStyle