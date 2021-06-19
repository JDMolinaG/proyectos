import { StyleSheet, Dimensions } from 'react-native';

const OpenAppStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150,

    },
    form: {
        flex:2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
       
    },
    button: {
        borderRadius: 5,
        width: '90%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        marginRight: 4,
        marginLeft:4,
        marginBottom:20,
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
        color: '#003f5a',
        fontWeight: '700',
        fontSize: 19,
 

        
    }
})
export default OpenAppStyles