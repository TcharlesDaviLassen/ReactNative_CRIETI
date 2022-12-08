import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import CustomButton from '../components/CustomButton.js'

const { width } = Dimensions.get('window');
const widthDefauld = width * 0.5;


console.log('\n')
console.log("ViewEfect")

console.log("Tamanho da tela =>", width)
console.log("Tamanho da tela2 =>", widthDefauld)

// import { Container } from './styles';

const ViewEfect = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('Somente na primeira renderização do componente 1')
    }, []);

    useEffect(() => {
        console.log('Sempre que o componente foi renderizado 2 ')
    });

    useEffect(() => {
        console.log('Somente quando uma das variáveis de estado for modificada 3')
    }, [count]);


    return (

        <View style={styles.container}>

            <Text style={styles.text}>Você clicou {count} vezes</Text>

            <TouchableOpacity
                onLongPress={() => setCount(count + 1)}
                onPress={() => setCount(count + 1)}
            >
                <Text style={styles.textButton}>Clique aqui</Text>
            </TouchableOpacity>

            <CustomButton backgroundColor= "#09f156" label={'Custom Button'} onPress={() => setCount(count + 1)} />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: '900',
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
    },
    textButton: {
        fontSize: 25,
        // backgroundColor: "#7C28AD",
        backgroundColor: "#309c54",
        color: "#fff",
        borderRadius: 100,
        textAlign: "center",
        // marginRight: widthDefauld ,
        // marginLeft: widthDefauld,
        height: 50,
        paddingTop: 7,
        // width: widthDefauld
    },

});



export default ViewEfect;