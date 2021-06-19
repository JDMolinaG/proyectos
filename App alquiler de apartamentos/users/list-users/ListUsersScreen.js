import React, { useState, useFocusEffect } from 'react';
import { FlatList, View, Text, StatusBar, TouchableOpacity, Alert, Image } from 'react-native'
import CardComponent from './components/CardComponent'
import ListUsersStyle from './ListUsersStyle'


const ListUSersScreen = ({ route, navigation }) => {
    const { foto, rol } = route.params
    const [users, setUsers] = useState()
    const getUser = async () => {
        const response = await fetch('https://movilesapi.herokuapp.com/usuarios');
        const responseJson = await response.json()
        setUsers(responseJson.mensaje)
    }
    const userInfo = (user) => {
        navigation.navigate('User', {
            user:user,
        })
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', getUser);
        return unsubscribe
    }, [navigation])
    const desactivarBoton = () => {
        if (rol == 'anfitrion') {
            return false
        } else {
            return true
        }
    }
    console.log(desactivarBoton())
    return <View style={ListUsersStyle.container}>
        <View style={ListUsersStyle.logoContainer}>
            <View style={ListUsersStyle.contenedorInfoUser}>
                <View style={ListUsersStyle.containerImage}>
                    <Image source={{ uri: foto }} style={ListUsersStyle.image} />
                </View>
                <Text style={ListUsersStyle.textInfoUser}>{rol}</Text>
            </View>
            <Image source={require('./components/img/forma.png')} style={ListUsersStyle.marco}></Image>
            <Image source={require('./components/img/usersc.png')} style={ListUsersStyle.logo}></Image>
            <Text style={ListUsersStyle.headerText}>Lista de Usuarios</Text>
        </View>
        <View style={ListUsersStyle.list}>
            <FlatList
                style={ListUsersStyle.list}
                data={users}
                renderItem={({ item }) => <TouchableOpacity onPress={() => userInfo(item)}>
                    <CardComponent data={item} name='si'></CardComponent>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}>
            </FlatList>

        </View>
    </View>

}

export default ListUSersScreen;