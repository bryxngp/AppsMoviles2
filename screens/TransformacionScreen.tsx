import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { Switch } from 'react-native';

//rnfs para inciiar cualquier tsx

//CREAR UNA APP QUE TRANSFORME DE C A F

export default function TransformacionScreen() {
    
    const [ver, setver] = useState(true);
    const [celsius, setcelsius] = useState(0);
    const [fahrenheith, setfahrenheith] = useState(0);

    function calcular() {
        let calculo = (celsius * 1.8) + 32
        

        Alert.alert("Respuesta", "Los grados Fahrenheith son :\n" + (calculo) + "°")
    }

    function calcular2(){
        let calculo2 = (fahrenheith - 32) / 1.8

        Alert.alert("Respuesta", "Los grados celsius son :\n" + (calculo2) + "°")
    }

    return (
        <View style={styles.container} >
            <Text>Coversor de grados</Text>

            <Switch value={ver} onChange={()=> setver(!ver)}/>
                    {ver ?
                <View>
                    <TextInput placeholder='Ingresa los grados celsius°:' style={styles.input}
                        onChangeText={(texto) => setcelsius(+texto)}  //+ transforma a numero el texto
                    />

                    <Button color={"red"} title='Calcular'
                        onPress={() => calcular()}
                    />
                </View>
                :
                
                <View>
                    
                    <TextInput placeholder='Ingresa los grados Fahrenheith:' style={styles.input}
                        onChangeText={(texto) => setfahrenheith(+texto)}  //+ transforma a numero el texto
                    />

                    <Button color={"green"} title='Calcular'
                        onPress={() => calcular2()}
                    />
                </View>
            }


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        backgroundColor: "#ffffffff",
        margin: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        width: "80%",
        height: 60
    },
    container: {
        backgroundColor: "#1392ceff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
})