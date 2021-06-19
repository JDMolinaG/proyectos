import React, { useState, useEffect } from 'react';
import { View, Text,  Image, TextInput, TouchableOpacity, Alert,  ScrollView} from 'react-native';
import ApartamentoStyle from './ApartamentoStyle';

const ApartamentoScreen = ({ route, navigation }) => {

    const { telefono, direccion, _id, foto, estado, numeroBaños, numeroCamas, ciudad } = route.params.user;
    const { idUsu, action, rol } = route.params
    let datosApartamento = {
        telefono: telefono,
        direccion: direccion,
        _id: _id,
        foto: foto,
        numeroBaños: numeroBaños,
        numeroCamas: numeroCamas,
        ciudad: ciudad
    }
    console.log(rol)
    const [telefono1, setTelefono] = useState()
    const [correo, setCorreo] = useState()
    const [fechaInicio, setFechaInicio] = useState()
    const [fechaFinal, setFechaFinal] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [numeroPersonas, setNumeroPersonas] = useState()
    const [action1, setEstado] = useState(action)
    let estadoSting
    if (estado == true) {
        estadoSting = 'Disponible'
    } else {
        estadoSting = 'No disponible'
    }
    const desactivarBoton = () => {
        if (rol == 'anfitrion') {
            return false
        } else {
            return true
        }
    }
    const editarApartamento = () => {
        navigation.navigate('EditApartamento', datosApartamento)
    }
    const sendUser = async () => {
        try {
            const response = await fetch('https://movilesapi.herokuapp.com/reservacion/nuevo', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idUsuario: idUsu,
                    idApartamento: _id,
                    ciudad: ciudad,
                    telefono: telefono1,
                    correo: correo,
                    fechaInicio: fechaInicio,
                    fechaFinal: fechaFinal,
                    numeroPersonas: numeroPersonas
                })
            });
            const responseJson = await response.json();
            console.log(responseJson)
            navigation.navigate('User', responseJson)
            Alert.alert(responseJson.mensaje)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteApartament = async (id) => {
        const response = await fetch(`https://movilesapi.herokuapp.com/apartamento/eliminar/${id}`, {
            method: 'DELETE',
        })
        const responseJson = await response.json()
        Alert.alert(responseJson.mensaje)
        console.log(responseJson)
        navigation.navigate('User')
    }
    React.useEffect(() => {
        const actualizar = navigation.addListener('focus', sendUser);
        return actualizar
    }, [navigation])
    return <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} scrollEnabled={true} style={ApartamentoStyle.container}>
        <View style={ApartamentoStyle.containerHeader}>
            <View style={ApartamentoStyle.UserInfo}>
                <Text style={ApartamentoStyle.nombre}>Direccion: {direccion}</Text>
                <Text style={ApartamentoStyle.user}>Telefono: {telefono}</Text>
                <Text style={ApartamentoStyle.user}>Estado: {estadoSting}</Text>
                <Text style={ApartamentoStyle.user}>Ciudad: {ciudad}</Text>
                <View style={ApartamentoStyle.row}>
                    <View style={ApartamentoStyle.iconGroup}>
                        <Image style={ApartamentoStyle.img} source={require('./img/cama.png')}></Image>
                        <Text>Habitaciones:{numeroCamas}</Text>
                    </View>
                    <View style={ApartamentoStyle.iconGroup}>
                        <Image style={ApartamentoStyle.img} source={require('./img/bano.png')}></Image>
                        <Text>Baños:{numeroBaños}</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={ApartamentoStyle.form}>
            <TouchableOpacity disabled={desactivarBoton()} onPress={() => editarApartamento()} style={desactivarBoton() ? ApartamentoStyle.buttonApartamentoDisabled : ApartamentoStyle.buttonApartamento} >
                <Text style={desactivarBoton() ? ApartamentoStyle.textButtonApartamentoDisabled : ApartamentoStyle.textButtonApartamento}>Editar Apartamento</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={desactivarBoton()} onPress={() => deleteApartament(_id)} style={desactivarBoton() ? ApartamentoStyle.buttonApartamentoDisabled : ApartamentoStyle.buttonApartamento}  >
                <Text style={desactivarBoton() ? ApartamentoStyle.textButtonApartamentoDisabled : ApartamentoStyle.textButtonApartamento}>Eliminar Apartamento</Text>
            </TouchableOpacity>
        </View>
        <View style={ApartamentoStyle.inputDataContainer}>
            <Text style={ApartamentoStyle.textData}>{action1} Reservacion</Text>
            <TextInput
                onChangeText={(text) => setTelefono(text)}
                keyboardType='phone-pad'
                inlineImageLeft='telefono'
                inlineImagePadding={50}
                style={ApartamentoStyle.inputData} placeholder="Telefono">
            </TextInput>
            <TextInput
                keyboardType='email-address'
                onChangeText={(text) => setCorreo(text)}
                inlineImageLeft='email'
                inlineImagePadding={50}
                style={ApartamentoStyle.inputData} placeholder="Correo">
            </TextInput>
            <TextInput
                keyboardType='numeric'
                onChangeText={(text) => setFechaInicio(text)}
                inlineImageLeft='checkin'
                inlineImagePadding={50}
                style={ApartamentoStyle.inputData} placeholder="Fecha llegada">
            </TextInput>
            <TextInput
                keyboardType='numeric'
                onChangeText={(text) => setFechaFinal(text)}
                inlineImageLeft='checkout'
                inlineImagePadding={50}
                style={ApartamentoStyle.inputData} placeholder="Fecha Salida">
            </TextInput>
            <TextInput
                keyboardType='numeric'
                onChangeText={(text) => setNumeroPersonas(text)}
                inlineImageLeft='anadiramigo'
                inlineImagePadding={50}
                style={ApartamentoStyle.inputData} placeholder="Numero de Personas">
            </TextInput>
        </View>
        <View style={ApartamentoStyle.formA}>
            <TouchableOpacity onPress={sendUser} style={ApartamentoStyle.buttonApartamento} >
                <Text style={ApartamentoStyle.textButtonApartamento}>Guardar Reservacion</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

export default ApartamentoScreen;