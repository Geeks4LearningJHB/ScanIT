import { StyleSheet } from "react-native";

const ExternalStyles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 25,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
  },
  logo: {
    flex: 2,
    height: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
 
  controlls: {
    flex: 4,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    marginBottom: 20,
  },
  helloText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    borderColor: "black",
    borderRadius: 10,
    width: 250,
    marginBottom: 20,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#C0C0C0",
  },
  savebutton: {
    backgroundColor: "#FFAF42",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: "30%",
    width: "40%",
    alignItems: "center",
  },
  uploadbutton: {
    backgroundColor: "#4CC713",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: "30%",
    width: "40%",
    alignItems: "center",
  },
  welcomeText: { fontSize: 18 },
  newText: { fontSize: 18 },
  accountText: {
    fontSize: 18,
    fontWeight: "Bold",
    color: "#FFAF42",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  image: {
    borderRadius: 50,
    width: 90,
    height: 90,
    margin: 10,
    marginTop: 20,
  },
    image: (opacity) => ({
    width: 100,
    height: 100,
    margin:10,
    marginTop: 20,
    opacity,
    borderRadius: 50,
  }),

  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  skillItem: {
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  skillItemActive: {
    backgroundColor: "#007bff",
  },
  skillText: {
    color: "#333",
  },
  selectProfilePictureButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  profilePicture: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  Button: {
    backgroundColor: "#FFAF42",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    // marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  informationContainer: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
  card: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
  },
});
export default ExternalStyles;
