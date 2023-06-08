import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import styles from "../Styles";

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passHandler = (val) => {
    setPassword(val);
  };

  const usernameHandler = (val) => {
    setUsername(val);
  };

  const loginHandler = async () => {
    try {
      // Make an API request to your backend to validate the login
      const response = await fetch("your-backend-api-url/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Login successful
        // You can navigate to the desired screen here
        navigation.navigate("Root", { screen: "Home" });
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  const signInHandler = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.welcomeText}>Welcome to ScanIT</Text>
        <Image style={styles.image} source={require("../../assets/Scan.png")} />
      </View>

      <View style={styles.controlls}>
        <TextInput
          placeholder="Enter username"
          onChangeText={usernameHandler}
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={passHandler}
          style={styles.input}
        />

        <TouchableOpacity onPress={loginHandler} style={styles.Button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.newText}>New to ScanIT?</Text>
        <TouchableOpacity onPress={signInHandler}>
          <Text style={styles.accountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;
