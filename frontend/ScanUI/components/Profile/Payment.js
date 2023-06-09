import { View, StyleSheet } from "react-native";
import { StripeProvider, CardField } from "@stripe/stripe-react-native";
import { Button } from "react-native-paper";

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51AROWSJX9HHJ5bycpEUP9dK39tXufyuWogSUdeweyZEty3LC7M8yc5d9NlQ96fRCVL0BlAu7Nqt4V7N5xZjJnrkp005fDiTMIr">
      <View style={styles.container}>
        <CardField
          postalCodeEnabled={false}
          autofocus
          style={styles.cardField}
          cardStyle={{
            textColor: "#1c1c1c",
          }}
        />
        <Button>Pay</Button>
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  cardField: {
    height: 50,
  },
});
