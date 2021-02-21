import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import {Linking,Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database';


 function Signin(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const save_data=()=>{
        let user={
            email,
            password
        }
        // database().ref('Users/').set(user).then((data)=>{
        //     //success callback
        //     console.log('data ' , data)
        // }).catch((error)=>{
        //     //error callback
        //     console.log('error ' , error)
        // })
    // }
        database().ref('/').child('users').push(user)
    //     .then((data)=>{
    //         console.log('data', data);
    //     }).catch((error)=>{
    //         console.log('error', error);
    //     })
    //     console.log("user", user);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <Text style={{fontWeight:'bold', fontSize:32,color:'#F43B13' }}>Welcome</Text>
            </View>
            <View style= {styles.email} >
                <TextInput value={email} onChangeText={(text)=>setEmail(text)} placeholder='Email' style={{height:40, borderColor:"#F43B13", borderWidth:1, fontSize:18, borderRadius:5,}}  />
            </View>
            <View style= {styles.pasword} >
                <TextInput value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)} placeholder='Password' style={{height:40, borderColor:"#F43B13", borderWidth:1, fontSize:18,borderRadius:5,}}  />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={.8}
                    onPress={() => props.navigation.navigate("Home")}
                >
                    <Text style= {{fontSize:24, color:"#fff", fontWeight:'bold' }} >Sign In</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={.8}
                onPress={() => props.navigation.navigate("SignUp")}
            >
            <Text style= {{fontSize:24, color:"#fff", fontWeight:'bold' }} >Register </Text>
            </TouchableOpacity>
            </View>



        
        </View>
    )}


const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent: 'center',

        // alignItems:'center'
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
})
export default Signin;