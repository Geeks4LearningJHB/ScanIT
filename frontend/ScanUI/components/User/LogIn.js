import React from "react";
import { View, TouchableOpacity, Text,StyleSheet,TextInput } from "react-native";

const logIn = () => {
  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      <View style={styles.controlls}>
      <TextInput style={styles.textInput}/>
      <TextInput style={styles.textInput}/>
      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
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
      borderWidth:2,
      justifyContent:'center',
    
    },
    logo:{
      flex:1,
      borderColor:'red',
      borderColor:'black',
      borderRadius:10,
      borderWidth:2,
      margin:15,
      alignItems:'center',
      justifyContent:'center'

    },
    controlls:{
      flex:3,
      borderColor:'red',
      borderColor:'black',
      borderRadius:10,
      borderWidth:2,
      margin:15,
      alignItems:'center',
      justifyContent:'',
    
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
    }

    
})
export default logIn;
