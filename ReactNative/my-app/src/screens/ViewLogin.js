import React, { useState, useEffect, useContext } from 'react';
import {
    TextInput,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ActivityIndicator,
    View,
    Text
} from 'react-native';

import base64 from 'base-64';
import * as SecureStore from 'expo-secure-store'; // Criptografa os dados que são salvos no armazenamento interno do celular.
import Checkbox from 'expo-checkbox';

import CustomButton from '../components/CustomButton';

//Contexto criado para utilização em varias telas
import AppContext from '../context/AppContext'

// import ViewNav1 from "./ViewMenuNav1";

//props => propriedades
const ViewLogin = (props) => {

    // console.log("PROPS =>", props.navigation)

    const [loadding, setLoadding] = useState(false);

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";

    // const { username, password, saveUser } = useContext(AppContext);

    // const [usuario, setUsuario] = useState({
    //     username: "",
    //     password: "",
    //     saveUser: false
    // });


    const usuario = ({
        username: '',
        password: '',

    });


    const { } = useContext(AppContext)

    useEffect(() => {

        async function getSecureStore() {
            const _username = await SecureStore.getItemAsync(fieldUser);
            const _password = await SecureStore.getItemAsync(fieldPassword);

            if (_username && _password) {

                /*setUsuario({
                    username: _username,
                    password: _password,
                    saveUser: true
                });*/

                login(_username, _password);
            }
        }

        getSecureStore();

    }, []) //seja executado somente na primeira renderizacao do componente


    async function login(user, pass) {

        setLoadding(true);

        async function testeLogin() {

            setTimeout(async () => {
                let res = await fetch("http://177.44.248.60:3000/auth", {
                    method: 'POST',
                    //Deixar espaco no "Basic "
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json', // => Tipos de dados que estão sendo enviados
                        'Authorization': "Basic " + base64.encode(user + ":" + pass)

                    },
                });

                // props.navigation.navigate("ViewMenuNav1")
                // setLoadding(true);
                // const dados = await res.json();
                // console.log("Fech => ", dados )

                const json = await res.json();
                console.log("RES =>", json)
                // console.log("RES =>", props.navigation.navigate("ViewMenuNav1"))


                setLoadding(false);
                if (json.id) {

                    if (usuario.saveUser) {
                        await SecureStore.setItemAsync(fieldUser, usuario.username);
                        await SecureStore.setItemAsync(fieldPassword, usuario.password);
                    }

                    props.navigation.navigate("ViewMenuNav1")
                } else {
                    //Apaga os dados caso o usuario não quer mais se manter logado
                    await SecureStore.deleteItemAsync(fieldUser, usuario.username);
                    await SecureStore.deleteItemAsync(fieldPassword, usuario.password);
                    
                    Alert.alert("Ops!!!", "Usuario ou senha incoretos")
                }

            }, 500);
        }

        testeLogin();

    }



    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS === "android" ? "padding" : "height"}
            style={styles.container}>


            {loadding == true ? <ActivityIndicator size="large" />
                :
                <>

                    <Image
                        style={styles.user}
                        resizeMode='contain'
                        source={require('../assets/ImageProps.png')}
                    />


                    <TextInput
                        style={styles.nome}
                        keyboardType='email-address'
                        autoCapitalize="none"

                        value={usuario.username}
                        onChangeText={(value) => setUsuario({ ...usuario, username: value })}

                        placeholder="Nome"
                        placeholderTextColor="#fff"
                    />

                    <TextInput

                        secureTextEntry={false}//Senha oculta
                        value={usuario.password}
                        onChangeText={(value) => setUsuario({ ...usuario, password: value })}

                        style={styles.senha}
                        placeholder="Senha"
                        placeholderTextColor="#fff"
                    />


                    <View style={styles.checkbox}>

                        <Checkbox
                            style={styles.box}
                            value={usuario.saveUser}
                            onValueChange={() => setUsuario({ ...usuario, saveUser: !usuario.saveUser })}
                        // color={dados.done ? "green" : "#fff"}
                        // color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={{ color: "#fff", fontSize: 20, marginLeft: 10 }}>Manter conectado</Text>
                    </View>

                    <CustomButton
                        label="ENTRAR"
                        onPress={() => login(usuario.username, usuario.password)}
                    />



                    {/* { loadding &&<ActivityIndicator size='large'/>} */}
                </>
            }

        </KeyboardAvoidingView>
    );
}


export default ViewLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "black",
        alignItems: 'center',
    },
    user: {
        width: 100,
        height: 100,
        backgroundColor: "black",
        borderRadius: 100,
        marginBottom: 10,
    },
    nome: {
        borderWidth: 1,
        borderColor: "#09f156",
        borderRadius: 10,
        width: '80%',
        height: 50,
        backgroundColor: "#424242",
        paddingLeft: 12,
        color: "#fff",
        marginBottom: 3
    },
    senha: {
        borderWidth: 1,
        borderColor: "#09f156",
        borderRadius: 10,
        width: '80%',
        height: 50,
        backgroundColor: "#424242",
        paddingLeft: 12,
        color: "#fff",
        marginBottom: -10
    },
    checkbox: {
        marginStart: "-25%",
        marginTop: 30,
        flexDirection: 'row',
        marginBottom: -10,
    },
    box: {
        marginTop: 3,
        flexDirection: 'row',


    },
})