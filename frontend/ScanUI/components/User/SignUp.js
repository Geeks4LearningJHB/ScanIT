import { React, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { saveProfile } from "../../api/gitter";
import { isValidUserInput } from "../../utils/validations";

const signUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await saveProfile(name, surname, username, password);
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
    const validation = isValidUserInput(
      name,
      surname,
      username,
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
    }
    handleSignUp();
    navigation.navigate("login");
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
