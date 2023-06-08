import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../Styles";

const Home = ({ route }) => {
  // const { firstName, lastName, profilePicture } = route.params;

  return (
    <View style={styles.content}>
      <View style={styles.logo}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.welcomeText}>Welcome to ScanIT</Text>
        {/* <Image style={styles.image} source={{ uri: profilePicture }} /> */}
      </View>

      <View style={styles.controlls}>
        <Text style={styles.newText}>Profile:</Text>
        {/* <Text style={styles.label}>First Name: {firstName}</Text>
        <Text style={styles.label}>Last Name: {lastName}</Text> */}
      </View>
    </View>
  );
};

export default Home;
