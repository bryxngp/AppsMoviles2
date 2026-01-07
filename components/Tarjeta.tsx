import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

export default function Tarjeta(props: any) {
    console.log(props.datos.name.image);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, textAlign: "center" }}>{props.datos.name}</Text>

            </View>
            <View style={styles.fila}>
                <Image
                    style={styles.img}
                    source={{ uri: props.datos.image }} />
                <Text style={styles.description}>{props.datos.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: "#B284BE",
        height: 160,
        margin: 4,
        paddingHorizontal: 20,
        borderWidth:3,
        borderColor:"#702963",
        borderRadius:20
    },

    img: {
        height: 110,
        width: 100,
        resizeMode: "contain",
        
    },

    description: {
        textAlign: "justify",
        width: "70%",
        color: "#3D0C02",
        fontSize: 14
    }
})