import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles from "../Styles";
import Validations from "../../utils/validations";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    navigation.navigate("Login");
    {
      /* try {
       const response = await fetch("back end endpoint", {
      method: "POST",
         headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, surname, email, password }),
    //   });

    //   if (response.ok) {
    //     alert("Signup successful");
    //     // navigation.navigate("Login");
    //     fadeOut();
    //   } else {
    //     alert("Signup failed");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
  // */
    }
  };

  const validation = () => {
    if (!isEmpty(name,surname,email,password,confirmPassword)) {
      alert("d");
    } else if (!isValidEmail) {
      alert("Check email");
    } else if (validateLength) {
      alert("Check your Password");
    } else {
      handleSignUp();
    }
  };
  const isValidEmail = () => {
    return email.includes("@");
  };

  const validateLength = () => {
    return password.length > 3;
  };

  const isEmpty = (name, surname, email, password, confirmPassword) => {
    return (
      name.length == "" &&
      surname == "" &&
      email == "" &&
      password == "" &&
      confirmPassword == ""
    );
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
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.helloText}>Register</Text>
        <Text style={styles.welcomeText}>To ScanIT</Text>
        <Image style={styles.image} source={require("../../assets/Scan.png")} />
      </View>

      <View style={styles.controlls}>
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.input}
        />

        <TouchableOpacity onPress={validation} style={styles.Button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
