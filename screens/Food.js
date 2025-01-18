import { View, Text, StyleSheet } from "react-native";

function Food() {
    return(
        <View style={styles.mainContainer}>
            <Text>FOOD SCREEN!!!!!!</Text>
          </View>
    );
}

export default Food;

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: 'Black',
        borderWidth: 4
    }
})