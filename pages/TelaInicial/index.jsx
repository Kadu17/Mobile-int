import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, Image,
    ActivityIndicator, SafeAreaView, ScrollView, ImageBackground
} from 'react-native'
import styles from './styles'

const bgH = require("../../assets/tela.png")
const logo = require("../../assets/bitcoin1.png")

export default function Telaincial({ navigation }) {
    return (

        <ImageBackground source={bgH} resizeMode="cover" style={styles.bg}>
            <View style={styles.contBtn}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Login')}
                    style={styles.btn}
                >
                    <Text style={styles.texto}>Comece já</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>


    )
}
