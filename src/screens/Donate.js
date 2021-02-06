// import React, { useState } from 'react';
// import {  View, Text } from 'react-native';

// export default function Donate () {
//     return (
//       <View>
//         <Text> componentText </Text>
//       </View>
//     )}

// import React , {useState} from 'react';
// import {View, Text, StyleSheet , TextInput, TouchableOpacity , } from "react-native";
// import {Picker} from '@react-native-picker/picker';


//  function BecomeDonor() {
//      const [selectedValue, setSelectedValue] = useState("Select Your Blood Type");
//      const [data, setData] = useState({
//         name : "",
//         mobile : "",
//         isValidName : true,
//         isValidMobile : true,
//         isLoading : false,
//     });
//     console.log("data", data);
//     console.log("seleted alue", selectedValue);
//     const isValidInformation = ()=>{
//         if(data.name.trim() === "" || data.name.length<3){
//             setData({
//                 ...data,
//                 isValidName:false,
//             });
//         return false;
//         }
//         if(data.mobile.trim()  === "" || data.mobile.length<11){
//             setData({
//                 ...data,
//                 isValidMobile:false,
//             });
//             return false;
//         }
//         else {
//             return true;
//         }
        
//     }
//     const textInputChanged = (val, fieldName)=>{
//         if(fieldName=="name"){
//             setData({
//                 ...data,
//                 name : val,
//                 isValidName:true,
//             });
//         }
//         if(fieldName=="mobile"){
//             setData({
//                 ...data,
//                 mobile : val,
//                 isValidMobile:true,
//             });
//         }
//     }
    

//     const becomeDonorButtonHandler = ()=>{
//         console.log("working");
//         if(isValidInformation()){
//             console.log("Everthing is Fine");
//         }
//         else{
//             console.log("Error");
//         }
//     }
    

//     return (
        
//         <View style={styles.main}>
//            <View style={styles.headerContainer}>
//            </View>
//            <View style={styles.formContainer}>
//                <Text style={styles.becomeText}>Become a Donor</Text>
//                <View style={styles.inputConatiner}>
//                    <Text style={styles.labelText}> Your Name  </Text>
//                    <TextInput style={styles.textInput} autoFocus={true} 
//                      onChangeText = {(e)=> textInputChanged(e, "name")}
//                      />
//                       {!data.isValidName && <Text style={styles.errorMessage}>Required & must be at least 3 characters </Text>}
//                </View>
//                <View style={styles.inputConatiner}>
//                    <Text style={styles.labelText}> Your Mobile #   </Text>
//                    <TextInput style={styles.textInput} keyboardType="phone-pad"
//                     onChangeText = {(e)=> textInputChanged(e, "mobile")}
//                     />
//                     {!data.isValidMobile && <Text style={styles.errorMessage}>Required & must be at least 11 digits </Text>}
//                </View>
//                <View style={styles.inputConatiner}>
//                    <Text style={styles.labelText}> Your City  </Text>
//                    <View style={styles.selectBox}>
//                     <Picker
//                         selectedValue={selectedValue}
//                         style={{  width: "100%", marginLeft:10, color:"#666666", padding:12}}
//                         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//                         >
//                         <Picker.Item label="Gujrat" value="Gujrat" />
//                         <Picker.Item label="Kharian" value="Kharian" />
//                         <Picker.Item label="Kotla" value="Kotla" />
//                         <Picker.Item label="Jalalpur" value="Jalalpur" />
//                         <Picker.Item label="Barnala" value="Barnala" />
//                     </Picker>
//                    </View>
//                 </View>



