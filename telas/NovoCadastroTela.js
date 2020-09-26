import React from 'react';

import {
  View,
  Text,
  StyleSheet,
}
  from 'react-native';

import ContactInput from './components/ContactInput';
 
const NovoCadastroTela = (props) => {

const [contactsAll, setContactsAll] = useState([]);
const [countContact, setCountContact] = useState(10);

  const addContact = (contacts) => {
    console.log(contacts)
    if(contacts.name === '' || contacts.phone === '') {
      alert("Contato não pode ser vazio!")
      return;
    }
    setContactsAll(contactsAll => {
      setCountContact(countContact + 2);
      return [...contactsAll, {key: countContact.toString(), value: contacts}]
    });          
  }

  return (
    <View style={styles.screenMainView}>
    <ContactInput 
      onAddContact={addContact}
    />
  </View>
  )
};

const styles = StyleSheet.create({
    screenMainView: {
      padding: 50
    }
  });
  
export default NovoCadastroTela;