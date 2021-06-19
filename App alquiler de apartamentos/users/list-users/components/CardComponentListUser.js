import React from 'react'
import { View, Text, Image } from 'react-native'
import CardComponentStyles from './CardComponentStyle'
const CardComponentListUser = (props) => {
    const { data } = props
    return <View style={CardComponentStyles.container}>
        <View style={CardComponentStyles.containerImage}>
            <Image source={{ uri: data.foto }} 
            style={{flex:1,width:undefined,height:undefined}}/>
        </View>
        <View style={CardComponentStyles.containerUser}>
            <Text>{data.id}</Text>
            <Text>{data.nombre}</Text>
            <Text>{data.apellido}</Text>
            <Text>{data.telefono}</Text>
            <Text>{data.correo}</Text>
            <Text>{data.rol}</Text>
        </View>
    </View>
}
export default CardComponentListUser