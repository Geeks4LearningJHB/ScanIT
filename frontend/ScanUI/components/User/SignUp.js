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
import {
  isEmpty,
  isValidEmail,
  validateLength,
  passwordMismatch,
} from "../../utils/validations";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async (name, surname, email, password) => {
 
    const userData = {
      name: name,
      surname: surname,
      email: email,
      password: password
    };
   {
         try {
         const response = await fetch("back end endpoint", {
        method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(userData),
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
   }
  };

  // ========================== Validations ===================================
 
  const handleValidations = (name, surname, email, password, confirmPassword) => {
   
     if (!isEmpty(name, surname, email, password, confirmPassword)) {
       alert("Please fill all the fields");
     } else if (isValidEmail(email)) {
       alert("Please enter a valid email");
     } else if (validateLength(password)) {
       alert("Please enter a password with at least 6 characters");
     } else if (passwordMismatch(password,confirmPassword)) {
       alert("Passwords do not match");
     } else {
       handleSignUp(name, surname, email, password);
     }
  };

  //==================== Animation ==========================
  const opacity = useState(new Animated.Value(0))[0];

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, []); 
  const signUp = () => {
    navigation.navigate("Login");
    //handleValidations(name, surname, email, password, confirmPassword);
  };
  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.helloText}>Register</Text>
        <Text style={styles.welcomeText}>To ScanIT</Text>
        <Animated.Image
          style={styles.image(opacity)}
          source={require("../../assets/Scan.png")}
        />
      </View>

      <View style={styles.controlls}>
        <TextInput
          placeholder="First Name"
          style={styles.input}
          onChangeText={(text) => setName(text)}
          defaultValue=""
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          onChangeText={(text) => setSurname(text)}
          defaultValue=""
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          defaultValue=""
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          defaultValue=""
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
          defaultValue=""
        />

        <TouchableOpacity onPress={signUp} style={styles.Button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
