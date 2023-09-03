import react from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.errorMessages}>
                Sorry something went wrong
            </Text>
            <Feather name="frown" size={80} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    errorMessages:{
        fontSize:30,
        color:'white',
        marginHorizontal:10,
        textAlign:'center'
    }
})

export default ErrorItem