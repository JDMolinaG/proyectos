import React, { useState, } from 'react';
import { View, Text, Image,  TouchableOpacity, Alert, FlatList } from 'react-native';
import ReservacionesStyle from './ReservacionesStyle';
import CardReservacion from './components/CardReservacion'

const ReservacionesScreen = ({ route, navigation }) => {
    const { foto, rol, idUsu, ciudad } = route.params

    const [users, setUsers] = useState()
    const getUser = async () => {
        try {
            const response = await fetch(`https://movilesapi.herokuapp.com/reservaciones/${idUsu}`);
            const responseJson = await response.json()
            setUsers(responseJson.mensaje)
        } catch (error) {
            Alert.alert('Error:', error.message)
        }

    }
    async function deleteUser(id) {
        try {
            const response = await fetch(`https://movilesapi.herokuapp.com/reservacion/eliminar/${id}`, {
                method: 'DELETE',
              })

            const responseJson = await response.json()
            Alert.alert(responseJson.mensaje)
            // console.log(responseJson)
            navigation.navigate('User')
        } catch (error) {
            Alert.alert('Error:', error.message)
        }

    }
    const userInfo = (user) => {
        // console.log(user)
        let idDelete = user._id
        deleteUser(idDelete)
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', getUser);
        return unsubscribe
    }, [navigation])
    return <View style={ReservacionesStyle.container}>
        <View style={ReservacionesStyle.logoContainer}>
            <Image source={require('./img/forma.png')} style={ReservacionesStyle.marco}></Image>
            <Image source={require('./img/usersc.png')} style={ReservacionesStyle.logo}></Image>
            <Text style={ReservacionesStyle.headerText}>Reservaciones</Text>
        </View>
        <View style={ReservacionesStyle.list}>
            <FlatList
                style={ReservacionesStyle.list}
                data={users}
                renderItem={({ item }) => <TouchableOpacity onPress={() => userInfo(item)}>
                    <CardReservacion data={item} name='si'></CardReservacion>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}>
            </FlatList>
        </View>
    </View>
}

export default ReservacionesScreen