import { View, Text, StyleSheet, FlatList } from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import Colors from "../constants/Colors";

function HomeScreen() {
  const homeScreenContent = [
    {
      content: (
        <View style={styles.pageTitle}>
          <Text style={styles.titleText}>WOW HEIDI'S APP!! YAY! </Text>
        </View>
      ),
      id: "pageHeader",
    },
    {
      content: (
        <View>
          <Text style={styles.pageText}>
            Welcome to Heidi's, home to some of the coolest people in the LC
            area. Maybe you know us for our good breakfast. Maybe you know us
            for our good coffees. MAYBE...just maybe you know us because of our
            wonderful cooks: LAURA, EVAN, ISABELLA, KRISTIN, and HALLIE. Want a
            DRINK, or maybe a FOOD? Well luckily, this app has
            BOTH!!!!!!!!!!!!!!!!
          </Text>
        </View>
      ),
      id: "content2",
    },
  ];

  return (
    <ScreenContainer>
      <FlatList
        data={homeScreenContent}
        renderItem={({ item }) => {
          return item.content;
        }}
        keyExtractor={(item) => item.id}
      />
    </ScreenContainer>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  pageTitle: {
    borderColor: Colors.primary,
    borderWidth: 3,
    alignItems: "center",
    borderRadius: 18,
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    paddingVertical: "4%",
  },
  pageText: {
    color: "black",
    fontSize: 22,
    padding: "8%",
    marginVertical: "8%",
    borderColor: "grey",
    borderWidth: 4,
    borderRadius: 20,
  },
});
