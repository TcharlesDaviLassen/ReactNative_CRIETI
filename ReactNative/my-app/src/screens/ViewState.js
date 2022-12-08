import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


const ViewState = (props) => {
    
    console.log("PROPS", props)

    const [count, setCount] = useState(0);

    const [user, setUser] = useState({
        name: "Tcharles",
        age: 300,
        city: "Lajeado"
    });


    function increment() {
        setCount(count + 1);

        // setCount((prevState) => prevState + 1);
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>

                {/* <ImageBackground
                    source={require('../../assets/coffeBook.jpg')}
                    style={{
                        width: 400,
                        height: 300,
                        marginBottom: 10
                    }}
                /> */}

                <Text style={styles.text}>Você clicou {count} vezes</Text>

                <TouchableOpacity onPress={() => increment()}>
                    <Text style={styles.textButton}>Clique aqui</Text>
                </TouchableOpacity>

                <StatusBar
                    translucent={false}
                    backgroundColor="#fff"
                    style="auto"
                />
            </SafeAreaView>


            <View style={styles.container2}>
                <SafeAreaView>

                    <View style={{ justifyContent: 'space-evenly' }}>
                        <View>

                            <Text style={styles.text2}>Name: {user.name}</Text>
                            <Text style={styles.text2}>Age: {user.age}</Text>
                            <Text style={styles.text2}>City: {user.city}</Text>

                            <TouchableOpacity
                                onPress={() => setUser({ ...user, age: user.age + 1 })}>
                                <Text style={styles.textButton2}>Make birthday</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </SafeAreaView>
            </View>

        </View>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // marginTop: 60,

    },
    container2: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 80,
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: '900',
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
    },
    text2: {
        color: 'black',
        fontSize: 24,
        fontWeight: '900',

        marginTop: 10,
        marginLeft: 100,
    },
    textButton: {
        fontSize: 25,
        backgroundColor: "#7C28AD",
        color: "#fff",
        borderRadius: 100,
        textAlign: "center",
        marginRight: 100,
        marginLeft: 100,
        height: 50,
        paddingTop: 7
    },
    textButton2: {
        fontSize: 25,
        backgroundColor: "#4828B0",
        color: "#fff",
        borderRadius: 100,
        textAlign: "center",
        marginRight: 50,
        marginLeft: 50,
        height: 50,
        paddingTop: 7
    }


});

export default ViewState;