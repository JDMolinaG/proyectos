import React from 'react';
import {  View, Text } from 'react-native'
import ImageOverlay from "react-native-image-overlay";
import CardApartamentoStyle from './CardApartamentoStyle';
const CardApartamento = (props) => {
    const { data } = props
    console.log(data)
    let data1
    if (data.estado == true) {
        data1 = 'Disponible'
        
    } else {
        data1 = 'No disponible'
    }
    return <View>
        <View style={CardApartamentoStyle.containerImage}>
            <ImageOverlay overlayAlpha={0.4} source={{uri:data.foto}}  style={CardApartamentoStyle.Image} />
            <Text style={CardApartamentoStyle.cardText} autoCapitalize='words'>{data.ciudad}</Text>
            <Text style={CardApartamentoStyle.cardDisponible}>{data1}</Text>
        </View>
    </View>

}
export default CardApartamento;
