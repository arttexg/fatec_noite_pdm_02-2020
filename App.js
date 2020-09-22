import React, { useState } from 'react';
import { 
  FlatList, 
  Keyboard, 
  StyleSheet, 
  TextInput, 
  View, 
  Button } from 'react-native';
import SunRiseSetItem from './components/SunRiseSetItem';

export default function App() {

  const endpoint1 = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const endpoint2 = "https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&lat=";
  const apiKey = "613cf60bfaf5b9986b724c3764508fb1";


  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  var latitude;
  var longitude;
 
  const catchCity = (city) => {
   setCity(city);
  }
 
  const onClickSearch = () => {
    setResults([]);
    let target = endpoint1 + city + "&appid=" + apiKey;
    fetch(target)
    .then((data) => data.json())
    .then((data) => {
      latitude = data.city.coord.lat;
      longitude = data.city.coord.lon;
      setLat(latitude);
      setLon(longitude)
      secondPartSearch(latitude,longitude);
      })
     }
  const secondPartSearch = (latitude,longitude) => {
    let target = endpoint2 + latitude + "&lon=" + longitude + "&appid=" + apiKey;
    fetch(target)
    .then((data) => data.json())
    .then((data) => {
      setResults(data.current)
      Keyboard.dismiss;
    })
  }



  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a City"
          onChangeText={catchCity}
          value={city}
        />
        <Button
          title="Search"
          onPress={onClickSearch}
        />   
      </View>
      <FlatList
        data={[results]}
        renderItem={
          result => (
            <SunRiseSetItem result={result.item}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  },
  inputView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
   },
   textInput:{
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
   }
});
