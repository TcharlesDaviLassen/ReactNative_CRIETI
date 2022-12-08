import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { Avatar, Card, Title, Paragraph, DefaultTheme, IconButton, Provider as PaperProvider } from 'react-native-paper';
// import { Provider as StoreProvider } from 'react-redux';
// import { theme } from '../styles/Theme';


const tema = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ff5100',
        secondary: 'green',


    },
    fonts: {
        fontFamily: "RobotoSlab_700Bold",
    },
};

const cor = tema.colors;
const fonteTexto = tema.fonts;

const LeftContent = props => <Avatar.Icon {...props} style={{ backgroundColor: cor.primary }} icon="rocket" />

const ViewUserSetting = ({}) => {

    // console.log("PROPS =>", props)


    const [users, setUsers] = useState([]);


    /*
        Busca os usuários da API (através do listUsers)
        na criação do componente ViewUsers
    */

    useEffect(() => {
        listUsers();
    }, [])

    async function listUsers() {


        const response = await fetch('http://177.44.248.60:3000/users', {
            method: 'GET',
        });

        const json = await response.json();

        setLoading(false);
        if (json) {
            setUsers(json);
        } else {
            Alert.alert('Ops, deu ruim 😥', json.message);
        }

    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                {
                    users.map((user) => {
                        return (
                            <View>
                                <Card
                                    key={user.id}
                                    style={styles.content}>
                                    <Card.Title
                                        name={user.name}
                                        email={user.email}
                                        age={user.age}
                                        sex={user.sex}
                                        left={LeftContent}
                                    />
                                </Card>
                            </View>
                        )
                    })
                }
            </SafeAreaView >
        </View >
    );
}


export default ViewUserSetting;



const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: '6%',
        // backgroundColor: 'black'
    },
    contentButton: {
        alignItems: "center",
        marginTop: '6%',
    },
    button: {
        color: '#fff',
        backgroundColor: '#ff6600',
        // backgroundColor: '#ff5100',
        // fontSize: fonteTexto.fontFamily
        fontSize: 400
    }
})