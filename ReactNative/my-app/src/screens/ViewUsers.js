import { useContext, useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
const base64 = require('base-64');
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';

// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import ViewUserSetting from "./ViewUserSettings"
// import CustomCard from './ViewCard';

import { theme } from '../styles/Theme';
import { AppContext } from '../context/AppContext';

export default ViewUsers = (props) => {

    // console.log("PROPS DO USER =>", props) // declarar uma Props é como se fosse acessar as configurações e funcionalidades do react 

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const {username, password} = useContext(AppContext)
    console.log("CREDENTIALS =>", username, password)

    /*
        Busca os usuários da API (através do listUsers)
        na criação do componente ViewUsers
    */

    useEffect(() => {
        listUsers();
    }, [])

    async function listUsers() {

        setLoading(true);

        const _username = await SecureStore.getItemAsync(fieldUser);
        const _password = await SecureStore.getItemAsync(fieldPassword);

        const response = await fetch('http://177.44.248.60:3000/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' +
                    base64.encode(_username + ":" + _password)
            }
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

        <View>
            <Text style={theme.title}>Lista de Usuários</Text>

            {/* Erro no SkeletonPlaceholder  */}
            {/* <SkeletonPlaceholder borderRadius={4}>
                <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
                <SkeletonPlaceholder.Item width={120} height={20} />
                <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
            </SkeletonPlaceholder> */}

            {/*No lugar do ScrollView veio o FlatList mais performatico para renderização de lista*/}
            {/* */}
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    const icone_sexo = item.sex == 'M' ? 'man' : 'woman';


                    // <View
                    //     style={{ marginBottom: "12%" }}
                    //     key={item.id}>
                    //     <CustomCard
                    //         name={item.name}
                    //         email={item.email}
                    //         sex={item.sex}
                    //         age={item.age}
                    //         onPress={() => props.navigation.navigate("ViewUserSettings")}
                    //     />
                    // </View>


                    return <TouchableOpacity
                        activeOpacity={0.6}
                        style={[styles.card, theme.shadows]} key={item.id}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name={icone_sexo} size={24}
                                color={item.sex == 'M' ? "#7986CB" : "#F06292"}
                                style={{ marginRight: 16 }} />
                            <View>
                                <Text style={styles.titleCard}>{item.name}</Text>
                                <Text style={styles.subtitleCard}>{item.email}</Text>
                            </View>
                        </View>

                        <AntDesign name="right" size={24} color="black" />
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}





const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 16,
        padding: 8,
        height: 55,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleCard: {
        color: '#000',
        fontSize: 16,
        fontFamily: "RobotoSlab_700Bold",
    },
    subtitleCard: {
        color: '#555',
        fontSize: 13,
        fontFamily: "RobotoSlab_300Light",
    }
});