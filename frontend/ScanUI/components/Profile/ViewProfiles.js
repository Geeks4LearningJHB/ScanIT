import React, { useState } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Icon,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Styles from "../Styles";
import { TextInput } from "react-native-gesture-handler";
const viewProfiles = ({ navigation }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState({
    profiles: [
      {
        occupation: "Software Developer",
        name: "Philasande Bhani",
        picture: "His picture",
        experience:5
      },
      {
        occupation: "Businest Analyst",
        name: "Nosandi Ndimithi",
        picture: "her picture",experience:3
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:6
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:6
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:2
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:4
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:1
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:2
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",experience:4
      },
    ],
  });
  const handleSearch = () => {
    alert("not yet implimented");
  };
  // This function will be used to get data from the back end.=============
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('Back end api');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.btnContainer}>
          <TextInput
            style={Styles.input}
            value={text}
            
            onChangeText={(value) => {
              setText(value);
            }}
            placeholder="Search"
          />
          <TouchableOpacity style={Styles.button} onPress={handleSearch}>
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {data.profiles.map((item, index) => (
          <View key={index} style={Styles.card}>
            <Image
              // Picture to be setted according to the data from the api
              source={{ uri: "https://picsum.photos/id/237/536/354" }}
              style={Styles.image}
            />
            <View style={Styles.textView}>
              <Text style={Styles.name}>{item.name}</Text>
              <Text style={Styles.text}>{item.occupation}</Text>
              <Text style={Styles.text}>{item.experience} {item.experience > 1 ? "years" :"year"} experience</Text>
              <TouchableOpacity
                style={Styles.btnContainer}
                onPress={() => navigation.navigate("signUp")}
              >
                <Text >View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default viewProfiles;
