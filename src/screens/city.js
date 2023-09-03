import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/iconText'
import moment from 'moment'

const City = ({weatherData}) => {
  console.log("bbbb",weatherData)
  const { container, bgImage, cityName, riseSetWrapper, riseSetText, rowLayout, countryName, populationText, cityText, populationWraper } = styles
  const{name,country,population,sunrise,sunset}= weatherData
 
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={bgImage}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWraper, rowLayout]}>
          <IconText iconName={'user'} bodyText={`population: ${population}`} bodyTextStyles={populationText} />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={'sunrise'} bodyText={moment.unix(sunrise).format('hh:mm:ss a')} bodyTextStyles={riseSetText} />
          <IconText iconName={'sunrise'} bodyText={moment.unix(sunset).format('hh:mm:ss a')} bodyTextStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1
  },
  cityName: {
    fontSize: 40,
    fontWeight: '500',
    marginTop: 10
  },
  countryName: {
    fontWeight: 'bold',
    marginTop: 0,
    fontSize: 25
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 0
  },
  populationWraper: {
    color: 'white',
    marginTop: 30,
    justifyContent: 'center'
  },
  populationText: {
    color: 'white',
    fontSize: 25,
    marginStart: 8
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
