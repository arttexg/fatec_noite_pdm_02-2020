import React from 'react';
import {
 View,
 StyleSheet,
 Text,
 Image
} from 'react-native';
import Card from './Card'

const SunRiseSetItem = (props) => {
 return (
  <Card stylee={styles.card}>
   <View style={styles.screen}>
    {/* <Image
     style={styles.image}
     source={{uri: "https://openweathermap.org/img/wn/" + props.
     result.weather + ".png"}}
    /> */}
    <View>
     <View style={styles.firstLine}>
      <Text>Feels Like: {props.result.feels_like + "\u00B0"}</Text>
     </View>
     <View style={styles.secondLine}>
      <Text style={styles.value}>Sunrise: {new Date(props.result.sunrise * 1000).toLocaleTimeString()}</Text>
      <Text style={styles.value}>Sunset: {new Date(props.result.sunset * 1000).toLocaleTimeString()}</Text>
     </View>
    </View>

   </View>
  </Card>
 );
}

const styles = StyleSheet.create({
 firstLine: {
  justifyContent: 'center',
  flexDirection: 'row'
 },
 secondLine: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 1,
  borderTopColor: '#DDD'
 },
 card: {
  marginBottom: 8
 },
 screen:{
  flexDirection: 'row'
 },
 image: {
  width:50,
  height: 50
 },
 value: {
  marginHorizontal: 2
 } 
});

export default SunRiseSetItem;