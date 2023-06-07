import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  Animated,
} from "react-native";
import Styles from "../Styles";

const signUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const isEmpty = () => {
    return (
      name === "" ||
      surname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    );
  };
  const validateLength = () => {
    if (password.length > 3) {
      return false;
    }
    return true;
  };
  const isValidEmail = () => {
    if (email.includes("@")) {
      return true;
    }
    return false;
  };
  const handleSignUp = async () => {
    try {
      const response = await fetch("back end endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, password }),
      });

      if (response.ok) {
        alert("Signup successful");
        navigation.navigate("login");
        fadeOut();
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const validation = () => {
    if (isEmpty(name, surname, email, password, confirmPassword)) {
      alert("Fill all the filleds");
    } else if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else if (validateLength(password)) {
      alert("Try a stronger password");
    } else if (!isValidEmail(email)) {
      alert("Email address must contain @ charecter ");
    } else {
      handleSignUp();
    }
  };
  //==============================================
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <SafeAreaView style={Styles.container}>
      <Animated.View style={[Styles.LogoView, { opacity: fadeAnim }]}>
        <Text style={Styles.headingStyle}>Sign In</Text>
      </Animated.View>

      <TextInput
        placeholder="Name"
        style={Styles.Input}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        placeholder="Surname"
        style={Styles.Input}
        onChangeText={(value) => {
          setSurname(value);
        }}
      />
      <TextInput
        placeholder="Email"
        style={Styles.Input}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      

     
      <TextInput
        placeholder="Password"
        style={Styles.Input}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <TextInput
        placeholder="Confirm Password"
        style={Styles.Input}
        onChangeText={(value) => {
          setConfirmPassword(value);
        }}
      />

      <TouchableOpacity
        style={Styles.Button}
        onPress={() => {
          validation();
        }}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default signUp;
