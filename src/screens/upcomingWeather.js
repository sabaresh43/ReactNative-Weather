import React from "react"
import { View,Image,SafeAreaView,StyleSheet,Text,FlatList ,ImageBackground} from "react-native"
import Item from "../components/ListItems"



const UpcomingWeather=({weatherData})=>{
const renderItem=({item})=>(
    <Item condition= {item.weather[0].main } dt_text={item.dt}
    min_temp={item.main.temp_min}
    max_temp={item.main.temp_max}    />
)
const{container,bgImage}= styles
    return (
        <SafeAreaView style= {container}>
            <ImageBackground source={require('../../assets/skyy.jpg')} style={bgImage}>
            <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item)=> item.dt}
            />
            </ImageBackground>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        flex:1
    },
    bgImage:{
       flex:1
    }
})




export default UpcomingWeather