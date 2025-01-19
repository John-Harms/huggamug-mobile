import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../constants/Colors";

function FoodContainer({pictureSrc, itemName, itemPrice}) {

  return (
    <View style={styles.foodContainer}>
      <Image
        source={pictureSrc}
        style={styles.foodPic}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.itemNameText}>{itemName}</Text>
        <Text style={styles.itemPriceText}>Price: ${itemPrice}</Text>
      </View>
    </View>
  );
}

export default FoodContainer;

const styles = StyleSheet.create({
  foodContainer: {
    alignItems: "center",
    marginTop: "8%",
  },
  foodPic: {
    width: 220,
    height: 220,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "grey",
  },
  infoContainer: {
    backgroundColor: colors.lightGrey,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingHorizontal: 20,
  },
  itemNameText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  itemPriceText: {
    textAlign: "center",
  },
});
