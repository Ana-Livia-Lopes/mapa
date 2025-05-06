// Ana Lívia dos Santos Lopes nº1 DS
// Isadora Gomes da Silva nº 9

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/screens/home';
import Perfil from './src/screens/perfil';
import Login from './src/screens/login';


const Drawer = createDrawerNavigator();


const App = () => (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login' >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Perfil" component={Perfil} />
          <Drawer.Screen name="Login" component={Login} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
  export default App;
