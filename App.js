import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import ContactInput from './components/ContactInput';
import ContactItem from './components/ContactItem';

export default function App() {

  const [contactsAll, setContactsAll] = useState([]);
  const [countContact, setCountContact] = useState(10);

    const addContact = (contacts) => {
      console.log(contacts)
      if(contacts.name === '' || contacts.phone === '') {
        alert("Vai add contato fantasma? PORRA!")
        return;
      }
      setContactsAll(contactsAll => {
        setCountContact(countContact + 2);
        return [...contactsAll, {key: countContact.toString(), value: contacts}]
      });          
    }
    
    const removeContact = (key) => {
      setContactsAll(contactsAll => {
        return contactsAll.filter((contact) => {
          return contact.key !== key;
        })
      })
    }

    return (
    <View style={styles.screenMainView}>
      <ContactInput 
        onAddContact={addContact}
      />
        {/** Mostra os contatos */}
        <FlatList
        data={contactsAll}
        renderItem={contact => (
          <ContactItem
            propsKey={contact.item.key}
            name={contact.item.value.name}
            phone={contact.item.value.phone}
            onDelete={removeContact}
          />
        )}
        />
    </View>
    );
  }



const styles = StyleSheet.create({
  screenMainView: {
    padding: 50
  }
});
