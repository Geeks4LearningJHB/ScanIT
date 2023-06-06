import { StyleSheet } from "react-native";

const ExternalStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "90%",
    margin: 5,
    paddingBottom: "5%",
    paddingTop: "5%",
    backgroundColor: "gray",
    borderRadius: 10,
  },
  Input: {
    marginBottom: 20,
    width: "65%",
    height: 40,
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    paddingStart: "2%",
    backgroundColor:"white"
  },
  LogoView: {
    alignItems: "center",
    width: 150,
    height: 150,
    justifyContent: "center",
    backgroundColor: "darkseagreen",
    boxShadow:
    "0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 100,
    marginBottom: 35,
    marginTop:20

  },
  Button: {
    marginBottom: 20,
    marginTop: 10,
    width:150,
    height: 40,
    backgroundColor: "darkseagreen",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
    alignItems: "center",
    paddingTop: 10,
    textTransform: "uppercase",
    marginStart: 10,
  },
  headingStyle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
    marginEnd: 3,
    marginStart: 3,
    fontWeight: "bold",
  },
});
export default ExternalStyles;
