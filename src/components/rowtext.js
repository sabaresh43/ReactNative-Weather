import React from "react";
import { View,Text } from "react-native";


const RowText=(props)=>{
const {messageStyles1,messageStyles2,message1,message2,containerStyle}= props
    return(
<View style={containerStyle}>
          <Text style={messageStyles1}>{message1}</Text>
          <Text style={messageStyles2}>{message2}</Text>
        </View>
    )
}


export default RowText