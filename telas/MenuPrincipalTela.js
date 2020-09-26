import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
}
  from 'react-native';
 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoHeader from '../componentes/BotaoHeader';
import ContactItem from './components/ContactItem';

const MenuPrincipalTela = (props) => {

    const contatos = useSelector ()
    return (
        <View style={styles.screenMainView}>
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
    )
};

MenuPrincipalTela.navigationOptions = dadosNavegacao => {
  return {
    headerTitle: "Agenda principal",
    headerRight: () =>{
      return (
        <HeaderButtons
          HeaderButtonComponent={BotaoHeader}>
          <Item 
            title="Adicionar contato"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              dadosNavegacao.navigation.navigate ("NovoCadastro");
            }}
          />
        </HeaderButtons>
      )
    }  
  }
};

const styles = StyleSheet.create({
    screenMainView: {
        padding: 50
      }
});

export default MenuPrincipalTela;