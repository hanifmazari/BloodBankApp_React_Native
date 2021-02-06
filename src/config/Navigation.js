import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Signin from '../screens/Signin'
import SignUp from '../screens/SignUp'
import BeDonor from '../screens/BeDonor'
import RequestBlood from '../screens/RequestBlood'



const Stack = createStackNavigator();

function NavigationsApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signin" component={Signin} />

      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="BeDonor" component={BeDonor} />
      <Stack.Screen name ="RequestBlood"component = {RequestBlood}/>


      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationsApp;