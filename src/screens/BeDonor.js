import { Picker } from 'native-base';
import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import { View, Text, StyleSheet, TouchableOpacity, Touchable, Alert,ScrollView  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import RNPickerSelect from "react-native-picker-select";


export default function BeDonor () {
    const [bloodGroup, setbloodGroup] = useState(bloodGroup)
    const [city, setCity] = useState(city)
    const[mobile, setMobile] = useState(mobile)
    const[gender, setGender] = useState(gender)
    // const [age]
    const [data, setData ] = useState({
        name:'',
        age:'',
        nameValidation: true,
        mobileValidation: true
    })
    // console.log("bloodgGroup", bloodgGroup);
       
    const validation = () =>{
        if(data.name.trim === " " || data.name.length<3 ) {
            setData({
                ...data,
                nameValidation: false,
            })
            return false;
            }
            // if(data.age.trim < 18){
            //     setData({
            //         ...data, 
            //     })
            //     return false
            // }
            if (mobile.trim === " " || mobile.length < 11){
                setData({
                    ...data,
                    mobileValidation: false,
                })
                return false;
            }

            else {
                return true
            }
         
    }
    const inputData = (val, field) =>{
        if (field === 'name'){
            setData({
              ...data,
              name: val,
              nameValidation: true  
            })
        }
        if (field === 'age'){
            setData({
              ...data,
              age: val,
            })
        }
        if (field === 'gender'){
            setData({
              ...data,
              gender: val,
            })
        }
        // if (field === 'city'){
        //     setData({
        //       ...data,
        //       city: val,
                
        //     })
        // }
        // if (field === 'bloodGroup'){
        //     setData({
        //       ...data,
        //       bloodGroup: val,
                
        //     })
        // }

        
    } 
    
    const BeDonorBtn = () =>{
  
        let donor = {
            bloodGroup,
            city,
            data,
            mobile,
            gender
        }    
        alert('Donor Registered Successfully')
        database().ref('/').child('Donor').push(donor)
        // props.navigation.navigate("BeDonor")
  
        // database().ref('/').child('DonorData').push(data).then(()=>{
        //     alert("Donor details entered succesfully")
        // })
        // console.log("working");
        // if(validation()){
        //     // Alert("Data Saved")
        //     console.log("ThnakYou");
        // }else{
        //     // Alert("Error")
        //     console.log("error");
        // }
    }

    return (
    <ScrollView>
      <View style={styles.main}>
           
        <View style = {styles.header}>
        </View>

        <View style={styles.container}>
            <Text style={{ fontSize:18,color:"#1a1a1a",padding:5}}>Be a Blood Donor</Text>
            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText}>Name</Text>
                <TextInput placeholder="Your Name" autoFocus={true} 
                style={styles.TextInputo} onChangeText={(e)=>inputData(e, 'name') } />
                {!data.nameValidation && <Text style={{color:'red'}}>Enter a Valid Name with more than 3 characters</Text> } 

            </View>

            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText} >Mobile</Text>
                <TextInput placeholder="Mobile Number" autoFocus={true} 
                keyboardType='phone-pad'
                onChangeText={(e)=>{setMobile(e)}}
                style={styles.TextInputo} />
                {/* {!data.mobileValidation && <Text style={{color:'red'}}>Number must be 11 digits</Text> }  */}

            </View>

            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText} >Age</Text>
                <TextInput placeholder="Must be greater Than 18" autoFocus={true} 
                keyboardType='phone-pad'
                onChangeText={(e)=>inputData(e, 'age')}
                style={styles.TextInputo} />
                {/* {!data.mobileValidation && <Text style={{color:'red'}}>Number must be 11 digits</Text> }  */}

            </View>

            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText} >Gender</Text>
                <Picker 
                        style={{  width: "100%", marginLeft:10, color:"#666666", padding:12}}
                        onValueChange={(e) => setGender(e)}
                        selectedValue={city}
                    >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                </Picker>
            </View>

            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText}>City</Text>
                <View style={styles.selectContainer}>
                <Picker
                        // city={data.city}
                        style={{  width: "100%", marginLeft:10, color:"#666666", padding:12}}
                        onValueChange={(e) => setCity(e)}
                        selectedValue={city}
                    >
                        <Picker.Item label="Raheem Yar Khan" value="Raheem Yar Khan" />
                        <Picker.Item label="Rojhan" value="Rojhan" />
                        <Picker.Item label="Rajanpur" value="Rajanpur" />
                        <Picker.Item label="Bangla Hidaayat" value="Bangla Hidayat" />
                        <Picker.Item label="Sadiqabad" value="Sadiqabad" />
                        <Picker.Item label="Jamal Din Wali" value = "Jamal Din Wali" />
                    </Picker>

                </View>
            </View>
            
            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText}> Blood Group</Text>
                <View style= {styles.selectContainer} >
                    <Picker
                            style={{ width: '100%', marginLeft:10, color: '#666666', padding: 12, }}
                            onValueChange={(itemValue) => setbloodGroup(itemValue)}
                            placeholder={{ label: "Select Blood Group", value: null }}
                            selectedValue={bloodGroup}

                            >
                    
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB+"value="AB+"/>
                        <Picker.Item label="AB-"value="AB-"/>
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="O-" value="O-" />
                    
                           
                           </Picker>

                </View>
            </View>
                <View style = {styles.titileContianer}>
                    <TouchableOpacity style={styles.BeDonorbtn} onPress = {()=>BeDonorBtn()} marginBottom={30}>
                    <Text style={styles.BeDonorTxt}>Be A Donor</Text>
                    </TouchableOpacity>
           
                </View>
                </View>
          <View>
              <Text>Your Data Will be saved</Text>
          </View>
        </View>
        </ScrollView>
    );
    }
const styles = StyleSheet.create({
    main:{
        // flex:1, 
        
        alignItems:"center",
        backgroundColor:"#F43B13",
    },
    header:{
        height:"10%",
        alignItems:"center",
        padding:3,
        justifyContent : "center",
    },
    container:{
        backgroundColor:"#fff",
        width:"90%",
        height:"90 %",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:"center",
        padding:12,
        marginBottom:20,

    },
    titileContianer:{
        width: '92%',
        padding: 3,

    },
    titleText:{
        padding:3,
        color:"#4d4d4d"
    },
    TextInputo:{
        textAlign:'left',
        padding:10,
        borderRadius:6,
        backgroundColor:"#f2f2f2",
    },

    selectContainer:{
        width:"100%", 
        padding:3,
        backgroundColor:"#f2f2f2", 
        borderRadius:6,
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
    },
    BeDonorbtn:{
        alignItems: "center",  
        width:"95%",  
        backgroundColor:"#F43B13",
        borderRadius:7,
        marginTop:"10%",
        padding:12,
    },
    BeDonorTxt:{
        color:"white",
        fontSize:18,
    },
})