//                 <View style={styles.inputConatiner}>
//                    <Text style={styles.labelText}> Blood Group  </Text>
//                    <View style={styles.selectBox}>
//                     <Picker
//                         selectedValue={selectedValue}
//                         style={{  width: "100%", marginLeft:10, color:"#666666", padding:12}}
//                         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//                         >
//                         <Picker.Item label="O+" value="O_Positive" />
//                         <Picker.Item label="O-" value="O_Negative" />
//                         <Picker.Item label="A+" value="A_Positive" />
//                         <Picker.Item label="A-" value="A_Negative" />
//                         <Picker.Item label="B+" value="B_Positive" />
//                         <Picker.Item label="B-" value="B_Negative" />
//                         <Picker.Item label="AB+" value="AB_Positive" />
//                         <Picker.Item label="AB-" value="AB_Negative" />
//                     </Picker>
//                    </View>
//                </View>
//                <TouchableOpacity style={styles.becomeButtonContainer} onPress={
//                    ()=>{
//                        becomeDonorButtonHandler();
//                    }
//                }>
//                     <Text style={styles.becomeButtonText}>Become Donor</Text>
//                 </TouchableOpacity>
//            </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     main : {
//         flex:1, 
//         alignItems:"center",
//         backgroundColor:"#fe6e58",
//     },
//     headerContainer:{
//         height:"8%",
//         width:"100%",
//         alignItems:"center",
//         padding:2,
//         justifyContent : "center",
//     },
//     headerText:{
//         width:"88%",
//         padding:5,
//         fontFamily:"AvenirLTStd-Book",
//         fontSize:18,
//         color:"#fff",
//     },
//     formContainer:{
//         backgroundColor:"#fff",
//         width:"100%",
//         height:"92%",
//         borderTopLeftRadius:20,
//         borderTopRightRadius:20,
//         alignItems:"center",
//         padding:10,
//     },
//     becomeText:{
//         fontFamily:"Helvetica-Bold-Font",
//         fontSize:18,
//         color:"#1a1a1a",
//         padding:5,
//     },
//     inputConatiner:{
//         width:"95%",
//         padding:2,
//     },
//     labelText:{
//         padding:3,
//         color:"#4d4d4d"
//     },
//     textInput:{
//         padding:10,
//         borderRadius:6,
//         backgroundColor:"#f2f2f2",
//     },
//     selectBox:{
//         width:"100%", 
//         padding:2,
//         backgroundColor:"#f2f2f2", 
//         borderRadius:6,
//         alignItems:"center",
//         marginLeft:"auto",
//         marginRight:"auto",
//     },
//     becomeButtonContainer:{
//         alignItems: "center",  
//         width:"95%",  
//         backgroundColor:"#fe6e58",
//         borderRadius:7,
//         marginTop:"10%",
//         padding:12,
//     },
//     becomeButtonText:{
//         color:"white",
//         fontSize:18
//     },
//     errorMessage:{
//         color:"red",
//     },
// });
// export default BecomeDonor;
import React from 'react';
import {View, Text, Image , StyleSheet, TouchableOpacity, ScrollView} from "react-native"
// function SamplemainScreen({navigation}) {
    function SamplemainScreen() {

    return (
        <ScrollView>
           <View style={styles.container}>
              <View style={styles.coverParent}>
                        <View style={styles.coverTextContainer}>
                            <Text style={styles.coverText}>
                                Hayatian's Blood Society is working as community of peop are willing to help each other. We have collected over 1000 bags of blood in last 3 years. 
                            </Text>
                        </View>
              </View>

              
              <View style={styles.donationParent}>
                    <View style={styles.donationContainer}> 
                         <View style={styles.donationImageContainer}>
                             {/* <Image style={styles.donationImage} source={require("../../assets/images/donateblood.png")} /> */}
                        </View>
                        <View style={styles.donationTextContainer}>
                        
                            <Text style={styles.dontationNumber}>233 </Text> 
                            <Text style={styles.donationText}>
                                total donors registered with us. Do you want to help others?
                            </Text>
                        </View>
                    </View>
                    <View style={styles.donationButtonContainer}>
                            <TouchableOpacity style={styles.donationButton} onPress={()=>{
                                navigation.navigate("BecomeDonor");
                            }}>
                                <Text style={styles.donationButtonText}>Become a Donor</Text>
                            </TouchableOpacity>
                        </View>
              </View> 
              <View style={styles.donationParent}>
                    <View style={styles.donationContainer}> 
                         <View style={styles.donationImageContainer}>
                         {/* <Image style={styles.donationImage} source={require("../../assets/images/pngwing.com.png")} /> */}
                        </View>
                        <View style={styles.donationTextContainer}>
                        <Text style={styles.dontationNumber}>Need Blood? </Text> 
                            <Text style={styles.donationText}>
                                We are here to help you. Please make a request for blood.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.donationButtonContainer}>
                            <TouchableOpacity style={styles.donationButton} onPress={()=>{
                                navigation.navigate("RequestBlood");
                            }}>
                                <Text style={styles.donationButtonText}>Request Blood</Text>
                            </TouchableOpacity>
                        </View>
              </View>
              {/* <View style={styles.donationParent}>
                    <View style={styles.donationContainer}> 
                         <View style={styles.donationImageContainer}> */}
                         {/* <Image style={styles.donationImage} source={require("../../assets/images/pngwing.com.png")} /> */}
                        {/* </View>
                        <View style={styles.donationTextContainer}>
                            <Text style={styles.dontationNumber}>233 </Text> 
                            <Text style={styles.donationText}>
                                total donors registered with us. Do you want to help others?
                            </Text>
                        </View>
                    </View>
                    <View style={styles.donationButtonContainer}>
                            <TouchableOpacity style={styles.donationButton}>
                                <Text style={styles.donationButtonText}>Become a Donor</Text>
                            </TouchableOpacity>
                    </View> */}
              {/* </View> */}
            </View>
         </ScrollView>
        );
    }

const styles = StyleSheet.create({
    container:{
        //   flex:1,
        alignItems:"center",
        paddingBottom:5,
        backgroundColor:"#fe6e58"
    },
    coverParent:{
        borderRadius : 0,  
        backgroundColor:"#fe6e58",
        width:"100%",
    },
    coverTextContainer:{
        width :"100%",
        flexDirection:"column",
        padding:15,
        justifyContent : "center",
        alignItems : "center",
        // backgroundColor:"#000"
    },
    coverText:{
        color:"#f2f2f2",
        fontFamily:"AvenirLTStd-Roman",
        fontSize:18,
        lineHeight: 20,
        // fontSize:40,
    },
    
    donationParent:{
        borderRadius : 12,  
        backgroundColor:"#fff",
        width:"95%",
        marginBottom:15,
    },
    donationContainer:{
        flexDirection:"row",
    },
    donationImage : {
        width:150, 
        height:150,
    },
    donationButtonContainer:{
        alignItems:"flex-end",
    },
    
    donationButton:{
       backgroundColor:"red",
       padding:10,
       marginBottom:10,
       width:"40%",
       marginRight:"5%",
       alignItems : "center",
       borderRadius:5,
    },
    donationButtonText:{
        color: "#fff",
        fontFamily : "Helvetica-Bold-Font",
    },
    donationImageContainer:{
        width:"50%",
        alignItems : "center",
        justifyContent : "center",
        // backgroundColor:"#f2f2f2",
        
    },
    donationTextContainer:{
        width :"50%",
        flexDirection:"column",
        padding:20,
      
       
        // backgroundColor:"#000"
    },
    donationText:{
        color:"#000",
        fontFamily:"AvenirLTStd-Roman",
        fontSize:18,
        
        // fontSize:40,
    },  
    dontationNumber:{
        fontFamily:"Helvetica-Bold-Font",
        color:"#000",
        fontSize:25,
        // backgroundColor:"#000",
        // textAlign : "center",
    },
   
    
});

export default SamplemainScreen;