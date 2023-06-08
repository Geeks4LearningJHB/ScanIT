import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../Styles";

const ViewProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
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

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile from the backend API
        const response = await fetch("your-backend-api-url/profile", {
          method: "GET",
          headers: {
            Authorization: "Bearer your-auth-token",
          },
        });

        if (response.ok) {
          const profileData = await response.json();
          setProfilePicture(profileData.profilePicture);
          setFirstName(profileData.firstName);
          setLastName(profileData.lastName);
          setEmailAddress(profileData.emailAddress);
          setHouseAddress(profileData.houseAddress);
          setGender(profileData.gender);
          setExperience(profileData.experience);
          setEducation(profileData.education);
          setPhoneNumber(profileData.phoneNumber);
          setSkills(profileData.skills);
          setProfessionalSummary(profileData.professionalSummary);
        } else {
          console.log("Failed to fetch user profile");
        }
      } catch (error) {
        console.log("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      // Save the updated profile to the backend API
      const response = await fetch("your-backend-api-url/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify({
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
        }),
      });

      if (response.ok) {
        console.log("Profile updated successfully");
        // You can show a success message to the user if needed
      } else {
        console.log("Failed to update profile");
      }
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {profilePicture && (
          <Image
            source={{ uri: profilePicture }}
            style={{ width: 150, height: 150 }}
          />
        )}

        <Text style={styles.label}>First Name</Text>
        <TextInput value={firstName} onChangeText={setFirstName} />
        <Text style={styles.label}>Last Name:</Text>
        <TextInput value={lastName} onChangeText={setLastName} />
        <Text style={styles.label}>Email:</Text>
        <TextInput value={emailAddress} onChangeText={setEmailAddress} />
        <Text style={styles.label}>House Address:</Text>
        <TextInput value={houseAddress} onChangeText={setHouseAddress} />
        <Text style={styles.label}>Gender:</Text>
        <TextInput value={gender} onChangeText={setGender} />
        <Text style={styles.label}>Experience:</Text>
        <TextInput value={experience} onChangeText={setExperience} />
        <Text style={styles.label}>Education:</Text>
        <TextInput value={education} onChangeText={setEducation} />
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput value={phoneNumber} onChangeText={setPhoneNumber} />
        <Text style={styles.label}>Skills:</Text>
        <TextInput
          value={skills.join(", ")}
          onChangeText={(text) => setSkills(text.split(", "))}
        />
        <Text style={styles.label}>Professional Summary:</Text>
        <TextInput
          value={professionalSummary}
          onChangeText={setProfessionalSummary}
        />

        <TouchableOpacity style={styles.Button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText}>Deactivate Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ViewProfile;
