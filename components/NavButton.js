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
    flex: 1,
    alignItems: 'center',
    borderColor: "grey",
    borderWidth: 3,
    padding: "3%",
    marginHorizontal: "4%",
    backgroundColor: 'white',
    borderRadius: 10,
    width: "2%",
    marginBottom: "4%"
  },
});
