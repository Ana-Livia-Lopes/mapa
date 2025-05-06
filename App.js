// Ana Lívia dos Santos Lopes nº1 DS
// Isadora Gomes da Silva nº 9

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import Perfil from './src/screens/perfil';
import Login from './src/screens/login';
import RouteScreen from './src/screens/route';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Perfil' screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Login" 
        component={Login} 
        options={{ tabBarStyle: { display: 'none' }, tabBarButton: () => null }} 
      />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Rotas" component={RouteScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
