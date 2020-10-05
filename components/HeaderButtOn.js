import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

const HeaderButtOn = (props) => {
 return(
   <HeaderButton 
   {...props}
   IconComponent={Ionicons}
   iconSize={23}
   color={Platform.OS === 'android' ? 'black' : Colors.primary}
  />
 )
}

export default HeaderButtOn;