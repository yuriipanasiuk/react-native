import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground,   TouchableWithoutFeedback,
  Keyboard } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/Photo-BG.jpg")}
      >
        <RegistrationScreen />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
 </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
