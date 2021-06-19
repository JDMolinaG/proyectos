import React, { useState, } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, Alert,ScrollView } from 'react-native';
import Colors from '../../../users/colors/colors'
import RegistroStyles from './registroStyles';

const RegistroScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [rol, setRol] = useState('')
    const [foto, setFoto] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('');

    
    const sendUser = async () => {
        try {
            const response = await fetch('https://movilesapi.herokuapp.com/usuario/nuevo', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    cedula: cedula,
                    telefono: telefono,
                    correo: correo,
                    rol: selectedLanguage,
                    foto: foto
                })


            });
            const responseJson = await response.json();
            console.log(responseJson)
            navigation.navigate('Login')
            Alert.alert(responseJson.mensaje)
        } catch (error) {
            Alert.alert(error)
        }
    }
    const checkTextInput = () => {
        if (!nombre.trim()) {
            Alert.alert('Por favor ingrese su nombre');
            return;
        }
        if (!cedula.trim()) {
            Alert.alert('Por favor ingrese su cedula solo con numeros');
            return;
        }
        if (!telefono.trim()) {
            Alert.alert('Por favor ingrese su telefono solo con numeros');
            return;
        }
        if (!correo.trim()) {
            Alert.alert('Por favor ingrese su correo y agregue @');
            return;
        }
        if (!selectedLanguage.trim()) {
            Alert.alert('Por favor ingrese un rol');
            return;
        }
        if (!foto.trim()) {
            Alert.alert('Por favor ingrese su foto');
            return;
        }

        sendUser()
    };
    return <ScrollView contentContainerStyle={{flexGrow : 1,alignItems:'center'}} scrollEnabled={true} style={RegistroStyles.container}>
    <StatusBar backgroundColor={Colors.primary}></StatusBar>

    <View style={RegistroStyles.logoContainer}>
        <Image source={require('./img/forma.png')} style={RegistroStyles.marco}></Image>
        <Image source={require('./img/surveillance-claro.png')} style={RegistroStyles.logo}></Image>
    </View>



    <View style={RegistroStyles.inputDataContainer}>
        <Text style={RegistroStyles.textData}>Crear Cuenta</Text>
        <TextInput
            autoCapitalize='words'
            onChangeText={(text) => setNombre(text)}
            inlineImageLeft='user1'
            inlineImagePadding={50}
            style={RegistroStyles.inputData} placeholder="Nombre">
        </TextInput>
        <TextInput
            keyboardType='numeric'
            onChangeText={(text) => setCedula(text)}
            inlineImageLeft='id'
            inlineImagePadding={50}
            style={RegistroStyles.inputData} placeholder="Documento">
        </TextInput>
        <TextInput
            onChangeText={(text) => setTelefono(text)}
            keyboardType='phone-pad'
            inlineImageLeft='telefono'
            inlineImagePadding={50}
            style={RegistroStyles.inputData} placeholder="Telefono">
        </TextInput>
        <TextInput
         autoCapitalize = 'none'
            keyboardType='email-address'
            onChangeText={(text) => setCorreo(text)}
            inlineImageLeft='email'
            inlineImagePadding={50}
            style={RegistroStyles.inputData} placeholder="Correo">
        </TextInput>
        <View style={RegistroStyles.inputData}>
            <Picker
                mode='dropdown'
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="--Seleccionar rol--" enabled={false} />
                <Picker.Item label="Anfitrion" value="anfitrion" />
                <Picker.Item label="invitado" value="invitado" />
            </Picker>
        </View>
        <TextInput
            onChangeText={(text) => setFoto(text)}
            inlineImageLeft='imagen'
            inlineImagePadding={50}
            style={RegistroStyles.inputData} placeholder="Foto">
        </TextInput>
        <TouchableOpacity onPress={checkTextInput} style={RegistroStyles.button}>
            <Text style={RegistroStyles.textButton}>Registrar Ahora!</Text>
        </TouchableOpacity>

    </View>

</ScrollView>


}
export default RegistroScreen;