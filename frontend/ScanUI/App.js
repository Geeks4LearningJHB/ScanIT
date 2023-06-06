import { StyleSheet, Text, View } from "react-native";
import CreateProfile from "./components/Profile/CreateProfile";

export default function App() {
  return (
    <View style={styles.container}>
      {/* TODO testing on create profile */}
      <CreateProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
