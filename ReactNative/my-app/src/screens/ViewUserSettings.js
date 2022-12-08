import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
const base64 = require('base-64');

import ViewUserSetting from './ViewUserSetting';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import ViewUserSetting from './ViewUserSetting';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const ViewUserSettings = () => {


  const fieldUser = "myapp_usuario";
  const fieldPassword = "myapp_senha";
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);


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

    setUsers(json)

  }


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>

        {/* 
        <View
          style={{ marginBottom: "12%" }}
          key={id}>
          <Text style={theme.label}>{item.name}</Text>

          <ViewUserSetting
            name={name}
            email={email}
            sex={sex}
            age={age}
          />
        </View> */}



        {/* <Text>
          {users.name}
        </Text>  */}



        {/* {
          
          users.map((users) => {
            if (users.id) {
              console.log(users)
              return (
                <Text
                key={users.id}>
                  {users.name}
                </Text>
              )
            }
          })
          
        } */}


        {
          users.map((item) => {
            console.log('ITEM_USERSETTING=>', item)

            return (
              <View
                style={styles.content}
                key={item.id}
              >
                <Text
                >
                  O ID é {item.id},
                  nome: {item.name}
                </Text>

                {/* <ViewUserSetting
                  title={name}
                  subtitle={email}
                  age={age}
                  sex={sex}
                /> */}

                {/* <ViewUserSetting
                  name={item.name}
                  email={item.email}
                  age={item.age}
                  sex={item.sex}
                /> */}
              </View>
            )
          })
        }

      </SafeAreaView>
    </View>
  );
}

export default ViewUserSettings;

const styles = StyleSheet.create({
  // content: {
  //   flex: 1,
  //   marginTop: '6%',
  // }
})