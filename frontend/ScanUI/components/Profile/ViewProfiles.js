import React, { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getAllProfiles } from "../../api/gitter";
import styles from "../Styles";

const ViewProfiles = ({ navigation }) => {
  const [text, setText] = useState("");
  const ButtonAlert = () => {
    Alert.alert("Payment", "Please make payment before proceeding", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Payment") },
    ]);
  };
  async function getProfiles() {
    getAllProfiles().then((res) => {
      console.log("I am here");
      console.log("I am here bru");
      console.log(res);
      console.log("I am done");
    });
  }

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
    alert("not yet implemented");
  };

  useEffect(() => {
    const boundGetProfiles = getProfiles.bind(this);
    boundGetProfiles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.searchContainer}>
          
          <TextInput style={styles.searchInput}
            value={text}
            onChangeText={(value) => {
              setText(value);
            }}
            placeholder="Search"
          />
          <EvilIcons
            name="search"
            size={24}
            color="black"
          />
        </View>

        {data.profiles.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: "https://picsum.photos/id/237/536/354" }}
              style={styles.image}
            />
            <View style={styles.textView}>
              <Text style={styles.label}>{item.name}</Text>
              <Text style={styles.text}>{item.occupation}</Text>
              <Text style={styles.text}>
                {item.experience} {item.experience > 1 ? "years" : "year"}{" "}
                experience
              </Text>
              <TouchableOpacity style={styles.Button} onPress={ButtonAlert}>
                <Text style={styles.buttonText}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewProfiles;
