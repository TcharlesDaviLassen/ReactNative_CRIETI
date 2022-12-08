
// import React, { useEffect, useState } from 'react';
// import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import CustomButton from '../components/CustomButton';
// import LottieView from 'lottie-react-native';
// import Checkbox from 'expo-checkbox';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ViewTasks = () => {

//     const [taskList, setTaskList] = useState()
//     const [task, setTask] = useState('')

//     useEffect(() => {

//         const getTasksAsync = async () => {
//             const variavel = await AsyncStorage.getItem('@tasklist');

//             setTaskList(JSON.parse(variavel));
//         }

//         getTasksAsync()

//     }, [])


//     const updateTaskList = async () => {
//         if (task) {

//             const newTask = {
//                 id: String(new Date().getTime()),
//                 name: task,
//                 done: false
//             }

//             const orderTaskList = [...taskList, newTask]
//                 .sort((a, b) => (a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)));

//             /*
//                 if(a.name > b.name){
//                     return 1;
//                 }else if(b.name > a.name){
//                     return -1;
//                 }else{
//                     return 0;
//                 }
//             */

//             setTaskList(orderTaskList)
//             setTask('')

//             await AsyncStorage.setItem('@tasklist', JSON.stringify(orderTaskList));

//         } else {
//             Alert.alert('Ops', 'Tarefa não pode ser em branco');
//         }
//     }

//     const deleteTask = async (id) => {
//         //queremos excluir o item que contém este ID da lista
//         Alert.alert('Atenção', 'Deseja mesmo excluir a tarefa?', [
//             {
//                 text: "Sim",
//                 onPress: async () => {

//                     const newList = [...taskList.filter((item) => item.id !== id)]
//                     setTaskList(newList)

//                     await AsyncStorage.setItem('@tasklist', JSON.stringify(newList));

//                 }
//             },
//             {
//                 text: "Não",
//                 onPress: () => { }
//             }
//         ]);
//     }

//     const handleCheckTask = async (id) => {

//         const newTaskList = taskList.map(item => {
//             if (item.id == id) {
//                 //encontramos o elemento a ser alterado
//                 return { ...item, done: !item.done }
//             }
//             return item;
//         })

//         setTaskList(newTaskList);

//         await AsyncStorage.setItem('@tasklist', JSON.stringify(newTaskList));

//     }

//     return (
//         <View style={styles.container}>

//             <Text style={styles.label}>Tarefa</Text>

//             <TextInput
//                 keyboardType='email-address'
//                 placeholder='Digite a tarefa'
//                 placeholderTextColor='#ccc'
//                 value={task}
//                 onChangeText={(value) => setTask(value)}
//                 style={styles.input} />

//             <CustomButton
//                 backgroundColor="#fff"
//                 textColor="#122a57"
//                 label="Salvar"
//                 onPress={updateTaskList}
//             />
//             {
//                 taskList != null && taskList.length > 0 ?
//                     taskList.map(item => {
//                         return (
//                             <View
//                                 key={item.id}
//                                 style={styles.itemList}>
//                                 <Checkbox
//                                     value={item.done}
//                                     onValueChange={() => handleCheckTask(item.id)}
//                                     color={item.done ? '#444' : '#fff'}
//                                 />
//                                 <Text
//                                     style={[styles.itemText,
//                                     { textDecorationLine: item.done ? 'line-through' : 'none' }]}>
//                                     {item.name}
//                                 </Text>
//                                 <TouchableOpacity
//                                     onPress={() => deleteTask(item.id)}>
//                                     <Ionicons name="trash-outline" size={24} color="#fff" />
//                                 </TouchableOpacity>
//                             </View>
//                         )
//                     })
//                     :
//                     <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
//                         <LottieView
//                             autoPlay
//                             loop={true}
//                             style={{
//                                 width: 250,
//                                 height: 250,
//                             }}
//                             source={require('../asset/99987-rckt.json')}
//                         />
//                         <Text style={{ color: '#bebebe', fontSize: 20 }}>Lista vazia</Text>
//                     </View>
//             }
//         </View>
//     );
// }

// export default ViewTasks;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#122a57',
//         alignItems: 'flex-start',
//     },
//     input: {
//         height: 40,
//         width: '100%',
//         borderBottomColor: '#fff',
//         borderBottomWidth: 1,
//         color: '#fff',
//         fontSize: 16
//     },
//     label: {
//         color: '#fff',
//         fontSize: 20
//     },
//     itemList: {
//         width: '100%',
//         marginTop: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     },
//     itemText: {
//         flex: 1,
//         color: '#fff',
//         paddingLeft: 8,
//         fontSize: 24
//     }
// });

















import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import Checkbox from 'expo-checkbox';


import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';

// const list =
//     (
//         {
//             nome: 'Javascrips'
//         },
//         {
//             nome: 'Java'
//         },
//         {
//             nome: 'Python'
//         },
//         {
//             nome: 'Clipper'
//         },
//         {
//             nome: 'Cobol'
//         }
//     )




