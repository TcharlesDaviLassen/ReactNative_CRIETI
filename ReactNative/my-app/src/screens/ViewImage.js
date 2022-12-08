import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native';

import LogoCrieTi from '../assets/logo-crie-ti.svg'

const { width } = Dimensions.get('window');
const tamanho = width * 1
const marg = width * .2



const ViewImage = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>

                <Text style={styles.text}>Tela de Imagem</Text>

                <Image
                    // style={styles.img}
                    style={{
                        width: tamanho,
                        height: 200,
                        // marginBottom: -100,
                        // backgroundColor: "black",
                        tintColor: 'green'
                    }}
                    resizeMode='contain'
                    source={{
                        uri: 'https://univates.br/files-bravo/crie-ti/image/logo-crie-ti.png'
                    }}
                />

                <Image
                    // style={{ width: 200, height: 200 }}
                    style={styles.user}
                    resizeMode='contain'
                    source={require('../assets/coffeBook.jpg')}
                />

                <LogoCrieTi style={styles.img2} />

            </SafeAreaView>
        </View>
    );
}

export default ViewImage;



const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#fff",
    },
    text:
    {
        textAlign: 'center',
        color: 'purple',
        marginBottom: 10,
    },
    // img:
    // {
    //     width: tamanho,
    //     height: 200,
    //     marginBottom: -60,
    //     backgroundColor: "black",
    // },
    img2:
    {
        width: 100,
        height: 100,
        backgroundColor: "black",
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20
    },
    user:
    {
        display: 'flex',
        width: 400,
        height: 200,
        marginRight: 'auto',
        marginLeft: '-5%',
        alignItems: 'center'
        // marginLeft: marg,
        // marginTop: -30,

    }
});
