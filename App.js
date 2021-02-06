/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native'

// import {
// //   Header,
// //   LearnMoreLinks,
//   Colors,
// //   DebugInstructions,
// //   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import NavigationsApp from './src/config/Navigation'



const App= () => {
  return (
    // <>
    //   <View style={styles.container}>
    //     <Text style={{fontSize:32,}}>
    //       This is my my blood bank
    //     </Text>
    //     {/* <AppNavigation/> */}
    //   </View>
    // </>
    <NavigationsApp/>
    )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    },
})
export default App;
