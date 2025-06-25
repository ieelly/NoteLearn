import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Pagina1 from './src/screens/Pagina1';
import Pagina2 from './src/screens/Pagina2';
import NotasClaves from './src/screens/NotasClaves';
import ToqueMelodia from './src/screens/ToqueMelodia';
import MemoriaMusical from './src/screens/MemoriaMusical';
import AcerteNota from './src/screens/AcerteNota';
import SobreApp from './src/screens/SobreApp';
import TelaLogin from './src/screens/TelaLogin';
import TeoriaMusical from './src/screens/TeoriaMusical';



const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name='NotasClaves' component={NotasClaves}/>
        <Stack.Screen name='ToqueMelodia' component={ToqueMelodia}/>
        <Stack.Screen name='MemoriaMusical' component={MemoriaMusical}/>
        <Stack.Screen name='AcerteNota' component={AcerteNota}/>
        <Stack.Screen name='SobreApp' component={SobreApp}/>
        <Stack.Screen name='TelaLogin' component={TelaLogin}/>
        <Stack.Screen name='TeoriaMusical' component={TeoriaMusical} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

