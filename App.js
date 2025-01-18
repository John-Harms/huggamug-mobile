import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import NavButton from "./components/NavButton";
import HomeScreen from "./screens/HomeScreen";
import Drinks from "./screens/Drinks";
import Food from "./screens/Food";
import Colors from "./constants/colors/colors";

export default function App() {
  const [chosenScreen, setChosenScreen] = useState("home");

  function buttonFunction(choice) {
    setChosenScreen(choice);
    console.log("Button Pressed!");
  }

  const renderScreen = () => {
    switch (chosenScreen) {
      case "home":
        return <HomeScreen />;
      case "drinks":
        return <Drinks />;
      case "food":
        return <Food />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <NavButton buttonFunction={buttonFunction} choose={"home"}>
          {" "}
          Button 1!{" "}
        </NavButton>
        <NavButton buttonFunction={buttonFunction} choose={"drinks"}>
          {" "}
          Button 2!{" "}
        </NavButton>
        <NavButton buttonFunction={buttonFunction} choose={"food"}>
          {" "}
          Button 3!{" "}
        </NavButton>
      </View>
      {renderScreen()}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 40,
  },
});
