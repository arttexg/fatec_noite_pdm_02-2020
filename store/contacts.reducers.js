import { ADD_CONTACT, DEL_CONTACT } from './contacts-actions';
import Contact from '../model/Contact';

const starState = {
 contacts: []
};

export default (state = starState, actions) => {
 switch (actions.type) {
  case ADD_CONTACT:
   const contact = new Contact (
    new Date().toString(),
    actions.contactData.name,
    actions.contactData.phone)
    return {
     contacts: state.contacts.concat(contact)
    }
  case DEL_CONTACT:
   return {
    contacts: state.contacts.filter((contact) => {
     return contact.key !== actions.contactData.key;
    })
   }
  default:
   return state;
 }
 return state;
}

