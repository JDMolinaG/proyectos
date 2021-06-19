
import React from 'react';
import { View, Text, Image } from 'react-native'
import CardComponentStyles from './CardComponentStyle';

const CardComponent = (props) => {
  const { data } = props
  return <View style={CardComponentStyles.container}>
    <View style={CardComponentStyles.containerCard}>
      <View style={CardComponentStyles.containerImage}>
        <Image source={{ uri: data.foto }} style={CardComponentStyles.image} />
      </View>
      <View style={CardComponentStyles.containerText}>
        <View style={CardComponentStyles.textContainer}>
          <Text style={CardComponentStyles.cardText}>{data.nombre}</Text>
          <Text style={CardComponentStyles.cardCorreo}>{data.correo}</Text>
        </View>
        <Image source={require('./img/proximo.png')}></Image>
      </View>
    </View>
  </View>

}
export default CardComponent;
