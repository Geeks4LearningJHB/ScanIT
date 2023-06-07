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
  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.welcomeText}>Hello,</Text>
        <Text style={{ fontSize: 18 }}>welcome to ScanIT</Text>
        <Image style={{ width: 50, height: 50, marginTop: 20, marginBottom: 40 }} source={require('../../assets/Scan.png')} />
      </View>

      <View style={styles.controlls}>
        <TextInput placeholder="Enter username" onChangeText={usernameHandler} style={styles.textInput} />
        <TextInput secureTextEntry={true} placeholder="Enter Password" onChangeText={passHandler}  style={styles.textInput} />
        <TouchableOpacity onPress={()=>loginHandler()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>New to TapIT?</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'Bold', color: 'blue', textDecorationLine: 'underline', marginBottom: 20 }} >Create Account</Text>
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
  welcomeText: {
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
  }


})
export default logIn;
