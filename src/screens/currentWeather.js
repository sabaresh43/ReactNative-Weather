import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import RowText from "../components/rowtext";
import { weatherType } from "../utility/weatherType";

const CurrentWeather = ({weatherData}) => {
  console.log("sss",weatherData)
  const {tempStyles,feels,highLow,highLowWrapper,bodyWrapper,description,message,wrapper,container}=styles
 const {main:{temp,feels_like,temp_max,temp_min},weather}=weatherData
 const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[wrapper,{backgroundColor:weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={
        container
      }>
        <FontAwesome5 name={weatherType[weatherCondition].icon} size={50} color="grey" />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText message1={`High:${temp_max}° `} message2={`Low:${temp_min}°`} containerStyle={highLowWrapper} messageStyles1={highLow} messageStyles2={highLow}></RowText>
      </View>
      <RowText message1={weather[0]?.description} message2={weatherType[weatherCondition]?.message} containerStyle={bodyWrapper} messageStyles1={description} messageStyles2={message}></RowText>
    </SafeAreaView>

  )

} 

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },

  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 40,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:43,
  },
  message:{
    fontSize:25
  }
})

export default CurrentWeather