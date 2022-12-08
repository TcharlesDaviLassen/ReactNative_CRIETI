import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const widthDefauld = width * 0.9;

const CustomButton = ({ label, onPress, backgroundColor }) => {

    return (
        <TouchableOpacity
            shadowColor='red'
            onLongPress={onPress}
            onPress={onPress}
        >
            <Text style={[styles.textButton, styles.shadows]}>{label}</Text>

        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     marginTop: 100
    // },
    // text: {
    //     color: 'black',
    //     fontSize: 24,
    //     fontWeight: '900',
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     marginBottom: 10,
    // },
    textButton: {
        fontSize: 24,
        // backgroundColor: "#7C28AD",
        // backgroundColor: "#ff5100",
        // backgroundColor: "#309c54",
        fontFamily: 'Inter-Bold',
        backgroundColor: "#09f156",
        // backgroundColor: "#ff6600",
        // backgroundColor: "red",
        color: "black",
        borderRadius: 100,
        textAlign: "center",
        height: 50,
        width: widthDefauld,
        paddingTop: 7,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    shadows: {
        shadowColor: "#fff",
        shadowOffset: {
            width: 2,
            height: 9,
        },
        shadowOpacity: 0.4,
        shadowRadius: 13,
        elevation: 18,
    }
});

