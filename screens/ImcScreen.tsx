import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { ImageBackground } from 'react-native'

export default function ImcScreen() {

    const [peso, setpeso] = useState(0);
    const [altura, setaltura] = useState(0);

    function calcular(){
        
        let IMC = (peso) / (altura * altura)

        if(IMC <= 18){
            Alert.alert("RIESGO" ,"Peso insuficiente")
        } else if (IMC >= 25){
            Alert.alert("PELIGRO" ,"Posee sobrepeso")
            
        } else{
            Alert.alert("FELICIDADES" ,"Peso Adecuado")

        }
    }




    return (

        <View style={styles.container} >
            <Text>IMC</Text>
            <TextInput placeholder='Ingresa peso en kg:' style={styles.input}
                onChangeText={(texto) => setpeso(+texto)}  //+ transforma a numero el texto
            />

            <TextInput placeholder='Ingresa la altura en metros:' style={styles.input} 
            onChangeText={(texto) => setaltura(+texto)}
            />

            <Button color={"red"} title='Calcular' 
            onPress={()=> calcular()}
            />

        </View>

    )


}

const styles = StyleSheet.create({
    input: {
        fontSize: 22,
        backgroundColor: "#666",
        margin: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        width: "80%",
        height: 60
    },
    container: {
        backgroundColor: "#13aa57ff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },

})