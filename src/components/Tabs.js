import React from 'react'
import CurrentWeather from '../screens/currentWeather'
import City from '../screens/city'
import UpcomingWeather from '../screens/upcomingWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 11
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'pink',
          fontSize: 25,
          fontWeight: 'bold'
        },

      }}
    >
      <Tab.Screen name={'CurrentWeather'}  options={{
        tabBarIcon: ({ focused }) => <Feather name="droplet" size={24} color={focused ? 'pink' : 'grey'} />
      }} >
        {()=> <CurrentWeather weatherData={weather.list[0]}></CurrentWeather>  
        }
      </Tab.Screen>
      <Tab.Screen name={'UpcomingWeather'}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="weather-cloudy-clock" size={24} color={focused ? 'pink' : 'grey'} />
        }}>{()=> <UpcomingWeather weatherData ={weather.list}>
          
          </UpcomingWeather>}</Tab.Screen>
      <Tab.Screen name={'City'} options={{
        tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="city" size={24} color={focused ? 'pink' : 'grey'} />
      }} >

{()=> <City weatherData={weather.city}></City>}


      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs