import React from 'react';
import {
 View,
 Button,
 TouchableOpacity,
 StyleSheet,
 Text
} from 'react-native';

const ContactItem = (props) => {
 return (
  <TouchableOpacity onLongPress={() => props.onDelete(props.propsKey)}>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.nameInList}> 
        <Text style={{color: 'purple'}}>{props.name}</Text>
      </View>
      <View style={styles.phoneInList}>
        <Text style={{color: 'purple'}}>{props.phone}</Text>
      </View>
    </View>
  </TouchableOpacity>
 );

};

const styles = StyleSheet.create({
 nameInList: {
  padding: 12,
  backgroundColor: 'black',
  borderColor: 'white',
  borderWidth: 1,
  marginBottom: 8,
  borderRadius: 8,
  alignItems: 'center',
  width: 250,
  height: 40
},
phoneInList: {
  padding: 12,
  backgroundColor: 'black',
  borderColor: 'white',
  borderWidth: 1,
  marginBottom: 8,
  borderRadius: 8,
  alignItems: 'center',
  width: 150,
  height: 40
  
}
});

export default ContactItem;