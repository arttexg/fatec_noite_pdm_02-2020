export const ADD_CONTACT = 'ADD_CONTACT';
export const DEL_CONTACT = 'DEL_CONTACT';

export const addContact = (name, phone) => {
 return {
  type: ADD_CONTACT, contactData: {name, phone}
 }
}

export const delContact = (key) => {
 return {
  type: DEL_CONTACT, contactData: {key}
 }
}