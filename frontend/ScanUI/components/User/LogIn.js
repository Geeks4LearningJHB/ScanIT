import React from "react";
import { View, TouchableOpacity, Text,StyleSheet,TextInput,Image } from "react-native";

const logIn = () => {
  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.welcomeText}>Hello,</Text>
        <Text style={{fontSize:18}}>welcome to ScanIT</Text>
        <Image style={{width:50, height:50,marginTop:20,marginBottom:40}} source = {require('../../assets/Scan.png')}/>
      </View>

      <View style={styles.controlls}>
      <TextInput placeholder="Enter username" style={styles.textInput}/>
      <TextInput secureTextEntry={true} placeholder="Enter Password" style={styles.textInput}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{fontSize:18}}>New to TapIT?</Text>
      <TouchableOpacity>
      <Text style={{fontSize:18, fontWeight:'Bold',color:'blue',textDecorationLine: 'underline'}} >Create Account</Text>
      </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content:{
      flex:1,
      margin:25,
      borderColor:'black',
      borderRadius:10,
      //borderWidth:2,
      justifyContent:'center',
    
    },
    logo:{
      flex:2,
    //  borderColor:'red',
    //  borderColor:'black',
     // borderRadius:10,
    //  borderWidth:2,
     // margin:15,
        height:10,
      alignItems:'center',
      justifyContent:'flex-end',

    },
    controlls:{
      flex:2,
    
      //borderColor:'black',
    //  borderRadius:10,
     //borderWidth:2,
      marginTop:15,
      alignItems:'center',
     // justifyContent:'center',
    
      marginBottom:20,

    },
    welcomeText:{
      fontSize:20,
      fontWeight:'bold',
      
    },
    textInput:{
      borderWidth:2,
      borderColor:'black',
      borderRadius:10,
      width:250,
      marginBottom:20,
      marginHorizontal:0,
      padding:5,
      marginTop:10,
    },
    button:{
      borderColor:'black',
      borderRadius:10,
      width:250,
      marginBottom:20,
      padding:5,
      textAlign:'center',
      backgroundColor:'#C0C0C0'
    },
    buttonText:{
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    }

    
})
export default logIn;
