import React from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function SignUp () {
    return (

<View style={styles.container}>
<View style={styles.first}>
    <Text style={{fontWeight:'bold', fontSize:32,color:'#F43B13' }}>Welcome</Text>
</View>
<View style= {styles.email} >
    <TextInput placeholder='Email' style={{height:40, borderColor:"#F43B13", borderWidth:1, fontSize:18, borderRadius:5,}}  />
</View>
<View style= {styles.pasword} >
    <TextInput placeholder='Password' style={{height:40, borderColor:"#F43B13", borderWidth:1, fontSize:18,borderRadius:5,}}  />
</View>
<View style= {styles.pasword} >
    <TextInput placeholder='Confirm Password' style={{height:40, borderColor:"#F43B13", borderWidth:1, fontSize:18,borderRadius:5,}}  />
</View>
<View>
    <TouchableOpacity
        style={styles.button}
        activeOpacity={.8}
        // onPress={onPress}
    >
        <Text style= {{fontSize:24, color:"#fff", fontWeight:'bold' }} >Sign Up</Text>
    </TouchableOpacity>
</View>
<View>
    <TouchableOpacity
        style={styles.buttonfb}
        activeOpacity={.8}
        // onPress={onPress}
    >
        <Text style= {{fontSize:24, color:"#fff", fontWeight:'bold' }} >Sign Up with Facebok</Text>
    </TouchableOpacity>
</View>



</View>


    );
  }
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent: 'center',
        
        // alignSelf:'center',
    },
    first:{
        
        alignItems:'center',
        
    },

    email:{
        width:'80%',
        alignSelf:'center',
        marginBottom:10,
        
    
    },
    pasword:{
        width:'80%',
        alignSelf:'center',
        marginBottom:10,
    },
    button: {
        alignItems: "center",
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor: "#F43B13",
        padding: 7,
        width:'80%',
        borderRadius:5,
        marginBottom:10,
        
      },
      buttonfb:{
        alignItems: "center",
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor: "#296EF8",
        padding: 7,
        width:'80%',
        borderRadius:5,
      },
});