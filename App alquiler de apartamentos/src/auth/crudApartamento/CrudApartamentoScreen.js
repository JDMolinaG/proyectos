import React, { useState, } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import CrudApartamentoStyle from './CrudApartamentoStyle';


const CrudApartamentoScreen = ({ navigation }) => {
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [telefono, setTelefono] = useState('')
    const [numeroCamas, setNumeroCamas] = useState('')
    const [numeroBaños, setNumeroBaños] = useState('')
    const [foto, setFoto] = useState('')

    const sendUser = async () => {
        try {
            const response = await fetch('https://movilesapi.herokuapp.com/apartamento/nuevo', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    direccion: direccion,
                    ciudad: ciudad,
                    telefono: telefono,
                    numeroCamas: numeroCamas,
                    numeroBaños: numeroBaños,
                    foto: foto
                })
            });
            const responseJson = await response.json();
            console.log(responseJson)
            navigation.navigate('User')
            Alert.alert(responseJson.mensaje)
        } catch (error) {
            Alert.alert(error)
        }
    }
    const checkTextInput = () => {
        if (!direccion.trim()) {
            Alert.alert('Por favor ingrese su direccion');
            return;
        }
        if (!ciudad.trim()) {
            Alert.alert('Por favor ingrese la ciudad');
            return;
        }
        if (!telefono.trim()) {
            Alert.alert('Por favor ingrese su telefono solo con numeros');
            return;
        }
        if (!numeroCamas.trim()) {
            Alert.alert('Por favor ingrese numero de Camas');
            return;
        }
        if (!numeroBaños.trim()) {
            Alert.alert('Por favor ingrese numero de Baños');
            return;
        }
        if (!foto.trim()) {
            Alert.alert('Por favor ingrese su foto');
            return;
        }
        sendUser()
    };
    return <ScrollView contentContainerStyle={{flexGrow : 1,alignItems:'center'}} scrollEnabled={true} style={CrudApartamentoStyle.container}>

    <View style={CrudApartamentoStyle.logoContainer}>
        <Image source={require('./img/forma.png')} style={CrudApartamentoStyle.marco}></Image>
        <Image source={require('./img/surveillance-claro.png')} style={CrudApartamentoStyle.logo}></Image>
    </View>
    <View style={CrudApartamentoStyle.inputDataContainer}>
        <Text style={CrudApartamentoStyle.textData}>Agrega Apartamento</Text>
        <TextInput
            autoCapitalize='words'
            onChangeText={(text) => setDireccion(text)}
            inlineImageLeft='city'
            inlineImagePadding={50}
            style={CrudApartamentoStyle.inputData} placeholder="Direccion">
        </TextInput>
        <TextInput
            keyboardType='numeric'
            onChangeText={(text) => setCiudad(text)}
            inlineImageLeft='hogar'
            inlineImagePadding={50}
            style={CrudApartamentoStyle.inputData} placeholder="Ciudad">
        </TextInput>
        <TextInput
            onChangeText={(text) => setTelefono(text)}
            keyboardType='phone-pad'
            inlineImageLeft='telefono'
            inlineImagePadding={50}
            style={CrudApartamentoStyle.inputData} placeholder="Telefoo">
        </TextInput>
        <TextInput
         autoCapitalize = 'none'
            keyboardType='email-address'
            onChangeText={(text) => setNumeroCamas(text)}
            inlineImageLeft='camabed'
            inlineImagePadding={50}
            style={CrudApartamentoStyle.inputData} placeholder="Numero de Camas">
        </TextInput>
        <TextInput
         autoCapitalize = 'none'
            keyboardType='email-address'
            onChangeText={(text) => setNumeroBaños(text)}
            inlineImageLeft='banera'
            inlineImagePadding={50}
            style={CrudApartamentoStyle.inputData} placeholder="Numero de Baños">
        </TextInput>

        <TextInput
            onChangeText={(text) => setFoto(text)}
            inlineImageLeft='imagen'
            inlineImagePadding={50}
            style={CrudApartamentoStyle.inputData} placeholder="Foto">
        </TextInput>
        <TouchableOpacity onPress={checkTextInput} style={CrudApartamentoStyle.button}>
            <Text style={CrudApartamentoStyle.textButton}>Registrar Ahora!</Text>
        </TouchableOpacity>

    </View>

</ScrollView>


}
export default CrudApartamentoScreen;