import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import Cores from '../constantes/Cores';
import NovoCadastroTela from '../telas/NovoCadastroTela'
import { createStackNavigator } from 'react-navigation-stack';


const LugaresNavigator = createStackNavigator
(
    {
        MenuPrincipal: MenuPrincipalTela,
        NovoCadastro: NovoCadastroTela
    },
    {
        defaultNavigationOptions: {
        headerStyle: 
            {
            backGroundColor: Platform.OS === 'android' ? Cores.primary : ''
            },
        },
    }
);

export default createAppContainer(LugaresNavigator);