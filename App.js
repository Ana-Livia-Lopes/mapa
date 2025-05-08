// Ana Lívia dos Santos Lopes nº1 DS
// Isadora Gomes da Silva nº 9

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';


import HomeScreen from './src/screens/home';
import Perfil from './src/screens/perfil';
import Login from './src/screens/login';
import RouteScreen from './src/screens/route';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Login" 
        component={Login} 
        options={{ tabBarStyle: { display: 'none' }, tabBarButton: () => null }} 
      />
      <Tab.Screen name="Home" component={HomeScreen} options={{
    tabBarIcon: ({ color, size }) => (
      <FontAwesome5 name="map-marker-alt" size={size} color={color} />
    ),
  }}
  />
      <Tab.Screen name="Perfil" component={Perfil} options={{
    tabBarIcon: ({ color, size }) => (
      <FontAwesome5 name="user" size={size} color={color} />
    ),
  }}
       />
      <Tab.Screen name="Rotas" component={RouteScreen} options={{
    tabBarIcon: ({ color, size }) => (
      <FontAwesome5 name="route" size={size} color={color} />
    ),
  }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
