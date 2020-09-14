import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contador: 10,
      contato: {
        nome: '',
        telefone: ''
      },
      contatos: []
    }
  }
  
  render() {

    const capName = (nome) => {
      this.setState({contato:{nome:nome, telefone:''}});

    }

    const capPhone = (telefone) => {
      this.setState({contato:{nome:this.state.contato.nome,telefone:telefone}});
    }

    const addContact = () => {
      if(this.state.contato.telefone === '' || this.state.contato.nome === '') {
        alert("Digita alguma coisa né parsa!")
        return;
      }
      this.setState({contador: this.state.contador + 2})
      console.log(this.state.contatos);
      return this.setState({contatos:[...this.state.contatos,{key: this.state.contador.toString(),value: this.state.contato}]});     
    }

    return (
    <View style={styles.screenMainView}>
      <View>
        <Text style={styles.agendaTitle}>AGENDA</Text>
      </View>
      <View style={styles.agendaEnterView}>
        {/** Inclue os contatos */}
        <TextInput placeholder="Nome" style={styles.agendaInputText} onChangeText={capName} value={this.state.contato.nome}/>
        <TextInput placeholder="Telefone" style={styles.agendaInputText} onChangeText={capPhone} value={this.state.contato.telefone}/> 
         <Button
          title="Incluir"
          onPress={addContact}
        />
      </View>
      <View>
        {/** Mostra os contatos */}
        <FlatList
        data={this.state.contatos}
        renderItem={contato => (
          <View style={{flexDirection:'row'}}>
            <Text style={styles.nomeInList}>{contato.item.value.nome}</Text>
            <Text style={styles.telefoneInList}>{contato.item.value.telefone}</Text>
            <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => this.removeContact(contato.item.key)}
            >
              <Text style={styles.customBtnText}>X</Text>
            </TouchableOpacity>
            </View>
        )}
        />
      </View>
    </View>
    );
  }

  removeContact (pos) {
    const index = this.state.contatos.findIndex(contato => contato.key == pos);
    this.state.contatos.splice(index,1);
    return this.setState({contatos:[...this.state.contatos]})
  }

}

const styles = StyleSheet.create({
  screenMainView: {
    padding: 50
  },
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
  nomeInList: {
    padding: 12,
    backgroundColor: 'rgb(33, 150, 243)',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
    height: 40,
    color: 'white'
  },
  telefoneInList: {
    padding: 12,
    backgroundColor: 'rgb(33, 150, 243)',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: 150,
    height: 40,
    color: 'white'
  },
  customBtnText: {
    fontSize: 20,
    fontWeight: '400',
    color: "#fff",
  },
  customBtnBG: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center'

  }

});
