import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import FoodContainer from "../components/FoodContainer";
import foodPicLocations from "../constants/foodPicLocations";
import colors from "../constants/Colors";
import Icon from "react-native-vector-icons/AntDesign";
import DropDownContainer from "../components/DropDownContainer";

function Food() {
  const foodScreenContent = [
    {
      content: (
        <DropDownContainer dropDownName={"Breakfast"}>
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
        </DropDownContainer>
      ),
      id: "pageHeader",
    },
    {
      content: <Text>Nothing For Now!</Text>,
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

export const styles = StyleSheet.create({});
