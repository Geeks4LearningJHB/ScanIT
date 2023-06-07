import React,{useState} from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Image,useStatew} from "react-native";

const logIn = () => {
  const [username,setUsername]=useState('');
  const[password,setPassword]=useState('');

  const passHandler=(val)=>{
    setPassword(val);
  }

  const usernameHandler = (val)=>{
    setUsername(val)
  }

  const loginHandler= ()=>{
    console.log(password);
  }

  const signInHandler=()=>{
   //navigation to sign in page Required  
  }
  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.welcomeText}>welcome to ScanIT</Text>
        <Image style={styles.image} source={require('../../assets/Scan.png')} />
      </View>

      <View style={styles.controlls}>
        <TextInput placeholder="Enter username" onChangeText={usernameHandler} style={styles.textInput} />
        <TextInput secureTextEntry={true} placeholder="Enter Password" onChangeText={passHandler}  style={styles.textInput} />
        <TouchableOpacity onPress={()=>loginHandler()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.newText}>New to ScanIT?</Text>
        <TouchableOpacity>
          <Text style={styles.accountText} onPress={()=>{signInHandler()}} >Create Account</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 25,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',

  },
  logo: {
    flex: 2,
    height: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  controlls: {
    flex: 4,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: 20,

  },
  helloText: {
    fontSize: 30,
    fontWeight: 'bold',

  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    marginBottom: 20,
    marginHorizontal: 0,
    padding: 5,
    marginTop: 10,
  },
  button: {
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    marginBottom: 20,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#C0C0C0'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeText:
  { fontSize: 18,
  },
  newText:{ fontSize: 18 
  },
  accountText:{ 
    fontSize: 18,
     fontWeight: 'Bold',
      color: 'blue', 
      textDecorationLine: 'underline',
       marginBottom: 20 
      },
image:{ width: 50,
   height: 50,
    marginTop: 20,
     marginBottom: 40
     }



})
export default logIn;
