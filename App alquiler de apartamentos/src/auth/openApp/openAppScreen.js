import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../../users/colors/colors';
import OpenAppStyles from './openAppStyles'

const OpenAppScreen = ({ navigation }) => {
    return <LinearGradient colors={[Colors.primary, Colors.secondary]} style={OpenAppStyles.container}>
        <StatusBar backgroundColor={Colors.primary}></StatusBar>
        <View style={OpenAppStyles.logoContainer}>
            <Image source={require('./img/surveillance-logo.png')} style={OpenAppStyles.logo}></Image>
        </View>
        <View style={OpenAppStyles.form}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={OpenAppStyles.button} >
                <Text style={OpenAppStyles.textButton}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <TouchableHighlight style={OpenAppStyles.button} onPress={() => navigation.navigate('Registro')}>
                <Text style={OpenAppStyles.textButton}>Registro</Text>
            </TouchableHighlight>
        </View>
    </LinearGradient>
}

export default OpenAppScreen