import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

export default function Card(props: any) {
    console.log(props.info);

    function mensaje(nombre: string, edad: string) {
        {
            Alert.alert(nombre, edad)
        }

    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => mensaje(props.info.first, props.age)}

        >
            <View>
                <Text style={{ fontSize: 20, textAlign: "center" }}>{props.info.name.first}</Text>
            </View>
            <View style={styles.fila}>
                <Image
                    style={styles.img}
                    source={{ uri: props.info.images.main }} />

                <View style={styles.age}>
                    <Text >EDAD:{props.info.age}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B284BE",
        height: 160,
        margin: 4,
        paddingHorizontal: 20,
        borderWidth: 3,
        borderColor: "#702963",
        borderRadius: 20
    },
    fila: {
        flexDirection: 'row',
    },
    img: {
        height: 110,
        width: 100,
        resizeMode: "contain",

    },

    age: {
        textAlign: "justify",
        width: "70%",
        color: "#3D0C02",
        fontSize: 14,
        marginLeft:50

    }
})