import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import environment from "../../Config/environment";
import styles from "../Styles";
import api from "../../Config/environment";

const CreateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState([]);
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    // Fetch the list of skills from the backend API
    fetchSkillList();
  }, []);

  const fetchSkillList = async () => {
    try {
      console.log("I am an api", api());
      const response = await axios.get("http://localhost:5114/api/User");
      console.log(response);
      setSkillList(response);
    } catch (error) {
      console.log("Error fetching skill list:", error);
    }
  };

  const handleSaveProfile = async () => {
    try {
      // Prepare the user profile data to be saved
      const userProfile = {
        firstName,
        lastName,
        emailAddress,
        houseAddress,
        gender,
        experience,
        education,
        phoneNumber,
        skills,
        professionalSummary,
        profilePicture,
      };

      // Send the user profile data to the backend API for saving
      await axios.post("your-backend-api-url/profiles", userProfile);

      // Navigate to the desired screen after saving the profile
      navigation.navigate("Profile");
    } catch (error) {
      console.log("Error saving user profile:", error);
    }
  };

  const handleSelectProfilePicture = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission denied to access media library.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setProfilePicture(result.uri);
      }
    } catch (error) {
      console.log("Error selecting profile picture:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Create Profile</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={emailAddress}
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />

        <Text style={styles.label}>House Address</Text>
        <TextInput
          style={styles.input}
          value={houseAddress}
          onChangeText={setHouseAddress}
        />

        <Text style={styles.label}>Gender</Text>
        <Picker
          style={styles.picker}
          selectedValue={gender}
          onValueChange={setGender}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>

        <Text style={styles.label}>Experience</Text>
        <TextInput
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
        />

        <Text style={styles.label}>Education</Text>
        <TextInput
          style={styles.input}
          value={education}
          onChangeText={setEducation}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skillList.map((skill) => (
            <TouchableOpacity
              key={skill.id}
              style={[
                styles.skillItem,
                skills.includes(skill.id) && styles.skillItemActive,
              ]}
              onPress={() => {
                if (skills.includes(skill.id)) {
                  setSkills(skills.filter((s) => s !== skill.id));
                } else {
                  setSkills([...skills, skill.id]);
                }
              }}
            >
              <Text style={styles.skillText}>{skill.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Professional Summary</Text>
        <TextInput
          style={styles.input}
          value={professionalSummary}
          onChangeText={setProfessionalSummary}
          multiline
        />

        <TouchableOpacity
          style={styles.selectProfilePictureButton}
          onPress={handleSelectProfilePicture}
        >
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
        {profilePicture && (
          <Image
            source={{ uri: profilePicture }}
            style={styles.profilePicture}
          />
        )}

        <TouchableOpacity style={styles.Button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateProfile;
