import { TouchableOpacity, Text, StyleSheet } from "react-native";

function NavButton({ children, buttonFunction, choose}) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => buttonFunction(choose)}
    >
      <Text> {children} </Text>
    </TouchableOpacity>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: "red",
    borderWidth: 3,
  },
});
