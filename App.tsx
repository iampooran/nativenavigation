import React from 'react';
// import {SafeAreaView} from 'react-native';
// import Order from './src/components/Order/Order';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authenticated from './src/components/Authenticated/Authenticated';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'Login'}} />
        <Stack.Screen
          name="Authenticated"
          component={Authenticated}
          options={{title: 'Authenticated'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
