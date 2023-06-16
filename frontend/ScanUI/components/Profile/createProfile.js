import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import {
  isNotEmpty,
  isValidEmail,
  isValidExperience,
  isValidSkill,
  phoneLength,
  isNumeric,
} from "../../utils/validations";
import { SelectList } from "react-native-dropdown-select-list";
import environment from "../../Config/environment";
import styles from "../Styles";
import api from "../../Config/environment";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const CreateProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [EducationInforArray, setEsducationInforArray] = useState([]);
  const [WorkInforArray, setWorkInforArray] = useState([]);
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
    // try {
    //   // Prepare the user profile data to be saved
    if (
      isNotEmpty(
        firstName,
        lastName,
        emailAddress,
        houseAddress,
        gender,
        experience,
        EducationInforArray,
        phoneNumber,
        skills,
        professionalSummary,
        profilePicture
      )
    ) {
      if (!isValidEmail(emailAddress)) {
        if (phoneLength(phoneNumber) && isNumeric(phoneNumber)) {
          const userProfile = {
            firstName,
            lastName,
            emailAddress,
            houseAddress,
            gender,
            experience,
            EducationInforArray,
            phoneNumber,
            skills,
            professionalSummary,
            profilePicture,
          };
          console.log(userProfile);
          navigation.navigate("Root", { screen: "Home" });
        } else {
          alert("Check your phone number");
        }
      } else {
        alert("Fill all the required fields @");
      }
    } else {
      alert("Fill all the required fields");
    }

    //   // Send the user profile data to the backend API for saving
    //   await axios.post("your-backend-api-url/profiles", userProfile);

    //   // Navigate to the desired screen after saving the profile
    //   navigation.navigate("Profile");
    // } catch (error) {
    //   console.log("Error saving user profile:", error);
    // }
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
  //  ============================== testing ===============================
  const [isEducationViewVisible, setIsEducationViewVisible] = useState(false);
  const [isExperienceViewVisible, setIsExperienceViewVisible] = useState(false);
  const [isSkillsViewVisible, setIsSkillsViewVisible] = useState(false);
  const viewHidden = () => {
    isEducationViewVisible
      ? setIsEducationViewVisible(false)
      : setIsEducationViewVisible(true);
  };
  const ExperienceVisible = () => {
    isExperienceViewVisible
      ? setIsExperienceViewVisible(false)
      : setIsExperienceViewVisible(true);
  };
  const SkillVisible = () => {
    isSkillsViewVisible
      ? setIsSkillsViewVisible(false)
      : setIsSkillsViewVisible(true);
  };

  const ExperienceHandleDelete = (index) => {
    const newArray = [...WorkInforArray];
    newArray.splice(index, 1);
    setWorkInforArray(newArray);
  };
  const EducationHandleDelete = (index) => {
    const newArray = [...EducationInforArray];
    newArray.splice(index, 1);
    setEsducationInforArray(newArray);
  };
  const SkillHandleDelete = (itemName) => {
    const updatedSkills = skills.filter((item) => item.skill !== itemName);
    setSkills(updatedSkills);
  };

  const [varsity, setVarsity] = useState("");
  const [period, setPeriod] = useState("");
  const [qualification, setQualification] = useState("");
  const SaveEducationArray = () => {
    const newObj = {
      varsity: varsity,
      period: period,
      qualification: qualification,
    };
    const foundObject = EducationInforArray.find(
      (obj) => obj.qualification === newObj.qualification
    );
    if (newObj.varsity != "" && newObj.qualification != "" && newObj.period) {
      if (!foundObject) {
        setEsducationInforArray((prevArray) => [...prevArray, newObj]);
      } else {
        alert("Qualification Already Exist");
      }
    } else {
      alert("Fill all the required fields");
    }
  };
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");
  const SaveWorkArray = () => {
    const newObj = {
      company: company,
      position: position,
      duration: duration,
    };
    const foundObject = WorkInforArray.find(
      (obj) => obj.company === newObj.company
    );
    if (isValidExperience(newObj)) {
      if (!foundObject) {
        setWorkInforArray((prevArray) => [...prevArray, newObj]);
      } else {
        alert("Experience Already Exist");
      }
    } else {
      alert("Fill all the required fields ");
    }
  };
  const skillProficiency = [
    { value: "0-3 Junior Level" },
    { value: "3-5 Intermidate" },
    { value: "5-9 Senior Level" },
    { value: "10 and More Guru" },
  ];
  const [skill, setSkill] = useState("");
  const [proficiency, setProficiency] = useState("");
  const SaveSkill = () => {
    const newObj = {
      skill: skill,
      proficiency: proficiency,
    };
    const foundObject = skills.find((obj) => obj.skill === newObj.skill);
    if (isValidSkill(newObj)) {
      if (!foundObject) {
        setSkills((prevArray) => [...prevArray, newObj]);
      } else {
        alert("Skill Already Exist");
      }
    } else {
      alert("Select Skill and how proficient are you ");
    }
  };

  //========================================================================
  //========================================================================
  //========================================================================
  //========================================================================
  //========================================================================
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Create Profile</Text>
        </View>

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

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        {/* =========================Experience =========================== */}

        <View style={styles.selectProfilePictureButton}>
          <Text style={styles.headingStyle}>Click here to add Experience </Text>
          <TouchableOpacity style={styles.add} onPress={ExperienceVisible}>
            <Text style={styles.expandIcon}>
              {isExperienceViewVisible ? "-" : "+"}
            </Text>
          </TouchableOpacity>
        </View>
        {isExperienceViewVisible && (
          <View>
            <Text style={styles.headingStyle}>Experience</Text>
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              onChangeText={(value) => setCompany(value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Position"
              onChangeText={(value) => setPosition(value)}
              id=""
            />
            <TextInput
              style={styles.input}
              placeholder="From - To eg.(2000 Jan - 2002 Dec)"
              onChangeText={(value) => setDuration(value)}
            />
            {WorkInforArray.map((data, index) => (
              <View key={index} style={styles.skillStyles}>
                <View style={styles.selectProfilePictureButton}>
                  <View>
                    <Text style={styles.headingStyle}>
                      Experience : {index + 1}
                    </Text>
                    <Text>Company Name : {data.company}</Text>
                    <Text>Position: {data.position}</Text>
                    <Text style={{ marginBottom: 5 }}>
                      Period : {data.duration}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => ExperienceHandleDelete(index)}
                  >
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.Button} onPress={SaveWorkArray}>
              <Text>Save Experience</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* =========================Education =========================== */}

        <View style={styles.selectProfilePictureButton}>
          <Text style={styles.headingStyle}>Click here to add education </Text>

          <TouchableOpacity style={styles.add} onPress={viewHidden}>
            <Text style={styles.expandIcon}>
              {isEducationViewVisible ? "-" : "+"}
            </Text>
          </TouchableOpacity>
        </View>
        {isEducationViewVisible && (
          <View>
            <Text style={styles.headingStyle}>Education</Text>
            <TextInput
              style={styles.input}
              placeholder="University"
              onChangeText={(value) => setVarsity(value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Qualification"
              onChangeText={(value) => setQualification(value)}
            />
            <TextInput
              style={styles.input}
              placeholder="From - To eg.(2000 Jan - 2002 Dec)"
              onChangeText={(value) => setPeriod(value)}
            />

            {EducationInforArray.map((data, index) => (
              <View key={index} style={styles.skillStyles}>
                <View style={styles.selectProfilePictureButton}>
                  <View>
                    <Text style={styles.headingStyle}>
                      Educationnal background : {index + 1}
                    </Text>
                    <Text>Varsity Name : {data.varsity}</Text>
                    <Text>Qualification: {data.qualification}</Text>
                    <Text style={{ marginBottom: 5 }}>
                      Period : {data.period}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => EducationHandleDelete(index)}
                  >
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity
              style={styles.Button}
              onPress={SaveEducationArray}
            >
              <Text>Save Education</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.selectProfilePictureButton}>
          <Text style={styles.headingStyle}>Click here to add a Skill </Text>
          <TouchableOpacity style={styles.add} onPress={SkillVisible}>
            <Text style={styles.expandIcon}>
              {isSkillsViewVisible ? "-" : "+"}
            </Text>
          </TouchableOpacity>
        </View>
        {isSkillsViewVisible && (
          <View>
            <Text style={styles.headingStyle}>Skills</Text>
            <TextInput
              style={styles.input}
              placeholder="Skill"
              onChangeText={(value) => setSkill(value)}
            />
            <View style={{ width: 340, marginBottom: 15 }}>
              <SelectList
                setSelected={(value) => setProficiency(value)}
                data={skillProficiency}
              />
            </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={skills}
              dotsx
              renderItem={({ item }) => (
                <View style={styles.skillStyle} key={item}>
                  <Text style={styles.skillText}>Skill Name: {item.skill}</Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => SkillHandleDelete(item.skill)}
                  >
                    <AntDesign name="delete" size={15} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ columnGap: 8 }}
              horizontal
              numberOfLines={2}
            />
            <TouchableOpacity style={styles.Button} onPress={SaveSkill}>
              <Text> Save Skill</Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.label}>Professional Summary</Text>
        <TextInput
          style={styles.TextArea}
          value={professionalSummary}
          onChangeText={setProfessionalSummary}
          multiline
        />
        {/* ============================================================== */}
        <TouchableOpacity
          style={styles.selectProfilePictureButton}
          onPress={handleSelectProfilePicture}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Feather name="upload" size={24} color="black" />
            <Text style={styles.label}>
              {profilePicture ? "Uploaded" : " Upload picture"}
            </Text>
          </View>

          <Text style={styles.label}>
            {profilePicture ? (
              <FontAwesome name="picture-o" size={24} color="black" />
            ) : (
              " "
            )}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateProfile;
