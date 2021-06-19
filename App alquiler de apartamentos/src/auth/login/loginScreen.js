import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import LoginStyles from './loginStyles';
import Colors from '../../../users/colors/colors'
const LoginScreen = ({ navigation }) => {

    const [correo, setCorreo] = useState('')
    const [cedula, setCedula] = useState('')

    const getUser = async () => {
        const response = await fetch(`https://movilesapi.herokuapp.com/usuario/login/${correo}&${cedula}`);
        const responseJson = await response.json()
        console.log(responseJson.mensaje)
        if (responseJson.mensaje == '') {
            Alert.alert('Usuario no agregado, registrese')
        } else {
            navigation.navigate('ListUsers', {
                correo: correo,
                foto: responseJson.mensaje[0].foto,
                rol: responseJson.mensaje[0].rol,
            })
        }
    }
    const checkTextInput = () => {

        if (!cedula.trim()) {
            Alert.alert('Por favor ingrese su cedula solo con numeros');
            return;
        }
        if (!correo.trim()) {
            Alert.alert('Por favor ingrese su correo y agregue @');
            return;
        }
        getUser()
    };

    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor={Colors.primary}></StatusBar>
        <View style={LoginStyles.logoContainer}>
            <Image source={require('./img/forma.png')} style={LoginStyles.marco}></Image>
            <Image source={require('./img/surveillance-oscuro.png')} style={LoginStyles.logo}></Image>
        </View>
        <View style={LoginStyles.inputDataContainer}>
            <Text style={LoginStyles.textData}>Ingresa a tu cuenta</Text>
            <TextInput
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={(text) => setCorreo(text)}
                inlineImageLeft='emailoscuro'
                inlineImagePadding={30}
                style={LoginStyles.inputData} placeholder="Correo">
            </TextInput>
            <TextInput
                keyboardType='numeric'
                onChangeText={(text) => setCedula(text)}
                inlineImageLeft='idoscuro'
                inlineImagePadding={50}
                style={LoginStyles.inputData} placeholder="Documento">
            </TextInput>
            <TouchableOpacity onPress={checkTextInput} style={LoginStyles.button}>
                <Text style={LoginStyles.textButton}>Inicia Sesion</Text>
            </TouchableOpacity>

        </View>


    </View>
}
export default LoginScreen;
