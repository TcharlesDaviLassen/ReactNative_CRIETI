import { StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ViewState from './src/screens/ViewState.js'
import ViewEfect from './src/screens/ViewEfect.js'
import ViewImage from './src/screens/ViewImage.js'
import Dropdown from './src/screens/Picker.js'
import ViewMenuNav1 from './src/screens/ViewMenuNav1.js'
import ViewLogin from './src/screens/ViewLogin.js'
import Picker from './src/screens/Picker.js'
import ViewTask from './src/screens/ViewTask.js'
import ViewUsers from './src/screens/ViewUsers.js'
import ViewUserSettings from './src/screens/ViewUserSettings.js'

//Context
import { AppProvider, IAppContext, AppContext } from './src/context/AppContext'

import { useFonts } from 'expo-font'; //1
import {
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
  RobotoSlab_900Black
} from '@expo-google-fonts/roboto-slab'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./src/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/fonts/Inter-Bold.ttf'),
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    RobotoSlab_900Black
  })// 2

  try {
    if (fontsLoaded) {
      return (
        // Provedor de informações de context App
        <AppProvider>
          <>
            <NavigationContainer>
              <Stack.Navigator
              // initialRouteName="ViewLogin"
              >
                <Stack.Screen name="Login" component={ViewLogin} />
                <Stack.Screen name="ViewUsers" component={ViewUsers} />
                <Stack.Screen name="ViewMenuNav1" component={ViewMenuNav1} />
                <Stack.Screen name="ViewState" component={ViewState} />
                <Stack.Screen name="ViewEfect" component={ViewEfect} />
                <Stack.Screen name="Picker" component={Picker} />
                <Stack.Screen name="ViewImage" component={ViewImage} />
                <Stack.Screen name="ViewTask" component={ViewTask} />
                <Stack.Screen name="ViewUserSettings" component={ViewUserSettings} />
              </Stack.Navigator>
            </NavigationContainer>

            <StatusBar
              translucent={false}
              backgroundColor="#fff"
            //  style="auto" 
             />
          </>
        </AppProvider>

      );
      // { console.log("Caiu aqui t") }
      {/* <Stack.Navigator screenOptions={{headerShown: false}}> */ }
      {/* <ViewState /> */ }
      {/* <ViewEfect /> */ }
      {/* <ViewImage /> */ }
      {/* <Dropdown /> */ }
    }
  } catch (error) {
    console.log("Erro", error)
    return (
      <>
        {console.log("Caiu aqui")}
        {<ActivityIndicator size='large' />}
      </>
    );
  }
}



