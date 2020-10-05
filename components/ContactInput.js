import React, { useState } from 'react';
import {
 View,
 TextInput,
 Button,
 StyleSheet,
 TouchableOpacity,
 Text
} from 'react-native';

const ContactInput = (props) => {

 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [contacts, setContacts] = useState([{name:'', phone:''}]);

 const catchName = (name) => {
  setName(name);
  buildContact(name, phone);
 }
 const catchPhone = (phone) => {
  setPhone(phone);
  buildContact(name,phone);
 }
 const buildContact = (name, phone) => {
  setContacts({name: name,phone: phone})      
 }
 return (
 <View>
  <View>
    <Text style={styles.agendaTitle}>AGENDA</Text>
  </View>
  <View style={styles.agendaEnterView}>
   <TextInput
    placeholder="Nome"
    style={styles.agendaInputText}
    onChangeText={catchName}
    value={name}
   />
   <TextInput
    placeholder="Telefone"
    style={styles.agendaInputText}
    onChangeText={catchPhone}
    value={phone}
   />
   <TouchableOpacity style={styles.customBtnBG} 
    title="ADD" 
    onPress={() => props.onAddContact(contacts)}>
    <Text style={styles.customBtnText}>ADD</Text>
   </TouchableOpacity>
  </View> 
 </View>
 );
};

const styles = StyleSheet.create({
 agendaTitle: {
  textAlign: 'center',
  color: 'purple',
  fontWeight: 'bold',
  fontSize: 35,
  marginBottom: 8  
},
agendaEnterView: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 8
},
agendaInputText: {
  height: 30,
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  padding: 2
},
customBtnText: {
  fontSize: 15,
  fontWeight: '900',
  color: "purple",
  },
  customBtnBG: {
  backgroundColor: "black",
  paddingHorizontal: 10,
  paddingVertical: 7,
  borderRadius: 8,
  height: 35
  }
  
});

export default ContactInput;