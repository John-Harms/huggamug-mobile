import { View, StyleSheet } from "react-native";

function ScreenContainer({ children }) {
  return <View style={styles.mainContainer}>{children}</View>;
}

export default ScreenContainer;

const styles = StyleSheet.create({
  mainContainer: {
    width: "86%",
    height: "82%",
    borderColor: "Black",
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "grey",
    backgroundColor: "white",
    padding: "4%",
  },
});
