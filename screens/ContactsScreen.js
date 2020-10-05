import React from 'react';
import {
 Text,
 View,
 StyleSheet, 
 Platform,
 FlatList
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButtOn from '../components/HeaderButtOn'
import ContactItem from '../components/ContactItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as contactsActions from '../store/contacts-actions';


const ContactsScreen = (props) => {

 const contacts = useSelector(state => state.contacts.contacts);
 const dispatch = useDispatch();

 const removeContact = (key) => {
  dispatch(contactsActions.delContact(key));
}
 return(
  <FlatList
   data={contacts}
   renderItem={contact => (
     <ContactItem
      propsKey={contact.item.key}
      name={contact.item.name}
      phone={contact.item.phone}
      onDelete={removeContact}
    />
   )
  }
  />
 );
}

ContactsScreen.navigationOptions = dataNavigation => {
 return {
  headerTitle: 'Contacts List',
  headerRight: () => {
   return(
    <HeaderButtons
     HeaderButtonComponent={HeaderButtOn}>
      <Item
       title='ADD'
       iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
       onPress={() => {
        dataNavigation.navigation.navigate("NewContacts");
       }}
      />
    </HeaderButtons>
   )
  }
 }
}

const styles = StyleSheet.create({

});

export default ContactsScreen;