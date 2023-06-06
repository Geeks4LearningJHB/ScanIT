import { StyleSheet } from "react-native";

const ExternalStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "95%",
    margin: 5,
    paddingBottom: "5%",
    paddingTop: "5%",
    backgroundColor: "#F0EEED",
    borderRadius: 10,
  },
  //================================= Sign Up ============================
  Input: {
    marginBottom: 20,
    width: "35%",
    height: 40,
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    paddingStart: "2%",
    backgroundColor: "white",
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
    marginBottom: 55,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#000",
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  searchIconbtn: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
  Button: {
    marginBottom: 20,
    marginTop: 10,
    width: 150,
    height: 40,
    backgroundColor: "darkseagreen",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    alignItems: "center",
    paddingTop: 10,
    textTransform: "uppercase",
    marginStart: 10,
  },
  headingStyle: {
    fontFamily: "Roboto",
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: 8,

    fontWeight: "bold",
  },
  //============================ View Profile ======================================
  heading: {
    fontSize: "35px",
    fontWeight: "bold",
    margin: 10,
    fontWeight: "bolder",
    alignSelf: "center",
  },
  card: {
    flex: 2,
    flexDirection: "row",
    width: 310,
    marginBottom: 5,
    borderRadius: 5,
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
  },
  search: {
    flex: 1,
    backgroundColor: "gray",
    position: "sticky",
    top: 0,
    borderBottomLeftRadius: 5,
    width: "100%",
    marginBottom: 5,
    borderRadius: 5,
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25),0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 5,
  },
  textView: {
    margin: 10,
    padding: 10,
  },
  name: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  btnContainer: {
    width: 50,
    height: 30,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#F0EEED",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ExternalStyles;
