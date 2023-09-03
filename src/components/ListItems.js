import React from "react"
import { View,Text,StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import { weatherType } from "../utility/weatherType";
import moment from 'moment'


const Item =(props)=>{
    const{dt_text,min_temp,max_temp,condition}= props
    const {item,date,temp,dateTextWrapper} = styles
    return(
  <View style={item}> 
    <Feather name={weatherType[condition]?.icon} size={40} color={'black'}/>
    <View style= {dateTextWrapper}>
    <Text style={date}>{moment.unix(dt_text).format('MMM Do YY')}</Text>
    <Text style={date}>{moment.unix(dt_text).format('hh:mm:ss a')}</Text>
    </View>
    <Text style={temp}>{`${Math.round(min_temp)}°/${Math.round(max_temp)}°`}</Text>  
  </View>
    )
  }


  const styles= StyleSheet.create({
    item:{
        padding:20,
        marginHorizontal:16,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderRadius:8,
        backgroundColor:'#FFD2E7'
    },
    temp:{
        color:'black',
        fontSize:20
    },
    date:{
        color:'black',
        fontSize:15
    },
    dateTextWrapper:{
      flexDirection:'column'
    }
  })

  export default Item