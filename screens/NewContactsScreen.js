import React, {useState} from 'react';
import {
 Text,
 View,
 StyleSheet
} from 'react-native';
import ContactInput from '../components/ContactInput';
import { useDispatch } from 'react-redux';
import * as contactsActions from '../store/contacts-actions';

const NewContactsScreen = (props) => {

  const dispatch = useDispatch();

  const addContact = (contacts) => {
    if(contacts.name === undefined || contacts.phone === undefined 
    || contacts.name === ' ' || contacts.phone === ' ' 
    || contacts.name === '' || contacts.phone === ''  ) {
      alert("Por favor, entre com dados validos")
      return;
    }
    dispatch(contactsActions.addContact(contacts.name, contacts.phone))
    props.navigation.goBack()
  }
  

 return(
  <View>
   <ContactInput 
    onAddContact={addContact}
   />
  </View>
 );
}

const styles = StyleSheet.create({

});

export default NewContactsScreen;