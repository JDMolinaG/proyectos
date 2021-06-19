import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../users/colors/colors'
const ButtonStyles = StyleSheet.create({
    small: {
        borderRadius: 50,
        width: Dimensions.get('screen').width * 0.3,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor:'white',
        marginRight:5,
        color:'#003f5a',
        fontSize:30
    },
    medium: {

        borderRadius: 50,
        width: Dimensions.get('screen').width * 0.8,
        alignItems: 'center',
        marginTop: 50,
        padding: 10,
        backgroundColor:'orange'
    },
    large: {

        borderRadius: 50,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center',
        marginTop: 50,
        padding: 10,
        backgroundColor:'orange'
    }

})

export default ButtonStyles