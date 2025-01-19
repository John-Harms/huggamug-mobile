import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import colors from "../constants/Colors";
import { useState } from "react";

function DropDownContainer({ children, dropDownName }) {
  const [buttonStatus, setButtonStatus] = useState(0);

  function dropDownHandler() {
    setButtonStatus(1 - buttonStatus); // Toggle between 0 and 1
  }

  return (
    <View style={styles.rootView}>
      <View style={styles.dropDownContainer}>
        <View style={styles.dropDownTextView}>
          <Text style={styles.dropDownText}>{dropDownName}</Text>
        </View>
        <View style={styles.dropDownButtonView}>
          <TouchableOpacity
            style={styles.dropDownButton}
            onPress={dropDownHandler}
          >
            <Icon name="down" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {buttonStatus === 0 ? (
          <View />
        ) : (
          <View style={styles.dropDownView}>{children}</View>
        )}
      </View>
    </View>
  );
}

export default DropDownContainer;

const styles = StyleSheet.create({
  rootView: {
    alignItems: "center",
  },
  dropDownView: {
    backgroundColor: colors.lightGrey,
    width: "90%",
    paddingHorizontal: "4%",
    borderColor: "grey",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  dropDownContainer: {
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    paddingHorizontal: "8%",
    paddingVertical: "4%",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 8,
    width: 280,
  },
  dropDownTextView: {
    flex: 0.8,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "left",
    height: 50,
  },
  dropDownText: {
    color: "black",
    fontWeight: "bold",
    // backgroundColor: 'grey',
    fontSize: 28,
  },
  dropDownButtonView: {
    flex: 0.3,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  dropDownButton: {
    backgroundColor: "black",
    width: 45,
    height: 45,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    width: 40,
    height: 40,
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
