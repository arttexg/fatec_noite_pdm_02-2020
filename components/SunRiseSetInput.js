// import React, { useState } from 'react';
// import {
//  View,
//  StyleSheet,
//  TextInput,
//  Button,
//  Text, Keyboard
// } from 'react-native';

// const SunRiseSetInput = (props) => {

//  const endpoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
//  const apiKey = "613cf60bfaf5b9986b724c3764508fb1";

//  const [city, setCity] = useState('');
//  const [coord, setCoord] = useState({lat: '', lon: ''});

//  const catchCity = (city) => {
//   setCity(city);
//  }

//  const catchInfo = (city) => {
//   const target = endpoint + city + "&appid=" + apiKey;
//   fetch(target)
//   .then((data) => data.json())
//   .then((data) => setCoord({lat: data.city.coord.lat, lon: data.city.coord.lon})
//    );
//   }

//  return (
//   <View style={styles.inputView}>
//    <TextInput
//     style={styles.textInput}
//     placeholder="Type a City"
//     onChangeText={catchCity}
//     value={city}
//    />
//    <Button
//     title="Search"
//     onPress={() => {
//      catchInfo(city)
//      props.onClickSearch(coord)
//     }}
//    />   
//   </View>
//  );
// }

// const styles = StyleSheet.create({
//  inputView:{
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginBottom: 8
//  },
//  textInput:{
//   padding: 12,
//   borderBottomColor: '#BB96F3',
//   borderBottomWidth: 2,
//   textAlign: 'left',
//   flexGrow: 0.9
//  }

// });

// export default SunRiseSetInput;