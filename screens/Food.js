import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import FoodContainer from "../components/FoodContainer";
import foodPicLocations from "../constants/foodPicLocations";

function Food() {
  const foodScreenContent = [
    {
      content: (
        <View>
          <Text>Breakfast</Text>
        </View>
      ),
      id: "pageHeader",
    },
    {
      content: (
        <View>
          <FoodContainer
            itemName={"GAS OMELETTE"}
            itemPrice={"1"}
            pictureSrc={foodPicLocations["denver.png"]}
          />
          <FoodContainer
            itemName={"AMAZING BURRITO"}
            itemPrice={"24.99"}
            pictureSrc={foodPicLocations["breakfastBurrito.png"]}
          />
          <FoodContainer
            itemName={"GAS OMELETTE"}
            itemPrice={"1"}
            pictureSrc={foodPicLocations["denver.png"]}
          />
          <FoodContainer
            itemName={"AMAZING BURRITO"}
            itemPrice={"24.99"}
            pictureSrc={foodPicLocations["breakfastBurrito.png"]}
          />
        </View>
      ),
      id: "content2",
    },
  ];

  return (
    <ScreenContainer>
      <FlatList
        data={foodScreenContent}
        renderItem={({ item }) => {
          return item.content;
        }}
        keyExtractor={(item) => item.id}
      />
    </ScreenContainer>
  );
}

export default Food;

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
    backgroundColor: "rgb(213, 213, 213)",
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
