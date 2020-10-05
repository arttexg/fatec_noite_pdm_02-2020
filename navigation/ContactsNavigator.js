import React from 'react';
import {
 Platform
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import ContactsScreen from '../screens/ContactsScreen';
import NewContactsScreen from '../screens/NewContactsScreen';
import Colors from '../constants/Colors';


const ContactsNavigator = createStackNavigator({
 Contacts: ContactsScreen,
 NewContacts: NewContactsScreen
},
{
 defaultNavigationOptions: {
  headerStyle: {
   backgroundColor: Platform.OS === 'android'? Colors.primary : 'black'
  },
  headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary
 }
});

export default createAppContainer(ContactsNavigator);