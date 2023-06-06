import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const createProfile = () => {
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
      const response = await axios.get("your-backend-api-url/skills");
      setSkillList(response.data.skills);
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
      <View>
        <Text>Create Profile</Text>

        <Text>First Name</Text>
        <TextInput value={firstName} onChangeText={setFirstName} />

        <Text>Last Name</Text>
        <TextInput value={lastName} onChangeText={setLastName} />

        <Text>Email Address</Text>
        <TextInput
          value={emailAddress}
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />

        <Text>House Address</Text>
        <TextInput value={houseAddress} onChangeText={setHouseAddress} />

        <Text>Gender</Text>
        <Picker selectedValue={gender} onValueChange={setGender}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>

        <Text>Experience</Text>
        <TextInput value={experience} onChangeText={setExperience} />

        <Text>Education</Text>
        <TextInput value={education} onChangeText={setEducation} />

        <Text>Phone Number</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text>Skills</Text>
        <View>
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
              <Text>{skill.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text>Professional Summary</Text>
        <TextInput
          value={professionalSummary}
          onChangeText={setProfessionalSummary}
          multiline
        />

        <TouchableOpacity onPress={handleSelectProfilePicture}>
          <Text>Select Profile Picture</Text>
        </TouchableOpacity>
        {profilePicture && <Image source={{ uri: profilePicture }} />}

        <TouchableOpacity onPress={handleSaveProfile}>
          <Text>Save Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default createProfile;
