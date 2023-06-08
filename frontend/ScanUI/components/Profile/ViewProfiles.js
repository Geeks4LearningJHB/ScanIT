import React, { useState, useEffect } from "react";

import { EvilIcons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getAllProfiles } from "../../api/gitter";
import Styles from "../Styles";

const ViewProfiles = ({ navigation }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState({
    profiles: [
      {
        occupation: "Software Developer",
        name: "Philasande Bhani",
        picture: "His picture",
        experience: 5,
      },
      {
        occupation: "Businest Analyst",
        name: "Nosandi Ndimithi",
        picture: "her picture",
        experience: 3,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 6,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 6,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 2,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 4,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 1,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 2,
      },
      {
        occupation: "Software Tester",
        name: "Vivian Mamgobo",
        picture: "her picture",
        experience: 4,
      },
    ],
  });
  const handleSearch = () => {
    alert("not yet implimented");
  };

  useEffect(() => {
    getAllProfiles();
  }, []);

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
              <Text style={Styles.text}>
                {item.experience} {item.experience > 1 ? "years" : "year"}{" "}
                experience
              </Text>
              <TouchableOpacity
                style={Styles.btnContainer}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ViewProfiles;
