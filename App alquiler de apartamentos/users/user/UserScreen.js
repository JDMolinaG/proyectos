import React, { useState, useEffect } from 'react'
import { View, Text, Image,  TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'
import UserStyles from './UserStyle'

const UserScreen = ({ route, navigation }) => {
  const { nombre, telefono, correo, _id, foto, rol, cedula } = route.params.user;
  const tel = telefono.toString()
  const [nombre1, setNombre] = useState(nombre)
  const [cedula1, setCedula] = useState(cedula)
  const [telefono1, setTelefono] = useState(tel)
  const [correo1, setCorreo] = useState(correo)
  const [foto1, setFoto] = useState(foto)

  const editUser = async () => {
    try {
      const response = await fetch(`https://movilesapi.herokuapp.com/usuario/editar/${_id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre1,
          cedula: cedula1,
          telefono: telefono1,
          correo: correo1,
          foto: foto1
        })
      });

      const jsonResponse = await response.json()
      console.log(jsonResponse)
      Alert.alert(jsonResponse.mensaje)
    } catch (error) {
      Alert.alert('Error:', error.message)
    }
  }
  const deleteUser = async () => {
    const response = await fetch(`https://movilesapi.herokuapp.com/usuario/eliminar/${_id}`, {
      method: 'DELETE',
    })

    const responseJson = await response.json()
    Alert.alert(responseJson.mensaje)
    console.log(responseJson)

    navigation.navigate('ListUsers')
  }
  const desactivarBoton = () => {
    if (rol == 'anfitrion') {
      return false
    } else {
      return true
    }
  }

  return <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} scrollEnabled={true} style={UserStyles.container}>
    <View style={UserStyles.containerHeader}>
      <View style={UserStyles.infoContainer}>
        <View style={UserStyles.containerImage}>
          <Image source={{ uri: foto }} style={UserStyles.image} />
        </View>
      </View>
      <View style={UserStyles.UserInfo}>
        <Text style={UserStyles.nombre}>{nombre1}</Text>
        <Text style={UserStyles.user}>{correo1}</Text>
        <Text style={UserStyles.user}>{telefono1}</Text>
        <Text style={UserStyles.user}>{rol}</Text>
      </View>
    </View>
    <View style={UserStyles.form}>
      <TouchableOpacity onPress={editUser} style={UserStyles.button} >
        <Text style={UserStyles.textButton}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteUser} style={UserStyles.button} >
        <Text style={UserStyles.textButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>
    <View style={UserStyles.inputDataContainer}>
      <TextInput
        defaultValue={nombre}
        autoCapitalize='words'
        onChangeText={(text) => setNombre(text)}
        inlineImageLeft='user1'
        inlineImagePadding={50}
        style={UserStyles.inputData} placeholder="Nombre" >
      </TextInput>
      <TextInput
        defaultValue={cedula}
        keyboardType='numeric'
        onChangeText={(text) => setCedula(text)}
        inlineImageLeft='id'
        inlineImagePadding={50}
        style={UserStyles.inputData} placeholder="Documento">
      </TextInput>
      <TextInput
        defaultValue={tel}
        onChangeText={(text) => setTelefono(text)}
        keyboardType='phone-pad'
        inlineImageLeft='telefono'
        inlineImagePadding={50}
        style={UserStyles.inputData} placeholder="Telefono">
      </TextInput>
      <TextInput
        defaultValue={correo}
        keyboardType='email-address'
        onChangeText={(text) => setCorreo(text)}
        inlineImageLeft='email'
        inlineImagePadding={50}
        style={UserStyles.inputData} placeholder="Correo">
      </TextInput>
      <TextInput
        defaultValue={foto}
        onChangeText={(text) => setFoto(text)}
        inlineImageLeft='imagen'
        inlineImagePadding={50}
        style={UserStyles.inputData} placeholder="Foto">
      </TextInput>
    </View>
    <View style={UserStyles.formA}>
      <TouchableOpacity onPress={()=>navigation.navigate('CrudApartamento',{idUsu:_id})} disabled={desactivarBoton()} style={desactivarBoton() ? UserStyles.buttonApartamentoDisabled : UserStyles.buttonApartamento}>
        <Text style={desactivarBoton() ? UserStyles.textButtonApartamentoDisabled : UserStyles.textButtonApartamento}>Agregar Apartamento</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Galeria',{idUsu:_id,rol:rol})} style={UserStyles.buttonApartamento} >
        <Text style={UserStyles.textButtonApartamento}>Buscar Apartamento</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Reservaciones',{idUsu:_id})} style={UserStyles.buttonApartamento} >
        <Text style={UserStyles.textButtonApartamento}>Reservaciones</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
}
export default UserScreen