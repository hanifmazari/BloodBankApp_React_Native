import React from 'react'
import {View, Text,Image, StyleSheet, TouchableOpacity, ScrollView, Touchable} from 'react-native'


function Home(props) {
    return(
        // <ScrollView>
            <View style={styles.container}>
                <View style = {styles.covermain} >
                    <View style ={styles.textmaincover} >
                        <Text style = {styles.textcover} >
                            Donate te blood to save the lives. Your little
                            effort may give life to some one. You can also 
                            get blood from this plateform. 
                            To blood just click on the Request blood button.
                        </Text>
                    </View>
                </View>
                <View style = {styles.donationcovermain} >
                    <View style= {styles.donationmain} >
                        <View style={styles.donationImage} >
                            {/* <Image style={styles.donationImage} source={require("../../assets/images/donateblood.png")} /> */}
                        </View>
                        <View style={styles.donationTextContainer}>
                            <Text style={styles.donationTextNum}>3232</Text>
                            <Text style={styles.donationText}>Donors are registered. If you want to help other by donating blood plz register as donor by clicking button below</Text>
                            <TouchableOpacity 
                            style={styles.button}
                            onPress={() => props.navigation.navigate("BeDonor")}
                            activeOpacity={.8}
                        >
                            <Text style={{padding:5, textAlign:'center', color:'#fff', fontWeight:'bold', fontSize:20,}}>Donate Blood</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {styles.donationcovermain} >
                    <View style= {styles.donationmain} >
                        <View style={styles.donationImage} >
                            {/* <Image style={styles.donationImage} source={require("../../assets/images/donateblood.png")} /> */}
                        </View>
                        <View style={styles.donationTextContainer}>
                            <Text style={styles.donationTextNum}>3232</Text>
                            <Text style={styles.donationText}>People helped. If you neeed blood, You can post a blood reques here.</Text>
                            <TouchableOpacity 
                            style={styles.button}
                            onPress={() => props.navigation.navigate("RequestBlood")}
                            activeOpacity={.8}

                        >
                            <Text style={{padding:5, textAlign:'center', color:'#fff', fontWeight:'bold', fontSize:20,}}>Blood Request</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        // {/* </ScrollView> */}
    )
}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#F43B13',
        paddingBottom:5,
    },
    covermain:{
        // backgroundColor:'#F43B13',
        width:'100%',
        borderRadius:0,
        padding:5,
        // marginTop:5,

    },
    textcover:{
        fontSize:16,
        color:'#fff',
        padding: 10,
        margin:10,
    },
    donationcovermain:{
        flexDirection:'row'
    },
    donationmain:{
        flexDirection:'row',
        flex:.9,
        backgroundColor:'#ECF0F1',
        borderRadius:7,
        marginTop:10,
        padding:5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    donationImage:{
        flex:.32,
        // width:40,
        alignItems:"flex-start",
        // borderWidth:1,
        // flexDirection:'row',
           
    },
    donationTextContainer:{
        flex:.66,
        padding:5,
    },
    donationTextNum:{
        fontSize:32,
        // justifyContent:'center',
        // textAlign:'center',
        fontWeight:'bold',
    },
    donationText:{
        fontSize:16,
        padding:5,
        margin:5,
    },
    button:{
        backgroundColor:'#F43B13',
        color:'#fff',
        // width:'70%',
        fontSize:20,
        padding:5,
        borderRadius:4,
        alignSelf:'flex-end'        
        // alignItems:'flex-end'

    },

});