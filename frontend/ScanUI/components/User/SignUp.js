import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../Styles";

const SignUp = ({ navigation }) => {
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
        navigation.navigate("Login");
        fadeOut();
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const validation = () => {
    const validation = isValidUserInput(
      name,
      surname,
      email,
      password,
      confirmPassword
    );
    if (validation) {
      if (validation === "email") {
        alert("Email address must contain @ charecter ");
      } else if (validation === "empty") {
        alert("Fill them");
      } else if (validation === "length") {
        alert("Try a stronger password");
      }
      return;
    }
    handleSignUp();
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setName(value);
        }}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setSurname(value);
        }}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setConfirmPassword(value);
        }}
      />

      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          validation();
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignUp;