const ViewTask = () => {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');


    // useEffect(() => {
    //     // console.log("O que esta sendo digitado", task)

    //     const asyncTask =  async () => {
    //         const asyncListTask = await AsyncStorage.getItem("@ListaAtualizada");
    //         setTaskList(JSON.parse(asyncListTask)) // Pois era uma string
    //     }

    //     asyncTask();

    // }, [])

    // useEffect(() => {

    //     const getTasksAsync = async () => {
    //         const variavel = await AsyncStorage.getItem('@ListaAtualizada');

    //         setTaskList(JSON.parse(variavel));
    //     }

    //     getTasksAsync()

    // }, [])


    const updateTaskList = async () => {

        if (task) {

            const payload = {
                id: String(new Date().getTime()),
                nome: task,
                done: false
            }

            const orderTaskList = [...taskList, payload].sort((a, b) => (a.nome > b.nome ? 1 : (b.nome > a.nome ? -1 : 0)));

            // if (a.name > b.name) {
            //     return 1
            // } else if( b.name > a.name) {
            //     return 0
            // }
            // }

            setTaskList(orderTaskList)
            setTask('')

            //Grava no banco de dado do celular com o nome @ListaAtualizada
            // await AsyncStorage.setItem("@ListaAtualizada", JSON.stringify(orderTaskList))
            // await AsyncStorage.setItem('@tasklist', JSON.stringify(orderTaskList));

        } else {

            Alert.alert("Ops", "Tarefa não pode ser adicionada em branco");
        }

    }

    const deleteTask = (id) => {
        {
            Alert.alert('Atenção', 'Deseja mesmo excluir a tarefa', [
                console.log("O ID que será excluido =>", id),
                {
                    text: "Sim",
                    onPress: async () => {
                        setTaskList([...taskList.filter((item) => item.id !== id)])
                        console.log("O ID ", id, " excluido")
                        await AsyncStorage.setItem('@tasklist', JSON.stringify(newList));
                    }


                },
                {
                    text: "Não",
                    onPress: () => { }
                }
            ])
        }
    }



    // const handleCheckTask = (id) => {

    //         const newTaskList = taskList.map(item => {
    //             if (item.id == id) {
    //                 //encontramos o elemento a ser alterado
    //                 return { ...item, done: !item.done }
    //             }
    //             return item;
    //         })

    //         setTaskList(newTaskList);

    //     }



    const handlerChecked = (id) => {
        console.log("Lista antiga", taskList);

        const newTaskList = taskList.map((dado) => {
            if (dado.id == id) {
                //quando chamado assim  =>...dado é uma = rest operation
                return { ...dado, done: !dado.done }
            }

            return dado;
        })
        
        console.log("Lista nova", newTaskList);
        setTaskList(newTaskList);


    }



    return (
        <View style={styles.container}>

            <TextInput
                keyboardType='email-address'
                placeholder='Digite a tarefa'
                placeholderTextColor='#fff'
                color="#fff"
                borderBottomColor='#fff'

                style={styles.input}

                value={task}
                onChangeText={(value) => setTask(value)}

            />
            <CustomButton
                // backgroundColor='#fff'
                label="Salvar"
                onPress={updateTaskList}
                style={styles.button}
            >
            </CustomButton>
            {
                taskList != null && taskList.length > 0 ?

                    taskList.map((dados) => {
                        console.log("ITEM", dados)
                        return (
                            <View
                                key={dados.id}
                                style={styles.itemList}
                            >
                                <Checkbox
                                    style={styles.checkbox}
                                    value={dados.done}
                                    onValueChange={() => handlerChecked(dados.id)}
                                    color={dados.done ? "green" : "#fff"}
                                // color={isChecked ? '#4630EB' : undefined}
                                />
                                <Text style={[styles.text, { textDecorationLine: dados.done ? 'line-through' : 'none' }]}>{dados.nome}</Text>

                                <TouchableOpacity

                                    onPress={() => deleteTask(dados.id)}
                                >
                                    <FontAwesome5 name="trash-alt" size={24} color="#09f156" />
                                </TouchableOpacity>

                            </View>

                            // Botão nativo do react
                            // <TouchableOpacity
                            //     style={{ margin: 3 }}
                            //     key={dados.id}
                            //     onLongPress={() => deleteTask(dados.id)}
                            // >
                            //     <Text style={{ color: '#ff5100', fontSize: 24 }}>{dados.nome}</Text>
                            // </TouchableOpacity>
                        );
                    })
                    :
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Text style={{ color: '#fff', fontSize: 20 }}>Lista vazia</Text> */}
                        <LottieView
                            autoPlay
                            style={{
                                width: 200,
                                height: 200,
                                top: 9,
                                backgroundColor: '#',

                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('../animations/99987-rckt.json')}
                        />
                    </View>
            }

        </View>
    );
}

export default ViewTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    itemList: {
        width: '100%',
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        marginTop: 10,
        height: 60,
        width: "90%",
        borderBottomColor: "#fff",
        borderBottomWidth: 2,
    },
    checkbox: {
        backgroundColor: "#fff",
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    button: {
        // marginBottom: '30%',
    },
    text: {
        // color: '#ff5100',
        flex: 1,
        color: '#fff',
        paddingLeft: 8,
        fontSize: 24
    },
})









