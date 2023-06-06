import { React, useState } from "react";
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
      handleSignUp();
      navigation.navigate("login");
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Sign In</Text>
      </View>

      <TextInput
        placeholder="Name"
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        placeholder="Surname"
        onChangeText={(value) => {
          setSurname(value);
        }}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <TextInput
        placeholder="Username"
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <TextInput
        placeholder="Confirm Password"
        onChangeText={(value) => {
          setConfirmPassword(value);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          save();
        }}
      >
        <TouchableOpacity
          onPress={() => {
            save();
          }}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default signUp;
