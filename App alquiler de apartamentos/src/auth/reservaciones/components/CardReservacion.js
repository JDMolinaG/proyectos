
import React from 'react';
import {  View, Text, Image } from 'react-native'
import CardReservacionStyle from './CardReservacionStyle';

const CardReservacion = (props) => {
  const { data } = props

  
  return <View style={CardReservacionStyle.container}>
    <View  style={CardReservacionStyle.containerCard}>
      <View style={CardReservacionStyle.containerText}>
        <View style={CardReservacionStyle.textContainer}>
        <Text style={CardReservacionStyle.cardText}>Ciudad:{data.ciudad}</Text>
        <Text style={CardReservacionStyle.cardCorreo}>Fecha Llegada:{data.fechaInicio}</Text>
        <Text style={CardReservacionStyle.cardCorreo}>Fecha Salida:{data.fechaInicio}</Text>
        </View>
        <Image  source={require('../img/eliminar.png')} style={{width:30,height:30}}></Image>

     
      </View>
    </View>
  </View>

}
export default CardReservacion;
