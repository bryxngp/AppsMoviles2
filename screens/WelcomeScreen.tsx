import { StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import ListaLocalScreen from './ListaLocalScreen';
import { Image } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {

    function navegar(){

        navigation.navigate("External")
        Vibration.vibrate(1001)
    }

    return (
        <ImageBackground source={{ uri: "https://i.postimg.cc/VNxM3p5L/pexels-jibarofoto-2294881.jpg" }}
            style={styles.container}>

            <Text style={{ color: "white", fontSize: 30 }}>"WELCOME"</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Local")}
                style={styles.btn}>
                <View style={{flexDirection: "row-reverse"}}>
                    <Text style={{fontSize:25}}>LOCAL</Text>
                    <Image source={require("../assets/images/laptop.png")} style={styles.img} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navegar()}
                style={styles.btn}>
                <View style={{flexDirection: "row-reverse"}}>
                    <Text style={{fontSize:25}}>EXTERNA</Text>
                    <Image source={require("../assets/images/avion.png")} style={styles.img} />
                </View>
            </TouchableOpacity>

        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
        
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    btn: {

        backgroundColor: "#098383ff",
        height: 70,
        width: "50%",
        borderWidth:2,
        borderRadius: 30,
        borderColor:"#0048BA",
        alignItems:"center",
        paddingTop:12,
        marginBottom:10
    }


})
