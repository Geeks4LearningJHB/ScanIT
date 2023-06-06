import React, {  useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import Styles from "../Styles";

const signUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const isEmpty = () => {
    return (
      name === "" ||
      surname === "" ||
      username === "" ||
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
        body: JSON.stringify({ name, surname, username, password }),
      });

      if (response.ok) {
        alert("Signup successful");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const save = () => {
    if (isEmpty(name, surname, username, password, confirmPassword)) {
      alert("Fill them");
    } else if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else if (validateLength(password)) {
      alert("Try a stronger password");
    } else if (!isValidEmail(email)) {
      alert("Email address must contain @ charecter ");
    } else {
      // handleSignUp();
      // navigation.navigate("login");
      alert("signed in")
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.LogoView}>
        <Text style={Styles.headingStyle}>Sign In</Text>
      </View>

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
        placeholder="Username"
        style={Styles.Input}
        onChangeText={(value) => {
          setUsername(value);
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
          save();
        }}
      >
        <TouchableOpacity

          onPress={() => {
            save();
          }}
        >
          <Text

          >Log In</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default signUp;
