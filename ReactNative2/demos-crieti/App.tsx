import { StatusBar } from "expo-status-bar";

import ViewEffect from "./src/screens/ViewEffect";
import ViewImages from "./src/screens/ViewImages";
import ViewPicker from "./src/screens/ViewPicker";
import ViewState from "./src/screens/ViewState";
import ViewNav1 from "./src/screens/ViewNav1";
import ViewTasks from "./src/screens/ViewTasks";
import ViewLogin from "./src/screens/ViewLogin";
import ViewUsers from "./src/screens/ViewUsers";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from "react-native";

import {
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
  RobotoSlab_900Black
} from '@expo-google-fonts/roboto-slab'
import { useFonts } from 'expo-font'; //1

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    RobotoSlab_900Black
  }); // 2

  if (fontsLoaded) { //3
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ViewLogin"
            screenOptions={{ headerShown: true }} >
            <Stack.Screen name="ViewNav1" component={ViewNav1} />
            <Stack.Screen name="ViewUsers" component={ViewUsers} />
            <Stack.Screen name="ViewLogin" component={ViewLogin} />
            <Stack.Screen name="ViewState" component={ViewState} />
            <Stack.Screen name="ViewEffect" component={ViewEffect} />
            <Stack.Screen name="ViewImages" component={ViewImages} />
            <Stack.Screen name="ViewPicker" component={ViewPicker} />
            <Stack.Screen name="ViewTasks" component={ViewTasks} />
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar
          translucent={false}
          backgroundColor="#fff"
          style="auto" />
      </>
    );
  } else {
    return (
      <>
        <ActivityIndicator size="large" color="#000" />

        <StatusBar
          translucent={false}
          backgroundColor="#fff"
          style="auto" />
      </>
    )
  }
}