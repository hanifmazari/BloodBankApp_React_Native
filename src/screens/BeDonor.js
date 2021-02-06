import { Picker } from 'native-base';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable, Alert,  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function BeDonor () {
    const [bloodtype, setBloodType ] = useState('')
    const [data, setData ] = useState({
        name:'',
        mobile:'',
        city:'',
        nameValidation: true,
        mobileValidation: true
    })
    console.log("data", data);
    console.log("blodd type", bloodtype);
    
    const validation = () =>{
        if(data.name.trim === " " || data.name.length<3 ) {
            setData({
                ...data,
                nameValidation: false,
            })
            return false;
            }
            if (data.mobile.trim === " " || data.mobile.length < 11){
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
        if (field === 'mobile'){
            setData({
              ...data,
              mobile: val,
              mobileValidation: true  
            })
        }
    } 
    const BeDonorBtn = () =>{
        // console.log("working");
        if(validation()){
            // Alert("Data Saved")
            console.log("ThnakYou");
        }else{
            // Alert("Error")
            console.log("error");
        }
    }

    return (
      <View style={styles.main}>
          <View style = {styles.header}>
          </View>

          <View style={styles.container}>
            <Text style={{ fontSize:18,color:"#1a1a1a",padding:5}}>Be a Blood Donor</Text>
            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText}>Name</Text>
                <TextInput placeholder="Your Name" autoFocus={true} 
                style={styles.TextInputo} onChange={(e)=>inputData(e, 'name') } />
                {!data.nameValidation && <Text style={{color:'red'}}>Enter a Valid Name with more than 3 characters</Text> } 

            </View>

            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText} >Mobile</Text>
                <TextInput placeholder="Mobile Number" autoFocus={true} 
                keyboardType='phone-pad'
                onChange={(e)=>inputData(e, 'mobile') }
                style={styles.TextInputo} />
                {!data.mobileValidation && <Text style={{color:'red'}}>Number must be 11 digits</Text> } 

            </View>

            <View style = {styles.titileContianer}>
                <Text style= {styles.titleText}>City</Text>
                <View style={styles.selectContainer}>
                <Picker
                        city={data.city}
                        style={{  width: "100%", marginLeft:10, color:"#666666", padding:12}}
                        onValueChange={(itemValue, itemIndex) => setData(...data, city = itemValue)}
                    >
                        <Picker.Item label="Raheem Yar Khan" value="GRaheem Yar Khan" />
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
                            bloodtype = {bloodtype}
                            style={{ width: '100%', marginLeft:10, color: '#666666', padding: 12, }}
                            onValueChange={(itemValue, itemIndex) => setBloodType(itemValue) }
                    >
                            <Picker.Item label="O+" value="O_Positive" />
                            <Picker.Item label="O-" value="O_Negative" />
                            <Picker.Item label="A+" value="A_Positive" />
                            <Picker.Item label="A-" value="A_Negative" />
                            <Picker.Item label="B+" value="B_Positive" />
                            <Picker.Item label="B-" value="B_Negative" />
                            <Picker.Item label="AB+" value="AB_Positive" />
                            <Picker.Item label="AB-" value="AB_Negative" />
                    </Picker>

                </View>
            </View>
           
                <TouchableOpacity style={styles.BeDonorbtn} onPress = {()=>{BeDonorBtn()}}>
                <Text style={styles.BeDonorTxt}>Be A Donor</Text>
                </TouchableOpacity>
           

          </View>
        
        </View>
    );
  }
const styles = StyleSheet.create({
    main:{
        flex:1, 
        alignItems:"center",
        backgroundColor:"#F43B13",
    },
    header:{
        height:"10%",
        width:"100%",
        alignItems:"center",
        padding:3,
        justifyContent : "center",
    },
    container:{
        backgroundColor:"#fff",
        width:"100%",
        height:"90%",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:"center",
        padding:12,

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
        fontSize:18
    }


});