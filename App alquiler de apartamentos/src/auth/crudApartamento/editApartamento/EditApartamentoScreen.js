import React, { useState, } from 'react';
import { View, Text,  Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import EditApartamentoStyle from './EditApartamentoStyle';


const EditApartamentoScreen = ({ route,navigation }) => {
    // const tel = telefono.toString()
    const {_id,ciudad,telefono,direccion,foto,numeroBaños,numeroCamas} = route.params
    const [direccion1, setDireccion] = useState(direccion)
    const [ciudad1, setCiudad] = useState(ciudad)
    const [telefono1, setTelefono] = useState(telefono)
    const [numeroCamas1, setNumeroCamas] = useState(numeroCamas)
    const [numeroBaños1, setNumeroBaños] = useState(numeroBaños)
    const [foto1, setFoto] = useState(foto)

    const editUser = async () => {
        try {
          const response = await fetch(`https://movilesapi.herokuapp.com/apartamento/editar/${_id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              direccion: direccion1,
              ciudad: ciudad1,
              telefono: telefono1,
              numeroCamas: numeroCamas1,
              numeroBaños: numeroBaños1,
              foto: foto1
            })
          });
    
          const jsonResponse = await response.json()
          console.log(jsonResponse)
          Alert.alert(jsonResponse.mensaje)
          navigation.navigate('Galeria')
        } catch (error) {
          Alert.alert('Error:', error.message)
        }
      }
    
    return <ScrollView contentContainerStyle={{flexGrow : 1,alignItems:'center'}} scrollEnabled={true} style={EditApartamentoStyle.container}>

    <View style={EditApartamentoStyle.logoContainer}>
        <Image source={require('../img/forma.png')} style={EditApartamentoStyle.marco}></Image>
        <Image source={require('../img/surveillance-claro.png')} style={EditApartamentoStyle.logo}></Image>
    </View>
    <View style={EditApartamentoStyle.inputDataContainer}>
        <Text style={EditApartamentoStyle.textData}>Agrega Apartamento</Text>
        <TextInput
            autoCapitalize='words'
            defaultValue={direccion}
            onChangeText={(text) => setDireccion(text)}
            inlineImageLeft='hoga'
            inlineImagePadding={50}
            style={EditApartamentoStyle.inputData} placeholder="Direccion">
        </TextInput>
        <TextInput
        defaultValue={ciudad}
            keyboardType='numeric'
            onChangeText={(text) => setCiudad(text)}
            inlineImageLeft='city'
            inlineImagePadding={50}
            style={EditApartamentoStyle.inputData} placeholder="Ciudad">
        </TextInput>
        <TextInput
        defaultValue={telefono}
            onChangeText={(text) => setTelefono(text)}
            keyboardType='phone-pad'
            inlineImageLeft='telefono'
            inlineImagePadding={50}
            style={EditApartamentoStyle.inputData} placeholder="Telefono">
        </TextInput>
        <TextInput
        defaultValue={numeroCamas}
         autoCapitalize = 'none'
            keyboardType='email-address'
            onChangeText={(text) => setNumeroCamas(text)}
            inlineImageLeft='camabed'
            inlineImagePadding={50}
            style={EditApartamentoStyle.inputData} placeholder="Numero de Camas">
        </TextInput>
        <TextInput
        defaultValue={numeroBaños}
         autoCapitalize = 'none'
            keyboardType='number-pad'
            onChangeText={(text) => setNumeroBaños(text)}
            inlineImageLeft='banera'
            inlineImagePadding={50}
            style={EditApartamentoStyle.inputData} placeholder="Numero de Baños">
        </TextInput>
        <TextInput
        defaultValue={foto}
            onChangeText={(text) => setFoto(text)}
            inlineImageLeft='imagen'
            inlineImagePadding={50}
            style={EditApartamentoStyle.inputData} placeholder="Foto">
        </TextInput>
        <TouchableOpacity onPress={editUser} style={EditApartamentoStyle.button}>
            <Text style={EditApartamentoStyle.textButton}>Editar Apartamento</Text>
        </TouchableOpacity>

    </View>

</ScrollView>


}
export default EditApartamentoScreen;