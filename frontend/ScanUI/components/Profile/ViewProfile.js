import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const viewProfile = () => {
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
    <View>
      {profilePicture && (
        <Image
          source={{ uri: profilePicture }}
          style={{ width: 150, height: 150 }}
        />
      )}
      <Text>First Name:</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <Text>Last Name:</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <Text>Email:</Text>
      <TextInput
        value={emailAddress}
        onChangeText={setEmailAddress}
        placeholder="Email Address"
      />
      <Text>House Address:</Text>
      <TextInput
        value={houseAddress}
        onChangeText={setHouseAddress}
        placeholder="House Address"
      />
      <Text>Gender:</Text>
      <TextInput value={gender} onChangeText={setGender} placeholder="Gender" />
      <Text>Experience:</Text>
      <TextInput
        value={experience}
        onChangeText={setExperience}
        placeholder="Experience"
      />
      <Text>Education:</Text>
      <TextInput
        value={education}
        onChangeText={setEducation}
        placeholder="Education"
      />
      <Text>Phone Number:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
      />
      <Text>Skills:</Text>
      <TextInput
        value={skills.join(", ")}
        onChangeText={(text) => setSkills(text.split(", "))}
        placeholder="Skills"
      />
      <Text>Professional Summary:</Text>
      <TextInput
        value={professionalSummary}
        onChangeText={setProfessionalSummary}
        placeholder="Professional Summary"
      />

      <TouchableOpacity onPress={handleSaveProfile}>
        <Text>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeactivateAccount}>
        <Text>Deactivate Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default viewProfile;
