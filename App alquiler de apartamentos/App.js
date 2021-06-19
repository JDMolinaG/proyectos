import React from 'react';
import { Button } from 'react-native';
import OpenAppScreen from './src/auth/openApp/openAppScreen'
import LoginScreen from './src/auth/login/loginScreen';
import RegistroScreen from './src/auth/registro/registroScreen';
import GaleryScreen from './src/auth/galery/galeryScreen'
import ApartamentoScreen from './src/auth/apartamento/ApartamentoScreen'
import ListUSersScreen from './users/list-users/ListUsersScreen'
import UserScreen from './users/user/UserScreen'
import ReservacionesScreen from './src/auth/reservaciones/ReservacionesScreen'
import CrudApartamento from './src/auth/crudApartamento/CrudApartamentoScreen'
import EditApartamentoScreen from './src/auth/crudApartamento/editApartamento/EditApartamentoScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{title:'', headerShown: false }} name="Open" component={OpenAppScreen} />
        <Stack.Screen options={{ title:'',headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{title:'',headerTransparent:true,}} name="Registro" component={RegistroScreen} />
        <Stack.Screen options={{title:'', headerShown: false }} name="ListUsers" component={ListUSersScreen} />
        <Stack.Screen options={{title:'',headerTransparent:true,}} name="User" component={UserScreen}  />
        <Stack.Screen options={{title:'',headerTransparent:true,headerTintColor: "white"}} name="Galeria" component={GaleryScreen} />
        <Stack.Screen options={{title:'',headerTransparent:true,}} name="Apartamento" component={ApartamentoScreen}  />
        <Stack.Screen options={{title:'',headerTransparent:true,}} name="Reservaciones" component={ReservacionesScreen}  />
        <Stack.Screen options={{title:'',headerTransparent:true,}} name="CrudApartamento" component={CrudApartamento}  />
        <Stack.Screen options={{title:'',headerTransparent:true,}} name="EditApartamento" component={EditApartamentoScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
