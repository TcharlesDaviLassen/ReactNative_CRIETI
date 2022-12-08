import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

const img = require('../assets/coffeBook.jpg')

// import { Container } from './styles';

const ViewMenuNav1 = (props) => {
    // usando o ({navigation} no lugar de props também funciona)

    return (

        <View style={styles.container}>

            <ScrollView>

                <Image
                    // style={{ width: 200, height: 200 }}
                    style={[styles.user]}
                    resizeMode='contain'
                    source={require('../assets/phoenix.png')
                        // source={require('../assets/eagle.jpg')

                    } />

                <Text style={styles.text}>Navegue pelo seu App </Text>

                <SafeAreaView>

                    <View View style={styles.menu}>

                        <View style={styles.menu}>
                            <CustomButton
                                onPress={() => props.navigation.navigate("ViewState")}
                                label='ViewState'>
                            </CustomButton>

                        </View>

                        <View style={styles.menu}>
                            <CustomButton
                                onPress={() => props.navigation.navigate("ViewEfect")}
                                label='ViewEfect'>
                            </CustomButton>
                        </View>

                        <View style={styles.menu}>
                            <CustomButton
                                onPress={() => props.navigation.navigate("ViewUsers")}
                                label='ViewUsers'>
                            </CustomButton>
                        </View>


                        <View style={styles.menu}>
                            <CustomButton
                                onPress={() => props.navigation.navigate("Picker")}
                                label='Picker'>
                            </CustomButton>
                        </View>

                        <View style={styles.menu}>
                            <CustomButton
                                onPress={() => props.navigation.navigate("ViewImage")}
                                label='ViewImage'>
                            </CustomButton>
                        </View>

                        <View style={styles.menu}>
                            <CustomButton
                                onPress={() => props.navigation.navigate("ViewTask")}
                                label='ViewTask'>
                            </CustomButton>
                        </View>

                    </View>
                </SafeAreaView>

            </ScrollView>
        </View>
    );



}


export default ViewMenuNav1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

        // backgroundColor: '#ff5100',
        // backgroundColor: '#9d5fee',
        // backgroundColor: '#fff',

        backgroundColor: 'black',
        overflow: 'scroll'

    },
    text: {
        fontSize: 30,
        color: '#fff',
        marginLeft: 'auto',
        marginRight: "auto"

    },
    // menu: {
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     flexDirection: 'row',

    // },

    user:
    {
        display: 'flex',
        width: 400,
        height: 200,
        marginRight: 'auto',
        marginLeft: '-5%',
        alignItems: 'center',
        // backgroundColor: "green"
        // tintColor: '#fff'
    }

});
