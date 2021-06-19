import React, { useState, useEffect } from 'react';
import { View, Text,  TouchableOpacity, FlatList } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import GaleryStyles from './galeryStyles';
import CardApartamento from '../galery/components/CardApartamentoScreen';


const GaleryScreen = ({ route, navigation }) => {
    const { idUsu,rol } = route.params
    const [users, setUsers] = useState()
    const getUser = async () => {
        try {
            const response = await fetch('https://movilesapi.herokuapp.com/apartamentos');
            const responseJson = await response.json()
            setUsers(responseJson.mensaje)
        } catch (error) {
            Alert.alert('Error:', error.message)
        }
    }
    const userInfo = (user) => {
        console.log(user)
        navigation.navigate('Apartamento', {
            user: user,
            idUsu: idUsu,
            rol:rol
        })
    }
    React.useEffect(() => {
        const actualizar = navigation.addListener('focus', getUser);
        return actualizar
    }, [navigation])

    return <View style={GaleryStyles.container}>
        <View style={GaleryStyles.contenedorPortada}>
            <Text style={GaleryStyles.textoPortada}>Apartamentos</Text>
            <ImageOverlay source={require('./img/portada.jpg')} style={{ flex: 1 }} />
        </View>
        <View style={GaleryStyles.contenedorGaleria}>
            <View style={GaleryStyles.row}>
                <FlatList
                    refreshing={true}
                    numColumns={2}
                    style={{ flex: 1 }}
                    data={users}
                    renderItem={({ item }) => <TouchableOpacity disabled={item.estado?false:true} onPress={() => userInfo(item)}>
                        <CardApartamento data={item} ></CardApartamento>
                    </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
            </View>
        </View>
    </View>
}

export default GaleryScreen;
